import * as React from 'react';
import MenuItem, { MenuItemInterface, MenuItemProps } from './NavbarMenuItem';

export interface NavbarMenuProps {
    items: MenuItemInterface[];
    hideMenuBelow?: "1024" | "767" | "567" | "1439" | false;
    isMenuOpened?: boolean;
    gap?: string;
    slot?: string;
}

const NavbarMenu = (props: NavbarMenuProps) => {
    if (!props.items || props.items.length === 0) return null;

    /* Styling */
    const baseMenuStyles: React.CSSProperties = {
        transition: `opacity .3s, transform .3s`,
        display: 'flex',
        gap: props.gap || '20px',
        padding: 0,
        margin: 0,
    };

    const closedMenuStyles: React.CSSProperties = {
        ...baseMenuStyles,
        opacity: 0,
        transform: 'translateY(-20px)',
        visibility: 'hidden',
    };

    const openedMenuStyles: React.CSSProperties = {
        ...baseMenuStyles,
        opacity: 1,
        transform: 'translateY(0)',
        visibility: 'visible',
    };

    const getMenuStyles = (): React.CSSProperties => {
        const hideMenuBelow = props.hideMenuBelow ? props.hideMenuBelow : "1024";
        const isSmallScreen = hideMenuBelow
            ? window.matchMedia(`(max-width: ${hideMenuBelow}px)`).matches
            : false;

        if (isSmallScreen) {
            return props.isMenuOpened ?
                { ...openedMenuStyles, ...baseMenuStyles } :
                { ...closedMenuStyles, ...baseMenuStyles };
        }

        return baseMenuStyles;
    };

    return (
        <ul slot={props.slot} style={getMenuStyles()} role="menu">
            {props.items.map((item, index) => (
                <MenuItem
                    key={index}
                    item={item}
                />
            ))}
        </ul>
    );
};

export default NavbarMenu;
