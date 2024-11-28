import * as fs from 'fs';
import componentDocs from '../../docs/stencil-generated/stencil-docs.json' assert { type: 'json' };

/**
 * Returns an object containing ANSI color codes.
 *
 * @return {Object} An object with ANSI color codes as properties.
 */
export const getAnsiColorCodes = () => {
  return {
    reset: '\x1b[0m',
    blue: '\x1b[34m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
  };
};

/**
 * Returns the root directory of the current process.
 *
 * @return {string} The current working directory.
 */
export function getRootDir() {
  return process.cwd();
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The input string to be capitalized.
 * @return {string} The capitalized string.
 */
export const capitalize = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a hyphen-separated string into a title-cased string,
 * where the first letter of each word is capitalized.
 *
 * @param {string} str - The input string to be transformed.
 * @return {string} The transformed string with each word capitalized.
 */
export const toTitleCase = (str) => {
  if (!str) return str;
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Logs an error message in red.
 * @param {string} message - The error message to log.
 */
export function logError(message, newLine = false) {
  console.error(`${getAnsiColorCodes().red}${message}${getAnsiColorCodes().reset}`, newLine ? '\n' : '');
}

/**
* Logs an informational message in blue.
* @param {string} message - The info message to log.
*/
export function logInfo(message, newLine = false) {
  console.log(`${getAnsiColorCodes().blue}${message}${getAnsiColorCodes().reset}`, newLine ? '\n' : '');
}

/**
* Logs a success message in green.
* @param {string} message - The success message to log.
*/
export function logSuccess(message, newLine = false) {
  console.log(`${getAnsiColorCodes().green}${message}${getAnsiColorCodes().reset}`, newLine ? '\n' : '');
}

/**
* Logs an attention message in yellow.
* @param {string} message - The attention message to log.
*/
export function logWarning(message, newLine = false) {
  console.log(`${getAnsiColorCodes().yellow}${message}${getAnsiColorCodes().reset}`, newLine ? '\n' : '');
}

/**
 * Logs a normal message in default color.
 * @param {string} message - The message to log.
 */
export function logNormal(message, newLine = false) {
  console.log(`${message}`, newLine ? '\n' : '');
}

/**
 * Escapes special characters in Markdown content to avoid rendering issues.
 *
 * @param {string} content - The Markdown content to escape.
 * @return {string} The escaped Markdown content.
 */
export const escapeMarkdownContent = (content) => {
  return content
    .replace(/\\/g, '\\\\')  // Escape backslashes
    .replace(/`/g, '\\`')    // Escape backticks
    .replace(/\$/g, '\\$');  // Escape dollar signs (if needed)
};

/**
 * Unescapes special characters in Markdown content that were escaped to avoid rendering issues.
 *
 * @param {string} content - The Markdown content to unescape.
 * @return {string} The unescaped Markdown content.
 */
export const unescapeMarkdownContent = (content) => {
  return content
    .replace(/\\\\/g, '\\')  // Unescape backslashes
    .replace(/\\`/g, '`')    // Unescape backticks
    .replace(/\\\$/g, '$');  // Unescape dollar signs (if needed)
};

/**
 * Reads content from a file.
 * @param {string} filePath - Path to the file.
 * @returns {string} - Content of the file.
 */
export function readFileContent(filePath) {

  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    logError(`Error reading file: ${filePath}`);
    process.exit(1);
  }
}

/**
 * Unescapes {` and `} in the content.
 *
 * @param {string} content - The content to unescape.
 * @return {string} - The unescaped content.
 */
export function unescapeBrackets(content) {
  return content.replace(/{\\`/g, '{`').replace(/\\`}/g, '`}');
}

/**
 * Unescapes <Source> and <Canvas> blocks in the content.
 *
 * @param {string} content - The content to unescape.
 * @return {string} - The unescaped content.
 */
export function unescapeSourceAndCanvasBlocks(content) {
  return content
    .replace(/<Source([\s\S]*?)\/>/g, (match, codeBlock) => `<Source ${unescapeMarkdownContent(codeBlock)} />`)
    .replace(/<Canvas([\s\S]*?)\/>/g, (match, canvasBlock) => `<Canvas ${unescapeMarkdownContent(canvasBlock)} />`);
}

// Function to check if content contains @useStory statement
export function hasUseStory(content) {
  return content.match(/@useStory\s+([^\s]+)/g);
}

// Function to replace @useStory statement with <Canvas> component
export function getUseStoryCanvas(content, openNewBrackets = true) {
  if (hasUseStory(content)) {
    return content.replace(/@useStory\s+([^\s]+)/g, (match, storyName) => {
      const canvas = `<Canvas of={stories.${storyName}} />`;
      if (openNewBrackets) {
        return `
\`}
</Markdown>

${canvas}

<Markdown>
{\``;
      }

      return canvas;
    });
  } else {
    return content;
  }
}

// Function to replace code blocks with <Source> component
export function getCodeBlockSource(content, openNewBrackets = true) {
  const codeBlockMatch = content.match(/```(\w*)\n?([\s\S]*?)```/g);

  if (codeBlockMatch) {
    return content.replace(/```(\w*)\n?([\s\S]*?)```/g, (match, language, code) => {
      // Return the formatted <Source> component as a string

      const sourceBlock = `
<Source
  code={\`${code.trim()}\`}
  ${language ? `language="${language}"` : ''}
  dark={true}
/>`;

      if (openNewBrackets) {
        return `
\`}
</Markdown>

${sourceBlock}

<Markdown>
{\``;
      }
      return sourceBlock;
    });
  } else {
    return content;
  }
}

export function mdToMdx(markdown) {
  // First process @useStory statements
  const convertedUseStoryStatements = getUseStoryCanvas(markdown);

  // Then process code blocks
  const convertedCodeBlocks = getCodeBlockSource(convertedUseStoryStatements);

  // Escape markdown content
  const escapedContent = escapeMarkdownContent(convertedCodeBlocks);

  // Unescape brackets
  const unEscapeBrackets = unescapeBrackets(escapedContent);

  // Unescape Source and Canvas blocks
  const unEscapeSourceAndCanvases = unescapeSourceAndCanvasBlocks(unEscapeBrackets);

  return unEscapeSourceAndCanvases;
}

/**
 * Writes content to a file.
 * @param {string} filePath - Path to the file.
 * @param {string} content - Content to write.
 */
export function writeFileContent(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    logSuccess(`Successfully written to file: ${filePath}`);
  } catch (err) {
    logError(`Error writing to file: ${filePath}`);
    console.log(err, '\n');
    process.exit(1);
  }
}

