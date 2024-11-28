/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    // '@storybook/addon-interactions',

    '@storybook/addon-a11y',
    '@etchteam/storybook-addon-status',
    "storybook-addon-preview/register",
    "storybook-addon-rtl",
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
};
export default config;
