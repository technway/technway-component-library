import { Flex, Grid } from '@technway/layout-kit';
import Accordion from '../../components/accordion/accordion';
import AccordionGroup from '../../components/accordion/accordion-group';
import ArticleCard from '../../components/card/card';
import { TnwDivider, TnwHeading } from '@technway/react-library/src/components';
import ReactUiButton from '../../components/ui/button';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function Home() {
    return (
        <Flex direction="col" gap={16}>
            <Flex direction="col" gap={12}>
                <TnwHeading text='Navbar' level='h2' />
                <Navbar
                    menuPlacement='middle'
                />
                <Navbar
                    menuPlacement='end'
                    appearance='outlined'
                    borderRadius='full'
                    paddingVertical='md'
                    paddingHorizontal='lg'
                    buttonBorderRadius="full"
                />
                <Navbar
                    menuPlacement='start'
                    appearance='outlined'
                    borderRadius='md'
                    paddingVertical='md'
                    paddingHorizontal='md'
                    buttonAppearanceColor='black'
                />
            </Flex>

            <TnwDivider />

            <Flex direction="col" gap={6}>
                <TnwHeading text='React UI' level='h2' />
                <ReactUiButton />
            </Flex>

            <TnwDivider />

            <Flex direction="col" gap={6}>
                <TnwHeading text='Accordions' level='h2' />
                <Flex direction="col" gap={10}>
                    <Accordion expand={true} />
                    <Accordion expand={false} />
                    <AccordionGroup />
                </Flex>
            </Flex>

            <TnwDivider />

            <Flex direction="col" gap={6}>
                <TnwHeading text='Cards' level='h2' />
                <Flex direction="col" gap={16}>
                    <Grid columns={2} gap={10}>
                        <ArticleCard imageHeight='280px' />
                        <ArticleCard imageHeight='280px' />
                    </Grid>
                    <ArticleCard layout='horizontal' />
                    <ArticleCard layout='horizontal' appearance='outlined' padding="sm" imageHeight="365px" />
                </Flex>
            </Flex>

            <TnwDivider />

            <Flex direction="col" gap={6}>
                <TnwHeading text='Footer' level='h2' />
                <Flex direction="col" gap={16}>
                    <Footer />
                </Flex>
            </Flex>

            <TnwDivider />
        </Flex>
    );
}

export default Home;
