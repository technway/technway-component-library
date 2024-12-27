
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-text.tsx` file.
 * 
validateProps([this.alignment, this.color, this.displayMode, this.highlight, this.highlightColor, this.highlightTag, this.highlightWeight, this.lineHeight, this.size, this.text, this.textCase, this.textTag, this.weight, this.widthSize]);
 *
 * GENERATED USING `npm run g:components-validations tnw-text`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "alignment",
    "type": [
      "center",
      "end",
      "justify",
      "left",
      "right",
      "start"
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
    "name": "displayMode",
    "type": [
      "block",
      "inline",
      "inline-block"
    ],
    "isRequired": false
  },
  {
    "name": "highlight",
    "type": [
      "number",
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "highlightColor",
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
    "name": "highlightTag",
    "type": [
      "em",
      "mark",
      "span",
      "strong"
    ],
    "isRequired": false
  },
  {
    "name": "highlightWeight",
    "type": [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "heading",
      "text"
    ],
    "isRequired": false
  },
  {
    "name": "lineHeight",
    "type": [
      "1",
      "1_25",
      "1_5",
      "1_75",
      "2",
      "2_25",
      "2_5"
    ],
    "isRequired": false
  },
  {
    "name": "size",
    "type": [
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "8xl",
      "9xl",
      "heading",
      "lg",
      "md",
      "sm",
      "text",
      "xl",
      "xs"
    ],
    "isRequired": false
  },
  {
    "name": "text",
    "type": [
      "number",
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "textCase",
    "type": [
      "capitalize",
      "lowercase",
      "normal-case",
      "uppercase"
    ],
    "isRequired": false
  },
  {
    "name": "textTag",
    "type": [
      "em",
      "mark",
      "p",
      "span",
      "strong"
    ],
    "isRequired": false
  },
  {
    "name": "weight",
    "type": [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "heading",
      "text"
    ],
    "isRequired": false
  },
  {
    "name": "widthSize",
    "type": [
      "full",
      "lg",
      "md",
      "sm",
      "unset",
      "xl"
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