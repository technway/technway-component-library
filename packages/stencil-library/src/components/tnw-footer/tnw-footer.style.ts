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

footer {
    display: grid;
    gap: 80px;
}
    
/* Paddings Block */
:host(.${baseClass}--padding-xs) {
    padding-block: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--padding-sm) {
    padding-block: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--padding-md) {
    padding-block: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--padding-lg) {
    padding-block: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--padding-xl) {
    padding-block: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--padding-2xl) {
    padding-block: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--padding-3xl) {
    padding-block: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--padding-4xl) {
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

.${baseClass}__newsletter-description {
    margin-bottom: 20px;
}

.${baseClass}__socialmedia {
    display: flex;
    gap: 20px;
}
`;