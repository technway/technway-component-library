import type { Components, JSX } from "../dist/types/components";

interface TnwLabel extends Components.TnwLabel, HTMLElement {}
export const TnwLabel: {
    prototype: TnwLabel;
    new (): TnwLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
