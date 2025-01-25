import { Flex, Grid } from '@technway/layout-kit';
import Accordion from '../components/accordion/accordion';
import AccordionGroup from '../components/accordion/accordion-group';
import ArticleCard from '../components/card/card';
import { TnwDivider, TnwHeading } from '@technway/next-library/src/components';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import NewsletterBanner from '@/components/newsletter-banner';

export default function Home() {
  return (
    <>
      <Header />
      
      <TnwDivider />

      <div className="container layout">
        <Flex direction="col" gap={16}>
          <Flex direction="col" gap={12}>
            <TnwHeading text='Banners' level='h2' style={{ marginTop: '100px' }} />
            <NewsletterBanner />
          </Flex>

          <TnwDivider />

          <Flex direction="col" gap={12}>
            <TnwHeading text='Navbar' level='h2' />
            <Navbar
              menuPlacement='middle'
              disableInternalContainer={true}
            />
            <Navbar
              searchVariant="icon-left"
              menuPlacement='end'
              appearance='outlined'
              borderRadius='full'
              paddingVertical='md'
              paddingHorizontal='lg'
              buttonBorderRadius="full"
              disableInternalContainer={true}
            />
            <Navbar
              searchVariant="icon-right"
              menuPlacement='start'
              appearance='outlined'
              borderRadius='md'
              paddingVertical='md'
              paddingHorizontal='md'
              buttonAppearanceColor='black'
              disableInternalContainer={true}
            />
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
              <Grid
                gap={10}
                responsive={{
                  default: 3,
                  md: 2,
                  sm: 1,
                }}
              >
                <ArticleCard imageHeight='280px' />
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
      </div >
    </>
  );
}
