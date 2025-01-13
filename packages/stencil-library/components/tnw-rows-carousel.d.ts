import type { Components, JSX } from "../dist/types/components";

interface TnwRowsCarousel extends Components.TnwRowsCarousel, HTMLElement {}
export const TnwRowsCarousel: {
    prototype: TnwRowsCarousel;
    new (): TnwRowsCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
