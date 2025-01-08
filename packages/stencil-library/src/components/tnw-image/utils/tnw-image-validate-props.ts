
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-image.tsx` file.
 * 
validateProps([this.alt, this.aspectRatio, this.borderRadius, this.caption, this.height, this.heightSize, this.lazyLoading, this.link, this.objectFit, this.objectPosition, this.src, this.width, this.widthSize]);
 *
 * GENERATED USING `npm run g:components-validations tnw-image`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "alt",
    "type": [
      "string"
    ],
    "isRequired": true
  },
  {
    "name": "aspectRatio",
    "type": [
      "16_9",
      "1_1",
      "21_9",
      "3_4",
      "4_3",
      "9_16",
      "9_21",
      "initial"
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
    "name": "caption",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "height",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "heightSize",
    "type": [
      "full",
      "lg",
      "md",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "lazyLoading",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "link",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "objectFit",
    "type": [
      "contain",
      "cover",
      "fill",
      "none",
      "scale-down"
    ],
    "isRequired": false
  },
  {
    "name": "objectPosition",
    "type": [
      "bottom",
      "bottom-left",
      "bottom-right",
      "center",
      "center-bottom",
      "center-left",
      "center-right",
      "center-top",
      "initial",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
      "top-left",
      "top-right"
    ],
    "isRequired": false
  },
  {
    "name": "src",
    "type": [
      "string"
    ],
    "isRequired": true
  },
  {
    "name": "width",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "widthSize",
    "type": [
      "full",
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