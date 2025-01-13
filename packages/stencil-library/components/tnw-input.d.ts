import type { Components, JSX } from "../dist/types/components";

interface TnwInput extends Components.TnwInput, HTMLElement {}
export const TnwInput: {
    prototype: TnwInput;
    new (): TnwInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
