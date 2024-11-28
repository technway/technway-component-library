import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwImage } from '../tnw-image';

describe('tnw-image', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required src and alt props', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Example Image"></tnw-image>`);
      expect(el).toMatchSnapshot();
    });

    it('renders image with lazy loading when lazyLoading is true', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Lazy Image" lazy-loading="true"></tnw-image>`, 'img');
      expect(el.getAttribute('loading')).toBe('lazy');
    });

    it('renders image without lazy loading by default', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Non-lazy Image"></tnw-image>`, 'img');
      expect(el.getAttribute('loading')).toBe('eager');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct aspect ratio class when aspectRatio prop is set', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Aspect Ratio Image" aspect-ratio="16_9"></tnw-image>`, 'img');
      expect(el).toHaveClass('ar-16_9');
    });

    it('applies correct object fit class when objectFit prop is set', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Object Fit Image" object-fit="cover"></tnw-image>`, 'img');
      expect(el).toHaveClass('fit-cover');
    });

    it('applies correct object position class when objectPosition prop is set', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Object Position Image" object-position="center"></tnw-image>`, 'img');
      expect(el).toHaveClass('obj-pos-c');
    });

    it('renders caption when caption prop is provided', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Image with Caption" caption="This is a caption"></tnw-image>`);
      expect(el).toMatchSnapshot();
      const caption = el.shadowRoot?.querySelector('figcaption');
      expect(caption?.textContent).toBe('This is a caption');
    });

    it('renders without caption when caption prop is not provided', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Image without Caption"></tnw-image>`);
      expect(el.shadowRoot?.querySelector('figcaption')).toBeNull();
    });

    it('applies correct width and height classes when size props are provided', async () => {
      const el = await createSpecPage(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Sized Image" width-size="lg" height-size="full"></tnw-image>`);
      expect(el).toHaveClass('tnw-image--width-lg');
      expect(el).toHaveClass('tnw-image--height-full');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the required src prop is not provided', async () => {
      await checkError(TnwImage, `<tnw-image alt="Image without src"></tnw-image>`, 'Required prop "src"');
    });

    it('throws an error when the required alt prop is not provided', async () => {
      await checkError(TnwImage, `<tnw-image src="https://example.com/image.jpg"></tnw-image>`, 'Required prop "alt"');
    });

    it('throws an error when an invalid aspectRatio prop is provided', async () => {
      await checkError(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Invalid Aspect Ratio" aspect-ratio="invalid"></tnw-image>`, 'Invalid prop value for "aspectRatio"');
    });

    it('throws an error when an invalid objectFit prop is provided', async () => {
      await checkError(TnwImage, `<tnw-image src="https://example.com/image.jpg" alt="Invalid Object Fit" object-fit="invalid"></tnw-image>`, 'Invalid prop value for "objectFit"');
    });
  });
});
