import { createSpecPage } from '../../../utils/testing-utils';
import { TnwNavbar } from '../tnw-navbar';

describe('tnw-navbar', () => {
  describe('Default Behavior', () => {
    it('renders with default properties', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar></tnw-navbar>`);
      expect(page).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies the correct appearance classes', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar appearance="solid" variant="primary"></tnw-navbar>`);
      const nav = page.shadowRoot?.querySelector('nav');
      expect(nav).toHaveClass('tnw-directional-v-solid-primary');
    });

    it('renders a glassmorphism effect when enabled', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar use-glassmorphism-effect="true"></tnw-navbar>`);
      const nav = page.shadowRoot?.querySelector('nav');
      expect(nav?.classList.contains('tnw-navbar__content--glassmorphism')).toBe(true);
    });

    it('renders as sticky when `sticky` is true', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar sticky="true"></tnw-navbar>`);
      expect(page?.classList.contains('tnw-navbar--sticky')).toBe(true);
    });

    it('renders menu toggler in start position when `burgerMenuPlacement` is set to start', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar use-start-slot="true" burger-menu-placement="start"></tnw-navbar>`);
      const startSlot = page.shadowRoot?.querySelector('.tnw-navbar__start');
      expect(startSlot?.querySelector('tnw-navbar-menu-toggler')).not.toBeNull();
    });

    it('renders menu toggler in end position when `burgerMenuPlacement` is set to end', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar use-end-slot="true" burger-menu-placement="end"></tnw-navbar>`);
      const endSlot = page.shadowRoot?.querySelector('.tnw-navbar__end');
      expect(endSlot?.querySelector('tnw-navbar-menu-toggler')).not.toBeNull();
    });

    it('applies correct classes for `borderRadius` prop', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar appearance="solid" border-radius="lg"></tnw-navbar>`);
      const nav = page.shadowRoot?.querySelector('nav');
      expect(nav?.classList.contains('rounded-lg')).toBe(true);
    });

    it('does not render internal container when `disableInternalContainer` is true', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar disable-internal-container></tnw-navbar>`);
      const nav = page.shadowRoot?.querySelector('nav');
      expect(nav).not.toHaveClass('container');
    });

    it('render internal container when `disableInternalContainer` is false', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar disable-internal-container="false"></tnw-navbar>`);
      const nav = page.shadowRoot?.querySelector('nav');
      expect(nav).toHaveClass('container');
    });
  });

  describe('Slots Rendering Behavior', () => {
    it('renders slots for start, middle, and end content', async () => {
      const page = await createSpecPage(TnwNavbar, `
      <tnw-navbar use-start-slot="true" use-middle-slot="true" use-end-slot="true">
        <div slot="start">Start Content</div>
        <div slot="middle">Middle Content</div>
        <div slot="end">End Content</div>
      </tnw-navbar>
    `);
      const startSlot = page.shadowRoot?.querySelector('slot[name="start"]');
      const middleSlot = page.shadowRoot?.querySelector('slot[name="middle"]');
      const endSlot = page.shadowRoot?.querySelector('slot[name="end"]');

      expect(startSlot).not.toBeNull();
      expect(middleSlot).not.toBeNull();
      expect(endSlot).not.toBeNull();
    });

    it('centers the middle slot when `exactCenterMiddleSlot` is true', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar use-middle-slot="true" exact-center-middle-slot="true"></tnw-navbar>`);
      const middleSlot = page.shadowRoot?.querySelector('.tnw-navbar__middle');
      expect(middleSlot?.classList.contains('tnw-navbar__middle--exact-center')).toBe(true);
    });
  });
});
