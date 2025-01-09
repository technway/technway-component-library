import { TnwAccordion, TnwAccordionGroup } from '@technway/react-library/src/components';
import './App.css';

function App() {
  return (
    <div>
      <TnwAccordion
        heading="Accordion Test 1"
        content="This is the content of the first accordion item."
        expand={true}
      />
      <TnwAccordion
        heading="Accordion Test 1"
        content="This is the content of the first accordion item."
      />
      <TnwAccordionGroup
        singleExpand={true}
      >
        <TnwAccordion
          heading="Accordion Item 1"
          content="This is the content for the first item."
          appearance="underlined">
        </TnwAccordion>
        <TnwAccordion
          heading="Accordion Item 2"
          content="This is the content for the second item."
          appearance="underlined">
        </TnwAccordion>
        <TnwAccordion
          heading="Accordion Item 3"
          content="This is the content for the third item."
          appearance="underlined">
        </TnwAccordion>
      </TnwAccordionGroup>
    </div>
  );
}

export default App;
