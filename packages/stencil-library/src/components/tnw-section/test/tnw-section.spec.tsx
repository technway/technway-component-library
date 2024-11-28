import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwSection } from '../tnw-section';

describe('TnwSection', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwSection, `<tnw-section></tnw-section>`);
      expect(el).toMatchSnapshot();
    });

    it('renders the correct structure with slots', async () => {
      const el = await createSpecPage(TnwSection, `
        <tnw-section>
          <div slot="header">Header Content</div>
          <div slot="body">Body Content</div>
          <div slot="footer">Footer Content</div>
        </tnw-section>
      `);

      const headerSlot = el.shadowRoot?.querySelector('slot[name="header"]');
      const bodySlot = el.shadowRoot?.querySelector('slot[name="body"]');
      const footerSlot = el.shadowRoot?.querySelector('slot[name="footer"]');

      expect(headerSlot).not.toBeNull();
      expect(bodySlot).not.toBeNull();
      expect(footerSlot).not.toBeNull();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `appearance` class when appearance prop is set', async () => {
      const el = await createSpecPage(TnwSection, `<tnw-section appearance="solid" variant="primary"></tnw-section>`);
      expect(el).toHaveClass('tnw-directional-v-solid-primary');
    });

    it('applies correct padding and margin classes based on prop values', async () => {
      const el = await createSpecPage(TnwSection, `<tnw-section padding="lg" margin="md"></tnw-section>`);
      expect(el).toHaveClass('tnw-section--padding-block-lg');
      expect(el).toHaveClass('tnw-section--margin-md');
    });

    it('applies glassmorphism effect when `useGlassmorphismEffect` is true', async () => {
      const el = await createSpecPage(TnwSection, `<tnw-section use-glassmorphism-effect="true"></tnw-section>`);
      expect(el).toHaveClass('tnw-section--glassmorphism');
    });

    it('applies correct `isFirstSection` and `isLastSection` classes when props are set', async () => {
      const el = await createSpecPage(TnwSection, `<tnw-section is-first-section="true" is-last-section="true"></tnw-section>`);
      expect(el).toHaveClass('tnw-section--first');
      expect(el).toHaveClass('tnw-section--last');
    });

    it('applies correct spacing and alignment classes for content', async () => {
      const el = await createSpecPage(TnwSection, `<tnw-section spacing="lg" alignment="center"></tnw-section>`);
      const content = el.shadowRoot?.querySelector('.tnw-section__content');
      expect(content).toHaveClass('tnw-section__content--spacing-lg');
      expect(content).toHaveClass('tnw-section__content--center');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when invalid `appearance` prop is provided', async () => {
      await checkError(TnwSection, `<tnw-section appearance="invalid"></tnw-section>`, 'Invalid prop value for "appearance"');
    });

    it('throws an error when invalid `padding` prop is provided', async () => {
      await checkError(TnwSection, `<tnw-section padding="invalid"></tnw-section>`, 'Invalid prop value for "padding"');
    });

    it('renders without internal container when `disableInternalContainer` is true', async () => {
      const el = await createSpecPage(TnwSection, `<tnw-section disable-internal-container="true"></tnw-section>`);
      const container = el.shadowRoot?.querySelector('[part="container"]');
      expect(container).toBeNull();
    });

    // it('renders with internal container when `disableInternalContainer` is false', async () => {
    //   const el = await createSpecPage(TnwSection, `<tnw-section disable-internal-container="false"></tnw-section>`);
    //   const container = el.shadowRoot?.querySelector('[part="container"]');
    //   expect(container).not.toBeNull();
    // });
  });
});
