import { h } from '@stencil/core';
import { isArrayEmpty, isNotEmptyString } from '../../../../utils/utils';
import { Menu, MenuItem } from './part--menu-types';
import { getMenuClasses, getItemClasses } from './part--menu-utils';
import { renderDropdownMenu } from '../dropdpwn/part--dropdown';

function processParsedMenuData(parsedMenuData: Menu) {
    const items: MenuItem[] = parsedMenuData.menuItems;
    const hideMenuBelow = parsedMenuData.hideMenuBelow;
    const itemsSize = parsedMenuData.itemsSize;
    const itemsColor = parsedMenuData.itemsColor;
    const itemsHoverAppearanceColor = parsedMenuData.itemsHoverAppearanceColor;
    const itemsHoverEffect = parsedMenuData.itemsHoverEffect;
    const itemsHoverAppearance = parsedMenuData.itemsHoverAppearance;
    const itemsBorderRadius = parsedMenuData.itemsBorderRadius;
    const menuInvisibilityBreakpoint = parsedMenuData.hideMenuBelow;

    return {
        items,
        hideMenuBelow,
        itemsSize,
        itemsColor,
        itemsHoverAppearanceColor,
        itemsHoverEffect,
        itemsHoverAppearance,
        itemsBorderRadius,
        menuInvisibilityBreakpoint,
    };
}

// Render Function for Menu
export const renderMenu = (
    parsedMenuData: Menu,
    isMenuOpened: boolean,
    menuPosition: 'start' | 'middle' | 'end',
    itemLinkElement: any
) => {

    const {
        items: menuItems,
        hideMenuBelow,
        itemsSize,
        itemsColor,
        menuInvisibilityBreakpoint,
        itemsHoverAppearanceColor,
        itemsHoverEffect,
        itemsHoverAppearance,
        itemsBorderRadius,
    } = processParsedMenuData(parsedMenuData);

    const menuClasses = getMenuClasses(
        hideMenuBelow,
        isMenuOpened,
        menuPosition,
    );

    if (menuItems === null || menuItems === undefined || menuItems.length === 0) {
        return null;
    }

    return (
        <ul class={menuClasses} data-nav-menu part="menu">
            {menuItems.map((item) => {
                // const LinkElement: any = itemLinkElement || (
                //     <tnw-anchor
                //         href={item.link}
                //         newTab={item.newTab}
                //         hideNewTabIcon={false}
                //         color={itemsColor}
                //         textDecoration="none"
                //         size={itemsSize}
                //         part="menu-link"
                //         text={item.label}
                //     >
                //         {!isArrayEmpty(item.subMenu) && (
                //             <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
                //         )}
                //     </tnw-anchor>
                // );
                const LinkElement = typeof itemLinkElement === 'function' ? itemLinkElement : null;
                console.log('LinkElement ', typeof itemLinkElement === 'function')
                return (
                    <li
                        class={getItemClasses(
                            !isArrayEmpty(item.subMenu),
                            itemsHoverAppearanceColor,
                            itemsHoverAppearance,
                            itemsBorderRadius,
                            itemsHoverEffect
                        )}
                        tabindex="0"
                        part="menu-item"
                    >
                        {isNotEmptyString(item.link) ? (
                            LinkElement !== null ? (
                                // Render custom link component (e.g., React Router Link)
                                <LinkElement
                                    to={item.link}
                                    target={item.newTab ? '_blank' : undefined}
                                    rel={item.newTab ? 'noopener noreferrer' : undefined}
                                    class="custom-link-class"
                                >
                                    {item.label}
                                    {!isArrayEmpty(item.subMenu) && (
                                        <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
                                    )}
                                </LinkElement>
                            ) : (
                                <a
                                    href={item.link}
                                    target={item.newTab ? '_blank' : undefined}
                                    rel={item.newTab ? 'noopener noreferrer' : undefined}
                                    class="custom-link-class"
                                >
                                    {item.label}
                                    {!isArrayEmpty(item.subMenu) && (
                                        <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
                                    )}
                                </a>
                            )
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