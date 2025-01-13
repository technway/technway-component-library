import type { Components, JSX } from "../dist/types/components";

interface TnwTextarea extends Components.TnwTextarea, HTMLElement {}
export const TnwTextarea: {
    prototype: TnwTextarea;
    new (): TnwTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
