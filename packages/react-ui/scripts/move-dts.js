const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const json = require('@rollup/plugin-json');

module.exports = {
    input: {
        Button: 'src/components/Button/Button.tsx',
        Card: 'src/components/Card/Card.tsx',
        // Add other entry points if needed
    },
    output: [
        {
            dir: 'dist', // Root `dist` directory
            format: 'cjs',
            entryFileNames: (chunkInfo) =>
                chunkInfo.name === 'Button' || chunkInfo.name === 'Card'
                    ? 'components/[name]/[name].js' // Place components inside `components/`
                    : '[name].js', // Other files stay in the root
            sourcemap: true,
            exports: 'auto',
        },
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: (chunkInfo) =>
                chunkInfo.name === 'Button' || chunkInfo.name === 'Card'
                    ? 'components/[name]/[name].esm.js' // Place components inside `components/`
                    : '[name].esm.js', // Other files stay in the root
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
        json(),
        terser(),
    ],
    external: ['react', 'react-dom'],
};
