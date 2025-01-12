import {
    TnwButton,
    TnwImage,
    TnwNavbar
} from '@technway/react-library/src/components';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
    menuPlacement: 'start' | 'end' | 'middle';
    appearance?: "transparent" | "none" | "solid" | "outlined" | "mixed" | "outlined-bottom";
    appearanceColor?: "primary" | "secondary" | "auto" | "inverse" | "light" | "white" | "black";
    borderRadius?: "none" | "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    buttonBorderRadius?: "none" | "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    paddingHorizontal?: "sm" | "md" | "lg" | "none";
    paddingVertical?: "sm" | "md" | "lg" | "none";
    buttonAppearanceColor?: "primary" | "secondary" | "auto" | "inverse" | "light" | "white" | "black" | "success" | "warning" | "danger" | "info";
}

const Navbar = (props: NavbarProps) => {
    return (
        <TnwNavbar
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
            enableLinkSlot={true}
            linksLength={2}
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

            <NavLink
                slot='link-1'
                to="/"
            >Home</NavLink>
            <NavLink
                slot='link-2'
                to="/Services"
            >Services</NavLink>

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
