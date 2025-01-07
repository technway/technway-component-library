## Contribution Guidelines



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
