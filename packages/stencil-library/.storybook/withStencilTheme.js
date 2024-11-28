import { DecoratorHelpers } from '@storybook/addon-themes';

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } = DecoratorHelpers;

export const withStencilTheme = ({ themes, defaultTheme }) => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = useThemeParameters();
    const selected = themeOverride || selectedTheme || defaultTheme;

    // Dynamically load the selected theme's CSS
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.href = themes[selected];
    } else {
      const link = document.createElement('link');
      link.id = 'theme-link';
      link.rel = 'stylesheet';
      link.href = themes[selected];
      document.head.appendChild(link);
    }

    return story();
  };
};
