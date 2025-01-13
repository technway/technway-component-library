import type { Components, JSX } from "../dist/types/components";

interface TnwPortfolioGrid extends Components.TnwPortfolioGrid, HTMLElement {}
export const TnwPortfolioGrid: {
    prototype: TnwPortfolioGrid;
    new (): TnwPortfolioGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
