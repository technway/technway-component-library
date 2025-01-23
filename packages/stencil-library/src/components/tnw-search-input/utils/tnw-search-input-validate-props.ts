
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-search-input.tsx` file.
 * 
validateProps([this.appearance, this.appearanceColor, this.autoComplete, this.borderRadius, this.inputId, this.label, this.name, this.placeholder, this.type, this.value, this.variant, this.width]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-search-input`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "appearance",
    "type": [
      "none",
      "outlined",
      "underlined"
    ],
    "isRequired": false
  },
  {
    "name": "appearanceColor",
    "type": [
      "auto",
      "black",
      "inverse",
      "light",
      "primary",
      "secondary",
      "white"
    ],
    "isRequired": false
  },
  {
    "name": "autoComplete",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "borderRadius",
    "type": [
      "2xl",
      "3xl",
      "circle",
      "default",
      "full",
      "lg",
      "md",
      "none",
      "sm",
      "xl",
      "xs"
    ],
    "isRequired": false
  },
  {
    "name": "inputId",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "label",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "name",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "placeholder",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "type",
    "type": [
      "search",
      "text"
    ],
    "isRequired": false
  },
  {
    "name": "value",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "variant",
    "type": [
      "expandable",
      "icon-left",
      "icon-right",
      "no-icon"
    ],
    "isRequired": false
  },
  {
    "name": "width",
    "type": [
      "string"
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
      throw new Error(`tnw-search-input: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-search-input: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}