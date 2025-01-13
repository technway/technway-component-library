# Production Deployment Guide
# Production Deployment Guide

This guide provides comprehensive instructions for deploying the Technway Design System to production using Vercel. It covers the setup and deployment process, server configuration using Express.js, environment variable management, and how Vercel is used for hosting the project.

---

- [Production Deployment Guide](#production-deployment-guide)
- [Production Deployment Guide](#production-deployment-guide-1)
  - [Introduction](#introduction)
  - [Vercel Hosting](#vercel-hosting)
    - [Vercel Configuration](#vercel-configuration)
      - [Explanation:](#explanation)
    - [Ignoring Files for Deployment](#ignoring-files-for-deployment)
      - [Explanation:](#explanation-1)
  - [Production Scripts](#production-scripts)
    - [`start`](#start)
    - [`deploy`](#deploy)
  - [Express.js Server Setup](#expressjs-server-setup)
    - [Server Configuration](#server-configuration)
      - [Key Points:](#key-points)
  - [Environment Variables](#environment-variables)
    - [Setting Up Environment Variables](#setting-up-environment-variables)
      - [Example `.env` File:](#example-env-file)
  - [Complementary Notes](#complementary-notes)
    - [Important Considerations:](#important-considerations)
    - [Final Thoughts:](#final-thoughts)

---

## Introduction

The Technway Design System's Storybook is hosted on Vercel, a popular platform for deploying front-end projects. Vercel's seamless integration with Git allows for automatic deployments when changes are pushed to the repository. This document outlines the process for deploying the design system to production, configuring the server with Express.js, and managing environment variables.

## Vercel Hosting

Vercel is the platform used for hosting the Technway Design System in production. It provides powerful features like automatic deployments, serverless functions, and easy integration with custom domains.

### Vercel Configuration

The project is configured for deployment to Vercel using a `vercel.json` file, which specifies the version of Vercel and rewrites for the API routes. Here’s the content of the `vercel.json` file:

```json
{
    "version": 2,
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/api"
        }
    ]
}
```

#### Explanation:

- **Version**: The version key specifies the version of the Vercel configuration file. Version 2 is the current standard.
- **Rewrites**: The rewrites section allows you to redirect requests from one URL to another. In this case, all requests are redirected to the `/api` endpoint, where the Express.js server handles the requests.

### Ignoring Files for Deployment

The `.vercelignore` file is used to exclude certain files and directories from being uploaded to Vercel during deployment. This ensures that only the necessary files are deployed, optimizing the deployment process.

Here’s the content of the `.vercelignore` file:

```
/*
!package.json
!api
!storybook-static
!loader
!dist
dist/cjs
dist/collection
dist/components
vercel.json
tsconfig.json
```

#### Explanation:

- **`/*`**: Excludes all files and directories by default.
- **`!package.json`**: Ensures the `package.json` file is included in the deployment, which is essential for installing dependencies and running the application.
- **`!api`**: Includes the `api` directory, which contains the Express.js server files.
- **`!storybook-static`**: Includes the `storybook-static` directory, where the static build of Storybook is stored.
- **`!loader`**: Includes the `loader` directory, which may contain essential files for the components.
- **`!dist`**: Includes the `dist` directory, where the build output is stored.
- **`vercel.json`**: Ensures the Vercel configuration file is included.
- **`tsconfig.json`**: Includes the TypeScript configuration file.

## Production Scripts

To manage the production environment, the following npm scripts are used:

### `start`

This script runs the Node.js server configured with Express.js, which serves the Storybook static files and handles basic authentication.

```bash
npm run start
```

- **Purpose**: Runs the server, making the Storybook available for production access.
- **Use Case**: Use this script to start the server locally or as part of the deployment process on Vercel.

### `deploy`

This script deploys the project to Vercel using the production (`--prod`) flag. It pushes the latest changes to the Vercel platform, making the updated Storybook accessible online.

```bash
npm run deploy
```

- **Purpose**: Deploys the latest version of the design system to Vercel.
- **Use Case**: Run this script after committing your changes to ensure they are live on the production site.

## Express.js Server Setup

The Express.js server is configured to handle requests, serve static files, and manage basic authentication for the production environment. The server setup is defined in the `api/index.ts` file.

### Server Configuration

Below is the code for the Express.js server configuration:

```javascript
/**
 * For Deployment Server (DS)
 */
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

const username = process.env.DS_USERNAME;
const password = process.env.DS_PASSWORD;

app.use((req, res, next) => {
    const auth = { login: username, password: password };
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, pass] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && pass && login === auth.login && pass === auth.password) {
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication required.');
});

// Serving the storybook-static directory
app.use(express.static(path.join(__dirname, '../storybook-static')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;
```

#### Key Points:

- **Basic Authentication**: The server uses basic authentication, with credentials stored in environment variables (`DS_USERNAME` and `DS_PASSWORD`). This prevents unauthorized access to the production Storybook.
- **Static File Serving**: The `storybook-static` directory is served, making the static Storybook build accessible.
- **Port Configuration**: The server listens on the port specified in the environment variables, defaulting to `3000` if not provided.

## Environment Variables

Environment variables are crucial for managing different configurations across development and production environments. They are set in a `.env` file or directly in the Vercel project settings.

### Setting Up Environment Variables

1. **PORT**: Specifies the port number on which the server should listen (e.g., `3000`).
2. **DS_USERNAME**: The username required for basic authentication to access the production Storybook.
3. **DS_PASSWORD**: The password required for basic authentication to access the production Storybook.

#### Example `.env` File:

```bash
PORT=3000
DS_USERNAME=your-username
DS_PASSWORD=your-password
```

These variables ensure secure access and correct configuration for both local development and production environments.

## Complementary Notes

### Important Considerations:

- **Vercel Deployment**: Ensure Vercel CLI is installed globally on your system. This is necessary for deploying the project using the `npm run deploy` script.
- **Basic Authentication**: Basic authentication is set up to protect the production Storybook. Ensure that `DS_USERNAME` and `DS_PASSWORD` are correctly configured in the Vercel environment settings.
- **Custom Domain**: If using a custom domain with Vercel, make sure DNS settings are correctly configured to point to Vercel’s servers.
- **Express.js Server**: The server handles routing and serves static files, making it essential for the deployment process. Any changes to server behavior should be made cautiously to avoid disrupting the production environment.

### Final Thoughts:

This guide provides a detailed roadmap for deploying the Technway Design System to production. By following these instructions, you can ensure a smooth and secure deployment process. Vercel, combined with the Express.js server setup and robust deployment scripts, offers a reliable and efficient way to manage the design system in production.

For any additional questions or support, refer to the official documentation or reach out to the project maintainers.