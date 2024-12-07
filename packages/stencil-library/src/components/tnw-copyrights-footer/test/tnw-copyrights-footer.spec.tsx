import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwCopyrightsFooter } from '../tnw-copyrights-footer';

describe('tnw-copyrights-footer', () => {

    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const el = await createSpecPage(TnwCopyrightsFooter, `<tnw-copyrights-footer></tnw-copyrights-footer>`);
            expect(el).toMatchSnapshot();
        });
    });

    describe('Custom Prop Behavior', () => {
    //     it('renders the correct years range when `startYear` and `endYear` are provided', async () => {
    //         const el = await createSpecPage(TnwCopyrightsFooter, `
    //     <tnw-copyrights-footer start-year="2000" end-year="2024"></tnw-copyrights-footer>
    //   `);
    //         const content = el.shadowRoot?.querySelector('tnw-text');
    //         expect(content?.textContent).toContain("2000 - 2024");
    //     });

    //     it('renders the correct years range when `useCurrentYearAsStartYear` is true', async () => {
    //         const currentYear = new Date().getFullYear();
    //         const el = await createSpecPage(TnwCopyrightsFooter, `
    //     <tnw-copyrights-footer use-current-year-as-start-year="true" end-year="2024"></tnw-copyrights-footer>
    //   `);
    //         const content = el.shadowRoot?.querySelector('tnw-text');
    //         expect(content?.textContent).toContain(`${currentYear} - 2024`);
    //     });

        //     it('applies correct text color when `textColor` prop is set', async () => {
        //         const el = await createSpecPage(TnwCopyrightsFooter, `
        //     <tnw-copyrights-footer text-color="primary" organization-name="TestOrg"></tnw-copyrights-footer>
        //   `);
        //         const orgName = el.shadowRoot?.querySelector('tnw-text');
        //         expect(orgName).toHaveAttribute('color', 'primary');
        //     });

        //     it('applies correct `organizationNameColor` when it is set', async () => {
        //         const el = await createSpecPage(TnwCopyrightsFooter, `
        //     <tnw-copyrights-footer organization-name-color="secondary" organization-name="TestOrg"></tnw-copyrights-footer>
        //   `);
        //         const orgName = el.shadowRoot?.querySelector('tnw-text');
        //         expect(orgName).toHaveAttribute('color', 'secondary');
        //     });

    //     it('applies correct background and border-top color when `backgroundColor` and `borderTopColor` are set', async () => {
    //         const el = await createSpecPage(TnwCopyrightsFooter, `
    //     <tnw-copyrights-footer background-color="light" border-top-color="dark"></tnw-copyrights-footer>
    //   `);
    //         const host = el.shadowRoot?.host;
    //         expect(host).toHaveClass('bg-light');
    //         expect(host).toHaveClass('border-top-dark');
    //     });

    //     it('renders pre, post text, and organization name correctly', async () => {
    //         const el = await createSpecPage(TnwCopyrightsFooter, `
    //     <tnw-copyrights-footer pre-text="Before" organization-name="TestOrg" post-text="After"></tnw-copyrights-footer>
    //   `);
    //         const content = el.shadowRoot?.querySelector('.tnw-copyrights-footer__content');
    //         expect(content?.textContent).toContain('Before');
    //         expect(content?.textContent).toContain('TestOrg');
    //         expect(content?.textContent).toContain('After');
    //     });

        it('renders custom slot content when `enableSlot` is true', async () => {
            const el = await createSpecPage(TnwCopyrightsFooter, `
        <tnw-copyrights-footer enable-slot="true">
          <div slot="custom">Custom Content</div>
        </tnw-copyrights-footer>
      `);
            const slot = el.shadowRoot?.querySelector('slot');
            expect(slot).not.toBeNull();
        });
    });

    describe('Error Handling and Edge Cases', () => {
        it('handles `centerContent` prop correctly and centers the content', async () => {
            const el = await createSpecPage(TnwCopyrightsFooter, `
                <tnw-copyrights-footer center-content="true"></tnw-copyrights-footer>
            `);
            const host = el.shadowRoot?.host;
            expect(host).toHaveClass('tnw-copyrights-footer--center');
        });

        // it('throws an error when `startYear` is greater than `endYear`', async () => {
        //     await checkError(TnwCopyrightsFooter, `<tnw-copyrights-footer start-year="2025" end-year="2020"></tnw-copyrights-footer>`, 'Invalid start and end year range');
        // });

        it('throws an error when an invalid `textColor` is provided', async () => {
            await checkError(TnwCopyrightsFooter, `<tnw-copyrights-footer text-color="invalid"></tnw-copyrights-footer>`, 'Invalid prop value for "textColor"');
        });

        it('throws an error when an invalid `backgroundColor` is provided', async () => {
            await checkError(TnwCopyrightsFooter, `<tnw-copyrights-footer background-color="invalid"></tnw-copyrights-footer>`, 'Invalid prop value for "backgroundColor"');
        });
    });
});
