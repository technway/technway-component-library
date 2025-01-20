import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwSearchInput } from '../tnw-search-input';

describe('tnw-search-input', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input input-id="test-input"></tnw-search-input>`
      );
      expect(host).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders the input with a placeholder', async () => {
      const input = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input placeholder="Enter keyword"></tnw-search-input>`,
        'input'
      );
      expect(input.getAttribute('placeholder')).toBe('Enter keyword');
    });

    it('renders the input with a value', async () => {
      const input = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input value="Initial Value"></tnw-search-input>`,
        'input'
      );
      expect(input.getAttribute('value')).toBe('Initial Value');
    });

    it('applies a custom appearance and appearance color classed', async () => {
      const input = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input appearance="underlined" appearance-color="primary"></tnw-search-input>`,
        'input'
      );
      expect(input).toHaveClasses([
        'tnw-search-input__field--underlined',
        'tnw-search-input__field--underlined-primary',
      ]);
    });

    it('does not apply a custom appearance and appearance color classed when expandable', async () => {
      const host = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input appearance="underlined" appearance-color="primary" variant="expandable"></tnw-search-input>`
      ) as HTMLTnwSearchInputElement;
      expect(host).toHaveClass('tnw-search-input--expandable');
      const input = queryElement(host, 'input');
      expect(input).toHaveClass('tnw-search-input__field--expandable');
      expect(input).not.toHaveClasses([
        'tnw-search-input__field--underlined',
        'tnw-search-input__field--underlined-primary',
      ]);
    });

    it('renders the input with a type', async () => {
      const input = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input type="text"></tnw-search-input>`,
        'input'
      );
      expect(input.getAttribute('type')).toBe('text');
    });

    it('renders a custom border-radius class', async () => {
      const input = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input border-radius="md"></tnw-search-input>`,
        'input'
      );
      expect(input).toHaveClass('rounded-md');
    });

    it('applies the name attribute when provided', async () => {
      const input = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input name="inputName"></tnw-search-input>`,
        'input'
      );
      expect(input.getAttribute('name')).toBe('inputName');
    });

    it('applies the autocomplete attribute when provided', async () => {
      const input = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input auto-complete="on"></tnw-search-input>`,
        'input'
      );
      expect(input.getAttribute('autocomplete')).toBe('on');
    });

    it('renders a visually hidden label', async () => {
      const label = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input></tnw-search-input>`,
        'label'
      );
      expect(label.getAttribute('class')).toContain('sr-only');
    });

    describe('Input ID Behavior', () => {
      it('should set the input ID if input-id is provided', async () => {
        const input = await createSpecPage(
          TnwSearchInput,
          `<tnw-search-input input-id="test-input"></tnw-search-input>`,
          'input'
        );

        expect(input.id).toBe('test-input');
      });

      it('should generate a unique input ID if input-id is not provided', async () => {
        const input = await createSpecPage(
          TnwSearchInput,
          `<tnw-search-input></tnw-search-input>`,
          'input'
        );

        const generatedId = input.id;

        expect(generatedId).toMatch(/^tnw-search-input-[a-zA-Z0-9]+$/);
        expect(generatedId).not.toBe('');
      });
    });
  });

  describe('Custom Events Behavior', () => {
    it('emits inputChangedOnType when the input value changes', async () => {
      const page = await newSpecPage({
        components: [TnwSearchInput],
        html: `<tnw-search-input></tnw-search-input>`,
      });

      const inputElement = page.root.shadowRoot.querySelector('input');
      const spy = jest.fn();
      page.root.addEventListener('inputChangedOnType', spy);

      // Simulate an input change
      inputElement.value = 'New Value';
      inputElement.dispatchEvent(new Event('input'));

      await page.waitForChanges();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 'New Value' }));
    });
  });

  describe('Label and Accessibility', () => {
    it('renders a label associated with the input', async () => {
      const label = await createSpecPage(
        TnwSearchInput,
        `<tnw-search-input input-id="test-input"></tnw-search-input>`,
        'label'
      ) as HTMLTnwLabelElement;
      expect(label).not.toBeNull();
      expect(label.getAttribute('htmlfor')).toBe('test-input');
    });
  });

  describe('Error Handling and Validation', () => {
    it('throws an error for invalid type value', async () => {
      await checkSpecPageError(
        TnwSearchInput,
        `<tnw-search-input type="email"></tnw-search-input>`,
        'Invalid prop value for "type"'
      );
    });
  });
});