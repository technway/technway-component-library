import { newSpecPage } from '@stencil/core/testing';
import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwPortfolioGrid } from '../tnw-portfolio-grid';

describe('tnw-portfolio-grid', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with default props', async () => {
            const host = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]'></tnw-portfolio-grid>`
            );
            expect(host).toMatchSnapshot();
        });

        it('applies default values for optional props when not provided', async () => {
            const el = (await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]'></tnw-portfolio-grid>`
            )) as HTMLTnwPortfolioGridElement;

            expect(el.columns).toBe(3);
            expect(el.spacing).toBe('sm');
            expect(el.showGradientFade).toBe(false);
        });

        it('parses the `itemsData` JSON correctly', async () => {
            const page = await newSpecPage({
                components: [TnwPortfolioGrid],
                html: `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]'></tnw-portfolio-grid>`,
            });

            const instance = page.rootInstance as TnwPortfolioGrid;

            // Ensure the parsedItemsData is populated correctly
            expect(instance.parsedItemsData).toEqual([{ src: 'image.jpg', alt: 'An image' }]);
        });
    });

    describe('Custom Prop Behavior', () => {
        it('renders with a custom number of columns', async () => {
            const host = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]' columns="5"></tnw-portfolio-grid>`
            );
            const content = host.shadowRoot?.querySelector('.tnw-portfolio-grid__content');
            expect(content?.getAttribute('style')).toContain('grid-template-columns: repeat(5, 1fr)');
        });

        it('renders with custom spacing', async () => {
            const content = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]' spacing="lg"></tnw-portfolio-grid>`,
                '.tnw-portfolio-grid__content'
            );
            expect(content).toHaveClass('tnw-portfolio-grid__content--spacing-lg');
        });

        it('applies gradient fade when `showGradientFade` is true', async () => {
            const content = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]' show-gradient-fade="true"></tnw-portfolio-grid>`,
                '.tnw-portfolio-grid__content'
            );
            expect(content).toHaveClass('tnw-portfolio-grid__content--gradient-fade');
        });
    });

    describe('Grid Items Rendering', () => {
        it('renders items correctly with links', async () => {
            const host = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image","link":"https://example.com"}]'></tnw-portfolio-grid>`
            );
            const itemLink = host.shadowRoot?.querySelector('tnw-anchor');
            expect(itemLink?.getAttribute('href')).toBe('https://example.com');
        });

        it('renders items correctly without links', async () => {
            const host = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]'></tnw-portfolio-grid>`
            );
            const itemImage = host.shadowRoot?.querySelector('tnw-image');
            expect(itemImage?.getAttribute('src')).toBe('image.jpg');
            expect(itemImage?.getAttribute('alt')).toBe('An image');
        });

        it('renders items with custom grid row and column styles', async () => {
            const host = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image","rowStart":1,"rowEnd":2,"colStart":1,"colEnd":3}]'></tnw-portfolio-grid>`
            );
            const gridItem = host.shadowRoot?.querySelector('.tnw-portfolio-grid__item');
            expect(gridItem?.getAttribute('style')).toContain('grid-row: 1 / 2');
            expect(gridItem?.getAttribute('style')).toContain('grid-column: 1 / 3');
        });
    });

    describe('Error Handling and Edge Cases', () => {
        it('throws an error when `itemsData` is invalid JSON', async () => {
            await checkSpecPageError(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data="invalid-json"></tnw-portfolio-grid>`,
                'Error parsing JSON'
            );
        });

        it('renders empty grid when `itemsData` is an empty array', async () => {
            const host = await createSpecPage(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data="[]"></tnw-portfolio-grid>`
            );
            const items = host.shadowRoot?.querySelectorAll('.tnw-portfolio-grid__item');
            expect(items?.length).toBe(0);
        });

        it('throws an error when `spacing` is invalid', async () => {
            await checkSpecPageError(
                TnwPortfolioGrid,
                `<tnw-portfolio-grid items-data='[{"src":"image.jpg","alt":"An image"}]' spacing="invalid"></tnw-portfolio-grid>`,
                'Invalid prop value for "spacing"'
            );
        });
    });
});