import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-button`;
const elementClass = `${baseClass}__el`;

export const styles = `
* {
    box-sizing: border-box;
}

:host {
    --${baseClass}-fw: var(--tnw-fw-500);
    --${baseClass}-ff: var(--tnw-font-text);
    --${baseClass}-spacing: var(--tnw-spacing-xs);
    display: inline-flex;
    transition: all 0.2s ease-in-out;
}

/* - States - */
:host(.${baseClass}--disabled) {
    opacity: 0.7;
    cursor: not-allowed;
}

/* - Sizes - */
:host(.${baseClass}--xs) {
    --${baseClass}-p: 3px 6px;
    --${baseClass}-fs: var(--tnw-fs-2xs);
}
:host(.${baseClass}--sm) {
    --${baseClass}-p: 5px 10px;
    --${baseClass}-fs: var(--tnw-fs-xs);
}
:host(.${baseClass}--md) {
    --${baseClass}-p: 12px 24px;
    --${baseClass}-fs: var(--tnw-fs-text);
}
:host(.${baseClass}--lg) {
    --${baseClass}-p: 16px 32px;
    --${baseClass}-fs: var(--tnw-fs-sm);
}
:host(.${baseClass}--xl) {
    --${baseClass}-p: 20px 40px;
    --${baseClass}-fs: var(--tnw-fs-md);
}
@media only screen and (max-width: 567px) {
    :host(.${baseClass}--md) {
        --${baseClass}-p: 10px 20px;
    }
}
@media only screen and (max-width: 1024px) {
    :host(.${baseClass}--xl) {
        --${baseClass}-fs: var(--tnw-fs-sm);
        --${baseClass}-p: 14px 28px;
    }
    :host(.${baseClass}--lg) {
        --${baseClass}-p: 17px 34px;
    }
}

/* - Hover Effects - */
:host(.${baseClass}--hover-scale-down:hover) {
    transform: scale(0.97);
}
:host(.${baseClass}--hover-scale-up:hover) {
    transform: scale(1.02);
}
:host(.${baseClass}--hover-contrast:hover) {
    filter: contrast(1.7);       
}
:host(.${baseClass}--hover-opacity:hover) {
    opacity: 0.9;
}

/* - Hovers - */
:host(.${baseClass}--hover-solid-primary:hover) {
    background-color: var(--tnw-primary-color);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-primary:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-secondary:hover) {
    background-color: var(--tnw-secondary-color);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-secondary:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-black:hover) {
    background-color: var(--tnw-black);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-black:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-white:hover) {
    background-color: var(--tnw-white);
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-solid-white:hover) tnw-icon {
    fill: var(--tnw-primary-color);
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-solid-inverse:hover) {
    background-color: var(--tnw-background-color-inverse);
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-solid-inverse:hover) tnw-icon {
    fill: var(--tnw-text-color-inverse);
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-solid-auto:hover) {
    background-color: var(--tnw-background-color);
    color: var(--tnw-text-color);
}
:host(.${baseClass}--hover-solid-auto:hover) tnw-icon {
    fill: var(--tnw-text-color);
    color: var(--tnw-text-color);
}

:host(.${baseClass}--hover-outlined-primary:hover) {
    border-width: var(--tnw-primary-sm);
    border-style: solid;
    border-color: var(--tnw-primary-color);
    background: none;
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-outlined-primary:hover) tnw-icon {
    fill: var(--tnw-primary-color);
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-outlined-secondary:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-secondary-color);
    background: none;
    color: var(--tnw-secondary-color);
}
:host(.${baseClass}--hover-outlined-secondary:hover) tnw-icon {
    fill: var(--tnw-secondary-color);
    color: var(--tnw-secondary-color);
}
:host(.${baseClass}--hover-outlined-black:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-black);
    background: none;
    color: var(--tnw-black);
}
:host(.${baseClass}--hover-outlined-black:hover) tnw-icon {
    fill: var(--tnw-black);
    color: var(--tnw-black);
}
:host(.${baseClass}--hover-outlined-white:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-white);
    background: none;
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-outlined-white:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-outlined-inverse:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-border-color-inverse);
    background: none;
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-outlined-inverse:hover) tnw-icon {
    fill: var(--tnw-text-color-inverse);
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-outlined-auto:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-border-color);
    background: none;
    color: var(--tnw-text-color);
}
:host(.${baseClass}--hover-outlined-auto:hover) tnw-icon {
    fill: var(--tnw-text-color);
    color: var(--tnw-text-color);
}

.${elementClass} {
    background: none;
    border: 0;
    outline-color: transparent;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--${baseClass}-spacing);
    font-weight: var(--${baseClass}-fw);
    font-size: var(--${baseClass}-fs);
    font-family: var(--${baseClass}-ff);
    color: inherit;
    cursor: pointer;
}
.${elementClass}--has-padding {
    padding: var(--${baseClass}-p);
}

a {
    text-decoration: none;
}
`;