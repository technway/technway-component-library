import type { Components, JSX } from "../dist/types/components";

interface TnwIcon extends Components.TnwIcon, HTMLElement {}
export const TnwIcon: {
    prototype: TnwIcon;
    new (): TnwIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
