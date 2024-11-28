import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwAccordion } from '../tnw-accordion';

describe('tnw-accordion', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const el = await createSpecPage(TnwAccordion, `<tnw-accordion the-title="Accordion Title" content="Accordion Content" accordion-id="accordion-1"></tnw-accordion>`, '', true);
            expect(el).toMatchSnapshot();
        });
    });

    describe('Custom Prop Behavior', () => {
        it('applies correct `variant` class when variant prop is set to `primary`', async () => {
            const el = await createSpecPage(TnwAccordion, `<tnw-accordion variant="primary"></tnw-accordion>`, '', true);
            expect(el).toHaveClass('tnw-accordion--outlined-primary');
        });

        it('applies correct `appearance` class when appearance prop is set to `solid`', async () => {
            const el = await createSpecPage(TnwAccordion, `<tnw-accordion appearance="solid"></tnw-accordion>`);
            expect(el).toHaveClass('tnw-accordion--solid-auto');
        });

        it('applies correct `borderRadius` class when borderRadius prop is set', async () => {
            const el = await createSpecPage(TnwAccordion, `<tnw-accordion border-radius="lg"></tnw-accordion>`);
            expect(el).toHaveClass('rounded-lg');
        });

        it('disables the expand icon rotation when `disableExpandIconRotate` is true', async () => {
            const el = await createSpecPage(TnwAccordion, `<tnw-accordion disable-expand-icon-rotate="true"></tnw-accordion>`);
            const icon = el.shadowRoot?.querySelector('.tnw-accordion__expand-icon--rotated');
            expect(icon).toBeNull();
        });
    });

    describe('Error Handling and Edge Cases', () => {
        it('throws an error when an invalid `variant` prop is provided', async () => {
            await checkError(TnwAccordion, `<tnw-accordion variant="invalid"></tnw-accordion>`, 'Invalid prop value for "variant"');
        });

        it('throws an error when an invalid `appearance` prop is provided', async () => {
            await checkError(TnwAccordion, `<tnw-accordion appearance="invalid"></tnw-accordion>`, 'Invalid prop value for "appearance"');
        });
    });
});
