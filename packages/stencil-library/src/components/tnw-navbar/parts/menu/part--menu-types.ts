import { BorderRadiusType, TextColorType, FontSizeType } from '../../../../utils/component-props-types';

export interface Menu {
    /**
     * An array of menu items.
     */
    menuItems: Array<MenuItem>;

    /**
     * Specifies the screen width below which the menu should be hidden.
     * Can be one of the predefined values or `false` to never hide the menu.
     */
    hideMenuBelow: "1024" | "767" | "567" | "1439" | false;

    /**
     * Specifies the font size of the menu items.
     */
    itemsSize: FontSizeType;

    /**
     * Specifies the text color of the menu items.
     */
    itemsColor: TextColorType;

    /**
     * Specifies the appearance color of the menu items when hovered.
     * Can be one of the predefined values.
     */
    itemsHoverAppearanceColor: 'auto' | 'inverse' | 'primary' | 'secondary' | 'black' | 'white';

    /**
     * Specifies the hover effect for the menu items.
     * Can be either 'contrast' or 'opacity'.
     */
    itemsHoverEffect: 'contrast' | 'opacity';

    /**
     * Specifies the appearance of the menu items when hovered.
     * Can be one of the predefined values.
     */
    itemsHoverAppearance: "solid" | "outlined" | "color" | "none";

    /**
     * Specifies the border radius of the menu items.
     */
    itemsBorderRadius: BorderRadiusType;
}

export interface MenuItem {
    label: string;
    link?: string;
    newTab?: boolean;
    subMenu?: Array<MenuItem>;
}

export const navbarMenuDefaults: Menu = {
    menuItems: [],
    hideMenuBelow: false,
    itemsSize: 'sm',
    itemsColor: 'auto',
    itemsHoverAppearanceColor: 'auto',
    itemsHoverEffect: 'opacity',
    itemsHoverAppearance: 'none',
    itemsBorderRadius: 'default'
};

export interface MenuProps extends Menu {
    hideMenuBelow: Menu['hideMenuBelow'];
    isMenuOpened: boolean;
    menuInvisibilityBreakpoint?: '767' | '1024';
    menuPosition?: 'start' | 'middle' | 'end';
    itemLinkElement?: any;
}

export default navbarMenuDefaults;
