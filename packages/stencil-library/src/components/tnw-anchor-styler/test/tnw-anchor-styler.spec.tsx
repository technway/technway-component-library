import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwAnchorStyler } from '../tnw-anchor-styler';

describe('tnw-anchor-styler', () => {
  describe('Custom Prop Behavior', () => {
    it('renders correctly with required href and text', async () => {
      const host = await createSpecPage(
        TnwAnchorStyler,
        `<tnw-anchor-styler></tnw-anchor-styler>`
      );
      expect(host).toMatchSnapshot();
    });

    it('renders with a custom color class', async () => {
      const wrapper = await createSpecPage(
        TnwAnchorStyler,
        `<tnw-anchor-styler color="primary"></tnw-anchor-styler>`,
        `.tnw-anchor-styler__wrapper`
      );
      expect(wrapper).toHaveClass('color-primary');
    });

    it('renders with a custom size class', async () => {
      const wrapper = await createSpecPage(
        TnwAnchorStyler,
        `<tnw-anchor-styler size="lg"></tnw-anchor-styler>`,
        '.tnw-anchor-styler__wrapper'
      );
      expect(wrapper).toHaveClass('fs-lg');
    });

    it('renders with a custom textDecoration class', async () => {
      const host = await createSpecPage(
        TnwAnchorStyler,
        `<tnw-anchor-styler text-decoration="none"></tnw-anchor-styler>`
      );
      expect(host).toHaveClass('tnw-anchor-styler--none');
    });

    it('does not render new tab icon when enableNewTabIcon is false', async () => {
      const host = await createSpecPage(
        TnwAnchorStyler,
        `<tnw-anchor-styler enable-new-tab-icon="false"></tnw-anchor-styler>`
      );
      expect(host.querySelector('.tnw-anchor-styler__newTab-icon')).toBeNull();
    });

    it('renders with a new tab icon when enableNewTabIcon is true', async () => {
      const icon = await createSpecPage(
        TnwAnchorStyler,
        `<tnw-anchor-styler enable-new-tab-icon="true"></tnw-anchor-styler>`,
        'tnw-icon'
      );
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBe('tnw-arrow-up-right');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid color is provided', async () => {
      await checkSpecPageError(
        TnwAnchorStyler,
        `<tnw-anchor-styler color="invalidColor"></tnw-anchor-styler>`,
        'Invalid prop value for "color"'
      );
    });

    it('throws an error when an invalid textDecoration is provided', async () => {
      await checkSpecPageError(
        TnwAnchorStyler,
        `<tnw-anchor-styler text-decoration="invalidValue"></tnw-anchor-styler>`,
        'Invalid prop value for "textDecoration"'
      );
    });
  });
});
