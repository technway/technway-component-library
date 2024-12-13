import { createSpecPage } from '../../../utils/testing-utils';
import { TnwHeaderBanner } from '../tnw-header-banner';

describe('tnw-header-banner', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner></tnw-header-banner>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default classes', async () => {
      const host = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner></tnw-header-banner>`
      );
      console.log(host.outerHTML);
      expect(host).toHaveClasses([
        'tnw-header-banner',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders a heading from the heading prop', async () => {
      const heading = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner heading="Main Heading"></tnw-header-banner>`,
        'tnw-heading[part="heading"]'
      );
      expect(heading).not.toBeNull();
      expect(heading.getAttribute('text')).toBe('Main Heading');
    });

    it('renders a subheading from the subheading prop', async () => {
      const subheading = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner subheading="Subheading"></tnw-header-banner>`,
        'tnw-heading[part="subheading"]'
      );
      expect(subheading).not.toBeNull();
      expect(subheading.getAttribute('text')).toBe('Subheading');
    });

    it('renders a description from the description prop', async () => {
      const description = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner description="This is a description"></tnw-header-banner>`,
        'tnw-text[part="description"]'
      );
      expect(description).not.toBeNull();
      expect(description.getAttribute('text')).toBe('This is a description');
    });

    it('renders a button from the buttonLabel prop', async () => {
      const button = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner button-label="Click Me"></tnw-header-banner>`,
        'tnw-button[part="button"]'
      );
      expect(button).not.toBeNull();
      expect(button.getAttribute('label')).toBe('Click Me');
    });

    it('applies the correct alignment class', async () => {
      const content = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner alignment="center"></tnw-header-banner>`,
        '.tnw-header-banner__content'
      );
      expect(content).toHaveClass('tnw-header-banner__content--center');
    });

    it('applies correct width class when width prop is set', async () => {
      const bannerContent = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner width="lg"></tnw-header-banner>`,
        'div.tnw-header-banner__content'
      );
      expect(bannerContent).toHaveClass('tnw-header-banner__content--lg');
    });

    it('applies the stickyNavbar class when stickyNavbar is true', async () => {
      const host = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner sticky-navbar></tnw-header-banner>`
      );
      expect(host).toHaveClass('tnw-header-banner--stickyNavbar');
    });

    it('renders an image from imageSrc and imageAlt props', async () => {
      const image = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner image-src="image.jpg" image-alt="Alt text"></tnw-header-banner>`,
        'tnw-image[part="image"]'
      );
      expect(image).not.toBeNull();
      expect(image.getAttribute('src')).toBe('image.jpg');
      expect(image.getAttribute('alt')).toBe('Alt text');
    });

    it('renders a wrapped image when wrapImage is true', async () => {
      const imageContainer = await createSpecPage(
        TnwHeaderBanner,
        `<tnw-header-banner image-src="image.jpg" image-alt="Alt text" wrap-image></tnw-header-banner>`,
        '[part="image-container"]'
      );
      expect(imageContainer).not.toBeNull();
    });
  });

  describe('Slot Behavior', () => {
    it('renders custom heading slot content when provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner>
          <div slot="heading">Custom Heading</div>
        </tnw-header-banner>
      `);

      // Cast the result to HTMLSlotElement
      const slot = el.shadowRoot?.querySelector('slot[name="heading"]') as HTMLSlotElement;
      expect(slot).not.toBeNull();
    });

    it('renders custom subheading slot content when provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner>
          <div slot="subheading">Custom Subheading</div>
        </tnw-header-banner>
      `);

      const slot = el.shadowRoot?.querySelector('slot[name="subheading"]') as HTMLSlotElement;
      expect(slot).not.toBeNull();
    });

    it('renders custom description slot content when provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner>
          <div slot="description">Custom Description</div>
        </tnw-header-banner>
      `);

      const slot = el.shadowRoot?.querySelector('slot[name="description"]') as HTMLSlotElement;
      expect(slot).not.toBeNull();
    });

    it('renders custom button slot content when provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner>
          <div slot="button">Custom Button</div>
        </tnw-header-banner>
      `);

      const slot = el.shadowRoot?.querySelector('slot[name="button"]') as HTMLSlotElement;
      expect(slot).not.toBeNull();
    });
  });
});
