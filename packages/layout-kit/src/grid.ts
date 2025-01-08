import { Plugin, Root, Rule, Input } from 'postcss';

// Breakpoint configurations
export const breakpoints = {
  'xs': '320px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  'xxl': '1920px'
};

// Generate grid column utilities
export function gridColumns(columns: number): Record<string, Record<string, string>> {
  return {
    [`&-cols-${columns}`]: {
      'grid-template-columns': `repeat(${columns}, minmax(0, 1fr))`
    }
  };
}

// Generate responsive grid column utilities
export function responsiveGridColumns(): Record<string, Record<string, Record<string, string>>> {
  return Object.entries(breakpoints).reduce((acc, [breakpoint, size]) => {
    acc[`@media (min-width: ${size})`] = {
      ...Object.fromEntries(
        [1, 2, 3, 4, 6, 12].map(cols => [
          `.${breakpoint}:grid-cols-${cols}`, 
          { 'grid-template-columns': `repeat(${cols}, minmax(0, 1fr))` }
        ])
      )
    };
    return acc;
  }, {} as Record<string, Record<string, Record<string, string>>>);
}

// Generate gap utilities
export function gridGap(): Record<string, Record<string, string>> {
  const gaps = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32];
  return Object.fromEntries(
    gaps.map(gap => [`&-${gap}`, { 'gap': `${gap * 0.25}rem` }])
  );
}

// Generate column span utilities
export function columnSpan(): Record<string, Record<string, string>> {
  return Object.fromEntries(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(span => [
      `&-span-${span}`, 
      { 'grid-column': `span ${span} / span ${span}` }
    ])
  );
}

// Generate flex utilities
export function flexUtilities(): Record<string, Record<string, string>> {
  return {
    '.flex': { 'display': 'flex' },
    '.flex-row': { 'flex-direction': 'row' },
    '.flex-col': { 'flex-direction': 'column' },
    '.flex-wrap': { 'flex-wrap': 'wrap' },
    '.flex-nowrap': { 'flex-wrap': 'nowrap' },
    '.justify-center': { 'justify-content': 'center' },
    '.justify-between': { 'justify-content': 'space-between' },
    '.items-center': { 'align-items': 'center' }
  };
}

// Generate responsive spacing utilities
export function responsiveSpacing(): Record<string, Record<string, string>> {
  const spacings = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32];
  
  return {
    // Margin utilities
    ...Object.fromEntries(
      spacings.map(space => [
        `.m-${space}`, 
        { 'margin': `${space * 0.25}rem` }
      ])
    ),
    // Padding utilities
    ...Object.fromEntries(
      spacings.map(space => [
        `.p-${space}`, 
        { 'padding': `${space * 0.25}rem` }
      ])
    )
  };
}

// Main grid plugin for PostCSS
export function gridPlugin(): Plugin {
  return {
    postcssPlugin: 'technway-grid',
    Once(root: Root) {
      // Create a dummy input if root.source.input is undefined
      const input: Input = root.source?.input || new Input('');

      // Create a new Rule using PostCSS Rule constructor
      const gridUtilities = new Rule({ 
        selector: '.grid-utilities',
        source: {
          start: { 
            line: 1, 
            column: 1, 
            offset: 0 
          },
          end: { 
            line: 1, 
            column: 1, 
            offset: 0 
          },
          input: input
        }
      });

      // Add any generated grid utility declarations here
      // gridUtilities.append(/* your grid utility declarations */);

      root.append(gridUtilities);
    }
  };
}

// Ensure the plugin is recognized by PostCSS
gridPlugin.postcss = true;

// Export types for external use
export type Breakpoint = keyof typeof breakpoints;
export type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32;
