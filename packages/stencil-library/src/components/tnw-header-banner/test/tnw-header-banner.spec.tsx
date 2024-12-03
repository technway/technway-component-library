import { createSpecPage } from '../../../utils/testing-utils';
import { TnwHeaderBanner } from '../tnw-header-banner';

describe('tnw-header-banner', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `<tnw-header-banner></tnw-header-banner>`, '', true);
      expect(el).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders the heading when the `heading` prop is provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner heading="Banner Heading"></tnw-header-banner>
      `);
      const heading = el.shadowRoot?.querySelector('tnw-heading');
      expect(heading?.getAttribute('text')).toBe('Banner Heading');
    });

    it('renders the subheading when the `subheading` prop is provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner subheading="Banner Subheading"></tnw-header-banner>
      `);
      const subheading = el.shadowRoot?.querySelector('tnw-heading[size="md"]');
      expect(subheading?.getAttribute('text')).toBe('Banner Subheading');
    });

    it('renders the description when the `description` prop is provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner description="Banner Description"></tnw-header-banner>
      `);
      const description = el.shadowRoot?.querySelector('tnw-text');
      expect(description?.getAttribute('text')).toBe('Banner Description');
    });

    it('renders the button when the `buttonLabel` prop is provided', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner button-label="Click Me"></tnw-header-banner>
      `);
      const button = el.shadowRoot?.querySelector('tnw-button');
      expect(button?.getAttribute('label')).toBe('Click Me');
    });

    it('applies correct alignment class when `alignment` prop is set', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner alignment="center"></tnw-header-banner>
      `);
      const contentEl = el.shadowRoot?.querySelector('.tnw-header-banner__content');
      expect(contentEl).toHaveClass('tnw-header-banner__content--center');
    });

    it('applies correct width class when `width` prop is set', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner width="lg"></tnw-header-banner>
      `);
      const contentEl = el.shadowRoot?.querySelector('.tnw-header-banner__content');
      expect(contentEl).toHaveClass('tnw-header-banner__content--lg');
    });

    it('applies sticky class when `stickyNavbar` is true', async () => {
      const el = await createSpecPage(TnwHeaderBanner, `
        <tnw-header-banner sticky-navbar="true"></tnw-header-banner>
      `);
      const host = el.shadowRoot?.host;
      expect(host).toHaveClass('tnw-header-banner--stickyNavbar');
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
