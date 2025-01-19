import {
  AspectRatioType,
  BackgroundColorType,
  BorderColorType,
  BorderRadiusType,
  ColorType,
  ExtendedColorType,
  FontSizeType,
  FontWeightType,
  HeightSizeType,
  LineHeightType,
  ObjectFitType,
  ObjectPositionType,
  OptionalAppearanceType,
  OptionalDirectionalAppearanceType,
  TextAlignmentType,
  TextColorType,
  TextTransformType,
  WidthSizeType
} from "./component-props-types";

/**
 * GLOBAL PREFIX
 */
export const GLOBAL_PREFIX = 'tnw';

/* -----------------------------------------------------------
 * Array Utilities
 * -----------------------------------------------------------
 */

/**
 * Checks if the given value is an array.
 * @param {any} arr - The value to check.
 * @return {boolean} True if the value is an array, otherwise false.
 */
export function isThisArray(arr: any): boolean {
  return Array.isArray(arr);
}

/**
 * Checks if the given array is empty or undefined.
 * @param {any} arr - The array to check.
 * @return {boolean} True if the array is empty or undefined, false otherwise.
 */
export function isArrayEmpty(arr: any): boolean {
  return !Array.isArray(arr) || arr.length === 0 || arr === undefined;
}

/**
 * Fills an array to a specified length with an optional fill value or by replicating the last element.
 *
 * @param {T[]} originalArray - The original array to be filled.
 * @param {number} targetLength - The desired length of the array.
 * @param {T} [fillWith] - The value to fill the array with.
 * @returns {T[]} - The filled array.
 */
export function fillArray<T>(originalArray: T[], targetLength: number, fillWith?: T): T[] {
  if (originalArray.length >= targetLength) {
    return originalArray;
  }

  const fillValue = fillWith === undefined ? originalArray[originalArray.length - 1] : fillWith;

  if (originalArray.length === 0 && fillWith === undefined) {
    return;
  }

  const additionalElements = Array(targetLength - originalArray.length).fill(fillValue);
  return [...originalArray, ...additionalElements];
}

/* -----------------------------------------------------------
 * String Utilities
 * -----------------------------------------------------------
 */

/**
 * Converts a kebab-case string to PascalCase.
 *
 * @param {string} str - The kebab-case string to convert.
 * @return {string} The PascalCase version of the string.
 */
export function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Converts a PascalCase string to kebab-case.
 *
 * @param {string} str - The PascalCase string to convert.
 * @return {string} The kebab-case version of the string.
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Converts a string to camelCase.
 *
 * @param {string} str - The string to convert.
 * @return {string} The camelCase version of the string.
 */
