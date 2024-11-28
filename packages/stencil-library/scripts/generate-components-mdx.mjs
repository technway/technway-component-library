import fs from 'fs';
import path from 'path';
import {
    getRootDir,
    getDirectoriesByPathAsync,
    getScriptTemplate,
    readFileContent,
    logError,
    logInfo,
    toTitleCase,
    mdToMdx
} from './utils/utils.mjs';

/**
 * Processes a single component and generates its MDX file.
 * @param {string} componentTag - The component tag (e.g., 'button', 'accordion').
 * @param {string} componentsPath - The path to the components directory.
 */
const processComponent = async (componentTag, componentsPath) => {
    try {
        const templatePath = path.join(getRootDir(), 'scripts', 'templates', 'generate-components-mdx.txt');
        const componentDir = path.join(componentsPath, componentTag);
        const componentDocsDir = path.join(componentDir, 'docs');
        const docsFilePath = path.join(componentDocsDir, `${componentTag}.md`);

        if (!fs.existsSync(docsFilePath)) {
            logError(`Docs file not found for component: ${componentTag}`);
            return;
        }

        const docsContent = readFileContent(docsFilePath);
        const processDocsContent = mdToMdx(docsContent);

        const storiesDir = path.join(componentDir, 'stories');
        const outputFileDir = path.join(storiesDir, `${componentTag}.mdx`);

        // Ensure the 'stories' directory exists and create it recursively if necessary
        if (!fs.existsSync(storiesDir)) {
            fs.mkdirSync(storiesDir, { recursive: true });
        }

        const storiesFilePath = path.join(storiesDir, `${componentTag}.stories.tsx`);
        const storiesImport = fs.existsSync(storiesFilePath)
            ? `import * as stories from './${componentTag}.stories';`
            : '';

        const componentName = toTitleCase(componentTag.replace('tnw-', ''));

        const mdxContent = getScriptTemplate(templatePath)
            .replace(/STORIES_IMPORT/g, storiesImport)
            .replace(/MDX_CONTENT/g, processDocsContent)
            .replace(/COMPONENT_NAME/g, componentName);

        fs.writeFileSync(outputFileDir, mdxContent, 'utf-8');
        logInfo(`Generated MDX file for ${componentTag}`);
    } catch (error) {
        logError(`Failed to process component: ${componentTag}. Error: ${error.message}`);
    }
};

/**
 * Processes multiple components by their tags.
 * @param {Array} componentTags - Array of component tags.
 * @param {string} componentsPath - The path to the components directory.
 */
async function processComponentsByTags(componentTags, componentsPath) {
    for (const componentTag of componentTags) {
        const componentDir = path.join(componentsPath, componentTag);
        if (!fs.existsSync(componentDir)) {
            logError(`Component ${componentTag} does not exist!`);
            continue;
        }
        await processComponent(componentTag, componentsPath);
    }
}

/**
 * Main function to generate MDX files for one or more components.
 * @param {Array|string} targetComponents - Array of component tags or 'all'.
 */
async function generateComponentsMdx(targetComponents) {
    const componentsPath = path.join(getRootDir(), 'src', 'components');

    if (targetComponents === 'all') {
        const directories = await getDirectoriesByPathAsync(componentsPath);
        await processComponentsByTags(directories, componentsPath);
    } else {
        await processComponentsByTags(targetComponents, componentsPath);
    }
}

/**
 * Gets the target components from command line arguments or throws an error if invalid.
 * @returns {Array|string} - Returns an array of component tags or 'all'.
 */
function getTargetComponents() {
    const target = process.argv[2];
    if (!target) {
        logError('No components specified. Use "all" for all components, or specify a component tag.');
        process.exit(1);
    }

    return target === 'all' ? 'all' : target.split(',');
}

generateComponentsMdx(getTargetComponents());