/**
* Replaces content between specified markers in the file content.
* @param {string} fileContent - Original file content.
* @param {string} newContent - New content to insert between the markers.
* @param {string} startMarker - Start marker.
* @param {string} endMarker - End marker.
* @returns {string} - Updated file content.
*/
export function replaceContentBetweenMarkers(fileContent, newContent, startMarker, endMarker) {
  const startIndex = fileContent.indexOf(startMarker) + startMarker.length;
  const endIndex = fileContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    logError(`Markers not found in the file content`);
    process.exit(1);
  }

  return fileContent.substring(0, startIndex) + '\n' + newContent + '\n' + fileContent.substring(endIndex);
}

/**
 * Retrieves a template string from a file at the given path.
 *
 * @param {string} templatePath - Path to the template file.
 * @returns {string} - The template string.
 */
export function getScriptTemplate(templatePath) {
  if (!fs.existsSync(templatePath)) {
    logInfo("Template file is missing");
    process.exit(1);
  }
  return fs.readFileSync(templatePath, 'utf8');
}

/**
 * Get all directories inside a given path asynchronously.
 *
 * @param {string} directoryPath - The path to the directory.
 * @return {Promise<Array>} A promise that resolves to an array of directory names.
 */
export function getDirectoriesByPathAsync(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const directories = files
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name);

        resolve(directories);
      }
    });
  });
};

export function getComponentByTagName(componentTagName) {
  const foundComponent = componentDocs.components.find(
    component => component.tag === componentTagName,
  );

  return foundComponent ? foundComponent : undefined;
}

/**
 * Retrieves all props of a component as an array with name and type.
 *
 * @param {Object} component - The component object to retrieve props from.
 * @return {Array} Array of props with name and type, otherwise an empty array.
 */
export function getPropsArrayByComponent(component) {
  return component?.props?.map(prop => ({
    name: prop.name,
    type: prop.type.replace(/\"/g, '')
      .split('|')
      .map(type => type.trim()),
    isRequired: prop.required
  })) || [];
}


/**
 * Retrieves the names of all props of a component.
 *
 * @param {Object} component - The component object to retrieve prop names from.
 * @return {Array | undefined} An array of prop names if found, otherwise undefined.
 */
export function getPropNamesByComponent(component) {
  return component?.props?.map(prop => prop.name) || undefined;
}

/**
 * Retrieves the type of a prop by its name.
 *
 * @param {string} componentTagName - The tag name of the component to retrieve the prop type from.
 * @param {string} propName - The name of the prop.
 * @return {string | undefined} The prop type if found, otherwise undefined.
 */
export function getPropType(componentTagName, propName) {
  const component = getComponentByTagName(componentTagName);

  if (component) {
    const prop = component.props.find(p => p.name === propName);
    return prop ? prop.type : undefined;
  }

  return undefined;
}


/**
 * Retrieves the default value of a prop by its name.
 *
 * @param {string} componentTagName - The tag name of the component to retrieve the prop default value from.
 * @param {string} propName - The name of the prop.
 * @return {any | undefined} The default value if found, otherwise undefined.
 */
export function getPropDefaultValue(componentTagName, propName) {
  const component = getComponentByTagName(componentTagName);

  if (component) {
    const prop = component.props.find(p => p.name === propName);
    return prop ? prop.default : undefined;
  }

  return undefined;
}

/**
 * Removes all content after the specified marker in the provided content.
 *
 * @param {string} content - The content to search through.
 * @param {string} marker - The marker to search for.
 * @returns {string} - The content with everything after the marker removed.
 */
export function removeContentAfterMarker(content, marker) {
  const markerIndex = content.indexOf(marker);

  // If the marker is not found, log a warning and return the original content.
  if (markerIndex === -1) {
    logError(`Marker\n${marker.trim()}\nnot found in the content.`);
    process.exit(1)
  }
  logInfo(`Marker found => Removing content after marker.`);

  // Slice the content to keep only what's before the marker.
  return content.slice(0, markerIndex + marker.length);
}