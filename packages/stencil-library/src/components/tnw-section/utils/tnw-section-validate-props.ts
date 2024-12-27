
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-section.tsx` file.
 * 
validateProps([this.alignment, this.appearance, this.disableInternalContainer, this.isFirstSection, this.isLastSection, this.margin, this.padding, this.spacing, this.useGlassmorphismEffect, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-section`
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
      "mixed",
      "outlined",
      "outlined-block",
      "outlined-bottom",
      "outlined-inline",
      "outlined-left",
      "outlined-right",
      "outlined-top",
      "solid",
      "transparent"
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
    "name": "isFirstSection",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "isLastSection",
    "type": [
      "boolean"
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
    "name": "padding",
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
    "name": "spacing",
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
    "name": "useGlassmorphismEffect",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "variant",
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