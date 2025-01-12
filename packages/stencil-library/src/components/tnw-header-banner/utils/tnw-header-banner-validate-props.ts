
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-header-banner.tsx` file.
 * 
validateProps([this.alignment, this.buttonLabel, this.contentMaxWidth, this.contentWidth, this.description, this.enableImageSlot, this.heading, this.imageAlt, this.imageBorderRadius, this.imageSrc, this.stickyNavbar, this.subheading, this.theme, this.width, this.wrapImage]);
 *
 * GENERATED USING `npm run g:components-validations tnw-header-banner`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "alignment",
    "type": [
      "center",
      "end",
      "left",
      "right",
      "start"
    ],
    "isRequired": false
  },
  {
    "name": "buttonLabel",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "contentMaxWidth",
    "type": [
      "lg",
      "md",
      "sm",
      "unset",
      "xl"
    ],
    "isRequired": false
  },
  {
    "name": "contentWidth",
    "type": [
      "full",
      "half"
    ],
    "isRequired": false
  },
  {
    "name": "description",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "enableImageSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "heading",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "imageAlt",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "imageBorderRadius",
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
    "name": "imageSrc",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "stickyNavbar",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "subheading",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "theme",
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
    "name": "width",
    "type": [
      "full",
      "lg",
      "md",
      "sm",
      "xl"
    ],
    "isRequired": false
  },
  {
    "name": "wrapImage",
    "type": [
      "boolean"
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