import type { Components, JSX } from "../dist/types/components";

interface TnwHeader extends Components.TnwHeader, HTMLElement {}
export const TnwHeader: {
    prototype: TnwHeader;
    new (): TnwHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
