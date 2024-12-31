
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-testimonial-card.tsx` file.
 * 
validateProps([this.appearance, this.authorName, this.authorPhotoAlt, this.authorPhotoSrc, this.authorRole, this.borderRadius, this.padding, this.spacing, this.text, this.useGlassmorphismEffect, this.useRandomAvatar, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-testimonial-card`
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
    "name": "authorName",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "authorPhotoAlt",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "authorPhotoSrc",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "authorRole",
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
    "name": "padding",
    "type": [
      "lg",
      "md",
      "none",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "spacing",
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
      "string"
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
    "name": "useRandomAvatar",
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