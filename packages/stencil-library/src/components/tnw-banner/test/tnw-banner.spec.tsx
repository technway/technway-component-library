import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwBanner } from '../tnw-banner';

describe('tnw-banner', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner></tnw-banner>`
      );
      expect(host).toMatchSnapshot();
    });

    it('uses default values for optional props when not provided', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner></tnw-banner>`
      );
      expect(host).toHaveClasses([
        'tnw-banner',
        'container',
        'tnw-banner--center',
        'tnw-banner--margin-xl',
        'tnw-banner--padding-inline-lg',
        'tnw-banner--padding-block-lg',
        'tnw-v-solid-primary',
        'rounded-default'
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom gap class', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner gap="lg"></tnw-banner>`
      );
      expect(host).toHaveClass('tnw-banner--gap-lg');
    });

    it('renders with a custom layout class', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner layout="horizontal"></tnw-banner>`
      );
      expect(host).toHaveClass('tnw-banner--horizontal');
    });

    it('renders with a custom alignment class', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner alignment="start"></tnw-banner>`
      );
      expect(host).toHaveClass('tnw-banner--start');
    });

    it('renders with custom appearance and appearanceColor', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner appearance="outlined" appearance-color="primary"></tnw-banner>`
      );
      expect(host).toHaveClass('tnw-v-outlined-primary');
    });

    it('renders with a gradient appearance', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner appearance="gradient"></tnw-banner>`
      );
      expect(host).toHaveClass('tnw-banner--gradient');
    });

    it('renders with custom padding and margin classes', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner margin="lg" padding-horizontal="md" padding-vertical="sm"></tnw-banner>`
      );
      expect(host).toHaveClasses([
        'tnw-banner--margin-lg',
        'tnw-banner--padding-inline-md',
        'tnw-banner--padding-block-sm',
      ]);
    });

    it('renders correct border radius', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner border-radius="lg"></tnw-banner>`
      );
      expect(host).toHaveClass('rounded-lg');
    });

    it('renders without the internal container when disableInternalContainer is true', async () => {
      const host = await createSpecPage(
        TnwBanner,
        `<tnw-banner disable-internal-container></tnw-banner>`
      );
      expect(host).not.toHaveClass('container');
    });
  });

  describe('Slot Behavior', () => {
    it('renders content slot when `enableContentSlot` is set to true', async () => {
      const slot = await createSpecPage(
        TnwBanner, `
        <tnw-banner enable-content-slot="true">
          <div slot="content">Custom Content</div>
        </tnw-banner>,
        '[slot="content"]'
      `);
      expect(slot).not.toBeNull();
    });

    it('renders default slots when `enableContentSlot` is false', async () => {
      const host = await createSpecPage(TnwBanner, `
        <tnw-banner>
          <div slot="short-title">Short Title</div>
          <div slot="title">Main Title</div>
          <div slot="description">Description Text</div>
          <button slot="button">Click Me</button>
        </tnw-banner>
      `) as HTMLTnwBannerElement;

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
        TnwBanner,
        `<tnw-banner alignment="invalidAlignment"></tnw-banner>`,
        'Invalid prop value for "alignment"'
      );
    });

    it('throws an error when an invalid appearance is provided', async () => {
      await checkSpecPageError(
        TnwBanner,
        `<tnw-banner appearance="invalidAppearance"></tnw-banner>`,
        'Invalid prop value for "appearance"'
      );
    });


    it('throws an error when an invalid appearanceColor prop is provided', async () => {
      await checkSpecPageError(
        TnwBanner,
        `<tnw-banner appearance-color="invalid"></tnw-banner>`,
        'Invalid prop value for "appearanceColor"'
      );
    });

    it('throws an error when an invalid borderRadius is provided', async () => {
      await checkSpecPageError(
        TnwBanner,
        `<tnw-banner border-radius="invalidRadius"></tnw-banner>`,
        'Invalid prop value for "borderRadius"'
      );
    });
  });
});
