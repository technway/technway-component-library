import type { Components, JSX } from "../dist/types/components";

interface TnwRating extends Components.TnwRating, HTMLElement {}
export const TnwRating: {
    prototype: TnwRating;
    new (): TnwRating;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
