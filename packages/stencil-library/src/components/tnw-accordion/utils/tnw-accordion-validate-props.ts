
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-accordion.tsx` file.
 * 
validateProps([this.accordionId, this.appearance, this.appearanceColor, this.borderRadius, this.color, this.content, this.disableExpandIconRotate, this.enableCustomExpandIcon, this.expand, this.heading]);
 *
 * GENERATED USING `npm run g:components-validations tnw-accordion`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "accordionId",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "appearance",
    "type": [
      "none",
      "outlined",
      "solid",
      "transparent",
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
    "name": "color",
    "type": [
      "auto",
      "black",
      "gray100",
      "gray200",
      "gray300",
      "gray400",
      "gray500",
      "gray600",
      "gray700",
      "gray800",
      "gray900",
      "inverse",
      "light",
      "placeholder",
      "primary",
      "secondary",
      "white"
    ],
    "isRequired": false
  },
  {
    "name": "content",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "disableExpandIconRotate",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "enableCustomExpandIcon",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "expand",
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