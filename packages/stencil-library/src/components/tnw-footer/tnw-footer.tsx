import { Component, Element, Fragment, Host, Prop, State, Watch, h } from '@stencil/core';
import {
  getColorClass,
  GLOBAL_PREFIX,
  isAdoptedStyleSheetsSupported,
  isCSSStyleSheetSupported,
  isNotEmptyString,
  isValidStringifiedJSON,
  parseJSONAsync
} from '../../utils/utils';
import { ColorType, TextColorType } from '../../utils/component-props-types';
import { styles } from './tnw-footer.style';
import { colorStyleSheet, containerStyleSheet } from '../../utils/shared-styles';
import { FooterData } from './utils/tnw-footer-data-types';
import { validateProps } from './utils/tnw-footer-validate-props';

/**
 * The `tnw-footer` component displays a structured footer with sections for branding, links, contact information, 
 * social media, and a subscription subscription form. It is designed to be highly customizable and accessible.
 * 
 * @slot brand - Slot for the brand logo and name.
 * @slot links - Slot for useful links.
 * @slot contact - Slot for contact information.
 * @slot socialmedia - Slot for social media icons.
 * @slot subscription - Slot for the subscription subscription form.
 * @slot copyrights - Slot for copyright information. Use `tnw-copyrights-footer` instead.
 * 
 * @part footer - The main `footer` element wrapping the entire component.
 * @part container - The container wrapping the footer sections.
 * @slot link-<n> - Slots for custom links (requires `footerData.links.useCustomLinks` to be true).
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
   *   subscription: {
   *     heading: string,
   *     description: string,
   *     placeholder: string,
   *     buttonText: string
   *   }
   * }
   */
  @Prop() footerData: string;

  /**
   * Watches for changes to the `footerData` prop and re-parses the JSON data.
   * 
   * This watcher is triggered whenever the `footerData` prop changes. It handles:
   * - Parsing new JSON data asynchronously
   * - Comparing with previous parsed data to avoid unnecessary updates
   * - Maintaining the previous state if parsing fails
   * - Throwing errors for invalid JSON
   * 
   * @param {string | undefined} newValue - The new value of the footerData prop
   * @returns {Promise<void>} A promise that resolves when parsing is complete
   * 
   * @throws {Error} If the JSON parsing fails, with message "Failed to parse footerData: [value]"
   */
  @Watch('footerData')
  async handleFooterDataChange(newValue: string | undefined): Promise<void> {
    let oldParsedData = this.parsedFooterData;

    if (isNotEmptyString(newValue)) {
      try {
        const parsedData = await parseJSONAsync(newValue);
        if (parsedData === oldParsedData) {
          return;
        }

        this.parsedFooterData = parsedData;
      } catch (error) {
        this.parsedFooterData = oldParsedData;
        throw new Error(`Failed to parse footerData: ${newValue}`);
      }
    } else {
      this.parsedFooterData = oldParsedData;
    }
  }

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
    // Manually parse footer data on initial load, only if footerData is provided and is valid stringified JSON
    if (isNotEmptyString(this.footerData) && isValidStringifiedJSON(this.footerData)) {
      await this.handleFooterDataChange(this.footerData);
    }

    validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.footerData, this.headingColor, this.margin, this.padding, this.textColor]);
  }

  /**
   * Validates the footerData prop after the component has fully loaded, but only if footerData is provided.
   * 
   * This validation is performed in componentDidLoad rather than componentWillLoad
   * because the footerData prop may not be available during the earlier lifecycle method.
   * ComponentDidLoad ensures all props and state are fully initialized before validation.
   * 
   * @throws {Error} If footerData is provided but is not valid JSON
   */
  componentDidLoad() {
    const { footerData } = this;
    // Skip validation if footerData is empty, undefined, or null
    if (!isNotEmptyString(footerData)) {
      return;
    }

    if (isValidStringifiedJSON(footerData)) {
      console.log('parsedData is valid JSON');
    } else {
      throw new Error(`Failed to parse footerData: ${footerData}`);
    }
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
    if (!brand || (!brand.logo && !brand.name)) {
      return (
        <div class={`${this.baseClass}__column ${this.baseClass}__brand`} part="brand">
          <slot name="brand" />

          {this.renderSocialMedia(socialmedia)}
        </div>
      )
    };

    return (
      <div class={`${this.baseClass}__column ${this.baseClass}__brand`} part="brand">
        {brand.logo && <tnw-image src={brand.logo} alt={`${brand.name || 'Brand'} logo`} />}

        {this.renderSocialMedia(socialmedia)}
      </div>
    );
  }

  private renderLinks(links?: { heading?: string; items?: Array<{ label: string; url: string, newTab?: boolean }>; useCustomLinks?: boolean; linksLength?: number; }) {
    if (!links || !links.heading) {
      return null;
    }

    return (
      <div class={`${this.baseClass}__column ${this.baseClass}__links`} part="links">
        {links?.heading && this.renderHeading(links.heading)}
        <ul class={`${this.baseClass}__list`}>
          {(!links || (!links.items?.length && !links?.useCustomLinks && links.linksLength < 1)) ? (
            <slot name="links" />
          ) : (
            links?.useCustomLinks ? (
              Array.from({ length: links.linksLength }, (_, i) => {
                return (
                  <li>
                    <tnw-text
                      class={`${this.baseClass}__list-item`}
                      color={this.textColor}
                    >
                      <slot name={`link-${i + 1}`} />
                    </tnw-text>
                  </li>
                )
              })
            ) : (
              links.items.map(link => (
                <li>
                  <tnw-anchor
                    class={`${this.baseClass}__list-item`}
                    href={link.url}
                    newTab={link.newTab}
                    textDecoration='underline'
                    color={this.textColor}
                  >
                    {link.label}
                  </tnw-anchor>
                </li>
              )))
          )}
        </ul>
      </div>
    );
  }

  private renderContact(contact?: { heading?: string; email?: string; phone?: string }) {
    if (!contact || !contact.heading) {
      return null;
    }

    return (
      <div class={`${this.baseClass}__column ${this.baseClass}__contact`} part="contact">
        {contact?.heading && this.renderHeading(contact.heading)}
        <ul class={`${this.baseClass}__list`}>
          {(!contact.email && !contact.phone) ? (
            <slot name="contact" />
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </ul>
      </div>
    );
  }

  private renderSocialMedia(socialmedia?: Array<{ iconName: string; url: string }>) {
    return (
      <div class={`${this.baseClass}__socialmedia`} part="socialmedia">
        {!socialmedia?.length
          ? (
            <slot name="socialmedia" />
          ) : (
            socialmedia.map(icon => (
              <tnw-anchor href={icon.url} newTab hideNewTabIcon textDecoration='none'>
                <tnw-icon name={icon.iconName} size='md' color={this.textColor} />
              </tnw-anchor>
            )))
        }
      </div>
    );
  }

  private renderSubscription(subscription?: {
    heading?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
  }) {
    if (!subscription || !subscription.heading) {
      return null;
    }

    return (
      <div
        class={`${this.baseClass}__column ${this.baseClass}__subscription`}
        style={{ gridColumn: "span 2" }}
        part="subscription"
      >
        {
          subscription?.heading &&
          <tnw-heading text={subscription.heading} level='h3' weight='600' size='md' color={this.headingColor} />
        }
        {
          subscription.description &&
          <tnw-text
            class={`${this.baseClass}__subscription-description`}
            text={subscription.description}
            color={this.textColor}
          />
        }
        <tnw-subscription-form
          inputPlaceholder={subscription.placeholder}
          buttonLabel={subscription.buttonText}
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
                {this.renderSubscription(parsedFooterData.subscription!)}
              </Fragment>
            ) : (
              <Fragment>
                <slot name="brand"></slot>
                <slot name="links"></slot>
                <slot name="contact"></slot>
                <slot name="socialmedia"></slot>
                <slot name="subscription"></slot>
              </Fragment>
            )}
          </div>

          <slot name="copyrights" />
        </footer>
      </Host >
    );
  }
}