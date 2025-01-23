import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-accordion`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    /**
     * @prop --tnw-accordion-gap: The gap between accordion header and body.
     * @prop-default: var(--tnw-spacing-xs)
     */
    gap: var(--${baseClass}-gap, var(--tnw-spacing-xs));
}

:host(.${baseClass}--hasPadding) {
    /**
     * @prop --tnw-accordion-padding: The accordion padding.
     * @prop-default: var(--tnw-spacing-xs) calc(var(--tnw-spacing-xs) * 2)
     */
    padding: var(--${baseClass}-padding, var(--tnw-spacing-xs) calc(var(--tnw-spacing-xs) * 2));
}

h3 {
    padding: 0;
    margin: 0;
}

/* Appearance & Variants Styles */
:host(.${baseClass}--outlined) {
    border-width: 1px;
    border-style: solid;
}
:host(.${baseClass}--outlined-primary) {
    border-color: var(--tnw-primary-color);
}
:host(.${baseClass}--outlined-secondary) {
    border-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--outlined-auto) {
    border-color: var(--tnw-border-color);
}
:host(.${baseClass}--outlined-light) {
    border-color: var(--tnw-border-color-opacity);
}
:host(.${baseClass}--outlined-inverse) {
    border-color: var(--tnw-border-color-inverse);
}
:host(.${baseClass}--outlined-black) {
    border-color: var(--tnw-black);
}
:host(.${baseClass}--outlined-white) {
    border-color: var(--tnw-white);
}

:host(.${baseClass}--underlined) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
:host(.${baseClass}--underlined-primary) {
    border-bottom-color: var(--tnw-primary-color);
}
:host(.${baseClass}--underlined-secondary) {
    border-bottom-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--underlined-auto) {
    border-bottom-color: var(--tnw-border-color);
}
:host(.${baseClass}--underlined-light) {
    border-bottom-color: var(--tnw-border-color-opacity);
}
:host(.${baseClass}--underlined-inverse) {
    border-bottom-color: var(--tnw-border-color-inverse);
}
:host(.${baseClass}--underlined-black) {
    border-bottom-color: var(--tnw-black);
}
:host(.${baseClass}--underlined-white) {
    border-bottom-color: var(--tnw-white);
}

:host(.${baseClass}--solid-primary) {
    background-color: var(--tnw-primary-color);
}
:host(.${baseClass}--solid-secondary) {
    background-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--solid-auto) {
    background-color: var(--tnw-background-color);
}
:host(.${baseClass}--solid-light) {
    background-color: var(--tnw-background-color-100);
}
:host(.${baseClass}--solid-inverse) {
    background-color: var(--tnw-background-color-inverse);
}
:host(.${baseClass}--solid-black) {
    background-color: var(--tnw-black);
}
:host(.${baseClass}--solid-white) {
    background-color: var(--tnw-white);
}

button {
    background-color: transparent;
    border: none;
    width: 100%;
}

.${baseClass}__header, button {
    cursor: pointer;
}

.${baseClass}__header-button {
    display: flex;
    align-items: center;

    /**
     * @prop --tnw-accordion-header-gap: The gap between accordion header title and expand icon.
     * @prop-default: var(--tnw-spacing-2xs)
     */
    gap: var(--${baseClass}-header-gap, var(--tnw-spacing-2xs));
}

.${baseClass}__expand-icon {
    /**
     * @prop --tnw-accordion-transition-delay: The delay of the expanding accordion transition.
     * @prop-default: 0.25s
     */
    transition: var(--${baseClass}-transition-delay, 0.25s) transform ease-in-out;
}
.${baseClass}__expand-icon--rotated {
    /**
     * @prop --tnw-accordion-icon-rotation: The rotation angle of the icon when the accordion is expanded.
     * @prop-default: -180deg
     */
    transform: rotate(var(--${baseClass}-item-icon-rotation, -180deg));
}
`;
