import { createSpecPage } from '../../../utils/testing-utils';
import { TnwItemsCarousel } from '../tnw-items-carousel';

describe('tnw-items-carousel', () => {
  it('renders', async () => {
    const el = await createSpecPage(TnwItemsCarousel, '<tnw-items-carousel></tnw-items-carousel>');
    expect(el).toMatchSnapshot();
  });
});
