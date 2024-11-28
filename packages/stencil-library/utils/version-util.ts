import { readFileSync } from 'fs';
import { resolve } from 'path';

// Utility function to get version from package.json
export function getVersion(): string {
    const packageJsonPath = resolve(__dirname, '../package.json');

    try {
        const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
        return packageJson.version;
    } catch (error) {
        console.error(`Error while reading package.json: ${error.message}`);
        return 'unknown';
    }
}

