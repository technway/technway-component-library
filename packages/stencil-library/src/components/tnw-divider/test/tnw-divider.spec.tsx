import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwDivider } from '../tnw-divider';

describe('tnw-divider', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwDivider,
        `<tnw-divider></tnw-divider>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default classes when optional props are not provided', async () => {
      const host = await createSpecPage(
        TnwDivider,
        `<tnw-divider></tnw-divider>`
      );
      expect(host).toHaveClasses([
        'tnw-divider',
        'tnw-divider--auto',
        'tnw-divider--solid',
      ]);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom color class', async () => {
      const host = await createSpecPage(
        TnwDivider,
        `<tnw-divider color="primary"></tnw-divider>`
      );
      expect(host).toHaveClass('tnw-divider--primary');
    });

    it('renders with a dashed variant', async () => {
      const host = await createSpecPage(
        TnwDivider,
        `<tnw-divider variant="dashed"></tnw-divider>`
      );
      expect(host).toHaveClass('tnw-divider--dashed');
    });

    it('renders with both custom color and variant classes', async () => {
      const host = await createSpecPage(
        TnwDivider,
        `<tnw-divider color="secondary" variant="dashed"></tnw-divider>`
      );
      expect(host).toHaveClasses([
        'tnw-divider',
        'tnw-divider--secondary',
        'tnw-divider--dashed',
      ]);
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid color is provided', async () => {
      await checkSpecPageError(
        TnwDivider,
        `<tnw-divider color="invalidColor"></tnw-divider>`,
        'Invalid prop value for "color"'
      );
    });

    it('throws an error when an invalid variant is provided', async () => {
      await checkSpecPageError(
        TnwDivider,
        `<tnw-divider variant="invalidVariant"></tnw-divider>`,
        'Invalid prop value for "variant"'
      );
    });
  });
});