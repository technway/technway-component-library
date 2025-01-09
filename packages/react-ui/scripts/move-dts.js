const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const componentsDir = path.join(distDir, 'components');

// Check if components directory exists
if (!fs.existsSync(componentsDir)) {
    console.log('No components directory found. Nothing to move.');
    process.exit(0);
}

// Move `.d.ts` files to corresponding directories in `dist`
const moveDeclarationFiles = () => {
    const componentDirs = fs.readdirSync(componentsDir);

    componentDirs.forEach((componentName) => {
        const componentPath = path.join(componentsDir, componentName);
        const targetPath = path.join(distDir, componentName);

        if (fs.lstatSync(componentPath).isDirectory()) {
            // Ensure target directory exists
            if (!fs.existsSync(targetPath)) {
                fs.mkdirSync(targetPath, { recursive: true });
            }

            // Move all files from component folder to target folder
            const files = fs.readdirSync(componentPath);
            files.forEach((file) => {
                const srcFilePath = path.join(componentPath, file);
                const destFilePath = path.join(targetPath, file);
                fs.renameSync(srcFilePath, destFilePath);
            });
        }
    });

    // Remove the `components` directory
    fs.rmSync(componentsDir, { recursive: true, force: true });
    console.log(`Moved files and cleaned up ${componentsDir}.`);
};

moveDeclarationFiles();
