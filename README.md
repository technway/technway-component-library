<div style="text-align: center;">

<img src="https://iili.io/JUYfe2V.png" alt="Technway Logo" height="65px">

<h1 style="border-bottom: none;">Technway Component Library</h1>

![Component Library Version](https://img.shields.io/badge/Component%20Library-v1.0.8-orange)
[![Stencil.js Version](https://img.shields.io/badge/Stencil.js-v4.22.3-blue)](https://stenciljs.com/)
[![Storybook Version](https://img.shields.io/badge/Storybook-v8.4.7-blue)](https://storybook.js.org/)
[![Node.js Version](https://img.shields.io/badge/Node.js-v20.11.0-brightgreen)](https://nodejs.org/)

</div>

---

## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [🚀 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠 Prerequisites](#-prerequisites)
- [🐛 Common Problems Troubleshooting](#-common-problems-troubleshooting)
- [📄 License](#-license)
  - [Usage Rights](#usage-rights)
- [🔧 Framework Compatibility](#-framework-compatibility)
  - [Next.js Integration](#nextjs-integration)
  - [React Integration](#react-integration)

## 🚀 Project Overview

Technway Component Library is a comprehensive, modern component library built with Stencil.js, providing a consistent and reusable set of UI components for web applications. Our component library ensures design consistency, improves development efficiency, and offers a seamless user experience across different projects.

## ✨ Features

- 🎨 Fully customizable UI components
- 🚀 Built with Stencil.js for maximum performance
- 📱 Responsive and accessible design
- 🔧 Easy integration with multiple frameworks
- 📚 Comprehensive documentation and Storybook support

## 🛠 Prerequisites

- Node.js v20.11.0 or higher
- npm v10.x or higher

## 🐛 Common Problems Troubleshooting

1. **Missing `pnpm-lock.yaml` for packages:**
    *Update: Migrated to pnpm from npm.*
    **Solution Steps:**
    1. Remove `node_modules` of the root and all packages
    2. Remove `pnpm-lock.yaml` file
    3. Run `pnpm store prune` in the root.
    4. Run in each package `pnpm install --lockfile-only`
    5. In the root, run `pnpm install`

2. **New packages not detected by Lerna workspace**
   When adding new packages to `packages/` or `example-project/` directories, they may not appear in `pnpm lerna list` output.

   **Example:**
   ```bash
   > pnpm lerna list
   lerna notice cli v8.1.9
   lerna info versioning independent
   next-v15-app
   react-app
   @technway/layout-kit
   @technway/next-library
   @technway/react-library
   @technway/stencil-library
   lerna success found 6 packages
   ```

   **Quick Solution:**
   1. Remove `"private": true` from the new package's `package.json`
   2. Run `pnpm install` in the root directory
   3. Verify with `pnpm lerna list`

   **Full Reset (if quick solution fails):**
   1. `pnpm lerna clean`
   2. Delete all `node_modules` directories (root and packages)
   3. Delete `pnpm-lock.yaml`
   4. `pnpm store prune`
   5. `pnpm install`

   > **Note:** Ensure your new package is properly configured in the `pnpm-workspace.yaml` file.

## 📄 License

This component library is exclusively for use in projects authorized by Technway. Unauthorized use, distribution, or modification is strictly prohibited. 

### Usage Rights
- Only projects approved by Technway may use this component library
- Commercial and non-commercial use requires explicit permission from Technway
- No modifications are allowed without prior written consent

## 🔧 Framework Compatibility

### Next.js Integration
- **Full SSR Support**: Seamlessly integrates with Next.js Server-Side Rendering
- **CSR Ready**: Compatible with Client-Side Rendering in React applications
- Zero configuration required for most use cases

### React Integration
- Works with React 18.x and above
- TypeScript type definitions included

---

**Built with ❤️ by Technway**