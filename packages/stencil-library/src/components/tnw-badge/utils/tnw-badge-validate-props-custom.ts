export function validateNumericalVariantLabel(label: string | number): void {
    if (label === undefined) return;

    const errorMsg = `Invalid value for "label" prop: expected a numeric string or number.`;

    if (typeof label === 'string') {
        // Check if the string is a valid number
        if (isNaN(Number(label))) {
            throw new Error(errorMsg);
        }
    } else if (typeof label !== 'number') {
        throw new Error(errorMsg);
    }
}