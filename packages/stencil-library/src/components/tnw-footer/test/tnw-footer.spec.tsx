import { createSpecPage, checkSpecPageError, queryElement } from '../../../utils/testing-utils';
import { TnwFooter } from '../tnw-footer';

describe('tnw-footer', () => {
  describe('Default and Required Prop Behavior', () => {
    it('renders correctly with default props', async () => {
      const host = await createSpecPage(
        TnwFooter,
        `<tnw-footer></tnw-footer>`
      );
      expect(host).toMatchSnapshot();
    });

    it('applies default classes when optional props are not provided', async () => {
      const host = await createSpecPage(
        TnwFooter,
        `<tnw-footer></tnw-footer>`
      );
      expect(host).toHaveClasses([
        'tnw-footer',
        'bg-auto',
        'tnw-footer--margin-top-none',
      ]);
    });

    it('renders with correct padding class when provided', async () => {
      const footerContent = await createSpecPage(
        TnwFooter,
        `<tnw-footer padding="lg"></tnw-footer>`,
        '.tnw-footer__content'
      );
      expect(footerContent).toHaveClass('tnw-footer__content--padding-lg');
    });
  });

  describe('Custom Prop Behavior', () => {
    it('renders with a custom background and border-top color', async () => {
      const host = await createSpecPage(
        TnwFooter,
        `<tnw-footer background-color="primary" border-top-color="secondary"></tnw-footer>`
      );
      expect(host).toHaveClasses([
        'bg-primary',
        'tnw-footer--borderTop',
        'border-t-secondary',
      ]);
    });

    it('centers content when centerContent is true', async () => {
      const host = await createSpecPage(
        TnwFooter,
        `<tnw-footer center-content></tnw-footer>`
      );
      expect(host).toHaveClass('tnw-footer--center');
    });
  });

  describe('JSON Data Rendering', () => {
    const mockFooterData = JSON.stringify({
      brand: { logo: 'logo.png', name: 'Brand Name' },
      links: {
        heading: 'Useful Links',
        items: [
          { label: 'Home', url: '/home' },
          { label: 'About', url: '/about' },
        ],
      },
      contact: { heading: 'Contact Us', email: 'info@example.com', phone: '123-456-7890' },
      socialmedia: [{ iconName: 'facebook', url: 'https://facebook.com' }],
      newsletter: {
        heading: 'Stay Updated',
        description: 'Sign up for our newsletter!',
        placeholder: 'Enter your email',
        buttonText: 'Subscribe',
      },
    });

    let host: HTMLTnwFooterElement;

    beforeEach(async () => {
      host = await createSpecPage(
        TnwFooter,
        `<tnw-footer footer-data='${mockFooterData}'></tnw-footer>`
      ) as HTMLTnwFooterElement;
    });

    describe('Brand Section', () => {
      it('renders the brand logo and name', () => {
        const brandName = queryElement(host, 'tnw-image[alt="Brand Name logo"]');
        expect(brandName).not.toBeNull();
      });
    });

    describe('Links Section', () => {
      it('renders the heading for links', () => {
        const linksHeading = queryElement(host, 'tnw-heading[text="Useful Links"]');
        expect(linksHeading).not.toBeNull();
      });

      it('renders individual link items', () => {
        const linkItems = queryElement(host, 'ul > li > tnw-anchor[href="/home"]');
        expect(linkItems).not.toBeNull();
      });
    });

    describe('Contact Section', () => {
      it('renders the contact heading', () => {
        const contactHeading = queryElement(host, 'tnw-heading[text="Contact Us"]');
        expect(contactHeading).not.toBeNull();
      });

      it('renders the contact email', () => {
        const contactEmail = queryElement(host, 'tnw-anchor[href="mailto:info@example.com"]');
        expect(contactEmail?.getAttribute('text')).toBe('info@example.com');
      });

      it('renders the contact phone number', () => {
        const contactPhone = queryElement(host, 'tnw-text');
        expect(contactPhone?.getAttribute('text')).toBe('123-456-7890');
      });
    });

    describe('Social Media Section', () => {
      it('renders social media icons', () => {
        const socialMediaIcon = queryElement(host, 'tnw-icon[name="facebook"]');
        expect(socialMediaIcon).not.toBeNull();
      });
    });

    describe('Newsletter Section', () => {
      it('renders the newsletter heading', () => {
        const newsletterHeading = queryElement(host, 'tnw-heading[text="Stay Updated"]');
        expect(newsletterHeading).not.toBeNull();
      });

      it('renders the newsletter description', () => {
        const newsletterDescription = queryElement(host, 'tnw-text[text="Sign up for our newsletter!"]');
        expect(newsletterDescription).not.toBeNull();
      });

      it('renders the newsletter form with correct attributes', () => {
        const newsletterForm = queryElement(host, 'tnw-newsletter-form');
        expect(newsletterForm).not.toBeNull();
        expect(newsletterForm?.getAttribute('inputPlaceholder')).toBe('Enter your email');
        expect(newsletterForm?.getAttribute('buttonLabel')).toBe('Subscribe');
      });
    });

    describe('empty footer data', () => {
      it('renders fallback slots when JSON data is empty', async () => {
        const footer = await createSpecPage(
          TnwFooter,
          `<tnw-footer></tnw-footer>`,
        ) as HTMLTnwFooterElement;

        expect(queryElement(footer, 'slot[name="brand"]')).not.toBeNull();
        expect(queryElement(footer, 'slot[name="links"]')).not.toBeNull();
        expect(queryElement(footer, 'slot[name="contact"]')).not.toBeNull();
        expect(queryElement(footer, 'slot[name="socialmedia"]')).not.toBeNull();
        expect(queryElement(footer, 'slot[name="newsletter"]')).not.toBeNull();
      });
    });
  });

  describe('Slot Behavior', () => {
    it('renders slot content for brand', async () => {
      const slotContent = await createSpecPage(
        TnwFooter,
        `<tnw-footer>
          <div slot="brand">Brand Slot Content</div>
        </tnw-footer>`,
        'div[slot="brand"]',
        false
      );
      expect(slotContent).not.toBeNull();
      expect(slotContent.textContent).toBe('Brand Slot Content');
    });

    it('renders slot content for links', async () => {
      const slotContent = await createSpecPage(
        TnwFooter,
        `<tnw-footer>
          <ul slot="links">
            <li><a href="/home">Home</a></li>
          </ul>
        </tnw-footer>`,
        'ul[slot="links"]',
        false
      );
      expect(slotContent).not.toBeNull();
      expect(slotContent.querySelector('a').textContent).toEqual('Home');
    });

    it('renders slot content for contact', async () => {
      const slotContent = await createSpecPage(
        TnwFooter,
        `<tnw-footer>
          <div slot="contact">Contact Slot Content</div>
        </tnw-footer>`,
        'div[slot="contact"]',
        false
      );
      expect(slotContent).not.toBeNull();
      expect(slotContent.textContent).toBe('Contact Slot Content');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('throws an error for invalid background color', async () => {
      await checkSpecPageError(
        TnwFooter,
        `<tnw-footer background-color="invalidColor"></tnw-footer>`,
        'Invalid prop value for "backgroundColor"'
      );
    });

    it('throws an error for invalid borderTopColor', async () => {
      await checkSpecPageError(
        TnwFooter,
        `<tnw-footer border-top-color="invalidColor"></tnw-footer>`,
        'Invalid prop value for "borderTopColor"'
      );
    });

    it('handles invalid JSON data gracefully', async () => {
      await checkSpecPageError(
        TnwFooter,
        `<tnw-footer footer-data="invalid JSON"></tnw-footer>`,
        'Error parsing JSON:'
      );
    });
  });
});