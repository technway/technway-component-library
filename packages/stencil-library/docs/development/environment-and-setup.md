<h1>Environment and Setup</h1>

This guide provides a detailed walkthrough for setting up the development environment for the Technway Design System project. Whether you're setting up the project for the first time or revisiting the setup after some time, this guide covers all the essential tools, configurations, and common troubleshooting steps.

- [Getting Started](#getting-started)
  - [Node.js and npm Versions](#nodejs-and-npm-versions)
    - [Installing Node.js via NVM](#installing-nodejs-via-nvm)
  - [Stencil.js Version](#stenciljs-version)
  - [Storybook Version](#storybook-version)
  - [Other Essential Tools and Dependencies](#other-essential-tools-and-dependencies)
  - [Additional Tools and Extensions](#additional-tools-and-extensions)
    - [**Prettier**](#prettier)
    - [**ESLint**](#eslint)
- [Setup](#setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Verify Node.js Version](#2-verify-nodejs-version)
  - [3. Install Stencil Globally](#3-install-stencil-globally)
  - [4. Install Project Dependencies](#4-install-project-dependencies)
  - [5. Build the Project](#5-build-the-project)
  - [6. Watch for Changes](#6-watch-for-changes)
  - [7. Run Storybook](#7-run-storybook)
  - [8. Configure Environment Variables](#8-configure-environment-variables)
- [Project Structure](#project-structure)
  - [.storybook](#storybook)
  - [.vercel](#vercel)
  - [api](#api)
  - [assets](#assets)
  - [dist, lib, loader](#dist-lib-loader)
  - [docs](#docs)
  - [scripts](#scripts)
  - [src](#src)
  - [Component Structure](#component-structure)
- [Visual Studio Code (VS Code) Configuration](#visual-studio-code-vs-code-configuration)
  - [Required Extensions](#required-extensions)
  - [Recommended Extensions](#recommended-extensions)
- [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
  - [Stencil commands not working in powershell](#stencil-commands-not-working-in-powershell)
  - [Node Version Manager (NVM)](#node-version-manager-nvm)
  - [Clearing npm Cache](#clearing-npm-cache)
  - [Rebuilding Node Modules](#rebuilding-node-modules)
  - [Git Configuration](#git-configuration)
  - [Performance Optimization](#performance-optimization)
- [Conclusion](#conclusion)

## Getting Started

### Node.js and npm Versions

To ensure compatibility and avoid unexpected issues, it is crucial to use the recommended versions of Node.js and npm:

- **Node.js Version**: `v20.16.0` (minimum required version: `v18.16.0`)
- **npm Version**: `v10.8.1`

You can verify your installed versions by running the following commands in your terminal:

```bash
node -v
npm -v
```

If you need to install or update Node.js, it is recommended to use Node Version Manager (NVM) to easily switch between different versions.

#### Installing Node.js via NVM

NVM (Node Version Manager) is a tool that allows you to install and manage multiple versions of Node.js on your system. Here's how to install NVM and set up the correct Node.js version:

- **For macOS and Linux**:
  
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  source ~/.bashrc
  nvm install 20.16.0
  nvm use 20.16.0
  ```

- **For Windows**: Use [nvm-windows](https://github.com/coreybutler/nvm-windows) and follow the installation instructions provided.

### Stencil.js Version

The Technway Design System project uses Stencil.js for component development. We strive to stay updated with the latest version of Stencil.js; however, due to potential compatibility issues, it's recommended to use the version currently adopted by the project:

- **Stencil.js Version**: `v4.20.0`

Ensure this version is installed globally to avoid conflicts:

```bash
npm install -g @stencil/core@4.20.0
```

### Storybook Version

Storybook is utilized for component development and documentation. Similar to Stencil.js, we aim to use the latest version, but for consistency and stability, please match the project’s current version:

- **Storybook Version**: `v8.2.9`

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
npm install -g vercel
```

### Additional Tools and Extensions

#### **Prettier**

The project uses Prettier for code formatting to maintain a consistent code style across the codebase. To manually format your code, use:

```bash
npx prettier --write .
```

#### **ESLint**

For linting JavaScript and TypeScript code, ESLint is used. You can run the linter with:

```bash
npm run lint
```

Ensure that your code adheres to the project's coding standards by fixing any issues highlighted by ESLint.

## Setup

To set up the Technway Design System for development, follow these detailed steps:

### 1. Clone the Repository

First, clone the project repository to your local machine. This allows you to work on the latest version of the codebase:

```bash
git clone git@github.com:technway/technway-design-system.git
cd technway-design-system
```

### 2. Verify Node.js Version

Ensure that your Node.js version is `v20.16.0` or at least `v18.16.0`. This step is critical to avoid issues related to incompatible Node.js versions:

```bash
node -v
```

If your version doesn't match, use NVM to install the correct version.

### 3. Install Stencil Globally

If you haven't already installed Stencil.js globally, do so now. This ensures that the Stencil commands work correctly across the project:

```bash
npm install -g @stencil/core@4.20.0
```

### 4. Install Project Dependencies

With the repository cloned, navigate to the project directory and install all necessary dependencies. This step will pull in all required packages listed in the `package.json` file:

```bash
npm install
```

### 5. Build the Project

Before running the project, you need to build it. This command compiles the CSS utilities, Stencil.js components, and generates the necessary documentation:

```bash
npm run build:all
```

This command runs a sequence of build scripts, including the generation of CSS utilities, Stencil build, and documentation generation. 

### 6. Watch for Changes

To enable continuous development, use the watch command. This command monitors your files for changes and automatically rebuilds the project as needed:

```bash
npm run watch:all
```

This will keep your project up-to-date with the latest changes, making it easier to see the impact of your code in real-time.

### 7. Run Storybook

To develop and document components in isolation, run Storybook:

```bash
npm run sb
```

Storybook will start and can be accessed at `http://localhost:6006`. This environment allows you to develop and preview components interactively.

### 8. Configure Environment Variables

Environment variables are essential for both development and production environments. Create a `.env` file in the root directory based on the `.env.example` file, and configure the following variables:

```bash
PORT=3000
DS_USERNAME=your-username
DS_PASSWORD=your-password
```

- **PORT**: The port number for the development server (defaults to `3000` for production).
- **DS_USERNAME**: Username for Storybook access in production.
- **DS_PASSWORD**: Password for Storybook access in production.

These variables are crucial for secure access and configuration of the development and production environments.

## Project Structure

Understanding the project structure is key to navigating and contributing effectively to the codebase.

### .storybook

This directory contains all Storybook-related configuration files:

```
.storybook/
├─ static/
├─ utils/
│  ├─ test/
│  │  └─ __snapshots__/
│  │  └─ utils.spec.ts
│  └─ utils.ts
├─ custom-doc.css
├─ custom-theme.css
├─ custom-theme.js
├─ main.js
├─ manager.js
└─ preview.js
```

- **`static/`**: Contains static assets for Storybook.
- **`utils/`**: Utility functions and tests for Storybook integration.
- **`custom-doc.css` & `custom-theme.css`**: Custom styling for Storybook documentation.
- **`main.js`, `manager.js`, `preview.js`**: Configuration files for Storybook.

### .vercel

This directory is specific to Vercel deployment configurations. **Do not modify this directory**, as it is crucial for production deployments.

### api

The `api/` directory contains the server-related files:

```
api/
└─ index.ts
```

- **`index.ts`**: Main entry point for the server application, used for handling API requests.

### assets

The `assets/` directory stores images, fonts, and other static resources:

```
assets/
├─ icomoon/
└─ logo.png
```

- **`icomoon/`**: Icon fonts used throughout the project.
- **`logo.png`**: Project logo file.

### dist, lib, loader

These directories are automatically generated during the Stencil build process:

- **`dist/`**: Contains the distribution files of the components.
- **`lib/`**: Contains the library files for components.
- **`loader/`**: Contains the loader script for components.

**Do not manually edit these directories.**

### docs

The `docs/` directory contains the markdown files for both developer and user documentation:

- **Developer Documentation**: `.md` files outlining development guidelines.
- **User Documentation**: `.mdx` files integrated with Storybook.

### scripts

The `scripts/` directory contains custom scripts used throughout the project:

```
scripts/
├─ utils/
│  ├─ utils.js
└─ other-scripts.js
```

- **`utils/`**: Utility scripts used in the project build process.
- **`other-scripts.js`**: Custom scripts for specific tasks.

### src

The `src/` directory is the main source directory for the project:

```
src/
├─ assets/
├─ components/
├─ docs/
├─ globals/
├─ utils/
├─ storybook-static/
└─ www/
```

- **`assets/`**: Contains fonts and other assets used in components.
- **`components/`**: Main directory for all component files

.
- **`docs/`**: Auto-generated documentation from Stencil.
- **`globals/`**: Global CSS files and variables.
- **`storybook-static/`**: Contains the static build of Storybook for production.
- **`www/`**: Auto-generated by the Stencil.js development server.

### Component Structure

Each component has its own directory within `src/components`. The structure is standardized to maintain consistency:

```
src/components/
└─ tnw-component/
   ├─ docs/
   │  └─ tnw-component.md
   ├─ stories/
   │  ├─ tnw-component.mdx
   │  └─ tnw-component.stories.tsx
   ├─ test/
   │  ├─ tnw-component.e2e.ts
   │  └─ tnw-component.spec.ts
   ├─ usage/
   │  └─ tnw-component-usage.md
   ├─ readme.md
   ├─ tnw-component.pcss
   └─ tnw-component.tsx
```

- **`docs/`**: Auto-generated documentation files.
- **`stories/`**: Storybook `.mdx` files and custom stories.
- **`test/`**: Contains unit and end-to-end test files.
- **`usage/`**: Manually authored usage documentation.
- **`readme.md`**: Auto-generated during the Stencil build process.
- **`tnw-component.pcss`**: Component-specific PostCSS file.
- **`tnw-component.tsx`**: Component implementation file.

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
- **🧠 Logical Properties**: Provides better understanding and management of logical properties in CSS.

## Common Issues and Troubleshooting

Despite following the setup steps, you might encounter some issues. Here’s how to address common problems:

### Stencil commands not working in powershell

If stencil commands do not work in PowerShell, open PowerShell as administrator and run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

### Node Version Manager (NVM)

If you have multiple versions of Node.js installed, you can manage them using NVM (Node Version Manager). Install NVM from [NVM's GitHub repository](https://github.com/nvm-sh/nvm) and then switch to the correct Node.js version:

```bash
nvm install 20.16.0
nvm use 20.16.0
```

This ensures compatibility with the project’s setup.

### Clearing npm Cache

Sometimes, cached files can cause issues with package installations. To clear the npm cache, run:

```bash
npm cache clean --force
```

This command forces npm to clear its cache, which can resolve installation issues.

### Rebuilding Node Modules

If you encounter persistent issues with your environment, it might help to completely remove and reinstall the node modules:

```bash
rm -rf node_modules
npm install
```

This will remove all installed packages and reinstall them from scratch.

### Git Configuration

Ensure your Git is configured correctly to avoid issues during development:

- **Configure Git Hooks**: Use tools like Husky to enforce code standards before committing.
- **.gitignore**: Ensure that environment files, node modules, and other local-only files are excluded from commits.

### Performance Optimization

If the development server or build process is slow, consider these optimizations:

- **Increase Node.js Memory Limit**: If Node.js runs out of memory during large builds, you can increase the memory limit:

  ```bash
  node --max-old-space-size=4096 node_modules/.bin/stencil build
  ```

- **Selective Watch Mode**: Running multiple watch processes can be resource-intensive. Only run essential watchers during development.

## Conclusion

This `environment-and-setup.md` document is designed to be a comprehensive guide, covering every aspect of the project setup, configuration, and common troubleshooting steps. By following these guidelines, you can ensure a smooth and consistent development experience across the Technway Design System project.

For any additional questions or detailed explanations, please refer to the official documentation or contact the project maintainers.