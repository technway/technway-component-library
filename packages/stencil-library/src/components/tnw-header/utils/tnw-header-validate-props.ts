
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-header.tsx` file.
 * 
validateProps([this.alignment, this.backgroundColor, this.borderBottomColor, this.centerBanner, this.disableInternalContainer, this.height, this.minHeight]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-header`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "alignment",
    "type": [
      "center",
      "end",
      "start"
    ],
    "isRequired": false
  },
  {
    "name": "backgroundColor",
    "type": [
      "auto",
      "black",
      "inverse",
      "primary",
      "secondary",
      "white"
    ],
    "isRequired": false
  },
  {
    "name": "borderBottomColor",
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
    "name": "centerBanner",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "disableInternalContainer",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "height",
    "type": [
      "auto",
      "full",
      "full-screen",
      "lg",
      "md",
      "sm",
      "xl"
    ],
    "isRequired": false
  },
  {
    "name": "minHeight",
    "type": [
      "auto",
      "full",
      "full-screen",
      "lg",
      "md",
      "sm"
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