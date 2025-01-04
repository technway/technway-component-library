import {
    Menu,
    MenuItem,
    MenuProps,
    navbarMenuDefaults
} from './part--menu-types';
import { renderMenu } from './part--menu-render';

export {
    Menu,
    MenuItem,
    MenuProps,
    navbarMenuDefaults
};

export const renderNavbarMenu = (
    menuData: Menu,
    menuProps: Partial<Menu> = {
        itemsHoverAppearanceColor: 'auto',
        itemsHoverAppearance: 'none',
        itemsBorderRadius: 'default',
        itemsHoverEffect: undefined
    }
) => {
    const mergedProps: MenuProps = {
        ...navbarMenuDefaults,
        hideMenuBelow: menuProps.hideMenuBelow || navbarMenuDefaults.hideMenuBelow,
        isMenuOpened: false,
        menuPosition: 'middle',
    };

    return renderMenu(
        menuData,
        mergedProps.isMenuOpened,
        mergedProps.menuPosition,
    );
};