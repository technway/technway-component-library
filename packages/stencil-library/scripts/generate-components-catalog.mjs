import path from 'path';
import { getRootDir, getScriptTemplate, logError, readFileContent, replaceContentBetweenMarkers, writeFileContent } from './utils/utils.mjs';

function generateComponentsCatalog() {
    const sourceMarkdownPath = path.join(getRootDir(), 'docs', 'stencil-generated', 'components-index.md');
    const outputFileName = 'catalog.mdx';
    const outputFilePath = path.join(getRootDir(), 'src', 'stories', outputFileName);
    
    console.log(`Generating catalog in ${outputFilePath}`);
    
    const mdxTemplatePath = path.join(getRootDir(), 'scripts', 'templates', 'generate-components-catalog.txt');
    const markerStart = '{/* === START: Auto-generated content - Do not edit manually === */}';
    const markerEnd = '{/* === END: Auto-generated content - Do not edit manually === */}';

    const template = getScriptTemplate(mdxTemplatePath);
    const sourceMarkdownContent = readFileContent(sourceMarkdownPath);
    console.log(`Read source content from ${sourceMarkdownPath}`);

    let content = template.replace(/CATALOG_CONTENT/g, sourceMarkdownContent)
    console.log(`Got the content for the catalog`);

    let outputFileContent = readFileContent(outputFilePath);
    console.log(`Read output content from ${outputFilePath}`);

    if (!outputFileContent.includes(markerStart) || !outputFileContent.includes(markerEnd)) {
        logError(`Replacement markers not found in the output file: ${outputFilePath}`);
        process.exit(1);
    }

    outputFileContent = replaceContentBetweenMarkers(outputFileContent, content, markerStart, markerEnd);
    writeFileContent(outputFilePath, outputFileContent);
}

generateComponentsCatalog();