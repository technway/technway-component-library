import { Grid } from '@technway/layout-kit';
import './App.css';
import Accordion from './components/accordion/accordion';
import AccordionGroup from './components/accordion/accordion-group';

function App() {
  return (
    <Grid columns={1} gap={10}>
      <Accordion expand={true} />
      <Accordion expand={false} />
      <AccordionGroup />
    </Grid>
  );
}

export default App;
