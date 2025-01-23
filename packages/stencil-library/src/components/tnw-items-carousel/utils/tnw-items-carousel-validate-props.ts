
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-items-carousel.tsx` file.
 * 
validateProps([this.controlsSize, this.enableControlsSlots, this.fitWithContainer, this.hideControls, this.showEdgesShadows, this.slidesCount, this.slidesSize]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-items-carousel`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "controlsSize",
    "type": [
      "lg",
      "md",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "enableControlsSlots",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "fitWithContainer",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "hideControls",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "showEdgesShadows",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "slidesCount",
    "type": [
      "number"
    ],
    "isRequired": false
  },
  {
    "name": "slidesSize",
    "type": [
      "lg",
      "md",
      "none",
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
      throw new Error(`tnw-items-carousel: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-items-carousel: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}