import { JsonDocsComponent } from '@stencil/core/internal';
import { toPascalCase } from '../src/utils/utils';
import * as fs from 'fs';
import path from 'path';

export function generateComponentStatistics(components: JsonDocsComponent[]): string {
  // Initialize the content with a header
  let content = `# Component Statistics Overview\n\n`;
  content += `This page provides an overview of statistics related to the components.\n\n`;

  // Initialize statistics counters
  const totalComponents = components.length;
  let shadowDomCount = 0;
  let totalProps = 0;
  let totalEvents = 0;
  let totalMethods = 0;
  let totalSlots = 0;
  let componentsWithProps = 0;
  let componentsWithEvents = 0;
  let componentsWithMethods = 0;
  let componentsWithSlots = 0;

  // Calculate statistics
  components.forEach(({ encapsulation, props, events, methods, slots }) => {
    // Count Shadow DOM components
    if (encapsulation === 'shadow') shadowDomCount++;

    // Count total features (props, events, methods, slots)
    if (props.length > 0) {
      componentsWithProps++;
      totalProps += props.length;
    }
    if (events.length > 0) {
      componentsWithEvents++;
      totalEvents += events.length;
    }
    if (methods.length > 0) {
      componentsWithMethods++;
      totalMethods += methods.length;
    }
    if (slots.length > 0) {
      componentsWithSlots++;
      totalSlots += slots.length;
    }
  });

  const lightDomCount = totalComponents - shadowDomCount;

  // Add general statistics to content
  content += `## General Component Statistics\n\n`;
  content += `| Statistic | Value |\n`;
  content += `| --- | --- |\n`;
  content += `| **Total Components** | \`${totalComponents}\` |\n`;
  content += `| **Total Props** | \`${totalProps}\` |\n`;
  content += `| **Total Events** | \`${totalEvents}\` |\n`;
  content += `| **Total Methods** | \`${totalMethods}\` |\n`;
  content += `| **Total Slots** | \`${totalSlots}\` |\n`;
  content += `| **Total Features** | \`${totalProps + totalEvents + totalMethods + totalSlots}\` |\n`;
  content += `|   |  |\n`;
  content += `| **Shadow DOM Components** | \`${shadowDomCount}\` |\n`;
  content += `| **Light DOM Components** | \`${lightDomCount}\` |\n`;
  content += `| **Components with Props** | \`${componentsWithProps}\` |\n`;
  content += `| **Components with Events** | \`${componentsWithEvents}\` |\n`;
  content += `| **Components with Methods** | \`${componentsWithMethods}\` |\n`;
  content += `| **Components with Slots** | \`${componentsWithSlots}\` |\n`;

  // Add detailed statistics for each component
  content += `\n## Detailed Component Statistics\n\n`;
  components.forEach(({ tag, props, events, methods, slots }) => {
    content += `### ${tag}\n`;
    content += `| Feature | Count |\n`;
    content += `| --- | --- |\n`;
    content += `| **Props** | \`${props.length}\` |\n`;
    content += `| **Events** | \`${events.length}\` |\n`;
    content += `| **Methods** | \`${methods.length}\` |\n`;
    content += `| **Slots** | \`${slots.length}\` |\n`;
    content += `\n`;
  });

  return content;
}

export function generateMarkdownForComponentsIndex(components: JsonDocsComponent[]): string {
  let content = `# Components Index\n\n`;
  content += `This page lists all the library components.\n\n`;

  // Table of Contents
  content += `<div class="table-contents">\n\n`;
  components.forEach((component) => {
    content += `- [${component.tag}](#${component.tag.toLowerCase()})\n`;
  });
  content += `\n</div>\n\n`;

  content += `\n---\n\n`; // Separator between the table of contents and the component details

  // Component Details
  components.forEach(component => {
    // Component Section Header
    content += `## ${component.tag}\n\n`;

    // Component Overview or Fallback Text
    content += `${component.docs ? component.docs : "_No overview available for this component._"}\n\n`;

    content += `---\n\n`; // Separator between components
  });

  return content;
}

