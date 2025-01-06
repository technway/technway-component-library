import type { Components, JSX } from "../dist/types/components";

interface TnwSelect extends Components.TnwSelect, HTMLElement {}
export const TnwSelect: {
    prototype: TnwSelect;
    new (): TnwSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
