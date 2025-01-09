const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const json = require('@rollup/plugin-json');
const path = require('path');

module.exports = {
    input: {
        Button: 'src/components/Button/Button.tsx',
        Card: 'src/components/Card/Card.tsx',
    },
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            entryFileNames: '[name]/[name].js',
            sourcemap: true,
            exports: 'auto',
        },
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name]/[name].esm.js',
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
