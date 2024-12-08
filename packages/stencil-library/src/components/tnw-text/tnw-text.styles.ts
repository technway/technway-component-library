import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-text`;
const headingClass = `${baseClass}__inner`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host{
    --tnw-text-font: var(--tnw-font-text);
    max-width: 100%;
}

:host(.${baseClass}--block) {
  display: block;
}
:host(.${baseClass}--inline-block) {
  display: inline-block;
}
:host(.${baseClass}--inline) {
  display: inline;
}

:host(.${baseClass}--width-sm) {
  width: var(--${baseClass}-width, 450px);
}
:host(.${baseClass}--width-md) {
  width: var(--${baseClass}-width, 600px);
}
:host(.${baseClass}--width-lg) {
  width: var(--${baseClass}-width, 800px);
}
:host(.${baseClass}--width-xl) {
  width: var(--${baseClass}-width, 1000px);
}
:host(.${baseClass}--width-full) {
  width: var(--${baseClass}-width, 100%);
}

.${headingClass} {
    font-family: var(--tnw-text-font);
    margin: 0;
    padding: 0;
}

p {
  width: 100%;
}
`;