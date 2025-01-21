import { BorderRadiusType } from '../../../../utils/component-props-types';
import { isNotEmptyString, getBorderRadiusClass } from '../../../../utils/utils';
import { MenuProps } from './part--menu-types';

const baseClass = 'tnw-navbar-menu';

// Utility: Get Menu Classes
export function getMenuClasses(
    hideMenuBelow: MenuProps['hideMenuBelow'],
    isMenuOpened: boolean,
    menuPosition: 'start' | 'middle' | 'end',
    menuExactCenter: boolean
): string {
    return [
        baseClass,
        `${baseClass}--hideMenuBelow-${hideMenuBelow}`,
        isMenuOpened ? `${baseClass}--opened` : '',
        `${baseClass}--position-${menuPosition}`,
        menuExactCenter ? `${baseClass}--exact-center` : ``,
    ].filter(Boolean).join(' ').trim();
}

// Utility: Get Menu Item Classes
export function getItemClasses(
    hasSubmenu: boolean,
    itemsHoverAppearanceColor: 'auto' | 'inverse' | 'primary' | 'secondary' | 'black' | 'white' = 'auto',
    itemsHoverAppearance: "solid" | "outlined" | "color" | "none" = 'none',
    itemsBorderRadius: BorderRadiusType = 'default',
    itemsHoverEffect?: 'contrast' | 'opacity'
): string {
    const itemClass = `${baseClass}__item`;

    return [
        itemClass,
        `${itemClass}--${itemsHoverAppearance}`,
        (itemsHoverAppearance === 'outlined' || itemsHoverAppearance === 'solid') && `${itemClass}--hasPadding`,
        `${itemClass}--${itemsHoverAppearance}-${itemsHoverAppearanceColor}`,
        isNotEmptyString(itemsHoverEffect) ? `${itemClass}--${itemsHoverEffect}` : '',
        (itemsHoverAppearance === 'solid' || itemsHoverAppearance === 'outlined') && getBorderRadiusClass(itemsBorderRadius),
        hasSubmenu ? `${itemClass}--hasSubmenu` : '',
    ].filter(Boolean).join(' ').trim();
}