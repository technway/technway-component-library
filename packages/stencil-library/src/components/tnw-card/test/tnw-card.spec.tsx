import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwCard } from '../tnw-card';

describe('TnwCard', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwCard, `<tnw-card></tnw-card>`);
      expect(el).toMatchSnapshot();
    });

    it('renders the correct structure with slots', async () => {
      const el = await createSpecPage(TnwCard, `
        <tnw-card enable-image-slot>
          <div slot="image">Image Slot Content</div>
          <div slot="heading">Heading Slot Content</div>
          <div slot="subheading">Subheading Slot Content</div>
          <div slot="description">Description Slot Content</div>
          <div slot="button">Button Slot Content</div>
        </tnw-card>
      `);

      const imageSlot = el.shadowRoot?.querySelector('slot[name="image"]');
      const headingSlot = el.shadowRoot?.querySelector('slot[name="heading"]');
      const subheadingSlot = el.shadowRoot?.querySelector('slot[name="subheading"]');
      const descriptionSlot = el.shadowRoot?.querySelector('slot[name="description"]');
      const buttonSlot = el.shadowRoot?.querySelector('slot[name="button"]');

      expect(imageSlot).not.toBeNull();
      expect(headingSlot).not.toBeNull();
      expect(subheadingSlot).not.toBeNull();
      expect(descriptionSlot).not.toBeNull();
      expect(buttonSlot).not.toBeNull();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders the image when imageSrc prop is provided', async () => {
      const el = await createSpecPage(TnwCard, `<tnw-card image-src="image.jpg" image-alt="Card Image"></tnw-card>`);
      const image = el.shadowRoot?.querySelector('tnw-image');
      expect(image?.getAttribute('src')).toBe('image.jpg');
      expect(image?.getAttribute('alt')).toBe('Card Image');
    });

    it('applies correct `appearance` class when appearance prop is set', async () => {
      const el = await createSpecPage(TnwCard, `<tnw-card appearance="solid" variant="primary"></tnw-card>`);
      expect(el).toHaveClass('tnw-v-solid-primary');
    });

    it('applies correct `borderRadius` class when borderRadius prop is set', async () => {
      const el = await createSpecPage(TnwCard, `<tnw-card border-radius="lg"></tnw-card>`);
      expect(el).toHaveClass('rounded-lg');
    });

    it('applies correct `layout` class when layout prop is set to horizontal', async () => {
      const el = await createSpecPage(TnwCard, `<tnw-card layout="horizontal"></tnw-card>`);
      expect(el).toHaveClass('tnw-card--horizontal');
    });

    it('renders heading, subheading, description, and button based on prop values', async () => {
      const el = await createSpecPage(TnwCard, `
        <tnw-card
          heading="Card Heading"
          subheading="Card Subheading"
          description="Card Description"
          button-label="Click Me"
        ></tnw-card>
      `);

      expect(el).toMatchSnapshot();
    });

    it('renders custom content slot when `enableContentSlot` is true', async () => {
      const el = await createSpecPage(TnwCard, `
        <tnw-card enable-content-slot="true">
          <div slot="content">Custom Card Content</div>
        </tnw-card>
      `);

      const contentSlot = el.shadowRoot?.querySelector('slot[name="content"]');
      expect(contentSlot).not.toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid `appearance` prop is provided', async () => {
      await checkError(TnwCard, `<tnw-card appearance="invalid"></tnw-card>`, 'Invalid prop value for "appearance"');
    });

    it('throws an error when an invalid `borderRadius` prop is provided', async () => {
      await checkError(TnwCard, `<tnw-card border-radius="invalid"></tnw-card>`, 'Invalid prop value for "borderRadius"');
    });

    it('applies correct class for glassmorphism when `useGlassmorphismEffect` is true', async () => {
      const el = await createSpecPage(TnwCard, `<tnw-card use-glassmorphism-effect="true"></tnw-card>`);
      expect(el).toHaveClass('tnw-card--glassmorphism');
    });
  });
});
