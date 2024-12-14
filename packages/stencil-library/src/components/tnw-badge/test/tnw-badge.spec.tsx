import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwBadge } from '../tnw-badge';

describe('tnw-badge', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Default Badge"></tnw-badge>`
      );
      expect(host).toMatchSnapshot();
    });

    it('renders with default values for optional props when not provided', async () => {
      const host = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Default Badge"></tnw-badge>`,
      );
      expect(host).toHaveClasses([
        'tnw-badge',
        'tnw-badge--sm',
        'rounded-lg',
        'tnw-extended-v-outlined-auto',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom size class', async () => {
      const host = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Large Badge" size="lg"></tnw-badge>`,
      );
      expect(host).toHaveClass('tnw-badge--lg');
    });

    it('renders with a custom border radius class', async () => {
      const host = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Rounded Badge" border-radius="circle"></tnw-badge>`,
      );
      expect(host).toHaveClass('rounded-circle');
    });

    it('renders correct label', async () => {
      const host = await createSpecPage(TnwBadge, `<tnw-badge label="Badge"></tnw-badge>`);
      expect(host?.shadowRoot?.textContent).toEqualText('Badge');
    });

    it('renders with a custom variant and appearance', async () => {
      const host = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Custom Badge" variant="success" appearance="solid"></tnw-badge>`,
      );
      expect(host).toHaveClass('tnw-extended-v-solid-success');
    });

    it('renders slot content when label is not provided', async () => {
      const host = await createSpecPage(
        TnwBadge,
        `<tnw-badge><span>Custom Slot Content</span></tnw-badge>`
      );
      expect(host).toMatchSnapshot();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid size is provided', async () => {
      await checkSpecPageError(
        TnwBadge,
        `<tnw-badge label="Invalid Size" size="invalidSize"></tnw-badge>`,
        'Invalid prop value for "size"'
      );
    });

    it('throws an error when an invalid border radius is provided', async () => {
      await checkSpecPageError(
        TnwBadge,
        `<tnw-badge label="Invalid Border Radius" border-radius="invalidValue"></tnw-badge>`,
        'Invalid prop value for "borderRadius"'
      );
    });

    it('throws an error when an invalid variant is provided', async () => {
      await checkSpecPageError(
        TnwBadge,
        `<tnw-badge label="Invalid Variant" variant="invalidVariant"></tnw-badge>`,
        'Invalid prop value for "variant"'
      );
    });

    it('throws an error when an invalid appearance is provided', async () => {
      await checkSpecPageError(
        TnwBadge,
        `<tnw-badge label="Invalid Appearance" appearance="invalidAppearance"></tnw-badge>`,
        'Invalid prop value for "appearance"'
      );
    });
  });
});
