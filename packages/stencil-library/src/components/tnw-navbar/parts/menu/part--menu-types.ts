import { BorderRadiusType, TextColorType, FontSizeType } from '../../../../utils/component-props-types';

/**
 * Defines the structure and configuration for the navigation menu in the `tnw-navbar` component.
 */
export interface Menu {
    /**
     * An array of menu items to be displayed in the navigation bar.
     * Each menu item can include a label, link, and optional submenu items.
     * Don't provide this prop if you want to use the `enable-link-slot` prop.
     */
    menuItems?: Array<MenuItem>;

    /**
     * Determines the font size of the menu items.
     * Accepts a predefined font size type.
     * 
     * @example
     * itemsSize: "md"; // Medium font size for menu items
     */
    itemsSize?: FontSizeType;

    /**
     * Specifies the text color of the menu items.
     * Accepts a predefined text color type.
     * 
     * @example
     * itemsColor: "primary"; // Uses the primary color for menu item text
     */
    itemsColor?: TextColorType;

    /**
     * Defines the appearance color of the menu items when hovered.
     * Accepts one of the predefined values.
     * 
     * @example
     * itemsHoverAppearanceColor: "primary"; // Menu items appear in primary color when hovered
     */
    itemsHoverAppearanceColor?: "auto" | "inverse" | "primary" | "secondary" | "black" | "white";

    /**
     * Specifies the hover effect applied to the menu items.
     * Options include:
     * - `contrast`: Increases contrast on hover.
     * - `opacity`: Reduces opacity on hover.
     * 
     * @example
     * itemsHoverEffect: "contrast"; // Applies a contrast effect when hovering over items
     */
    itemsHoverEffect?: "contrast" | "opacity";

    /**
     * Defines the appearance style of the menu items when hovered.
     * Accepts one of the predefined values:
     * - `solid`: Solid background color.
     * - `outlined`: Outlined border.
     * - `color`: Color change only.
     * - `none`: No hover effect.
     * 
     * @example
     * itemsHoverAppearance: "solid"; // Menu items appear with a solid background on hover
     */
    itemsHoverAppearance?: "solid" | "outlined" | "color" | "none";

    /**
     * Determines the border radius of the menu items.
     * Accepts predefined values such as `none`, `default`, or rounded sizes (e.g., `lg` for large radius).
     * 
     * @example
     * itemsBorderRadius: "lg"; // Menu items have a large border radius
     */
    itemsBorderRadius?: BorderRadiusType;

    /**
     * An array of boolean values indicating whether each menu item should open in a new tab.
     * 
     * Only works if `enableLinkSlot` is true.
     * 
     * @example
     * newTab: [true, false, true]; // The first and third menu items will open in a new tab
     */
    newTab?: boolean[];
}

export interface MenuItem {
    label: string;
    link?: string;
    newTab?: boolean;
    subMenu?: Array<MenuItem>;
}

export const navbarMenuDefaults: Menu = {
    menuItems: [],
    itemsSize: 'sm',
    itemsColor: 'auto',
    itemsHoverAppearanceColor: 'auto',
    itemsHoverEffect: 'opacity',
    itemsHoverAppearance: 'none',
    itemsBorderRadius: 'default'
};

export interface MenuProps {
    parsedMenuData: Menu;
    isOpen: boolean;
    menuPlacement: 'start' | 'middle' | 'end';
    hideMenuBelow: "1024" | "767" | "567" | "1439" | 'never' | 'always';
    enableLinkSlot: boolean;
    linksLength: number;
    menuExactCenter: boolean;
}

export default navbarMenuDefaults;
