import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwContactBanner } from '../tnw-contact-banner';

describe('tnw-contact-banner', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner></tnw-contact-banner>`
      );
      expect(host).toMatchSnapshot();
    });

    it('uses default values for optional props when not provided', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner></tnw-contact-banner>`
      );
      expect(host).toHaveClasses([
        'tnw-contact-banner',
        'container',
        'tnw-contact-banner--center',
        'tnw-contact-banner--margin-xl',
        'tnw-contact-banner--padding-inline-2xl',
        'tnw-contact-banner--padding-block-2xl',
        'tnw-v-solid-primary',
        'rounded-default'
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom alignment class', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner alignment="start"></tnw-contact-banner>`
      );
      expect(host).toHaveClass('tnw-contact-banner--start');
    });

    it('renders with custom appearance and appearanceColor', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner appearance="outlined" appearance-color="primary"></tnw-contact-banner>`
      );
      expect(host).toHaveClass('tnw-v-outlined-primary');
    });

    it('renders with a gradient appearance', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner appearance="gradient"></tnw-contact-banner>`
      );
      expect(host).toHaveClass('tnw-contact-banner--gradient');
    });
    it('renders with custom padding and margin classes', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner margin="lg" horizontal-padding="md" Vertical-padding="sm"></tnw-contact-banner>`
      );
      expect(host).toHaveClasses([
        'tnw-contact-banner--margin-lg',
        'tnw-contact-banner--padding-inline-md',
        'tnw-contact-banner--padding-block-sm',
      ]);
    });

    it('renders correct border radius', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner border-radius="lg"></tnw-contact-banner>`
      );
      expect(host).toHaveClass('rounded-lg');
    });

    it('renders without the internal container when disableInternalContainer is true', async () => {
      const host = await createSpecPage(
        TnwContactBanner,
        `<tnw-contact-banner disable-internal-container></tnw-contact-banner>`
      );
      expect(host).not.toHaveClass('container');
    });
  });

  describe('Slot Behavior', () => {
    it('renders content slot when `enableContentSlot` is set to true', async () => {
      const slot = await createSpecPage(
        TnwContactBanner, `
        <tnw-contact-banner enable-content-slot="true">
          <div slot="content">Custom Content</div>
        </tnw-contact-banner>,
        '[slot="content"]'
      `);
      expect(slot).not.toBeNull();
    });

    it('renders default slots when `enableContentSlot` is false', async () => {
      const host = await createSpecPage(TnwContactBanner, `
        <tnw-contact-banner>
          <div slot="short-title">Short Title</div>
          <div slot="title">Main Title</div>
          <div slot="description">Description Text</div>
          <button slot="button">Click Me</button>
        </tnw-contact-banner>
      `) as HTMLTnwContactBannerElement;

      const subtitle = queryElement(host, 'slot[name="subtitle"]');
      const title = queryElement(host, 'slot[name="title"]');
      const description = queryElement(host, 'slot[name="description"]');
      const button = queryElement(host, 'slot[name="button"]');

      expect(subtitle).not.toBeNull();
      expect(title).not.toBeNull();
      expect(description).not.toBeNull();
      expect(button).not.toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {

    it('throws an error when an invalid alignment is provided', async () => {
      await checkSpecPageError(
        TnwContactBanner,
        `<tnw-contact-banner alignment="invalidAlignment"></tnw-contact-banner>`,
        'Invalid prop value for "alignment"'
      );
    });

    it('throws an error when an invalid appearance is provided', async () => {
      await checkSpecPageError(
        TnwContactBanner,
        `<tnw-contact-banner appearance="invalidAppearance"></tnw-contact-banner>`,
        'Invalid prop value for "appearance"'
      );
    });


    it('throws an error when an invalid appearanceColor prop is provided', async () => {
      await checkSpecPageError(
        TnwContactBanner,
        `<tnw-contact-banner appearance-color="invalid"></tnw-contact-banner>`,
        'Invalid prop value for "appearanceColor"'
      );
    });

    it('throws an error when an invalid borderRadius is provided', async () => {
      await checkSpecPageError(
        TnwContactBanner,
        `<tnw-contact-banner border-radius="invalidRadius"></tnw-contact-banner>`,
        'Invalid prop value for "borderRadius"'
      );
    });
  });
});
