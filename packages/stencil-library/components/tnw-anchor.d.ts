import type { Components, JSX } from "../dist/types/components";

interface TnwAnchor extends Components.TnwAnchor, HTMLElement {}
export const TnwAnchor: {
    prototype: TnwAnchor;
    new (): TnwAnchor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
