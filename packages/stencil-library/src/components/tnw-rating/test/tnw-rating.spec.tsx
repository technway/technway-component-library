import { createSpecPage, checkError } from '../../../utils/testing-utils';
import { TnwRating } from '../tnw-rating';

describe('tnw-rating', () => {

  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const el = await createSpecPage(TnwRating, `<tnw-rating></tnw-rating>`);
      expect(el).toMatchSnapshot();
    });

    it('displays the correct number of stars based on `totalStars`', async () => {
      const el = await createSpecPage(TnwRating, `<tnw-rating total-stars="3"></tnw-rating>`);
      const icons = el.shadowRoot?.querySelectorAll('tnw-icon');
      expect(icons?.length).toBe(3);
    });

    it('displays the correct filled stars based on the `rating` value', async () => {
      const el = await createSpecPage(TnwRating, `<tnw-rating total-stars="5" rating="3"></tnw-rating>`);
      const filledIcons = el.shadowRoot?.querySelectorAll('tnw-icon[color="primary"]');
      expect(filledIcons?.length).toBe(3);
    });

    it('hides empty stars when `hideEmptyStars` is true', async () => {
      const el = await createSpecPage(TnwRating, `<tnw-rating total-stars="5" rating="3" hide-empty-stars="true"></tnw-rating>`);
      const icons = el.shadowRoot?.querySelectorAll('tnw-icon');
      expect(icons?.length).toBe(3);  // Only the filled stars should be rendered
    });
  });

  describe('Custom Prop Behavior', () => {
    it('applies correct `starSize` when starSize prop is set', async () => {
      const el = await createSpecPage(TnwRating, `<tnw-rating total-stars="5" star-size="lg"></tnw-rating>`);
      const icon = el.shadowRoot?.querySelector('tnw-icon');
      expect(icon?.getAttribute('size')).toBe('lg');
    });

    it('applies correct `filledStarColor` when filledStarColor is set', async () => {
      const el = await createSpecPage(TnwRating, `<tnw-rating total-stars="5" rating="3" filled-star-color="secondary"></tnw-rating>`);
      const filledIcons = el.shadowRoot?.querySelectorAll('tnw-icon[color="secondary"]');
      expect(filledIcons?.length).toBe(3);
    });
  });

  describe('Accessibility Behavior', () => {
    it('renders correct aria-label based on the rating and total stars', async () => {
      const el = await createSpecPage(TnwRating, `<tnw-rating rating="4" total-stars="5"></tnw-rating>`);
      expect(el?.getAttribute('aria-label')).toBe('Rating: 4 out of 5');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    // it('throws an error when `rating` is greater than `totalStars`', async () => {
    //   await checkError(TnwRating, `<tnw-rating total-stars="5" rating="6"></tnw-rating>`, 'Invalid prop value for "rating"');
    // });

    // it('throws an error when `totalStars` is less than 1', async () => {
    //   await checkError(TnwRating, `<tnw-rating total-stars="0"></tnw-rating>`, 'Invalid prop value for "totalStars"');
    // });

    it('throws an error when an invalid `starSize` is provided', async () => {
      await checkError(TnwRating, `<tnw-rating total-stars="5" star-size="invalid"></tnw-rating>`, 'Invalid prop value for "starSize"');
    });

    it('throws an error when an invalid `filledStarColor` is provided', async () => {
      await checkError(TnwRating, `<tnw-rating total-stars="5" filled-star-color="invalid"></tnw-rating>`, 'Invalid prop value for "filledStarColor"');
    });
  });
});
