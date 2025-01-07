# Layout Kit Development Guide

## Development Workflow

### Local Setup
1. Clone the monorepo
```bash
git clone https://github.com/technway/technway-component-library.git
cd technway-component-library
```

2. Install root dependencies
```bash
npm install
```

3. Install package-specific dependencies
```bash
cd packages/layout-kit
npm install
```

### Development Commands
- `npm run lint`: Run ESLint for code quality
- `npm run type-check`: Verify TypeScript types
- `npm run build`: Full package build
- `npm run build:ts`: Compile TypeScript
- `npm run build:css`: Process CSS files

## Local Testing and Validation

### Testing Locally
1. Build the package
```bash
npm run build
```

2. Create a test project
```bash
mkdir test-layout-kit
cd test-layout-kit
npm init -y
npm install ../technway-component-library/packages/layout-kit
```

3. Create a test file `index.tsx`
```tsx
import React from 'react';
import { Grid, Flex, Spacing } from '@technway/layout-kit';

function TestComponent() {
  return (
    <Grid columns={4} gap={4}>
      <Flex justify="center">
        <Spacing m={2}>Test Content</Spacing>
      </Flex>
    </Grid>
  );
}
```

## Releasing a New Version

### Preparation
1. Ensure all tests pass
```bash
npm run lint
npm run type-check
```

2. Update `CHANGELOG.md`
- Describe new features
- List bug fixes
- Note breaking changes

### Version Bumping
Use semantic versioning:
```bash
# For patch (bug fixes)
npm version patch

# For minor (new features)
npm version minor

# For major (breaking changes)
npm version major
```

### Publishing
1. Build the package
```bash
npm run build
```

2. Publish to npm
```bash
npm publish
```

### Post-Release
1. Push git tags
```bash
git push --tags
```

2. Update documentation
- Update README
- Update CHANGELOG
- Reflect changes in documentation

## Troubleshooting

### Common Issues
- Ensure compatible React version
- Check TypeScript configuration
- Verify PostCSS setup

### Debugging
- Use `console.log` sparingly
- Leverage TypeScript's type system
- Write comprehensive tests

## Best Practices
- Keep components small and focused
- Use type inference
- Minimize runtime overhead
- Write clear, concise documentation

## Performance Optimization
- Use React.memo for complex components
- Minimize re-renders
- Lazy load when possible

## Continuous Integration
- Automated tests run on every PR
- Lint and type checks mandatory
- Build verification

## Community and Support
- Open issues for bugs or features
- Follow contribution guidelines
- Be respectful and collaborative
