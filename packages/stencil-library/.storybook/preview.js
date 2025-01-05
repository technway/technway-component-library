/** @type { import('@storybook/html').Preview } */

import '../dist/stencil-library/stencil-library.css';
import './custom-doc.css';

import { withThemeByClassName } from '@storybook/addon-themes';

import { defineCustomElements } from '../loader';
defineCustomElements();

const preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: (a, b) => {
        const directoryOrder = [
          'Introduction',
          'Getting Started',
          'Releases',
          'Integrations',
          'Theming',
          'CSS Utilities',
          'Tokens',
        ];

        const fileOrder = ['Documentation', 'Overview'];

        // Split the story path by `/` to separate directories and files
        const [firstDirA, secondFileA] = a.title.split('/');
        const [firstDirB, secondFileB] = b.title.split('/');

        // First, compare the directories
        const dirIndexA = directoryOrder.indexOf(firstDirA);
        const dirIndexB = directoryOrder.indexOf(firstDirB);

        if (dirIndexA !== dirIndexB) {
          // If directories differ, sort based on their index in directoryOrder
          return dirIndexA - dirIndexB;
        }

        // If the directories are the same, sort the files within that directory
        const fileIndexA = fileOrder.indexOf(secondFileA);
        const fileIndexB = fileOrder.indexOf(secondFileB);

        // For files that match the fileOrder, use the specified order
        if (fileIndexA !== fileIndexB) {
          return fileIndexA - fileIndexB;
        }

        // For any other files that are not specified in the fileOrder, sort alphabetically
        if (secondFileA && secondFileB) {
          return secondFileA.localeCompare(secondFileB);
        }

        return 0;
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
