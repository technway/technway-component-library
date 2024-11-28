import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwText } from '../tnw-text';

const elementSelector: string = 'p';

describe('tnw-text', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders text with default class names when only required prop is provided', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text example"></tnw-text>`);
      expect(textElement).toMatchSnapshot();
    });

    it('renders with default line height when no lineHeight prop is provided', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text example"></tnw-text>`, elementSelector);
      expect(textElement).toHaveClass('lh-1_75');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies "ta-center" class when alignment prop is set to "center"', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text" alignment="center"></tnw-text>`, elementSelector);
      expect(textElement).toHaveClass('ta-center');
    });

    it('applies "color-primary" class when color prop is set to "primary"', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text" color="primary"></tnw-text>`, elementSelector);
      expect(textElement).toHaveClass('color-primary');
    });

    it('applies "fs-2xl" class when size prop is set to "2xl"', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text" size="2xl"></tnw-text>`, elementSelector);
      expect(textElement).toHaveClass('fs-2xl');
    });

    it('applies "fw-100" class when weight prop is set to "100"', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text" weight="100"></tnw-text>`, elementSelector);
      expect(textElement).toHaveClass('fw-100');
    });

    it('applies "capitalize" class when textCase prop is set to "capitalize"', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text" text-case="capitalize"></tnw-text>`, elementSelector);
      expect(textElement).toHaveClass('capitalize');
    });

    it('applies "lh-2" class when lineHeight prop is set to "2"', async () => {
      const textElement = await createSpecPage(TnwText, `<tnw-text text="some text" line-height="2"></tnw-text>`, elementSelector);
      expect(textElement).toHaveClass('lh-2');
    });

    it('applies multiple classes when several props are set', async () => {
      const textElement = await createSpecPage(
        TnwText,
        `<tnw-text text="Custom Text" alignment="center" color="primary" weight="900" size="xs" text-case="uppercase" line-height="1_75"></tnw-text>`,
        elementSelector
      );
      expect(textElement).toHaveClass('tnw-text');
      expect(textElement).toHaveClasses(['ta-center', 'color-primary', 'fw-900', 'fs-xs', 'uppercase', 'lh-1_75']);
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('handles invalid alignment prop gracefully', async () => {
      await checkError(TnwText, `<tnw-text text="Invalid Text" alignment="top"></tnw-text>`, 'Invalid prop value for "alignment"');
    });

    it('throws an error when an invalid color prop is provided', async () => {
      await checkError(TnwText, `<tnw-text text="Invalid Text" color="invalidColor"></tnw-text>`, 'Invalid prop value for "color"');
    });
  });
});
