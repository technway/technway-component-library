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

    it('renders the correct structure with slots when slots are provided', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card enable-image-slot>
          <div slot="image">Image Slot Content</div>
          <div slot="badge">Badge Slot Content</div>
          <div slot="date">Date Slot Content</div>
          <div slot="heading">Heading Slot Content</div>
          <div slot="subheading">Subheading Slot Content</div>
          <div slot="description">Description Slot Content</div>
          <div slot="button">Button Slot Content</div>
        </tnw-card>`
      ) as HTMLTnwCardElement;

      const imageSlot = document.querySelector('[slot="image"]');
      const badgeSlot = document.querySelector('[slot="badge"]');
      const dateSlot = document.querySelector('[slot="date"]');
      const headingSlot = document.querySelector('[slot="heading"]');
      const subheadingSlot = document.querySelector('[slot="subheading"]');
      const descriptionSlot = document.querySelector('[slot="description"]');
      const buttonSlot = document.querySelector('[slot="button"]');

      expect(imageSlot).not.toBeNull();
      expect(badgeSlot).not.toBeNull();
      expect(dateSlot).not.toBeNull();
      expect(headingSlot).not.toBeNull();
      expect(subheadingSlot).not.toBeNull();
      expect(descriptionSlot).not.toBeNull();
      expect(buttonSlot).not.toBeNull();
    });
  });

  it('does not render slots when slots are not provided', async () => {
    const host = await createSpecPage(
      TnwCard,
      `<tnw-card></tnw-card>`
    ) as HTMLTnwCardElement;

    const imageSlot = queryElement(host, 'slot[name="image"]');
    const badgeSlot = queryElement(host, 'slot[name="badge"]');
    const dateSlot = queryElement(host, 'slot[name="date"]');
    const headingSlot = queryElement(host, 'slot[name="heading"]');
    const subheadingSlot = queryElement(host, 'slot[name="subheading"]');
    const descriptionSlot = queryElement(host, 'slot[name="description"]');
    const buttonSlot = queryElement(host, 'slot[name="button"]');

    expect(imageSlot).toBeNull();
    expect(badgeSlot).toBeNull();
    expect(dateSlot).toBeNull();
    expect(headingSlot).toBeNull();
    expect(subheadingSlot).toBeNull();
    expect(descriptionSlot).toBeNull();
    expect(buttonSlot).toBeNull();
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom layout class', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card layout="horizontal"></tnw-card>`,
      );
      expect(host).toHaveClass('tnw-card--horizontal');
    });

    it('renders with a custom appearance and appearance color', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card appearance="solid" appearance-color="primary"></tnw-card>`,
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

    it('renders correct image properties', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card
          image-src="image.jpg"
          image-alt="Sample Image"
          image-height="200px"
          larger-image
        ></tnw-card>`
      ) as HTMLTnwCardElement;
      expect(host).toHaveClass('tnw-card--larger-image');
      const image = queryElement(host, 'img[part="image"]') as HTMLImageElement;
      expect(image.style.height).toBe('200px');
      expect(image.getAttribute('src')).toBe('image.jpg');
      expect(image.getAttribute('alt')).toBe('Sample Image');
    });

    it('renders correct button properties', async () => {
      const button = await createSpecPage(
        TnwCard,
        `<tnw-card
          button-label="Custom Button"
          button-href="https://example.com"
          button-radius="full"
        ></tnw-card>`,
        'tnw-button'
      ) as HTMLTnwButtonElement;
      expect(button).toBeTruthy();
      expect(button.getAttribute('borderradius')).toBe('full')
      expect(button.getAttribute('label')).toBe('Custom Button');
      expect(button.getAttribute('href')).toBe('https://example.com');
    });

    it('renders with correct text alignment', async () => {
      const content = await createSpecPage(
        TnwCard,
        `<tnw-card text-alignment="center"></tnw-card>`,
        '.tnw-card__content'
      );
      expect(content).toHaveClasses(['tnw-card__content--text-center']);
    });

    it('renders with correct center items alignment and layout', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card items-alignment="center"></tnw-card>`
      );
      expect(host).toHaveClasses(['tnw-card--vertical-center']);
    });

    it('renders with correct items alignment when it is not set to center', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card items-alignment="start"></tnw-card>`
      );
      expect(host).toHaveClasses(['tnw-card--items-start']);
    });

    it('renders with correct padding when appearance is not none', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card appearance="solid" padding="lg"></tnw-card>`
      );
      expect(host).toHaveClass('tnw-card--padding-lg');
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

    it('renders custom badge slot content', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card>
          <span slot="badge">Custom Badge</span>
        </tnw-card>`
      ) as HTMLTnwCardElement;
      const badgeSlot = queryElement(host, '[slot="badge"]', false);
      expect(badgeSlot).toBeTruthy();
      expect(badgeSlot.textContent).toBe('Custom Badge');
    });

    it('renders custom date slot content', async () => {
      const host = await createSpecPage(
        TnwCard,
        `<tnw-card>
          <span slot="date">Custom Date</span>
        </tnw-card>`
      ) as HTMLTnwCardElement;
      const dateSlot = queryElement(host, '[slot="date"]', false);
      expect(dateSlot).toBeTruthy();
      expect(dateSlot.textContent).toBe('Custom Date');
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
      const image = await createSpecPage(
        TnwCard,
        `<tnw-card image-src="image.jpg" image-alt="Sample Image"></tnw-card>`,
        'img[part="image"]'
      );
      expect(image.getAttribute('alt')).toBe('Sample Image');
    });
  });
});