import type { Components, JSX } from "../dist/types/components";

interface TnwContactBanner extends Components.TnwContactBanner, HTMLElement {}
export const TnwContactBanner: {
    prototype: TnwContactBanner;
    new (): TnwContactBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
