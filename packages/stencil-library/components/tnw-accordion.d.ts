import type { Components, JSX } from "../dist/types/components";

interface TnwAccordion extends Components.TnwAccordion, HTMLElement {}
export const TnwAccordion: {
    prototype: TnwAccordion;
    new (): TnwAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
