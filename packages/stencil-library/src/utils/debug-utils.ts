/**
 * Logs the total size of the given CSSStyleSheet in kilobytes.
 * It sums the length of all the CSS rules' cssText.
 *
 * @param sheet - The CSSStyleSheet to measure.
 */
export function logStylesheetSize(sheet: CSSStyleSheet): void {
    let totalSizeInBytes = 0;

    for (let i = 0; i < sheet.cssRules.length; i++) {
        totalSizeInBytes += sheet.cssRules[i].cssText.length;
    }

    const totalSizeInKB = totalSizeInBytes / 1024;
    console.log(`Total size of stylesheet: ${totalSizeInKB.toFixed(2)} KB`);
}