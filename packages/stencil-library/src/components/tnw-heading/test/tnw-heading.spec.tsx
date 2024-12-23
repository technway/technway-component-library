import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwHeading } from '../tnw-heading';

describe('tnw-heading', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwHeading,
        `<tnw-heading></tnw-heading>`
      );
      expect(host).toMatchSnapshot();
    });

    it('uses default heading level when no level is provided', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading text="Heading with default level"></tnw-heading>`,
        'h2'
      );
      expect(heading.tagName).toBe('H2');
    });

    it('applies default classes for size, weight, and level', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading></tnw-heading>`,
        'h2'
      );
      expect(heading).toHaveClasses([
        'tnw-heading__inner',
        'fs-heading',
        'fw-600',
        'lh-1_5',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders a heading with custom text', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading text="Custom Heading"></tnw-heading>`,
        'h2'
      );
      expect(heading.textContent).toBe('Custom Heading');
    });

    it('renders the specified heading level', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading level="h1"></tnw-heading>`,
        'h1'
      );
      expect(heading).not.toBeNull();
    });

    it('applies a custom font size', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading size="lg"></tnw-heading>`,
        '.tnw-heading__inner'
      );
      expect(heading).toHaveClass('fs-lg');
    });

    it('applies a custom font weight', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading weight="700"></tnw-heading>`,
        '.tnw-heading__inner'
      );
      expect(heading).toHaveClass('fw-700');
    });

    it('renders highlighted text with correct properties', async () => {
      const highlightedText = await createSpecPage(
        TnwHeading,
        `<tnw-heading text="This is a heading" highlight="heading" highlight-color="primary" highlight-weight="700" highlight-tag="mark"></tnw-heading>`,
        'tnw-text[text="heading"]'
      ) as HTMLTnwHeadingElement;
      expect(highlightedText).not.toBeNull();
      expect(highlightedText.getAttribute('color')).toBe('primary');
      expect(highlightedText.getAttribute('weight')).toBe('700');
      expect(queryElement(highlightedText, 'mark')).not.toBeNull;
    });

    it('renders text alignment class', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading alignment="center"></tnw-heading>`,
        '.tnw-heading__inner'
      );
      expect(heading).toHaveClass('ta-center');
    });

    it('applies text transformation', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading text-case="uppercase"></tnw-heading>`,
        '.tnw-heading__inner'
      );
      expect(heading).toHaveClass('uppercase');
    });


    it('renders correctly for h1 level with its default props styles', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading level="h1" text="Test Heading"></tnw-heading>`,
        "h1"
      );
      expect(heading).toHaveClasses(['fw-700', 'fs-5xl']);
    });

    it('renders correctly for h2 level with its default props styles', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading level="h2" text="Test Heading"></tnw-heading>`,
        "h2"
      );
      expect(heading).toHaveClasses(['fw-600', 'fs-heading']);
    });

    it('renders correctly for h3 level with its default props styles', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading level="h3" text="Test Heading"></tnw-heading>`,
        "h3"
      );
      expect(heading).toHaveClasses(['fw-400', 'fs-xl']);
    });

    it('applies a custom width size class', async () => {
      const host = await createSpecPage(
        TnwHeading,
        `<tnw-heading width-size="lg"></tnw-heading>`,
      );
      expect(host).toHaveClass('tnw-heading--width-lg');
    });

    it('applies a custom line height class', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading line-height="1_75"></tnw-heading>`,
        '.tnw-heading__inner'
      );
      expect(heading).toHaveClass('lh-1_75');
    });

    it('renders custom highlighted text with properties', async () => {
      const highlightedText = await createSpecPage(
        TnwHeading,
        `<tnw-heading text="Example Text" highlight="Example" highlight-color="secondary" highlight-weight="800" highlight-tag="strong"></tnw-heading>`,
        'tnw-text'
      ) as HTMLTnwTextElement;
      expect(highlightedText).not.toBeNull();
      expect(highlightedText.getAttribute('color')).toBe('secondary');
      expect(highlightedText.getAttribute('weight')).toBe('800');
      expect(highlightedText.getAttribute('texttag')).toBe('strong');
    });
  });

  describe('Slot Behavior', () => {
    it('renders slot content when text prop is not provided', async () => {
      const slotContent = await createSpecPage(
        TnwHeading,
        `<tnw-heading>
          <span>Slot Content</span>
        </tnw-heading>`,
        'span',
        false
      );
      expect(slotContent).not.toBeNull();
      expect(slotContent.textContent).toBe('Slot Content');
    });

    it('prioritizes the text prop over slot content', async () => {
      const heading = await createSpecPage(
        TnwHeading,
        `<tnw-heading text="Prop Text">
          <span>Slot Content</span>
        </tnw-heading>`,
        '.tnw-heading__inner'
      );
      expect(heading.textContent).toBe('Prop Text');
    });
  });

  describe('Error Handling and Edge Cases', () => {

    it('throws an error for an invalid heading level', async () => {
      await checkSpecPageError(
        TnwHeading,
        `<tnw-heading level="invalidLevel"></tnw-heading>`,
        'Invalid prop value for "level"'
      );
    });

    it('throws an error for an invalid font size', async () => {
      await checkSpecPageError(
        TnwHeading,
        `<tnw-heading size="invalidSize"></tnw-heading>`,
        'Invalid prop value for "size"'
      );
    });

    it('throws an error for an invalid font weight', async () => {
      await checkSpecPageError(
        TnwHeading,
        `<tnw-heading weight="invalidWeight"></tnw-heading>`,
        'Invalid prop value for "weight"'
      );
    });

    it('throws an error for an invalid text case', async () => {
      await checkSpecPageError(
        TnwHeading,
        `<tnw-heading text-case="invalidCase"></tnw-heading>`,
        'Invalid prop value for "textCase"'
      );
    });

    describe('Highlight Prop Validation', () => {
      it('throws an error when the highlight text is invalid', async () => {
        await checkSpecPageError(
          TnwHeading,
          `<tnw-heading text="This is a test" highlight="absent"></tnw-heading>`,
          'Highlight text "absent" not found in the provided text'
        );
      });

      it('throws an error for empty text with not empty highlight', async () => {
        await checkSpecPageError(
          TnwHeading,
          `<tnw-heading text="" highlight="test"></tnw-heading>`,
          'Main text must be a non-empty string to validate highlight text'
        );
      });
    });
  });
});
