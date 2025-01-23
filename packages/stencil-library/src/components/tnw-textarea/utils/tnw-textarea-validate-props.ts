
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-textarea.tsx` file.
 * 
validateProps([this.appearance, this.autoComplete, this.borderRadius, this.cols, this.disabled, this.helpText, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.placeholder, this.resize, this.rows, this.sanitizeTextarea, this.textareaId, this.value]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-textarea`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "appearance",
    "type": [
      "outlined",
      "underlined"
    ],
    "isRequired": false
  },
  {
    "name": "autoComplete",
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
    "name": "cols",
    "type": [
      "number"
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
    "name": "helpText",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "isLabelSrOnly",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "isRequired",
    "type": [
      "boolean"
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
    "name": "maxlength",
    "type": [
      "number"
    ],
    "isRequired": false
  },
  {
    "name": "minlength",
    "type": [
      "number"
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
    "name": "placeholder",
    "type": [
      "string"
    ],
    "isRequired": true
  },
  {
    "name": "resize",
    "type": [
      "both",
      "horizontal",
      "none",
      "vertical"
    ],
    "isRequired": false
  },
  {
    "name": "rows",
    "type": [
      "number"
    ],
    "isRequired": false
  },
  {
    "name": "sanitizeTextarea",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "textareaId",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "value",
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
      throw new Error(`tnw-textarea: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-textarea: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}