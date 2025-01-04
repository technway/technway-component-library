import { newSpecPage } from '@stencil/core/testing';
import { TnwRowsCarousel } from '../tnw-rows-carousel';
import { checkSpecPageError, createSpecPage } from '../../../utils/testing-utils';

describe('tnw-rows-carousel', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders with default props', async () => {
            const host = await createSpecPage(
                TnwRowsCarousel,
                '<tnw-rows-carousel></tnw-rows-carousel>'
            );

            expect(host).toMatchSnapshot();
        });

        it('uses default animation speed value (22000) when not specified', async () => {
            const page = await newSpecPage({
                components: [TnwRowsCarousel],
                html: '<tnw-rows-carousel></tnw-rows-carousel>',
            });

            const firstRow = page.root.shadowRoot.querySelector('.tnw-rows-carousel__row') as HTMLElement;
            expect(firstRow.style.animationDuration).toBe('22000ms');
        });

        it('uses default value (2) when not specified', async () => {
            const host = await createSpecPage(
                TnwRowsCarousel,
                '<tnw-rows-carousel></tnw-rows-carousel>'
            );

            const rows = host.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
            expect(rows.length).toBe(2);
        });
    });

    describe('Custom Prop Behavior', () => {
        it('renders with custom number of rows', async () => {
            const host = await createSpecPage(
                TnwRowsCarousel,
                '<tnw-rows-carousel rows="4"></tnw-rows-carousel>'
            );

            const rows = host.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
            expect(rows.length).toBe(4);
        });

        it('accepts valid positive number of rows', async () => {
            const validRows = [1, 2, 3, 5, 10];

            for (const rowCount of validRows) {
                const host = await createSpecPage(
                    TnwRowsCarousel,
                    `<tnw-rows-carousel rows="${rowCount}"></tnw-rows-carousel>`
                );

                const rows = host.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
                expect(rows.length).toBe(rowCount);
            }
        });

        it('accepts valid positive numbers of animationSpeed', async () => {
            const validSpeeds = [1000, 5000, 10000, 22000];

            for (const speed of validSpeeds) {
                const page = await newSpecPage({
                    components: [TnwRowsCarousel],
                    html: `<tnw-rows-carousel animation-speed="${speed}"></tnw-rows-carousel>`,
                });

                const firstRow = page.root.shadowRoot.querySelector('.tnw-rows-carousel__row') as HTMLElement;
                expect(firstRow.style.animationDuration).toBe(`${speed}ms`);
            }
        });

        it('handles multiple valid props together', async () => {
            const host = await createSpecPage(
                TnwRowsCarousel,
                '<tnw-rows-carousel rows="3" animation-speed="5000"></tnw-rows-carousel>'
            );

            const rows = host.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
            expect(rows.length).toBe(3);

            rows.forEach((row: HTMLElement) => {
                expect(row.style.animationDuration).toBe('5000ms');
            });
        });
    });

    describe('Events and Functionality', () => {
        it('applies correct animation styles to rows', async () => {
            const page = await newSpecPage({
                components: [TnwRowsCarousel],
                html: '<tnw-rows-carousel animation-speed="5000"></tnw-rows-carousel>',
            });

            const rows = page.root.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');

            // Check first row styles (odd row)
            const firstRow = rows[0] as HTMLElement;

            expect(firstRow.style.animationDuration).toBe('5000ms');
            expect(firstRow.style.animationDirection).toBe('alternate');
            expect(firstRow.style.animationPlayState).toBe('running');

            // Check second row styles (even row)
            const secondRow = rows[1] as HTMLElement;
            expect(secondRow.style.animationDuration).toBe('5000ms');
            expect(secondRow.style.animationDirection).toBe('alternate-reverse');
            expect(secondRow.style.animationPlayState).toBe('running');
        });

        it('handles mouse events correctly', async () => {
            const page = await newSpecPage({
                components: [TnwRowsCarousel],
                html: '<tnw-rows-carousel></tnw-rows-carousel>',
            });

            const firstRow = page.root.shadowRoot.querySelector('.tnw-rows-carousel__row') as HTMLElement;

            // Simulate mouse enter
            firstRow.dispatchEvent(new MouseEvent('mouseenter'));
            await page.waitForChanges();
            expect(firstRow.style.animationPlayState).toBe('paused');

            // Simulate mouse leave
            firstRow.dispatchEvent(new MouseEvent('mouseleave'));
            await page.waitForChanges();
            expect(firstRow.style.animationPlayState).toBe('running');
        });

        it('emits events in correct order during mouse interaction', async () => {
            const page = await newSpecPage({
                components: [TnwRowsCarousel],
                html: '<tnw-rows-carousel></tnw-rows-carousel>',
            });

            const pauseSpy = jest.fn();
            const resumeSpy = jest.fn();
            page.root.addEventListener('tnwRowPause', pauseSpy);
            page.root.addEventListener('tnwRowResume', resumeSpy);

            const firstRow = page.root.shadowRoot.querySelector('.tnw-rows-carousel__row') as HTMLElement;

            // Test mouseenter
            firstRow.dispatchEvent(new MouseEvent('mouseenter'));
            await page.waitForChanges();
            expect(pauseSpy).toHaveBeenCalledTimes(1);
            expect(pauseSpy).toHaveBeenCalledWith(expect.objectContaining({ detail: 0 }));
            expect(resumeSpy).not.toHaveBeenCalled();

            // Test mouseleave
            firstRow.dispatchEvent(new MouseEvent('mouseleave'));
            await page.waitForChanges();
            expect(resumeSpy).toHaveBeenCalledTimes(1);
            expect(resumeSpy).toHaveBeenCalledWith(expect.objectContaining({ detail: 0 }));
        });
    });

    describe('Slot Behavior', () => {
        it('renders slots correctly', async () => {
            const page = await newSpecPage({
                components: [TnwRowsCarousel],
                html: `
                    <tnw-rows-carousel rows="2">
                        <div slot="row-1">Row 1 Content</div>
                        <div slot="row-2">Row 2 Content</div>
                    </tnw-rows-carousel>
                    `,
            });

            const slots = page.root.shadowRoot.querySelectorAll('slot');
            expect(slots.length).toBe(2);
            expect(slots[0].getAttribute('name')).toBe('row-1');
            expect(slots[1].getAttribute('name')).toBe('row-2');
        });
    });

    describe('Method and Event Behavior', () => {

        it('public methods control animation state correctly', async () => {
            const page = await newSpecPage({
                components: [TnwRowsCarousel],
                html: '<tnw-rows-carousel rows="3"></tnw-rows-carousel>',
            });

            // Test pauseAll
            await page.root.pauseAll();
            const rows = page.root.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
            rows.forEach((row: HTMLElement) => {
                expect(row.style.animationPlayState).toBe('paused');
            });

            // Test resumeAll
            await page.root.resumeAll();
            rows.forEach((row: HTMLElement) => {
                expect(row.style.animationPlayState).toBe('running');
            });

            // Test toggleRow
            await page.root.toggleRow(1);
            expect((rows[1] as HTMLElement).style.animationPlayState).toBe('paused');
            await page.root.toggleRow(1);
            expect((rows[1] as HTMLElement).style.animationPlayState).toBe('running');
        });

        describe('Public API Methods', () => {
            let page: any;
            let component: TnwRowsCarousel;
            let pauseSpy: jest.Mock;
            let resumeSpy: jest.Mock;

            beforeEach(async () => {
                page = await newSpecPage({
                    components: [TnwRowsCarousel],
                    html: '<tnw-rows-carousel rows="3"></tnw-rows-carousel>',
                });
                component = page.rootInstance;
                pauseSpy = jest.fn();
                resumeSpy = jest.fn();
                page.root.addEventListener('tnwRowPause', pauseSpy);
                page.root.addEventListener('tnwRowResume', resumeSpy);
            });

            it('pauseAll() pauses all rows and emits events', async () => {
                await component.pauseAll();
                const rows = page.root.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');

                rows.forEach((row: HTMLElement, index: number) => {
                    expect(row.style.animationPlayState).toBe('paused');
                    expect(pauseSpy).toHaveBeenCalledWith(
                        expect.objectContaining({ detail: index })
                    );
                });

                expect(pauseSpy).toHaveBeenCalledTimes(3); // 3 rows
            });

            it('resumeAll() resumes all rows and emits events', async () => {
                // First pause all rows
                await component.pauseAll();
                pauseSpy.mockClear();
                resumeSpy.mockClear();

                await component.resumeAll();
                const rows = page.root.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');

                rows.forEach((row: HTMLElement, index: number) => {
                    expect(row.style.animationPlayState).toBe('running');
                    expect(resumeSpy).toHaveBeenCalledWith(
                        expect.objectContaining({ detail: index })
                    );
                });

                expect(resumeSpy).toHaveBeenCalledTimes(3); // 3 rows
            });

            describe('toggleRow()', () => {
                it('toggles specific row animation state', async () => {
                    await component.toggleRow(1); // Toggle middle row

                    const rows = page.root.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
                    expect(rows[0].style.animationPlayState).toBe('running');
                    expect(rows[1].style.animationPlayState).toBe('paused');
                    expect(rows[2].style.animationPlayState).toBe('running');
                    expect(pauseSpy).toHaveBeenCalledWith(
                        expect.objectContaining({ detail: 1 })
                    );
                });

                it('handles invalid row indices gracefully', async () => {
                    await component.toggleRow(-1);
                    await component.toggleRow(999);

                    const rows = page.root.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
                    rows.forEach(row => {
                        expect(row.style.animationPlayState).toBe('running');
                    });

                    expect(pauseSpy).not.toHaveBeenCalled();
                    expect(resumeSpy).not.toHaveBeenCalled();
                });

                it('toggles back to original state on second call', async () => {
                    await component.toggleRow(0);
                    pauseSpy.mockClear();
                    resumeSpy.mockClear();

                    await component.toggleRow(0);

                    const rows = page.root.shadowRoot.querySelectorAll('.tnw-rows-carousel__row');
                    expect(rows[0].style.animationPlayState).toBe('running');
                    expect(resumeSpy).toHaveBeenCalledWith(
                        expect.objectContaining({ detail: 0 })
                    );
                });
            });
        });
    });

    describe('Error Handling', () => {
        it('Throws error for negative rows', async () => {
            await checkSpecPageError(
                TnwRowsCarousel,
                `<tnw-rows-carousel rows="0"></tnw-rows-carousel>`,
                'rows must be a positive number'
            );
        });

        it('warns for negative animation speed', async () => {
            await checkSpecPageError(
                TnwRowsCarousel,
                `<tnw-rows-carousel animation-speed="-1000"></tnw-rows-carousel>`,
                'animationSpeed must be a positive number'
            );
        });

        it('warns for invalid rows prop types', async () => {
            await checkSpecPageError(
                TnwRowsCarousel,
                `<tnw-rows-carousel rows="hello"></tnw-rows-carousel>`,
                'Invalid prop value for "rows"'
            );
        });

        it('warns for invalid animationSpeed prop types', async () => {
            await checkSpecPageError(
                TnwRowsCarousel,
                `<tnw-rows-carousel animation-speed="hello"></tnw-rows-carousel>`,
                'Invalid prop value for "animationSpeed"'
            );
        });
    });
});