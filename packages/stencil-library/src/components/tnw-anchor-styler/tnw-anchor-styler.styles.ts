import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-anchor-styler`;
const wrapperClass = `${baseClass}__wrapper`;

export const styles = `
* {
    box-sizing: border-box;
}
    
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:host {
    --${baseClass}-font: var(--tnw-font-text);
    display: inline-block;
}
    
:host(.${baseClass}--none) ::slotted(*) {
    text-decoration: none;
}
:host(.${baseClass}--underline) ::slotted(*) {
    text-decoration: underline;
}
:host(.${baseClass}--overline) ::slotted(*) {
    text-decoration: overline;
}
:host(.${baseClass}--line-through) ::slotted(*) {
    text-decoration: line-through;
}

.${wrapperClass} {
    font-family: var(--${baseClass}-font);
    display: flex;
    gap: 3px;
}

::slotted(*) {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
`;