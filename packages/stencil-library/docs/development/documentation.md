# Documentation 

## General Guidelines

### Automated or Auto-Generated Files  
Do **not** manually modify any files that are identified as automated or auto-generated. Any changes made directly to these files will be overwritten the next time the corresponding scripts are executed. To make modifications, update the relevant source files and regenerate the files using the appropriate commands.

### Key Points to Remember:
- **Automated Files:** Always update source files and regenerate documentation.
- **Structure Adherence:** Follow the project structure strictly to maintain consistency.
- **Version Control:** Keep track of changes in documentation via version control.

---

## Project Structure

To maintain consistency and organization, each component should adhere to the following structure for documentation-related files:

```
components/
└─ tnw-component/
   ├─ docs/
   │  └─ tnw-component.md
   ├─ stories/
   │  ├─ tnw-component.mdx
   │  └─ tnw-component.stories.tsx
   ├─ usage/
   │  └─ tnw-component-usage.md
   └─ readme.md
```

### File Descriptions:

- **`readme.md`**: 
  - **Purpose**: Automatically generated during the Stencil.js build process. This file serves as the primary documentation for the component.
  - **Note**: **Do not** manually edit this file.

- **`docs/` directory**: 
  - **Purpose**: Automatically populated by a custom script with additional documentation specific to each component.

- **`tnw-component.mdx`**: 
  - **Purpose**: Automatically generated within the `stories/` directory by a custom script. This file integrates the component's documentation with Storybook.

- **`tnw-component.stories.tsx`**: 
  - **Purpose**: Manually created to define custom stories for the component.
  - **Recommendation**: Creating this file is optional but highly recommended.

- **`usage/` directory**: 
  - **Purpose**: Contains the `tnw-component-usage.md` file, which should be manually authored to provide detailed usage instructions and examples.

---

## Stencil.js Documentation

### Automated Files

