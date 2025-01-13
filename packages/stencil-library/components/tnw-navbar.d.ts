import type { Components, JSX } from "../dist/types/components";

interface TnwNavbar extends Components.TnwNavbar, HTMLElement {}
export const TnwNavbar: {
    prototype: TnwNavbar;
    new (): TnwNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
