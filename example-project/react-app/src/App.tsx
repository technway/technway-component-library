import { Flex, Grid } from '@technway/layout-kit';
import './App.css';
import Accordion from './components/accordion/accordion';
import AccordionGroup from './components/accordion/accordion-group';
import ArticleCard from './components/accordion/card/card';
import { TnwHeading } from '@technway/react-library/src/components';

function App() {
  return (
    <Flex direction="col" gap={16}>
      <Flex direction="col" gap={6}>
        <TnwHeading text='Accordions' level='h2' />
        <Flex direction="col" gap={10}>
          <Accordion expand={true} />
          <Accordion expand={false} />
          <AccordionGroup />
        </Flex>
      </Flex>

      <Flex direction="col" gap={6}>
        <TnwHeading text='Cards' level='h2' />
        <Flex direction="col" gap={16}>
          <Grid columns={2} gap={10}>
            <ArticleCard />
            <ArticleCard />
          </Grid>
          <ArticleCard layout='horizontal' />
          <ArticleCard layout='horizontal' appearance='outlined' padding="sm" imageHeight="365px" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
