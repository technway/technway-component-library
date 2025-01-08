import { checkSpecPageError, createSpecPage, queryElement } from '../../../utils/testing-utils';
import { TnwNavbar } from '../tnw-navbar';
import { newSpecPage } from '@stencil/core/testing';

describe('tnw-navbar', () => {
  describe('Default Behavior', () => {
    it('renders with default properties', async () => {
      const page = await createSpecPage(TnwNavbar, `<tnw-navbar></tnw-navbar>`);
      expect(page).toMatchSnapshot();
    });

    it('uses default values for optional props', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar></tnw-navbar>`,
      });
      const component = page.rootInstance as TnwNavbar;

      expect(component.appearance).toBe('solid');
      expect(component.appearanceColor).toBe('auto');
      expect(component.sticky).toBe(false);
      expect(component.disableInternalContainer).toBe(false);
      expect(component.menuExactCenter).toBe(false);
      expect(component.menuPlacement).toBe('middle');
      expect(component.togglerPlacement).toBe('end');
      expect(component.borderRadius).toBe('default');
      expect(component.paddingHorizontal).toBe('md');
      expect(component.paddingVertical).toBe('md');
      expect(component.enableCtaSlot).toBe(false);
    });

    it('applies custom appearance and color classes to host', async () => {
      const host = await createSpecPage(
        TnwNavbar,
        `<tnw-navbar appearance="outlined-bottom" appearance-color="primary"></tnw-navbar>`
      );
      expect(host).toHaveClasses([
        'outlined-bottom',
        'primary'
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies custom appearance and color classes scoped to container when scopeStylesToContainer is true', async () => {
      const content = await createSpecPage(
        TnwNavbar,
        `<tnw-navbar appearance="outlined-bottom" appearance-color="primary" scope-styles-to-container></tnw-navbar>`,
        '.tnw-navbar__content'
      );
      expect(content).toHaveClasses([
        'outlined-bottom',
        'primary'
      ]);
    });

    it('renders sticky navbar', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar sticky="true"></tnw-navbar>`,
      });
      expect(page.root).toHaveClass('tnw-navbar--sticky');
    });

    it('applies padding classes', async () => {
      const host = await createSpecPage(
        TnwNavbar,
        `<tnw-navbar padding-vertical="sm" padding-horizontal="sm"></tnw-navbar>`
      );
      expect(host).toHaveClasses(['paddingX-sm', 'paddingY-sm']);
    });

    it('handles enabled internal container', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar></tnw-navbar>`,
      });
      const navWithContainer = page.root.shadowRoot?.querySelector('.container');
      expect(navWithContainer).not.toBeNull();
    });

    it('handles disabled internal container', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar disable-internal-container></tnw-navbar>`,
      });
      const navWithContainer = page.root.shadowRoot?.querySelector('.container');
      expect(navWithContainer).toBeNull();
    });

    it('configures menu placement', async () => {
      const placements = ['start', 'middle', 'end']
      for (const placement of placements) {
        const page = await newSpecPage({
          components: [TnwNavbar],
          html: `<tnw-navbar menu-placement="${placement}" menu-data='{"menuItems":[{"label":"Home","link":"/"}],"hideMenuBelow":"1024"}'></tnw-navbar>`
        });
        const menuContainer = page.root.shadowRoot?.querySelector('.tnw-navbar__middle');

        if (placement === 'middle') {
          expect(menuContainer).not.toBeNull();
        }
      }
    });

    it('applies border radius', async () => {
      const radiusTypes = ['none', 'sm', 'md', 'lg', 'xl', 'full', 'default']
      for (const radius of radiusTypes) {
        const host = await createSpecPage(
          TnwNavbar,
          `<tnw-navbar border-radius="${radius}"></tnw-navbar>`
        );
        if (radius === 'none') {
          expect(host).not.toHaveClass('rounded-none');
        } else {
          expect(host).toHaveClass(`rounded-${radius}`);
        }
      }
    });
  });

  describe('Menu Data Parsing', () => {
    it('parses menu data correctly', async () => {
      const menuData = JSON.stringify([
        { label: 'Home', link: '/' },
        {
          label: 'Services',
          subMenu: [
            { label: 'Web Design', link: '/services/web-design' },
            { label: 'SEO', link: '/services/seo' }
          ]
        }
      ]);

      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='${menuData}'></tnw-navbar>`
      });

      const component = page.rootInstance as TnwNavbar;
      expect(component.parsedMenuData).not.toBeNull();
      // expect(component.parsedMenuData.length).toBe(2);
    });
  });

  describe('Slot Behavior', () => {
    it('enables Logo slot when prop is set', async () => {
      const logoElement = await createSpecPage(
        TnwNavbar,
        `
        <tnw-navbar
          enable-logo-slot
        >
          <tnw-image slot="logo" src="/logo.png" alt="logo"></tnw-image>
        </tnw-navbar>`,
        'tnw-image',
        false
      );

      expect(logoElement).not.toBeNull();
    });

    it('enables CTA slot when prop is set', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar enable-cta-slot="true">
          <div slot="cta">Call to Action</div>
        </tnw-navbar>`
      });

      const ctaSlot = page.root.shadowRoot?.querySelector('slot[name="cta"]');
      expect(ctaSlot).not.toBeNull();
    });

    it('does not render CTA slot when not enabled', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar>
          <div slot="cta">Call to Action</div>
        </tnw-navbar>`
      });

      const ctaSlot = page.root.shadowRoot?.querySelector('slot[name="cta"]');
      expect(ctaSlot).toBeNull();
    });
  });

  describe('Parts Rendering', () => {
    it('renders navbar start section', async () => {
      const host = await createSpecPage(
        TnwNavbar,
        `
        <tnw-navbar
          enable-logo-slot
          menu-data='{"menuItems":[{"label":"Home","link":"/"}], "menuPlacement":"start", "hideMenuBelow":"1024", "itemsSize":"sm", "itemsColor":"auto"}'
          menu-placement="start"
        >
          <tnw-image slot="logo" src="/logo.png" alt="logo"></tnw-image>
        </tnw-navbar>`
      ) as HTMLTnwNavbarElement;

      const startSection = queryElement(host, '.tnw-navbar__start');
      expect(startSection).not.toBeNull();

      const logoElement = queryElement(host, 'tnw-image', false);
      expect(logoElement).not.toBeNull();

      const menuElement = queryElement(host, '[part="menu"]');
      expect(menuElement).not.toBeNull();
    });

    it('renders navbar middle section', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar 
          menu-data='{"menuItems":[{"label":"Home","link":"/"}], "menuPlacement":"middle", "hideMenuBelow":"1024", "itemsSize":"sm", "itemsColor":"auto"}' 
          menu-placement="middle">
        </tnw-navbar>`,
      });

      const middleSection = page.root.shadowRoot?.querySelector('.tnw-navbar__middle');
      expect(middleSection).not.toBeNull();

      const menuElement = page.root.shadowRoot?.querySelector('[part="menu"]');
      expect(menuElement).not.toBeNull();
    });

    it('renders navbar end section', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar 
          menu-data='{"menuItems":[{"label":"Home","link":"/"}], "menuPlacement":"end", "hideMenuBelow":"1024", "itemsSize":"sm", "itemsColor":"auto"}' 
          menu-placement="end">
        </tnw-navbar>`,
      });

      const endSection = page.root.shadowRoot?.querySelector('.tnw-navbar__end');
      expect(endSection).not.toBeNull();

      const menuElement = page.root.shadowRoot?.querySelector('[part="menu"]');
      expect(menuElement).not.toBeNull();
    });
  });

  describe('Toggler Functionality', () => {
    it('renders toggler when menu items exist', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='{"menuItems":[{"label":"Home","link":"/"}],"hideMenuBelow":"1024"}'>`,
      });

      const toggler = page.root.shadowRoot?.querySelector('[part="toggler"]');
      expect(toggler).not.toBeNull();
      expect(toggler?.getAttribute('aria-label')).toBe('Toggle Navbar Menu');
    });

    it('does not render toggler when no menu items', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='{"menuItems":[],"hideMenuBelow":"1024"}'>`,
      });

      const toggler = page.root.shadowRoot?.querySelector('[part="toggler"]');
      expect(toggler).toBeNull();
    });

    it('toggles menu visibility when toggler is clicked', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='{"menuItems":[{"label":"Home","link":"/"}],"hideMenuBelow":"1024"}'>`,
      });

      const component = page.rootInstance as TnwNavbar;
      const toggler = page.root.shadowRoot?.querySelector('[part="toggler"]') as HTMLElement;

      // Initial state
      expect(component.isVisible).toBe(false);

      // Simulate click to open menu
      toggler?.dispatchEvent(new Event('click'));
      await page.waitForChanges();

      expect(component.isVisible).toBe(true);

      // Simulate click to close menu
      toggler?.dispatchEvent(new Event('click'));
      await page.waitForChanges();

      expect(component.isVisible).toBe(false);
    });

    it('renders toggler at start when placement is set to start', async () => {
      const toggler = await createSpecPage(
        TnwNavbar,
        `<tnw-navbar toggler-placement="start" menu-data='{"menuItems":[{"label":"Home","link":"/"}],"hideMenuBelow":"1024"}'>`,
        '.tnw-navbar__start [part="toggler"]'
      );

      expect(toggler).not.toBeNull();
    });

    it('renders toggler at end when placement is set to end', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar toggler-placement="end" menu-data='{"menuItems":[{"label":"Home","link":"/"}],"hideMenuBelow":"1024"}'>`,
      });

      const endToggler = page.root.shadowRoot?.querySelector('.tnw-navbar__end [part="toggler"]');
      expect(endToggler).not.toBeNull();
    });
  });

  describe('Error Handling', () => {
    it('throws error for invalid appearance', async () => {
      await checkSpecPageError(
        TnwNavbar,
        `<tnw-navbar appearance="invalid"></tnw-navbar>`,
        'Invalid prop value for "appearance"'
      );
    });

    it('throws error for invalid appearance color', async () => {
      await checkSpecPageError(
        TnwNavbar,
        `<tnw-navbar appearance-color="invalid"></tnw-navbar>`,
        'Invalid prop value for "appearanceColor"'
      );
    });
  });
});