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

1. **Missing `package-lock.json` for packages:**

    Solution:
    1. Remove node_modules of the root and all packages
    2. Remove all package-lock.json files 
    3. run `npm cache clean --force` in root and ever single package.
    4. run in each package `npm i --package-lock-only --workspaces false`
    5. in the root run `npm i`

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