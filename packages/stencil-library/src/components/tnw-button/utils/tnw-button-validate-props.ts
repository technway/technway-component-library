
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-button.tsx` file.
 * 
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disabled, this.hoverAppearance, this.hoverAppearanceColor, this.hoverEffect, this.href, this.label, this.newTab, this.size, this.type]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-button`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
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
      "auto",
      "black",
      "danger",
      "info",
      "inverse",
      "light",
      "primary",
      "secondary",
      "success",
      "warning",
      "white"
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
    "name": "hoverAppearance",
    "type": [
      "none",
      "outlined",
      "solid"
    ],
    "isRequired": false
  },
  {
    "name": "hoverAppearanceColor",
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
    "name": "hoverEffect",
    "type": [
      "contrast",
      "none",
      "opacity",
      "scale-down",
      "scale-up"
    ],
    "isRequired": false
  },
  {
    "name": "href",
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
    "name": "newTab",
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
      "sm",
      "xl",
      "xs"
    ],
    "isRequired": false
  },
  {
    "name": "type",
    "type": [
      "button",
      "submit"
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
      throw new Error(`tnw-button: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-button: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}