import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwTextarea } from '../tnw-textarea';

describe('tnw-textarea', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea textarea-id="test-textarea" label="Default Textarea" placeholder="Enter text"></tnw-textarea>`
      );
      expect(host).toMatchSnapshot();
    });

    it('renders the textarea with required label attributes', async () => {
      const host = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" placeholder="Enter text"></tnw-textarea>`,
      ) as HTMLTnwTextareaElement;
      const label = queryElement(host, 'tnw-label');
      expect(label.getAttribute('text')).toBe('Test Textarea');
    });

    it('applies default classes for the textarea', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Default textarea" placeholder="Enter text"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea).toHaveClass('tnw-textarea--outlined');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders the textarea with a placeholder', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" placeholder="Enter text"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea.getAttribute('placeholder')).toBe('Enter text');
    });

    it('renders the textarea with a value', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" placeholder="Enter text" value="Initial Value"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea.getAttribute('value')).toBe('Initial Value');
    });

    it('applies a custom variant class', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" placeholder="Enter text" variant="underlined"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea).toHaveClass('tnw-textarea--underlined');
    });

    it('renders as required when isRequired is true', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Required Textarea" placeholder="Enter text" is-required></tnw-textarea>`,
        'textarea'
      );
      expect(textarea.hasAttribute('required')).toBe(true);
    });

    it('renders with max and min length attributes', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" placeholder="Enter text" maxlength="10" minlength="5"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea.getAttribute('maxlength')).toBe('10');
      expect(textarea.getAttribute('minlength')).toBe('5');
    });

    it('renders a custom border-radius class', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Rounded Textarea" placeholder="Enter text" border-radius="md"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea).toHaveClass('rounded-md');
    });

    it('applies the name attribute when provided', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Named Textarea" placeholder="Enter text" name="textareaName"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea.getAttribute('name')).toBe('textareaName');
    });

    it('applies the autocomplete attribute when provided', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Autocomplete Textarea" placeholder="Enter text" auto-complete="on"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea.getAttribute('autocomplete')).toBe('on');
    });

    it('applies the name attribute when provided', async () => {
      const textarea = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Named Textarea" placeholder="Enter text" name="textareaName"></tnw-textarea>`,
        'textarea'
      );
      expect(textarea.getAttribute('name')).toBe('textareaName');
    });

    it('renders a visually hidden label when isLabelSrOnly is true', async () => {
      const label = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Hidden Label" placeholder="Enter text" is-label-sr-only></tnw-textarea>`,
        'tnw-label'
      );
      expect(label.getAttribute('class')).toContain('sr-only');
    });

    describe('Textarea Behavior', () => {
      it('disables the textarea when disabled is true', async () => {
        const textarea = await createSpecPage(
          TnwTextarea,
          `<tnw-textarea textarea-id="test-textarea" label="Disabled Textarea" placeholder="Enter text" disabled></tnw-textarea>`,
          'textarea'
        );
        expect(textarea.hasAttribute('disabled')).toBe(true);
      });
    });

    describe('Textarea ID Behavior', () => {
      it('should set the textarea ID if textarea-id is provided', async () => {
        const textarea = await createSpecPage(
          TnwTextarea,
          `<tnw-textarea label="Test Textarea" placeholder="Enter text" textarea-id="test-textarea"></tnw-textarea>`,
          'textarea'
        );

        // Verify that the textarea element has the correct ID
        expect(textarea.id).toBe('test-textarea');
      });

      it('should generate a unique textarea ID if textarea-id is not provided', async () => {
        const textarea = await createSpecPage(
          TnwTextarea,
          `<tnw-textarea label="Generated ID Test" placeholder="Enter text"></tnw-textarea>`,
          'textarea'
        );

        const generatedId = textarea.id;

        // Verify that a generated ID exists and follows a pattern
        expect(generatedId).toMatch(/^tnw-textarea-[a-zA-Z0-9]+$/);
        expect(generatedId).not.toBe('');
      });
    });
  });

  describe('Alert and Help Text', () => {
    it('renders an alert message when alert is provided', async () => {
      const alert = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea textarea-id="test-textarea" label="Test Textarea" placeholder="Enter text" value="<script>alert('Error occurred')</script>"></tnw-textarea>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).not.toBeNull();
      expect(alert.getAttribute('variant')).toBe('danger');
    });

    it('renders help text when helpText is provided', async () => {
      const helpText = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea textarea-id="test-textarea" label="Test Textarea" placeholder="Enter text" help-text="Additional Information"></tnw-textarea>`,
        'tnw-alert'
      );
      expect(helpText).not.toBeNull();
      expect(helpText.getAttribute('message')).toBe('Additional Information');
    });

    it('sets alertMessage and alertType when textarea value exceeds maxlength', async () => {
      const alert = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" maxlength="10" placeholder="Enter text" value="This is a very long value exceeding the maxlength"></tnw-textarea>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).toBe('Text is too long. Maximum length is "10" characters.');
      expect(alert.getAttribute('variant')).toBe('danger');
    });

    it('sets alertMessage and alertType when textarea value is below minlength', async () => {
      const alert = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" minlength="5" placeholder="Enter text" value="abc"></tnw-textarea>`,
        'tnw-alert'
      );
      expect(alert).not.toBeNull();
      expect(alert.getAttribute('message')).toBe('Text is too short. Minimum length is "5" characters.');
      expect(alert.getAttribute('variant')).toBe('danger');
    });

    it('does not display an alert when alertMessage and alertType are not triggered', async () => {
      const alert = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Test Textarea" placeholder="Enter text" value="ValidValue"></tnw-textarea>`,
        'tnw-alert'
      );
      expect(alert).toBeNull();
    });
  });

  describe('Custom Events Behavior', () => {
    it('emits textareaChanged when the textarea value changes', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                label="Test Textarea" 
                placeholder="Enter text"
                rows="3">
              </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');
      const spy = jest.fn();
      page.root.addEventListener('textareaChanged', spy);

      // Simulate a change event with new value
      textareaElement.value = 'New Value';
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the emitted event
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'New Value' }));
    });

    it('emits validationFailed when input does not meet minlength requirement', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                label="Test Textarea" 
                minlength="10" 
                placeholder="Enter text">
              </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');
      const spy = jest.fn();
      page.root.addEventListener('validationFailed', spy);

      // Simulate an invalid input with value shorter than minlength
      textareaElement.value = 'short';
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the emitted event
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            textareaId: expect.any(String),
            error: 'Text is too short. Minimum length is "10" characters.',
          }),
        })
      );
    });

    it('emits validationFailed when input exceeds maxlength requirement', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                label="Test Textarea" 
                maxlength="5" 
                placeholder="Enter text">
              </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');
      const spy = jest.fn();
      page.root.addEventListener('validationFailed', spy);

      // Simulate an invalid input with value longer than maxlength
      textareaElement.value = 'This is too long';
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the emitted event
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            textareaId: expect.any(String),
            error: 'Text is too long. Maximum length is "5" characters.',
          }),
        })
      );
    });

    it('does not emit validationFailed when input meets length requirements', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                label="Valid Textarea" 
                minlength="5" 
                maxlength="15" 
                placeholder="Enter text">
              </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');
      const spy = jest.fn();
      page.root.addEventListener('validationFailed', spy);

      // Simulate a valid input
      textareaElement.value = 'Valid Text';
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify no event was emitted
      expect(spy).not.toHaveBeenCalled();
    });

    it('emits validationFailed for SQL injection pattern when sanitizeTextarea is false', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                  label="Test Textarea" 
                  placeholder="Enter text">
               </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');
      const spy = jest.fn();
      page.root.addEventListener('validationFailed', spy);

      // Simulate SQL injection-like input
      textareaElement.value = '<script>alert("attack")</script>';
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the emitted event
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            textareaId: expect.any(String),
            error: 'Invalid SQL patterns detected.',
          }),
        })
      );
    });

    it('emits textareaChanged with sanitized value when sanitizeTextarea is true', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                label="Sanitized Textarea" 
                sanitize-textarea="true" 
                placeholder="Enter text">
              </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');
      const spy = jest.fn();
      page.root.addEventListener('textareaChanged', spy);

      // Simulate input with unsanitized value
      textareaElement.value = '<script>alert("hello")</script>';
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the sanitized value and emitted event
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'alerthello' }));
    });
  });

  describe('Events Behavior', () => {
    it('onChange => should sanitize value if sanitizeTextarea is true and emit textareaChanged event', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                    label="Sanitize Test" 
                    placeholder="Enter text"
                    
                    sanitize-textarea>
                </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');

      const spy = jest.fn();

      page.root.addEventListener('textareaChanged', spy);

      // Simulate an textarea change with unsanitized value
      textareaElement.value = `<script>alert('test')</script>`;
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the sanitized value and event emission
      expect(textareaElement.value).toBe('alerttest');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'alerttest' }));
    });

    it('onChange => should not sanitize value if sanitizeTextarea is false and emit textareaChanged event', async () => {
      const page = await newSpecPage({
        components: [TnwTextarea],
        html: `<tnw-textarea 
                label="No Sanitize Test" 
                placeholder="Enter text"
              >
              </tnw-textarea>`,
      });

      const textareaElement = page.root.shadowRoot.querySelector('textarea');
      const spy = jest.fn();
      page.root.addEventListener('textareaChanged', spy);

      // Simulate an textarea change with unsanitized value
      textareaElement.value = `<script>alert('test')</script>`;
      textareaElement.dispatchEvent(new Event('change'));

      await page.waitForChanges();

      // Verify the unsanitized value and event emission
      expect(textareaElement.value).toBe(`<script>alert('test')</script>`);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: `<script>alert('test')</script>` }));
    });
  });

  describe('Label and Accessibility', () => {
    it('renders a label associated with the textarea', async () => {
      const label = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea textarea-id="test-textarea" label="Accessible Textarea" placeholder="Enter text"></tnw-textarea>`,
        'tnw-label'
      ) as HTMLTnwLabelElement;
      expect(label).not.toBeNull();
      expect(label.getAttribute('htmlfor')).toBe('test-textarea');
    });

    it('renders a visually hidden label when isLabelSrOnly is true', async () => {
      const label = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea textarea-id="test-textarea" label="Hidden Label" placeholder="Enter text" is-label-sr-only></tnw-textarea>`,
        'tnw-label'
      );
      expect(label.getAttribute('is-sr-only')).not.toBeUndefined();
      expect(label.getAttribute('is-sr-only')).not.toBe('false');
    });
  });

  describe('Error Handling and Validation', () => {
    it('throws an error when label is missing', async () => {
      await checkSpecPageError(
        TnwTextarea,
        `<tnw-textarea textarea-id="test-textarea"></tnw-textarea>`,
        'Required prop "label" is missing'
      );
    });
  });

  describe('Security Tests', () => {
    describe('SQL Injection Validation Tests', () => {
      it('sanitize textarea initialized value', async () => {
        const page = await newSpecPage({
          components: [TnwTextarea],
          html: `<tnw-textarea 
                  textarea-id="textarea-3" 
                  label="Textarea" 
                  placeholder="Enter text"
                  sanitize-textarea
                  value="<script>test</script>"
                >
                </tnw-textarea>`,
        });

        const host = page.root as HTMLTnwTextareaElement;
        const textareaElement = host.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;
        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;

        await page.waitForChanges();

        expect(alertElement).toBeNull();
        expect(textareaElement.getAttribute('value')).toBe('test');
      });

      it('sanitize textarea value on change event', async () => {
        const page = await newSpecPage({
          components: [TnwTextarea],
          html: `<tnw-textarea 
                  textarea-id="textarea-3" 
                  label="Textarea" 
                  placeholder="Enter text"
                  sanitize-textarea
                >
                </tnw-textarea>`,
        });

        const host = page.root as HTMLTnwTextareaElement;

        await page.waitForChanges();

        const textareaElement = host.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;

        await page.waitForChanges();
        textareaElement.value = '<script>test</script>';
        await page.waitForChanges();
        textareaElement.dispatchEvent(new CustomEvent('change', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;
        expect(alertElement).toBeNull();

        expect(textareaElement.value).toBe('test');
      });

      it('displays an alert message for invalid textarea on input event', async () => {
        const page = await newSpecPage({
          components: [TnwTextarea],
          html: `<tnw-textarea 
                textarea-id="textarea-3" 
                label="Number Textarea" 
                placeholder="Enter a number"
              >
              </tnw-textarea>`,
        });

        const host = page.root as HTMLTnwTextareaElement;

        await page.waitForChanges();

        const textareaElement = host.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;

        await page.waitForChanges();
        textareaElement.value = '<script>test</script>';
        await page.waitForChanges();
        textareaElement.dispatchEvent(new CustomEvent('input', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;
        expect(alertElement).not.toBeNull();

        const alertMessage = alertElement?.getAttribute('message');
        expect(alertMessage).toContain('Invalid SQL patterns detected.');
      });

      it('does not display an alert for valid textarea', async () => {
        const page = await newSpecPage({
          components: [TnwTextarea],
          html: `<tnw-textarea 
                textarea-id="textarea-4" 
                label="Number Textarea" 
                placeholder="Enter a number">
              </tnw-textarea>`,
        });

        const host = page.root as HTMLTnwTextareaElement;

        await page.waitForChanges();

        const textareaElement = host.shadowRoot.querySelector('textarea') as HTMLTextAreaElement;

        textareaElement.value = '12345';
        textareaElement.dispatchEvent(new Event('input', {}));
        await page.waitForChanges();

        const alertElement = host.shadowRoot.querySelector('tnw-alert') as HTMLTnwAlertElement;

        expect(alertElement).toBeNull();
      });
    });
  });
});