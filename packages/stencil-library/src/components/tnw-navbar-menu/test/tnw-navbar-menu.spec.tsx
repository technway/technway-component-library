import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwNavbarMenu } from '../tnw-navbar-menu';
// import * as navbarStore from '../../../stores/navbar-store';

describe('TnwNavbarMenu', () => {
  // let windowSpy: jest.SpyInstance;
  // let navbarState: typeof navbarStore.state;

  // beforeEach(() => {
  //   navbarState = { ...navbarStore.state };
  //   windowSpy = jest.spyOn(window, 'innerWidth', 'get').mockReturnValue(800);
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  describe('Default Behavior', () => {
    it('renders correctly with default props', async () => {
      const itemsData = JSON.stringify([
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' }
      ]);

      const el = await createSpecPage(TnwNavbarMenu, `<tnw-navbar-menu items-data='${itemsData}'></tnw-navbar-menu>`);
      expect(el).toMatchSnapshot();
    });

    it('parses and renders the correct menu items from itemsData', async () => {
      const itemsData = JSON.stringify([
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' }
      ]);

      const el = await createSpecPage(TnwNavbarMenu, `<tnw-navbar-menu items-data='${itemsData}'></tnw-navbar-menu>`);
      const items = el.shadowRoot?.querySelectorAll('li');

      expect(items?.length).toBe(2);
      expect(items[0]?.textContent).toContain('Home');
      expect(items[1]?.textContent).toContain('About');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies the correct `hideBelowBreakpoint` class', async () => {
      const el = await createSpecPage(TnwNavbarMenu, `<tnw-navbar-menu items-data='[]' hide-below-breakpoint="1024"></tnw-navbar-menu>`);
      expect(el?.classList.contains('tnw-navbar-menu--hideBelow-1024')).toBe(true);
    });

    it('applies the correct item hover appearance and variant', async () => {
      const itemsData = JSON.stringify([
        { label: 'Home', link: '/' }
      ]);

      const el = await createSpecPage(TnwNavbarMenu, `
        <tnw-navbar-menu items-data='${itemsData}' items-hover-appearance="outlined" items-hover-variant="secondary"></tnw-navbar-menu>
      `);
      const item = el.shadowRoot?.querySelector('li');

      expect(item?.classList.contains('tnw-navbar-menu__item--outlined-secondary')).toBe(true);
    });

    it('applies the correct border radius to the menu items', async () => {
      const itemsData = JSON.stringify([
        { label: 'Home', link: '/' }
      ]);

      const el = await createSpecPage(TnwNavbarMenu, `
        <tnw-navbar-menu items-data='${itemsData}' items-hover-appearance="solid" items-border-radius="lg"></tnw-navbar-menu>
      `);
      const item = el.shadowRoot?.querySelector('li');

      expect(item).toHaveClass('rounded-lg');
    });
  });

  // describe('Menu Toggle Logic', () => {
  //   it('toggles the menu correctly based on navbarState.isMenuOpened', async () => {
  //     navbarState.isMenuOpened = true;

  //     const el = await createSpecPage(TnwNavbarMenu, `<tnw-navbar-menu items-data='[]'></tnw-navbar-menu>`);
  //     const host = el.shadowRoot?.host;

  //     expect(host?.classList.contains('tnw-navbar-menu--opened')).toBe(true);

  //     navbarState.isMenuOpened = false;

  //     await el.waitForChanges();  // Wait for state changes to reflect in the DOM
  //     expect(host?.classList.contains('tnw-navbar-menu--opened')).toBe(false);
  //   });
  // });

  describe('Submenu Behavior', () => {
    it('renders submenu when submenu items are provided', async () => {
      const itemsData = JSON.stringify([
        {
          label: 'Home',
          link: '/',
          subMenu: [
            { label: 'Sub Item 1', link: '/sub1' },
            { label: 'Sub Item 2', link: '/sub2' }
          ]
        }
      ]);

      const el = await createSpecPage(TnwNavbarMenu, `<tnw-navbar-menu items-data='${itemsData}'></tnw-navbar-menu>`);
      const subMenuItems = el.shadowRoot?.querySelectorAll('tnw-navbar-dropdown-menu');

      expect(subMenuItems?.length).toBe(1);
    });
  });

  describe('Error Handling', () => {
    it('throws an error when `itemsData` is not provided', async () => {
      await checkSpecPageError(TnwNavbarMenu, `<tnw-navbar-menu></tnw-navbar-menu>`, 'Required prop "itemsData"');
    });
  });
});
