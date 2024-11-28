import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-alert`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    --${baseClass}-font: var(--tnw-font-text);
    --${baseClass}-fs-default: var(--tnw-fs-text);
    display: block;
}

:host(.${baseClass}--hasPadding) {
    padding: var(--${baseClass}-padding, 7px 14px);
}
    
:host(.${baseClass}--auto) {
    font-size: var(--${baseClass}-font-size, var(--${baseClass}-fs-default))
}
:host(.${baseClass}--sm) {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-2xs)) 
}
:host(.${baseClass}--md) {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-xs)) 
}
:host(.${baseClass}--lg) {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-sm)) 
}

.${baseClass} {
    font-family: var(--${baseClass}-font);
    margin: 0;
    padding: 0;
    color: inherit;
}
`;
