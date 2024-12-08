import { Component, Element, Fragment, Host, Prop, State, h } from '@stencil/core';
import { getColorClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString, parseJSONAsync } from '../../utils/utils';
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
 * @slot copyrights - Slot for copyright information. Use `tnw-copyrights-footer` instead.
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
   * The color for the footer border.
   */
  @Prop() borderTopColor: ColorType | "none" = 'auto';

  /**
   * The padding size applied to the footer.
   */
  @Prop() padding?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'xl';

  /**
   * The margin top size applied to the footer.
   */
  @Prop() margin?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'none';

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
    const { baseClass, backgroundColor, centerContent, borderTopColor, margin } = this;

    return [
      baseClass,
      centerContent ? `${baseClass}--center` : ``,
      isNotEmptyString(borderTopColor) || borderTopColor !== 'none' ? `${baseClass}--borderTop` : ``,
      getColorClass('bg', backgroundColor),
      getColorClass('border-top', borderTopColor),
      `${baseClass}--margin-top-${margin}`,
    ].filter(Boolean).join(' ').trim();
  }

  private getContentClasses(): string {
    const { baseClass, padding } = this;

    const contentClass = `${baseClass}__content`;

    return [
      contentClass,
      `${contentClass}--padding-${padding}`,
    ].filter(Boolean).join(' ').trim();
  }

  private renderHeading(heading?: string) {
    if (!heading) return null;

    return (
      <tnw-heading text={heading} level='h3' weight='600' size='sm' color={this.headingColor} />
    )
  }

  private renderBrand(
    brand?: { logo?: string; name?: string },
    socialmedia?: Array<{ iconName: string; url: string }>
  ) {
    if (!brand || (!brand.logo && !brand.name)) return null;

    return (
      <div class={`${this.baseClass}__column ${this.baseClass}__brand`} part="brand">
        {brand.logo && <tnw-image src={brand.logo} alt={`${brand.name || 'Brand'} logo`} />}

        {this.renderSocialMedia(socialmedia)}
      </div>
    );
  }

  private renderLinks(links?: { heading?: string; items?: Array<{ label: string; url: string, newTab?: boolean }> }) {
    if (!links || !links.items?.length) return null;

    return (
      <div class={`${this.baseClass}__column ${this.baseClass}__links`} part="links">
        {this.renderHeading(links.heading)}
        <ul class={`${this.baseClass}__list`}>
          {links.items.map(link => (
            <li>
              <tnw-anchor
                class={`${this.baseClass}__list-item`}
                href={link.url}
                {...(link.newTab ? { newTab: true } : { newTab: false })}
                textDecoration='underline'
                color={this.textColor}
              >
                {link.label}
              </tnw-anchor>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private renderContact(contact?: { heading?: string; email?: string; phone?: string }) {
    if (!contact || (!contact.email && !contact.phone)) return null;

    return (
      <div class={`${this.baseClass}__column ${this.baseClass}__contact`} part="contact">
        {this.renderHeading(contact.heading)}
        <ul class={`${this.baseClass}__list`}>
          {contact.email && (
            <li>
              <tnw-anchor
                class={`${this.baseClass}__list-item`}
                href={`mailto:${contact.email}`}
                text={contact.email}
                newTab
                textDecoration='underline'
                color={this.textColor}
              />
            </li>
          )}
          {contact.phone && (
            <li>
              <tnw-text
                class={`${this.baseClass}__list-item`}
                text={contact.phone}
                color={this.textColor}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }

  private renderSocialMedia(socialmedia?: Array<{ iconName: string; url: string }>) {
    if (!socialmedia?.length) return null;

    return (
      <div class={`${this.baseClass}__socialmedia`} part="socialmedia">
        {socialmedia.map(icon => (
          <tnw-anchor href={icon.url} newTab hideNewTabIcon textDecoration='none'>
            <tnw-icon name={icon.iconName} size='md' color={this.textColor} />
          </tnw-anchor>
        ))}
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
      <div
        class={`${this.baseClass}__column ${this.baseClass}__newsletter`}
        style={{ gridColumn: "span 2" }}
        part="newsletter"
      >
        {
          newsletter.heading &&
          <tnw-heading text={newsletter.heading} level='h3' weight='600' size='md' color={this.headingColor} />
        }
        {
          newsletter.description &&
          <tnw-text
            class={`${this.baseClass}__newsletter-description`}
            text={newsletter.description}
            color={this.textColor}
          />
        }
        <tnw-newsletter-form
          inputPlaceholder={newsletter.placeholder}
          buttonLabel={newsletter.buttonText}
          variant='secondary'
          borderRadius='full'
        />
      </div>
    );
  }

  render() {
    const { parsedFooterData } = this;

    return (
      <Host class={this.getHostClasses()}>
        <footer
          class={!this.disableInternalContainer ? 'container' : ''}
          part="container"
        >
          <div
            class={this.getContentClasses()}
          >
            {parsedFooterData !== null ? (
              <Fragment>
                {this.renderBrand(parsedFooterData.brand!, parsedFooterData.socialmedia!)}
                {this.renderLinks(parsedFooterData.links!)}
                {this.renderContact(parsedFooterData.contact!)}
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
          </div>

          <slot name="copyrights" />
        </footer>
      </Host >
    );
  }
}