import fs from 'fs';
import path from 'path';
import { getDirectoriesByPathAsync, getRootDir } from "./utils/utils.mjs";

/**
 * Processes multiple components by their tags and creates a "usage" directory and file for each.
 * @param {Array} componentTags - Array of component tags.
 * @param {string} componentsPath - The path to the components directory.
 */
async function processComponentsByTags(componentTags, componentsPath) {
    for (const componentTag of componentTags) {
        const componentDir = path.join(componentsPath, componentTag);

        if (!fs.existsSync(componentDir)) {
            console.error(`Component directory for ${componentTag} does not exist.`);
            continue;
        }

        // Create "usage" directory inside the component's folder if it doesn't exist
        const usageDir = path.join(componentDir, 'usage');
        if (!fs.existsSync(usageDir)) {
            fs.mkdirSync(usageDir, { recursive: true });
            console.log(`Created usage directory for ${componentTag}`);
        }

        // Create a usage file named after the component tag inside the "usage" folder
        const usageFilePath = path.join(usageDir, `${componentTag}-usage.md`);
        if (!fs.existsSync(usageFilePath)) {
            fs.writeFileSync(usageFilePath, '', 'utf-8');
            console.log(`Created usage file for ${componentTag}`);
        }
    }
}

/**
 * Main function to set up the component directory and process components.
 * @param {Array|string} targetComponents - Array of component tags or 'all'.
 */
async function generateComponentsUsage(targetComponents = 'all') {
    const componentsPath = path.join(getRootDir(), 'src', 'components');

    if (targetComponents === 'all') {
        const directories = await getDirectoriesByPathAsync(componentsPath);
        await processComponentsByTags(directories, componentsPath);
    } else {
        await processComponentsByTags(targetComponents, componentsPath);
    }
}

const targetComponents = process.argv[2] ? process.argv[2].split(',') : 'all';
generateComponentsUsage(targetComponents);