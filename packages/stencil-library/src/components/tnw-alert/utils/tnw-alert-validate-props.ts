
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-alert.tsx` file.
 * 
validateProps([this.alertId, this.appearance, this.appearanceColor, this.borderRadius, this.isHidden, this.message, this.size]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-alert`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "alertId",
    "type": [
      "string"
    ],
    "isRequired": true
  },
  {
    "name": "appearance",
    "type": [
      "mixed",
      "none",
      "outlined",
      "solid",
      "transparent"
    ],
    "isRequired": false
  },
  {
    "name": "appearanceColor",
    "type": [
      "danger",
      "info",
      "success",
      "warning"
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
    "name": "isHidden",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "message",
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
  }
];

  // Iterate over all the properties of the component
  props.forEach((prop, i) => {
    const value = propsValues[i];
    const expectedTypes = prop.type;
    const isRequired = prop.isRequired;

    // Check if a required prop has no value
    if (isRequired && (!isNotEmptyString(value) || value === undefined || value === null)) {
      throw new Error(`tnw-alert: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-alert: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}