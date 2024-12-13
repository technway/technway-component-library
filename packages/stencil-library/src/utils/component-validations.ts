import { isNotEmptyString } from './utils';


/**
 * Validates that the provided highlight text is present in the main text.
 *
 * @throws If the highlight text is not present in the main text.
 * @throws If the main text is an empty string.
 * @throws If the highlight text is an empty string.
 *
 * @param text The main text to validate against.
 * @param highlight The text to highlight in the main text.
 */
export function validateHighlightText(text: string, highlight?: string): void {
    const trimmedText = text.trim();
    const trimmedHighlight = highlight?.trim();

    if (!isNotEmptyString(trimmedText)) {
        throw new Error('Main text must be a non-empty string to validate highlight text');
    }

    if (isNotEmptyString(trimmedHighlight)) {
        if (trimmedText.toLowerCase().indexOf(trimmedHighlight.toLowerCase()) === -1) {
            throw new Error(`Highlight text "${trimmedHighlight}" not found in the provided text "${trimmedText}"`);
        }
    } else if (highlight !== undefined) {
        throw new Error('Highlight text cannot be an empty string');
    }
}