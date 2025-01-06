import type { Components, JSX } from "../dist/types/components";

interface TnwDivider extends Components.TnwDivider, HTMLElement {}
export const TnwDivider: {
    prototype: TnwDivider;
    new (): TnwDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
