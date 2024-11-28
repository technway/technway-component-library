
/**
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-scroll-to-top.tsx` file.
 * 
const propsValues = [this.appearance, this.borderRadius, this.color, this.customIconName, this.enableCustomSvgIcon, this.size, this.variant];
validateProps(propsValues);
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [{"name":"appearance","type":["mixed","outlined","solid","transparent"],"isRequired":false},{"name":"borderRadius","type":["2xl","3xl","circle","default","full","lg","md","none","sm","xl","xs"],"isRequired":false},{"name":"color","type":["auto","black","inverse","light","primary","secondary","white"],"isRequired":false},{"name":"customIconName","type":["string"],"isRequired":false},{"name":"enableCustomSvgIcon","type":["boolean"],"isRequired":false},{"name":"size","type":["lg","md","sm","xl","xs"],"isRequired":false},{"name":"variant","type":["auto","black","inverse","light","primary","secondary","white"],"isRequired":false}];

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