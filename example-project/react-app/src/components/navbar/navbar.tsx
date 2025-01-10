import {
    TnwImage,
    TnwButton,
    TnwNavbar
} from "@technway/react-library/src/components";
import { NavbarMenu } from "@technway/react-ui";

const menuItems = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "About",
        link: "/about",
    },
    {
        label: "Services",
        link: "/services",
        subMenu: [
            { label: "Web Development", link: "/services/web-development" },
            { label: "App Development", link: "/services/app-development" },
        ],
    },
    {
        label: "Contact",
        link: "/contact",
    },
];

const Navbar = () => {
    return (
        <TnwNavbar
            enableCtaSlot={true}
            enableLogoSlot={true}
            enableMenuSlot={true}
            disableInternalContainer={true}
            paddingHorizontal="none"
            appearance="outlined-bottom"
            borderRadius="none"
        >
            {/* Logo */}
            <TnwImage
                src="https://picsum.photos/130/40"
                alt="logo"
                slot="logo"
                link="/"
                borderRadius="none"
            />

            {/* Menu */}
            <NavbarMenu
                items={menuItems}
                slot="menu"
            />

            {/* CTA */}
            <TnwButton
                label="Get Started"
                href="/signup"
                appearanceColor="primary"
                appearance="solid"
                size="md"
                border-radius="default"
                slot="cta"
            />
        </TnwNavbar>
    )
}

export default Navbar;