import { newSpecPage } from '@stencil/core/testing';
import { TnwInputForm } from '../tnw-input-form';

describe('tnw-input-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TnwInputForm],
      html: `<tnw-input-form></tnw-input-form>`,
    });
    expect(page.root).toEqualHtml(`
      <tnw-input-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tnw-input-form>
    `);
  });
});
