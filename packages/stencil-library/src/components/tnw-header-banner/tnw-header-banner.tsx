import { Component, Element, Fragment, Host, Prop, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { AlignmentType, BorderRadiusType } from '../../utils/component-props-types';
import { styles } from './tnw-header-banner.styles';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-header-banner-validate-props';

/**
 * This component is designed to be used inside the `tnw-header`.
 * 
 * The `tnw-header-banner` component creates a customizable banner for headers, featuring headings, subheadings, descriptions, and buttons.
 * It is designed to align with the theme of the parent header component, making it a cohesive part of the header design.
 * 
 * @slot heading - Slot for custom heading content if the `heading` prop is not used.
 * @slot subheading - Slot for custom subheading content if the `subheading` prop is not used.
 * @slot description - Slot for custom description content if the `description` prop is not used.
 * @slot button - Slot for custom button content if the `buttonLabel` prop is not used.
 * 
 * @part heading - The `tnw-heading` element displaying the main heading of the banner.
 * @part subheading - The `tnw-heading` element displaying the subheading of the banner.
 * @part description - The `tnw-text` element displaying the description of the banner.
 * @part button - The `tnw-button` element or the container for the button slot.
 */
@Component({
  tag: 'tnw-header-banner',
  shadow: true,
})
export class TnwHeaderBanner {
  private baseClass = `${GLOBAL_PREFIX}-header-banner`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwHeaderBannerElement;

  /**
   * The main heading text of the banner. This can be a simple string or passed through a slot using the `heading` slot.
   */
  @Prop() heading: string;

  /**
   * The subheading text of the banner. It provides secondary information under the main heading and can be customized via the `subheading` slot if needed.
   */
  @Prop() subheading: string;

  /**
   * The description text of the banner. It offers additional details beneath the heading and subheading, and can be customized via the `description` slot if needed.
   */
  @Prop() description: string;

  /**
   * The label for the banner's button. If not provided, the button content can be customized via the `button` slot.
   */
  @Prop() buttonLabel: string;

  /**
   * Defines the visual theme of the banner, matching it to the header's theme. Options include 'primary', 'secondary', 'inverse', 'auto', 'white', and 'black'. Default is 'auto'.
   */
  @Prop() theme: 'primary' | 'secondary' | 'inverse' | 'auto' | 'white' | 'black' = 'auto';

  /**
   * Controls the alignment of the banner content. Acceptable values are 'start', 'center', or 'end' to align the content horizontally and vertically within the banner. Default is 'start'.
   */
  @Prop() alignment: AlignmentType = 'start';

  /**
   * Specifies the width of the banner. It can be set to predefined size types or 'full' for full-width coverage.
   */
  @Prop() width: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'full';

  /**
   * When set to `true`, shifts the banner's vertical alignment to account for a sticky header. This ensures that the banner aligns properly beneath the sticky navbar.
   */
  @Prop() stickyNavbar: boolean = false;

  /**
   * Enables the image slot for adding custom images to the banner.
   */
  @Prop() enableImageSlot?: boolean = false;

  /**
   * Path to the image file to be displayed in the banner. if provided, the `imageAlt` prop is required.
   */
  @Prop() imageSrc?: string;

  /**
   * Alternative text for the banner image, improving accessibility.
   */
  @Prop() imageAlt?: string;

  /**
   * Wraps the image in a container for consistency.
   */
  @Prop() wrapImage?: boolean = false;

  /**
   * Controls the border radius of the banner image. It can be set to predefined size types or 'none' for no border.
   */
  @Prop() imageBorderRadius: BorderRadiusType = 'none';

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        extendedAppearanceStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.alignment, this.buttonLabel, this.description, this.enableImageSlot, this.heading, this.imageAlt, this.imageBorderRadius, this.imageSrc, this.stickyNavbar, this.subheading, this.theme, this.width, this.wrapImage];
    validateProps(propsValues);
  }

  private getThemeMatchedColor = () => {
    switch (this.theme) {
      case 'primary':
        return 'white';

      case 'secondary':
        return 'white';

      case 'inverse':
        return 'inverse';

      case 'auto':
        return 'auto';

      case 'white':
        return 'black';

      case 'black':
        return 'white';

      default:
        return 'auto';
    }
  };

  private getHostClasses(): string {
    const { baseClass, stickyNavbar } = this;

    return [
      baseClass,
      stickyNavbar ? `${baseClass}--stickyNavbar` : '',
    ].filter(Boolean).join(' ').trim();
  }

  private getContentClasses(): string {
    const { baseClass, alignment, width } = this;

    const contentClass = `${baseClass}__content`;

    return [
      contentClass,
      `${contentClass}--${alignment}`,
      `${contentClass}--${width}`,
    ].filter(Boolean).join(' ').trim();
  }

  private renderHeading(): JSX.Element {
    if (!isNotEmptyString(this.heading)) {
      return <slot name='heading' />;
    }

    return (
      <tnw-heading text={this.heading} size="2xl" level='h1' alignment={this.alignment} weight='600' color={this.getThemeMatchedColor()} part='heading' />
    );
  }

  private renderSubheading(): JSX.Element {
    if (!isNotEmptyString(this.subheading)) {
      return <slot name='subheading' />;
    }

    return (
      <tnw-heading text={this.subheading} size="md" level='h2' weight='400' alignment={this.alignment} color={this.getThemeMatchedColor()} part='subheading' />
    );
  }

  private renderDescription(): JSX.Element {
    if (!isNotEmptyString(this.description)) {
      return <slot name='description' />;
    }

    return (
      <tnw-text text={this.description} alignment={this.alignment} color={this.getThemeMatchedColor()} part='description' />
    );
  }
  private renderButton(): JSX.Element {
    if (!isNotEmptyString(this.buttonLabel)) {
      return <slot name='button' />;
    }

    return (
      <tnw-button label={this.buttonLabel} appearance='solid' variant='primary' part='button' />
    );
  }

  private renderHeadings(): JSX.Element {
    if (isNotEmptyString(this.heading) && isNotEmptyString(this.subheading)) {
      return (
        <div class={`${this.baseClass}__headings`}>
          {this.renderSubheading()}
          {this.renderHeading()}
        </div>
      )
    }

    return (
      <Fragment>
        {this.renderHeading()}
        {this.renderSubheading()}
      </Fragment>
    )
  }

  private renderImage(): JSX.Element | null {
    const { enableImageSlot, imageBorderRadius, imageSrc } = this;

    if (enableImageSlot || isNotEmptyString(imageSrc)) {
      return (
        <div class={`${this.baseClass}__image`} part='image-container'>
          {enableImageSlot ?
            <slot name='image' />
            :
            <tnw-image src={imageSrc} alt={this.imageAlt} BorderRadius={imageBorderRadius} part='image' heightSize='full' widthSize='full' objectFit='cover' />
          }
        </div>
      );
    }
  }

  private renderContent(): JSX.Element {
    return (
      <div class={this.getContentClasses()} part='content'>
        {this.renderHeadings()}
        {this.renderDescription()}
        {this.renderButton()}
      </div>
    );
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        {this.renderContent()}
        {this.renderImage()}
      </Host>
    );
  }
}
