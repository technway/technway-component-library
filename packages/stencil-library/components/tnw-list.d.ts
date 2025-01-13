import type { Components, JSX } from "../dist/types/components";

interface TnwList extends Components.TnwList, HTMLElement {}
export const TnwList: {
    prototype: TnwList;
    new (): TnwList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
