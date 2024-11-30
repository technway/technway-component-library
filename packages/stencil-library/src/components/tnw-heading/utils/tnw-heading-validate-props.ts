
/**
 * ⚠️ IMPORTANT:
 * 
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-heading.tsx` file.
 * 
const propsValues = [this.alignment, this.color, this.headingTag, this.level, this.lineHeight, this.size, this.text, this.textCase, this.useTextFont, this.weight];
validateProps(propsValues);
 */

import { isNotEmptyString } from "../../../utils/utils";

export function validateProps(propsValues: any[]): void {
  const props = [{"name":"alignment","type":["center","end","justify","left","right","start"],"isRequired":false},{"name":"color","type":["auto","black","gray100","gray200","gray300","gray400","gray500","gray600","gray700","gray800","gray900","inverse","light","placeholder","primary","secondary","white"],"isRequired":false},{"name":"headingTag","type":["div","h1","h2","h3","h4","h5","h6"],"isRequired":false},{"name":"level","type":["div","h1","h2","h3","h4","h5","h6"],"isRequired":false},{"name":"lineHeight","type":["1","1_25","1_5","1_75","2","2_25","2_5"],"isRequired":false},{"name":"size","type":["2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","heading","lg","md","sm","text","xl","xs"],"isRequired":false},{"name":"text","type":["string"],"isRequired":false},{"name":"textCase","type":["capitalize","lowercase","normal-case","uppercase"],"isRequired":false},{"name":"useTextFont","type":["boolean"],"isRequired":false},{"name":"weight","type":["100","200","300","400","500","600","700","800","900","heading","text"],"isRequired":false}];

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