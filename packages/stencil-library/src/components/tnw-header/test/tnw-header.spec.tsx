import { createSpecPage } from '../../../utils/testing-utils';
import { TnwHeader } from '../tnw-header';

describe('tnw-header', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders with default props', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header></tnw-header>`);
      expect(el).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies the correct background color class when backgroundColor prop is set', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header background-color="primary"></tnw-header>`);
      expect(el).toHaveClass('bg-primary');
    });

    it('applies the correct border-bottom color class when borderBottomColor prop is set', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header border-bottom-color="secondary"></tnw-header>`);
      expect(el).toHaveClass('border-b-secondary');
    });

    it('applies the correct height class when height prop is set to full', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header height="full"></tnw-header>`);
      expect(el).toHaveClass('h-full');
    });

    it('applies the correct minHeight class when minHeight prop is set to full-screen', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header min-height="full-screen"></tnw-header>`);
      expect(el).toHaveClass('min-h-full-screen');
    });

    it('applies the correct content alignment class when alignment prop is set to center', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header alignment="center"></tnw-header>`);
      const content = el.shadowRoot?.querySelector('.tnw-header__content');
      expect(content).toHaveClass('tnw-header__content--center');
    });

    it('applies the correct class when centerBanner prop is set to true', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header center-banner="true"></tnw-header>`);
      const host = el.shadowRoot?.host;
      expect(host).toHaveClass('tnw-header--centerBanner');
    });

    it('does not apply the container class when disableInternalContainer is true', async () => {
      const el = await createSpecPage(TnwHeader, `<tnw-header disable-internal-container></tnw-header>`);
      const content = el.shadowRoot?.querySelector('.tnw-header__content');
      expect(content).not.toHaveClass('container');
    });

    it('renders navbar slot content correctly', async () => {
      const el = await createSpecPage(TnwHeader, `
        <tnw-header>
          <div slot="navbar">Navbar Content</div>
        </tnw-header>
      `);
      const slot = el.shadowRoot?.querySelector('slot[name="navbar"]');
      expect(slot).not.toBeNull();
    });

    it('renders banner slot content correctly', async () => {
      const el = await createSpecPage(TnwHeader, `
        <tnw-header>
          <div slot="banner">Banner Content</div>
        </tnw-header>
      `);
      const slot = el.shadowRoot?.querySelector('slot[name="banner"]');
      expect(slot).not.toBeNull();
    });
  });
});
