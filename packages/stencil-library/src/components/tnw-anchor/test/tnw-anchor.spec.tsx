import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwAnchor } from '../tnw-anchor';

describe('tnw-anchor', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required href and text', async () => {
      const el = await createSpecPage(TnwAnchor, `<tnw-anchor href="https://example.com" text="Example"></tnw-anchor>`);
      expect(el).toMatchSnapshot();
    });

    it('uses text as aria-label when labelAria prop is not provided', async () => {
      const el = await createSpecPage(TnwAnchor, `<tnw-anchor href="https://example.com" text="Accessible Link"></tnw-anchor>`, 'a');
      expect(el.getAttribute('aria-label')).toBe('Accessible Link');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('opens the link in a new tab when newTab is true', async () => {
      const el = await createSpecPage(TnwAnchor, `<tnw-anchor href="https://example.com" text="Open in new tab" new-tab></tnw-anchor>`, 'a');
      expect(el.getAttribute('target')).toBe('_blank');
      expect(el.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('applies "decoration-underline" class when textDecoration is set to "underline"', async () => {
      const el = await createSpecPage(TnwAnchor, `<tnw-anchor href="https://example.com" text="Underline" text-decoration="underline"></tnw-anchor>`, 'a');
      expect(el).toHaveClass('tnw-anchor--underline');
    });

    it('applies "color-primary" class when color prop is set to "primary"', async () => {
      const el = await createSpecPage(TnwAnchor, `<tnw-anchor href="https://example.com" text="Primary Color" color="primary"></tnw-anchor>`, 'a');
      expect(el).toHaveClass('color-primary');
    });

    it('renders with slot content when text prop is not provided', async () => {
      const el = await createSpecPage(TnwAnchor, `<tnw-anchor href="https://example.com"><span>Custom Content</span></tnw-anchor>`);
      expect(el).toMatchSnapshot();
    });

    it('does not render new tab icon when hideNewTabIcon is true', async () => {
      const el = await createSpecPage(TnwAnchor, `<tnw-anchor href="https://example.com" new-tab hide-new-tab-icon></tnw-anchor>`);
      expect(el.querySelector('.tnw-anchor__newTab-icon')).toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the required href prop is not provided', async () => {
      await checkError(TnwAnchor, `<tnw-anchor></tnw-anchor>`, 'Required prop "href"');
    });

    it('throws an error when an invalid color prop is provided', async () => {
      await checkError(TnwAnchor, `<tnw-anchor href="https://example.com" color="invalidColor"></tnw-anchor>`, 'Invalid prop value for "color"');
    });
  });
});
