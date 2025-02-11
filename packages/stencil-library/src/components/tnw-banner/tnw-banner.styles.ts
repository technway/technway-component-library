import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-banner`;
const contentClass = `${baseClass}__content`;
const headingClass = `${contentClass}-heading`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 100%;
    row-gap: var(--${baseClass}-spacing-lg);
    --${baseClass}-gradient-from: var(--tnw-background-color-inverse);
    --${baseClass}-gradient-to: var(--tnw-primary-color);
    --${baseClass}-spacing-xs: var(--tnw-spacing-xs);
    --${baseClass}-spacing-sm: var(--tnw-spacing-sm);
    --${baseClass}-spacing-md: var(--tnw-spacing-md);
    --${baseClass}-spacing-lg: var(--tnw-spacing-lg);
    --${baseClass}-spacing-xl: var(--tnw-spacing-xl);
    --${baseClass}-spacing-2xl: var(--tnw-spacing-2xl);
    --${baseClass}-spacing-3xl: var(--tnw-spacing-3xl);
    --${baseClass}-spacing-4xl: var(--tnw-spacing-4xl);
}

:host(.${baseClass}--vertical) {
    flex-direction: column;
}
:host(.${baseClass}--horizontal) {
    flex-direction: row;
    justify-content: space-between;
}

:host(.${baseClass}--vertical.${baseClass}--center) {
    justify-content: center;
}
:host(.${baseClass}--vertical.${baseClass}--start) {
    justify-content: start;
}
:host(.${baseClass}--vertical.${baseClass}--end) {
    justify-content: end;
}

:host(.${baseClass}--center) {
    align-items: center;
}
:host(.${baseClass}--start) {
    align-items: start;
}
:host(.${baseClass}--end) {
    align-items: end;
}

:host(.${baseClass}--text-center) {
    text-align: center;
}
:host(.${baseClass}--text-start) {
    text-align: start;
}
:host(.${baseClass}--text-end) {
    text-align: end;
}
:host(.${baseClass}--text-right) {
    text-align: right;
}
:host(.${baseClass}--text-left) {
    text-align: left;
}

:host(.${baseClass}--gradient) {
    background-color: var(--${baseClass}-gradient-from);
    background-image: radial-gradient(
        ellipse at top,
        var(--${baseClass}-gradient-from) 0%,
        var(--${baseClass}-gradient-from) 50%,
        var(--${baseClass}-gradient-to) 100%
    );
}

/* Gap */
:host(.${baseClass}--gap-xs) {
    column-gap: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--gap-sm) {
    column-gap: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--gap-md) {
    column-gap: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--gap-lg) {
    column-gap: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--gap-xl) {
    column-gap: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--gap-2xl) {
    column-gap: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--gap-3xl) {
    column-gap: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--gap-4xl) {
    column-gap: var(--${baseClass}-spacing-4xl);
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
    gap: 10px;
}

.${headingClass} {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

::slotted([slot="button"]) {
    width: 100%;
}
`;
