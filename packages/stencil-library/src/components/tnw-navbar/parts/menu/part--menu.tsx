import { h } from '@stencil/core';
import { isArrayEmpty, isNotEmptyString } from '../../../../utils/utils';
import { Menu, MenuItem, MenuProps } from './part--menu-types';
import { getMenuClasses, getItemClasses } from './part--menu-utils';
import { renderDropdownMenu } from '../dropdown/part--dropdown';

function rawMenuData(parsedMenuData: Menu) {
    const items: MenuItem[] = parsedMenuData.menuItems;
    const itemsSize = parsedMenuData.itemsSize;
    const itemsColor = parsedMenuData.itemsColor;
    const itemsHoverAppearanceColor = parsedMenuData.itemsHoverAppearanceColor;
    const itemsHoverEffect = parsedMenuData.itemsHoverEffect;
    const itemsHoverAppearance = parsedMenuData.itemsHoverAppearance;
    const itemsBorderRadius = parsedMenuData.itemsBorderRadius;

    return {
        items,
        itemsSize,
        itemsColor,
        itemsHoverAppearanceColor,
        itemsHoverEffect,
        itemsHoverAppearance,
        itemsBorderRadius,
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
    

    if (props?.parsedMenuData !== undefined && props?.parsedMenuData?.menuItems?.length > 0) {
        const {
            items,
            itemsSize,
            itemsColor,
            itemsHoverAppearanceColor,
            itemsHoverEffect,
            itemsHoverAppearance,
            itemsBorderRadius,
        } = rawMenuData(props.parsedMenuData);

        return (
            <ul class={menuClasses} data-nav-menu part="menu">
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
                            {
                                props.enableLinkSlot ? (
                                    Array.from({ length: props.linksLength }, (_, i) => (
                                        <tnw-text
                                            textTag="span"
                                            color={itemsColor}
                                            size={itemsSize}
                                            part="menu-link"
                                        >
                                            <slot name={`link-${i + 1}`} />
                                        </tnw-text>
                                    ))
                                ) : (
                                    isNotEmptyString(item.link) ? (
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
                                            part="menu-link"
                                        >
                                            {!isArrayEmpty(item.subMenu) && (
                                                <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
                                            )}
                                        </tnw-text>
                                    ))}
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
            <ul class={menuClasses} data-nav-menu part="menu">
                {Array.from({ length: props.linksLength }, (_, i) => (
                    <li
                        tabindex="0"
                        part="menu-item"
                    >
                        <tnw-text
                            textTag="span"
                            color='auto'
                            size='sm'
                            part="menu-link"
                        >
                            <slot name={`link-${i + 1}`} />
                        </tnw-text>
                    </li>
                ))}
            </ul>
        );
    }

    return null;
};