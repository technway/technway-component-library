import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwSection } from '../tnw-section';

describe('tnw-section', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section></tnw-section>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default values for optional props when not provided', async () => {
      const el = (await createSpecPage(
        TnwSection,
        `<tnw-section></tnw-section>`
      )) as HTMLTnwSectionElement;

      expect(el.padding).toBe('xl');
      expect(el.margin).toBe('none');
      expect(el.spacing).toBe('md');
      expect(el.alignment).toBe('start');
      expect(el.useGlassmorphismEffect).toBe(false);
      expect(el.isFirstSection).toBe(false);
      expect(el.isLastSection).toBe(false);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a glassmorphism effect when useGlassmorphismEffect is true', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section use-glassmorphism-effect="true"></tnw-section>`
      );
      expect(host).toHaveClass('tnw-section--glassmorphism');
    });

    it('applies correct margin and padding classes based on props', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section margin="lg" padding="md"></tnw-section>`
      );
      expect(host).toHaveClasses([
        'tnw-section',
        'tnw-section--margin-lg',
        'tnw-section--padding-block-md',
      ]);
    });

    it('applies alignment class correctly', async () => {
      const section = await createSpecPage(
        TnwSection,
        `<tnw-section alignment="center"></tnw-section>`,
        'section'
      );
      expect(section).toHaveClass('tnw-section__content--center');
    });

    it('applies isFirstSection and isLastSection classes correctly', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section is-first-section="true" is-last-section="true"></tnw-section>`
      );
      expect(host).toHaveClasses(['tnw-section--first', 'tnw-section--last']);
    });

    it('applies correct spacing class based on the spacing prop', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section spacing="lg"></tnw-section>`,
        'section'
      );
      expect(host).toHaveClass('tnw-section__content--spacing-lg');
    });

    it('does not include container class when disableInternalContainer is true', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section disable-internal-container="true"></tnw-section>`
      );
      expect(host).not.toHaveClass('container');
    });

    it('applies correct appearance and variant classes', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section appearance="solid" variant="primary"></tnw-section>`
      );
      expect(host).toHaveClass('tnw-directional-v-solid-primary');
    });

    it('renders default structure when no slots are provided', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section></tnw-section>`
      );
      expect(host.querySelector('[slot="header"]')).toBeNull();
      expect(host.querySelector('[slot="body"]')).toBeNull();
      expect(host.querySelector('[slot="footer"]')).toBeNull();
    });
  });

  describe('Slot Behavior', () => {
    it('renders slot content for header, body, and footer', async () => {
      const host = await createSpecPage(
        TnwSection,
        `<tnw-section>
          <div slot="header">Header Content</div>
          <div slot="body">Body Content</div>
          <div slot="footer">Footer Content</div>
        </tnw-section>`
      ) as HTMLTnwSectionElement;

      expect(host.querySelector('[slot="header"]').textContent).toBe('Header Content');
      expect(host.querySelector('[slot="body"]').textContent).toBe('Body Content');
      expect(host.querySelector('[slot="footer"]').textContent).toBe('Footer Content');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid padding prop is provided', async () => {
      await checkSpecPageError(
        TnwSection,
        `<tnw-section padding="invalid"></tnw-section>`,
        'Invalid prop value for "padding"'
      );
    });

    it('throws an error when an invalid alignment prop is provided', async () => {
      await checkSpecPageError(
        TnwSection,
        `<tnw-section alignment="invalid"></tnw-section>`,
        'Invalid prop value for "alignment"'
      );
    });

    it('throws an error when an invalid spacing prop is provided', async () => {
      await checkSpecPageError(
        TnwSection,
        `<tnw-section spacing="invalid"></tnw-section>`,
        'Invalid prop value for "spacing"'
      );
    });

    it('throws an error when an invalid appearance prop is provided', async () => {
      await checkSpecPageError(
        TnwSection,
        `<tnw-section appearance="invalid"></tnw-section>`,
        'Invalid prop value for "appearance"'
      );
    });

    it('throws an error when an invalid variant prop is provided', async () => {
      await checkSpecPageError(
        TnwSection,
        `<tnw-section variant="invalid"></tnw-section>`,
        'Invalid prop value for "variant"'
      );
    });

    it('throws an error when an invalid margin prop is provided', async () => {
      await checkSpecPageError(
        TnwSection,
        `<tnw-section margin="invalid"></tnw-section>`,
        'Invalid prop value for "margin"'
      );
    });

    it('applies default classes when invalid appearance props are not provided', async () => {
      const el = (await createSpecPage(
        TnwSection,
        `<tnw-section></tnw-section>`
      )) as HTMLTnwSectionElement;

      expect(el.useGlassmorphismEffect).toBe(false);
      expect(el.margin).toBe('none');
    });
  });
});
