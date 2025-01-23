
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-navbar.tsx` file.
 * 
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableCtaSlot, this.enableLinkSlot, this.enableLogoSlot, this.enableMenuSlot, this.enableSearchSlot, this.hideMenuBelow, this.linksLength, this.menuData, this.menuExactCenter, this.menuPlacement, this.paddingHorizontal, this.paddingVertical, this.scopeStylesToContainer, this.sticky, this.togglerPlacement]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-navbar`
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
      "outlined-bottom",
      "solid",
      "transparent"
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
    "name": "disableInternalContainer",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "enableCtaSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "enableLinkSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "enableLogoSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "enableMenuSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "enableSearchSlot",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "hideMenuBelow",
    "type": [
      "1024",
      "1439",
      "567",
      "767",
      "always",
      "never"
    ],
    "isRequired": false
  },
  {
    "name": "linksLength",
    "type": [
      "number"
    ],
    "isRequired": false
  },
  {
    "name": "menuData",
    "type": [
      "string"
    ],
    "isRequired": false
  },
  {
    "name": "menuExactCenter",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "menuPlacement",
    "type": [
      "end",
      "middle",
      "start"
    ],
    "isRequired": false
  },
  {
    "name": "paddingHorizontal",
    "type": [
      "lg",
      "md",
      "none",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "paddingVertical",
    "type": [
      "lg",
      "md",
      "none",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "scopeStylesToContainer",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "sticky",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "togglerPlacement",
    "type": [
      "end",
      "start"
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
      throw new Error(`tnw-navbar: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-navbar: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}