/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
/**
 * GLOBAL PREFIX
 */
const GLOBAL_PREFIX = 'tnw';
/**
 * Checks if the given array is empty or undefined.
 * @param {any} arr - The array to check.
 * @return {boolean} True if the array is empty or undefined, false otherwise.
 */
function isArrayEmpty(arr) {
    return !Array.isArray(arr) || arr.length === 0 || arr === undefined;
}
/* -----------------------------------------------------------
 * Class Name Utilities
 * -----------------------------------------------------------
 */
/**
 * Generates a string of class names based on an array of values.
 *
 * @param {any[]} classes - An array containing string, boolean, or other values that determine the classes.
 * @param {string} [baseClassName] - The base class name to be used if `true` values are present.
 * @param {string[]} [valuesToClean=['none']] - An array of values to be ignored/cleaned from the classes.
 * @returns {string} A space-separated string of class names.
 *
 * @example
 * getClassNames([true, 'active', false], 'btn'); // 'btn--true active'
 */
function getClassNames(classes, baseClassName, valuesToClean = ['none']) {
    return classes
        .filter((value) => value !== false && !valuesToClean.includes(value))
        .map((value) => (`${baseClassName}--${value}`))
        .join(' ')
        .trim();
}
/**
 * Returns a class name that can be used to create a visual style for a component.
 */
function getAppearanceClass(appearance, variant) {
    const baseClass = GLOBAL_PREFIX;
    const variantClass = 'v';
    if (!isNotEmptyString(appearance)) {
        return '';
    }
    if (appearance === 'none') {
        return `${baseClass}-${variantClass}-none`;
    }
    if (!isNotEmptyString(variant)) {
        return '';
    }
    const appearanceClass = `${baseClass}-${variantClass}-${appearance}-${variant}`;
    return appearanceClass;
}
/**
 * Returns a class name that can be used to style a component with an extended appearance variant.
 */
function getExtendedAppearanceClass(appearance, variant) {
    const baseClass = GLOBAL_PREFIX;
    const variantClass = 'extended-v';
    if (!isNotEmptyString(appearance)) {
        return '';
    }
    if (appearance === 'none') {
        return `${baseClass}-${variantClass}-none`;
    }
    if (!isNotEmptyString(variant)) {
        return '';
    }
    const appearanceClass = `${baseClass}-${variantClass}-${appearance}-${variant}`;
    return appearanceClass;
}
function getDirectionalAppearanceClass(appearance, variant) {
    const baseClass = GLOBAL_PREFIX;
    const variantClass = 'directional-v';
    if (!isNotEmptyString(appearance)) {
        return '';
    }
    if (appearance === 'none') {
        return `${baseClass}-${variantClass}-none`;
    }
    if (!isNotEmptyString(variant)) {
        return '';
    }
    const appearanceClass = `${baseClass}-${variantClass}-${appearance}-${variant}`;
    return appearanceClass;
}
function getColorClass(prop, value) {
    if (value === "none" || !isNotEmptyString(value)) {
        return "";
    }
    const prefixMap = {
        color: "color",
        bg: "bg",
        border: "border",
        placeholder: "placeholder",
        "border-right": "border-r",
        "border-left": "border-l",
        "border-top": "border-t",
        "border-bottom": "border-b",
    };
    const classPrefix = prefixMap[prop];
    if (value === null || value === void 0 ? void 0 : value.startsWith("gray")) {
        const grayValue = value.replace("gray", "gray-");
        return `${classPrefix}-${grayValue}`;
    }
    return `${classPrefix}-${value}`;
}
function getTypographyClass(prop, value) {
    if (!isNotEmptyString(value)) {
        return "";
    }
    const prefixMap = {
        fs: "fs",
        fw: "fw",
        lh: "lh",
        ta: "ta",
        case: "",
    };
    const classPrefix = prefixMap[prop];
    return `${classPrefix}-${value}`;
}
/**
 * Returns a class name that can be used to control the text transformation of a component.
 *
 * @param value - The value of the text transformation property.
 * @returns A string representing the class name that can be used to style the component.
 */
