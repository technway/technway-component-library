import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwSubscriptionForm } from '../tnw-subscription-form';

describe('tnw-subscription-form', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders with default props', async () => {
            const host = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form input-id="test-input"></tnw-subscription-form>`
            );
            expect(host).toMatchSnapshot();
        });

        it('uses default values when props are not provided', async () => {
            const page = await newSpecPage({
                components: [TnwSubscriptionForm],
                html: `<tnw-subscription-form></tnw-subscription-form>`,
            });

            const form = page.root.shadowRoot.querySelector('form');
            const input = page.root.shadowRoot.querySelector('tnw-input');
            const button = page.root.shadowRoot.querySelector('tnw-button');

            expect(input.getAttribute('placeholder')).toBe('Enter your email');
            expect(button.getAttribute('label')).toBe('Subscribe');
            expect(form.className).toContain('button-outside');
        });
    });

    describe('Custom Prop Behavior', () => {
        it('applies custom button label', async () => {
            const button = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form button-label="Sign Up"></tnw-subscription-form>`,
                'tnw-button'
            );
            expect(button.getAttribute('label')).toBe('Sign Up');
        });

        it('applies custom input placeholder', async () => {
            const input = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form input-placeholder="Your Email"></tnw-subscription-form>`,
                'tnw-input'
            );
            expect(input.getAttribute('placeholder')).toBe('Your Email');
        });

        it('applies custom border radius to both input and button', async () => {
            const form = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form border-radius="full"></tnw-subscription-form>`,
                'form'
            );
            const input = form.querySelector('tnw-input');
            const button = form.querySelector('tnw-button');

            expect(input.getAttribute('borderradius')).toBe('full');
            expect(button.getAttribute('borderradius')).toBe('full');
        });

        it('renders button-inside variant correctly', async () => {
            const form = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form variant="button-inside"></tnw-subscription-form>`,
                'form'
            );
            expect(form.className).toContain('button-inside');
        });

        it('applies custom theme color', async () => {
            const form = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form theme="secondary"></tnw-subscription-form>`,
                'form'
            );
            const button = form.querySelector('tnw-button');
            expect(button.getAttribute('appearancecolor')).toBe('secondary');
        });
    });

    describe('Form Attributes Behavior', () => {
        it('applies form action and method', async () => {
            const form = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form 
                    form-action="/subscribe" 
                    form-method="POST"
                    ></tnw-subscription-form
                >`,
                'form'
            );
            expect(form.getAttribute('action')).toBe('/subscribe');
            expect(form.getAttribute('method')).toBe('POST');
        });

        it('parses and applies custom form attributes', async () => {
            const form = await createSpecPage(
                TnwSubscriptionForm,
                `<tnw-subscription-form     
                    form-attributes="data-test=value; data-custom=test"
                ></tnw-subscription-form>`,
                'form'
            );
            expect(form.getAttribute('data-test')).toBe('value');
            expect(form.getAttribute('data-custom')).toBe('test');
        });
    });

    describe('Button Slot Behavior', () => {
        it('renders button slot when enableButtonSlot is true', async () => {
            const page = await newSpecPage({
                components: [TnwSubscriptionForm],
                html: `
                    <tnw-subscription-form enable-button-slot>
                        <button slot="button">Custom Button</button>
                    </tnw-subscription-form>
                `,
            });

            const slot = page.root.shadowRoot.querySelector('slot[name="button"]');
            expect(slot).not.toBeNull();
        });

        it('does not render button slot when enableButtonSlot is false', async () => {
            const page = await newSpecPage({
                components: [TnwSubscriptionForm],
                html: `<tnw-subscription-form></tnw-subscription-form>`,
            });

            const slot = page.root.shadowRoot.querySelector('slot[name="button"]');
            expect(slot).toBeNull();
        });
    });

    describe('Error Handling', () => {
        it('throws error for invalid variant value', async () => {
            await checkSpecPageError(
                TnwSubscriptionForm,
                `<tnw-subscription-form variant="invalid"></tnw-subscription-form>`,
                'Invalid prop value for "variant"'
            );
        });

        it('throws error for invalid theme value', async () => {
            await checkSpecPageError(
                TnwSubscriptionForm,
                `<tnw-subscription-form theme="invalid"></tnw-subscription-form>`,
                'Invalid prop value for "theme"'
            );
        });

        it('throws error for invalid border radius value', async () => {
            await checkSpecPageError(
                TnwSubscriptionForm,
                `<tnw-subscription-form border-radius="invalid"></tnw-subscription-form>`,
                'Invalid prop value for "borderRadius"'
            );
        });
    });
});
