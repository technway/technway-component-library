import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwLabel } from '../tnw-label';

describe('tnw-label', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Username" html-for="username"></tnw-label>`);
      expect(el).toMatchSnapshot();
    });

    it('displays the correct text content', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Email" html-for="email"></tnw-label>`, 'label');
      console.log(el.outerHTML)
      expect(el?.textContent).toBe('Email');
    });

    it('connects the label with an input element via `htmlFor` attribute', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Username" html-for="username"></tnw-label>`, 'label');
      expect(el?.getAttribute('htmlFor')).toBe('username');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `color` class when color prop is set', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Username" html-for="username" color="primary"></tnw-label>`, 'label');
      expect(el).toHaveClass('color-primary');
    });

    it('applies correct `size` class when size prop is set', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Username" html-for="username" size="lg"></tnw-label>`, 'label');
      expect(el).toHaveClass('tnw-label--lg');
    });

    it('applies correct `weight` class when weight prop is set', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Username" html-for="username" weight="700"></tnw-label>`, 'label');
      expect(el).toHaveClass('fw-700');
    });

    it('applies correct `textCase` class when textCase prop is set', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Username" html-for="username" text-case="uppercase"></tnw-label>`, 'label');
      expect(el).toHaveClass('uppercase');
    });

    it('applies `sr-only` class when isSrOnly prop is set', async () => {
      const el = await createSpecPage(TnwLabel, `<tnw-label text="Username" html-for="username" is-sr-only></tnw-label>`, 'label');
      expect(el).toHaveClass('sr-only');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when the `text` prop is missing', async () => {
      await checkSpecPageError(TnwLabel, `<tnw-label html-for="username"></tnw-label>`, 'Required prop "text"');
    });

    it('throws an error when the `htmlFor` prop is missing', async () => {
      await checkSpecPageError(TnwLabel, `<tnw-label text="Username"></tnw-label>`, 'Required prop "htmlFor"');
    });

    it('throws an error when an invalid `color` is provided', async () => {
      await checkSpecPageError(TnwLabel, `<tnw-label text="Username" html-for="username" color="invalid"></tnw-label>`, 'Invalid prop value for "color"');
    });

    it('throws an error when an invalid `size` is provided', async () => {
      await checkSpecPageError(TnwLabel, `<tnw-label text="Username" html-for="username" size="invalid"></tnw-label>`, 'Invalid prop value for "size"');
    });
  });
});
