import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwList } from '../tnw-list';
import * as utils from '../../../utils/utils';

describe('tnw-list', () => {
  let parseJSONAsyncMock: jest.SpyInstance;

  // Mock data for different test cases
  const defaultListData = JSON.stringify([
    { text: 'Item 1' },
    { text: 'Item 2' }
  ]);

  const customListData = JSON.stringify([
    { text: 'Custom Item 1' },
    { text: 'Custom Item 2' }
  ]);

  const additionalListData = JSON.stringify([
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' }
  ]);

  const iconListData = JSON.stringify([
    { text: 'Item 1', icon: 'check' }
  ]);

  beforeEach(() => {
    parseJSONAsyncMock = jest.spyOn(utils, 'parseJSONAsync').mockResolvedValue(JSON.parse(defaultListData));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}'></tnw-list>`);
      expect(el).toMatchSnapshot();
      expect(parseJSONAsyncMock).toHaveBeenCalledWith(defaultListData);
    });

    it('renders the correct number of list items based on `listData`', async () => {
      parseJSONAsyncMock.mockResolvedValueOnce(JSON.parse(additionalListData));
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${additionalListData}'></tnw-list>`);
      const items = el.shadowRoot?.querySelectorAll('li');
      expect(items?.length).toBe(3);
    });

    it('renders list items with correct text content from `listData`', async () => {
      parseJSONAsyncMock.mockResolvedValueOnce(JSON.parse(customListData));
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${customListData}'></tnw-list>`);
      const items = el.shadowRoot?.querySelectorAll('li');
      expect(items?.[0]?.textContent?.trim()).toBe('Custom Item 1');
      expect(items?.[1]?.textContent?.trim()).toBe('Custom Item 2');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `markerType` class when markerType is set', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}' marker-type="square"></tnw-list>`, 'ul');
      expect(el).toHaveClass('tnw-list--square');
    });

    it('applies correct `markerPosition` class when markerPosition is set', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}' marker-position="outside"></tnw-list>`, 'ul');
      expect(el).toHaveClass('tnw-list--outside');
    });

    it('applies correct `color` class when color prop is set', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}' color="primary"></tnw-list>`);
      const item = el.shadowRoot?.querySelector('li');
      expect(item).toHaveClass('color-primary');
    });

    it('applies correct `size` class when size prop is set', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}' size="lg"></tnw-list>`);
      const item = el.shadowRoot?.querySelector('li');
      expect(item).toHaveClass('fs-lg');
    });

    it('applies correct `lineHeight` class when lineHeight is set', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}' line-height="1_5"></tnw-list>`);
      const item = el.shadowRoot?.querySelector('li');
      expect(item).toHaveClass('lh-1_5');
    });

    it('applies correct `weight` class when weight prop is set', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}' weight="700"></tnw-list>`);
      const item = el.shadowRoot?.querySelector('li');
      expect(item).toHaveClass('fw-700');
    });

    it('applies correct `textCase` class when textCase is set', async () => {
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${defaultListData}' text-case="uppercase"></tnw-list>`);
      const item = el.shadowRoot?.querySelector('li');
      expect(item).toHaveClass('uppercase');
    });

    it('renders icons in list items when `icon` is provided in `listData`', async () => {
      parseJSONAsyncMock.mockResolvedValueOnce(JSON.parse(iconListData));
      const el = await createSpecPage(TnwList, `<tnw-list list-data='${iconListData}'></tnw-list>`);
      const icon = el.shadowRoot?.querySelector('tnw-icon');
      expect(icon).not.toBeNull();
      expect(icon?.getAttribute('name')).toBe('check');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the `listData` prop is missing', async () => {
      await checkError(TnwList, `<tnw-list></tnw-list>`, 'Required prop "listData"');
    });

    it('throws an error when `listData` contains invalid JSON', async () => {
      parseJSONAsyncMock.mockRejectedValueOnce(new Error('Invalid JSON'));
      await checkError(TnwList, `<tnw-list list-data='invalid'></tnw-list>`, 'Invalid JSON in "listData"');
    });

    it('throws an error when an invalid `markerType` is provided', async () => {
      await checkError(TnwList, `<tnw-list list-data='${defaultListData}' marker-type="invalid"></tnw-list>`, 'Invalid prop value for "markerType"');
    });
  });
});
