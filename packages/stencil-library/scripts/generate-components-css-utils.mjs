import fs from 'fs';
import path from 'path';
import {
    getRootDir,
    logError,
    logInfo,
    logSuccess,
    logWarning,
    logNormal,
    removeContentAfterMarker
} from './utils/utils.mjs';

const utilityClassFunctions = [
    {
        'util': 'getColorClass',
    },
    {
        'util': 'getTypographyClass',
    },
    {
        'util': 'getTextTransformClass',
        'classes': ['uppercase', 'lowercase', 'capitalize', 'normal-case']
    },
    {
        'util': 'getBorderRadiusClass',
        'class': 'rounded'
    },
    {
        'util': 'getBorderRadiusClass',
        'class': 'rounded'
    },
    {
        'util': 'getAspectRatioClass',
        'class': 'ar'
    },
    {
        'util': 'getObjectPositionClass',
        'class': 'obj-pos'
    },
    {
        'util': 'getObjectFitClass',
        'class': 'fit'
    },
];

const appearanceClassFunctions = [
    {
        'util': 'getAppearanceClass',
        'class': 'tnw-v'
    },
    {
        'util': 'getExtendedAppearanceClass',
        'class': 'tnw-extended-v'
    },
    {
        'util': 'getAppearanceHoverClass',
        'class': 'tnw-hover-v'
    },
    {
        'util': 'getExtendedAppearanceHoverClass',
        'class': 'tnw-extended-hover-v'
    }
];

const markerComment = `
/* ========================================================== */
/* AUTO-GENERATED SECTION - DO NOT MODIFY MANUALLY             */
/* All changes below this line will be overwritten by the      */
/* automated build process. Manual edits will be lost.         */
/* ========================================================== */
`;

/**
 * Processes a component by extracting its CSS utilities and variables.
 */
function processComponentFiles(componentTag) {
    logInfo(`\nProcessing component: ${componentTag}`);

    const componentDir = path.join(getRootDir(), 'src', 'components', componentTag);
    const tsxFilePath = path.join(componentDir, `${componentTag}.tsx`);
    const cssUtilsFilePath = path.join(getRootDir(), 'src', 'globals', 'components-utils.css');
    const cssAppearanceFilePath = path.join(getRootDir(), 'src', 'globals', 'components-appearance-utils.css');
    const componentPcssPath = path.join(componentDir, `${componentTag}.pcss`);
    const variableFiles = [
        path.join(getRootDir(), 'src', 'globals', 'variables.defaults.pcss'),
        path.join(getRootDir(), 'src', 'globals', 'variables.pcss')
    ];

    if (!fs.existsSync(tsxFilePath)) {
        logError(`TSX file not found for component: ${componentTag}`);
        return;
    }

    logNormal(`Reading TSX file from: ${tsxFilePath}`);
    const tsxContent = fs.readFileSync(tsxFilePath, 'utf-8');
    const utilityClassNames = extractUtilityClassNamesFromTsx(tsxContent);

    if (utilityClassNames.length > 0) {
        logNormal(`Extracted utility class names: ${utilityClassNames.join(', ')}`);
    }

    logNormal(`Reading CSS utilities from: ${cssUtilsFilePath}`);
    const extractedUtilities = extractUtilityClassesFromCss(cssUtilsFilePath, utilityClassNames);

    logNormal(`Reading appearance utilities from: ${cssAppearanceFilePath}`);
    const appearanceUtilityClassNames = extractAppearanceUtilityClassNamesFromTsx(tsxContent);
    const cssAppearanceContent = fs.readFileSync(cssAppearanceFilePath, 'utf-8');
    const extractedAppearanceUtilities = extractAppearanceUtilitiesFromCss(cssAppearanceContent, appearanceUtilityClassNames);

    logNormal(`Extracting variables from utilities...`);
    const variables = extractVariablesFromCss([...extractedUtilities, ...extractedAppearanceUtilities]);

    logNormal(`Searching for variable definitions in global variable files...`);
    const variableDefinitions = findVariablesInFiles(variables, variableFiles);

    logNormal(`Appending utilities and variables to PCSS file...`);
    appendUtilitiesAndVariablesToPcssFile(componentPcssPath, [...extractedUtilities, ...extractedAppearanceUtilities], variableDefinitions);

    logSuccess(`\nFinished processing component: ${componentTag}`);
}

