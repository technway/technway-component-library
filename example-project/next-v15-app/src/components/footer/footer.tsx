'use client';

import { TnwAnchorStyler, TnwCopyrightsFooter, TnwFooter, TnwImage } from "@technway/next-library/src/components";
import { FooterData } from "@technway/stencil-library/components/tnw-footer/utils/tnw-footer-data-types";
import Link from "next/link";

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
            <Link
                slot='link-1'
                href="/"
            >Home</Link>
            <Link
                slot='link-2'
                href="/Services"
            >Services</Link>

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
                <TnwAnchorStyler enableNewTabIcon={true} slot='link-1' textDecoration="none">
                    <Link href="/">Home</Link>
                </TnwAnchorStyler>
                <TnwAnchorStyler enableNewTabIcon={true} slot='link-2' textDecoration="none">
                    <Link href="/Services">Services</Link>
                </TnwAnchorStyler>
            </TnwCopyrightsFooter>
        </TnwFooter>
    )
}

export default Footer;