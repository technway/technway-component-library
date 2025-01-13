'use client';

import {
    TnwAccordion
} from '@technway/next-library/src/components';

interface AccordionProps {
    expand: boolean;
}
const Accordion = (props: AccordionProps) => {
    return (
        <TnwAccordion
            heading="Accordion Test 1"
            content="This is the content of the first accordion item."
            expand={props.expand}
        />
    )
}

export default Accordion;