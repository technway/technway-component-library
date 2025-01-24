import { h } from '@stencil/core';
import { isArrayEmpty, isNotEmptyString } from '../../../../utils/utils';
import { Menu, MenuItem, MenuProps } from './part--menu-types';
import { getMenuClasses, getItemClasses, gapSize } from './part--menu-utils';
import { renderDropdownMenu } from '../dropdown/part--dropdown';

function rawMenuData(parsedMenuData: Menu) {
    const items: MenuItem[] = parsedMenuData?.menuItems || [];
    const itemsSize = parsedMenuData?.itemsSize || 'sm';
    const itemsColor = parsedMenuData?.itemsColor || 'auto';
    const itemsHoverAppearanceColor = parsedMenuData?.itemsHoverAppearanceColor;
    const itemsHoverEffect = parsedMenuData?.itemsHoverEffect;
    const itemsHoverAppearance = parsedMenuData?.itemsHoverAppearance;
    const itemsBorderRadius = parsedMenuData?.itemsBorderRadius;
    const newTab = parsedMenuData?.newTab || false;

    return {
        items,
        itemsSize,
        itemsColor,
        itemsHoverAppearanceColor,
        itemsHoverEffect,
        itemsHoverAppearance,
        itemsBorderRadius,
        newTab,
    };
}

// Render Function for Menu
export const renderMenu = (props: MenuProps) => {
    const menuClasses = getMenuClasses(
        props.hideMenuBelow,
        props.isOpen,
        props.menuPlacement,
        props.menuExactCenter
    );

    const {
        items,
        itemsSize,
        itemsColor,
        itemsHoverAppearanceColor,
        itemsHoverEffect,
        itemsHoverAppearance,
        itemsBorderRadius,
        newTab,
    } = rawMenuData(props.parsedMenuData);

    if (props?.parsedMenuData !== undefined && props?.parsedMenuData?.menuItems?.length > 0) {
        return (
            <ul class={menuClasses}
                style={{
                    '--tnw-navbar-menu-gap-f': gapSize[itemsSize]
                }}
                data-nav-menu
                part="menu"
            >
                {items.map((item) => {
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
                                <tnw-anchor-styler
                                    text={item.label}
                                    color={itemsColor}
                                    size={itemsSize}
                                    textDecoration="none"
                                    part="menu-link"
                                >
                                    {!isArrayEmpty(item.subMenu) && (
                                        <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
                                    )}
                                </tnw-anchor-styler>
                            )}
                            {!isArrayEmpty(item.subMenu) && (
                                renderDropdownMenu({
                                    itemsData: item.subMenu,
                                    itemsSize: itemsSize,
                                    menuInvisibilityBreakpoint: props.hideMenuBelow
                                })
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }

    if (props.enableLinkSlot) {
        return (
            <ul class={menuClasses}
                data-nav-menu
                part="menu"
                style={{
                    '--tnw-navbar-menu-gap-f': gapSize[itemsSize]
                }}
            >
                {Array.from({ length: props.linksLength }, (_, i) => (
                    <li
                        tabindex="0"
                        part="menu-item"
                    >
                        <tnw-anchor-styler
                            enableNewTabIcon={newTab[i]}
                            color={itemsColor}
                            textDecoration="none"
                            size={itemsSize}
                            part="menu-link"
                        >
                            <slot name={`link-${i + 1}`} />
                        </tnw-anchor-styler>
                    </li>
                ))}
            </ul>
        );
    }

    return null;
};