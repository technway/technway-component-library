import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwAlert } from '../tnw-alert';

describe('tnw-alert', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required props (alertId and message)', async () => {
      const el = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="This is an alert message"></tnw-alert>`);
      expect(el).toMatchSnapshot();
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct id when alertId prop is set', async () => {
      const el = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Alert Test"></tnw-alert>`);
      expect(el.getAttribute('id')).toBe('alert1');
    });

    it('displays correct message', async () => {
      const el = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Alert Test"></tnw-alert>`, "p");
      expect(el).toEqualText('Alert Test');
    });

    it('applies correct size class when size prop is set', async () => {
      const el = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Alert with large size" size="lg"></tnw-alert>`);
      expect(el).toHaveClass('tnw-alert--lg');
    });

    it('applies correct variant and appearance classes when both props are set', async () => {
      const el = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Warning alert" variant="warning" appearance="solid"></tnw-alert>`);
      expect(el).toHaveClass('tnw-extended-v-solid-warning');
    });

    it('applies correct borderRadius class when prop is set', async () => {
      const el = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Styled alert" border-radius="lg"></tnw-alert>`);
      expect(el).toHaveClass('rounded-lg');
    });

    it('does not render when isHidden is true', async () => {
      const el = await createSpecPage(TnwAlert, `<tnw-alert alert-id="alert1" message="Hidden alert" is-hidden></tnw-alert>`);
      expect(el).toBeTruthy();
      expect(el.innerHTML).not.toBeTruthy();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the required alertId prop is not provided', async () => {
      await checkError(TnwAlert, `<tnw-alert message="Missing alertId"></tnw-alert>`, 'Required prop "alertId"');
    });

    it('throws an error when the required message prop is not provided', async () => {
      await checkError(TnwAlert, `<tnw-alert alert-id="alert1"></tnw-alert>`, 'Required prop "message"');
    });

    it('throws an error when an invalid size prop is provided', async () => {
      await checkError(TnwAlert, `<tnw-alert alert-id="alert1" message="Invalid size" size="invalidSize"></tnw-alert>`, 'Invalid prop value for "size"');
    });

    it('throws an error when an invalid variant prop is provided', async () => {
      await checkError(TnwAlert, `<tnw-alert alert-id="alert1" message="Invalid variant" variant="invalidVariant"></tnw-alert>`, 'Invalid prop value for "variant"');
    });
  });
});
