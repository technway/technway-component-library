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
          html: `<tnw-navbar menu-placement="${placement}" menu-data='{"menuItems":[{"label":"Home","link":"/"}]}' hide-menu-below="1024"></tnw-navbar>`
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

    it('renders custom link slots when enableLinkSlot is true', async () => {
      const host = await createSpecPage(
        TnwNavbar,
        `<tnw-navbar enable-link-slot links-length="2">
            <a slot="link-1" href="/">Custom Link 1</a>
            <a slot="link-2" href="/about">Custom Link 2</a>
        </tnw-navbar>`
      ) as HTMLTnwNavbarElement;
      const link1 = queryElement(host, '[slot="link-1"]', false);
      const link2 = queryElement(host, '[slot="link-2"]', false);

      expect(link1).not.toBeNull();
      expect(link2).not.toBeNull();
      expect(link1?.getAttribute('href')).toBe('/');
      expect(link2?.getAttribute('href')).toBe('/about');
    });

    // it('limits custom link slots to the specified linksLength', async () => {
    //   const host = await createSpecPage(
    //     TnwNavbar,
    //     `<tnw-navbar enable-link-slot links-length="2">
    //       <a slot="link-1" href="/">Link 1</a>
    //       <a slot="link-2" href="/about">Link 2</a>
    //       <a slot="link-3" href="/contact">Link 3</a>
    //     </tnw-navbar>`
    //   ) as HTMLTnwNavbarElement;

    //   // Query elements for link slots
    //   const link1 = queryElement(host, '[slot="link-1"]', false);
    //   const link2 = queryElement(host, '[slot="link-2"]', false);
    //   const link3 = queryElement(host, '[slot="link-3"]', false);

    //   // Assertions
    //   expect(link1).not.toBeNull(); // Slot for link-1 should exist
    //   expect(link2).not.toBeNull(); // Slot for link-2 should exist
    //   expect(link3).toBeNull(); // Slot for link-3 should not exist as linksLength is 2
    // });

    it('hides the menu below the specified breakpoint', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='{"menuItems":[{"label":"Home","link":"/"}]}' hide-menu-below="1024"></tnw-navbar>`,
      });
      const component = page.rootInstance as TnwNavbar;

      const spyEvent = jest.fn();
      component.tnwMenuVisibilityChange  = { emit: spyEvent };

      window.innerWidth = 600; // Simulate window resize
      window.dispatchEvent(new Event('resize'));
      await page.waitForChanges();

      expect(component.hideMenuBelow).toBe('1024');
      expect(component.isHidden).toBe(true);
      expect(spyEvent).toHaveBeenCalledWith({ isMenuHidden: true, windowWidth: 600 });
    });

    it('does not hide the menu when hideMenuBelow is false', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='{"menuItems":[{"label":"Home","link":"/"}]}' hide-menu-below="false"></tnw-navbar>`,
      });
      const component = page.rootInstance as TnwNavbar;
      console.log(page.root.outerHTML)
      window.innerWidth = 1023;
      window.dispatchEvent(new Event('resize'));
      await page.waitForChanges();

      expect(component.isHidden).toBe(false); // Menu should remain visible
    });

    it('centers the menu exactly in the middle when menuExactCenter is true', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-placement="middle" menu-exact-center="true" menu-data='{"menuItems":[{"label":"Home","link":"/"}]}'></tnw-navbar>`,
      });

      const menuContainer = page.root.shadowRoot?.querySelector('.tnw-navbar__middle--exact-center');
      expect(menuContainer).not.toBeNull();
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
    it('does not enable menu slot when prop is set but menuData is provided', async () => {
      const host = await createSpecPage(
        TnwNavbar,
        `
        <tnw-navbar
          enable-menu-slot
          menu-data='{"menuItems":[{"label":"Home","link":"/"}], "menuPlacement":"middle", "itemsSize":"sm", "itemsColor":"auto"}'
          hide-menu-below="1024"
        >
          <span slot="menu">Menu</span>
        </tnw-navbar>`
      ) as HTMLTnwNavbarElement;

      const slot = queryElement(host, 'slot[name="menu"]');
      const menuElement = queryElement(host, 'ul');
      expect(slot).toBeNull();
      expect(menuElement).not.toBeNull();
    });

    it('enables menu slot when prop is set and menuData is not set', async () => {
      const host = await createSpecPage(
        TnwNavbar,
        `
        <tnw-navbar
          enable-menu-slot
        >
          <span slot="menu">Menu</span>
        </tnw-navbar>`,
      ) as HTMLTnwNavbarElement;

      const slot = queryElement(host, 'slot[name="menu"]');
      const slotContent = queryElement(host, '[slot="menu"]', false);
      const menuElement = queryElement(host, 'ul');
      expect(slot).not.toBeNull();
      expect(slotContent).not.toBeNull();
      expect(menuElement).toBeNull();
    });

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
          menu-data='{"menuItems":[{"label":"Home","link":"/"}], "menuPlacement":"start", "itemsSize":"sm", "itemsColor":"auto"}'
          menu-placement="start"
          hide-menu-below="1024"
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
          menu-data='{"menuItems":[{"label":"Home","link":"/"}], "menuPlacement":"middle", "itemsSize":"sm", "itemsColor":"auto"}' 
          menu-placement="middle"
          hide-menu-below="1024"
        >
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
          menu-data='{"menuItems":[{"label":"Home","link":"/"}], "menuPlacement":"end", "itemsSize":"sm", "itemsColor":"auto"}' 
          menu-placement="end"
          hide-menu-below="1024"
        >
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
        html: `<tnw-navbar menu-data='{"menuItems":[{"label":"Home","link":"/"}]}' hide-menu-below="1024">`,
      });

      const toggler = page.root.shadowRoot?.querySelector('[part="toggler"]');
      expect(toggler).not.toBeNull();
      expect(toggler?.getAttribute('aria-label')).toBe('Toggle Navbar Menu');
    });

    it('does not render toggler when no menu items and enable-links-slot is not enabled', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='{"menuItems":[]} enable-link-slot="false"' hide-menu-below="1024">`,
      });

      const toggler = page.root.shadowRoot?.querySelector('[part="toggler"]');
      expect(toggler).toBeNull();
    });

    it('toggles menu visibility when toggler is clicked', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar menu-data='{"menuItems":[{"label":"Home","link":"/"}]}' hide-menu-below="1024">`,
      });

      const component = page.rootInstance as TnwNavbar;
      const toggler = page.root.shadowRoot?.querySelector('[part="toggler"]') as HTMLElement;

      // Initial state
      expect(component.isOpen).toBe(false);

      // Simulate click to open menu
      toggler?.dispatchEvent(new Event('click'));
      await page.waitForChanges();

      expect(component.isOpen).toBe(true);

      // Simulate click to close menu
      toggler?.dispatchEvent(new Event('click'));
      await page.waitForChanges();

      expect(component.isOpen).toBe(false);
    });

    it('renders toggler at start when placement is set to start', async () => {
      const toggler = await createSpecPage(
        TnwNavbar,
        `<tnw-navbar toggler-placement="start" menu-data='{"menuItems":[{"label":"Home","link":"/"}]}' hide-menu-below="1024">`,
        '.tnw-navbar__start [part="toggler"]'
      );

      expect(toggler).not.toBeNull();
    });

    it('renders toggler at end when placement is set to end', async () => {
      const page = await newSpecPage({
        components: [TnwNavbar],
        html: `<tnw-navbar toggler-placement="end" menu-data='{"menuItems":[{"label":"Home","link":"/"}]}' hide-menu-below="1024">`,
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