import type { Components, JSX } from "../dist/types/components";

interface TnwHeaderBanner extends Components.TnwHeaderBanner, HTMLElement {}
export const TnwHeaderBanner: {
    prototype: TnwHeaderBanner;
    new (): TnwHeaderBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
