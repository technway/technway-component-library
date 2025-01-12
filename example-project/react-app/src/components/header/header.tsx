import { TnwHeader, TnwHeaderBanner, TnwHeading, TnwText } from "@technway/react-library/src/components"
import Navbar from "../navbar/navbar"
// import { TnwImage } from "@technway/stencil-library/components/tnw-image.js"

const Header = () => {
    return (
        <TnwHeader
            disableInternalContainer={true}
            height="xl"
            minHeight="md"
        >
            <Navbar
                slot="navbar"
                menuPlacement='middle'
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
                {/* <TnwImage
                    slo
                /> */}
            </TnwHeaderBanner>
        </TnwHeader>
    )
}

export default Header