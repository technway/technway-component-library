
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-copyrights-footer.tsx` file.
 * 
validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.enableSlot, this.endYear, this.organizationName, this.organizationNameColor, this.postText, this.preText, this.startYear, this.textColor, this.useCurrentYearAsEndYear, this.useCurrentYearAsStartYear, this.useDivAsContainer]);
 *
 * GENERATED USING `npm run g:components-validations tnw-copyrights-footer`
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [
  {
    "name": "backgroundColor",
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
    "name": "borderTopColor",
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
    "name": "centerContent",
    "type": [
      "boolean"
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
    "name": "enableSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "endYear",
    "type": [
      "number"
    ],
    "isRequired": false
  },
  {
    "name": "organizationName",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "organizationNameColor",
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
    "name": "postText",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "preText",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "startYear",
    "type": [
      "number"
    ],
    "isRequired": false
  },
  {
    "name": "textColor",
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
    "name": "useCurrentYearAsEndYear",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "useCurrentYearAsStartYear",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "useDivAsContainer",
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