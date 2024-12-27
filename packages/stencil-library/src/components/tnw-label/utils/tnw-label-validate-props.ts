
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-label.tsx` file.
 * 
validateProps([this.color, this.htmlFor, this.isSrOnly, this.size, this.text, this.textCase, this.weight]);
 *
 * GENERATED USING `npm run g:components-validations tnw-label`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "color",
    "type": [
      "auto",
      "black",
      "gray100",
      "gray200",
      "gray300",
      "gray400",
      "gray500",
      "gray600",
      "gray700",
      "gray800",
      "gray900",
      "inverse",
      "light",
      "placeholder",
      "primary",
      "secondary",
      "white"
    ],
    "isRequired": false
  },
  {
    "name": "htmlFor",
    "type": [
      "string"
    ],
    "isRequired": true
  },
  {
    "name": "isSrOnly",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "size",
    "type": [
      "lg",
      "md",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "text",
    "type": [
      "number",
      "string"
    ],
    "isRequired": true
  },
  {
    "name": "textCase",
    "type": [
      "capitalize",
      "lowercase",
      "normal-case",
      "uppercase"
    ],
    "isRequired": false
  },
  {
    "name": "weight",
    "type": [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "heading",
      "text"
    ],
    "isRequired": false
  }
];

  // Iterate over all the properties of the component
  props.forEach((prop, i) => {
    const value = propsValues[i];
    const expectedTypes = prop.type;
    const isRequired = prop.isRequired;

    // Check if a required prop has no value
    if (isRequired && (!isNotEmptyString(value) || value === undefined || value === null)) {
      throw new Error(`Required prop "${prop.name}" must have value`);
    }

    // Check if the value is valid for the expected types
    const isValid = expectedTypes.some(expectedType => {
      // Handle primitive types such as string, number, boolean
      
      if (expectedType === "string" || expectedType === "number" || expectedType === "boolean") {
        return typeof value === expectedType;
      }

      // For enum-like values (like 'center', 'left', etc.), check if value matches
      return expectedType === value;
    });

    if (!isValid && value !== undefined) {
      throw new Error(`Invalid prop value for "${prop.name}": expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}