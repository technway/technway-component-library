import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwAnchor } from '../tnw-anchor';

describe('tnw-anchor', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required href and text', async () => {
      const host = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Example"></tnw-anchor>`
      );
      expect(host).toMatchSnapshot();
    });

    it('uses text as aria-label when labelAria prop is not provided', async () => {
      const host = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Accessible Link"></tnw-anchor>`,
        'a'
      );
      expect(host.getAttribute('aria-label')).toBe('Accessible Link');
    });

    it('renders with default values for optional props when not provided', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com"></tnw-anchor>`,
        'a'
      );
      expect(anchor).toHaveClasses([
        'tnw-anchor',
        'tnw-anchor--underline',
        'color-auto',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with custom text content', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Custom Text"></tnw-anchor>`,
        'a'
      );
      expect(anchor.textContent).toBe('Custom Text');
    });

    it('renders with target and rel attributes when newTab is true', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Open in new tab" new-tab></tnw-anchor>`,
        'a'
      );
      expect(anchor.getAttribute('target')).toBe('_blank');
      expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('renders with a custom color class', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Primary Color" color="primary"></tnw-anchor>`,
        'a'
      );
      expect(anchor).toHaveClass('color-primary');
    });

    it('renders with a custom size class', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Large Text" size="lg"></tnw-anchor>`,
        'a'
      );
      expect(anchor).toHaveClass('fs-lg');
    });

    it('renders with a custom textDecoration class', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="No Underline" text-decoration="none"></tnw-anchor>`,
        'a'
      );
      expect(anchor).toHaveClass('tnw-anchor--none');
    });

    it('renders with slot content when text prop is not provided', async () => {
      const host = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com"><span>Custom Content</span></tnw-anchor>`
      );
      expect(host).toMatchSnapshot();
    });

    it('does not render new tab icon when hideNewTabIcon is true', async () => {
      const host = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" new-tab hide-new-tab-icon></tnw-anchor>`
      );
      expect(host.querySelector('.tnw-anchor__newTab-icon')).toBeNull();
    });

    it('renders with a new tab icon when newTab is true', async () => {
      const icon = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Open in New Tab" new-tab></tnw-anchor>`,
        'tnw-icon'
      );
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('name')).toBe('tnw-arrow-up-right');
    });

    it('does not render a new tab icon when hideNewTabIcon is true', async () => {
      const icon = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="No Icon" new-tab hide-new-tab-icon></tnw-anchor>`,
        'tnw-icon'
      );
      expect(icon).toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when href prop is missing', async () => {
      await checkSpecPageError(
        TnwAnchor,
        `<tnw-anchor text="Missing href"></tnw-anchor>`,
        'Required prop "href"'
      );
    });

    it('throws an error when an invalid color is provided', async () => {
      await checkSpecPageError(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" color="invalidColor"></tnw-anchor>`,
        'Invalid prop value for "color"'
      );
    });

    it('throws an error when an invalid textDecoration is provided', async () => {
      await checkSpecPageError(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text-decoration="invalidValue"></tnw-anchor>`,
        'Invalid prop value for "textDecoration"'
      );
    });
  });

  describe('Accessibility and Slot Behavior', () => {
    it('uses the text prop as the aria-label when labelAria is not provided', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Accessible Link"></tnw-anchor>`,
        'a'
      );
      expect(anchor.getAttribute('aria-label')).toBe('Accessible Link');
    });

    it('renders slot content when text is not provided', async () => {
      const slottedContent = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com"><span>Slotted Content</span></tnw-anchor>`,
        'span',
        false
      );
      expect(slottedContent).toBeTruthy();
      expect(slottedContent.textContent).toBe('Slotted Content');
    });

    it('prioritizes labelAria over text for aria-label', async () => {
      const anchor = await createSpecPage(
        TnwAnchor,
        `<tnw-anchor href="https://example.com" text="Default Text" label-aria="Custom Label"></tnw-anchor>`,
        'a'
      );
      expect(anchor.getAttribute('aria-label')).toBe('Custom Label');
    });
  });
});
