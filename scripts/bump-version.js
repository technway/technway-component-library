/**
 * @file bump-version.js
 * @description Version bumping utility for the Technway Component Library monorepo
 * 
 * This script automates the process of bumping version numbers across the monorepo packages.
 * It updates versions in lerna.json, root package.json, and individual package.json files.
 * 
 * Usage:
 *   node scripts/bump-version.js [options]
 * 
 * Options:
 *   --major           Bump major version (e.g., 1.0.0 -> 2.0.0)
 *   --minor           Bump minor version (e.g., 1.0.0 -> 1.1.0)
 *   --patch           Bump patch version (e.g., 1.0.0 -> 1.0.1) [default]
 *   --react           Update react-library package
 *   --next            Update next-library package
 *   --stencil         Update stencil-library package
 *   --layout-kit      Update layout-kit package
 *   --root            Update root package.json version
 *   --all             Update all packages [default if no package specified]
 * 
 * Examples:
 *   # Bump patch version for all packages
 *   pnpm version:bump
 * 
 *   # Bump minor version for react-library only
 *   pnpm version:bump -- --minor --react
 * 
 *   # Bump major version for stencil and next libraries
 *   pnpm version:bump -- --major --stencil --next
 * 
 * Note: When using pnpm, use '--' to pass arguments to the script
 * 
 * @author Technway
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m'
};

// Define available packages
const PACKAGES = {
  react: 'react-library',
  next: 'next-library',
  stencil: 'stencil-library',
  'react-library': 'react-library',
  'next-library': 'next-library',
  'stencil-library': 'stencil-library',
  'layout-kit': 'layout-kit',
};

// Get unique package names (without duplicates)
const UNIQUE_PACKAGES = [...new Set(Object.values(PACKAGES))];

// Parse command line arguments
const args = process.argv.slice(2);
const versionType = args.find(arg => ['--major', '--minor', '--patch'].includes(arg))?.replace('--', '') || 'patch';
const selectedPackages = args
  .filter(arg => Object.keys(PACKAGES).some(pkg => arg === `--${pkg}`))
  .map(arg => PACKAGES[arg.replace('--', '')]);

// Remove duplicates while preserving order
const uniquePackages = [...new Set(selectedPackages)];

// If no specific package was selected or --all flag is present, select all packages
const shouldUpdateAll = args.includes('--all') || uniquePackages.length === 0;
const packagesToUpdate = shouldUpdateAll ? UNIQUE_PACKAGES : uniquePackages;
const shouldUpdateRoot = args.includes('--root');

// Root directory
const rootDir = path.resolve(__dirname, '..');

/**
 * Calculates new version based on current version and bump type
 * @param {string} currentVersion - Current version string
 * @param {string} type - Version type to bump (major, minor, patch)
 * @returns {string} - New version string
 */
function calculateNewVersion(currentVersion, type) {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

/**
 * Gets current version from a package.json file
 * @param {string} filePath - Path to package.json
 * @returns {string|null} - Current version or null if not found
 */
function getCurrentVersion(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return packageJson.version || null;
  } catch (error) {
    return null;
  }
}

/**
 * Updates version in a package.json file
 * @param {string} filePath - Path to package.json
 * @param {string} type - Version type to bump (major, minor, patch)
 * @returns {string|null} - New version or null if operation failed
 */
function updateVersion(filePath, type) {
  try {
    const currentVersion = getCurrentVersion(filePath);
    if (!currentVersion) {
      console.error(`${colors.red}No version found in ${filePath}${colors.reset}`);
      return null;
    }

    const newVersion = calculateNewVersion(currentVersion, type);
    const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    packageJson.version = newVersion;
    fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n');
    
    console.log(`${colors.green}Updated ${path.relative(rootDir, filePath)} from ${colors.cyan}${currentVersion}${colors.green} to ${colors.cyan}${newVersion}${colors.reset}`);
    return newVersion;
  } catch (error) {
    console.error(`${colors.red}Error updating ${filePath}: ${error.message}${colors.reset}`);
    return null;
  }
}

/**
 * Prompts user for confirmation
 * @param {string} question - Question to ask
 * @returns {Promise<boolean>} - User's response
 */
function promptConfirmation(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
    });
  });
}

/**
 * Executes npm publish in the specified directory
 * @param {string} packageDir - Directory containing package.json
 * @returns {Promise<boolean>} - Success status
 */
async function publishPackage(packageDir) {
  return new Promise((resolve) => {
    const { exec } = require('child_process');
    console.log(`${colors.blue}Publishing ${path.basename(packageDir)}...${colors.reset}`);
    
    exec('npm publish', { cwd: packageDir }, (error, stdout, stderr) => {
      if (error) {
        console.error(`${colors.red}Error publishing ${path.basename(packageDir)}: ${error.message}${colors.reset}`);
        resolve(false);
        return;
      }
      console.log(`${colors.green}Successfully published ${path.basename(packageDir)}${colors.reset}`);
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
      resolve(true);
    });
  });
}