function getTextTransformClass(value) {
    if (!isNotEmptyString(value)) {
        return "";
    }
    return value;
}
function getBorderRadiusClass(value) {
    if (value === "none" || !isNotEmptyString(value)) {
        return "";
    }
    return `rounded-${value}`;
}
function getAspectRatioClass(value) {
    if (value === "initial" || !isNotEmptyString(value)) {
        return "";
    }
    return `ar-${value}`;
}
function getObjectPositionClass(value) {
    if (value === "initial" || !isNotEmptyString(value)) {
        return "";
    }
    const classValueMap = {
        "top": "t",
        "bottom": "b",
        "left": "l",
        "right": "r",
        "center": "c",
        "top-left": "tl",
        "top-right": "tr",
        "bottom-left": "bl",
        "bottom-right": "br",
        "left-top": "lt",
        "left-bottom": "lb",
        "right-top": "rt",
        "right-bottom": "rb",
        "center-left": "cl",
        "center-right": "cr",
        "center-top": "ct",
        "center-bottom": "cb",
    };
    const mappedClass = classValueMap[value];
    // Return the class if a mapping exists, otherwise return an empty string
    return mappedClass.length > 0 ? `obj-pos-${mappedClass}` : "";
}
function getObjectFitClass(value) {
    if (value === "none" || !isNotEmptyString(value)) {
        return "";
    }
    return `fit-${value}`;
}
function getHeightClass(value) {
    if (!isNotEmptyString(value)) {
        return "";
    }
    return `h-${value}`;
}
function getMinHeightClass(value) {
    if (!isNotEmptyString(value)) {
        return "";
    }
    return `min-h-${value}`;
}
/* -----------------------------------------------------------
 * JSON Utilities
 * -----------------------------------------------------------
 */
/**
 * Asynchronously parses a JSON string.
 * @param {string} jsonString - The JSON string to parse.
 * @return {Promise<any>} A promise that resolves to the parsed JSON object or an empty array on error.
 */
function parseJSONAsync(jsonString) {
    return new Promise((resolve) => {
        try {
            const result = JSON.parse(jsonString);
            resolve(result);
        }
        catch (error) {
            throw new Error(`Error parsing JSON: ${error.message}`);
        }
    });
}
/**
 * Validates that required props are enforced when the respective conditional props are missing or falsy.
 * Allows custom error messages and aggregates multiple validation failures into a single error.
 *
 * @param checks - An array of objects representing the dependency between required and conditional props.
 * @throws {Error} If any required prop is missing when the corresponding conditional prop is not provided or falsy.
 */
function enforceRequiredPropsWhenConditionMissing(checks) {
    const failedValidations = [];
    checks.forEach(({ requiredPropName, requiredProp, conditionalPropName, conditionalProp, customErrorMessage }) => {
        const requiredPropIsMissing = requiredProp === undefined || requiredProp === null || requiredProp === false || requiredProp === '';
        const conditionalPropIsMissing = conditionalProp === undefined || conditionalProp === null || conditionalProp === false || conditionalProp === '';
        // If both the required and conditional props are missing or falsy, log a failure
        if (requiredPropIsMissing && (!isNotEmptyString(conditionalPropName) || conditionalPropIsMissing)) {
            const errorMessage = customErrorMessage ||
                `The "${requiredPropName}" prop is required when the "${conditionalPropName || 'condition'}" prop is not provided.`;
            failedValidations.push(errorMessage);
        }
    });
    // If any validations failed, throw an aggregated error message
    if (failedValidations.length > 0) {
        throw new Error(`Validation failed:\n- ${failedValidations.join('\n- ')}`);
    }
}
/**
 * Validates that a group of props are used together.
 * If one prop in the group is provided, all other props in the group must also be provided.
 *
 * @param checks - An array of objects representing groups of props that must be used together.
 * @throws {Error} If any group of props is incomplete when one or more props from that group are provided.
 */
