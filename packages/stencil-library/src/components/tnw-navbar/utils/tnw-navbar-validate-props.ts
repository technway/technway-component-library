
/**
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-navbar.tsx` file.
 * 
const propsValues = [this.appearance, this.borderRadius, this.burgerMenuPlacement, this.disableInternalContainer, this.exactCenterMiddleSlot, this.paddingSize, this.sticky, this.useEndSlot, this.useGlassmorphismEffect, this.useMiddleSlot, this.useStartSlot, this.variant];
validateProps(propsValues);
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [{"name":"appearance","type":["mixed","none","outlined","outlined-bottom","solid","transparent"],"isRequired":false},{"name":"borderRadius","type":["2xl","3xl","circle","default","full","lg","md","none","sm","xl","xs"],"isRequired":false},{"name":"burgerMenuPlacement","type":["end","start"],"isRequired":false},{"name":"disableInternalContainer","type":["boolean"],"isRequired":false},{"name":"exactCenterMiddleSlot","type":["boolean"],"isRequired":false},{"name":"paddingSize","type":["lg","md","sm"],"isRequired":false},{"name":"sticky","type":["boolean"],"isRequired":false},{"name":"useEndSlot","type":["boolean"],"isRequired":false},{"name":"useGlassmorphismEffect","type":["boolean"],"isRequired":false},{"name":"useMiddleSlot","type":["boolean"],"isRequired":false},{"name":"useStartSlot","type":["boolean"],"isRequired":false},{"name":"variant","type":["auto","black","inverse","light","primary","secondary","white"],"isRequired":false}];

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