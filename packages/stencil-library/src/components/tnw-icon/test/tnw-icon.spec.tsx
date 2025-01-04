import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwIcon } from '../tnw-icon';

describe('tnw-icon', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default values', async () => {
      const host = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="default-icon"></tnw-icon>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default classes for size and appearance', async () => {
      const host = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="default-icon"></tnw-icon>`
      );
      expect(host).toHaveClasses([
        'tnw-icon',
        'tnw-icon--font-sm',
        'color-auto',
        'tnw-extended-v-none',
        'rounded-default',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders the specified icon name as a class', async () => {
      const icon = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="custom-icon"></tnw-icon>`,
        'i'
      );
      expect(icon).toHaveClass('icon-custom-icon');
    });

    it('applies custom appearance classes', async () => {
      const host = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="custom-icon" appearance="outlined" appearance-color="primary"></tnw-icon>`
      );
      expect(host).toHaveClass('tnw-extended-v-outlined-primary');
    });

    it('renders an SVG icon when enableSvg is true', async () => {
      const svgSlot = await createSpecPage(
        TnwIcon,
        `<tnw-icon enable-svg>
          <svg slot="svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
        </tnw-icon>`,
        'slot[name="svg"]'
      );
      expect(svgSlot).not.toBeNull();
    });

    it('applies tooltip when provided', async () => {
      const icon = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="tooltip-icon" tooltip="Icon Tooltip"></tnw-icon>`,
        'i'
      );
      expect(icon.getAttribute('title')).toBe('Icon Tooltip');
    });

    it('applies aria-label when labelAria is provided', async () => {
      const icon = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="label-icon" label-aria="Accessible Icon"></tnw-icon>`,
        'i'
      );
      expect(icon.getAttribute('aria-label')).toBe('Accessible Icon');
    });

    it('applies custom size class', async () => {
      const host = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="sized-icon" size="lg"></tnw-icon>`
      );
      expect(host).toHaveClass('tnw-icon--font-lg');
    });

    it('applies button-specific classes and role when isButton is true', async () => {
      const host = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="button-icon" is-button></tnw-icon>`
      ) as HTMLTnwIconElement;
      expect(host).toHaveClass('tnw-icon--clickable');

      const icon = queryElement(host, 'i');
      expect(icon.getAttribute('role')).toBe('button');
    });
  });

  describe('Slot Behavior', () => {
    it('renders SVG slot content when enableSvg is true', async () => {
      const svgSlot = await createSpecPage(
        TnwIcon,
        `<tnw-icon enable-svg>
          <svg slot="svg"><circle cx="12" cy="12" r="10"></circle></svg>
        </tnw-icon>`,
        'slot[name="svg"]'
      );
      expect(svgSlot).not.toBeNull();
    });

    it('does not render SVG slot content when enableSvg is false', async () => {
      const svgSlot = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="regular-icon">
          <svg slot="svg"><circle cx="12" cy="12" r="10"></circle></svg>
        </tnw-icon>`,
        'slot[name="svg"]'
      );
      expect(svgSlot).toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when name is missing and enableSvg is not true', async () => {
      await checkSpecPageError(
        TnwIcon,
        `<tnw-icon></tnw-icon>`,
        'Required prop "name" must be provided when "enableSvg" is false or not set'
      );
    });

    it('throws an error if `name` prop is missing and `enableSvg` is not true', async () => {
      await checkSpecPageError(
        TnwIcon,
        `<tnw-icon></tnw-icon>`,
        'The "name" prop is required when the "enableSvg" prop is not provided.'
      );
    });
  });

  describe('Aria Accessibility Behavior', () => {
    it('sets aria-hidden to true when hiddenAria is true', async () => {
      const icon = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="hidden-icon" hidden-aria="true"></tnw-icon>`,
        'i'
      );
      expect(icon.getAttribute('aria-hidden')).toBe('true');
    });

    it('sets aria-hidden to false when hiddenAria is false', async () => {
      const icon = await createSpecPage(
        TnwIcon,
        `<tnw-icon name="visible-icon" hidden-aria="false"></tnw-icon>`,
        'i'
      );
      expect(icon.getAttribute('aria-hidden')).toBeNull();
    });
  });
});
