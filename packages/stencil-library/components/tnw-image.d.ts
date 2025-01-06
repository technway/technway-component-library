import type { Components, JSX } from "../dist/types/components";

interface TnwImage extends Components.TnwImage, HTMLElement {}
export const TnwImage: {
    prototype: TnwImage;
    new (): TnwImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
