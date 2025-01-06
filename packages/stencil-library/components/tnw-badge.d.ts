import type { Components, JSX } from "../dist/types/components";

interface TnwBadge extends Components.TnwBadge, HTMLElement {}
export const TnwBadge: {
    prototype: TnwBadge;
    new (): TnwBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
