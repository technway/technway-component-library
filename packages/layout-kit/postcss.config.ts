import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import { gridPlugin } from './src/grid';

const config = {
  plugins: [
    gridPlugin(),
    postcssImport(),
    postcssNested(),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    cssnano({
      preset: 'default'
    })
  ]
};

export default config;
