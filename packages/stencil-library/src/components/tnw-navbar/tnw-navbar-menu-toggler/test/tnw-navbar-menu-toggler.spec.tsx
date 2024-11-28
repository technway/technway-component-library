import { createSpecPage } from '../../../../utils/testing-utils';
import { TnwNavbarMenuToggler } from '../tnw-navbar-menu-toggler';

describe('TnwNavbarMenuToggler', () => {
  describe('Default Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwNavbarMenuToggler, `<tnw-navbar-menu-toggler></tnw-navbar-menu-toggler>`);
      expect(el).toMatchSnapshot();
    });

    it('applies correct aria-label based on labelAria prop', async () => {
      const el = await createSpecPage(TnwNavbarMenuToggler, `<tnw-navbar-menu-toggler label-aria="Custom Label"></tnw-navbar-menu-toggler>`);
      const host = el.shadowRoot?.host;
      expect(host?.getAttribute('aria-label')).toBe('Custom Label');
    });

    it('defaults aria-label when labelAria prop is not provided', async () => {
      const el = await createSpecPage(TnwNavbarMenuToggler, `<tnw-navbar-menu-toggler></tnw-navbar-menu-toggler>`);
      const host = el.shadowRoot?.host;
      expect(host?.getAttribute('aria-label')).toBe('Toggle Navbar Menu');
    });

    it('renders the menu toggler icon', async () => {
      const el = await createSpecPage(TnwNavbarMenuToggler, `<tnw-navbar-menu-toggler></tnw-navbar-menu-toggler>`);
      const icon = el.shadowRoot?.querySelector('tnw-icon');
      expect(icon).not.toBeNull();
      expect(icon?.getAttribute('name')).toBe('tnw-menu');
    });
  });

  // describe('Menu Toggle Logic', () => {
  //   it('toggles the navbarState.isMenuOpened when clicked', async () => {
  //     navbarState.isMenuOpened = false;

  //     const el = await createSpecPage(TnwNavbarMenuToggler, `<tnw-navbar-menu-toggler></tnw-navbar-menu-toggler>`);
  //     const host = el.shadowRoot?.host;

  //     host?.click();
  //     expect(navbarState.isMenuOpened).toBe(true);

  //     host?.click();
  //     expect(navbarState.isMenuOpened).toBe(false);
  //   });

  //   it('updates aria-expanded attribute when toggled', async () => {
  //     const el = await createSpecPage(TnwNavbarMenuToggler, `<tnw-navbar-menu-toggler></tnw-navbar-menu-toggler>`);
  //     const host = el.shadowRoot?.host;

  //     expect(host?.getAttribute('aria-expanded')).toBe('false');

  //     host?.click();
  //     expect(host?.getAttribute('aria-expanded')).toBe('true');
  //   });
  // });
});
