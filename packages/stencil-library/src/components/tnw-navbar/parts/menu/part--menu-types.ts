import { BorderRadiusType, TextColorType, FontSizeType } from '../../../../utils/component-props-types';

export interface Menu {
    menuItems: Array<MenuItem>;
    hideMenuBelow: "1024" | "767" | "567" | "1439" | false;
    itemsSize: FontSizeType;
    itemsColor: TextColorType;
    itemsHoverAppearanceColor: 'auto' | 'inverse' | 'primary' | 'secondary' | 'black' | 'white';
    itemsHoverEffect: 'contrast' | 'opacity';
    itemsHoverAppearance: "solid" | "outlined" | "color" | "none";
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
}

export default navbarMenuDefaults;
