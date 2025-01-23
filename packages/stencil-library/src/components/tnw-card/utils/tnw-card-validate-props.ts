
/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-card.tsx` file.
 * 
validateProps([this.appearance, this.appearanceColor, this.badgeLabel, this.borderRadius, this.buttonHref, this.buttonLabel, this.buttonRadius, this.contentSpacing, this.date, this.description, this.enableContentSlot, this.enableImageSlot, this.heading, this.imageAlt, this.imageHeight, this.imageSrc, this.itemsAlignment, this.largerImage, this.layout, this.orderContentFirst, this.padding, this.spacing, this.subheading, this.textAlignment, this.useGlassmorphismEffect]);
 *
 * GENERATED USING `pnpm g:components-validations tnw-card`
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
    "name": "badgeLabel",
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
    "name": "buttonHref",
    "type": [
      "string"
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
    "name": "buttonRadius",
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
    "name": "contentSpacing",
    "type": [
      "lg",
      "md",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "date",
    "type": [
      "string"
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
    "name": "enableContentSlot",
    "type": [
      "boolean"
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
    "name": "imageHeight",
    "type": [
      "string"
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
    "name": "itemsAlignment",
    "type": [
      "center",
      "end",
      "start"
    ],
    "isRequired": false
  },
  {
    "name": "largerImage",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "layout",
    "type": [
      "horizontal",
      "vertical"
    ],
    "isRequired": false
  },
  {
    "name": "orderContentFirst",
    "type": [
      "boolean"
    ],
    "isRequired": false
  },
  {
    "name": "padding",
    "type": [
      "lg",
      "md",
      "none",
      "sm"
    ],
    "isRequired": false
  },
  {
    "name": "spacing",
    "type": [
      "lg",
      "md",
      "sm"
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
    "name": "textAlignment",
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
    "name": "useGlassmorphismEffect",
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
      throw new Error(`tnw-card: Required prop "${prop.name}" must have value`);
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
      throw new Error(`tnw-card: Invalid prop value for "${prop.name}". Expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
    }
  });
}