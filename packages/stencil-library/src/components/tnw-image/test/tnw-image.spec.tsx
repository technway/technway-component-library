import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwImage } from '../tnw-image';

describe('tnw-image', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Default Image"></tnw-image>`
      );
      expect(host).toMatchSnapshot();
    });

    it('renders the image with required src and alt attributes', async () => {
      const image = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Default Image"></tnw-image>`,
        'img'
      );
      expect(image.getAttribute('src')).toBe('image.jpg');
      expect(image.getAttribute('alt')).toBe('Default Image');
    });

    it('applies default classes for width and aspect ratio', async () => {
      const host = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Default Image"></tnw-image>`
      );
      expect(host).toHaveClasses([
        'tnw-image--width-full',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom width size class', async () => {
      const host = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Image" width-size="lg"></tnw-image>`
      );
      expect(host).toHaveClass('tnw-image--width-lg');
    });

    it('renders with a custom height size class', async () => {
      const host = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Image" height-size="lg"></tnw-image>`,
      );
      expect(host).toHaveClass('tnw-image--height-lg');
    });

    it('applies a custom aspect ratio class', async () => {
      const image = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Image" aspect-ratio="16_9"></tnw-image>`, 
        'img',
        true,
        true
      );
      expect(image).toHaveClasses(['ar-16_9']);
    });

    it('applies a custom object-fit class', async () => {
      const image = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Image" object-fit="cover"></tnw-image>`, 
        'img'
      );
      expect(image).toHaveClass('fit-cover');
    });

    it('applies a custom border-radius class', async () => {
      const image = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Image" border-radius="circle"></tnw-image>`, 
        'img'
      );
      expect(image).toHaveClass('rounded-circle');
    });

    it('renders with lazy loading enabled', async () => {
      const image = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Lazy Image" lazy-loading></tnw-image>`,
        'img'
      );
      expect(image.getAttribute('loading')).toBe('lazy');
    });
  });

  describe('Caption Behavior', () => {
    it('renders an image with a caption', async () => {
      const caption = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Image with Caption" caption="Sample Caption"></tnw-image>`,
        'figcaption'
      );
      expect(caption).not.toBeNull();
      expect(caption.textContent).toBe('Sample Caption');
    });

    it('renders without a figure element when no caption is provided', async () => {
      const figure = await createSpecPage(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Image without Caption"></tnw-image>`,
        'figure'
      );
      expect(figure).toBeNull();
    });
  });

  describe('Error Handling and Validation', () => {
    it('throws an error when src is missing', async () => {
      await checkSpecPageError(
        TnwImage,
        `<tnw-image alt="Missing Src"></tnw-image>`,
        'Required prop "src" is missing'
      );
    });

    it('throws an error when alt is missing', async () => {
      await checkSpecPageError(
        TnwImage,
        `<tnw-image src="image.jpg"></tnw-image>`,
        'Required prop "alt" is missing'
      );
    });

    it('throws an error for an invalid aspect ratio', async () => {
      await checkSpecPageError(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Invalid Aspect Ratio" aspect-ratio="invalidRatio"></tnw-image>`,
        'Invalid prop value for "aspectRatio"'
      );
    });

    it('throws an error for an invalid object fit value', async () => {
      await checkSpecPageError(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Invalid Object Fit" object-fit="invalidValue"></tnw-image>`,
        'Invalid prop value for "objectFit"'
      );
    });

    it('throws an error for an invalid border radius value', async () => {
      await checkSpecPageError(
        TnwImage,
        `<tnw-image src="image.jpg" alt="Invalid Border Radius" border-radius="invalidValue"></tnw-image>`,
        'Invalid prop value for "borderRadius"'
      );
    });
  });
});
