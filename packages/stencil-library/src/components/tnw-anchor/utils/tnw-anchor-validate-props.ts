
/**
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-anchor.tsx` file.
 * 
const propsValues = [this.color, this.hideNewTabIcon, this.href, this.labelAria, this.newTab, this.size, this.text, this.textDecoration];
validateProps(propsValues);
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [{"name":"color","type":["auto","black","gray100","gray200","gray300","gray400","gray500","gray600","gray700","gray800","gray900","inverse","light","placeholder","primary","secondary","white"],"isRequired":false},{"name":"hideNewTabIcon","type":["boolean"],"isRequired":false},{"name":"href","type":["string"],"isRequired":true},{"name":"labelAria","type":["string"],"isRequired":false},{"name":"newTab","type":["boolean"],"isRequired":false},{"name":"size","type":["2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","heading","lg","md","sm","text","xl","xs"],"isRequired":false},{"name":"text","type":["string"],"isRequired":false},{"name":"textDecoration","type":["line-through","none","overline","underline"],"isRequired":false}];

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