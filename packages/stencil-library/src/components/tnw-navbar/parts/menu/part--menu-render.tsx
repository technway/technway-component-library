import { h } from '@stencil/core';
import { isArrayEmpty } from '../../../../utils/utils';
import { Menu, MenuItem } from './part--menu-types';
import { getMenuClasses, getItemClasses } from './part--menu-utils';
import { renderDropdownMenu } from '../dropdpwn/part--dropdown';

function processParsedMenuData(parsedMenuData: Menu) {
    const items: MenuItem[] = parsedMenuData.menuItems;
    const hideMenuBelow = parsedMenuData.hideMenuBelow;
    const itemsSize = parsedMenuData.itemsSize;
    const itemsColor = parsedMenuData.itemsColor;
    const itemsHoverAppearanceStyle = parsedMenuData.itemsHoverAppearanceStyle;
    const itemsHoverEffect = parsedMenuData.itemsHoverEffect;
    const itemsHoverAppearance = parsedMenuData.itemsHoverAppearance;
    const itemsBorderRadius = parsedMenuData.itemsBorderRadius;
    const menuInvisibilityBreakpoint = parsedMenuData.hideMenuBelow;

    return {
        items,
        hideMenuBelow,
        itemsSize,
        itemsColor,
        itemsHoverAppearanceStyle,
        itemsHoverEffect,
        itemsHoverAppearance,
        itemsBorderRadius,
        menuInvisibilityBreakpoint
    };
}

// Render Function for Menu
export const renderMenu = (
    parsedMenuData: Menu,
    isMenuOpened: boolean,
    menuPosition: 'start' | 'middle' | 'end'
) => {
    
    const menuItems: MenuItem[] = processParsedMenuData(parsedMenuData).items;
    const hideMenuBelow = processParsedMenuData(parsedMenuData).hideMenuBelow;
    const itemsSize = processParsedMenuData(parsedMenuData).itemsSize;
    const itemsColor = processParsedMenuData(parsedMenuData).itemsColor;
    const menuInvisibilityBreakpoint = processParsedMenuData(parsedMenuData).menuInvisibilityBreakpoint;
    const itemsHoverAppearanceStyle = processParsedMenuData(parsedMenuData).itemsHoverAppearanceStyle;
    const itemsHoverEffect = processParsedMenuData(parsedMenuData).itemsHoverEffect;
    const itemsHoverAppearance = processParsedMenuData(parsedMenuData).itemsHoverAppearance;
    const itemsBorderRadius = processParsedMenuData(parsedMenuData).itemsBorderRadius;

    const menuClasses = getMenuClasses(
        hideMenuBelow,
        isMenuOpened,
        menuPosition,
    );

    return (
        <ul class={menuClasses} data-nav-menu part="menu">
            {menuItems.map((item) => {
                return (
                    <li
                        class={getItemClasses(
                            !isArrayEmpty(item.subMenu),
                            itemsHoverAppearanceStyle,
                            itemsHoverAppearance,
                            itemsBorderRadius,
                            itemsHoverEffect
                        )}
                        tabindex="0"
                        part="menu-item"
                    >
                        {item.link ? (
                            <tnw-anchor
                                href={item.link}
                                newTab={item.newTab}
                                hideNewTabIcon={false}
                                color={itemsColor}
                                textDecoration="none"
                                size={itemsSize}
                                part="menu-link"
                                text={item.label}
                            >
                                {!isArrayEmpty(item.subMenu) && (
                                    <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
                                )}
                            </tnw-anchor>
                        ) : (
                            <tnw-text
                                text={item.label}
                                textTag="span"
                                color={itemsColor}
                                size={itemsSize}
                                part="menu-menulink"
                            >
                                {!isArrayEmpty(item.subMenu) && (
                                    <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
                                )}
                            </tnw-text>
                        )}
                        {!isArrayEmpty(item.subMenu) && (
                            renderDropdownMenu({
                                itemsData: item.subMenu,
                                itemsSize: itemsSize,
                                menuInvisibilityBreakpoint: menuInvisibilityBreakpoint
                            })
                        )}
                    </li>
                );
            })}
        </ul>
    );
};