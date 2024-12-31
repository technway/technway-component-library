import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwRating } from '../tnw-rating';

describe('tnw-rating', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating></tnw-rating>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default values for optional props when not provided', async () => {
      const el = (await createSpecPage(
        TnwRating,
        `<tnw-rating></tnw-rating>`
      )) as HTMLTnwRatingElement;

      expect(el.totalStars).toBe(5);
      expect(el.rating).toBe(5);
      expect(el.starSize).toBe('sm');
      expect(el.filledStarColor).toBe('primary');
      expect(el.emptyStarColor).toBe('auto');
      expect(el.hideEmptyStars).toBe(false);
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom totalStars value', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating total-stars="7"></tnw-rating>`
      );
      expect(host.getAttribute('total-stars')).toBe('7');
    });

    it('renders with a custom rating value', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating rating="3"></tnw-rating>`
      );
      expect(host.getAttribute('rating')).toBe('3');
    });

    it('renders with custom starSize', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating star-size="lg"></tnw-rating>`
      );
      expect(host.getAttribute('star-size')).toBe('lg');
    });

    it('renders with custom filledStarColor and emptyStarColor', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating filled-star-color="secondary" empty-star-color="light"></tnw-rating>`
      );
      expect(host.getAttribute('filled-star-color')).toBe('secondary');
      expect(host.getAttribute('empty-star-color')).toBe('light');
    });

    it('renders only filled stars when hideEmptyStars is true', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating rating="3" total-stars="5" hide-empty-stars="true"></tnw-rating>`
      );
      const stars = host.shadowRoot?.querySelectorAll('tnw-icon');
      expect(stars?.length).toBe(3); // Only 3 filled stars
    });
  });

  describe('Accessibility Behavior', () => {
    it('applies appropriate aria-label for accessibility', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating rating="4" total-stars="5"></tnw-rating>`
      );
      expect(host.getAttribute('aria-label')).toBe('Rating: 4 out of 5');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error when an invalid starSize is provided', async () => {
      await checkSpecPageError(
        TnwRating,
        `<tnw-rating star-size="invalid"></tnw-rating>`,
        'Invalid prop value for "starSize"'
      );
    });

    it('throws an error when an invalid filledStarColor is provided', async () => {
      await checkSpecPageError(
        TnwRating,
        `<tnw-rating filled-star-color="invalid"></tnw-rating>`,
        'Invalid prop value for "filledStarColor"'
      );
    });

    it('throws an error when an invalid emptyStarColor is provided', async () => {
      await checkSpecPageError(
        TnwRating,
        `<tnw-rating empty-star-color="invalid"></tnw-rating>`,
        'Invalid prop value for "emptyStarColor"'
      );
    });

    it('renders correctly with rating greater than totalStars', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating rating="6" total-stars="5"></tnw-rating>`
      );
      const stars = host.shadowRoot?.querySelectorAll('tnw-icon');
      expect(stars?.length).toBe(5); // Only totalStars should be rendered
    });

    it('renders correctly with a rating of 0', async () => {
      const host = await createSpecPage(
        TnwRating,
        `<tnw-rating rating="0" total-stars="5"></tnw-rating>`
      );
      const stars = host.shadowRoot?.querySelectorAll('tnw-icon');
      expect(stars?.length).toBe(5); // All empty stars
    });
  });
});
