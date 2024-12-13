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
            console.log('content', content.outerHTML);
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
            console.log('classes', host.outerHTML);
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
                `<tnw-copyrights-footer center-content="true"></tnw-copyrights-footer>`,
                'tnw-text'
            );
            expect(content.getAttribute('alignment')).toBe('center');
        });
    });

    describe('Slot Behavior', () => {
        it('renders slot content when enableSlot is true', async () => {
            const slot = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer enable-slot="true">
                    <div>Custom Slot Content</div>
                </tnw-copyrights-footer>`,
                'div',
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
    });

    describe('Accessibility Behavior', () => {
        it('renders with appropriate aria-label for accessibility', async () => {
            const footer = await createSpecPage(
                TnwCopyrightsFooter,
                `<tnw-copyrights-footer></tnw-copyrights-footer>`,
                'footer'
            );
            expect(footer.getAttribute('aria-label')).toBe('Copyright information');
        });
    });
});