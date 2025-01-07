# Contributing to Layout Kit

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Local Development Setup
1. Clone the repository
```bash
git clone https://github.com/technway/technway-component-library.git
cd technway-component-library/packages/layout-kit
```

2. Install dependencies
```bash
npm install
```

## Development Workflow

### Running Scripts
- `npm run build`: Full build of the package
- `npm run lint`: Run ESLint
- `npm run type-check`: Verify TypeScript types
- `npm run build:ts`: Compile TypeScript
- `npm run build:css`: Process CSS files

### Testing
- `npm test`: Run test suite (currently placeholder)

## Code Guidelines

### TypeScript
- Use strict type checking
- Prefer type inference
- Avoid `any` type
- Use interfaces and type aliases

### React Components
- Follow React best practices
- Use functional components
- Utilize hooks
- Implement prop types

### Styling
- Use PostCSS
- Follow utility-first design principles
- Keep styles modular and reusable

## Commit Message Convention
- Use conventional commits
- Format: `<type>(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Pull Request Process
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and type checks
5. Submit a pull request with a clear description

## Releasing
1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create a git tag
4. Publish to npm

## Code of Conduct
- Be respectful
- Collaborate constructively
- Prioritize inclusivity

## Questions?
Open an issue on GitHub or contact the maintainers.
