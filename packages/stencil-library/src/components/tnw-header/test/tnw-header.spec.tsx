import { checkSpecPageError, createSpecPage, queryElement } from '../../../utils/testing-utils';
import { TnwHeader } from '../tnw-header';

describe('tnw-header', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header></tnw-header>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default classes for height', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header></tnw-header>`
      );
      expect(host).toHaveClasses([
        'tnw-header',
        'h-auto',
        'min-h-auto',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies the correct background color class', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header background-color="primary"></tnw-header>`
      );
      expect(host).toHaveClass('bg-primary');
    });

    it('applies the correct border-bottom color class', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header border-bottom-color="secondary"></tnw-header>`
      );
      expect(host).toHaveClasses([
        'tnw-header--borderBottom',
        'border-b-secondary'
      ]);
    });

    it('applies the correct height class', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header height="full"></tnw-header>`
      );
      expect(host).toHaveClass('h-full');
    });

    it('applies the correct min-height class', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header min-height="full-screen"></tnw-header>`
      );
      expect(host).toHaveClass('min-h-full-screen');
    });

    it('applies the centerBanner class when center-banner is true', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header center-banner></tnw-header>`
      );
      expect(host).toHaveClass('tnw-header--centerBanner');
    });

    it('applies the correct alignment class', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header alignment="center"></tnw-header>`
      ) as HTMLTnwHeaderElement;
      const content = queryElement(host, '.tnw-header__content');
      expect(content).toHaveClass('tnw-header__content--center');
    });

    it('adds the container class when disable-internal-container is false', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header></tnw-header>`
      ) as HTMLTnwHeaderElement;
      const content = queryElement(host, '.tnw-header__content');
      expect(content).toHaveClass('container');
    });

    it('does not add the container class when disable-internal-container is true', async () => {
      const host = await createSpecPage(
        TnwHeader,
        `<tnw-header disable-internal-container></tnw-header>`
      ) as HTMLTnwHeaderElement;
      const content = queryElement(host, '.tnw-header__content');
      expect(content).not.toHaveClass('container');
    });
  });

  describe('Slot Behavior', () => {
    it('renders content inside the navbar slot', async () => {
      const navbarSlot = await createSpecPage(
        TnwHeader,
        `<tnw-header>
          <div slot="navbar">Navigation Bar</div>
        </tnw-header>`,
        '[slot="navbar"]',
        false
      ) as HTMLTnwHeaderElement;

      expect(navbarSlot).not.toBeNull();
      expect(navbarSlot.textContent).toBe('Navigation Bar');
    });

    it('renders content inside the banner slot', async () => {
      const slotContent = await createSpecPage(
        TnwHeader,
        `<tnw-header>
          <div slot="banner">Banner Content</div>
        </tnw-header>`,
        '[slot="banner"]',
        false
      ) as HTMLTnwHeaderElement;
      expect(slotContent).not.toBeNull();
      expect(slotContent.textContent).toBe('Banner Content');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error for an invalid alignment value', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header alignment="invalidValue"></tnw-header>`,
        'Invalid prop value for "alignment"'
      );
    });

    it('throws an error for an invalid height value', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header height="invalidSize"></tnw-header>`,
        'Invalid prop value for "height"'
      );
    });

    it('throws an error for an invalid min-height value', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header min-height="invalidSize"></tnw-header>`,
        'Invalid prop value for "minHeight"'
      );
    });

    it('throws an error for an invalid background color', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header background-color="invalidColor"></tnw-header>`,
        'Invalid prop value for "backgroundColor"'
      );
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error for an invalid alignment value', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header alignment="invalidValue"></tnw-header>`,
        'Invalid prop value for "alignment"'
      );
    });

    it('throws an error for an invalid height value', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header height="invalidSize"></tnw-header>`,
        'Invalid prop value for "height"'
      );
    });

    it('throws an error for an invalid min-height value', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header min-height="invalidSize"></tnw-header>`,
        'Invalid prop value for "minHeight"'
      );
    });

    it('throws an error for an invalid background color', async () => {
      await checkSpecPageError(
        TnwHeader,
        `<tnw-header background-color="invalidColor"></tnw-header>`,
        'Invalid prop value for "backgroundColor"'
      );
    });
  });
});