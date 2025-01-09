const fs = require('fs');
const path = require('path');

// Ensure a component name is provided
const componentName = process.argv[2];
if (!componentName) {
    console.error('Error: You must provide a component name.');
    console.error('Usage: npm run remove ComponentName');
    process.exit(1);
}

const componentsDir = path.resolve(__dirname, '../src/components');
const indexFile = path.resolve(__dirname, '../src/index.ts');
const rollupConfigFile = path.resolve(__dirname, '../rollup.config.js');

// Component directory path
const componentDir = path.join(componentsDir, componentName);

// Check if the component exists
if (!fs.existsSync(componentDir)) {
    console.error(`Error: Component "${componentName}" does not exist!`);
    process.exit(1);
}

// Remove component directory
const removeComponentDirectory = () => {
    fs.rmSync(componentDir, { recursive: true, force: true });
    console.log(`Removed ${componentDir}`);
};

// Remove exports from `index.ts`
const removeFromIndexExports = () => {
    const indexContent = fs.readFileSync(indexFile, 'utf8');
    const updatedContent = indexContent
        .split('\n')
        .filter(
            (line) =>
                !line.includes(`./components/${componentName}/${componentName}`) // Exclude lines related to the component
        )
        .join('\n');
    fs.writeFileSync(indexFile, updatedContent);
    console.log(`Updated ${indexFile} to remove exports for ${componentName}`);
};

// Remove input from `rollup.config.js`
const removeFromRollupConfig = () => {
    const rollupConfig = fs.readFileSync(rollupConfigFile, 'utf8');
    const inputPattern = new RegExp(`\\s*${componentName}:\\s*'src/components/${componentName}/${componentName}\\.tsx',?\\n?`, 'g');

    const updatedRollupConfig = rollupConfig.replace(inputPattern, '');

    // Ensure proper formatting for the input object
    const formattedConfig = updatedRollupConfig.replace(/,\s*}/, '}'); // Remove trailing commas before `}`

    fs.writeFileSync(rollupConfigFile, formattedConfig);
    console.log(`Updated ${rollupConfigFile} to remove input for ${componentName}`);
};

// Run the cleanup functions
removeComponentDirectory();
removeFromIndexExports();
removeFromRollupConfig();
