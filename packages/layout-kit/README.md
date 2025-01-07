<h1>Layout Kit: React Grid System</h1>

**Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Grid Component](#grid-component)
  - [Flex Component](#flex-component)
  - [Spacing Component](#spacing-component)
- [Polymorphic Components](#polymorphic-components)
- [Breakpoints](#breakpoints)
- [Available Utilities](#available-utilities)
- [Development](#development)
  - [Setup](#setup)
  - [Available Scripts](#available-scripts)
  - [Development Workflow](#development-workflow)
  - [Releasing a New Version](#releasing-a-new-version)
    - [Script Execution Order](#script-execution-order)
    - [Best Practices](#best-practices)
  - [Contributing](#contributing)
  - [Coding Standards](#coding-standards)
  - [Troubleshooting](#troubleshooting)
- [Requirements](#requirements)
- [License](#license)

---

## Overview
A powerful, type-safe grid and layout system designed specifically for React and Next.js, inspired by Tailwind CSS.

## Features
- 🚀 React and Next.js Optimized
- 🔒 TypeScript Support
- 🎨 Tailwind-like Utilities
- 🌈 Responsive Design
- 🔧 Highly Customizable

## Installation
```bash
npm install @technway/layout-kit
```

## Quick Start

### Grid Component
```tsx
import { Grid } from '@technway/layout-kit/react';

function MyComponent() {
  return (
    <Grid columns={3} gap={4} responsive={{ md: 2, sm: 1 }}>
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
    </Grid>
  );
}
```

### Flex Component
```tsx
import { Flex } from '@technway/layout-kit/react';

function MyComponent() {
  return (
    <Flex 
      direction="col" 
      justify="center" 
      align="center"
    >
      <div>Centered Content</div>
    </Flex>
  );
}
```

### Spacing Component
```tsx
import { Spacing } from '@technway/layout-kit/react';

function MyComponent() {
  return (
    <Spacing m={4} px={2}>
      Content with margin and horizontal padding
    </Spacing>
  );
}
```

## Polymorphic Components
All components support the `as` prop for rendering as different elements:

```tsx
<Grid as="section" columns={2}>
  <div>Grid as a section</div>
</Grid>

<Flex as="nav" direction="row">
  Navigation Items
</Flex>
```

## Breakpoints
- `xs`: 320px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Available Utilities
- Grid Columns: `1`, `2`, `3`, `4`, `6`, `12`
- Responsive Columns: `responsive` prop
- Gaps: `0` to `32`
- Flex Directions: `row`, `col`, `row-reverse`, `col-reverse`
- Justification: `start`, `end`, `center`, `between`, `around`, `evenly`
- Alignment: `start`, `end`, `center`, `stretch`

## Development

### Setup
1. Clone the repository
```bash
git clone https://github.com/technway/technway-component-library.git
cd technway-component-library/packages/layout-kit
```

2. Install dependencies
```bash
npm install
```

### Available Scripts
- `npm run build`: Build the package for production
- `npm run build:ts`: Compile TypeScript files
- `npm run build:css`: Process CSS files
- `npm run build:react`: Compile React components
- `npm run clean`: Remove built files
- `npm test`: Run tests (if configured)

### Development Workflow
1. Make changes to source files in `src/`
2. Run build scripts to compile
3. Test your changes locally

### Releasing a New Version

#### Script Execution Order
When preparing to release a new version, follow these steps in order:

1. **Clean Previous Builds**
```bash
npm run clean
```
Removes any previous build artifacts to ensure a clean build.

2. **Lint and Validate**
```bash
npm run lint
npm run type-check
```
Checks code quality and type consistency.

3. **Run Tests**
```bash
npm test
```
Ensures all tests pass before building.

4. **Build Components**
```bash
npm run build:ts
npm run build:css
npm run build:react
```
Compiles TypeScript, processes CSS, and builds React components.

5. **Full Build**
```bash
npm run build
```
Runs a comprehensive build of all components.

6. **Version Bump**
```bash
npm version [patch|minor|major]
```
Increments the package version (choose appropriate type).

7. **Publish to NPM**
```bash
npm publish
```
Publishes the package to the NPM registry.

#### Best Practices
- Always run tests before releasing
- Ensure all builds complete successfully
- Review changes carefully
- Update CHANGELOG.md with new version details
- Use semantic versioning

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build
5. Submit a pull request

### Coding Standards
- Use TypeScript
- Follow React best practices
- Write unit tests for new features
- Maintain consistent code style

### Troubleshooting
- Ensure all dependencies are installed
- Check TypeScript and PostCSS configurations
- Verify React and Next.js compatibility

## Requirements
- React 18+
- TypeScript (recommended)

## License
MIT License
