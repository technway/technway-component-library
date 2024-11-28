
/**
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-navbar-menu.tsx` file.
 * 
const propsValues = [this.hideBelowBreakpoint, this.itemsBorderRadius, this.itemsColor, this.itemsData, this.itemsHoverAppearance, this.itemsHoverEffect, this.itemsHoverVariant, this.itemsSize];
validateProps(propsValues);
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [{"name":"hideBelowBreakpoint","type":["1024","767"],"isRequired":false},{"name":"itemsBorderRadius","type":["2xl","3xl","circle","default","full","lg","md","none","sm","xl","xs"],"isRequired":false},{"name":"itemsColor","type":["auto","black","gray100","gray200","gray300","gray400","gray500","gray600","gray700","gray800","gray900","inverse","light","placeholder","primary","secondary","white"],"isRequired":false},{"name":"itemsData","type":["string"],"isRequired":true},{"name":"itemsHoverAppearance","type":["color","none","outlined","solid"],"isRequired":false},{"name":"itemsHoverEffect","type":["contrast","opacity"],"isRequired":false},{"name":"itemsHoverVariant","type":["auto","black","inverse","primary","secondary","white"],"isRequired":false},{"name":"itemsSize","type":["2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","heading","lg","md","sm","text","xl","xs"],"isRequired":false}];

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