- **Stencil `docs-custom`**: 
  - **Purpose**: Generates the `components-index.md` file (located in `./src/docs`) and custom documentation for each component (located in the component's `docs/` directory).
  - **Guidance**: Tailored to the design system's needs, these files should not be deleted or modified manually.

- **Stencil `docs-readme`**: 
  - **Purpose**: Automatically provides detailed documentation for each component during the build process.

- **Stencil `docs-json`**: 
  - **Purpose**: Outputs a JSON file (`./docs/stencil-generated/stencil-docs.json`) containing comprehensive metadata for all components in the design system.

### Manual Files

- **Usage Documentation**: 
  - **Purpose**: Each component should include a `usage/` directory with a file named `<component-tag>-usage.md`.
  - **Guidance**: This file must be manually created and maintained. For best practices, refer to the [Usage Documentation Guide](#).

**Important:**  
Do **not** delete or manually modify any of the generated files mentioned above, as doing so may result in errors or inconsistencies. Update the source files and regenerate the documentation to ensure accuracy.

---

## Storybook Documentation

### Automated Files

- **Storybook MDX Files**: 
  - **Purpose**: These `.mdx` files are automatically generated using a custom script (`sb-mdx-generator.js`). The script leverages Stencil.js documentation files to integrate them into Storybook.
  - **Note**: While `.mdx` files are auto-generated, the actual stories are not. Manual creation and customization of stories are required.

### Manual Files

- **Stories**: 
  - **Purpose**: Must be manually created following the guidelines provided in the [Creating Stories](#creating-stories) section to ensure consistency and quality.

---

## Component Usage Documentation

### Guidelines

- **No H1 Titles**: To maintain uniformity, avoid using H1 (`<h1>`) titles in component usage files.
- **Using `@useStory`**: 
  - **Purpose**: The `@useStory` directive should be placed on a separate line, followed by the story name, to render the story along with its code.
  - **Guidance**: Ensure the story is exported in the `<component-tag>-usage.stories.tsx` file. For example, use `@useStory "Default"` to reference the Default story.

---

## Creating Stories

### Step-by-Step Process

1. Generate a stories template using the command `npm run g:stories <component-tag>`. This will create a stories file for the component and inside it, add this code:

   1.1. **Import Necessary Utilities**:
      ```javascript
      import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../../.storybook/utils/utils";
      ```
      - **`generateComponentArgTypes`**: Automatically generates `argTypes` based on the component's documentation.
      - **`getComponentByTagName`**: Retrieves the component's JSON documentation using its tag name.
      - **`getComponentTemplate`**: Generates the component's HTML template based on the provided arguments and the component's definition.

   1.2. **Create a Component Variable**:
      ```javascript
      const component = getComponentByTagName('component-tag');
      ```
      - **Guidance**: Replace `component-tag` with the actual tag of the component being documented.

   1.3. **Export Default Component Settings**:
      ```javascript
      export default {
        title: 'Components/Component Name',
        parameters: {
          actions: { disable: true }, // Disable if the component does not require actions
          status: {
            type: 'beta', // Possible values: 'beta', 'stable', 'deprecated', 'releaseCandidate'
          },
        },
        argTypes: generateComponentArgTypes(component),
      };
      ```
      - **Status**: Clearly indicate the current status of the component (e.g., beta, stable).
      - **`generateComponentArgTypes()`**: Accepts the `component` variable (required) and an optional `includeCustomUtils` boolean.

   1.4. **Create the HTML Template for the Component**:
      ```javascript
      const Template = (args) => getComponentTemplate(args, component);
      ```
      - **Guidance**: The `getComponentTemplate` function generates the HTML template and handles slots and custom utilities. It accepts three arguments: `args`, `component`, and an optional `includeCustomUtils` boolean.

   1.5. **Create the Default Story Using the Template**:
      ```javascript
      export const Default = Template.bind({});
      Default.args = {
        // Default arguments
      };
      ```
      - **Guidance**: Define the default arguments that will be passed to the component in this story.

2. **Handling JSON Arguments**:
   
   When dealing with component props that expect a JSON string, the corresponding argument name must end with `"Json"`. This convention allows to correctly identify and process the argument, ensuring the JSON data is properly handled as part of the component's attributes. 

   For example, in a Storybook story like `tnw-list.stories.tsx` the **Standard** story, if a component expects a prop with JSON data, the argument key should follow this naming pattern. Here's how it can be set up:

   ```javascript
   export const Standard = Template.bind({});
   Standard.args = {
     listDataJson: JSON.stringify([
       { "text": "First item" },
       { "text": "Second item" },
       { "text": "Third item" }
     ]),
   };
   ```

   In the above example:
   - The argument `listDataJson` ends with `"Json"`, signaling that the value is expected to be a serialized JSON string.
   - The `getComponentTemplate` function will recognize this pattern, strip the `"Json"` suffix, and convert the key to kebab-case (i.e., `list-data`), generating the corresponding HTML attribute: `list-data='JSON STRING'`.

3. **Create Additional Stories**:
   ```javascript
   export const StoryExample = Template.bind({});
   StoryExample.args = {
     ...Default.args, // Spread the Default args
     // Override or add new arguments
   };
   ```
   - **Guidance**: Create additional stories by duplicating the Default story and adjusting the arguments as necessary.

4. **Handling Slots**:
   - **Guidance**: To insert elements into slots, use the `<slot-name>Slot` in the `args` object and specify the element with the `slot="slot-name"` attribute.
   - **Example**: 
   ```javascript
   export const StoryWithSlot = Template.bind({});
   StoryWithSlot.args = {
     ...Default.args, // Spread the Default args
     contentSlot: '<p slot="content">Some Content</p>', // Add content to the slot
   };
   ```

    If a slot does not have a name use the `defaultSlot`.
   - **Example**: 
   ```javascript
   export const StoryWithDefaultSlot = Template.bind({});
   StoryWithSlot.args = {
     ...Default.args, // Spread the Default args
     defaultSlot: '<p>Some Content</p>', // Add content to the slot
   };
   ```

---

## Troubleshooting and Common Issues

### Common Problems and Solutions

- **Missing Files**: Ensure all scripts have been run correctly, and check that the project structure is intact.
- **Inconsistent Documentation**: Verify that source files are up to date, first build stencil then re-run the `npm run docs` script.

---

## Final Checklist

Before finalizing your documentation:

- [ ] Have you avoided modifying auto-generated files directly?
- [ ] Did you adhere to the project structure and naming conventions?
- [ ] Are all required stories and usage examples included?
- [ ] Have you tested the documentation for accuracy and completeness?
- [ ] Is the documentation consistent with the guidelines provided?
