import {
    TnwAccordion,
    TnwAccordionGroup
} from '@technway/react-library/src/components';

const AccordionGroup = () => {
    return (
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
    )
}

export default AccordionGroup;