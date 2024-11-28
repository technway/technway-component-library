import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-section`;
const contentClass = `${baseClass}__content`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;

    --${baseClass}-spacing-xs: var(--tnw-spacing-xs);
    --${baseClass}-spacing-sm: var(--tnw-spacing-sm);
    --${baseClass}-spacing-md: var(--tnw-spacing-md);
    --${baseClass}-spacing-lg: var(--tnw-spacing-lg);
    --${baseClass}-spacing-xl: var(--tnw-spacing-xl);
}
:host(.${baseClass}--glassmorphism) {
    background: linear-gradient(to top, rgba(var(--tnw-background-color-inverse-rgb), 0.025), rgba(var(--tnw-background-color-inverse-rgb), 0)) !important;
}

:host(.${baseClass}--first) {
    padding-top: 0 !important;
    margin-top: 0 !important;
}
:host(.${baseClass}--last) {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
}
    
/* Paddings Block */
:host(.${baseClass}--padding-block-xs) {
    padding-block: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--padding-block-sm) {
    padding-block: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--padding-block-md) {
    padding-block: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--padding-block-lg) {
    padding-block: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--padding-block-xl) {
    padding-block: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--padding-block-2xl) {
    padding-block: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--padding-block-3xl) {
    padding-block: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--padding-block-4xl) {
    padding-block: var(--${baseClass}-spacing-4xl);
}
    
/* Paddings Inline */
:host(.${baseClass}--padding-inline-xs) {
    padding-inline: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--padding-inline-sm) {
    padding-inline: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--padding-inline-md) {
    padding-inline: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--padding-inline-lg) {
    padding-inline: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--padding-inline-xl) {
    padding-inline: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--padding-inline-2xl) {
    padding-inline: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--padding-inline-3xl) {
    padding-inline: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--padding-inline-4xl) {
    padding-inline: var(--${baseClass}-spacing-4xl);
}
    
/* Margins */
:host(.${baseClass}--margin-xs) {
    margin-block: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--margin-sm) {
    margin-block: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--margin-md) {
    margin-block: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--margin-lg) {
    margin-block: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--margin-xl) {
    margin-block: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--margin-2xl) {
    margin-block: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--margin-3xl) {
    margin-block: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--margin-4xl) {
    margin-block: var(--${baseClass}-spacing-4xl);
}
    
.${contentClass} {
    display: flex;
    flex-direction: column;
}
/* Spacings */
.${contentClass}--spacing-xs {
    gap: var(--${baseClass}-spacing-xs);
}
.${contentClass}--spacing-sm {
    gap: var(--${baseClass}-spacing-sm);
}
.${contentClass}--spacing-md {
    gap: var(--${baseClass}-spacing-md);
}
.${contentClass}--spacing-lg {
    gap: var(--${baseClass}-spacing-lg);
}
.${contentClass}--spacing-xl {
    gap: var(--${baseClass}-spacing-xl);
}

.${contentClass}--start {
    text-align: start;
    align-items: start;
    justify-content: start;
}
.${contentClass}--center {
    text-align: center;
    align-items: center;
    justify-content: center;
}
.${contentClass}--end {
    text-align: end;
    align-items: end;
    justify-content: end;
}
`;