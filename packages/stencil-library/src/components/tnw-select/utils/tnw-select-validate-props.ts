
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-select.tsx` file.
 * 
validateProps([this.accessibilityId, this.borderRadius, this.disabled, this.fullWidth, this.label, this.optionAppearance, this.optionsData, this.size, this.variant]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-select`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "accessibilityId",
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
    "name": "disabled",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "fullWidth",
    "type": [
      "boolean"
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
    "name": "optionAppearance",
    "type": [
      "bordered",
      "standard"
    ],
    "isRequired": false
  },
  {
    "name": "optionsData",
    "type": [
      "string"
    ],
    "isRequired": true
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
    "name": "variant",
    "type": [
      "standard",
      "withIconName",
      "withImage",
      "withStatus",
      "withSvgIcon"
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
      throw new Error(`tnw-select: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-select: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}