# Component Development Workflow

This guide outlines the steps for developing, styling, documenting, testing, and deploying components.

## 1. Design and Planning (Using Figma) *(Optional)*

- Begin by designing the component in Figma.
- Consider user interactions, component states, and accessibility.
- Share the design with stakeholders for feedback and approval.

## 2. Create Component (Stencil.js)

- Scaffold a new component using Stencil.js with the `npm run g` command.
- Ensure the component is modular and reusable.

## 3. Style Component

- Apply styles using CSS and PostCSS.
- Use utility classes where possible to maintain consistency.
- Consider theming and responsive design.
- Utilize CSS logical properties for better adaptability.
- Test the component's appearance across different screen sizes.

## 4. Review and Refactor

- Review the component code for best practices and optimization.
- Refactor any inefficient code or structure.
- Conduct a peer review to catch any overlooked issues.

## 5. Document Component (Storybook)

Learn how in the [documentation guide](./documentation.md).

**5.1 Create MDX Documentation**
**5.2 Create Stories**

## 6. Test Component

### 6.1 Unit Testing (Stencil.js)

- Write unit tests for the component using Stencil’s testing utilities.
- Test all methods, properties, and rendered output.
- Aim for high coverage with high-quality tests.

### 6.2 Integration Testing (Stencil.js)

- Write integration tests to ensure components work together as expected.
- Simulate real-world scenarios to validate the component's behavior.
- Test component interactions with parent and sibling components.

### 6.3 End-to-End (E2E) Testing (Stencil.js)

- Write E2E tests to validate the full functionality of the component.
- Use Stencil’s E2E testing framework to simulate user interactions.
- Ensure the component performs well across different environments.

### 6.4 Visual Testing (Storybook using Chromatic)

- Use Chromatic to capture visual snapshots of your components.
- Automatically detect any visual regressions after changes.
- Review and approve changes to maintain visual consistency.

### 6.5 Accessibility (a11y) Testing (Storybook using a11y addon)

- Use the Storybook a11y addon to check the component’s accessibility.
- Ensure the component meets WCAG standards.
- Address any a11y issues before deployment.

## 7. Deploy and Share

- Build the Storybook with the command `npm run build:sb`.
- Deploy the Storybook using Vercel with the `npm run deploy` command.
