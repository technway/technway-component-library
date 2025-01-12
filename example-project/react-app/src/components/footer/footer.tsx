import { TnwCopyrightsFooter, TnwFooter, TnwImage } from "@technway/react-library/src/components";
import { FooterData } from "@technway/stencil-library/components/tnw-footer/utils/tnw-footer-data-types";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const footerData: FooterData = {
        socialmedia: [
            { iconName: "tnw-github", url: "https://github.com" },
            { iconName: "tnw-linkedin", url: "https://linkedin.com" },
            { iconName: "tnw-facebook", url: "https://facebook.com" }
        ],
        links: {
            heading: "Useful Links",
            useCustomLinks: true,
            linksLength: 3,
        },
        subscription: {
            heading: "Stay in the Loop. Join Our Subscription!",
            description: "Get the latest updates, offers, and blogs in your inbox.",
            placeholder: "Enter Your Email",
            buttonText: "Subscribe"
        }
    };

    return (
        <TnwFooter
            footerData={JSON.stringify(footerData)}
            disableInternalContainer={true}
        >
            {/* Logo */}
            <TnwImage
                src="https://i.ibb.co/cJd7xbW/favicon-04.png"
                width='140px'
                height='auto'
                alt="logo"
                slot="brand"
                link="/"
                borderRadius="none"
            />

            {/* Links */}
            <NavLink
                slot='link-1'
                to="/"
            >Home</NavLink>
            <NavLink
                slot='link-2'
                to="/Services"
            >Services</NavLink>

            {/* copyrights footer */}
            <TnwCopyrightsFooter
                preText="Powered by"
                organizationName="Technway"
                slot="copyrights"
                disableInternalContainer={true}
                useDivAsContainer={true}
                useCustomLinks={true}
                linksLength={2}
            >
                {/* Links */}
                <NavLink
                    slot='link-1'
                    to="/"
                >Home</NavLink>
                <NavLink
                    slot='link-2'
                    to="/Services"
                >Services</NavLink>
            </TnwCopyrightsFooter>
        </TnwFooter>
    )
}

export default Footer;