export function toCamelCase(str: string): string {
  return str
    .split(/[-_\s]/) // Split by hyphen, underscore, or space
    .map((s, i) => (i === 0 ? s.toLowerCase() : s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()))
    .join('');
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
export function getClassNames(
  classes: any[],
  baseClassName?: string,
  valuesToClean: string[] | null = ['none']
): string {
  return classes
    .filter((value) => value !== false && !valuesToClean.includes(value))
    .map((value) => (`${baseClassName}--${value}`))
    .join(' ')
    .trim();
}

/**
 * Generates a string of class names based on a map of key-value pairs.
 * 
 * @param {Record<string, any>} classMap - An object where the keys represent class names and values represent conditions.
 * @param {string} [baseClassName] - The base class name to be used if `true` values are present.
 * @param {string[]} [valuesToClean=['none']] - An array of values to be ignored/cleaned from the classes.
 * @returns {string|null} A space-separated string of class names or null if the base class name is invalid.
 * 
 * @example
 * getClassNamesMap({ active: true, disabled: false, size: 'large' }, 'btn'); // 'btn--active btn--size-large'
 */
export function getClassNamesFromMap(
  classMap: Record<string, any>,
  baseClassName?: string,
  valuesToClean: string[] | null = ['none']
): string | null {
  if (!isNotEmptyString(baseClassName)) {
    return null;
  }

  return Object.entries(classMap)
    .filter(([, value]) => value !== undefined && value !== false && !valuesToClean.includes(value))
    .map(([classKey, classValue]) => {
      if (typeof classValue === 'boolean') {
        return `${baseClassName}--${classKey}`;
      }

      return `${baseClassName}--${classKey}-${classValue}`;
    })
    .filter(Boolean)
    .join(' ')
    .trim();
}

/**
 * Returns a class name that can be used to create a visual style for a component.
 */
export function getAppearanceClass(
  appearance: OptionalAppearanceType,
  variant: ColorType
) {
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
export function getExtendedAppearanceClass(
  appearance: OptionalAppearanceType,
  variant: ExtendedColorType
) {
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

export function getDirectionalAppearanceClass(
  appearance: OptionalDirectionalAppearanceType,
  variant: ExtendedColorType
) {
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

export function getColorClass(
  prop: "color" | "bg" | "border" | "placeholder" | "border-right" | "border-left" | "border-top" | "border-bottom",
  value: TextColorType | BackgroundColorType | BorderColorType
): string {
  if (value === "none" || !isNotEmptyString(value)) {
    return "";
  }

  const prefixMap: { [key: string]: string } = {
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

  if (value?.startsWith("gray")) {
    const grayValue = value.replace("gray", "gray-");
    return `${classPrefix}-${grayValue}`;
  }

  return `${classPrefix}-${value}`;
}

export function getTypographyClass(
  prop: "fs" | "fw" | "lh" | "ta",
  value: FontSizeType | FontWeightType | LineHeightType | TextAlignmentType
): string {
  if (!isNotEmptyString(value)) {
    return "";
  }

  const prefixMap: { [key: string]: string } = {
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
export function getTextTransformClass(
  value: TextTransformType
): string {
  if (!isNotEmptyString(value)) {
    return "";
  }

  return value as string;
}

export function getBorderRadiusClass(value: BorderRadiusType): string {
  if (value === "none" || !isNotEmptyString(value)) {
    return "";
  }

  return `rounded-${value}`;
}

export function getAspectRatioClass(value: AspectRatioType): string {
  if (value === "initial" || !isNotEmptyString(value)) {
    return "";
  }

  return `ar-${value}`;
}


export function getObjectPositionClass(value: ObjectPositionType): string {
  if (value === "initial" || !isNotEmptyString(value)) {
    return "";
  }

  const classValueMap: { [key: string]: string } = {
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

export function getObjectFitClass(value: ObjectFitType): string {
  if (value === "none" || !isNotEmptyString(value)) {
    return "";
  }

  return `fit-${value}`;
}

export function getHeightClass(value: HeightSizeType): string {
  if (!isNotEmptyString(value)) {
    return "";
  }

  return `h-${value}`;
}


export function getMinHeightClass(value: HeightSizeType): string {
  if (!isNotEmptyString(value)) {
    return "";
  }

  return `min-h-${value}`;
}

export function getMaxHeightClass(value: HeightSizeType): string {
  if (!isNotEmptyString(value)) {
    return "";
  }

  return `max-h-${value}`;
}

export function getWidthClass(value: WidthSizeType): string {
  if (!isNotEmptyString(value)) {
    return "";
  }

  return `w-${value}`;
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
export function parseJSONAsync(jsonString: string): Promise<any> {
  return new Promise((resolve) => {
    try {
      const result = JSON.parse(jsonString);
      resolve(result);
    } catch (error) {
      throw new Error(`Error parsing JSON: ${error.message}`);
    }
  });
}

/**
 * Checks if a string is a valid JSON string that can be parsed.
 * @param {string | undefined} str - The string to validate as JSON.
 * @returns {boolean} True if the string can be parsed as valid JSON, false otherwise.
 * @example
 * isValidStringifiedJSON('{"name": "John"}') // returns true
 * isValidStringifiedJSON('invalid json') // returns false
 * isValidStringifiedJSON(undefined) // returns false
 */
export function isValidStringifiedJSON(str: string | undefined): boolean {
  if (!str || typeof str !== 'string') {
    return false;
  }

  console.log('str ', str);

  try {
    JSON.parse(str);
    console.log('str is valid JSON');
    return true;
  } catch {
    console.log('str is not valid JSON');
    return false;
  }
}

/* -----------------------------------------------------------
 * Prop Validation Utilities
 * -----------------------------------------------------------
 */

/**
 * Interface for checking the dependency between a required prop and a conditional prop.
 * If the conditional prop is not provided or is falsy, the required prop must be present.
 */
export interface PropDependencyCheck {
  /** The name of the required prop that must be provided if the conditional prop is missing. */
  requiredPropName: string;

  /** The value of the required prop. */
  requiredProp: any;

  /** 
   * The name of the conditional prop that makes the required prop optional. 
   * If not provided or falsy, the required prop becomes mandatory.
   */
  conditionalPropName?: string;

  /** The value of the conditional prop. If this is truthy, the required prop may be omitted. */
  conditionalProp?: any;

  /** 
   * A custom error message to display if the validation fails. 
   * If not provided, a default error message will be generated.
   */
  customErrorMessage?: string;
}

/**
 * Validates that required props are enforced when the respective conditional props are missing or falsy.
 * Allows custom error messages and aggregates multiple validation failures into a single error.
 *
 * @param checks - An array of objects representing the dependency between required and conditional props.
 * @throws {Error} If any required prop is missing when the corresponding conditional prop is not provided or falsy.
 */
export function enforceRequiredPropsWhenConditionMissing(checks: PropDependencyCheck[]): void {
  const failedValidations: string[] = [];
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
 * Interface for checking if a group of props must be used together.
 * If one prop in the group is provided, all other props in the group must also be provided.
 */
export interface PropGroupCheck {
  /** The list of prop names that must all be provided together. */
  propNames: string[];

  /** The corresponding values for the props in the group. */
  propValues: any[];

  /** Optional custom error message if the validation fails. */
  customErrorMessage?: string;
}

/**
 * Validates that a group of props are used together.
 * If one prop in the group is provided, all other props in the group must also be provided.
 *
 * @param checks - An array of objects representing groups of props that must be used together.
 * @throws {Error} If any group of props is incomplete when one or more props from that group are provided.
 */
export function enforceGroupedPropsUsage(checks: PropGroupCheck[]): void {
  const failedValidations: string[] = [];

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
export function isNotEmptyString(s: string | null | undefined): boolean {
  return typeof s === "string" && s.trim() !== '' && s !== null && s !== undefined;
}


export function isNotEmptyStringOrNumber(s: string | number | null | undefined): boolean {
  if (s === null || s === undefined) return false;
  if (typeof s === "string") return s.trim() !== '';
  if (typeof s === "number") return !isNaN(s);
  return false;
}

/**
 * Validates if a prop value exists in the list of valid types. If the value is invalid,
 * it throws an error with a descriptive message. It is recommended to include the component name
 * for easier debugging.
 *
 * @template T - The type of the prop value.
 * @param {T} value - The value to be validated.
 * @param {T[]} validTypes - An array of valid types for the prop.
 * @param {string} propName - The name of the prop being validated.
 * @param {string} [componentName] - (Optional) The name of the component for a more descriptive error message.
 * 
 * @throws Will throw an error if the value is not found in the validTypes array.
 *
 * @example
 * validatePropValue('primary', ['default', 'primary', 'secondary'], 'variant', 'tnw-button');
 * // Valid: No error
 *
 * validatePropValue('large', ['default', 'primary', 'secondary'], 'variant', 'tnw-button');
 * // Throws Error: Invalid value "large" for prop "variant" in component tnw-button. Expected one of: default, primary, secondary
 */
export function validatePropValue<T>(value: T, validTypes: T[], propName: string, componentName?: string): void {
  if (!validTypes.includes(value)) {
    const componentMessage = isNotEmptyString(componentName) ? ` in component:"${componentName}"` : '';
    throw new Error(`Invalid value "${value}" for prop "${propName}"${componentMessage}. Expected one of: ${validTypes.join(', ')}`);
  }
}

/**
 * Checks if the browser supports `CSSStyleSheet`.
 * @returns {boolean} True if the browser supports `CSSStyleSheet`, false otherwise.
 */
export const isCSSStyleSheetSupported = (): boolean => {
  return typeof CSSStyleSheet !== 'undefined';
};

/**
* Checks if the browser supports `adoptedStyleSheets` on the `Document` object.
* This property is used for Shadow DOM styling and is supported in some modern browsers.
* @returns {boolean} True if the browser supports `adoptedStyleSheets`, false otherwise.
*/
export const isAdoptedStyleSheetsSupported = (): boolean => {
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
export function generateRandomId(prefix?: string, length: number = 9, suffix?: string): string {
  const minLength = 4;
  const validLength = Math.max(length, minLength);
  const randomString = Math.random().toString(36).slice(2, 2 + validLength);

  return [prefix, randomString, suffix].filter(Boolean).join('-').trim();
}


/**
 * Generates a random color in hexadecimal format.
 * @returns A random color in hexadecimal format (e.g. '#FF0000').
 */
export const generateRandomColor = (): string => {
  const letters: string = '0123456789ABCDEF';
  let color: string = '#';
  for (let i: number = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};