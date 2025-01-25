import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-button`;

export const styles = `
* {
    box-sizing: border-box;
}

:host {
    --${baseClass}-fw: var(--tnw-fw-500);
    --${baseClass}-ff: var(--tnw-font-text);
    --${baseClass}-spacing: var(--tnw-spacing-xs);
    --${baseClass}-focus-ring-color: var(--tnw-primary-color);
    --${baseClass}-focus-ring-width: 3px;
    --${baseClass}-focus-ring-offset: 2px;
    display: inline-block;
}

.${baseClass} {
    outline-color: transparent;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--${baseClass}-spacing);
    font-weight: var(--${baseClass}-fw);
    font-size: var(--${baseClass}-fs);
    font-family: var(--${baseClass}-ff);
    cursor: pointer;
    transition: all 0.2s ease-in-out, outline 0s ease-in-out, outline-offset 0s ease-in-out;
    white-space: nowrap;
    position: relative;
    outline: none;
}
.${baseClass}--has-padding {
    padding: var(--${baseClass}-p);
}

/* - States - */
:host(.${baseClass}--disabled) {
    opacity: 0.7;
    cursor: not-allowed;
}

/* - Sizes - */
.${baseClass}--xs {
    --${baseClass}-p: 3px 6px;
    --${baseClass}-fs: var(--tnw-fs-2xs);
}
.${baseClass}--sm {
    --${baseClass}-p: 5px 10px;
    --${baseClass}-fs: var(--tnw-fs-xs);
}
.${baseClass}--md {
    --${baseClass}-p: 12px 24px;
    --${baseClass}-fs: var(--tnw-fs-text);
}
.${baseClass}--lg {
    --${baseClass}-p: 16px 32px;
    --${baseClass}-fs: var(--tnw-fs-sm);
}
.${baseClass}--xl {
    --${baseClass}-p: 20px 40px;
    --${baseClass}-fs: var(--tnw-fs-md);
}
@media only screen and (max-width: 567px) {
    .${baseClass}--md {
        --${baseClass}-p: 10px 20px;
    }
}
@media only screen and (max-width: 1024px) {
    .${baseClass}--xl {
        --${baseClass}-fs: var(--tnw-fs-sm);
        --${baseClass}-p: 14px 28px;
    }
    .${baseClass}--lg {
        --${baseClass}-p: 17px 34px;
    }
}

/* - Hover Effects - */
.${baseClass}--hover-scale-down:hover {
    transform: scale(0.97);
}
.${baseClass}--hover-scale-up:hover {
    transform: scale(1.02);
}
.${baseClass}--hover-contrast:hover {
    filter: contrast(1.7);       
}
.${baseClass}--hover-opacity:hover {
    opacity: 0.9;
}
.${baseClass}--hover-focus-ring:hover {
    outline: var(--${baseClass}-focus-ring-width) solid var(--${baseClass}-focus-ring-color);
    outline-offset: var(--${baseClass}-focus-ring-offset);
}

/* - Hovers - */
.${baseClass}--hover-solid-primary:hover {
    background-color: var(--tnw-primary-color);
    color: var(--tnw-white);
}
.${baseClass}--hover-solid-primary:hover tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
.${baseClass}--hover-solid-secondary:hover {
    background-color: var(--tnw-secondary-color);
    color: var(--tnw-white);
}
.${baseClass}--hover-solid-secondary:hover tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
.${baseClass}--hover-solid-black:hover {
    background-color: var(--tnw-black);
    color: var(--tnw-white);
}
.${baseClass}--hover-solid-black:hover tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
.${baseClass}--hover-solid-white:hover {
    background-color: var(--tnw-white);
    color: var(--tnw-primary-color);
}
.${baseClass}--hover-solid-white:hover tnw-icon {
    fill: var(--tnw-primary-color);
    color: var(--tnw-primary-color);
}
.${baseClass}--hover-solid-inverse:hover {
    background-color: var(--tnw-background-color-inverse);
    color: var(--tnw-text-color-inverse);
}
.${baseClass}--hover-solid-inverse:hover tnw-icon {
    fill: var(--tnw-text-color-inverse);
    color: var(--tnw-text-color-inverse);
}
.${baseClass}--hover-solid-auto:hover {
    background-color: var(--tnw-background-color);
    color: var(--tnw-text-color);
}
.${baseClass}--hover-solid-auto:hover tnw-icon {
    fill: var(--tnw-text-color);
    color: var(--tnw-text-color);
}

