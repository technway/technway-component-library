import type { Components, JSX } from "../dist/types/components";

interface TnwAlert extends Components.TnwAlert, HTMLElement {}
export const TnwAlert: {
    prototype: TnwAlert;
    new (): TnwAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