function enforceGroupedPropsUsage(checks) {
    const failedValidations = [];
    checks.forEach(({ propNames, propValues, customErrorMessage }) => {
        const groupHasValue = propValues.some(value => value !== undefined && value !== null && value !== '');
        const groupIsComplete = propValues.every(value => value !== undefined && value !== null && value !== '');
        // If any value in the group is provided but the group is incomplete, log a failure
        if (groupHasValue && !groupIsComplete) {
            const missingProps = propNames.filter((_, index) => propValues[index] === undefined || propValues[index] === null || propValues[index] === '');
            const errorMessage = customErrorMessage ||
                `The following props must be used together: ${missingProps.join(', ')} are missing.`;
            failedValidations.push(errorMessage);
        }
    });
    // If any validations failed, throw an aggregated error message
    if (failedValidations.length > 0) {
        throw new Error(`Validation failed:\n- ${failedValidations.join('\n- ')}`);
    }
}
/**
 * Returns true if the given string is not null, undefined, or empty (i.e. after trimming).
 * @param {string | null | undefined} s - The string to check.
 * @returns {boolean} True if the string is not empty, false otherwise.
 */
function isNotEmptyString(s) {
    return typeof s === "string" && s.trim() !== '' && s !== null && s !== undefined;
}
function isNotEmptyStringOrNumber(s) {
    if (s === null || s === undefined)
        return false;
    if (typeof s === "string")
        return s.trim() !== '';
    if (typeof s === "number")
        return !isNaN(s);
    return false;
}
/**
 * Checks if the browser supports `CSSStyleSheet`.
 * @returns {boolean} True if the browser supports `CSSStyleSheet`, false otherwise.
 */
const isCSSStyleSheetSupported = () => {
    return typeof CSSStyleSheet !== 'undefined';
};
/**
* Checks if the browser supports `adoptedStyleSheets` on the `Document` object.
* This property is used for Shadow DOM styling and is supported in some modern browsers.
* @returns {boolean} True if the browser supports `adoptedStyleSheets`, false otherwise.
*/
const isAdoptedStyleSheetsSupported = () => {
    return isCSSStyleSheetSupported() && 'adoptedStyleSheets' in Document.prototype;
};
/**
 * Generates a unique identifier by combining an optional prefix, a random string of a specified length (with a minimum), and an optional suffix.
 * The random string is generated from a base-36 encoded random number. If the provided length is less than 4, the length will default to 4.
 *
 * @param prefix - An optional string that is placed at the beginning of the generated ID. If not provided, it will be omitted.
 * @param suffix - An optional string that is placed at the end of the generated ID. If not provided, it will be omitted.
 * @param length - The length of the random string portion. If a value less than 4 is provided, 4 will be used. Default is 9.
 * @returns A unique identifier string in the format: 'prefix-<randomString>-suffix', where prefix and suffix are optional.
 */
function generateRandomId(prefix, length = 9, suffix) {
    const minLength = 4;
    const validLength = Math.max(length, minLength);
    const randomString = Math.random().toString(36).slice(2, 2 + validLength);
    return [prefix, randomString, suffix].filter(Boolean).join('-').trim();
}
/**
 * Generates a random color in hexadecimal format.
 * @returns A random color in hexadecimal format (e.g. '#FF0000').
 */
const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export { GLOBAL_PREFIX as G, isCSSStyleSheetSupported as a, isAdoptedStyleSheetsSupported as b, getBorderRadiusClass as c, getClassNames as d, getExtendedAppearanceClass as e, enforceRequiredPropsWhenConditionMissing as f, generateRandomId as g, enforceGroupedPropsUsage as h, isNotEmptyString as i, getColorClass as j, isNotEmptyStringOrNumber as k, getTypographyClass as l, getTextTransformClass as m, getAppearanceClass as n, getAspectRatioClass as o, getObjectFitClass as p, getObjectPositionClass as q, parseJSONAsync as r, getMinHeightClass as s, getHeightClass as t, isArrayEmpty as u, getDirectionalAppearanceClass as v, generateRandomColor as w };

//# sourceMappingURL=p-80d80a0e.js.map