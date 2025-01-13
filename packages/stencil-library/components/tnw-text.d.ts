import type { Components, JSX } from "../dist/types/components";

interface TnwText extends Components.TnwText, HTMLElement {}
export const TnwText: {
    prototype: TnwText;
    new (): TnwText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
