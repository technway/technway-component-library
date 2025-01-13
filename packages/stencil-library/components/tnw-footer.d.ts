import type { Components, JSX } from "../dist/types/components";

interface TnwFooter extends Components.TnwFooter, HTMLElement {}
export const TnwFooter: {
    prototype: TnwFooter;
    new (): TnwFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
