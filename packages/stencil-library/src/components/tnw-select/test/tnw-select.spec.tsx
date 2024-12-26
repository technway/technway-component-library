import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, queryElement } from '../../../utils/testing-utils';
import { TnwSelect } from '../tnw-select';

describe('tnw-select', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const host = await createSpecPage(
                TnwSelect,
                `<tnw-select options-data='[{"label":"Option 1","value":"1"}]' accessibility-id="test-id"></tnw-select>`
            );
            expect(host).toMatchSnapshot();
        });

        it('applies default classes for size and border radius', async () => {
            const select = await createSpecPage(
                TnwSelect,
                `<tnw-select options-data='[{"label":"Option 1","value":"1"}]' accessibility-id="test-id"></tnw-select>`
            ) as HTMLTnwSelectElement;
            const list = queryElement(select, 'ul');
            const button = queryElement(select, 'button');
            expect(select).toHaveClasses(['tnw-select--md']);
            expect(button).toHaveClass('rounded-default');
            expect(list).toHaveClass('rounded-default');
        });

        it('uses default label when none provided', async () => {
            const select = await createSpecPage(
                TnwSelect,
                `<tnw-select options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`,
                '.tnw-select__button-label'
            );
            expect(select.textContent).toBe('Select an option');
        });
    });

    describe('Custom Prop Behavior', () => {
        it('renders with a custom label', async () => {
            const select = await createSpecPage(
                TnwSelect,
                `<tnw-select label="Custom Label" options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`,
                '.tnw-select__button-label'
            );
            expect(select.textContent).toBe('Custom Label');
        });

        it('renders with full width', async () => {
            const select = await createSpecPage(
                TnwSelect,
                `<tnw-select full-width options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`
            );
            expect(select).toHaveClass('tnw-select--full-width');
        });

        it('renders with different sizes', async () => {
            const sizes = ['sm', 'md', 'lg'];
            for (const size of sizes) {
                const select = await createSpecPage(
                    TnwSelect,
                    `<tnw-select size="${size}" options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`
                );
                expect(select).toHaveClass(`tnw-select--${size}`);
            }
        });

        it('renders with custom border radius', async () => {
            const radiusTypes = ['none', 'sm', 'md', 'lg', 'xl', 'full'];
            for (const radius of radiusTypes) {
                const select = await createSpecPage(
                    TnwSelect,
                    `<tnw-select border-radius="${radius}" options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`
                ) as HTMLTnwSelectElement;
                const button = queryElement(select, 'button');
                if (radius === 'none') {
                    expect(button).not.toHaveClass('rounded-none');
                } else {
                    expect(button).toHaveClass(`rounded-${radius}`);
                }
            }
        });
    });

    describe('Variant Rendering', () => {
        it('renders with icon name variant', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select variant="withIconName" options-data='[{"label":"Option 1","value":"1","iconName":"test-icon"}]'></tnw-select>`,
            });
            expect(page.root.shadowRoot.querySelector('tnw-icon[name="test-icon"]')).not.toBeNull();
        });

        it('renders with SVG icon variant', async () => {
            const icon = await createSpecPage(
                TnwSelect,
                `<tnw-select variant="withSvgIcon" options-data='[{"label":"Option 1","value":"1","svgIcon":"<svg></svg>"}]'></tnw-select>`,
                'li tnw-icon'
            ) as HTMLTnwIconElement;
            const svg = queryElement(icon, 'svg', false)
            expect(icon).not.toBeNull();
            expect(svg).not.toBeNull();
        });

        it('renders with image variant', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select variant="withImage" options-data='[{"label":"Option 1","value":"1","imageSource":"test.jpg"}]'></tnw-select>`,
            });
            expect(page.root.shadowRoot.querySelector('tnw-badge[variant="image"]')).not.toBeNull();
        });

        it('renders with status variant', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select variant="withStatus" options-data='[{"label":"Option 1","value":"1","status":"success"}]'></tnw-select>`,
            });
            expect(page.root.shadowRoot.querySelector('tnw-badge[variant="status"]')).not.toBeNull();
        });
    });

    describe('Keyboard Navigation', () => {
        it.todo('handles arrow key navigation focus movement');

        it('handles Enter key to select option and close dropdown', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`,
            });

            const component = page.rootInstance;
            
            // Open dropdown and set up initial state
            component.isOpen = true;
            await page.waitForChanges();

            // Mock the focused element query
            const mockElement = document.createElement('li');
            mockElement.dataset.value = '1';
            jest.spyOn(component.el.shadowRoot, 'querySelector').mockReturnValue(mockElement);

            // Simulate Enter key press
            component.handleOptionKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }));
            await page.waitForChanges();

            // Expect option to be selected and dropdown to close
            expect(component.selectedOption.value).toBe('1');
            expect(component.isOpen).toBe(false);
        });

        it('handles Escape key to close dropdown', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`,
            });

            const component = page.rootInstance;
            
            // Open dropdown first
            component.isOpen = true;
            await page.waitForChanges();

            // Simulate Escape key
            const event = new KeyboardEvent('keydown', { key: 'Escape' });
            component.handleOptionKeyDown(event);
            await page.waitForChanges();

            // Expect dropdown to close
            expect(component.isOpen).toBe(false);
        });
    });

    describe('Method and Event Behavior', () => {
        it('toggles dropdown state correctly', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`,
            });

            const component = page.rootInstance;
            await component.toggleDropdown();
            expect(component.isOpen).toBe(true);

            await component.toggleDropdown();
            expect(component.isOpen).toBe(false);
        });

        it('does not toggle dropdown when disabled', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select disabled options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`,
            });

            const component = page.rootInstance;
            await component.toggleDropdown();
            expect(component.isOpen).toBe(false);
        });

        it('closes dropdown when clicking outside', async () => {
            const page = await newSpecPage({
                components: [TnwSelect],
                html: `<tnw-select options-data='[{"label":"Option 1","value":"1"}]'></tnw-select>`,
            });

            const component = page.rootInstance;
            component.isOpen = true;

            document.dispatchEvent(new MouseEvent('click'));
            await page.waitForChanges();

            expect(component.isOpen).toBe(false);
        });
    });

    describe('Error Handling', () => {
        it('handles invalid JSON in optionsData', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            await createSpecPage(
                TnwSelect,
                `<tnw-select options-data='invalid-json'></tnw-select>`
            );

            expect(consoleSpy).toHaveBeenCalledWith(
                'Error parsing optionsData:',
                expect.any(Error)
            );

            consoleSpy.mockRestore();
        });

        it('handles empty optionsData', async () => {
            const select = await createSpecPage(
                TnwSelect,
                `<tnw-select options-data='[]'></tnw-select>`
            );
            expect(select.querySelectorAll('li[data-select-option]').length).toBe(0);
        });
    });
});
