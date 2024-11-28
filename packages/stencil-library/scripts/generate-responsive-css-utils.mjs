import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssEach from 'postcss-each';
import postcssMixins from 'postcss-mixins';
import postcssFor from 'postcss-for';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import { getRootDir, logError, logInfo, logNormal, logSuccess } from './utils/utils.mjs';

// Input and output file paths
const inputFile = path.join(getRootDir(), 'src', 'globals', 'utils.pcss');
const outputFile = path.join(getRootDir(), 'src', 'globals', 'responsive-utils.css');

logNormal(`Reading input file: ${inputFile} ...`);

// Read the input CSS file
fs.readFile(inputFile, (err, css) => {
    if (err) {
        logError(`Error reading input file:${err.message}`,);
        throw err;
    }

    logSuccess(`CSS content read successfully ...`);
    logNormal(`Processing CSS with PostCSS plugins ...`);

    // Process the CSS with PostCSS and the specified plugins
    postcss([
        postcssImport(),
        postcssEach(),
        postcssMixins(),
        postcssFor(),
        postcssNested(),
        postcssPresetEnv({
            stage: 1,
            features: {
                'nesting-rules': false,
                'custom-properties': false,
                'custom-media-queries': true,
            },
        }),
        cssnano(),
    ])
        .process(css, { from: inputFile, to: outputFile })
        .then(result => {
            let finalCSS = result.css;

            logInfo(`CSS processed successfully ...`);
            logNormal(`Extracting utilities from processed CSS ...`);
            const utilities = extractUtilities(finalCSS);

            logNormal(`Generating responsive utilities ...`);
            const responsiveCSS = generateResponsiveUtilities(utilities);

            logNormal(`Responsive utilities generated successfully.`);

            finalCSS += responsiveCSS;

            logNormal(`Compressing final CSS with cssnano ...`);
            // Compress the final CSS using cssnano
            postcss([cssnano()])
                .process(finalCSS, { from: undefined })
                .then(result => {
                    fs.writeFile(outputFile, result.css, (err) => {
                        if (err) {
                            logError(`Error writing CSS to output file: ${err.message}`,);
                            throw err;
                        }

                        // Write source map if available
                        if (result.map) {
                            fs.writeFile(outputFile + '.map', result.map.toString(), (err) => {
                                if (err) {
                                    logError(`Error writing source map:${err.message}`);
                                    throw err;
                                }
                                logSuccess(`Source map written successfully! ...`);
                            });
                        }
                        logSuccess(`Build utils finished in ${outputFile}`, true);
                    });
                })
                .catch(err => {
                    logError(`Error during CSS compression:${err.message}`, true);
                });
        })
        .catch(err => {
            logError(`Error during PostCSS processing:${err.message}`, true);
        });
});

/**
 * Extracts utility classes from the given CSS content.
 * @param {string} css - The CSS content to extract utilities from.
 * @returns {Array} - Array of utility objects containing prefix and value.
 */
function extractUtilities(css) {
    const utilityRegex = /\.(\w+)-(\w+)\s*{[^}]*}/g;
    const utilities = [];

    let match;
    while ((match = utilityRegex.exec(css)) !== null) {
        const prefix = match[1];
        const value = match[2];
        utilities.push({ prefix, value });
    }

    logInfo(`Found ${utilities.length} utilities ...`);
    return utilities;
}

/**
 * Generates responsive utilities based on the extracted utilities and config breakpoints.
 * @param {Array} utilities - Array of utility objects containing prefix and value.
 * @returns {string} - The generated responsive utilities CSS.
 */
function generateResponsiveUtilities(utilities) {
    let css = '';
    const breakpointsType = 'max';
    const breakpoints = {
        xs: 'var(--tnw-breakpoint-xs)',
        sm: 'var(--tnw-breakpoint-sm)',
        md: 'var(--tnw-breakpoint-md)',
        lg: 'var(--tnw-breakpoint-lg)',
        xl: 'var(--tnw-breakpoint-xl)',
    };

    Object.entries(breakpoints).forEach(([name, size]) => {
        css += `@media (${breakpointsType}: ${size.trim()}) {\n`;
        utilities.forEach(util => {
            css += `  .${name}\:${util.prefix}-${util.value} { ${util.prefix}: var(--tnw-spacing-${util.value}); }\n`;
        });
        css += '}\n';
    });

    logNormal(`Responsive utilities generated ...`);
    return css;
}
