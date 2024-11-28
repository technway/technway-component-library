import { createSpecPage } from '../../../utils/testing-utils';
import { TnwAccordionGroup } from '../tnw-accordion-group';

describe('TnwAccordionGroup', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const el = await createSpecPage(
                TnwAccordionGroup,
                `<tnw-accordion-group></tnw-accordion-group>`
            );
            expect(el).toMatchSnapshot();
        });
    });
});