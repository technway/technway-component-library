import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwText } from '../tnw-text';

describe('tnw-text', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwText,
        `<tnw-text></tnw-text>`
      );
      expect(host).toMatchSnapshot();
    });

    it('uses the default textTag', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text text="Default Tag"></tnw-text>`,
        'p'
      );
      expect(textElement.tagName).toBe('P');
    });

    it('uses the default displayMode', async () => {
      const host = await createSpecPage(
        TnwText,
        `<tnw-text text="Default Tag"></tnw-text>`
      );
      expect(host).toHaveClass('tnw-text--block');
    });

    it('applies default classes for width and line height', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text></tnw-text>`,
        'p'
      );
      expect(textElement).toHaveClass('lh-1_75');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders custom text content', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text text="Custom Text"></tnw-text>`,
        'p'
      );
      expect(textElement.textContent).toBe('Custom Text');
    });

    it('renders with a custom text tag', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text text="Custom Tag" text-tag="span"></tnw-text>`,
        'span'
      );
      expect(textElement.tagName).toBe('SPAN');
    });

    it('applies custom color and font size classes', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text color="primary" size="lg"></tnw-text>`,
        '.tnw-text__inner'
      );
      expect(textElement).toHaveClasses(['color-primary', 'fs-lg']);
    });

    it('applies custom text alignment and transformation', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text alignment="center" text-case="uppercase"></tnw-text>`,
        '.tnw-text__inner'
      );
      expect(textElement).toHaveClasses(['ta-center', 'uppercase']);
    });

    it('renders highlighted text with correct properties', async () => {
      const highlightedHost = await createSpecPage(
        TnwText,
        `<tnw-text text="Highlight Example" highlight="Highlight" highlight-color="secondary" highlight-weight="700" highlight-tag="strong"></tnw-text>`,
        'tnw-text'
      ) as HTMLTnwTextElement;
      const highlightedText = queryElement(highlightedHost, 'strong');
      expect(highlightedText).not.toBeNull();
      expect(highlightedText).toHaveClass('color-secondary');
      expect(highlightedText).toHaveClass('fw-700');
    });

    it('applies custom width size and display mode', async () => {
      const host = await createSpecPage(
        TnwText,
        `<tnw-text text="Hello" width-size="lg" display-mode="inline-block"></tnw-text>`,
      );
      expect(host).toHaveClasses(['tnw-text--width-lg', 'tnw-text--inline-block']);
    });

    it('applies custom font weight', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text weight="700"></tnw-text>`,
        '.tnw-text__inner'
      );
      expect(textElement).toHaveClass('fw-700');
    });

    it('applies custom line height', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text line-height="2"></tnw-text>`,
        '.tnw-text__inner'
      );
      expect(textElement).toHaveClass('lh-2');
    });
  });

  describe('Slot Behavior', () => {
    it('renders slot content when text prop is not provided', async () => {
      const slotContent = await createSpecPage(
        TnwText,
        `<tnw-text>
          <span>Slot Content</span>
        </tnw-text>`,
        'span',
        false
      );
      expect(slotContent).not.toBeNull();
      expect(slotContent.textContent).toBe('Slot Content');
    });

    it('prioritizes the text prop over slot content', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text text="Prop Text">
          <span>Slot Content</span>
        </tnw-text>`,
        'p'
      );
      expect(textElement.textContent).toBe('Prop Text');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error for invalid text tag', async () => {
      await checkSpecPageError(
        TnwText,
        `<tnw-text text-tag="invalidTag"></tnw-text>`,
        'Invalid prop value for "textTag"'
      );
    });

    it('throws an error for invalid font weight', async () => {
      await checkSpecPageError(
        TnwText,
        `<tnw-text weight="invalidWight"></tnw-text>`,
        'Invalid prop value for "weight"'
      );
    });

    it('throws an error for invalid font size', async () => {
      await checkSpecPageError(
        TnwText,
        `<tnw-text size="invalidSize"></tnw-text>`,
        'Invalid prop value for "size"'
      );
    });

    it('throws an error for invalid text case', async () => {
      await checkSpecPageError(
        TnwText,
        `<tnw-text text-case="invalidCase"></tnw-text>`,
        'Invalid prop value for "textCase"'
      );
    });

    it('throws an error when highlight text is not found in the main text', async () => {
      await checkSpecPageError(
        TnwText,
        `<tnw-text text="Main Text" highlight="NotFound"></tnw-text>`,
        'Highlight text "NotFound" not found in the provided text'
      );
    });

    it('throws an error when highlight is empty but main text is provided', async () => {
      await checkSpecPageError(
        TnwText,
        `<tnw-text text="" highlight="this"></tnw-text>`,
        'Main text must be a non-empty string to validate highlight text'
      );
    });
  });
});
