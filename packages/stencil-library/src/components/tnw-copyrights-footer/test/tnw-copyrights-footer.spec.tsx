import { todo } from 'node:test';
import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwCopyrightsFooter } from '../tnw-copyrights-footer';

describe('tnw-copyrights-footer', () => {

    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const host = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer></tnw-copyrights-footer>`
            );
            expect(host).toMatchSnapshot();
        });

        it('renders with container class', async () => {
            const footer = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer></tnw-copyrights-footer>`,
                'footer'
            );
            expect(footer).toHaveClass('container');
        });

        it('uses default values for optional props when not provided', async () => {
            const host = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer></tnw-copyrights-footer>`
            );
            expect(host).toHaveClasses([
                'tnw-copyrights-footer',
                'bg-auto',
                'tnw-copyrights-footer--borderTop',
            ]);
        });

        it('renders with current year as startYear when useCurrentYearAsStartYear is true', async () => {
            const currentYear = new Date().getFullYear();
            const content = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer use-current-year-as-start-year="true"></tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content.getAttribute('text')).toContain(String(currentYear));
        });

        it('renders with current year as endYear when useCurrentYearAsEndYear is true', async () => {
            const currentYear = new Date().getFullYear();
            const content = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer use-current-year-as-end-year="true"></tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content.getAttribute('text')).toContain(String(currentYear));
        });
    });

    describe('Custom Prop Behavior', () => {
        it('renders with custom background and border-top colors', async () => {
            const host = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer background-color="primary" border-top-color="secondary"></tnw-copyrights-footer>`
            );
            expect(host).toHaveClasses([
                'bg-primary',
                'tnw-copyrights-footer--borderTop',
            ]);
        });

        it('renders custom organization name and text', async () => {
            const content = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer organization-name="My Company" pre-text="©" post-text="All rights reserved"></tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content.getAttribute('text')).toContain('© My Company All rights reserved');
        });

        it('renders years range correctly when startYear and endYear are provided', async () => {
            const content = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer start-year="2000" end-year="2024"></tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content.getAttribute('text')).toContain('2000 - 2024');
        });

        it('centers content when centerContent is true', async () => {
            const content = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer center-content="true" pre-text="text"></tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content.getAttribute('alignment')).toBe('center');
        });

        it('omits container class when disableInternalContainer is true', async () => {
            const footer = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer disable-internal-container="true"></tnw-copyrights-footer>`,
                'footer'
            );
            expect(footer).not.toHaveClass('container');
        });

        it('renders only startYear when endYear is missing', async () => {
            const content = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer start-year="2020"></tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content.getAttribute('text')).toContain('2020');
        });
    });

    describe('Slot Behavior', () => {
        it('renders slot content when copyrights props are not provided', async () => {
            const slot = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer>
                    <div slot="copyrights">Custom Slot Content</div>
                </tnw-copyrights-footer>`,
                'div[slot="copyrights"]',
                false
            );
            expect(slot.textContent).toBe('Custom Slot Content');
        });

        it('does not render default content when enableSlot is true', async () => {
            const content = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer enable-slot="true">
                    <div>Custom Slot Content</div>
                </tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content).toBeNull();
        });

        it('renders custom links via slots when useCustomLinks is true', async () => {
            const host = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer use-custom-links="true" links-length="2">
                    <span slot="link-1">Link 1</span>
                    <span slot="link-2">Link 2</span>
                </tnw-copyrights-footer>`
            ) as HTMLTnwCopyrightsFooterElement;
            const slots = host.shadowRoot.querySelectorAll('slot[name^="link-"]');
            const links = host.querySelectorAll('span[slot^="link-"]');
            expect(slots.length).toBe(2);
            expect(links.length).toBe(2);
        });

    });

    describe('Error Handling and Edge Cases', () => {
        it('throws an error when an invalid background color is provided', async () => {
            await checkSpecPageError(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer background-color="invalidColor"></tnw-copyrights-footer>`,
                'Invalid prop value for "backgroundColor"'
            );
        });

        it('throws an error when an invalid borderTopColor is provided', async () => {
            await checkSpecPageError(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer border-top-color="invalidColor"></tnw-copyrights-footer>`,
                'Invalid prop value for "borderTopColor"'
            );
        });

        it('throws an error when invalid years are provided', async () => {
            await checkSpecPageError(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer start-year="2024" end-year="2000"></tnw-copyrights-footer>`,
                'Invalid year range: startYear cannot be greater than endYear'
            );
        });

        it('logs an error when linksData is invalid JSON', async () => {
            await checkSpecPageError(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer links-data="invalidJson"></tnw-copyrights-footer>`,
                'Error parsing links data'
            );
        });
    });
});