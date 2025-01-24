'use client';

import {
    TnwButton,
    TnwImage,
    TnwNavbar
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
        >
            {/* Logo */}
            <TnwImage
                src="https://i.ibb.co/cJd7xbW/favicon-04.png"
                width='110px'
                height='auto'
                alt="logo"
                slot="logo"
                link="/"
                borderRadius="none"
            />

            <Link
                slot='link-1'
                href="/"
            >Home</Link>
            <Link
                slot='link-2'
                href="/Services"
            >Services</Link>

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
