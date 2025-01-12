import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-footer`;

export const styles: string = `
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
    --${baseClass}-spacing-2xl: var(--tnw-spacing-2xl);
    --${baseClass}-spacing-3xl: var(--tnw-spacing-3xl);
    --${baseClass}-spacing-4xl: var(--tnw-spacing-4xl);
}
:host(.${baseClass}--borderTop) {
    border-top-width: 1px;
    border-top-style: solid;
}
:host(.${baseClass}--center) > footer {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.${baseClass}__content {
    display: grid;
    gap: 80px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
    
/* Paddings Block */
.${baseClass}__content--padding-xs {
    padding-block: var(--${baseClass}-spacing-xs);
}
.${baseClass}__content--padding-sm {
    padding-block: var(--${baseClass}-spacing-sm);
}
.${baseClass}__content--padding-md {
    padding-block: var(--${baseClass}-spacing-md);
}
.${baseClass}__content--padding-lg {
    padding-block: var(--${baseClass}-spacing-lg);
}
.${baseClass}__content--padding-xl {
    padding-block: var(--${baseClass}-spacing-xl);
}
.${baseClass}__content--padding-2xl {
    padding-block: var(--${baseClass}-spacing-2xl);
}
.${baseClass}__content--padding-3xl {
    padding-block: var(--${baseClass}-spacing-3xl);
}
.${baseClass}__content--padding-4xl {
    padding-block: var(--${baseClass}-spacing-4xl);
}

/* Margins */
:host(.${baseClass}--margin-top-xs) {
    margin-top: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--margin-top-sm) {
    margin-top: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--margin-top-md) {
    margin-top: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--margin-top-lg) {
    margin-top: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--margin-top-xl) {
    margin-top: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--margin-top-2xl) {
    margin-top: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--margin-top-3xl) {
    margin-top: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--margin-top-4xl) {
    margin-top: var(--${baseClass}-spacing-4xl);
}

tnw-heading {
    margin-bottom: 20px;
}

.${baseClass}__brand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.${baseClass}__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.${baseClass}__subscription-description {
    margin-bottom: 20px;
}

.${baseClass}__socialmedia {
    display: flex;
    gap: 20px;
}

::slotted(a) {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
`;