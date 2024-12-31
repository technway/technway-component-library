
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-input.tsx` file.
 * 
validateProps([this.autoComplete, this.borderRadius, this.disabled, this.helpText, this.inputId, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.pattern, this.placeholder, this.sanitizeInput, this.type, this.value, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-input`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
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
    "name": "inputId",
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
    "isRequired": true
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
    "name": "pattern",
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
    "name": "sanitizeInput",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "type",
    "type": [
      "string"
    ],
    "isRequired": true
  },
  {
    "name": "value",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "variant",
    "type": [
      "none",
      "outlined",
      "underlined"
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