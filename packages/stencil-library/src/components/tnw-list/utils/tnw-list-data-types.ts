/**
 * A list for the `tnw-list` component
 */
export interface TnwListData {
    /**
     * The tag to use for the list element
     */
    listTag?: 'ul' | 'ol';

    /**
     * The type of list marker to use
     */
    markerType?: 'disc' | 'circle' | 'square' | 'decimal' | 'lower-roman' | 'upper-roman' | 'none';

    /**
     * The list items to display
     */
    items?: TnwListItem[];
}

/**
 * A list item for the `tnw-list` component
 */
export interface TnwListItem {
    /**
     * The text content of the list item
     */
    text: string; 

    /**
     * The URL to navigate to when the list item is clicked
     */
    url?: string; 

    /**
     * Whether the list item should open in a new tab
     */
    newTab?: boolean;

    /**
     * The name of the icon to display next to the list item
     */
    iconName?: string;

    /**
     * Sub-list items to display within the list item
     */
    subList?: TnwListData;
}