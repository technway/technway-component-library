import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwInput } from '../tnw-input';

describe('tnw-input', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" input-id="username" type="text" placeholder="Enter username"></tnw-input>`);
      expect(el).toMatchSnapshot();
    });

    it('displays the correct label and connects it to the input via `htmlFor` attribute', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Email" input-id="email" type="email" placeholder="Enter email"></tnw-input>`, 'tnw-label');
      expect(el?.getAttribute('text')).toBe('Email');
      expect(el?.getAttribute('htmlFor')).toBe('email');
    });

    it('renders input with default type and placeholder', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Password" input-id="password" type="password" placeholder="Enter password"></tnw-input>`, 'input');
      expect(el?.getAttribute('type')).toBe('password');
      expect(el?.getAttribute('placeholder')).toBe('Enter password');
    });
  });
  describe('Custom Prop Behavior', () => {
    it('applies correct `variant` class when variant is set to `underlined`', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" variant="underlined" placeholder="Enter username"></tnw-input>`, 'input');
      expect(el).toHaveClass('tnw-input--underlined');
    });

    it('applies correct `borderRadius` class when borderRadius is set', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Search" type="search" input-id="search" border-radius="lg" placeholder="Search..."></tnw-input>`, 'input');
      expect(el).toHaveClass('rounded-lg');
    });

    it('renders the help text when `helpText` is provided', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" help-text="This is your username." placeholder="Enter username"></tnw-input>`, 'tnw-alert');
      expect(el?.getAttribute('message')).toBe('This is your username.');
    });

    it('renders the error alert when `alert` is provided and sets `aria-invalid` to true', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" is-invalid="true" alert="This field is required." placeholder="Enter username"></tnw-input>`);
      const alert = el.shadowRoot?.querySelector('tnw-alert');
      const input = el.shadowRoot?.querySelector('input');
      expect(alert?.getAttribute('message')).toBe('This field is required.');
      expect(input?.getAttribute('aria-invalid')).toBe('true');
    });

    it('disables the input when `disabled` is set to true', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" disabled="true" placeholder="Enter username"></tnw-input>`, 'input');
      expect(el?.getAttribute('disabled')).not.toBeNull();
    });

    it('applies correct `maxlength` attribute when set', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" maxlength="10" placeholder="Enter username"></tnw-input>`, 'input');
      expect(el?.getAttribute('maxlength')).toBe('10');
    });

    it('applies correct `minlength` attribute when set', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" minlength="5" placeholder="Enter username"></tnw-input>`, 'input');
      expect(el?.getAttribute('minlength')).toBe('5');
    });

    it('applies correct `pattern` attribute when set', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" pattern="[A-Za-z]{3,}" placeholder="Enter username"></tnw-input>`, 'input');
      expect(el?.getAttribute('pattern')).toBe('[A-Za-z]{3,}');
    });

    it('applies correct `autoComplete` attribute when set', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" auto-complete="on" placeholder="Enter username"></tnw-input>`, 'input');
      expect(el?.getAttribute('autocomplete')).toBe('on');
    });

    it('marks input as required when `isRequired` is set to true', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" type="text" input-id="username" is-required="true" placeholder="Enter username"></tnw-input>`, 'input');
      expect(el?.getAttribute('required')).not.toBeNull();
    });

    it('applies `sr-only` class when isLabelSrOnly prop is set', async () => {
      const el = await createSpecPage(TnwInput, `<tnw-input label="Username" input-id="username" type="text" placeholder="Enter username" is-label-sr-only="true"></tnw-input>`, 'tnw-label');
      expect(el).toHaveClass('sr-only');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the `label` prop is missing', async () => {
      await checkSpecPageError(TnwInput, `<tnw-input input-id="username" type="text" placeholder="Enter username"></tnw-input>`, 'Required prop "label"');
    });

    it('throws an error when the `inputId` prop is missing', async () => {
      await checkSpecPageError(TnwInput, `<tnw-input label="Username" type="text" placeholder="Enter username"></tnw-input>`, 'Required prop "inputId"');
    });

    it('throws an error when an invalid `variant` is provided', async () => {
      await checkSpecPageError(TnwInput, `<tnw-input label="Username" input-id="username" variant="invalid" placeholder="Enter username"></tnw-input>`, 'Invalid prop value for "variant"');
    });
  });
});
