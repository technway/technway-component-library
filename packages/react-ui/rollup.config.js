const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const json = require('@rollup/plugin-json');

// Helper function to dynamically determine output paths
const getOutputPath = (chunkInfo) => {
    const inputFile = chunkInfo.facadeModuleId; // Get the input file path
    const inputDir = path.dirname(inputFile); // Get the input file's directory
    const srcComponentsDir = path.resolve('src/components'); // Path to the components directory

    // Check if the file is inside src/components
    if (inputDir.startsWith(srcComponentsDir)) {
        const relativePath = path.relative(srcComponentsDir, inputDir); // Get relative path to the component
        const componentName = relativePath.split(path.sep)[0]; // Extract the component name
        return `components/${componentName}/${chunkInfo.name}`;
    }
    return chunkInfo.name; // Fallback for non-component files
};

module.exports = {
    input: {
        index: 'src/index.ts',
        Button: 'src/components/Button/Button.tsx',
        Card: 'src/components/Card/Card.tsx'
    },
    output: [
        {
            dir: 'dist', // Root output directory
            format: 'cjs',
            entryFileNames: (chunkInfo) => `${getOutputPath(chunkInfo)}.js`,
            sourcemap: true,
            exports: 'auto',
        },
        {
            dir: 'dist', // Root output directory
            format: 'esm',
            entryFileNames: (chunkInfo) => `${getOutputPath(chunkInfo)}.esm.js`,
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json', // Use the specified tsconfig file
            declaration: true, // Ensure type declarations are emitted
            declarationDir: 'dist', // Ensure declarations are output to the dist folder
        }),
        json(),
        terser(),
    ],
    external: ['react', 'react-dom'],
};
