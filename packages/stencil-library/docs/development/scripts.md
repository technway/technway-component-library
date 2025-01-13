# Project Scripts Documentation

This documentation provides an overview of the scripts available in the project, including details on what each script does and how it should be used. Please ensure that you have the recommended Node.js and npm versions installed. Check **Setting up the environment** section in the **README.md**.

Additionally, make sure that the necessary packages are installed locally.

---

### Frequently Used Scripts for Creating a New Component

#### Scripts when the component is **not yet implemented**:

```bash
# Generate the component structure
pnpm g:component <tag-name>

# Generate the stories directory and file for Storybook integration
pnpm g:components-stories <tag-name>

# Generate the usage directory and file for documentation purposes
pnpm g:components-usage <tag-name>
```

#### Scripts when the component is **implemented**:

```bash
# Generate the MDX story for the component in Storybook
pnpm g:components-mdx <tag-name>

# Generate validation utilities for the component props
pnpm g:components-validations <tag-name>

# Generate CSS class utilities in the PCSS file based on classes used in the TSX file
pnpm g:components-css-utils <tag-name>
```

## Scripts Overview

### Build and Watch Scripts

- **`build:all`**  
  Runs all the build processes, including building the CSS utilities, running the Stencil.js build, and generating documentation.
  ```bash
  pnpm build:all
  ```

- **`build:stencil`**  
  Executes the Stencil.js build process to compile and bundle components.
  ```bash
  pnpm build:stencil
  ```

- **`build:css-utils`**  
  Runs a Node.js script to build CSS utility classes from a source file.
  ```bash
  pnpm build:css-utils
  ```

- **`build:sb`**  
  Builds the Storybook documentation for deployment.
  ```bash
  pnpm build:sb
  ```

- **`watch:all`**  
  Concurrently watches for changes in CSS utilities, Stencil.js components, and documentation files, rebuilding them as needed.
  ```bash
  pnpm watch:all
  ```

- **`watch:stencil`**  
  Watches for changes in Stencil.js components and rebuilds them automatically.
  ```bash
  pnpm watch:stencil
  ```

- **`watch:docs`**  
  Concurrently watches and regenerates component MDX documentation files when changes are detected.
  ```bash
  pnpm watch:docs
  ```

- **`watch:css-utils`**  
  Uses `nodemon` to watch for changes in the CSS utilities source file (`src/globals/utils.pcss`) and rebuilds the CSS utilities when changes occur.
  ```bash
  pnpm watch:css-utils
  ```

### Development Scripts

- **`dev:all`**  
  Runs all development processes concurrently, including CSS utilities, Stencil.js development build with watch and serve, and documentation generation.
  ```bash
  pnpm dev:all
  ```

- **`dev:stencil`**  
  Starts the Stencil.js development build with live-reload (`watch`) and a local server (`serve`).
  ```bash
  pnpm dev:stencil
  ```

### Testing Scripts

- **`test`**  
  Runs both spec and end-to-end (E2E) tests for the components.
  ```bash
  pnpm test
  ```

- **`test.spec`**  
  Runs only the spec tests.
  ```bash
  pnpm test.spec
  ```

- **`test.e2e`**  
  Runs only the end-to-end (E2E) tests.
  ```bash
  pnpm test.e2e
  ```

- **`test.watch`**  
  Continuously watches for changes and runs both spec and E2E tests.
  ```bash
  pnpm test.watch
  ```

- **`test.coverage`**  
  Runs the spec tests and generates a coverage report.
  ```bash
  pnpm test.coverage
  ```

  And it's used to run spec test for a single file, like that:
  ```bash
  pnpm test.coverage utils
  # OR using a path
  pnpm test.coverage .storybook/utils/
  ```

### Documentation Scripts

- **`docs:comp-mdx`**  
  Generates MDX documentation files for the components using a custom Node.js script.
  ```bash
  pnpm docs:comp-mdx
  ```

- **`docs:comp-index`**  
  Generates a component index file for the documentation using a custom Node.js script.
  ```bash
  pnpm docs:comp-index
  ```

- **`docs`**  
  Runs both the `docs:comp-index` and `docs:comp-mdx` scripts to generate all necessary documentation.
  ```bash
  pnpm docs
  ```

### Components Scripts

- **`g:component`**  
  for generating new components using Stencil.js.
  ```bash
  pnpm g:component
  ```

- **`build:build:components-css-utils`**  
  Build the components-utils.pcss file which is in the globals directory, by converting it to css file.
  ```bash
  pnpm build:build:components-css-utils
  ```

- **`g:stories`**  
  for generating stories files for group of components
  ```bash
  pnpm g:stories <component-1,component2>
  # For all components
  pnpm g:stories all
  ```

- **`g:components-mdx`**  
  for generating mdx content from the readme.md files, require having a readme.md for the targeted components
  ```bash
  pnpm g:components-mdx <component-1,component2>
  # For all components
  pnpm g:components-mdx all
  ```

- **`g:components-usage`**  
  for generating usage files for the components
  ```bash
  pnpm g:components-usage <component-1,component2>
  # For all components
  pnpm g:components-usage all
  ```

- **`g:components-validations`**  
  for generating the utils of validating components props, require additional setup to import the generated util file and follow the header doc instructions in the utils file.
  ```bash
  pnpm g:components-validations <component-1,component2>
  # For all components
  pnpm g:components-validations all
  ```

- **`g:components-css-utils`**  
  for copying the used util classes from the built component-utils.css file to the component stylesheet file. Require running the build:build:components-css-utils first.
  ```bash
  pnpm g:components-css-utils <component-1,component2>
  # For all components
  pnpm g:components-css-utils all
  ```

### Start and Deployment Scripts

- **`start`**  
  Runs the Node.js server, typically to serve an API or perform server-side operations.
  ```bash
  pnpm start
  ```

- **`deploy`**  
  Deploys the project to Vercel using the production (`--prod`) flag. **Note**: Vercel CLI must be installed globally.
  ```bash
  pnpm deploy
  ```

---

## Additional Notes

### Node.js and npm Versions

To avoid compatibility issues, ensure you are using the recommended versions of Node.js (`v20.16.0`) and npm (`v10.8.1`). You can verify your versions by running:

```bash
node -v
npm -v
```

### Global Package Installations

Some tools, like Vercel, need to be installed globally to work properly. You can install Vercel globally using npm:

```bash
npm install -g vercel
```

### Local Package Installations

Ensure all local packages are installed before running any scripts. You can do this by running:

```bash
npm install
```

## Creating Custom Scripts

Custom scripts are located in the `./scripts`.