.${baseClass}--hover-outlined-primary:hover {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-primary-color);
    background: none;
    color: var(--tnw-primary-color);
}
.${baseClass}--hover-outlined-primary:hover tnw-icon {
    fill: var(--tnw-primary-color);
    color: var(--tnw-primary-color);
}
.${baseClass}--hover-outlined-secondary:hover {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-secondary-color);
    background: none;
    color: var(--tnw-secondary-color);
}
.${baseClass}--hover-outlined-secondary:hover tnw-icon {
    fill: var(--tnw-secondary-color);
    color: var(--tnw-secondary-color);
}
.${baseClass}--hover-outlined-black:hover {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-black);
    background: none;
    color: var(--tnw-black);
}
.${baseClass}--hover-outlined-black:hover tnw-icon {
    fill: var(--tnw-black);
    color: var(--tnw-black);
}
.${baseClass}--hover-outlined-white:hover {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-white);
    background: none;
    color: var(--tnw-white);
}
.${baseClass}--hover-outlined-white:hover tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
.${baseClass}--hover-outlined-inverse:hover {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-border-color-inverse);
    background: none;
    color: var(--tnw-text-color-inverse);
}
.${baseClass}--hover-outlined-inverse:hover tnw-icon {
    fill: var(--tnw-text-color-inverse);
    color: var(--tnw-text-color-inverse);
}
.${baseClass}--hover-outlined-auto:hover {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-border-color);
    background: none;
    color: var(--tnw-text-color);
}
.${baseClass}--hover-outlined-auto:hover tnw-icon {
    fill: var(--tnw-text-color);
    color: var(--tnw-text-color);
}

a {
    text-decoration: none;
}

/* Focus styles */
.${baseClass}:focus-visible {
    outline: var(--${baseClass}-focus-ring-width) solid var(--${baseClass}-focus-ring-color);
    outline-offset: var(--${baseClass}-focus-ring-offset);
}

/* For browsers that don't support :focus-visible */
.${baseClass}:focus:not(:focus-visible) {
    outline: none;
}

/* Add focus ring color variants */
:host(.tnw-extended-v-solid-primary) .${baseClass}:focus-visible {
    --${baseClass}-focus-ring-color: var(--tnw-primary-color);
}

:host(.tnw-extended-v-solid-secondary) .${baseClass}:focus-visible {
    --${baseClass}-focus-ring-color: var(--tnw-secondary-color);
}

:host(.tnw-extended-v-solid-black) .${baseClass}:focus-visible {
    --${baseClass}-focus-ring-color: var(--tnw-black);
}

:host(.tnw-extended-v-solid-white) .${baseClass}:focus-visible {
    --${baseClass}-focus-ring-color: var(--tnw-white);
}

/* Ensure focus styles work with disabled state */
.${baseClass}--disabled:focus-visible {
    outline-color: var(--tnw-gray-400);
}

/* Add hover focus ring color variants */
:host(.tnw-extended-v-solid-primary) .${baseClass}--hover-focus-ring:hover {
    --${baseClass}-focus-ring-color: var(--tnw-primary-color);
}

:host(.tnw-extended-v-solid-secondary) .${baseClass}--hover-focus-ring:hover {
    --${baseClass}-focus-ring-color: var(--tnw-secondary-color);
}

:host(.tnw-extended-v-solid-black) .${baseClass}--hover-focus-ring:hover {
    --${baseClass}-focus-ring-color: var(--tnw-black);
}

:host(.tnw-extended-v-solid-white) .${baseClass}--hover-focus-ring:hover {
    --${baseClass}-focus-ring-color: var(--tnw-white);
}

/* Ensure hover focus ring doesn't show on disabled state */
.${baseClass}--disabled.${baseClass}--hover-focus-ring:hover {
    outline: none;
}
`;