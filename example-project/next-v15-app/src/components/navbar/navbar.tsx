'use client';

import {
    TnwButton,
    TnwImage,
    TnwNavbar,
    TnwSearchInput
} from '@technway/next-library/src/components';
import Link from 'next/link';
import { Menu } from '@technway/stencil-library/components/tnw-navbar/parts/menu/part--menu-types';

interface NavbarProps {
    slot?: string;
    menuPlacement: 'start' | 'end' | 'middle';
    appearance?: "transparent" | "none" | "solid" | "outlined" | "mixed" | "outlined-bottom";
    appearanceColor?: "primary" | "secondary" | "auto" | "inverse" | "light" | "white" | "black";
    borderRadius?: "none" | "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    buttonBorderRadius?: "none" | "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    paddingHorizontal?: "sm" | "md" | "lg" | "none";
    paddingVertical?: "sm" | "md" | "lg" | "none";
    buttonAppearanceColor?: "primary" | "secondary" | "auto" | "inverse" | "light" | "white" | "black" | "success" | "warning" | "danger" | "info";
    disableInternalContainer?: boolean;
    searchVariant?: "expandable" | "icon-left" | "icon-right" | "no-icon";
}

const Navbar = (props: NavbarProps) => {

    const menuData: Menu = {
        itemsSize: 'xs',
        newTab: [true],
    }

    return (
        <TnwNavbar
            slot={props.slot}
            enableCtaSlot={true}
            enableLogoSlot={true}
            disableInternalContainer={props.disableInternalContainer}
            paddingHorizontal={props.paddingHorizontal || 'none'}
            paddingVertical={props.paddingVertical || 'md'}
            appearance={props.appearance || "outlined-bottom"}
            appearanceColor={props.appearanceColor || 'light'}
            borderRadius={props.borderRadius || 'none'}
            hideMenuBelow='1024'
            enableLinkSlot={true}
            linksLength={2}
            menuExactCenter={props.menuPlacement === 'middle'}
            menuPlacement={props.menuPlacement}
            menuData={JSON.stringify(menuData)}
            enableSearchSlot={true}
        >
            {/* Logo */}
            <TnwImage
                src="/technway-logo.png"
                width='40px'
                height='auto'
                alt="Technway Logo"
                link="/"
                borderRadius="none"
                slot="logo"
            />

            <Link
                slot='link-1'
                href="/"
            >Home</Link>
            <Link
                slot='link-2'
                href="/Services"
            >Services</Link>

            {/* Search */}
            <TnwSearchInput
                variant={props.searchVariant || "expandable"}
                slot="search"
            />

            {/* CTA */}
            <TnwButton
                label="Get Started"
                href="/signup"
                appearanceColor={props.buttonAppearanceColor || 'primary'}
                appearance="solid"
                size="md"
                borderRadius={props.buttonBorderRadius || 'default'}
                slot="cta"
            />
        </TnwNavbar>
    );
};

export default Navbar;
