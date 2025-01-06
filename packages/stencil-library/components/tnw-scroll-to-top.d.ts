import type { Components, JSX } from "../dist/types/components";

interface TnwScrollToTop extends Components.TnwScrollToTop, HTMLElement {}
export const TnwScrollToTop: {
    prototype: TnwScrollToTop;
    new (): TnwScrollToTop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
