const fs = require('fs');
const path = require('path');

// Ensure a component name is provided
const componentName = process.argv[2];
if (!componentName) {
    console.error('Error: You must provide a component name.');
    console.error('Usage: npm run generate ComponentName');
    process.exit(1);
}

const componentsDir = path.resolve(__dirname, '../src/components');
const indexFile = path.resolve(__dirname, '../src/index.ts');
const rollupConfigFile = path.resolve(__dirname, '../rollup.config.js');

// Check if components directory exists
if (!fs.existsSync(componentsDir)) {
    console.error('Error: Components directory not found!');
    process.exit(1);
}

// Component directory and file paths
const componentDir = path.join(componentsDir, componentName);
const componentFile = path.join(componentDir, `${componentName}.tsx`);

// Check if the component already exists
if (fs.existsSync(componentDir)) {
    console.error(`Error: Component "${componentName}" already exists!`);
    process.exit(1);
}

// Create component directory and file
fs.mkdirSync(componentDir, { recursive: true });

const componentTemplate = `
import React from 'react';

export interface ${componentName}Props {
    children?: React.ReactNode;
}

const styles = {
    container: {
        padding: '1rem',
        backgroundColor: '#f4f4f4',
        borderRadius: '4px',
        border: '1px solid #ddd',
        textAlign: 'center',
    } as React.CSSProperties,
};

const ${componentName}: React.FC<${componentName}Props> = ({ children }) => {
    return <div style={styles.container}>{children || '${componentName}'}</div>;
};

export default ${componentName};
`.trim();

fs.writeFileSync(componentFile, componentTemplate);
console.log(`Created ${componentFile}`);

// Generate exports for index.ts
const generateIndexExports = () => {
    const componentDirs = fs.readdirSync(componentsDir);
    const exports = [];

    componentDirs.forEach((dirName) => {
        const dirPath = path.join(componentsDir, dirName);
        const tsxFile = path.join(dirPath, `${dirName}.tsx`);

        if (fs.lstatSync(dirPath).isDirectory() && fs.existsSync(tsxFile)) {
            exports.push(
                `export { default as ${dirName} } from './components/${dirName}/${dirName}';`
            );
            exports.push(
                `export type { ${dirName}Props } from './components/${dirName}/${dirName}';`
            );
        }
    });

    fs.writeFileSync(indexFile, exports.join('\n') + '\n');
    console.log(`Updated ${indexFile} with component exports.`);
};

// Generate input for rollup.config.js
const updateRollupConfig = () => {
    const componentDirs = fs.readdirSync(componentsDir);
    const inputs = [];

    componentDirs.forEach((dirName) => {
        const dirPath = path.join(componentsDir, dirName);
        const tsxFile = path.join(dirPath, `${dirName}.tsx`);

        if (fs.lstatSync(dirPath).isDirectory() && fs.existsSync(tsxFile)) {
            inputs.push(`        ${dirName}: 'src/components/${dirName}/${dirName}.tsx',`);
        }
    });

    const rollupConfig = fs.readFileSync(rollupConfigFile, 'utf8');
    const updatedRollupConfig = rollupConfig.replace(
        /input: \{([\s\S]*?)\},/,
        `input: {\n${inputs.join('\n')}\n    },`
    );

    fs.writeFileSync(rollupConfigFile, updatedRollupConfig);
    console.log(`Updated ${rollupConfigFile} with component inputs.`);
};

// Run the update functions
generateIndexExports();
updateRollupConfig();
