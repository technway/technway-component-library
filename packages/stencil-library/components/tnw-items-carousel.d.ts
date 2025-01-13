import type { Components, JSX } from "../dist/types/components";

interface TnwItemsCarousel extends Components.TnwItemsCarousel, HTMLElement {}
export const TnwItemsCarousel: {
    prototype: TnwItemsCarousel;
    new (): TnwItemsCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
