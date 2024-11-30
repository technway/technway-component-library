export interface TnwPortfolioGridItem {
    /**
     * The URL of the image to display in the grid item.
     * This property is required.
     */
    src: string;

    /**
     * The alt text for the image.
     * This property is required.
     */    
    alt: string;

    /**
     * The URL the grid item should link to. Optional.
     */
    link?: string;

    /**
     * Defines the starting row in the grid. Optional.
     * Use for custom grid layouts.
     */
    rowStart?: number;

    /**
     * Defines the ending row in the grid. Optional.
     * Use for custom grid layouts.
     */
    rowEnd?: number;

    /**
     * Defines the starting column in the grid. Optional.
     * Use for custom grid layouts.
     */
    colStart?: number;

    /**
     * Defines the ending column in the grid. Optional.
     * Use for custom grid layouts.
     */
    colEnd?: number;
}
