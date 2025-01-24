'use client';

import {
    TnwButton,
    TnwImage,
    TnwNavbar
} from '@technway/next-library/src/components';
import { Menu } from '@technway/stencil-library/dist/types/components/tnw-navbar/parts/menu/part--menu-types';

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

const NavbarWithData = (props: NavbarProps) => {
    const menuData: Menu = {
        itemsSize: 'xs',
        menuItems: [
            { label: 'Home', link: '/' },
            { label: 'About', link: '/About' },
            { label: 'Services', link: '/Services' },
            { label: 'Contact', link: '/Contact' }
        ]
    }
    return (
        <TnwNavbar
            slot={props.slot}
            enableCtaSlot={true}
            enableLogoSlot={true}
            enableMenuSlot={true}
            disableInternalContainer={props.disableInternalContainer}
            paddingHorizontal={props.paddingHorizontal || 'none'}
            paddingVertical={props.paddingVertical || 'md'}
            appearance={props.appearance || "outlined-bottom"}
            appearanceColor={props.appearanceColor || 'light'}
            borderRadius={props.borderRadius || 'none'}
            hideMenuBelow='1024'
            menuData={JSON.stringify(menuData)}
            menuExactCenter={props.menuPlacement === 'middle'}
            menuPlacement={props.menuPlacement}
        >
            {/* Logo */}
            <TnwImage
                src="/technway-logo-full.png"
                width='130px'
                height='auto'
                alt="Technway Logo"
                link="/"
                borderRadius="none"
                slot="logo"
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

export default NavbarWithData;
