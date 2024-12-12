import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwButton } from '../tnw-button';

describe('tnw-button', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required label prop', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="Click Me"></tnw-button>`
      );
      expect(host).toMatchSnapshot();
    });

    it('uses default values for optional props when not provided', async () => {
      const button = await createSpecPage(
        TnwButton,
        `<tnw-button label="Default Button"></tnw-button>`,
      );
      expect(button).toHaveClasses([
        'tnw-extended-v-solid-primary',
        'rounded-default',
        'tnw-button--md',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with custom size class', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="Large Button" size="lg"></tnw-button>`,
      );
      expect(host).toHaveClass('tnw-button--lg');
    });

    it('renders with custom appearance and variant', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="Secondary Button" appearance="outlined" variant="secondary"></tnw-button>`,
      );
      expect(host).toHaveClass('tnw-extended-v-outlined-secondary');
    });

    it('renders as a link when href is provided', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="Link Button" href="https://example.com"></tnw-button>`,
        'a'
      );
      expect(host.tagName).toBe('A');
      expect(host.getAttribute('href')).toBe('https://example.com');
    });

    it('renders with correct target and rel attributes when newTab is true', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="New Tab Button" href="https://example.com" new-tab></tnw-button>`,
        'a'
      );
      expect(host.getAttribute('target')).toBe('_blank');
      expect(host.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('renders slot content when label is not provided', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button href="https://example.com"><span>Slot Content</span></tnw-button>`
      );
      expect(host).toMatchSnapshot();
    });

    it('renders with custom borderRadius class', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="Rounded Button" border-radius="circle"></tnw-button>`,
      );
      expect(host).toHaveClass('rounded-circle');
    });

    it('renders with hover appearance and variant classes', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="Hover Button" hover-appearance="solid" hover-variant="primary"></tnw-button>`,
      );
      expect(host).toHaveClass('tnw-button--hover-solid-primary');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid size is provided', async () => {
      await checkSpecPageError(
        TnwButton,
        `<tnw-button label="Invalid Size" size="invalidSize"></tnw-button>`,
        'Invalid prop value for "size"'
      );
    });

    it('throws an error when an invalid appearance is provided', async () => {
      await checkSpecPageError(
        TnwButton,
        `<tnw-button label="Invalid Appearance" appearance="invalidAppearance"></tnw-button>`,
        'Invalid prop value for "appearance"'
      );
    });

    it('throws an error when an unsupported borderRadius value is provided', async () => {
      await checkSpecPageError(
        TnwButton,
        `<tnw-button label="Invalid Border Radius" border-radius="invalidValue"></tnw-button>`,
        'Invalid prop value for "borderRadius"'
      );
    });
  });

  describe('Accessibility and Slot Behavior', () => {
    it('sets aria-disabled when disabled is true', async () => {
      const host = await createSpecPage(
        TnwButton,
        `<tnw-button label="Disabled Button" href="https://example.com" disabled></tnw-button>`,
        'a'
      );
      expect(host.getAttribute('aria-disabled')).toBe('true');
    });

    it('adds disabled attribute for button elements when disabled is true', async () => {
      const button = await createSpecPage(
        TnwButton,
        `<tnw-button label="Disabled Button" disabled label="Disabled Button"></tnw-button>`,
        'button'
      );
      expect(button.getAttribute('disabled')).not.toBe('false');
    });
  });
});