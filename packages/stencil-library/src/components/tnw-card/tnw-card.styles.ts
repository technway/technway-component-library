import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-card`;
const contentClass = `${baseClass}__content`;
const imageClass = `${baseClass}__image`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    width: 100%;

    --${baseClass}-gap-2xs: var(--tnw-spacing-2xs);
    --${baseClass}-gap-xs: var(--tnw-spacing-sm);
    --${baseClass}-gap-sm: var(--tnw-spacing-md);
    --${baseClass}-gap-md: var(--tnw-spacing-lg);
    --${baseClass}-gap-lg: var(--tnw-spacing-xl);
    --${baseClass}-padding-sm: var(--tnw-spacing-md);
    --${baseClass}-padding-md: var(--tnw-spacing-lg);
    --${baseClass}-padding-lg: var(--tnw-spacing-xl);
}
:host(.${baseClass}--horizontal) {
    flex-direction: row;
    justify-content: space-between;
}
:host(.${baseClass}--horizontal) .${imageClass} {
    height: 100%;
}

:host(.${baseClass}--horizontal.${baseClass}--equal-image) .${imageClass},
:host(.${baseClass}--horizontal.${baseClass}--equal-image) .${contentClass} {
    width: calc(50% - (var(--${baseClass}-gap-lg) / 2)) !important;
}

:host(.${baseClass}--horizontal.${baseClass}--larger-image) .${imageClass} {
    width: calc(55% - (var(--${baseClass}-gap-lg) / 2)) !important;
}
:host(.${baseClass}--horizontal.${baseClass}--larger-image) .${contentClass} {
    width: calc(45% - (var(--${baseClass}-gap-lg) / 2)) !important;
}

@media only screen and (max-width: 567px) {
    :host {
        flex-direction: horizontal;
        justify-content: unset;
    }
    :host(.${baseClass}--horizontal) .${imageClass},
    :host(.${baseClass}--horizontal) .${contentClass} {
        width: 100% !important;
    }
}

:host(.${baseClass}--vertical) {
    flex-direction: column;
}
    
:host(.${baseClass}--start) {
    align-items: start;
    justify-content: start;
}
:host(.${baseClass}--horizontal-center) {
    align-items: center;
}
:host(.${baseClass}--vertical-center) {
    justify-content: center;
}
:host(.${baseClass}--end) {
    align-items: end;
    justify-content: end;
}

:host(.${baseClass}--padding-sm) {
    padding: var(--${baseClass}-padding-sm);
}
:host(.${baseClass}--padding-md) {
    padding: var(--${baseClass}-padding-md);
}
:host(.${baseClass}--padding-lg) {
    padding: var(--${baseClass}-padding-lg);
}

:host(.${baseClass}--spacing-sm) {
    gap: var(--${baseClass}-gap-sm);
}
:host(.${baseClass}--spacing-md) {
    gap: var(--${baseClass}-gap-md);
}
:host(.${baseClass}--spacing-lg) {
    gap: var(--${baseClass}-gap-lg);
}

:host(.${baseClass}--glassmorphism) {
    background: linear-gradient(to top, rgba(var(--tnw-background-color-inverse-rgb), 0.025), rgba(var(--tnw-background-color-inverse-rgb), 0)) !important;
}

.${contentClass} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--${baseClass}-gap-xs);
}

.${contentClass}-heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--${baseClass}-gap-2xs);
}
`;