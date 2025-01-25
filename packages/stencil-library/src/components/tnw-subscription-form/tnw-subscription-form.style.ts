import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-subscription-form`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    box-sizing: border-box;
    display: block;
}

.${baseClass} {
    display: flex;
    position: relative;
    width: 100%;
    gap: 6px;
}

.${baseClass}--button-outside {
    align-items: stretch;
}

.${baseClass}--button-inside {
    border-width: 1px;
    border-style: solid;
    align-items: center;
    padding-block: 6px;
    padding-inline-start: 18px;
    padding-inline-end: 6px;
}
.${baseClass}--button-inside:focus-within {
    border-color: var(--tnw-primary-color);
    outline: 1px solid var(--tnw-primary-color);
}

.${baseClass}--primary {
    border-color: var(--tnw-primary-color);
}
.${baseClass}--secondary {
    border-color: var(--tnw-secondary-color);
}
.${baseClass}--auto {
    border-color: var(--tnw-border-color);
}
.${baseClass}--inverse {
    border-color: var(--tnw-border-color-inverse);
}
.${baseClass}--light {
    border-color: var(--tnw-border-color-light);
}
.${baseClass}--white {
    border-color: var(--tnw-white);
}
.${baseClass}--black {
    border-color: var(--tnw-black);
}

.${baseClass}--button-inside {
    position: relative;
    min-width: 250px;
}

tnw-input {
    width: 100%;
}
.${baseClass}--button-inside tnw-input {
    display: flex;
    align-items: center;
}
.${baseClass}--button-inside tnw-input::part(input) {
    width: 100%;
    border: 0;
    outline-color: transparent;
}
`;