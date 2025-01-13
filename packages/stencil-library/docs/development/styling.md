    ---------------------
    ⚠️ OUT DATED
    ---------------------
## Styling with PostCSS

### Transition from Sass to PostCSS

Initially, the Technway Design System project utilized Sass for styling. However, as the project evolved, the need for more advanced features and better integration with modern tooling led to the transition to PostCSS. PostCSS offers a robust plugin ecosystem that allows for greater flexibility and power in managing and transforming CSS.

### PostCSS in the Project

The project leverages PostCSS, specifically using the `@stencil-community/postcss` package, which integrates seamlessly with Stencil.js. PostCSS is configured in the `stencil.config.ts` file, where the necessary plugins are imported and then applied within the `plugins[]` array.

#### Install PostCSS

```
pnpm i -D postcss @stencil-community/postcss postcss-import postcss-each postcss-mixins postcss-nested postcss-for postcss-preset-env cssnano
```


#### PostCSS Configuration

Below is a snippet from the `stencil.config.ts` file showcasing how PostCSS is configured:

```js
import postcss from '@stencil-community/postcss';
import postcssImport from 'postcss-import';
import postcssEach from 'postcss-each';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssFor from 'postcss-for';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

export const config: Config = {
  plugins: [
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
    }),
  ],
};
```

**Important:** Do **not** change the order of the plugins in the `plugins[]` array. The sequence is crucial as some plugins depend on the output of others. Altering this order may lead to errors or unexpected behavior.

### Overview of PostCSS Plugins

Each PostCSS plugin used in the project serves a specific purpose, enhancing the capabilities of CSS:

- **postcss-import**: Allows you to use `@import` statements in your CSS, similar to Sass, to import other CSS files. This is particularly useful for organizing CSS files into smaller, manageable chunks.
- **postcss-each**: Provides the ability to loop over arrays and objects in your CSS, enabling more dynamic and DRY (Don't Repeat Yourself) styling.
- **postcss-mixins**: Enables the use of mixins in your CSS, allowing you to define reusable chunks of styles that can be included in multiple selectors.
- **postcss-nested**: Allows nesting of CSS rules, similar to Sass, which helps in maintaining a clear and hierarchical structure in your stylesheets.
- **postcss-for**: Another plugin that enhances looping capabilities, particularly useful for iterating over a range of values to generate utility classes or other repetitive structures.
- **postcss-preset-env**: Enables you to use modern CSS features by converting them into a form that is compatible with older browsers. It also includes polyfills for custom properties, media queries, and other CSS features.
- **cssnano**: A powerful CSS optimizer that compresses your CSS files, reducing their size for faster loading times in production.

### Usage of PostCSS in the Project

PostCSS is used extensively throughout the project for both global styling and component-specific styles:

- **Global Styling**: Managed in the `src/globals/` directory, where overarching styles, utilities, and themes are defined.
- **Component Styling**: Each component has its own `.pcss` file where component-specific styles are written. These styles can leverage the same PostCSS plugins for consistency and reusability.

### Global Styling Structure

The `src/globals/` directory houses all global styles and utility classes. Below is the directory structure:

```bash
src/globals/
└─ utils/
   ├─ _a11y.pcss
   ├─ _borders.pcss
   ├─ _colors.pcss
   ├─ _layout.pcss
   ├─ _shadows.pcss
   ├─ _spacing.pcss
   └─ _typography.pcss
└─ components-utils.pcss
└─ font-face.pcss
└─ global.pcss
└─ icons.pcss
└─ mixins.pcss
└─ reset.pcss
└─ style.dark.pcss
└─ style.rtl.pcss
└─ utils.css
└─ utils.pcss
└─ variables.defaults.pcss
└─ variables.pcss
```

### Detailed Description of Files

- **`utils/` Directory**: Contains utility classes for accessibility (`_a11y.pcss`), borders (`_borders.pcss`), colors (`_colors.pcss`), layout (`_layout.pcss`), shadows (`_shadows.pcss`), spacing (`_spacing.pcss`), and typography (`_typography.pcss`). These utilities are intended for use across multiple components.
- **`components-utils.pcss`**: This file contains utility classes specifically used within components, providing shared styles across different components.
- **`style.dark.pcss`**: Styles for the dark theme. This file applies specific styling when the dark theme is enabled, ensuring that the design system supports both light and dark modes.
- **`style.rtl.pcss`**: Right-to-left (RTL) styling for languages that require RTL text direction. This file ensures proper layout and text alignment in RTL contexts.
- **`utils.css`**: This file is generated by the `pnpm build:css-utils` script. It compiles the utilities defined in `utils.pcss` and incorporates generated breakpoint utilities. The resulting `utils.css` is then copied using Stencil's copy task for use in the project.
- **`utils.pcss`**: Contains utility classes that are not directly related to individual components. These utilities provide general-purpose styles that can be applied throughout the project.
- **`variables.defaults.pcss`** & **`variables.pcss`**: These files define CSS variables used across the project. `variables.defaults.pcss` contains default values, while `variables.pcss` may override these defaults or provide additional variables.

---

### Challenges and Solutions

During the process of building the Technway Design System with PostCSS, several challenges were encountered. Below is a table of key challenges and their corresponding solutions:

| **Challenge**                                                 | **Solution**                                                                                                                                                                                                                                                                                                     |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Large CSS file with unused styles**                         | To address the issue of a large CSS file with many unused styles, we separated the component-specific utilities from the design system-wide utilities. The utilities for the design system are now made optional, allowing users to import and use them selectively in projects where they are necessary.          |
| **Managing responsive breakpoints and utilities**             | Manually creating media queries for multiple breakpoints and utilities was time-consuming and error-prone. This was solved by developing a custom script in `scripts/css-utils.js` that automatically generates responsive media queries and utilities for each breakpoint. The output is compiled into `utils.css`. |

---

### Best Practices

- **Consistent Use of Variables**: Always use the variables defined in `variables.pcss` and `variables.defaults.pcss` to ensure consistency across the design system. Avoid hardcoding values directly into component styles.
- **Avoid Overriding Plugin Order**: As mentioned earlier, the order of plugins in the PostCSS configuration is crucial. Changing this order can break the build process or lead to unexpected results in your styles.
- **Component-Specific Styling**: While global styles provide a foundation, each component should have its own `*.pcss` file for component-specific styles. This approach ensures that components are modular and their styles are scoped appropriately.
- **Utilize Mixins and Nesting**: PostCSS's mixins and nesting capabilities should be leveraged to keep your styles DRY and maintainable. Use mixins for repetitive style patterns and nesting for a clear hierarchy.