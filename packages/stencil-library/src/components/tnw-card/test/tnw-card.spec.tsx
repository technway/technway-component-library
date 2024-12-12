import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwCard } from '../tnw-card';

describe('tnw-card', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with no required props', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card></tnw-card>`
      );
      expect(host).toMatchSnapshot();
    });

    it('uses default values for optional props when not provided', async () => {
      const card = await createSpecPage(
        TnwCard,
        `<tnw-card heading="Default Heading"></tnw-card>`,
      );
      expect(card).toHaveClasses([
        'tnw-card',
        'tnw-card--vertical',
        'tnw-card--equal-image',
        'tnw-card--spacing-sm',
      ]);
    });

    it('renders the correct structure with slots', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card enable-image-slot>
          <div slot="image">Image Slot Content</div>
          <div slot="heading">Heading Slot Content</div>
          <div slot="subheading">Subheading Slot Content</div>
          <div slot="description">Description Slot Content</div>
          <div slot="button">Button Slot Content</div>
        </tnw-card>`
      ) as HTMLTnwCardElement;

      const imageSlot = queryElement(host, 'slot[name="image"]');
      const headingSlot = queryElement(host, 'slot[name="heading"]');
      const subheadingSlot = queryElement(host, 'slot[name="subheading"]');
      const descriptionSlot = queryElement(host, 'slot[name="description"]');
      const buttonSlot = queryElement(host, 'slot[name="button"]');

      expect(imageSlot).not.toBeNull();
      expect(headingSlot).not.toBeNull();
      expect(subheadingSlot).not.toBeNull();
      expect(descriptionSlot).not.toBeNull();
      expect(buttonSlot).not.toBeNull();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom layout class', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card layout="horizontal"></tnw-card>`,
      );
      expect(host).toHaveClass('tnw-card--horizontal');
    });

    it('renders with a custom appearance and variant', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card appearance="solid" variant="primary"></tnw-card>`,
      );
      expect(host).toHaveClass('tnw-v-solid-primary');
    });

    it('renders content before image when orderContentFirst is true', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card heading="Content First" image-src="image.jpg" order-content-first></tnw-card>`,
      ) as HTMLTnwCardElement;
      const content = queryElement(host, '.tnw-card__content');
      const image = queryElement(host, '.tnw-card__image');
      expect(content).toBeTruthy();
      expect(image).toBeTruthy();
      expect(content.nextElementSibling).toBe(image);
    });

    it('renders with a glassmorphism effect when useGlassmorphismEffect is true', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card use-glassmorphism-effect></tnw-card>`,
      );
      expect(host).toHaveClass('tnw-card--glassmorphism');
    });

    it('renders with a larger image when largerImage is true', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card larger-image></tnw-card>`,
      );
      expect(host).toHaveClass('tnw-card--larger-image');
    });
  });

  describe('Slot Behavior', () => {
    it('renders slot content for heading when heading prop is not provided', async () => {
      const slotContent = await createSpecPage(
        TnwCard,
        `<tnw-card>
          <span slot="heading">Custom Heading</span>
        </tnw-card>`,
        'span',
        false
      );
      expect(slotContent.textContent).toEqual('Custom Heading');
    });

    it('renders slot content for button when buttonLabel prop is not provided', async () => {
      const slotContent = await createSpecPage(
        TnwCard,
        `<tnw-card>
          <button slot="button">Custom Button</button>
        </tnw-card>`,
        'button',
        false
      );
      expect(slotContent.textContent).toEqual('Custom Button');
    });

    it('renders custom content when enableContentSlot is true', async () => {
      const slotContent = await createSpecPage(
        TnwCard,
        `<tnw-card enable-content-slot>
          <div slot="content">Custom Content</div>
        </tnw-card>`,
        '[slot="content"]',
        false
      );
      expect(slotContent.textContent).toEqual('Custom Content');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid layout is provided', async () => {
      await checkSpecPageError(
        TnwCard,
        `<tnw-card layout="invalidLayout"></tnw-card>`,
        'Invalid prop value for "layout"'
      );
    });

    it('throws an error when an invalid appearance is provided', async () => {
      await checkSpecPageError(
        TnwCard,
        `<tnw-card appearance="invalidAppearance"></tnw-card>`,
        'Invalid prop value for "appearance"'
      );
    });

    it('throws an error when an invalid borderRadius is provided', async () => {
      await checkSpecPageError(
        TnwCard,
        `<tnw-card border-radius="invalidRadius"></tnw-card>`,
        'Invalid prop value for "borderRadius"'
      );
    });
  });

  describe('Accessibility Behavior', () => {
    it('has proper alt attribute for the image when imageAlt is set', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card image-src="image.jpg" image-alt="Sample Image"></tnw-card>`,
        'tnw-image'
      );
      expect(host.getAttribute('alt')).toBe('Sample Image');
    });
  });
});