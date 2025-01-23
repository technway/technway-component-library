import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
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
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Default Badge"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClasses([
        'tnw-badge',
        'tnw-badge--padding-sm',
        'rounded-lg',
        'tnw-extended-v-outlined-auto',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom size class for textual variant', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Large Badge" size="lg" variant="textual"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClass('tnw-badge--padding-lg');
    });

    it('renders with a custom size class for numeric variant', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="5" size="lg" variant="numeric"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClass('tnw-badge--numeric-size-lg');
    });

    it('renders with a custom size class for image variant', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Large Badge" size="lg" variant="image"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClass('tnw-badge--image-size-lg');
    });

    it('renders with a custom size class for status textual', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Large Badge" size="lg" variant="status"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClass('tnw-badge--status-size-lg');
    });

    it('renders with a custom border radius class', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Rounded Badge" border-radius="circle"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClass('rounded-circle');
    });

    it('renders correct label', async () => {
      const badge = await createSpecPage(TnwBadge, `<tnw-badge label="Badge"></tnw-badge>`, 'div');
      expect(badge?.textContent).toEqualText('Badge');
    });

    it('does not render slot and label if onlyColor is enabled', async () => {
      const badge = await createSpecPage(TnwBadge, `<tnw-badge label="Badge"></tnw-badge>`, 'div');
      expect(badge?.textContent?.trim()).toEqualText('Badge');
    });

    it('renders with a custom appearance color and appearance', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Custom Badge" appearance-color="success" appearance="solid"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClass('tnw-extended-v-solid-success');
    });

    it('renders slot content when label is not provided', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge><span>Custom Slot Content</span></tnw-badge>`,
        'div'
      );
      expect(badge).toMatchSnapshot();
    });

    it('renders with a custom size class', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge label="Large Badge" size="lg"></tnw-badge>`,
        'div'
      );
      expect(badge).toHaveClass('tnw-badge--padding-lg');
    });

    it('renders with a numerical label capped at 99+', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge variant="numeric" label="150"></tnw-badge>`,
        'div'
      );
      expect(badge?.textContent?.trim()).toBe('99+');
    });

    it('renders an image when variant is set to "image" with imageSrc', async () => {
      const badge = await createSpecPage(
        TnwBadge,
        `<tnw-badge variant="image" image-src="example.jpg"></tnw-badge>`,
        'div'
      );
      const style = badge.getAttribute('style');
      expect(style).toContain('background-image: url(example.jpg)');
    });

    it('renders custom content from slot when label is not provided', async () => {
      const host = await createSpecPage(
        TnwBadge,
        `<tnw-badge><span>Custom Content</span></tnw-badge>`
      ) as HTMLTnwBadgeElement;
      const slot = queryElement(host, 'slot');
      const slotContent = queryElement(host, 'span', false);
      expect(slot).toBeTruthy();
      expect(slotContent).toBeTruthy();
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

    it('throws an error when an invalid appearance color is provided', async () => {
      await checkSpecPageError(
        TnwBadge,
        `<tnw-badge label="Invalid Variant" appearance-color="invalid color"></tnw-badge>`,
        'Invalid prop value for "appearanceColor"'
      );
    });

    it('throws an error when an invalid appearance is provided', async () => {
      await checkSpecPageError(
        TnwBadge,
        `<tnw-badge label="Invalid Appearance" appearance="invalidAppearance"></tnw-badge>`,
        'Invalid prop value for "appearance"'
      );
    });

    it('throws an error when a non-number value is provided as a label for the numeric variant', async () => {
      await checkSpecPageError(
        TnwBadge,
        `<tnw-badge label="Invalid Number" variant="numeric"></tnw-badge>`,
        'Invalid value for "label" prop: expected a numeric string or number.'
      );
    });
  });
});
