import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwScrollToTop } from '../tnw-scroll-to-top';

describe('tnw-scroll-to-top', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top></tnw-scroll-to-top>`);
      expect(el).toMatchSnapshot();
    });

    it('renders with default icon when `enableCustomSvgIcon` is false', async () => {
      const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top></tnw-scroll-to-top>`);
      const icon = el.shadowRoot?.querySelector('tnw-icon');
      expect(icon?.getAttribute('name')).toBe('tnw-arrow-thin-up');
    });

    // it('displays the button when scrolled more than 300px', async () => {
    //   const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top></tnw-scroll-to-top>`);
    //   window.scrollY = 350;
    //   el.component.handleScroll();
    //   expect(el.component.isVisible).toBe(true);
    // });

    // it('hides the button when scrolled less than 300px', async () => {
    //   const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top></tnw-scroll-to-top>`);
    //   window.scrollY = 250;
    //   el.component.handleScroll();
    //   expect(el.component.isVisible).toBe(false);
    // });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `size` class when size prop is set', async () => {
      const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top size="lg"></tnw-scroll-to-top>`, 'tnw-icon');
      expect(el?.getAttribute('size')).toBe('lg');
    });

    it('applies correct `appearance` class when appearance prop is set to outlined', async () => {
      const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top appearance="outlined"></tnw-scroll-to-top>`, 'tnw-icon');
      expect(el?.getAttribute('appearance')).toBe('outlined');
    });

    it('applies correct `borderRadius` class when borderRadius prop is set', async () => {
      const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top border-radius="lg"></tnw-scroll-to-top>`, 'tnw-icon');
      expect(el?.getAttribute('borderRadius')).toBe('lg');
    });

    it('applies correct `color` class when color prop is set', async () => {
      const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top color="secondary"></tnw-scroll-to-top>`, 'tnw-icon');
      expect(el?.getAttribute('color')).toBe('secondary');
    });

    it('uses custom SVG icon when `enableCustomSvgIcon` is true', async () => {
      const el = await createSpecPage(TnwScrollToTop, `
        <tnw-scroll-to-top enable-custom-svg-icon="true">
          <svg slot="icon-svg">Custom SVG Icon</svg>
        </tnw-scroll-to-top>
      `, 'slot[name="icon-svg"]');
      expect(el).not.toBeNull();
    });
  });

  describe('Behavior Tests', () => {
    it('calls `scrollToTop` when icon is clicked', async () => {
      const el = await createSpecPage(TnwScrollToTop, `<tnw-scroll-to-top></tnw-scroll-to-top>`);
      const spyScroll = jest.spyOn(window, 'scrollTo');

      const icon = el.shadowRoot?.querySelector('tnw-icon');
      icon?.click();
      expect(spyScroll).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid `size` prop is provided', async () => {
      await checkError(TnwScrollToTop, `<tnw-scroll-to-top size="invalidSize"></tnw-scroll-to-top>`, 'Invalid prop value for "size"');
    });

    it('throws an error when an invalid `variant` prop is provided', async () => {
      await checkError(TnwScrollToTop, `<tnw-scroll-to-top variant="invalidVariant"></tnw-scroll-to-top>`, 'Invalid prop value for "variant"');
    });

    it('throws an error when an invalid `borderRadius` prop is provided', async () => {
      await checkError(TnwScrollToTop, `<tnw-scroll-to-top border-radius="invalidRadius"></tnw-scroll-to-top>`, 'Invalid prop value for "borderRadius"');
    });
  });
});
