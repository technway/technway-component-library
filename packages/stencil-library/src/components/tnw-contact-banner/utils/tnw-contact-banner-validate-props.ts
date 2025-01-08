
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-contact-banner.tsx` file.
 * 
validateProps([this.alignment, this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableContentSlot, this.gap, this.layout, this.margin, this.paddingHorizontal, this.paddingVertical, this.textAlignment]);
 *
 * GENERATED USING `npm run g:components-validations tnw-contact-banner`
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
    "name": "appearance",
    "type": [
      "gradient",
      "mixed",
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
      "inverse",
      "light",
      "primary",
      "secondary",
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
    "name": "disableInternalContainer",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "enableContentSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "gap",
    "type": [
      "2xl",
      "3xl",
      "4xl",
      "lg",
      "md",
      "sm",
      "xl",
      "xs"
    ],
    "isRequired": false
  },
  {
    "name": "layout",
    "type": [
      "horizontal",
      "vertical"
    ],
    "isRequired": false
  },
  {
    "name": "margin",
    "type": [
      "2xl",
      "3xl",
      "4xl",
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
    "name": "paddingHorizontal",
    "type": [
      "2xl",
      "3xl",
      "4xl",
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
    "name": "paddingVertical",
    "type": [
      "2xl",
      "3xl",
      "4xl",
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
    "name": "textAlignment",
    "type": [
      "center",
      "end",
      "left",
      "right",
      "start"
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