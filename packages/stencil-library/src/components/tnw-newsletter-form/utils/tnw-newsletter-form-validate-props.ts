
/**
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-newsletter-form.tsx` file.
 * 
const propsValues = [this.borderRadius, this.buttonLabel, this.enableButtonSlot, this.formAction, this.formAttributes, this.formMethod, this.inputId, this.inputPlaceholder, this.successMessage, this.theme, this.variant];
validateProps(propsValues);
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [{"name":"borderRadius","type":["2xl","3xl","circle","default","full","lg","md","none","sm","xl","xs"],"isRequired":false},{"name":"buttonLabel","type":["string"],"isRequired":false},{"name":"enableButtonSlot","type":["boolean"],"isRequired":false},{"name":"formAction","type":["string"],"isRequired":false},{"name":"formAttributes","type":["string"],"isRequired":false},{"name":"formMethod","type":["string"],"isRequired":false},{"name":"inputId","type":["string"],"isRequired":false},{"name":"inputPlaceholder","type":["string"],"isRequired":false},{"name":"successMessage","type":["string"],"isRequired":false},{"name":"theme","type":["auto","black","inverse","light","primary","secondary","white"],"isRequired":false},{"name":"variant","type":["primary","secondary"],"isRequired":false}];

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