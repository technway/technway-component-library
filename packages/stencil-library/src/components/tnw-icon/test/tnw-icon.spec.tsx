import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwIcon } from '../tnw-icon';

describe('tnw-icon', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="home"></tnw-icon>`);
      expect(el).toMatchSnapshot();
    });

    it('renders as an SVG icon when `enableSvg` is set to true', async () => {
      const el = await createSpecPage(TnwIcon, `
        <tnw-icon enable-svg label-aria="home">
          <svg slot="svg">...</svg>
        </tnw-icon>
      `);
      expect(el.shadowRoot?.querySelector('slot[name="svg"]')).not.toBeNull();
    });

    it('uses `name` as the default `aria-label` if `labelAria` is not provided', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="home"></tnw-icon>`);
      const icon = el.shadowRoot?.querySelector('i');
      expect(icon?.getAttribute('aria-label')).toBe('home');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `appearance` and `variant` classes when set', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="check" appearance="solid" variant="primary"></tnw-icon>`);
      expect(el).toHaveClass('tnw-extended-v-solid-primary');
    });

    it('applies correct `size` class when size prop is set', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="check" size="lg"></tnw-icon>`);
      expect(el).toHaveClass('tnw-icon--font-lg');
    });

    it('applies correct `color` class when color prop is set', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="check" color="primary"></tnw-icon>`);
      expect(el).toHaveClass('color-primary');
    });

    it('applies correct `borderRadius` class when borderRadius prop is set', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="check" border-radius="lg"></tnw-icon>`);
      expect(el).toHaveClass('rounded-lg');
    });

    it('applies `clickable` class when `isButton` is set to true', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="check" is-button="true"></tnw-icon>`);
      expect(el).toHaveClass('tnw-icon--clickable');
    });

    it('renders the tooltip when `tooltip` prop is provided', async () => {
      const el = await createSpecPage(TnwIcon, `<tnw-icon name="info" tooltip="Icon Tooltip"></tnw-icon>`);
      const icon = el.shadowRoot?.querySelector('i');
      expect(icon?.getAttribute('title')).toBe('Icon Tooltip');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error if `name` prop is missing and `enableSvg` is not true', async () => {
      await checkSpecPageError(TnwIcon, `<tnw-icon></tnw-icon>`, 'The "name" prop is required when the "enableSvg" prop is not provided.');
    });

    it('throws an error when an invalid `appearance` prop is provided', async () => {
      await checkSpecPageError(TnwIcon, `<tnw-icon name="home" appearance="invalid"></tnw-icon>`, 'Invalid prop value for "appearance"');
    });

    it('throws an error when an invalid `variant` prop is provided', async () => {
      await checkSpecPageError(TnwIcon, `<tnw-icon name="home" variant="invalid"></tnw-icon>`, 'Invalid prop value for "variant"');
    });
  });
});
