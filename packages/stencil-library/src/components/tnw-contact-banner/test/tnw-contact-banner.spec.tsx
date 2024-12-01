import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwContactBanner } from '../tnw-contact-banner';

describe('tnw-contact-banner', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwContactBanner, `<tnw-contact-banner></tnw-contact-banner>`);
      expect(el).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `appearance` class when appearance is set to `outline`', async () => {
      const el = await createSpecPage(TnwContactBanner, `<tnw-contact-banner appearance="outlined"></tnw-contact-banner>`);
      expect(el).toHaveClass('tnw-v-outlined-primary');
    });

    it('applies correct `variant` class when variant is set to `secondary`', async () => {
      const el = await createSpecPage(TnwContactBanner, `<tnw-contact-banner variant="secondary"></tnw-contact-banner>`);
      expect(el).toHaveClass('tnw-v-solid-secondary');
    });

    it('applies correct `borderRadius` class when borderRadius is set to `lg`', async () => {
      const el = await createSpecPage(TnwContactBanner, `<tnw-contact-banner border-radius="lg"></tnw-contact-banner>`);
      expect(el).toHaveClass('rounded-lg');
    });

    it('applies correct `alignment` class when alignment is set to `start`', async () => {
      const el = await createSpecPage(TnwContactBanner, `<tnw-contact-banner alignment="start"></tnw-contact-banner>`);
      expect(el).toHaveClass('tnw-contact-banner--start');
    });

    it('renders content slot when `enableContentSlot` is set to true', async () => {
      const el = await createSpecPage(TnwContactBanner, `
        <tnw-contact-banner enable-content-slot="true">
          <div slot="content">Custom Content</div>
        </tnw-contact-banner>
      `);
      expect(el).toMatchSnapshot();
      const contentSlot = el.shadowRoot?.querySelector('slot[name="content"]');
      expect(contentSlot).not.toBeNull();
    });

    it('renders default slots when `enableContentSlot` is false', async () => {
      const el = await createSpecPage(TnwContactBanner, `
        <tnw-contact-banner>
          <div slot="short-title">Short Title</div>
          <div slot="title">Main Title</div>
          <div slot="description">Description Text</div>
          <button slot="button">Click Me</button>
        </tnw-contact-banner>
      `);
      expect(el).toMatchSnapshot();
      const subtitle = el.shadowRoot?.querySelector('slot[name="subtitle"]');
      const title = el.shadowRoot?.querySelector('slot[name="title"]');
      const description = el.shadowRoot?.querySelector('slot[name="description"]');
      const button = el.shadowRoot?.querySelector('slot[name="button"]');
      expect(subtitle).not.toBeNull();
      expect(title).not.toBeNull();
      expect(description).not.toBeNull();
      expect(button).not.toBeNull();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid appearance prop is provided', async () => {
      await checkError(TnwContactBanner, `<tnw-contact-banner appearance="invalid"></tnw-contact-banner>`, 'Invalid prop value for "appearance"');
    });

    it('throws an error when an invalid alignment prop is provided', async () => {
      await checkError(TnwContactBanner, `<tnw-contact-banner alignment="invalid"></tnw-contact-banner>`, 'Invalid prop value for "alignment"');
    });

    it('throws an error when an invalid variant prop is provided', async () => {
      await checkError(TnwContactBanner, `<tnw-contact-banner variant="invalid"></tnw-contact-banner>`, 'Invalid prop value for "variant"');
    });
  });
});
