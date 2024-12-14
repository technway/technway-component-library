import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwInput } from '../tnw-input';

describe('tnw-input', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Default Input" type="text" placeholder="Enter text"></tnw-input>`
      );
      expect(host).toMatchSnapshot();
    });

    it('renders the input with required id, label, and type attributes', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Test Input" type="text" placeholder="Enter text"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('id')).toBe('test-input');
      expect(input.getAttribute('type')).toBe('text');
    });

    it('applies default classes for the input', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Default Input" type="text" placeholder="Enter text"></tnw-input>`,
        'input'
      );
      expect(input).toHaveClass('tnw-input--outlined');
    });
  });


  describe('Custom Prop Behavior', () => {
    it('renders the input with a placeholder', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Test Input" type="text" placeholder="Enter text"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('placeholder')).toBe('Enter text');
    });

    it('renders the input with a value', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Test Input" type="text" placeholder="Enter text" value="Initial Value"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('value')).toBe('Initial Value');
    });

    it('applies a custom variant class', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Test Input" type="text" placeholder="Enter text" variant="underlined"></tnw-input>`,
        'input'
      );
      expect(input).toHaveClass('tnw-input--underlined');
    });

    it('renders as required when isRequired is true', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Required Input" type="text" placeholder="Enter text" is-required></tnw-input>`,
        'input'
      );
      expect(input.hasAttribute('required')).toBe(true);
    });

    it('renders with max and min length attributes', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Test Input" type="text" placeholder="Enter text" maxlength="10" minlength="5"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('maxlength')).toBe('10');
      expect(input.getAttribute('minlength')).toBe('5');
    });

    it('renders a custom border-radius class', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Rounded Input" type="text" placeholder="Enter text" border-radius="md"></tnw-input>`,
        'input'
      );
      expect(input).toHaveClass('rounded-md');
    });

    it('applies the name attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Named Input" type="text" placeholder="Enter text" name="inputName"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('name')).toBe('inputName');
    });

    it('applies a pattern attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Patterned Input" type="text" placeholder="Enter text" pattern="[A-Za-z]+"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('pattern')).toBe('[A-Za-z]+');
    });

    it('applies the autocomplete attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Autocomplete Input" type="text" placeholder="Enter text" auto-complete="on"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('autocomplete')).toBe('on');
    });
  });

  describe('Alert and Help Text', () => {
    it('renders an alert message when alert is provided', async () => {
      const alert = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Test Input" type="text" placeholder="Enter text" alert="Error occurred" alert-type="danger"></tnw-input>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).toBe('Error occurred');
      expect(alert.getAttribute('variant')).toBe('danger');
    });

    it('renders help text when helpText is provided', async () => {
      const helpText = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Test Input" type="text" placeholder="Enter text" help-text="Additional Information"></tnw-input>`,
        'tnw-alert'
      );
      expect(helpText).not.toBeNull();
      expect(helpText.getAttribute('message')).toBe('Additional Information');
    });
  });

  describe('Input Behavior', () => {
    it('disables the input when disabled is true', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Disabled Input" placeholder="Enter text" type="text" disabled></tnw-input>`,
        'input'
      );
      expect(input.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Error Handling and Validation', () => {
    it('throws an error when inputId is missing', async () => {
      await checkSpecPageError(
        TnwInput,
        `<tnw-input label="Missing ID" type="text"></tnw-input>`,
        'Required prop "inputId" is missing'
      );
    });

    it('throws an error when label is missing', async () => {
      await checkSpecPageError(
        TnwInput,
        `<tnw-input input-id="test-input" type="text"></tnw-input>`,
        'Required prop "label" is missing'
      );
    });

    it('throws an error for invalid type value', async () => {
      await checkSpecPageError(
        TnwInput,
        `<tnw-input input-id="test-input" label="Invalid Type" type="invalidType"></tnw-input>`,
        'Invalid prop value for "type"'
      );
    });
  });

  describe('Label and Accessibility', () => {
    it('renders a label associated with the input', async () => {
      const label = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Accessible Input" placeholder="Enter text" type="text"></tnw-input>`,
        'tnw-label'
      ) as HTMLTnwLabelElement;
      expect(label).not.toBeNull();
      expect(label.getAttribute('htmlfor')).toBe('test-input');
    });

    it('renders a visually hidden label when isLabelSrOnly is true', async () => {
      const label = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Hidden Label" type="text" placeholder="Enter text" is-label-sr-only></tnw-input>`,
        'tnw-label'
      );
      expect(label.getAttribute('is-sr-only')).not.toBeUndefined();
      expect(label.getAttribute('is-sr-only')).not.toBe('false');
    });

    it('sets aria attributes when the input is required or has an alert', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input input-id="test-input" label="Accessible Input" type="text" is-required alert="Error Message" placeholder="Enter text" alert-type="danger"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('aria-required')).toBe('true');
      expect(input.getAttribute('aria-invalid')).toBe('true');
    });
  });
});