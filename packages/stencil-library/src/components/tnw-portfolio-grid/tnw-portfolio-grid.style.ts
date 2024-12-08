import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-portfolio-grid`;
const contentClass = `${baseClass}__content`;
// const itemClass = `${baseClass}__item`;

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

.${contentClass} {
    display: grid;
    grid-template-rows: auto auto;
}

.${contentClass}--gradient-fade {
    position: relative;
}
.${contentClass}--gradient-fade::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 350px;
    background-image: linear-gradient(to bottom, rgba(var(--tnw-background-color-rgb), 0), rgba(var(--tnw-background-color-rgb), 1));
    pointer-events: none;
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

tnw-anchor,
tnw-anchor::part(anchor) {
    width: 100%;
    height: 100%;
}
`;