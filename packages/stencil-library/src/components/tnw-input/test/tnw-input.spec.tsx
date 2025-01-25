import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwInput } from '../tnw-input';

describe('tnw-input', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwInput,
        `<tnw-input label="Default Input" type="text" placeholder="Enter text" input-id="input-test"></tnw-input>`
      );
      expect(host).toMatchSnapshot();
    });

    it('renders the input with required label, and type attributes', async () => {
      const host = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" placeholder="Enter text"></tnw-input>`
      ) as HTMLTnwInputElement;

      const input = queryElement(host, 'input');
      const label = queryElement(host, 'tnw-label');
      expect(input.getAttribute('type')).toBe('text');
      expect(label).not.toBeNull();
    });

    it('applies default classes for the input', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Default Input" type="text" placeholder="Enter text"></tnw-input>`,
        'input'
      );
      expect(input).toHaveClass('tnw-input--outlined');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders the input with a placeholder', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" placeholder="Enter text"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('placeholder')).toBe('Enter text');
    });

    it('renders the input with a value', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" placeholder="Enter text" value="Initial Value"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('value')).toBe('Initial Value');
    });

    it('applies a custom appearance and appearance color classed', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" placeholder="Enter text" appearance="underlined" appearance-color="primary"></tnw-input>`,
        'input'
      );
      expect(input).toHaveClasses([
        'tnw-input--underlined',
        'tnw-input--underlined-primary',
      ]);
    });

    it('renders as required when isRequired is true', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Required Input" type="text" placeholder="Enter text" is-required></tnw-input>`,
        'input'
      );
      expect(input.hasAttribute('required')).toBe(true);
    });

    it('renders with max and min length attributes', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" placeholder="Enter text" maxlength="10" minlength="5"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('maxlength')).toBe('10');
      expect(input.getAttribute('minlength')).toBe('5');
    });

    it('renders a custom border-radius class', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Rounded Input" type="text" placeholder="Enter text" border-radius="md"></tnw-input>`,
        'input'
      );
      expect(input).toHaveClass('rounded-md');
    });

    it('applies the name attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Named Input" type="text" placeholder="Enter text" name="inputName"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('name')).toBe('inputName');
    });

    it('applies a pattern attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Patterned Input" type="text" placeholder="Enter text" pattern="[A-Za-z]+"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('pattern')).toBe('[A-Za-z]+');
    });

    it('applies the size attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Size Input" type="text" placeholder="Enter text" size="sm"></tnw-input>`,
        'input'
      );
      expect(input).toHaveClass('tnw-input--sm');
    });

    it('applies the autocomplete attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Autocomplete Input" type="text" placeholder="Enter text" auto-complete="on"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('autocomplete')).toBe('on');
    });

    it('applies the name attribute when provided', async () => {
      const input = await createSpecPage(
        TnwInput,
        `<tnw-input label="Named Input" type="text" placeholder="Enter text" name="inputName"></tnw-input>`,
        'input'
      );
      expect(input.getAttribute('name')).toBe('inputName');
    });

    it('renders a visually hidden label when isLabelSrOnly is true', async () => {
      const label = await createSpecPage(
        TnwInput,
        `<tnw-input label="Hidden Label" placeholder="Enter text" type="text" is-label-sr-only></tnw-input>`,
        'tnw-label'
      );
      expect(label.getAttribute('class')).toContain('sr-only');
    });

    describe('Input Behavior', () => {
      it('disables the input when disabled is true', async () => {
        const input = await createSpecPage(
          TnwInput,
          `<tnw-input label="Disabled Input" placeholder="Enter text" type="text" disabled></tnw-input>`,
          'input'
        );
        expect(input.hasAttribute('disabled')).toBe(true);
      });
    });

    describe('Input ID Behavior', () => {
      it('should set the input ID if input-id is provided', async () => {
        const input = await createSpecPage(
          TnwInput,
          `<tnw-input label="Test Input" placeholder="Enter text" type="text" input-id="test-input"></tnw-input>`,
          'input'
        );

        // Verify that the input element has the correct ID
        expect(input.id).toBe('test-input');
      });

      it('should generate a unique input ID if input-id is not provided', async () => {
        const input = await createSpecPage(
          TnwInput,
          `<tnw-input label="Generated ID Test" placeholder="Enter text" type="text"></tnw-input>`,
          'input'
        );

        const generatedId = input.id;

        // Verify that a generated ID exists and follows a pattern
        expect(generatedId).toMatch(/^tnw-input-[a-zA-Z0-9]+$/);
        expect(generatedId).not.toBe('');
      });
    });
  });

  describe('Alert and Help Text', () => {
    it('renders an alert message when alert is provided', async () => {
      const alert = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" placeholder="Enter text" value="<script>alert('Error occurred')</script>"></tnw-input>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).not.toBeNull();
      expect(alert.getAttribute('appearance')).toBe('danger');
    });

    it('renders help text when helpText is provided', async () => {
      const helpText = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" placeholder="Enter text" help-text="Additional Information"></tnw-input>`,
        'tnw-alert'
      );
      expect(helpText).not.toBeNull();
      expect(helpText.getAttribute('message')).toBe('Additional Information');
    });

    it('sets alertMessage and alertType when validation fails due to pattern mismatch', async () => {
      const alert = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" pattern="[A-Za-z]+" placeholder="Enter text" value="123"></tnw-input>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).toBe('Input does not match the required pattern.');
      expect(alert.getAttribute('appearance')).toBe('danger');
    });

    it('sets alertMessage and alertType when input value exceeds maxlength', async () => {
      const alert = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" maxlength="10" placeholder="Enter text" value="This is a very long value exceeding the maxlength"></tnw-input>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).toBe('Input is too long. Maximum length is "10" characters.');
      expect(alert.getAttribute('appearance')).toBe('danger');
    });

    it('sets alertMessage and alertType when input value is below minlength', async () => {
      const alert = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" minlength="5" placeholder="Enter text" value="abc"></tnw-input>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).toBe('Input is too short. Minimum length is "5" characters.');
      expect(alert.getAttribute('appearance')).toBe('danger');
    });

    it('does not display an alert when alertMessage and alertType are not triggered', async () => {
      const alert = await createSpecPage(
        TnwInput,
        `<tnw-input label="Test Input" type="text" pattern="[A-Za-z]+" placeholder="Enter text" value="ValidValue"></tnw-input>`,
        'tnw-alert'
      );
      expect(alert).toBeNull();
    });
  });

  describe('Custom Events Behavior', () => {
    it('emits inputChanged when the input value changes', async () => {
      const page = await newSpecPage({
        components: [TnwInput],
        html: `<tnw-input label="Test Input" placeholder="Enter text" type="text"></tnw-input>`,
      });

      const inputElement = page.root.shadowRoot.querySelector('input');
      const spy = jest.fn();
      page.root.addEventListener('inputChanged', spy);

      // Simulate an input change
      inputElement.value = 'New Value';
      inputElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'New Value' }));
    });

    it('emits validationFailed when input does not match the pattern', async () => {
      const page = await newSpecPage({
        components: [TnwInput],
        html: `<tnw-input 
                  label="Pattern Test" 
                  type="text" 
                  pattern="[A-Za-z]+" 
                  placeholder="Enter text"
                  input-id="test-input"
                ></tnw-input>`,
      });

      const inputElement = page.root.shadowRoot.querySelector('input');
      const spy = jest.fn();
      page.root.addEventListener('validationFailed', spy);

      // Simulate an invalid input change
      inputElement.value = '123';
      inputElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            inputId: 'test-input',
            error: 'Input does not match the required pattern.',
          }),
        })
      );
    });

    it('does not emit validationFailed when input matches the pattern', async () => {
      const page = await newSpecPage({
        components: [TnwInput],
        html: `<tnw-input 
                  label="Pattern Test" 
                  type="text" 
                  placeholder="Enter text"
                  pattern="[A-Za-z]+" 
                ></tnw-input>`,
      });

      const inputElement = page.root.shadowRoot.querySelector('input');
      const spy = jest.fn();
      page.root.addEventListener('validationFailed', spy);

      // Simulate a valid input change
      inputElement.value = 'ValidValue';
      inputElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('Events Behavior', () => {
    it('onChange => should sanitize value if sanitizeInput is true and emit inputChanged event', async () => {
      const page = await newSpecPage({
        components: [TnwInput],
        html: `<tnw-input 
                  label="Sanitize Test" 
                  placeholder="Enter text"
                  type="text" 
                  sanitize-input>
              </tnw-input>`,
      });

      const inputElement = page.root.shadowRoot.querySelector('input');

      const spy = jest.fn();

      page.root.addEventListener('inputChanged', spy);

      // Simulate an input change with unsanitized value
      inputElement.value = `<script>alert('test')</script>`;
      inputElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the sanitized value and event emission
      expect(inputElement.value).toBe('alerttest');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'alerttest' }));
    });


    it('onChange => should not sanitize value if sanitizeInput is false and emit inputChanged event', async () => {
      const page = await newSpecPage({
        components: [TnwInput],
        html: `<tnw-input 
                  label="No Sanitize Test" 
                  placeholder="Enter text"
                  type="text">
              </tnw-input>`,
      });

      const inputElement = page.root.shadowRoot.querySelector('input');
      const spy = jest.fn();
      page.root.addEventListener('inputChanged', spy);

      // Simulate an input change with unsanitized value
      inputElement.value = `<script>alert('test')</script>`;
      inputElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the unsanitized value and event emission
      expect(inputElement.value).toBe(`<script>alert('test')</script>`);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: `<script>alert('test')</script>` }));
    });

    it('onInput => should only display alerts if needed', async () => {
      const page = await newSpecPage({
        components: [TnwInput],
        html: `<tnw-input 
                  label="Pattern Test" 
                  type="text" 
                  placeholder="Enter text"
                  pattern="^[A-Za-z]+$">
              </tnw-input>`,
      });

      const inputElement = page.root.shadowRoot.querySelector('input');

      // Simulate valid input
      inputElement.value = 'ValidValue';
      inputElement.dispatchEvent(new Event('input'));

      await page.waitForChanges();

      // Verify no alert is displayed for valid input
      let alertElement = page.root.shadowRoot.querySelector('tnw-alert');
      expect(alertElement).toBeNull();

      // Simulate invalid input
      inputElement.value = '123';
      inputElement.dispatchEvent(new Event('input'));

      await page.waitForChanges();

      // Verify alert is displayed for invalid input
      alertElement = page.root.shadowRoot.querySelector('tnw-alert');
      expect(alertElement).not.toBeNull();
      expect(alertElement.getAttribute('message')).toBe('Input does not match the required pattern.');
    });
  });

  describe('Label and Accessibility', () => {
    it('renders a label associated with the input', async () => {
      const label = await createSpecPage(
        TnwInput,
        `<tnw-input label="Accessible Input" placeholder="Enter text" input-id="test-input" type="text"></tnw-input>`,
        'tnw-label'
      ) as HTMLTnwLabelElement;
      expect(label).not.toBeNull();
      expect(label.getAttribute('htmlfor')).toBe('test-input');
    });

    it('renders a visually hidden label when isLabelSrOnly is true', async () => {
      const label = await createSpecPage(
        TnwInput,
        `<tnw-input label="Hidden Label" type="text" placeholder="Enter text" is-label-sr-only></tnw-input>`,
        'tnw-label'
      );
      expect(label.getAttribute('is-sr-only')).not.toBeUndefined();
      expect(label.getAttribute('is-sr-only')).not.toBe('false');
    });
  });

  describe('Error Handling and Validation', () => {
    it('throws an error when label is missing', async () => {
      await checkSpecPageError(
        TnwInput,
        `<tnw-input type="text"></tnw-input>`,
        'Required prop "label" is missing'
      );
    });

    it('throws an error for invalid type value', async () => {
      await checkSpecPageError(
        TnwInput,
        `<tnw-input label="Invalid Type" type="invalidType"></tnw-input>`,
        'Invalid prop value for "type"'
      );
    });
  });

  describe('Security Tests', () => {
    describe('SQL Injection Validation Tests', () => {
      it('sanitize input initialized value', async () => {
        const page = await newSpecPage({
          components: [TnwInput],
          html: `<tnw-input 
                label="Number Input" 
                type="text" 
                placeholder="Enter a number"
                sanitize-input
                value="<script>test</script>"
              >
              </tnw-input>`,
        });

        const host = page.root as HTMLTnwInputElement;
        const inputElement = host.shadowRoot.querySelector('input') as HTMLInputElement;
        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;

        expect(alertElement).toBeNull();
        expect(inputElement.value).toBe('test');
      });

      it('sanitize input value on change event', async () => {
        const page = await newSpecPage({
          components: [TnwInput],
          html: `<tnw-input 
                label="Number Input" 
                type="text" 
                placeholder="Enter a number"
                sanitize-input
              >
              </tnw-input>`,
        });

        const host = page.root as HTMLTnwInputElement;

        await page.waitForChanges();

        const inputElement = host.shadowRoot.querySelector('input') as HTMLInputElement;

        await page.waitForChanges();
        inputElement.value = '<script>test</script>';
        await page.waitForChanges();
        inputElement.dispatchEvent(new CustomEvent('change', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;
        expect(alertElement).toBeNull();

        expect(inputElement.value).toBe('test');
      });

      it('displays an alert message for invalid input on input event', async () => {
        const page = await newSpecPage({
          components: [TnwInput],
          html: `<tnw-input 
                label="Number Input" 
                type="text" 
                placeholder="Enter a number"
              >
              </tnw-input>`,
        });

        const host = page.root as HTMLTnwInputElement;

        await page.waitForChanges();

        const inputElement = host.shadowRoot.querySelector('input') as HTMLInputElement;

        await page.waitForChanges();
        inputElement.value = '<script>test</script>';
        await page.waitForChanges();
        inputElement.dispatchEvent(new CustomEvent('input', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;
        expect(alertElement).not.toBeNull();

        const alertMessage = alertElement?.getAttribute('message');
        expect(alertMessage).toContain('Invalid SQL patterns detected.');
      });

      it('does not display an alert for valid input', async () => {
        const page = await newSpecPage({
          components: [TnwInput],
          html: `<tnw-input 
                label="Number Input" 
                type="text" 
                placeholder="Enter a number">
              </tnw-input>`,
        });

        const host = page.root as HTMLTnwInputElement;

        await page.waitForChanges();

        const inputElement = host.shadowRoot.querySelector('input') as HTMLInputElement;

        inputElement.value = '12345';
        inputElement.dispatchEvent(new CustomEvent('change', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;

        expect(alertElement).toBeNull();
      });
    });

    describe('Pattern Validation Tests', () => {
      it('displays an alert message for input not matching the pattern', async () => {
        const page = await newSpecPage({
          components: [TnwInput],
          html: `<tnw-input 
                  label="Pattern Test Input" 
                  type="text" 
                  placeholder="Enter a number" 
                  pattern="^[0-9]+$"
                >
                </tnw-input>`,
        });

        const host = page.root as HTMLTnwInputElement;

        await page.waitForChanges();

        const inputElement = host.shadowRoot.querySelector('input') as HTMLInputElement;

        inputElement.value = 'abc';
        inputElement.dispatchEvent(new CustomEvent('change', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;

        expect(alertElement).not.toBeNull();
        expect(alertElement?.getAttribute('message')).toBe('Input does not match the required pattern.');
      });

      it('does not display an alert for input matching the pattern', async () => {
        const page = await newSpecPage({
          components: [TnwInput],
          html: `<tnw-input 
                  label="Pattern Test Input" 
                  type="text" 
                  placeholder="Enter a number" 
                  pattern="^[0-9]+$"
                >
                </tnw-input>`,
        });

        const host = page.root as HTMLTnwInputElement;

        await page.waitForChanges();

        const inputElement = host.shadowRoot.querySelector('input') as HTMLInputElement;

        inputElement.value = '12345';
        inputElement.dispatchEvent(new CustomEvent('change', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;

        expect(alertElement).toBeNull();
      });
    });
  });
});