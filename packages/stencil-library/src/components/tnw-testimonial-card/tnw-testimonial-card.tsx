import { Component, Host, Prop, Element, h } from '@stencil/core';
import { generateRandomColor, getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { ColorType, BorderRadiusType, OptionalAppearanceType, SizeType } from '../../utils/component-props-types';
import { styles } from './tnw-testimonial-card.style';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-testimonial-card-validate-props';

/**
 * The `tnw-testimonial-card` component is a versatile component designed to display testimonials. It includes options for an author's photo, name, role, and a testimonial description, with support for custom styles, spacing, and visual effects.
 * 
 * @part avatar - The container for the author's avatar or randomly generated gradient avatar.
 * @part author-details - The container `div` element for the author's details (name and role).
 * @part author-photo - The `tnw-image` element for the author's photo.
 * @part author-name - The `tnw-heading` element displaying the author's name.
 * @part author-role - The `tnw-text` element displaying the author's role.
 * @part description - The `tnw-text` element displaying the testimonial description.
 */
@Component({
  tag: 'tnw-testimonial-card',
  shadow: true,
})
export class TnwTestimonialCard {

  private baseClass = `${GLOBAL_PREFIX}-testimonial-card`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwTestimonialCardElement;

  /**
   * The URL of the author's photo.
   */
  @Prop() authorPhotoSrc?: string;

  /**
   * Alternative text for the author's photo.
   */
  @Prop() authorPhotoAlt?: string;

  /**
   * The name of the author.
   */
  @Prop() authorName?: string;

  /**
   * The role or title of the author.
   */
  @Prop() authorRole?: string;

  /**
   * The text of the testimonial.
   */
  @Prop() text?: string;

  /**
   * Controls the spacing between description and author details.
   */
  @Prop() spacing?: SizeType = 'sm';

  /**
   * The padding size for the card.
   */
  @Prop() padding?: SizeType | "none" = "sm";

  /**
   * The appearance style of the card.
   */
  @Prop() appearance?: OptionalAppearanceType = 'outlined';

  /**
   * The color variant of the card, determining the overall color scheme.
   */
  @Prop() variant?: ColorType = 'auto';

  /**
   * The border radius applied to the card.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * If `true`, the card will have a glassmorphism effect applied to its background.
   */
  @Prop() useGlassmorphismEffect?: boolean = false;

  /**
   * If `true`, a random gradient avatar will be generated when no photo is provided.
   */
  @Prop() useRandomAvatar?: boolean = false;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback(): void {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        extendedAppearanceStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.appearance, this.authorName, this.authorPhotoAlt, this.authorPhotoSrc, this.authorRole, this.borderRadius, this.text, this.padding, this.spacing, this.useGlassmorphismEffect, this.useRandomAvatar, this.variant];
    validateProps(propsValues);
  }

  private getHostClasses(): string {
    const { baseClass, variant, appearance, borderRadius, useGlassmorphismEffect, padding, spacing } = this;
    return [
      baseClass,
      `${baseClass}--spacing-${spacing}`,
      appearance !== "none" ? `${baseClass}--padding-${padding}` : ``,
      useGlassmorphismEffect ? `${baseClass}--glassmorphism` : '',
      getAppearanceClass(appearance, variant),
      getBorderRadiusClass(borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private renderRandomAvatar(): JSX.Element | null {
    if (!this.useRandomAvatar) return null;

    const color1 = generateRandomColor();
    const color2 = generateRandomColor();

    return (
      <div
        style={{
          background: `linear-gradient(to bottom, ${color1} 0%, ${color2} 100%)`,
        }}
        class={`${this.baseClass}__author-avatar`}
        part="avatar"
      ></div>
    );
  }

  private renderAuthorDetails(): JSX.Element | null {
    if (!isNotEmptyString(this.authorName)) return null;
    
    return (
      <div class={`${this.baseClass}__author-details`} part='author-details'>
        {isNotEmptyString(this.authorPhotoSrc) ?
          <tnw-image src={this.authorPhotoSrc} alt={this.authorPhotoAlt} BorderRadius="circle" heightSize="full" widthSize="full" objectFit="cover" class={`${this.baseClass}__author-photo`} part='author-photo' />
          :
          this.renderRandomAvatar()
        }
        <div class={`${this.baseClass}__author-details-section`}>
          <tnw-heading level="h3" size="sm" weight="600" text={this.authorName} class={`${this.baseClass}__author-name`} part='author-name' textCase='capitalize' />
          <tnw-text text={this.authorRole} size="sm" weight="400" textCase="capitalize" class={`${this.baseClass}__author-role`} color='light' part='author-role' />
        </div>
      </div>
    )
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        {this.renderAuthorDetails()}
        <tnw-text text={this.text} class={`${this.baseClass}__description`} part='description' lineHeight='1_5' />
      </Host>
    );
  }
}