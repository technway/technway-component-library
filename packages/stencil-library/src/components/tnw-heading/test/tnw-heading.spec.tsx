import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwHeading } from '../tnw-heading';

const elementSelector: string = 'h2';

describe('tnw-heading', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading"></tnw-heading>`);
      expect(headingElement).toMatchSnapshot();
    });

    it('uses default heading tag when no tag is provided', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Heading with default tag"></tnw-heading>`, elementSelector);
      expect(headingElement.tagName).toBe('H2');
    });

    it('renders with default line height when no value is provided', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Heading with default line-height"></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('lh-1_5');
    });

    it('does not use text font when no value is provided for useTextFont', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Heading with default font"></tnw-heading>`, elementSelector);
      expect(headingElement).not.toHaveClass('tnw-heading--textFont');
    });
  });

  describe('Heading Tag Rendering', () => {
    it('renders the correct HTML tag based on headingTag prop', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Heading 1" heading-tag="h1"></tnw-heading>`, "h1");
      expect(headingElement.tagName).toBe('H1');
    });

    it('renders correctly for h1 tag with default props', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading heading-tag="h1" text="Test Heading"></tnw-heading>`, "h1");
      expect(headingElement).toHaveClasses(['fw-700', 'fs-5xl']);
    });

    it('renders correctly for h2 tag with default props', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading heading-tag="h2" text="Test Heading"></tnw-heading>`, "h2");
      expect(headingElement).toHaveClasses(['fw-600', 'fs-heading']);
    });

    it('renders correctly for h3 tag with default props', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading heading-tag="h3" text="Test Heading"></tnw-heading>`, "h3");
      expect(headingElement).toHaveClasses(['fw-400', 'fs-xl']);
    });

    it('renders the correct HTML tag for h4', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Heading 4" heading-tag="h4"></tnw-heading>`, "h4");
      expect(headingElement.tagName).toBe('H4');
    });

    it('renders the correct HTML tag for h5', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Heading 5" heading-tag="h5"></tnw-heading>`, "h5");
      expect(headingElement.tagName).toBe('H5');
    });

    it('renders the correct HTML tag for h6', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Heading 6" heading-tag="h6"></tnw-heading>`, "h6");
      expect(headingElement.tagName).toBe('H6');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders the correct class when alignment prop is "center"', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading" alignment="center"></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('ta-center');
    });

    it('renders the correct class when color prop is "primary"', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading" color="primary"></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('color-primary');
    });

    it('renders the correct class when weight prop is "900"', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading" weight="900"></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('fw-900');
    });

    it('renders the correct class when size prop is "xs"', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading" size="xs"></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('fs-xs');
    });

    it('renders the correct class when textCase prop is "capitalize"', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading" text-case="capitalize"></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('capitalize');
    });

    it('renders the correct class when lineHeight prop is "1_75"', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading" line-height="1_75"></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('lh-1_75');
    });

    it('renders the correct class when useTextFont prop is true', async () => {
      const headingElement = await createSpecPage(TnwHeading, `<tnw-heading text="Test Heading" use-text-font></tnw-heading>`, elementSelector);
      expect(headingElement).toHaveClass('tnw-heading--textFont');
    });

    it('renders correctly with a combination of custom props', async () => {
      const headingElement = await createSpecPage(
        TnwHeading,
        `<tnw-heading text="Custom Heading" heading-tag="h3" alignment="center" color="primary" weight="900" size="xs" text-case="uppercase" line-height="1_75" use-text-font></tnw-heading>`
      );
      expect(headingElement).toMatchSnapshot();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('handles invalid headingTag prop gracefully', async () => {
      await checkError(TnwHeading, `<tnw-heading text="Invalid Heading" heading-tag="invalid"></tnw-heading>`, 'Invalid prop value for "headingTag"');
    });
  });
});
