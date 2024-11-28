import { createSpecPage } from '../../../../utils/testing-utils';
import { TnwNavbarDropdownMenu } from '../tnw-navbar-dropdown-menu';
import { state as navbarState } from '../../../../stores/navbar-store';

describe('tnw-navbar-dropdown-menu', () => {
  const mockItemsData = JSON.stringify([
    { label: 'Item 1', link: '/item1', newTab: false },
    { label: 'Item 2', link: '/item2', newTab: true },
  ]);

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwNavbarDropdownMenu, `<tnw-navbar-dropdown-menu items-data='${mockItemsData}'></tnw-navbar-dropdown-menu>`);
      expect(el).toMatchSnapshot();
    });

    it('renders items from itemsData', async () => {
      const el = await createSpecPage(TnwNavbarDropdownMenu, `<tnw-navbar-dropdown-menu items-data='${mockItemsData}'></tnw-navbar-dropdown-menu>`);
      const items = el.shadowRoot?.querySelectorAll('li');
      expect(items?.length).toBe(2);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct breakpoint class based on navbarState', async () => {
      navbarState.hideBelowBreakpoint = '767';
      const el = await createSpecPage(TnwNavbarDropdownMenu, `<tnw-navbar-dropdown-menu items-data='${mockItemsData}'></tnw-navbar-dropdown-menu>`);
      const host = el.shadowRoot?.host;
      expect(host).toHaveClass('tnw-navbar-dropdown-menu--bp-767');
    });

    it('renders the correct `tnw-anchor` attributes for each item', async () => {
      const el = await createSpecPage(TnwNavbarDropdownMenu, `<tnw-navbar-dropdown-menu items-data='${mockItemsData}'></tnw-navbar-dropdown-menu>`);
      const anchors = el.shadowRoot?.querySelectorAll('tnw-anchor');
      expect(anchors?.[0]?.getAttribute('href')).toBe('/item1');
      expect(anchors?.[1]?.getAttribute('newTab')).not.toBeNull;
    });
  });

  // describe('Error Handling and Edge Cases', () => {
  //   it('throws an error when itemsData prop is missing', async () => {
  //     await checkError(TnwNavbarDropdownMenu, `<tnw-navbar-dropdown-menu></tnw-navbar-dropdown-menu>`, 'Required prop "itemsData"');
  //   });
  // });
});