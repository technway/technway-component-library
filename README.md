<div align="center">

<img src="https://i.ibb.co/fG9Wnb4p/technway-readme.png" alt="technway-readme" height="55px">

<h1 style="border-bottom: none;">Technway Component Library</h1>

A modular web component library built with Stencil.js, providing reusable, customizable components for scalable UI development across multiple frameworks.

**For Developers:**

[![Stencil.js Version](https://img.shields.io/badge/Stencil.js-v4.23.0-blue)](https://stenciljs.com/)
[![Storybook Version](https://img.shields.io/badge/Storybook-v8.4.7-blue)](https://storybook.js.org/)
[![Node.js Version](https://img.shields.io/badge/Node.js-v20.11.0-brightgreen)](https://nodejs.org/)
[![pnpm Version](https://img.shields.io/badge/pnpm-v9.15.3-brightgreen)](https://pnpm.io/)
[![Lerna Version](https://img.shields.io/badge/Lerna-v8.1.2-blue)](https://lerna.js.org/)

</div>

> [!IMPORTANT]
> **This repository is legacy and is no longer maintained.**
>
> It uses older pinned versions of Stencil, Storybook, and related packages. There is **no intent to upgrade, maintain, or actively develop** this library going forward. Do not expect bug fixes, dependency updates, or new features :D

---

- [Libraries](#libraries)
  - [Core packages](#core-packages)
  - [Generated packages](#generated-packages)
- [Testing Libraries](#testing-libraries)
- [Features](#features)
- [Framework Compatibility](#framework-compatibility)
  - [Next.js Integration](#nextjs-integration)
  - [React Integration](#react-integration)
- [Prerequisites](#prerequisites)
  - [Setting up the environment](#setting-up-the-environment)
- [Common Problems Troubleshooting](#common-problems-troubleshooting)
- [License](#license)

## Packages

### Core ones

| Package | Version | Path | Description |
| --- | --- | --- | --- |
| [`@technway/stencil-library`](./packages/stencil-library) | `2.12.4` | `packages/stencil-library` | Core web components built with Stencil.js |
| [`@technway/layout-kit`](./packages/layout-kit) | `0.10.2` | `packages/layout-kit` | Responsive grid / layout CSS utilities |
| [`@technway/only-test`](./packages/only-test) | `0.0.2-next.3` | `packages/only-test` | Internal test package |

### Generated ones

Wrappers and framework bindings produced from `@technway/stencil-library` (Stencil `react-output-target`)

| Package | Version | Path | Description |
| --- | --- | --- | --- |
| [`@technway/react-library`](./packages/react-library) | `2.12.4` | `packages/react-library` | React wrappers for the Stencil components |
| [`@technway/next-library`](./packages/next-library) | `2.12.4` | `packages/next-library` | Next.js integration (SSR / CSR) for the Stencil components |

Published packages use the GitHub Packages registry (`https://npm.pkg.github.com`) under the `@technway` scope.

## Testing Libraries

in directory example-project you can find example projects that uses all libraries.

## Features

- Fully customizable UI components
- Responsive and accessible design
- Easy integration with multiple frameworks
- Comprehensive documentation
- Monorepo structure with Lerna for better package management

## Framework Compatibility

### Next.js Integration
- **Full SSR Support**: Seamlessly integrates with Next.js
- **CSR Ready**: Compatible with Client-Side Rendering
- Zero configuration required for most use cases

### React Integration
- Works with React 18.x and above
- TypeScript type definitions included
- Automatic component registration

## Prerequisites

- Node.js v20.11.0 or higher *(v20.11.0 is recommended)*
- pnpm v8.x or higher *(v9.15.3 is recommended)*
- Lerna v8.x or higher *(v8.1.2 is recommended)*

### Setting up the environment

Check our [environment-and-setup.md](./docs/development/environment-and-setup.md) for detailed guideline.

If you were using root@v3.5.0 see [this](./docs/development/environment-and-setup.md#if-you-were-using-rootv350-or-lower-you-will-need-to) for detailed guideline.

## Common Problems Troubleshooting

Check [Common Issues and Troubleshooting](./docs/development/environment-and-setup.md#-common-issues-and-troubleshooting) for detailed guideline.

## License

MIT License. See [LICENSE.md](./LICENSE.md).