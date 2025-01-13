<h1>Environment and Setup</h1>

This guide provides a detailed walkthrough for setting up the development environment for the Technway Component Library project. Whether you're setting up the project for the first time or revisiting the setup after some time, this guide covers all the essential tools, configurations, and common troubleshooting steps.

- [Getting Started](#getting-started)
  - [Node.js, pnpm, and Lerna Versions](#nodejs-pnpm-and-lerna-versions)
  - [Stencil.js Version](#stenciljs-version)
  - [Storybook Version](#storybook-version)
  - [Other Essential Tools and Dependencies](#other-essential-tools-and-dependencies)
  - [Additional Tools and Extensions](#additional-tools-and-extensions)
    - [**Prettier**](#prettier)
    - [**ESLint**](#eslint)
- [Setup](#setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Verify Node.js Version](#2-verify-nodejs-version)
  - [Node Version Manager (NVM)](#node-version-manager-nvm)
  - [3. Install Project Dependencies](#3-install-project-dependencies)
  - [If you were using root@v3.5.0 or lower you will need to:](#if-you-were-using-rootv350-or-lower-you-will-need-to)
- [Project Structure](#project-structure)
  - [.vercel](#vercel)
  - [api](#api)
- [Visual Studio Code (VS Code) Configuration](#visual-studio-code-vs-code-configuration)
  - [Required Extensions](#required-extensions)
  - [Recommended Extensions](#recommended-extensions)
- [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
  - [1. Stencil commands not working in powershell](#1-stencil-commands-not-working-in-powershell)
  - [2. Clearing pnpm Store](#2-clearing-pnpm-store)
  - [3. Rebuilding Node Modules](#3-rebuilding-node-modules)
  - [4. **Package Management Issues**:](#4-package-management-issues)
  - [5. **Workspace Package Detection**:](#5-workspace-package-detection)
- [Conclusion](#conclusion)

## Getting Started

### Node.js, pnpm, and Lerna Versions

To ensure compatibility and avoid unexpected issues, it is crucial to use the recommended versions of Node.js, pnpm, and Lerna:

- **Node.js Version**: v20.11.0 or higher *(v20.11.0 is recommended)*
- **pnpm Version**: v9.15.3 or higher
- **Lerna Version**: v8.1.2 or higher

You can verify your installed versions by running the following commands in your terminal:

```bash
node -v
pnpm -v
lerna -v
```

If you don't have `pnpm` or `lerna` installed, you can install them globally using:

```bash
npm i -g pnpm lerna
```

### Stencil.js Version

The Technway Component Library project uses Stencil.js for component development. We strive to stay updated with the latest version of Stencil.js; however, due to potential compatibility issues, it's recommended to use the version currently adopted by the project:

- **Stencil.js Version**: `v4.23.0`

Ensure this version is installed globally to avoid conflicts:

```bash
pnpm install -g @stencil/core@4.20.0
```

### Storybook Version

Storybook is utilized for component development and documentation. Similar to Stencil.js, we aim to use the latest version, but for consistency and stability, please match the project’s current version:

- **Storybook Version**: `v8.4.7`

The project uses Storybook with the HTML framework and the webpack5 builder.

### Other Essential Tools and Dependencies

Several other tools are integral to the development and deployment processes:

- **Git**: Version control system for managing codebase changes.
- **Chromatic**: `v1.5.0` (used for visual regression testing).
- **Express.js**: Web framework for the server.
- **express-session**: 
- **Vercel**: `v36.0.0` (deployment platform for production).
- **PostCSS**: `@stencil-community/postcss@2.2.0` with plugins for CSS transformations.
- **dotenv**: Library for managing environment variables.
- **Stencil Store**: `v2.0.16` (state management for Stencil.js).

Ensure these tools are installed globally where necessary, especially for Vercel:

```bash
pnpm install -g vercel
```

### Additional Tools and Extensions

#### **Prettier**

Some packages in the project use Prettier for code formatting to maintain a consistent code style across the codebase. To manually format your code, use:

```bash
npx prettier --write .
```

#### **ESLint**

For linting JavaScript and TypeScript code, ESLint is used. You can run the linter with:

```bash
pnpm lint
```

Ensure that the code adheres to the project's coding standards by fixing any issues highlighted by ESLint.

## Setup

To set up the Technway Component Library for development, follow these detailed steps:

### 1. Clone the Repository

First, clone the project repository to your local machine. This allows you to work on the latest version of the codebase:

```bash
git clone git@github.com:technway/technway-component-library.git
cd technway-component-library
```

### 2. Verify Node.js Version

Ensure that your Node.js version is `v20.11.0` or at least `v18.16.0`. This step is critical to avoid issues related to incompatible Node.js versions:

```bash
node -v
```

If your version doesn't match, use NVM to install the correct version.

### Node Version Manager (NVM)

If you have multiple versions of Node.js installed, you can manage them using NVM (Node Version Manager). Install NVM from [NVM's GitHub repository](https://github.com/nvm-sh/nvm) and then switch to the correct Node.js version:

```bash
nvm install 20.16.0
nvm use 20.16.0
```

This ensures compatibility with the project’s setup.

### 3. Install Project Dependencies

With the repository cloned, navigate to the project directory and install all necessary dependencies using Lerna and pnpm. This step will pull in all required packages listed in the `package.json` files across the monorepo:

```bash
pnpm install
```

### If you were using root@v3.5.0 or lower you will need to:

1. Install pnpm globally: `npm install -g pnpm`
2. **Restructure configuration files**:
   - Remove the `"workspaces"` section from the `package.json`.
   - Remove the `"packages"` section from the `lerna.json`.
   - Create a `pnpm-workspace.yaml` at the root of the repo with the following code:
     ```yaml
     packages:
       - 'packages/*'
       - 'example-project/*'
     ```
3. Run `pnpm install` to generate new pnpm-lock.yaml

## Project Structure

Understanding the project structure is key to navigating and contributing effectively to the codebase. The project follows a monorepo structure managed by Lerna:

```
technway-design-system/
├── packages/
│   ├── stencil-library/      # Core Stencil.js components
│   ├── react-library/        # React wrapper components
│   ├── next-library/         # Next.js integration
│   └── layout-kit/           # Layout utilities
├── example-project/          # Example implementations
├── pnpm-workspace.yaml       # Workspace configuration
├── lerna.json                # Lerna configuration
└── package.json              # Root package configuration
```

This structure allows for efficient management of multiple packages within a single repository, facilitating shared dependencies and consistent versioning across the project.

### .vercel

This directory is specific to Vercel deployment configurations. **Do not modify this directory**, as it is crucial for production deployments.

### api

The `api/` directory contains the server-related files:

```
api/
└─ index.ts
```

- **`index.ts`**: Main entry point for the server application, used for handling API requests.

## Visual Studio Code (VS Code) Configuration

For development, we recommend using Visual Studio Code (VS Code). It’s a powerful and extensible code editor with many useful extensions for JavaScript, TypeScript, and Stencil.js development.

### Required Extensions

- **PostCSS Language Support**: For PostCSS syntax highlighting.
- **JavaScript and TypeScript Nightly**: For using the latest TypeScript and JavaScript features.

### Recommended Extensions

- **Jest Runner**: Run your Jest tests directly from the editor.
- **Code Spell Checker**: Helps in catching common spelling errors.
- **Codeium: AI Coding Autocomplete and Chat**: For AI-powered coding assistance.
- **CodeScene**: For visualizing code quality and trends.
- **Markdown All In One**: Enhances the markdown editing experience.
- **Prettier - Code formatter**: Automatically format your code on save.
- **Jest**: For running and managing Jest tests.
- **Logical Properties**: Provides better understanding and management of logical properties in CSS.

## Common Issues and Troubleshooting

Despite following the setup steps, you might encounter some issues. Here’s how to address common problems:

### 1. Stencil commands not working in powershell

If stencil commands do not work in PowerShell, open PowerShell as administrator and run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

### 2. Clearing pnpm Store

Sometimes, cached files can cause issues with package installations. To clear the pnpm cache, run:

```bash
pnpm store prune
```

This command forces npm to clear its cache, which can resolve installation issues.

### 3. Rebuilding Node Modules

If you encounter persistent issues with your environment, it might help to completely remove and reinstall the node modules:

```bash
rm -rf node_modules
pnpm install
```

This will remove all installed packages and reinstall them from scratch.

### 4. **Package Management Issues**:
   ```bash
   # Reset the environment
   pnpm lerna clean          # Clean all node_modules
   pnpm store prune         # Clean pnpm store
   rm pnpm-lock.yaml        # Remove lockfile
   pnpm install             # Fresh install
   ```

### 5. **Workspace Package Detection**:
   If packages aren't being detected:
   - Ensure package is listed in `pnpm-workspace.yaml`
   - Check `package.json` is not marked as `"private": true`
   - Run `pnpm install` in the root directory

## Conclusion

This `environment-and-setup.md` document is designed to be a comprehensive guide, covering every aspect of the project setup, configuration, and common troubleshooting steps. By following these guidelines, you can ensure a smooth and consistent development experience across the Technway Component Library project.

For any additional questions or detailed explanations, ask in the [Discussions](https://github.com/technway/technway-component-library/discussions) section.