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
}

const NavbarWithData = (props: NavbarProps) => {
    const menuData: Menu = {
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
            disableInternalContainer={true}
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
                src="https://i.ibb.co/cJd7xbW/favicon-04.png"
                width='110px'
                height='auto'
                alt="logo"
                slot="logo"
                link="/"
                borderRadius="none"
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
