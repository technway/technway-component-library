import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-list`;
const subListClass = `${baseClass}__sub-list`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    --${baseClass}-font: var(--tnw-font-text);
}

.${baseClass} {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.${baseClass}--disc,
${subListClass}--disc {
    list-style-type: disc;
}
.${baseClass}--circle,
${subListClass}--circle {
    list-style-type: circle;
}
.${baseClass}--square,
${subListClass}--square {
    list-style-type: square;
}
.${baseClass}--decimal,
${subListClass}--decimal {
    list-style-type: decimal;
}
.${baseClass}--lower-roman,
${subListClass}--lower-roman {
    list-style-type: lower-roman;
}
.${baseClass}--upper-roman,
${subListClass}--upper-roman {
    list-style-type: upper-roman;
}

.${baseClass}--inside,
${subListClass}--inside {
    list-style-position: inside;
}
.${baseClass}--outside,
${subListClass}--outside {
    list-style-position: outside;
}

/*.${baseClass}__icon {
    margin-inline-end: var(--tnw-spacing-xs);
}*/

.${baseClass}__item {
    font-family: var(--${baseClass}-font);
}
`;