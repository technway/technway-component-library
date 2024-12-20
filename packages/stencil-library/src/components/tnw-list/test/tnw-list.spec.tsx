import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwList } from '../tnw-list';
import { TnwListData } from '../utils/tnw-list-data-types';

describe('tnw-list', () => {
  const sampleListData: TnwListData = {
    listTag: "ul",
    markerType: "circle",
    items: [
      {
        text: "Introduction",
        iconName: "tnw-folder",
        url: "https://example.com/introduction",
        newTab: true,
        subList: {
          listTag: "ol",
          markerType: "decimal",
          items: [
            { text: "What is a list?" },
            { text: "How to use it" }
          ]
        }
      },
      {
        text: "Conclusion",
        iconName: "tnw-folder",
      }
    ]
  };

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with valid list data', async () => {
      const host = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}'></tnw-list>'`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default values for missing optional props', async () => {
      const listElement = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}'></tnw-list>'`,
        'ul'
      ) as HTMLUListElement;

      expect(listElement).toHaveClasses(['tnw-list--inside']);
    });

    it('renders an empty list without items', async () => {
      const emptyListData: TnwListData = { listTag: 'ul', items: [] };
      const host = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(emptyListData)}'></tnw-list>'`
      );
      const listItems = host.shadowRoot?.querySelectorAll('li');
      expect(listItems?.length).toBe(0);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies custom classes based on markerPosition prop', async () => {
      const listElement = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}' marker-position="outside"></tnw-list>'`,
        'ul'
      );
      expect(listElement).toHaveClass('tnw-list--outside');
    });

    it('applies typography classes correctly', async () => {
      const listElement = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}' size="lg" weight="700" line-height="2" text-case="uppercase"></tnw-list>'`,
        'ul'
      ) as HTMLUListElement;
      const listItem = queryElement(listElement, 'li');
      expect(listItem).toHaveClasses([
        'fs-lg',
        'fw-700',
        'lh-2',
        'uppercase'
      ]);
    });

    it('renders icons for list items', async () => {
      const host = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}'></tnw-list>'`
      );
      const icons = host.shadowRoot?.querySelectorAll('tnw-icon');
      expect(icons?.length).toBeGreaterThan(0);
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error for invalid JSON in listData', async () => {
      await checkSpecPageError(
        TnwList,
        `<tnw-list list-data="invalid-json"></tnw-list>'`,
        'Invalid JSON in `listData`'
      );
    });

    it('throws an error for unsupported markerPosition value', async () => {
      await checkSpecPageError(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}' marker-position="unsupported"></tnw-list>'`,
        'Invalid value for markerPosition'
      );
    });

    it('throws an error for unsupported size value', async () => {
      await checkSpecPageError(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}' size="invalid"></tnw-list>'`,
        'Invalid value for size'
      );
    });

    it('throws an error for unsupported weight value', async () => {
      await checkSpecPageError(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}' weight="invalid"></tnw-list>'`,
        'Invalid value for weight'
      );
    });

    it('throws an error for unsupported lineHeight value', async () => {
      await checkSpecPageError(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}' line-height="invalid"></tnw-list>'`,
        'Invalid value for lineHeight'
      );
    });

    it('throws an error for unsupported textCase value', async () => {
      await checkSpecPageError(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}' text-case="invalid"></tnw-list>'`,
        'Invalid value for textCase'
      );
    });
  });

  describe('Rendering Behavior', () => {
    it('renders nested lists correctly', async () => {
      const subList = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}'></tnw-list>`,
        `ol.tnw-list__sub-list`
      );
      expect(subList).not.toBeNull();
      expect(subList?.classList.contains('tnw-list__sub-list--decimal')).toBeTruthy();
    });

    it('renders list items with icons', async () => {
      const list = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(sampleListData)}'></tnw-list>`,
        `ul.tnw-list`
      ) as HTMLOListElement;
      const icon = queryElement(list, 'tnw-icon');
      expect(icon).not.toBeNull();
      expect(icon?.getAttribute('name')).toBe('tnw-folder');
    });

    it('renders list items with anchors when `url` is provided', async () => {
      const listDataWithLinks: TnwListData = {
        listTag: 'ul',
        items: [
          { text: 'Google', url: 'https://google.com' },
        ]
      };
      const host = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(listDataWithLinks)}'></tnw-list>`
      );
      const anchor = host.shadowRoot?.querySelector('tnw-anchor');
      expect(anchor).not.toBeNull();
      expect(anchor?.getAttribute('href')).toBe('https://google.com');
    });

    it('renders an empty list when `items` are missing', async () => {
      const mockListData: TnwListData = {
        listTag: "ul",
      };
      const list = await createSpecPage(
        TnwList,
        `<tnw-list list-data='${JSON.stringify(mockListData)}'></tnw-list>`,
        'ul'
      );
      expect(list).toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error for invalid `listData` JSON', async () => {
      await checkSpecPageError(
        TnwList,
        `<tnw-list list-data="invalid-json"></tnw-list>`,
        'Invalid JSON in `listData`'
      );
    });
  });
});