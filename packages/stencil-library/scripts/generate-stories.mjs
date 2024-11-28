import fs from 'fs';
import path from 'path';
import { logInfo, logError, getRootDir, logSuccess, getScriptTemplate, toTitleCase, logWarning } from './utils/utils.mjs';

// Get the component tag from command-line arguments
const componentTag = process.argv[2];

const componentsPath = path.join(getRootDir(), 'src', 'components');
const storyTemplatePath = path.join(getRootDir(), 'scripts', 'templates', 'generate-stories.txt');

function createStoryFile(componentTag, componentsPath, storyTemplatePath) {
    const componentDir = path.join(componentsPath, componentTag);
    if (!fs.existsSync(componentDir)) {
        logError(`Component ${componentTag} does not exist`);
        return;
    }

    // Ensure the 'stories' directory exists
    const storiesDir = path.join(componentDir, 'stories');
    if (!fs.existsSync(storiesDir)) {
        fs.mkdirSync(storiesDir);  // Create the 'stories' directory if it does not exist
        logSuccess(`Created 'stories' directory for ${componentTag}`);
    }

    const storyFilePath = path.join(storiesDir, `${componentTag}.stories.tsx`);

    if (fs.existsSync(storyFilePath)) {
        logWarning(`Story already exists for ${componentTag}`);
        return;
    }

    const componentName = toTitleCase(componentTag.replace('tnw-', ''));
    const storyTemplate = getScriptTemplate(storyTemplatePath);

    const storyContent = storyTemplate
        .replace(/COMPONENT_TAG/g, componentTag)
        .replace(/COMPONENT_NAME/g, componentName);

    fs.writeFileSync(storyFilePath, storyContent);
    logSuccess(`Story generated for ${componentTag}`);
}

function generateStories(componentTag, componentsPath) {
    if (!componentTag) {
        logError(`Please provide a component tag or 'all'`);
        process.exit(1);
    }

    const components = fs.readdirSync(componentsPath);
    if (componentTag === 'all') {
        logInfo(`Generating stories for all components`);
        components.forEach(component => createStoryFile(component, componentsPath, storyTemplatePath));
    } else {
        if (components.includes(componentTag)) {
            logInfo(`Generating story for ${componentTag}`);
            createStoryFile(componentTag, componentsPath, storyTemplatePath);
        } else {
            logError(`Component ${componentTag} does not exist`);
        }
    }
}

generateStories(componentTag, componentsPath);