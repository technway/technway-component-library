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

/**
 * Configuration object for validating component properties.
 * 
 * @typedef {Object} ValidationConfig
 * @property {Object.<string, { validValues?: any[], defaultValue?: any, required?: boolean }>} [key] - The key is the name of the property to validate.
 * @property {any[]} [key.validValues] - List of valid values for the property.
 * @property {any} [key.defaultValue] - Default value to use if the property value is invalid.
 * @property {boolean} [key.required] - Indicates whether the property is required.
 */
// type ValidationConfig = {
//     [key: string]: {
//         /**
//          * List of valid values for the property.
//          */
//         validValues?: any[];

//         /**
//          * Default value to use if the property value is invalid.
//          */
//         defaultValue?: any; 

//         /**
//          * Indicates whether the property is required.
//          */
//         required?: boolean; 
//     };
// };

/**
 * Validates an object based on the provided validation configuration.
 * 
 * @template T - The type of the object to be validated.
 * @param obj - The object to be validated.
 * @param config - The validation configuration specifying valid values, default values, and required properties.
 * @returns The validated object with any invalid or missing properties set to their default values.
 * 
 * @example
 * ```typescript
 * interface MyObject {
 *   prop1: string;
 *   prop2: number;
 * }
 * 
 * const obj: MyObject = { prop1: 'value1', prop2: 42 };
 * const config = {
 *   prop1: { validValues: ['value1', 'value2'], defaultValue: 'default1', required: true },
 *   prop2: { validValues: [42, 43], defaultValue: 42, required: false }
 * };
 * 
 * const validatedObj = validateObject(obj, config);
 * // validatedObj will be { prop1: 'value1', prop2: 42 }
 * ```
 */
// export function validateObject<T extends object>(obj: T, config: ValidationConfig): T {
//     const validatedObject = { ...obj };

//     for (const key in config) {
//         const { validValues, defaultValue, required } = config[key];

//         // Check if the property is required but missing
//         if (required && !(key in validatedObject)) {
//             console.error(`Missing required property: ${key}`);
//             validatedObject[key] = defaultValue;
//             continue;
//         }

//         // Skip undefined properties
//         if (validatedObject[key] === undefined) {
//             continue;
//         }

//         // Validate against valid values
//         if (validValues && !validValues.includes(validatedObject[key])) {
//             console.error(
//                 `Invalid value for property "${key}": ${validatedObject[key]}. Defaulting to "${defaultValue}".`
//             );
//             validatedObject[key] = defaultValue;
//         }
//     }

//     return validatedObject;
// }