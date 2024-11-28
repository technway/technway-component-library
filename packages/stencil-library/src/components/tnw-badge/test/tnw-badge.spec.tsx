import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwBadge } from '../tnw-badge';

describe('tnw-badge', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with label', async () => {
      const el = await createSpecPage(TnwBadge, `<tnw-badge label="New"></tnw-badge>`);
      expect(el).toMatchSnapshot();
    });

    it('renders with slot content when label is not provided', async () => {
      const el = await createSpecPage(TnwBadge, `<tnw-badge><span>Custom Content</span></tnw-badge>`);
      expect(el).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('displays correct label', async () => {
      const el = await createSpecPage(TnwBadge, `<tnw-badge label="Badge"></tnw-badge>`);
      expect(el?.shadowRoot?.textContent).toEqualText('Badge');
    });

    it('applies correct class when size prop is set', async () => {
      const el = await createSpecPage(TnwBadge, `<tnw-badge label="Badge" size="md"></tnw-badge>`);
      expect(el).toHaveClass('tnw-badge--md');
    });

    it('applies correct class when variant prop is set to "primary"', async () => {
      const el = await createSpecPage(TnwBadge, `<tnw-badge label="Primary Badge" variant="primary"></tnw-badge>`);
      expect(el).toHaveClass('tnw-extended-v-outlined-primary');
    });

    it('applies correct class when appearance is set to "solid"', async () => {
      const el = await createSpecPage(TnwBadge, `<tnw-badge label="Solid Badge" appearance="solid"></tnw-badge>`);
      expect(el).toHaveClass('tnw-extended-v-solid-auto');
    });

    it('applies correct class when borderRadius prop is set', async () => {
      const el = await createSpecPage(TnwBadge, `<tnw-badge label="Rounded Badge" border-radius="circle"></tnw-badge>`);
      expect(el).toHaveClass('rounded-circle');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid size prop is provided', async () => {
      await checkError(TnwBadge, `<tnw-badge label="Invalid Size" size="invalidSize"></tnw-badge>`, 'Invalid prop value for "size"');
    });

    it('throws an error when an invalid variant prop is provided', async () => {
      await checkError(TnwBadge, `<tnw-badge label="Invalid Variant" variant="invalidVariant"></tnw-badge>`, 'Invalid prop value for "variant"');
    });
  });
});
