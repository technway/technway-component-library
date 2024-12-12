import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwSelect } from '../tnw-select';

describe('tnw-select', () => {
    // Mock data for different test cases
    const simpleData = JSON.stringify([
        { "label": "Option 1", "value": "option1" },
        { "label": "Option 2", "value": "option2" }
    ]);

    const emptyData = JSON.stringify([]); // Test case for empty options

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const el = await createSpecPage(TnwSelect, `<tnw-select options-data='${emptyData}'></tnw-select>`);
            expect(el).toMatchSnapshot();
        });

        it('renders options parsed from optionsData', async () => {
            const el = await createSpecPage(TnwSelect, `<tnw-select options-data='${simpleData}'></tnw-select>`);
            const options = el.shadowRoot?.querySelectorAll('[data-select-option]');
            expect(options?.length).toBe(2);
            expect(options[0]?.textContent).toBe('Option 1');
        });

        it('renders the correct label when no option is selected', async () => {
            const el = await createSpecPage(TnwSelect, `<tnw-select options-data='${emptyData}' label="Select Option"></tnw-select>`, '[data-select-toggler]');
            expect(el?.textContent).toContain('Select Option');
        });

        it('renders default option when provided', async () => {
            const el = await createSpecPage(TnwSelect, `<tnw-select options-data='${simpleData}' default-option="option2"></tnw-select>`, '[data-select-toggler]');
            expect(el?.textContent).toContain('option2');
        });
    });

    describe('Custom Prop Behavior', () => {
        it('applies correct border-radius class when borderRadius prop is set', async () => {
            const el = await createSpecPage(TnwSelect, `<tnw-select options-data='${emptyData}' border-radius="lg"></tnw-select>`);
            const toggler = el.shadowRoot?.querySelector('[data-select-toggler]');
            const select = el.shadowRoot?.querySelector('[data-select]');
            expect(toggler).toHaveClass('rounded-lg');
            expect(select).toHaveClass('rounded-lg');
        });

        // it('updates selectedOption when an option is clicked', async () => {
        //     const el = await createSpecPage(TnwSelect, `<tnw-select options-data='${simpleData}'></tnw-select>`);
        //     const option = el.shadowRoot?.querySelectorAll('[data-select-option]')[1];
        //     option?.dispatchEvent(new Event('click'));

        //     const button = el.shadowRoot?.querySelector('button');
        //     expect(button?.textContent?.trim()).toBe('Option 2');
        // });

        // it('emits `optionSelected` event when an option is selected', async () => {
        //     const el = await createSpecPage(TnwSelect, `<tnw-select options-data='${simpleData}'></tnw-select>`);
        //     const option = el.shadowRoot?.querySelectorAll('[data-select-option]')[0];

        //     const eventSpy = jest.spyOn(el.instance, 'optionSelected');
        //     option?.dispatchEvent(new Event('click'));
        //     expect(eventSpy).toHaveBeenCalledWith('option1');
        // });
    });

    describe('Error Handling and Edge Cases', () => {
        it('throws an error when options data is not provided', async () => {
            await checkSpecPageError(TnwSelect, `<tnw-select></tnw-select>`, 'Required prop "optionsData"');
        });

        // it('throws an error when no value is provided for options', async () => {
        //     const invalidOptionsData = JSON.stringify([{ "label": "Option 1" }]);
        //     await checkSpecPageError(TnwSelect, `<tnw-select options-data='${invalidOptionsData}'></tnw-select>`, 'Each option must have a "value" property');
        // });
    });
});
