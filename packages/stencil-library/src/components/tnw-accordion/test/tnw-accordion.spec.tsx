import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwAccordion } from '../tnw-accordion';

describe('tnw-accordion', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const el = await createSpecPage(
                TnwAccordion,
                `<tnw-accordion heading="Accordion Title" content="Accordion Content" accordion-id="accordion-1"></tnw-accordion>`,
                '',
                true
            );
            expect(el).toMatchSnapshot();
        });
    });

    describe('Custom Prop Behavior', () => {
        it('applies correct `variant` class when variant prop is set to `primary`', async () => {
            const el = await createSpecPage(
                TnwAccordion,
                `<tnw-accordion variant="primary"></tnw-accordion>`,
                '',
                true
            );
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

        it('renders custom heading slot when provided', async () => {
            const el = await createSpecPage(
                TnwAccordion,
                `
                    <tnw-accordion>
                        <div slot="heading">Custom Heading</div>
                    </tnw-accordion>
                `
            );
            const slot = el.shadowRoot?.querySelector('slot[name="heading"]');
            expect(slot).toBeTruthy();
        });

        it('renders custom body slot when provided', async () => {
            const el = await createSpecPage(
                TnwAccordion,
                `
                    <tnw-accordion>
                        <div slot="body">Custom Body</div>
                    </tnw-accordion>
                `
            );
            const slot = el.shadowRoot?.querySelector('slot[name="body"]');
            expect(slot).toBeTruthy();
        });

        it('renders custom expand icon slot when `enableCustomExpandIcon` is true', async () => {
            const el = await createSpecPage(
                TnwAccordion,
                `
                    <tnw-accordion enable-custom-expand-icon="true">
                        <div slot="expand-icon">Custom Icon</div>
                    </tnw-accordion>
                `
            );
            const slot = el.shadowRoot?.querySelector('slot[name="expand-icon"]');
            expect(slot).toBeTruthy();
        });
    });

    // describe('Behavior and Interactions', () => {
    //     it('emits accordionToggled event when toggled', async () => {
    //         const page = await newSpecPage({
    //             components: [TnwAccordion],
    //             html: `<tnw-accordion accordion-id="accordion-1"></tnw-accordion>`,
    //         });

    //         const accordion = page.rootInstance;
    //         const button = page.root.shadowRoot.querySelector('tnw-button');
    //         const spyEvent = jest.fn();

    //         accordion.accordionToggled = { emit: spyEvent }; // Mock the event emitter

    //         button.click();
    //         await page.waitForChanges();

    //         expect(spyEvent).toHaveBeenCalledWith({ id: 'accordion-1', expanded: true });
    //     });

    //     it('toggles accordion on Enter key press', async () => {
    //         const page = await newSpecPage({
    //             components: [TnwAccordion],
    //             html: `<tnw-accordion accordion-id="accordion-1"></tnw-accordion>`,
    //         });

    //         const button = page.root.shadowRoot.querySelector('tnw-button');
    //         const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });

    //         button.dispatchEvent(event);
    //         await page.waitForChanges();

    //         expect(button.getAttribute('aria-expanded')).toBe('true');
    //     });

    //     it('toggles accordion on Space key press', async () => {
    //         const page = await newSpecPage({
    //             components: [TnwAccordion],
    //             html: `<tnw-accordion accordion-id="accordion-1"></tnw-accordion>`,
    //         });

    //         const button = page.root.shadowRoot.querySelector('tnw-button');
    //         const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true });

    //         button.dispatchEvent(event);
    //         await page.waitForChanges();

    //         expect(button.getAttribute('aria-expanded')).toBe('true');
    //     });
    // });

    describe('Error Handling and Edge Cases', () => {
        it('throws an error when an invalid `variant` prop is provided', async () => {
            await checkSpecPageError(
                TnwAccordion,
                `<tnw-accordion variant="invalid"></tnw-accordion>`,
                'Invalid prop value for "variant"'
            );
        });

        it('throws an error when an invalid `appearance` prop is provided', async () => {
            await checkSpecPageError(
                TnwAccordion,
                `<tnw-accordion appearance="invalid"></tnw-accordion>`,
                'Invalid prop value for "appearance"'
            );
        });

        it('applies default props when optional props are not provided', async () => {
            const el = (await createSpecPage(
                TnwAccordion,
                `<tnw-accordion></tnw-accordion>`,
            )) as HTMLTnwAccordionElement;

            expect(el.expand).toBe(false);
            expect(el.appearance).toBe('outlined');
            expect(el.variant).toBe('auto');
            expect(el.borderRadius).toBe('default');
        });
    });
});

