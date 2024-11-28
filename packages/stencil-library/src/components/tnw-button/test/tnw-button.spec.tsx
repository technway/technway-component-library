import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwButton } from '../tnw-button';

describe('tnw-button', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required label', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Click Me"></tnw-button>`);
      expect(el).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `type` when set to `submit`', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Submit Button" type="submit"></tnw-button>`);
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('type')).toBe('submit');
    });

    it('applies correct `variant` class when variant prop is set', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Secondary Button" variant="secondary"></tnw-button>`);
      expect(el).toHaveClass('tnw-extended-v-solid-secondary');
    });

    it('applies correct `appearance` class when appearance prop is set', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Outlined Button" appearance="outlined"></tnw-button>`);
      expect(el).toHaveClass('tnw-extended-v-outlined-primary');
    });

    it('applies correct `size` class when size prop is set', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Large Button" size="lg"></tnw-button>`);
      expect(el).toHaveClass('tnw-button--lg');
    });

    it('renders as an anchor element when `href` is provided', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Link Button" href="https://example.com"></tnw-button>`);
      const anchor = el.shadowRoot?.querySelector('a');
      expect(anchor).not.toBeNull();
      expect(anchor?.getAttribute('href')).toBe('https://example.com');
    });

    it('opens link in a new tab when `newTab` is true', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Link in New Tab" href="https://example.com" new-tab="true"></tnw-button>`);
      const anchor = el.shadowRoot?.querySelector('a');
      expect(anchor?.getAttribute('target')).toBe('_blank');
      expect(anchor?.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('applies `disabled` state correctly', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Disabled Button" disabled="true"></tnw-button>`);
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('disabled')).toBeDefined();
      expect(el).toHaveClass('tnw-button--disabled');
    });

    it('applies correct `borderRadius` when borderRadius prop is set', async () => {
      const el = await createSpecPage(TnwButton, `<tnw-button label="Rounded Button" border-radius="lg"></tnw-button>`);
      expect(el).toHaveClass('rounded-lg');
    });
  });

  describe('Slot Content and Icon Rendering', () => {
    it('renders icon-start and icon-end slots correctly', async () => {
      const el = await createSpecPage(TnwButton, `
        <tnw-button label="Button with Icons">
          <span slot="icon-start">IconStart</span>
          <span slot="icon-end">IconEnd</span>
        </tnw-button>
      `);
      expect(el).toMatchSnapshot();
      const iconStart = el.shadowRoot?.querySelector('slot[name="icon-start"]');
      const iconEnd = el.shadowRoot?.querySelector('slot[name="icon-end"]');
      expect(iconStart).not.toBeNull();
      expect(iconEnd).not.toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid size prop is provided', async () => {
      await checkError(TnwButton, `<tnw-button label="Invalid Size" size="invalidSize"></tnw-button>`, 'Invalid prop value for "size"');
    });
  });
});