// Get planned changes
console.log(`\n${colors.bright}Planned version changes:${colors.reset}`);
console.log(`${colors.dim}------------------------${colors.reset}`);

// Check root package.json if --root is specified
const rootPackagePath = path.join(rootDir, 'package.json');
let rootCurrentVersion = null;
if (shouldUpdateRoot) {
  rootCurrentVersion = getCurrentVersion(rootPackagePath);
  if (rootCurrentVersion) {
    const rootNewVersion = calculateNewVersion(rootCurrentVersion, versionType);
    console.log(`${colors.blue}root package.json${colors.reset}: ${colors.cyan}${rootCurrentVersion}${colors.reset} -> ${colors.green}${rootNewVersion}${colors.reset}`);
  }
}

// Check each package
const packageVersions = {};
packagesToUpdate.forEach(pkg => {
  const packagePath = path.join(rootDir, 'packages', pkg, 'package.json');
  const currentVersion = getCurrentVersion(packagePath);
  if (currentVersion) {
    const newVersion = calculateNewVersion(currentVersion, versionType);
    console.log(`${colors.blue}${pkg}${colors.reset}: ${colors.cyan}${currentVersion}${colors.reset} -> ${colors.green}${newVersion}${colors.reset}`);
    packageVersions[pkg] = { current: currentVersion, new: newVersion };
  }
});

// Check lerna.json if all packages are being updated
const lernaPath = path.join(rootDir, 'lerna.json');
let lernaCurrentVersion = null;
if (shouldUpdateAll) {
  lernaCurrentVersion = getCurrentVersion(lernaPath);
  if (lernaCurrentVersion) {
    const lernaNewVersion = calculateNewVersion(lernaCurrentVersion, versionType);
    console.log(`${colors.blue}lerna.json${colors.reset}: ${colors.cyan}${lernaCurrentVersion}${colors.reset} -> ${colors.green}${lernaNewVersion}${colors.reset}`);
  }
}

// Add warning if not all packages are being updated
if (!shouldUpdateAll) {
  console.log(`\n${colors.yellow}⚠️  Warning: Not all packages are being updated.${colors.reset}`);
  console.log(`${colors.yellow}   It is recommended to keep all library versions in sync.${colors.reset}`);
  console.log(`${colors.yellow}   Consider using --all to update all packages together.${colors.reset}`);
}

// Ask for confirmation
promptConfirmation(`\n${colors.bright}Do you want to proceed with these changes? (y/N): ${colors.reset}`)
  .then(confirmed => {
    if (!confirmed) {
      console.log(`\n${colors.red}Version bump cancelled.${colors.reset}`);
      process.exit(0);
    }

    // Update root package.json if --root is specified
    if (shouldUpdateRoot && rootCurrentVersion) {
      updateVersion(rootPackagePath, versionType);
    }

    // Update each selected package
    let newVersion = null;
    packagesToUpdate.forEach(pkg => {
      const packagePath = path.join(rootDir, 'packages', pkg, 'package.json');
      const updatedVersion = updateVersion(packagePath, versionType);
      if (updatedVersion) {
        newVersion = updatedVersion;
      }
    });

    // Update lerna.json only if all packages were updated
    if (shouldUpdateAll && lernaCurrentVersion && newVersion) {
      updateVersion(lernaPath, versionType);
    }

    console.log(`\n${colors.green}Version bump complete: ${versionType} version for ${packagesToUpdate.join(', ')}${colors.reset}`);
    if (!shouldUpdateAll) {
      console.log(`${colors.yellow}⚠️  Remember to update other packages to maintain version consistency.${colors.reset}`);
    }
    console.log(`${colors.bright}Don't forget to commit these changes!${colors.reset}`);

    // Ask if user wants to publish the packages
    return promptConfirmation(`\n${colors.bright}Do you want to publish the updated packages to npm? (y/N): ${colors.reset}`);
  })
  .then(shouldPublish => {
    if (!shouldPublish) {
      console.log(`\n${colors.yellow}Publishing skipped.${colors.reset}`);
      process.exit(0);
    }

    // Publish each package
    console.log(`\n${colors.bright}Starting package publication...${colors.reset}`);
    
    // Filter out root package and create publish promises
    const publishPromises = packagesToUpdate
      .filter(pkg => pkg !== 'root')
      .map(pkg => {
        const packageDir = path.join(rootDir, 'packages', pkg);
        return publishPackage(packageDir);
      });

    // Execute all publish operations
    return Promise.all(publishPromises);
  })
  .then(publishResults => {
    const successCount = publishResults.filter(Boolean).length;
    const totalCount = publishResults.length;
    
    if (successCount === totalCount) {
      console.log(`\n${colors.green}All packages published successfully!${colors.reset}`);
    } else {
      console.log(`\n${colors.yellow}Published ${successCount} out of ${totalCount} packages.${colors.reset}`);
    }
  })
  .catch(error => {
    console.error(`${colors.red}Error during publishing: ${error.message}${colors.reset}`);
    process.exit(1);
  });
 