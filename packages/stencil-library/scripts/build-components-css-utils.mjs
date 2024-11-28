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

// Array of file objects for input and output file paths
const files = [
    {
        inputFile: path.join(getRootDir(), 'src', 'globals', 'components-utils.pcss'),
        outputFile: path.join(getRootDir(), 'src', 'globals', 'components-utils.css')
    },
    {
        inputFile: path.join(getRootDir(), 'src', 'globals', 'components-appearance-utils.pcss'),
        outputFile: path.join(getRootDir(), 'src', 'globals', 'components-appearance-utils.css')
    }
];

// Function to process a single file
function processFile(file) {
    const { inputFile, outputFile } = file;

    logNormal(`Reading input file: ${inputFile} ...`);

    // Read the input CSS file
    fs.readFile(inputFile, (err, css) => {
        if (err) {
            logError(`Error reading input file: ${err.message}`);
            throw err;
        }

        logSuccess(`CSS content read successfully from ${inputFile} ...`);
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
                    'custom-media-queries': true
                },
            }),
            cssnano(),
        ])
        .process(css, { from: inputFile, to: outputFile })
        .then(result => {
            let finalCSS = result.css;

            logInfo(`CSS processed successfully for ${inputFile} ...`);
            logNormal(`Extracting utilities from processed CSS ...`);

            logNormal(`Compressing final CSS with cssnano ...`);
            // Compress the final CSS using cssnano
            postcss([cssnano()])
                .process(finalCSS, { from: undefined })
                .then(result => {
                    // This will overwrite the existing file with new content
                    fs.writeFile(outputFile, result.css, (err) => {
                        if (err) {
                            logError(`Error writing CSS to output file: ${err.message}`);
                            throw err;
                        }

                        // Write source map if available
                        if (result.map) {
                            fs.writeFile(outputFile + '.map', result.map.toString(), (err) => {
                                if (err) {
                                    logError(`Error writing source map: ${err.message}`);
                                    throw err;
                                }
                                logSuccess(`Source map written successfully for ${outputFile}!`);
                            });
                        }
                        logSuccess(`Build utils finished for ${outputFile}`, true);
                    });
                })
                .catch(err => {
                    logError(`Error during CSS compression: ${err.message}`, true);
                });
        })
        .catch(err => {
            logError(`Error during PostCSS processing: ${err.message}`, true);
        });
    });
}

// Process all files in the array
files.forEach(file => {
    processFile(file);
});