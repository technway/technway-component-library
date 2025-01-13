import type { Components, JSX } from "../dist/types/components";

interface TnwSection extends Components.TnwSection, HTMLElement {}
export const TnwSection: {
    prototype: TnwSection;
    new (): TnwSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
