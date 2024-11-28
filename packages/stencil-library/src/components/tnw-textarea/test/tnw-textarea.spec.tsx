import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwTextarea } from '../tnw-textarea';

describe('tnw-textarea', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" placeholder="Enter message"></tnw-textarea>`);
      expect(el).toMatchSnapshot();
    });

    it('displays the correct label and connects it to the textarea via `htmlFor` attribute', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Comment" textarea-id="comment" placeholder="Enter your comment"></tnw-textarea>`, 'tnw-label');
      expect(el?.getAttribute('text')).toBe('Comment');
      expect(el?.getAttribute('htmlFor')).toBe('comment');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `variant` class when variant is set to `underlined`', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" variant="underlined" placeholder="Enter message"></tnw-textarea>`);
      const textarea = el.shadowRoot?.querySelector('textarea');
      expect(textarea).toHaveClass('tnw-textarea--underlined');
    });

    it('applies correct `resize` class when resize prop is set to `horizontal`', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" resize="horizontal" placeholder="Enter message"></tnw-textarea>`);
      const textarea = el.shadowRoot?.querySelector('textarea');
      expect(textarea).toHaveClass('tnw-textarea--resize-horizontal');
    });

    it('applies correct `borderRadius` class when borderRadius prop is set', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" border-radius="lg" placeholder="Enter message"></tnw-textarea>`);
      const textarea = el.shadowRoot?.querySelector('textarea');
      expect(textarea).toHaveClass('rounded-lg');
    });

    it('renders the help text when `helpText` is provided', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" help-text="This is help text." placeholder="Enter message"></tnw-textarea>`, 'tnw-alert');
      expect(el?.getAttribute('message')).toBe('This is help text.');
    });

    it('renders the error message when `message` is provided and sets `aria-invalid` to true', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" is-invalid="true" alert="This field is required." placeholder="Enter message"></tnw-textarea>`);
      const alert = el.shadowRoot?.querySelector('tnw-alert');
      const textarea = el.shadowRoot?.querySelector('textarea');
      expect(alert?.getAttribute('message')).toBe('This field is required.');
      expect(textarea?.getAttribute('aria-invalid')).toBe('true');
    });

    it('disables the textarea when `disabled` is set to true', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" disabled="true" placeholder="Enter message"></tnw-textarea>`, 'textarea');
      expect(el?.getAttribute('disabled')).not.toBeNull();
    });

    it('applies the `isLabelSrOnly` prop correctly to hide the label visually', async () => {
      const el = await createSpecPage(
        TnwTextarea,
        `<tnw-textarea label="Message" textarea-id="message" is-label-sr-only="true" placeholder="Enter message"></tnw-textarea>`,
        'tnw-label'
      );
      expect(el).toHaveClass('sr-only');
    });

    it('applies `maxlength` and `minlength` attributes correctly', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" maxlength="100" minlength="10" placeholder="Enter message"></tnw-textarea>`, 'textarea');
      expect(el?.getAttribute('maxlength')).toBe('100');
      expect(el?.getAttribute('minlength')).toBe('10');
    });

    it('applies correct `rows` and `cols` attributes', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" rows="5" cols="30" placeholder="Enter message"></tnw-textarea>`, 'textarea');
      expect(el?.getAttribute('rows')).toBe('5');
      expect(el?.getAttribute('cols')).toBe('30');
    });

    it('sets the `autocomplete` attribute correctly when provided', async () => {
      const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" auto-complete="on" placeholder="Enter message"></tnw-textarea>`, 'textarea');
      expect(el?.getAttribute('autocomplete')).toBe('on');
    });
  });

  // describe('Input Behavior', () => {
  //   it('updates value in store when user types in textarea', async () => {
  //     const el = await createSpecPage(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" placeholder="Enter message"></tnw-textarea>`);
  //     const textarea = el.shadowRoot?.querySelector('textarea') as HTMLTextAreaElement;

  //     textarea.value = 'New message';
  //     textarea.dispatchEvent(new Event('input'));

  //     expect(el.instance.store.get('textareaValue')).toBe('New message');
  //   });
  // });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the `label` prop is missing', async () => {
      await checkError(TnwTextarea, `<tnw-textarea textarea-id="message" placeholder="Enter message"></tnw-textarea>`, 'Required prop "label"');
    });

    it('throws an error when the `textareaId` prop is missing', async () => {
      await checkError(TnwTextarea, `<tnw-textarea label="Message" placeholder="Enter message"></tnw-textarea>`, 'Required prop "textareaId"');
    });

    it('throws an error when an invalid `variant` is provided', async () => {
      await checkError(TnwTextarea, `<tnw-textarea label="Message" textarea-id="message" variant="invalid" placeholder="Enter message"></tnw-textarea>`, 'Invalid prop value for "variant"');
    });
  });
});
