import fs from 'fs/promises';
import path from 'path';
import {
    getComponentByTagName,
    getDirectoriesByPathAsync,
    getPropNamesByComponent,
    getPropsArrayByComponent,
    getRootDir,
    getScriptTemplate,
    logError,
    logInfo,
    logSuccess
} from "./utils/utils.mjs";

async function getTemplateContent(componentTag) {
    try {
        const templatePath = path.join(getRootDir(), 'scripts', 'templates', 'validate-components-props.txt');

        const component = getComponentByTagName(componentTag);
        if (!component) {
            logError(`Component ${componentTag} not found.`);
            return null;
        }

        const props = getPropsArrayByComponent(component);
        const propsNames = getPropNamesByComponent(component);
        const propsValuesForArgs = propsNames.map(name => `this.${name}`).join(', ');

        const content = getScriptTemplate(templatePath)
            .replace(/PROPS_ARRAY/g, JSON.stringify(props, null, 2))
            .replace(/PROPS_NAMES_FOR_ARGS/g, propsValuesForArgs)
            .replace(/COMPONENT_TAG/g, componentTag);

        return content;
    } catch (error) {
        logError(`Error generating template content for ${componentTag}: ${error.message}`);
        return null;
    }
}

async function processComponentsByTags(componentTags, componentsPath) {
    for (const componentTag of componentTags) {
        try {
            const componentDir = path.join(componentsPath, componentTag);

            // Check if component directory exists
            try {
                await fs.access(componentDir);
            } catch {
                logError(`Component directory for ${componentTag} does not exist.`);
                continue;
            }

            // Create "utils" directory inside the component's folder if it doesn't exist
            const outputDir = path.join(componentDir, 'utils');
            await fs.mkdir(outputDir, { recursive: true });
            logInfo(`Created/verified utils directory for ${componentTag}`);

            // Create or overwrite the "validate-props.ts" file with generated content
            const outputFile = path.join(outputDir, `${componentTag}-validate-props.ts`);
            const content = await getTemplateContent(componentTag);
            if (content) {
                await fs.writeFile(outputFile, content, 'utf-8');
                logSuccess(`Created/updated "${componentTag}-validate-props.ts" for ${componentTag}`);
            }
        } catch (error) {
            logError(`Error processing component ${componentTag}: ${error.message}`);
        }
    }
}

async function generateValidations(targetComponents = 'all') {
    const componentsPath = path.join(getRootDir(), 'src', 'components');
    try {
        if (targetComponents === 'all') {
            const directories = await getDirectoriesByPathAsync(componentsPath);
            await processComponentsByTags(directories, componentsPath);
        } else {
            await processComponentsByTags(targetComponents, componentsPath);
        }
    } catch (error) {
        logError(`Error generating validations: ${error.message}`);
    }
}

const targetComponents = process.argv[2] ? process.argv[2].split(',') : 'all';
generateValidations(targetComponents);
