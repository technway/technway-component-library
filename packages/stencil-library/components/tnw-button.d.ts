import type { Components, JSX } from "../dist/types/components";

interface TnwButton extends Components.TnwButton, HTMLElement {}
export const TnwButton: {
    prototype: TnwButton;
    new (): TnwButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
