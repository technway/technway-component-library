'use client';

import { TnwHeader, TnwHeaderBanner, TnwHeading, TnwText } from "@technway/next-library/src/components"
import NavbarWithData from "../navbar/navbar-with-data";

const Header = () => {
    return (
        <TnwHeader
            disableInternalContainer={true}
            height="auto"
            minHeight="lg"
            centerBanner={true}
        >
            <NavbarWithData
                slot="navbar"
                menuPlacement='middle'
                disableInternalContainer={false}
            />
            <TnwHeaderBanner
                slot="banner"
                contentWidth="half"
                contentMaxWidth="md"
                wrapImage={true}
                imageSrc="/tools.png"
            >
                <TnwHeading
                    text="Articles and Insights on Web Development, Design & Collaboration"
                    weight="500"
                    size="3xl"
                    widthSize="sm"
                    slot="heading"
                />
                <TnwText
                    text="Explore articles and insights on web development, programming, software engineering, UI/UX, graphic design, and team collaboration."
                    size="sm"
                    widthSize="sm"
                    lineHeight="2"
                    slot="description"
                />
            </TnwHeaderBanner>
        </TnwHeader>
    )
}

export default Header