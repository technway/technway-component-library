
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-icon.tsx` file.
 * 
validateProps([this.appearance, this.borderRadius, this.color, this.enableSvg, this.hiddenAria, this.isButton, this.labelAria, this.name, this.size, this.tooltip, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-icon`
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
    "name": "enableSvg",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "hiddenAria",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "isButton",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "labelAria",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "name",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "size",
    "type": [
      "2xl",
      "2xs",
      "3xl",
      "3xs",
      "lg",
      "md",
      "sm",
      "xl",
      "xs"
    ],
    "isRequired": false
  },
  {
    "name": "tooltip",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "variant",
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