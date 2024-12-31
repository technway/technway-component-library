import { BorderRadiusType } from '../../../../utils/component-props-types';
import { isNotEmptyString, getBorderRadiusClass } from '../../../../utils/utils';

const baseClass = 'tnw-navbar-menu';

// Utility: Get Menu Classes
export function getMenuClasses(
    hideMenuBelow: string | false,
    isMenuOpened: boolean,
    menuPosition: 'start' | 'middle' | 'end',       
): string {
    return [
        baseClass,
        `${baseClass}--hideMenuBelow-${hideMenuBelow}`,
        isMenuOpened ? `${baseClass}--opened` : '',
        `${baseClass}--position-${menuPosition}`,
    ].filter(Boolean).join(' ').trim();
}

// Utility: Get Menu Item Classes
export function getItemClasses(
    hasSubmenu: boolean,
    itemsHoverAppearanceStyle: 'auto' | 'inverse' | 'primary' | 'secondary' | 'black' | 'white' = 'auto',
    itemsHoverAppearance: "solid" | "outlined" | "color" | "none" = 'none',
    itemsBorderRadius: BorderRadiusType = 'default',
    itemsHoverEffect?: 'contrast' | 'opacity'
): string {
    const itemClass = `${baseClass}__item`;

    return [
        itemClass,
        `${itemClass}--${itemsHoverAppearance}`,
        (itemsHoverAppearance === 'outlined' || itemsHoverAppearance === 'solid') && `${itemClass}--hasPadding`,
        `${itemClass}--${itemsHoverAppearance}-${itemsHoverAppearanceStyle}`,
        isNotEmptyString(itemsHoverEffect) ? `${itemClass}--${itemsHoverEffect}` : '',
        (itemsHoverAppearance === 'solid' || itemsHoverAppearance === 'outlined') && getBorderRadiusClass(itemsBorderRadius),
        hasSubmenu ? `${itemClass}--hasSubmenu` : '',
    ].filter(Boolean).join(' ').trim();
}