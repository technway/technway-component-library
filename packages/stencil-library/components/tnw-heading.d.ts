import type { Components, JSX } from "../dist/types/components";

interface TnwHeading extends Components.TnwHeading, HTMLElement {}
export const TnwHeading: {
    prototype: TnwHeading;
    new (): TnwHeading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
