import {
    TnwButton,
    TnwImage,
    TnwNavbar
} from '@technway/react-library/src/components';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from 'react-router-dom';

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
            menuData={JSON.stringify(menuData)}
            linkElement={(props: NavLinkProps) => <NavLink {...props} />}
        >
            {/* Logo */}
            <TnwImage
                src="https://picsum.photos/130/40"
                alt="logo"
                slot="logo"
                link="/"
                borderRadius="none"
            />

            {/* CTA */}
            <TnwButton
                label="Get Started"
                href="/signup"
                appearanceColor="primary"
                appearance="solid"
                size="md"
                borderRadius="default"
                slot="cta"
            />
        </TnwNavbar>
    );
};

const menuData = {
    menuItems: [
        {
            label: 'Home',
            link: '/',
            newTab: false,
        },
        {
            label: 'About Us',
            link: '/about',
            newTab: false,
        },
        {
            label: 'Services',
            link: '/services',
            newTab: false,
            subMenu: [
                {
                    label: 'Web Development',
                    link: '/services/web-development',
                    newTab: false,
                },
                {
                    label: 'Mobile Development',
                    link: '/services/mobile-development',
                    newTab: false,
                },
            ],
        },
        {
            label: 'Contact',
            link: '/contact',
            newTab: false,
        },
    ],
    hideMenuBelow: '1024',
};

export default Navbar;
