import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwLabel } from '../tnw-label';

describe('tnw-label', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with required props', async () => {
      const host = await createSpecPage(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id"></tnw-label>`
      );
      expect(host).toMatchSnapshot();
    });

    it('throws an error if required props are missing', async () => {
      await checkSpecPageError(
        TnwLabel,
        `<tnw-label></tnw-label>`,
        'Missing required prop(s): text, htmlFor'
      );
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies the correct color class when `color` prop is set', async () => {
      const host = await createSpecPage(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" color="primary"></tnw-label>`,
        'label'
      );
      expect(host).toHaveClass('color-primary');
    });

    it('applies the correct font size class when `size` prop is set', async () => {
      const host = await createSpecPage(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" size="lg"></tnw-label>`,
        'label'
      );
      expect(host).toHaveClass('tnw-label--lg');
    });

    it('applies the correct font weight class when `weight` prop is set', async () => {
      const label = await createSpecPage(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" weight="700"></tnw-label>`,
        'label'
      );
      expect(label).toHaveClass('fw-700');
    });

    it('applies the correct text transformation class when `textCase` prop is set', async () => {
      const label = await createSpecPage(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" text-case="uppercase"></tnw-label>`,
        'label'
      );
      expect(label).toHaveClass('uppercase');
    });

    it('renders as visually hidden when `isSrOnly` is true', async () => {
      const host = await createSpecPage(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" is-sr-only></tnw-label>`
      );
      expect(host.getAttribute('style')).not.toBeNull();
    });
  });

  describe('Slot Behavior', () => {
    it('renders with the correct `for` attribute on the label', async () => {
      const labelElement = await createSpecPage(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id"></tnw-label>`,
        'label'
      );
      console.log('labelElement ', labelElement.outerHTML);
      expect(labelElement?.getAttribute('htmlFor')).toBe('input-id');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error for invalid `color` prop value', async () => {
      await checkSpecPageError(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" color="invalid-color"></tnw-label>`,
        'Invalid prop value for "color"'
      );
    });

    it('throws an error for invalid `size` prop value', async () => {
      await checkSpecPageError(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" size="invalid-size"></tnw-label>`,
        'Invalid prop value for "size"'
      );
    });

    it('throws an error for invalid `weight` prop value', async () => {
      await checkSpecPageError(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" weight="invalid-weight"></tnw-label>`,
        'Invalid prop value for "weight"'
      );
    });

    it('throws an error for invalid `textCase` prop value', async () => {
      await checkSpecPageError(
        TnwLabel,
        `<tnw-label text="Label Text" html-for="input-id" text-case="invalid-case"></tnw-label>`,
        'Invalid prop value for "textCase"'
      );
    });

    it('throws an error when `text` prop is empty', async () => {
      await checkSpecPageError(
        TnwLabel,
        `<tnw-label text="" html-for="input-id"></tnw-label>`,
        'The "text" prop cannot be empty'
      );
    });

    it('handles multiple invalid props gracefully', async () => {
      await checkSpecPageError(
        TnwLabel,
        `<tnw-label text="" html-for="input-id" color="invalid-color" size="invalid-size"></tnw-label>`,
        'Multiple invalid prop values detected'
      );
    });
  });
});