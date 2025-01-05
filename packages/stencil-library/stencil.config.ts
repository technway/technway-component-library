import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';
import { postcss } from '@stencil-community/postcss';
import nodePolyfills from 'rollup-plugin-node-polyfills';

/**
 * PostCSS Plugins Imports
 */
import postcssImport from 'postcss-import';
import postcssEach from 'postcss-each';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssFor from 'postcss-for';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

/**
 * Custom Docs Imports
 */
import { JsonDocs } from '@stencil/core/internal';
import * as fs from 'fs';
import * as path from 'path';
import { generateComponentStatistics, generateMarkdownForComponent } from './utils/markdown-utils';
import { generateMarkdownForComponentsIndex } from './utils/markdown-utils';

export const config: Config = {
  namespace: 'stencil-library',
  globalStyle: 'src/globals/global.pcss',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '**/*.{eot,svg,woff,woff2,ttf}',
          dest: "assets/fonts",
          warn: true,
        },
        {
          src: '**/*.{jpg,png}',
          dest: "assets/images",
          warn: true,
        },
        // {
        //   src: 'globals/style.rtl.pcss',
        //   dest: "globals/style.rtl.css",
        //   warn: true,
        // },
        // {
        //   src: 'globals/responsive-utils.css',
        //   dest: "globals/utils.css",
        //   warn: true,
        // },
      ],
    },

    // Docs Start
    {
      type: 'docs-readme',
      // strict: true,
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        docs.components.forEach(component => {
          // Resolve the full path to the component's directory
          const componentDir = path.resolve(__dirname, 'src/components', component.tag, 'docs');

          // Ensure the directory exists; create it if it doesn't
          if (!fs.existsSync(componentDir)) {
            console.warn(`Directory not found, skipping component: ${component.tag}`);
            return;
          }

          const markdownContent = generateMarkdownForComponent(component);
          // Save the markdown file as README.md inside the docs subdirectory of the component
          const outputPath = path.join(componentDir, `${component.tag}.md`);

          fs.writeFileSync(outputPath, markdownContent);
        });
      }
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        const markdownContent = generateMarkdownForComponentsIndex(docs.components);
        const outputPath = './docs/stencil-generated/components-index.md';

        fs.writeFileSync(outputPath, markdownContent);
      }
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        const markdownContent = generateComponentStatistics(docs.components);
        const outputPath = './docs/stencil-generated/components-stats.md';
        fs.writeFileSync(outputPath, markdownContent);
      }
    },
    {
      type: 'docs-json',
      file: './docs/stencil-generated/stencil-docs.json',
    },
    // Docs End

    // {
    //   type: 'www',
    //   serviceWorker: null,
    //   copy: [
    //     {
    //       src: '**/*.{eot,svg,woff,woff2,ttf}',
    //       dest: 'build/assets/fonts',
    //       warn: true,
    //     },
    //     {
    //       src: '**/*.{jpg,png}',
    //       dest: 'build/assets/images',
    //       warn: true,
    //     },
    //     // {
    //     //   src: 'globals/style.rtl.pcss',
    //     //   dest: "build/globals/style.rtl.css",
    //     //   warn: true,
    //     // },
    //     // {
    //     //   src: 'globals/responsive-utils.css',
    //     //   dest: "build/globals/utils.css",
    //     //   warn: true,
    //     // },
    //   ],
    // },

    reactOutputTarget({
      outDir: '../react-library/src/',
      stencilPackageName: '@technway/stencil-library', 
    }),
    reactOutputTarget({
      outDir: '../next-library/src/',
      hydrateModule: '@technway/stencil-library/hydrate',
      stencilPackageName: '@technway/stencil-library',
    }),
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false
    },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  preamble: 'Built with Stencil\nCopyright (c) Tecchnway.biz.',
  plugins: [
    nodePolyfills(),
    postcss({
      plugins: [
        postcssImport(),
        postcssEach(),
        postcssMixins(),
        postcssFor(),
        postcssNested(),
        postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false,
            'custom-properties': false,
            'custom-media-queries': true,
          },
        }),
        cssnano(),
      ]
    })
  ],
  // minifyJs: true,
  // minifyCss: true,
  // hashFileNames: true,
};
