
/**
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-header-banner.tsx` file.
 * 
const propsValues = [this.alignment, this.buttonLabel, this.description, this.heading, this.stickyNavbar, this.subheading, this.theme, this.width];
validateProps(propsValues);
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [{"name":"alignment","type":["center","end","left","right","start"],"isRequired":false},{"name":"buttonLabel","type":["string"],"isRequired":false},{"name":"description","type":["string"],"isRequired":false},{"name":"heading","type":["string"],"isRequired":false},{"name":"stickyNavbar","type":["boolean"],"isRequired":false},{"name":"subheading","type":["string"],"isRequired":false},{"name":"theme","type":["auto","black","inverse","primary","secondary","white"],"isRequired":false},{"name":"width","type":["full","lg","md","sm"],"isRequired":false}];

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