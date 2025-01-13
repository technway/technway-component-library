import type { Components, JSX } from "../dist/types/components";

interface TnwCard extends Components.TnwCard, HTMLElement {}
export const TnwCard: {
    prototype: TnwCard;
    new (): TnwCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
