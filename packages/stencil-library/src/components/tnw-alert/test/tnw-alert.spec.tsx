import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwAlert } from '../tnw-alert';

describe('tnw-alert', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required props (alertId and message)', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="This is an alert message"></tnw-alert>`);
      expect(host).toMatchSnapshot();
    });

    it('uses default values for optional props when not provided', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Default props test"></tnw-alert>`);

      expect(host).toHaveClasses([
        'tnw-alert--sm',
        'rounded-default'
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct id when alertId prop is set', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Alert Test"></tnw-alert>`);
      expect(host.getAttribute('id')).toBe('alert1');
    });

    it('displays correct message', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Alert Test"></tnw-alert>`, "p");
      expect(host).toEqualText('Alert Test');
    });

    it('applies correct size class when size prop is set', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Alert with large size" size="lg"></tnw-alert>`);
      expect(host).toHaveClass('tnw-alert--lg');
    });

    it('applies correct appearanceColor and appearance classes when both props are set', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Warning alert" appearance-color="warning" appearance="solid"></tnw-alert>`);
      expect(host).toHaveClass('tnw-extended-v-solid-warning');
    });

    it('applies correct borderRadius class when prop is set', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Styled alert" border-radius="lg"></tnw-alert>`);
      expect(host).toHaveClass('rounded-lg');
    });

    it('does not render when isHidden is true', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Hidden alert" is-hidden></tnw-alert>`);
      expect(host).toBeTruthy();
      expect(host.innerHTML).not.toBeTruthy();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the required alertId prop is not provided', async () => {
      await checkSpecPageError(TnwAlert, `<tnw-alert message="Missing alertId"></tnw-alert>`, 'Required prop "alertId"');
    });

    it('throws an error when the required message prop is not provided', async () => {
      await checkSpecPageError(TnwAlert, `<tnw-alert alert-id="alert1"></tnw-alert>`, 'Required prop "message"');
    });

    it('throws an error when an invalid size prop is provided', async () => {
      await checkSpecPageError(TnwAlert, `<tnw-alert alert-id="alert1" message="Invalid size" size="invalidSize"></tnw-alert>`, 'Invalid prop value for "size"');
    });

    it('throws an error when an invalid appearanceColor prop is provided', async () => {
      await checkSpecPageError(TnwAlert, `<tnw-alert alert-id="alert1" message="Invalid appearanceColor" appearance-color="invalidAppearanceColor"></tnw-alert>`, 'Invalid prop value for "appearanceColor"');
    });

    it('throws an error when an unsupported borderRadius value is provided', async () => {
      await checkSpecPageError(TnwAlert, `<tnw-alert alert-id="alert1" message="Invalid border radius" border-radius="invalidValue"></tnw-alert>`, 'Invalid prop value for "borderRadius"');
    });
  });

  describe('Accessibility and Edge Cases', () => {
    it('has proper aria-live attribute for accessibility', async () => {
      const host = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Accessibility test"></tnw-alert>`);
      expect(host?.getAttribute('aria-live')).toBe('assertive');
    });

    it('updates aria-live dynamically when message changes', async () => {
      const page = await newSpecPage({
        components: [TnwAlert],
        html: `<tnw-alert alert-id="alert1" message="First message"></tnw-alert>`
      });
      const host = page.root;
      host.setAttribute('message', 'Updated message');
      await page.waitForChanges();
      expect(host?.getAttribute('aria-live')).toBe('assertive');
      const paragraph = queryElement(host, 'p');
      expect(paragraph.textContent).toBe('Updated message');
    });
  });
});
