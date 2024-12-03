import { Component, Element, Fragment, Host, Prop, State, h } from '@stencil/core';
import { getColorClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, parseJSONAsync } from '../../utils/utils';
import { ColorType, TextColorType } from '../../utils/component-props-types';
import { styles } from './tnw-footer.style';
import { colorStyleSheet, containerStyleSheet } from '../../utils/shared-styles';
import { FooterData } from './utils/tnw-footer-data-types';

/**
 * The `tnw-footer` component displays a structured footer with sections for branding, links, contact information, 
 * social media, and a newsletter subscription form. It is designed to be highly customizable and accessible.
 * 
 * @slot brand - Slot for the brand logo and name.
 * @slot links - Slot for useful links.
 * @slot contact - Slot for contact information.
 * @slot socialmedia - Slot for social media icons.
 * @slot newsletter - Slot for the newsletter subscription form.
 * 
 * @part footer - The main `footer` element wrapping the entire component.
 * @part container - The container wrapping the footer sections.
 */
@Component({
  tag: 'tnw-footer',
  shadow: true,
})
export class TnwFooter {
  private baseClass = `${GLOBAL_PREFIX}-footer`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwFooterElement;

  @State() parsedFooterData: FooterData | null = null;

  /**
   * The background color for the footer.
   */
  @Prop() backgroundColor: ColorType = 'auto';

  /**
   * The color for the footer headings.
   */
  @Prop() headingColor: TextColorType = 'auto';

  /**
   * The color for the footer content.
   */
  @Prop() textColor: TextColorType = 'auto';

  /**
   * If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.
   */
  @Prop() disableInternalContainer?: boolean = false;

  /**
   * Center-align the footer content.
   */
  @Prop() centerContent: boolean = false;

  /**
   * JSON data for dynamically populating the footer content.
   * Expected structure:
   * {
   *   brand: { logo: string, name: string },
   *   links: { heading: string, items: Array<{ label: string, url: string }> },
   *   contact: { heading: string, email: string, phone: string },
   *   socialmedia: Array<{ iconName: string, url: string }>,
   *   newsletter: {
   *     heading: string,
   *     description: string,
   *     placeholder: string,
   *     buttonText: string
   *   }
   * }
   */
  @Prop() footerData!: string;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        colorStyleSheet,
        containerStyleSheet,
        this.componentStyles,
      ];
    }
  }

  async componentWillLoad() {
    this.parsedFooterData = await parseJSONAsync(this.footerData);
  }

  private getHostClasses(): string {
    const { baseClass, backgroundColor, centerContent } = this;

    return [
      baseClass,
      centerContent ? `${baseClass}--center` : '',
      getColorClass('bg', backgroundColor),
    ].filter(Boolean).join(' ').trim();
  }
  
  private renderBrand(brand?: { logo?: string; name?: string }) {
    if (!brand || (!brand.logo && !brand.name)) return null;

    return (
      <div class={`${this.baseClass}__brand`} part="brand">
        {brand.logo && <img src={brand.logo} alt={`${brand.name || 'Brand'} logo`} />}
        {brand.name && <span>{brand.name}</span>}
      </div>
    );
  }

  private renderLinks(links?: { heading?: string; items?: Array<{ label: string; url: string }> }) {
    if (!links || !links.items?.length) return null;

    return (
      <div class={`${this.baseClass}__links`} part="links">
        {links.heading && <h3>{links.heading}</h3>}
        <ul>
          {links.items.map(link => (
            <li>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  private renderContact(contact?: { heading?: string; email?: string; phone?: string }) {
    if (!contact || (!contact.email && !contact.phone)) return null;

    return (
      <div class={`${this.baseClass}__contact`} part="contact">
        {contact.heading && <h3>{contact.heading}</h3>}
        {contact.email && (
          <p>
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        )}
        {contact.phone && <p>Phone: {contact.phone}</p>}
      </div>
    );
  }
  
  private renderSocialMedia(socialmedia?: Array<{ iconName: string; url: string }>) {
    if (!socialmedia?.length) return null;

    return (
      <div class={`${this.baseClass}__socialmedia`} part="socialmedia">
        <ul>
          {socialmedia.map(icon => (
            <li>
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <i class={`icon-${icon.iconName}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  private renderNewsletter(newsletter?: {
    heading?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
  }) {
    if (!newsletter) return null;
    
    return (
      <div class={`${this.baseClass}__newsletter`} part="newsletter">
        {newsletter.heading && <h3>{newsletter.heading}</h3>}
        {newsletter.description && <p>{newsletter.description}</p>}
        <form>
          <input type="email" placeholder={newsletter.placeholder} />
          <button type="submit">{newsletter.buttonText}</button>
        </form>
      </div>
    );
  }

  render() {
    const { parsedFooterData } = this;
  
    return (
      <Host class={this.getHostClasses()}>
        <footer class={!this.disableInternalContainer ? 'container' : ''} part="container">
          {parsedFooterData !== null ? (
            <Fragment>
              {this.renderBrand(parsedFooterData.brand!)}
              {this.renderLinks(parsedFooterData.links!)}
              {this.renderContact(parsedFooterData.contact!)}
              {this.renderSocialMedia(parsedFooterData.socialmedia!)}
              {this.renderNewsletter(parsedFooterData.newsletter!)}
            </Fragment>
          ) : (
            <Fragment>
              <slot name="brand"></slot>
              <slot name="links"></slot>
              <slot name="contact"></slot>
              <slot name="socialmedia"></slot>
              <slot name="newsletter"></slot>
            </Fragment>
          )}
        </footer>
      </Host>
    );
  }  
}