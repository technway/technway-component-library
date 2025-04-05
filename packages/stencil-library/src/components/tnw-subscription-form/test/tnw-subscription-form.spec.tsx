import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwSubscriptionForm } from '../tnw-subscription-form';
import { GLOBAL_PREFIX } from '../../../utils/utils';

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
			const input = page.root.shadowRoot.querySelector('input');
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
				'input'
			);
			expect(input.getAttribute('placeholder')).toBe('Your Email');
		});

		it('applies custom border radius to input in button-outside variant', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form border-radius="full" variant="button-outside"></tnw-subscription-form>`,
			});

			const input = page.root.shadowRoot.querySelector('input');
			const button = page.root.shadowRoot.querySelector('tnw-button');

			expect(input.className).toContain('rounded-full');
			expect(button.getAttribute('borderRadius')).toBe('full');
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

	describe('Loading and Disabled States', () => {
		it('disables input and button when loading is true', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form loading></tnw-subscription-form>`,
			});

			const input = page.root.shadowRoot.querySelector('input');
			const button = page.root.shadowRoot.querySelector('tnw-button');

			expect(input.disabled).toBe(true);
			expect(button.getAttribute('disabled')).not.toBeNull();
		});

		it('disables input and button when disabled is true', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form disabled></tnw-subscription-form>`,
			});

			const input = page.root.shadowRoot.querySelector('input');
			const button = page.root.shadowRoot.querySelector('tnw-button');

			expect(input.disabled).toBe(true);
			expect(button.getAttribute('disabled')).not.toBeNull();
		});
	});

	describe('Custom Events Behavior', () => {
		it('emits tnwChangedOnChange when the input value changes onChange', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form></tnw-subscription-form>`,
			});

			const inputElement = page.root.shadowRoot.querySelector('input');
			expect(inputElement).not.toBeNull();

			const spy = jest.fn();
			page.root.addEventListener('tnwChangedOnChange', spy);

			// Simulate an input change with a valid email
			inputElement.value = 'test@example.com';
			inputElement.dispatchEvent(new Event('change'));

			await page.waitForChanges();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'test@example.com' }));
		});

		it('emits tnwChangedOnInput when typing in the input', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form></tnw-subscription-form>`,
			});

			const inputElement = page.root.shadowRoot.querySelector('input');
			expect(inputElement).not.toBeNull();

			const spy = jest.fn();
			page.root.addEventListener('tnwChangedOnInput', spy);

			inputElement.value = 'test@example.com';
			inputElement.dispatchEvent(new Event('input'));

			await page.waitForChanges();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'test@example.com' }));
		});

		it('emits tnwError when invalid email is entered', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form></tnw-subscription-form>`,
			});

			const inputElement = page.root.shadowRoot.querySelector('input');
			expect(inputElement).not.toBeNull();

			const spy = jest.fn();
			page.root.addEventListener('tnwError', spy);

			inputElement.value = 'invalid-email';
			inputElement.dispatchEvent(new Event('change'));

			await page.waitForChanges();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(expect.objectContaining({
				detail: { message: 'Please enter a valid email address' }
			}));
		});

		it('emits tnwFocused and tnwBlurred on input focus/blur', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form></tnw-subscription-form>`,
			});

			const inputElement = page.root.shadowRoot.querySelector('input');
			expect(inputElement).not.toBeNull();

			const focusSpy = jest.fn();
			const blurSpy = jest.fn();
			page.root.addEventListener('tnwFocused', focusSpy);
			page.root.addEventListener('tnwBlurred', blurSpy);

			inputElement.dispatchEvent(new Event('focus'));
			await page.waitForChanges();
			expect(focusSpy).toHaveBeenCalled();

			inputElement.dispatchEvent(new Event('blur'));
			await page.waitForChanges();
			expect(blurSpy).toHaveBeenCalled();
		});

		it('emits tnwSubscribe when form is submitted with valid email', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form></tnw-subscription-form>`,
			});

			const form = page.root.shadowRoot.querySelector('form');
			const inputElement = page.root.shadowRoot.querySelector('input');
			expect(form).not.toBeNull();
			expect(inputElement).not.toBeNull();

			const spy = jest.fn();
			page.root.addEventListener('tnwSubscribe', spy);

			inputElement.value = 'test@example.com';
			form.dispatchEvent(new Event('submit'));

			await page.waitForChanges();

			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(expect.objectContaining({
				detail: { email: 'test@example.com' }
			}));
		});

		it('clears input after successful submission when formAction is not provided', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form></tnw-subscription-form>`,
			});

			const form = page.root.shadowRoot.querySelector('form');
			const inputElement = page.root.shadowRoot.querySelector('input');
			expect(form).not.toBeNull();
			expect(inputElement).not.toBeNull();

			inputElement.value = 'test@example.com';
			form.dispatchEvent(new Event('submit'));

			await page.waitForChanges();

			expect(inputElement.value).toBe('');
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

	describe('Input Styling and Classes', () => {
		it('applies correct classes to input in button-outside variant', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form variant="button-outside"></tnw-subscription-form>`,
			});

			const input = page.root.shadowRoot.querySelector('input');
			expect(input.className).toContain(`${GLOBAL_PREFIX}-subscription-form__input`);
			expect(input.className).toContain('rounded-default');
		});

		it('applies disabled class to input when disabled', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form disabled></tnw-subscription-form>`,
			});

			const input = page.root.shadowRoot.querySelector('input');
			expect(input.className).toContain(`${GLOBAL_PREFIX}-subscription-form__input--disabled`);
		});
	});

	describe('Form Variant Styling', () => {
		it('applies correct classes for button-inside variant', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form variant="button-inside" theme="primary"></tnw-subscription-form>`,
			});

			const form = page.root.shadowRoot.querySelector('form');
			expect(form.className).toContain('button-inside');
			expect(form.className).toContain('primary');
		});

		it('applies correct classes for button-outside variant', async () => {
			const page = await newSpecPage({
				components: [TnwSubscriptionForm],
				html: `<tnw-subscription-form variant="button-outside" theme="secondary"></tnw-subscription-form>`,
			});

			const form = page.root.shadowRoot.querySelector('form');
			expect(form.className).toContain('button-outside');
			expect(form.className).not.toContain('secondary');
		});
	});
});
