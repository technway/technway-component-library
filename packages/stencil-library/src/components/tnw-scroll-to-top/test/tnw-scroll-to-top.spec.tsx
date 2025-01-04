import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwScrollToTop } from '../tnw-scroll-to-top';

describe('tnw-scroll-to-top', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top></tnw-scroll-to-top>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default values for optional props when not provided', async () => {
      const el = (await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top></tnw-scroll-to-top>`
      )) as HTMLTnwScrollToTopElement;

      expect(el.size).toBe('md');
      expect(el.appearanceColor).toBe('primary');
      expect(el.appearance).toBe('solid');
      expect(el.borderRadius).toBe('default');
      expect(el.customIconName).toBe('tnw-arrow-thin-up');
      expect(el.enableCustomSvgIcon).toBe(false);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom size', async () => {
      const host = await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top size="lg"></tnw-scroll-to-top>`
      );
      expect(host.getAttribute("size")).toBe('lg');
    });

    it('renders with a custom appearanceColor and appearance', async () => {
      const host = await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top appearance-color="secondary" appearance="outlined"></tnw-scroll-to-top>`
      );
      expect(host.getAttribute('appearance-color')).toBe('secondary');
      expect(host.getAttribute('appearance')).toBe('outlined');
    });

    it('renders with a custom icon name', async () => {
      const host = await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top custom-icon-name="tnw-custom-icon"></tnw-scroll-to-top>`
      );
      expect(host.getAttribute('custom-icon-name')).toBe('tnw-custom-icon');
    });

    it('renders with a custom border radius', async () => {
      const host = await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top border-radius="lg"></tnw-scroll-to-top>`
      );
      expect(host.getAttribute('border-radius')).toBe('lg');
    });

    it('renders with a custom color', async () => {
      const host = await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top color="secondary"></tnw-scroll-to-top>`
      );
      expect(host.getAttribute('color')).toBe('secondary');
    });
  });

  describe('Slot Behavior', () => {
    it('renders custom SVG icon from the `icon-svg` slot when enabled', async () => {
      const svg = await createSpecPage(
        TnwScrollToTop,
        `<tnw-scroll-to-top enable-custom-svg-icon>
          <svg slot="icon-svg" id="custom-icon"></svg>
        </tnw-scroll-to-top>`,
        'svg',
        false
      ) as HTMLTnwScrollToTopElement;

      expect(svg).not.toBeNull();
      expect(svg?.id).toBe('custom-icon');
    });
  });

  describe('Event Behavior', () => {
    it('emits the `visible` event with correct details when scrolling past 300', async () => {
      const page = await newSpecPage({
        components: [TnwScrollToTop],
        html: `<tnw-scroll-to-top></tnw-scroll-to-top>`,
      });

      const host = page.root as HTMLTnwScrollToTopElement;

      const spy = jest.fn();
      host.addEventListener('visible', spy);

      // Simulate scroll event
      window.scrollY = 350;
      window.dispatchEvent(new Event('scroll'));

      await page.waitForChanges();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: {
            isVisible: true,
            scrollY: 350,
          },
        })
      );
    });

    it('does not emit `visible` when scrolling above 300', async () => {
      const page = await newSpecPage({
        components: [TnwScrollToTop],
        html: `<tnw-scroll-to-top></tnw-scroll-to-top>`,
      });
  
      const host = page.root as HTMLTnwScrollToTopElement;
  
      const spy = jest.fn();
      host.addEventListener('visible', spy);
  
      // Simulate scroll event
      window.scrollY = 299;
      window.dispatchEvent(new Event('scroll'));
  
      await page.waitForChanges();
  
      expect(spy).not.toHaveBeenCalled();
    });
  
    it('emits `scrollToTopClicked` event with correct details when clicked', async () => {
      const page = await newSpecPage({
        components: [TnwScrollToTop],
        html: `<tnw-scroll-to-top></tnw-scroll-to-top>`,
      });
  
      const host = page.root as HTMLTnwScrollToTopElement;
  
      const spy = jest.fn();
      host.addEventListener('scrollToTopClicked', spy);
  
      window.scrollY = 450;
  
      // Trigger click
      host.shadowRoot?.querySelector('tnw-icon')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  
      await page.waitForChanges();
  
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: {
            scrollY: 450,
          },
        })
      );
    });
  });

  describe('Scroll Behavior', () => {
    it('becomes visible when scrolling past 300px', async () => {
      const page = await newSpecPage({
        components: [TnwScrollToTop],
        html: `<tnw-scroll-to-top></tnw-scroll-to-top>`,
      });
  
      const host = page.root as HTMLTnwScrollToTopElement;
  
      // Simulate scroll event
      window.scrollY = 350;
      window.dispatchEvent(new Event('scroll'));
  
      await page.waitForChanges();
  
      expect(host).toHaveClass('tnw-scroll-to-top--visible');
    });
  
    it('hides when scrolling above 300px', async () => {
      const page = await newSpecPage({
        components: [TnwScrollToTop],
        html: `<tnw-scroll-to-top></tnw-scroll-to-top>`,
      });
  
      const host = page.root as HTMLTnwScrollToTopElement;
  
      // Simulate scroll event
      window.scrollY = 299;
      window.dispatchEvent(new Event('scroll'));
  
      await page.waitForChanges();
  
      expect(host).not.toHaveClass('tnw-scroll-to-top--visible');
    });
  
    it('scrolls to top when clicked', async () => {
      const page = await newSpecPage({
        components: [TnwScrollToTop],
        html: `<tnw-scroll-to-top></tnw-scroll-to-top>`,
      });
  
      const host = page.root as HTMLTnwScrollToTopElement;
  
      const spy = jest.spyOn(window, 'scrollTo');
  
      // Trigger click
      host.shadowRoot?.querySelector('tnw-icon')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  
      await page.waitForChanges();
  
      expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid size prop is provided', async () => {
      await checkSpecPageError(
        TnwScrollToTop,
        `<tnw-scroll-to-top size="invalid"></tnw-scroll-to-top>`,
        'Invalid prop value for "size"'
      );
    });

    it('throws an error when an invalid appearanceColor prop is provided', async () => {
      await checkSpecPageError(
        TnwScrollToTop,
        `<tnw-scroll-to-top appearance-color="invalid"></tnw-scroll-to-top>`,
        'Invalid prop value for "appearanceColor"'
      );
    });

    it('throws an error when an invalid appearance prop is provided', async () => {
      await checkSpecPageError(
        TnwScrollToTop,
        `<tnw-scroll-to-top appearance="invalid"></tnw-scroll-to-top>`,
        'Invalid prop value for "appearance"'
      );
    });

    it('throws an error when an invalid border radius is provided', async () => {
      await checkSpecPageError(
        TnwScrollToTop,
        `<tnw-scroll-to-top border-radius="invalid"></tnw-scroll-to-top>`,
        'Invalid prop value for "borderRadius"'
      );
    });
  });
});