export function generateMarkdownForComponent(component: JsonDocsComponent): string {
  let content = `# ${component.tag}\n\n`;

  // Table of Contents
  content += `## Table of Contents\n\n`;
  content += `- [Overview](#overview)\n`;

  if (component.props.length > 0) {
    content += `- [Properties](#properties)\n`;
  }

  if (component.slots.length > 0) {
    content += `- [Slots](#slots)\n`;
  }

  if (component.parts.length > 0) {
    content += `- [Shadow Parts](#shadow-parts)\n`;
  }

  if (getStyleDocs(component).length > 0) {
    content += `- [CSS Custom Properties](#css-custom-properties)\n`;
  }

  if (component.events.length > 0) {
    content += `- [Events](#events)\n`;
  }

  if (component.methods.length > 0) {
    content += `- [Methods](#methods)\n`;
  }

  content += `- [Usage](#usage)\n`;

  content += `\n`;

  // Overview Section
  content += `## Overview\n\n`;
  content += `${component.docs || `The \`${component.tag}\` component does not have detailed documentation.`}\n\n`;

  // Component Details Table
  content += `| Detail | Value |\n`;
  content += `| --- | --- |\n`;
  content += `| HTML Component Tag | \`<${component.tag}>\` |\n`;
  content += `| React Component Tag | \`${toPascalCase(component.tag)}\` |\n`;
  content += `| Encapsulation | \`${component.encapsulation || 'none'}\` |\n\n`;

  // Properties Section
  if (component.props.length > 0) {
    content += `<div style="overflow-x: auto;">\n`;
    content += `## Properties\n\n`;
    content += `| Property | Description | Default | Type |\n`;
    content += `| --- | --- | --- | --- |\n`;
    component.props.forEach(prop => {
      const formattedType = prop.type.split('|').map(type => `\`${type.trim()}\``).join(' \\| ');
      content += `| **${prop.name}** | ${prop.docs || 'No description provided.'} | ${prop.default ? `\`${prop.default}\`` : 'N/A'} | ${formattedType} |\n`;
    });
    content += `\n`;
    content += `</div>\n\n`;
  }

  // CSS Custom Properties Section
  const styles = getStyleDocs(component);
  if (styles.length > 0) {
    content += `## CSS Custom Properties\n\n`;
    content += `| CSS Property | Description | Default |\n`;
    content += `| --- | --- | --- |\n`;
    styles.forEach(style => {
      content += `| **${style.name || 'default'}** | ${style.docs || 'No description provided.'} | ${style.default ? `\`${style.default}\`` : 'N/A'} |\n`;
    });
    content += `\n`;
  }

  // Shadow Parts Section
  if (component.parts.length > 0) {
    content += `## Shadow Parts\n\n`;
    content += `| Part | Description |\n`;
    content += `| --- | --- |\n`;
    component.parts.forEach(part => {
      content += `| **${part.name || 'default'}** | ${part.docs || 'No description provided.'} |\n`;
    });
    content += `\n`;
  }

  // Slots Section
  if (component.slots.length > 0) {
    content += `## Slots\n\n`;
    content += `| Slot | Description |\n`;
    content += `| --- | --- |\n`;
    component.slots.forEach(slot => {
      content += `| **${slot.name || 'default'}** | ${slot.docs || 'No description provided.'} |\n`;
    });
    content += `\n`;
  }

  // Events Section
  if (component.events.length > 0) {
    content += `## Events\n\n`;
    content += `| Event | Description |\n`;
    content += `| --- | --- |\n`;
    component.events.forEach(event => {
      content += `| **${event.event}** | ${event.docs || 'No description provided.'} |\n`;
    });
    content += `\n`;
  }

  // Methods Section
  if (component.methods.length > 0) {
    content += `## Methods\n\n`;
    content += `| Method | Description |\n`;
    content += `| --- | --- |\n`;
    component.methods.forEach(method => {
      content += `| **${method.name}**(${method.parameters.map(p => p.name).join(', ')}) | ${method.docs || 'No description provided.'} |\n`;
    });
    content += `\n`;
  }

  // Usage Section
  const usageContent = getUsageContent(component);
  content += `## Usage & Examples\n\n`;
  content += `${usageContent || `No usage is provided for this component.`}\n\n`;

  return content;
}

/**
 * Retrieves the usage content for a given component.
 *
 * @param {JsonDocsComponent} component - The component object containing usage directory information.
 * @return {string | null} The contents of the usage file as a string, or null if the file does not exist.
 */
function getUsageContent(component: JsonDocsComponent): string | null {
  try {
    const usageDir: string | undefined = component.usagesDir;

    if (usageDir && fs.existsSync(usageDir)) {
      // Adjusting the file name to match the actual file name
      const usageFilePath: string = path.resolve(usageDir, `${component.tag}-usage.md`);

      // Check if the specific usage file exists
      if (fs.existsSync(usageFilePath)) {
        return fs.readFileSync(usageFilePath, 'utf-8');
      }
    }
  } catch (err: any) {
    console.error(`Error retrieving usage content for ${component.tag}:`, err);
  }

  return null;
}

function getStyleDocs(component: JsonDocsComponent): { name: string; docs: string, default: string }[] {
  const targetFilePath = path.resolve(component.dirPath, `${component.tag}.pcss`);
  let finalStylesDocs = [];

  const autoStyles = component.styles;

  try {
    // First look for Stencil.js auto README docs to get styles
    if (autoStyles && autoStyles.length > 0) {
      autoStyles.forEach(style => {
        finalStylesDocs.push({ name: style.name, docs: style.docs });
      });
    }

    // If no Stencil.js auto styles found, look for them manually
    else if (fs.existsSync(targetFilePath)) {
      const content = fs.readFileSync(targetFilePath, 'utf-8');
      const lines = content.split('\n');

      const propRegex = /@prop\s+([\w-]+):\s*(.*)/;
      const defaultRegex = /@prop-default:\s*(.*)/;

      let currentProp = null;

      lines.forEach(line => {
        const match = line.match(propRegex);
        if (match) {
          const name = match[1].trim();
          const docs = match[2].trim();
          currentProp = { name, docs, default: '' };
          finalStylesDocs.push(currentProp);
        }

        if (currentProp) {
          const defaultMatch = line.match(defaultRegex);
          if (defaultMatch) {
            currentProp.default = defaultMatch[1].trim();
            currentProp = null; // Reset for the next property
          }
        }
      });
    }
  } catch (error) {
    console.error(`Failed to read ${targetFilePath}: ${error.message}`);
  }

  return finalStylesDocs;
}