/**
 * Extracts utility class names from the TSX file by searching for utility function calls.
 * If the object has a `class` or `classes` property, it uses that. Otherwise, it defaults to the first argument of the function.
 * Skips lines which have before it the comment `\/* @script ignore copying classes *\/`.
 */
function extractUtilityClassNamesFromTsx(tsxContent) {
    const classNames = [];
    logInfo(`Scanning for utility function calls...`);

    // Split the content into lines and skip lines with the "ignore" comment
    const tsxLines = tsxContent.split('\n');
    let skipNextLine = false;

    tsxLines.forEach(line => {
        if (line.includes('/* @script ignore copying classes */')) {
            skipNextLine = true;
            return;
        }

        if (skipNextLine) {
            skipNextLine = false;
            return;
        }

        utilityClassFunctions.forEach(util => {
            const regex = new RegExp(`${util.util}\\([^)]+\\)`, 'g');
            const matches = line.match(regex);
            if (matches) {
                matches.forEach(match => {
                    const args = match.match(/\(([^)]+)\)/)[1].split(',');
                    const firstArg = args[0].replace(/[()'"]/g, '').trim();

                    // If the utility has an array of predefined classes, add all of them.
                    if (util.classes) {
                        util.classes.forEach(cls => {
                            logNormal(`Found class: ${cls} for utility: ${util.util}`);
                            classNames.push(cls);
                        });
                    } else {
                        const className = util.class ? util.class : firstArg;
                        if (className) {
                            logNormal(`Found class: ${className} for utility: ${util.util}`);
                            classNames.push(className);
                        }
                    }
                });
            }
        });
    });

    return classNames;
}

function extractAppearanceUtilityClassNamesFromTsx(tsxContent) {
    const classNames = [];

    // Split the content into lines and skip lines with the "ignore" comment
    const tsxLines = tsxContent.split('\n');
    let skipNextLine = false;

    tsxLines.forEach(line => {
        if (line.includes('/* @script ignore copying classes */')) {
            skipNextLine = true;
            return;
        }

        if (skipNextLine) {
            skipNextLine = false;
            return;
        }

        appearanceClassFunctions.forEach(util => {
            const regex = new RegExp(`${util.util}\\([^)]+\\)`, 'g');
            const matches = line.match(regex);
            if (matches) {
                matches.forEach(match => {
                    const args = match.match(/\(([^)]+)\)/)[1].split(',');
                    const firstArg = args[0].replace(/[()'"]/g, '').trim();

                    // If the utility has an array of predefined classes, add all of them.
                    if (util.classes) {
                        util.classes.forEach(cls => {
                            logNormal(`Found class: ${cls} for utility: ${util.util}`);
                            classNames.push(cls);
                        });
                    } else {
                        const className = util.class ? util.class : firstArg;
                        if (className) {
                            logNormal(`Found class: ${className} for utility: ${util.util}`);
                            classNames.push(className);
                        }
                    }
                });
            }
        });
    });

    return classNames;
}

/**
 * Extracts utility classes from the given CSS content based on the class names.
 * Logs a warning if a class name from the TSX file cannot be found in the CSS content.
 */
function extractUtilityClassesFromCss(cssPath, classNames) {
    const cssContent = fs.readFileSync(cssPath, 'utf-8');
    const utilityRegex = /\.(\w+)(-\w+)*\s*{[^}]*}/g;
    const utilities = [];
    const matchedClassNames = new Set();
    
    let match;
    while ((match = utilityRegex.exec(cssContent)) !== null) {
        const utilClass = match[0];
        const matchedClassName = classNames.find(className => utilClass.startsWith(`.${className}`));
        if (matchedClassName) {
            utilities.push(utilClass);
            matchedClassNames.add(matchedClassName);
        }
    }

    // Log a warning for each class name that was not matched
    classNames.forEach(className => {
        if (!matchedClassNames.has(className)) {
            logWarning(`Class name '${className}' extracted from TSX could not be found in ${cssPath}.`);
        }
    });

    logInfo(`Found ${utilities.length} matched utility classes.`);
    return utilities;
}

/**
 * Extracts appearance-related utility classes from the CSS file.
 */
function extractAppearanceUtilitiesFromCss(cssContent, classNames) {
    const appearanceUtilities = [];
    const utilityRegex = /\.(\w+)(-\w+)?\s*{[^}]*}/g; 

    let match;
    while ((match = utilityRegex.exec(cssContent)) !== null) {
        const utilClass = match[0];
        const matchedClassName = classNames.find(className => utilClass.startsWith(`.${className}`));
        if (matchedClassName) {
            appearanceUtilities.push(utilClass);
        }
    }

    logInfo(`Found ${appearanceUtilities.length} appearance utility classes.`);
    return appearanceUtilities;
}

