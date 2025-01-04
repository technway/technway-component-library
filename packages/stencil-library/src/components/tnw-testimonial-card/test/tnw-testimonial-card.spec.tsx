import { createSpecPage, checkSpecPageError } from '../../../utils/testing-utils';
import { TnwTestimonialCard } from '../tnw-testimonial-card';

describe('tnw-testimonial-card', () => {
    describe('Default and Required Prop Behavior', () => {
        it('renders correctly with required props', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Great service!"></tnw-testimonial-card>`
            );
            expect(host).toMatchSnapshot();
        });

        it('uses default values for optional props when not provided', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Amazing experience!"></tnw-testimonial-card>`
            );
            expect(host).toHaveClasses([
                'tnw-testimonial-card',
                'tnw-testimonial-card--spacing-sm',
                'tnw-testimonial-card--padding-sm',
                'tnw-v-outlined-auto',
                'rounded-default',
            ]);
        });
    });

    describe('Custom Prop Behavior', () => {
        it('renders with a custom spacing class', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Great!" spacing="lg"></tnw-testimonial-card>`
            );
            expect(host).toHaveClass('tnw-testimonial-card--spacing-lg');
        });

        it('renders with a custom border radius class', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Well done!" border-radius="circle"></tnw-testimonial-card>`
            );
            expect(host).toHaveClass('rounded-circle');
        });

        it('renders with a custom appearanceColor and appearance', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Nice design!" appearance-color="primary" appearance="solid"></tnw-testimonial-card>`
            );
            expect(host).toHaveClass('tnw-v-solid-primary');
        });

        it('renders author details with a photo when authorPhotoSrc is provided', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="Jane Doe" text="Fantastic!" author-photo-src="/path/to/photo.jpg"></tnw-testimonial-card>`,
                'tnw-image'
            );
            expect(host.getAttribute('src')).toBe('/path/to/photo.jpg');
        });

        it('renders a random gradient avatar when useRandomAvatar is true and no photo is provided', async () => {
            const avatar = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="Jane Doe" text="Great job!" use-random-avatar></tnw-testimonial-card>`,
                '.tnw-testimonial-card__author-avatar'
            );
            expect(avatar).toBeTruthy();
        });

        it('sets the correct alt attribute for the author photo', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="Jane Doe" text="Alt test" author-photo-src="/path/to/photo.jpg" author-photo-alt="Profile photo"></tnw-testimonial-card>`,
                'tnw-image'
            );
            expect(host.getAttribute('alt')).toBe('Profile photo');
        });

        it('applies the glassmorphism class when useGlassmorphismEffect is true', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="Jane Doe" text="Glassmorphism test" use-glassmorphism-effect></tnw-testimonial-card>`
            );
            expect(host).toHaveClass('tnw-testimonial-card--glassmorphism');
        });

        it('applies the correct padding class when padding is set', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="Jane Doe" text="Padding test" padding="lg"></tnw-testimonial-card>`
            );
            expect(host).toHaveClass('tnw-testimonial-card--padding-lg');
        });

        it('does not render description if neither text nor slot content is provided', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe"></tnw-testimonial-card>`
            );
            const description = host.querySelector('.tnw-testimonial-card__description');
            expect(description).toBeNull();
        });
    });

    describe('Error Handling and Edge Cases', () => {
        it('throws an error when an invalid spacing value is provided', async () => {
            await checkSpecPageError(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Invalid spacing" spacing="invalidValue"></tnw-testimonial-card>`,
                'Invalid prop value for "spacing"'
            );
        });

        it('throws an error when an invalid appearance and appearanceColor combination is provided', async () => {
            await checkSpecPageError(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="Jane Doe" text="Invalid appearance" appearance="invalidAppearance" appearance-color="invalidVariant"></tnw-testimonial-card>`,
                'Invalid prop value for "appearance" or "appearanceColor"'
            );
        });

        it('throws an error when an invalid borderRadius value is provided', async () => {
            await checkSpecPageError(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Invalid border radius" border-radius="invalidValue"></tnw-testimonial-card>`,
                'Invalid prop value for "borderRadius"'
            );
        });

        it('throws an error when an invalid padding value is provided', async () => {
            await checkSpecPageError(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe" text="Invalid padding" padding="invalidValue"></tnw-testimonial-card>`,
                'Invalid prop value for "padding"'
            );
        });
    });

    describe('Slot Behavior', () => {
        it('renders slot content for description when text is not provided', async () => {
            const host = await createSpecPage(
                TnwTestimonialCard,
                `<tnw-testimonial-card author-name="John Doe"><span>Custom Testimonial Content</span></tnw-testimonial-card>`
            );
            expect(host).toMatchSnapshot();
        });
    });
});