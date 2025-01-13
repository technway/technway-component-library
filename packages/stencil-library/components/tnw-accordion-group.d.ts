import type { Components, JSX } from "../dist/types/components";

interface TnwAccordionGroup extends Components.TnwAccordionGroup, HTMLElement {}
export const TnwAccordionGroup: {
    prototype: TnwAccordionGroup;
    new (): TnwAccordionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