/**
 * Extracts variables (starting with `--`) from the given CSS utilities.
 */
function extractVariablesFromCss(utilities) {
    const variableRegex = /--[\w-]+/g;
    const variables = new Set();

    utilities.forEach(utility => {
        const matches = utility.match(variableRegex);
        if (matches) {
            matches.forEach(variable => variables.add(variable));
        }
    });

    logInfo(`Extracted ${variables.size} variables.`);
    return Array.from(variables);
}

/**
 * Searches for variable definitions in the provided files.
 */
function findVariablesInFiles(variables, files) {
    const variableDefinitions = [];

    files.forEach(filePath => {
        logInfo(`Searching for variables in: ${filePath}`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        variables.forEach(variable => {
            const regex = new RegExp(`${variable}\\s*:[^;]+;`, 'g');
            const match = fileContent.match(regex);
            if (match) {
                variableDefinitions.push(match[0]);
            }
        });
    });

    logNormal(`Found ${variableDefinitions.length} variable definitions`);

    return variableDefinitions;
}

/**
 * Appends utilities and variables to the PCSS file under the defined marker.
 * Removes any content after the marker and replaces it with new content.
 */
function appendUtilitiesAndVariablesToPcssFile(pcssPath, utilities, variableDefinitions) {
    let pcssContent = fs.readFileSync(pcssPath, 'utf-8');

    // Remove all content after the marker
    pcssContent = removeContentAfterMarker(pcssContent, markerComment);

    const utilitiesContent = utilities.join('\n');
    const variablesContent = variableDefinitions.length > 0 ? `:host {\n${variableDefinitions.join('\n')}\n}` : '';

    const updatedContent = pcssContent + '\n' + variablesContent + '\n' + utilitiesContent + '\n';

    // Write the updated content back to the file
    fs.writeFileSync(pcssPath, updatedContent, 'utf-8');

    logSuccess(`Updated ${pcssPath} with utilities and variables.`);
}

/**
 * Main function to process components.
 */
function processAllComponents(targetComponent = 'all') {
    const componentsPath = path.join(getRootDir(), 'src', 'components');
    const components = targetComponent === 'all' ? fs.readdirSync(componentsPath) : [targetComponent];

    logInfo(`Starting process for components: ${targetComponent === 'all' ? 'all' : targetComponent}`);

    components.forEach(componentTag => {
        processComponentFiles(componentTag);
    });
}

// Run the script with the specified component tag or 'all'
const targetComponent = process.argv[2] || 'all';
processAllComponents(targetComponent);
