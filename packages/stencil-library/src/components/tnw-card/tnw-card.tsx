import { Component, Host, Prop, Element, h } from '@stencil/core';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, hasSlotContent, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { ColorType, TextAlignmentType, BorderRadiusType, LayoutType, LogicalAlignmentType, OptionalAppearanceType, SizeType } from '../../utils/component-props-types';
import { styles } from './tnw-card.styles';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-card-validate-props';

/**
 * The `tnw-card` component is a flexible container used to display content such as images, text, and buttons in a 
 * card layout. It supports various customization options for layout orientation, appearance colors, spacing, 
 * and content alignment. The card can display images, headings, subheadings, descriptions, and buttons, 
 * with slots for each, allowing full customization.
 * 
 * @slot image - Slot for the card image. This slot can be used if the `imageSrc` prop is not set.
 * @slot heading - Slot for the card heading. This slot can be used if the `heading` prop is not set.
 * @slot subheading - Slot for the card subheading. This slot can be used if the `subheading` prop is not set.
 * @slot description - Slot for the card description. This slot can be used if the `description` prop is not set.
 * @slot button - Slot for the card button. This slot can be used if the `buttonLabel` prop is not set.
 * @slot content - Slot for custom card content, replacing default content.
 * @slot badge - Slot for custom badge content if the `badgeLabel` prop is not used.
 * @slot date - Slot for custom date content if the `date` prop is not used.
 * 
 * @part image - The card's `tnw-image` element or the container for the `image` slot.
 * @part image-container - The container `div` element for the card's image.
 * @part heading - The `tnw-heading` element displaying the card's main heading.
 * @part subheading - The `tnw-heading` element displaying the card's subheading.
 * @part description - The `tnw-text` element displaying the card's description.
 * @part button - The `tnw-button` element or the container for the `button` slot.
 * @part content - The container `div` element that wraps all content inside the card.
 * @part content-heading - The container `div` element for the card's heading and subheading.
 * @part date - The `tnw-text` element displaying the card's date.
 * @part date-icon - The `tnw-icon` element displaying the date icon.
 * @part badge - The `tnw-text` element displaying the card's badge.
 */
@Component({
  tag: 'tnw-card',
  shadow: true,
})
export class TnwCard {
  private baseClass = `${GLOBAL_PREFIX}-card`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwCardElement;

  /**
   * The image source for the card.
   */
  @Prop() imageSrc?: string;

  /**
   * Alternate text for the image.
   */
  @Prop() imageAlt?: string;

  /**
   * The height of the image. Value should be a valid CSS unit, such as `px`, `em`, auto, or `%`.
   */
  @Prop() imageHeight?: string = '300px';

  /**
   * The card's heading text.
   */
  @Prop() heading?: string;

  /**
   * The card's subheading text.
   */
  @Prop() subheading?: string;

  /**
   * The card's description text.
   */
  @Prop() description?: string;

  /**
   * The label for the card's button.
   */
  @Prop() buttonLabel?: string;

  /**
   * The href attribute for the card's button.
   */
  @Prop() buttonHref?: string;

  /**
   * The border radius applied to the card's button.
   */
  @Prop() buttonRadius?: BorderRadiusType = 'default';

  /**
   * Usw this to display a date. Useful for articles and blog posts.
   */
  @Prop() date?: string;

  /**
   * The label for the card's badge. Useful for displaying categories or statuses.
   */
  @Prop() badgeLabel?: string;

  /**
   * Controls the alignment of the card's content.
   */
  @Prop() textAlignment?: TextAlignmentType = 'start';

  /**
   * Controls the alignment of items within the card.
   */
  @Prop() itemsAlignment?: LogicalAlignmentType;

  /**
   * Controls the spacing between image and the contnet.
   */
  @Prop() spacing?: SizeType = 'sm';

  /**
   * Controls the spacing between elements inside the content.
   */
  @Prop() contentSpacing?: SizeType = 'sm';

  /**
   * The padding size for the card.
   */
  @Prop() padding?: SizeType | "none";

  /**
   * The appearance color of the card.
   */
  @Prop() appearance?: OptionalAppearanceType = 'none';

  /**
   * The color appearance color of the card, determining the overall color scheme.
   */
  @Prop() appearanceColor?: ColorType = 'auto';

  /**
   * If `true`, the card content will be displayed before the image.
   */
  @Prop() orderContentFirst?: boolean = false;

  /**
   * Specifies the layout orientation of the card, either 'vertical' or 'horizontal'.
   */
  @Prop() layout?: LayoutType = 'vertical';

  /**
   * The border radius applied to the card.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * If `true`, the card will have a glassmorphism effect applied to its background.
   */
  @Prop() useGlassmorphismEffect?: boolean = false;

  /**
   * If `true`, the image will be displayed at a larger size, not be equally split with the content. Used for horizontal layout.
   */
  @Prop() largerImage?: boolean = false;

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
    validateProps([this.appearance, this.appearanceColor, this.badgeLabel, this.borderRadius, this.buttonHref, this.buttonLabel, this.buttonRadius, this.contentSpacing, this.date, this.description, this.heading, this.imageAlt, this.imageHeight, this.imageSrc, this.itemsAlignment, this.largerImage, this.layout, this.orderContentFirst, this.padding, this.spacing, this.subheading, this.textAlignment, this.useGlassmorphismEffect]);
  }

  private getHostClasses() {
    const { baseClass, appearanceColor, appearance, borderRadius, useGlassmorphismEffect, itemsAlignment, layout, padding, spacing, largerImage } = this;
    return [
      baseClass,
      `${baseClass}--${layout}`,
      isNotEmptyString(itemsAlignment) && itemsAlignment !== "center" ? `${baseClass}--items-${itemsAlignment}` : ``,
      itemsAlignment === 'center' && layout === 'horizontal' ? `${baseClass}--horizontal-center` : '',
      itemsAlignment === 'center' && layout === 'vertical' ? `${baseClass}--vertical-center` : '',
      largerImage ? `${baseClass}--larger-image` : `${baseClass}--equal-image`,
      `${baseClass}--spacing-${spacing}`,
      appearance !== "none" ? `${baseClass}--padding-${padding}` : ``,
      useGlassmorphismEffect ? `${baseClass}--glassmorphism` : '',
      getAppearanceClass(appearance, appearanceColor),
      getBorderRadiusClass(borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private getContentClasses() {
    const { baseClass, contentSpacing, textAlignment } = this;
    const contentClass = `${baseClass}__content`;
    return [
      contentClass,
      `${contentClass}--text-${textAlignment}`,
      `${contentClass}--spacing-${contentSpacing}`,
    ].filter(Boolean).join(' ').trim();
  }

  private renderImage() {
    if (hasSlotContent({ el: this.el, slotName: 'image' })) {
      return (
        <div class={`${this.baseClass}__image`} part='image-container'>
          <slot name='image' />
        </div>
      )
    }

    if (isNotEmptyString(this.imageSrc)) {
      const { baseClass, borderRadius, imageHeight, imageSrc, heading, imageAlt } = this;

      return (
        <div class={`${baseClass}__image`} part='image'>
          <img
            src={imageSrc}
            alt={heading || imageAlt}
            class={borderRadius ? getBorderRadiusClass(borderRadius) : ''}
            style={{
              width: '100%',
              height: imageHeight,
              objectFit: 'cover',
            }}
            loading='lazy'
            part='image'
          />
        </div>
      )
    }

    return null;
  }

  private renderDate() {
    if (!isNotEmptyString(this.date)) {
      return hasSlotContent({ el: this.el, slotName: 'date' }) ? <slot name='date' /> : null;
    }

    return (
      <div class={`${this.baseClass}__date-wrapper`} part='date-wrapper'>
        <tnw-icon name='tnw-alarm' size='xs' appearance='none' part='date-icon' />
        <tnw-text text={this.date} size="xs" textTag='span' weight='600' part='date' widthSize='unset' displayMode='inline-block' />
      </div>
    )
  }

  private renderBadge() {
    if (!isNotEmptyString(this.badgeLabel)) {
      return hasSlotContent({ el: this.el, slotName: 'badge' }) ? <slot name='badge' /> : null;
    }

    return (
      <tnw-badge
        label={this.badgeLabel}
        size="sm"
        appearance='outlined'
        appearanceColor='auto'
        part='badge'
      />
    )
  }

  private renderHeading() {
    if (!isNotEmptyString(this.heading)) {
      return hasSlotContent({ el: this.el, slotName: 'heading' }) ? <slot name='heading' /> : null;
    }

    return (
      <tnw-heading text={this.heading} size="lg" level='h3' alignment={this.textAlignment} weight='600' part='heading' />
    )
  }

  private renderSubheading() {
    if (!isNotEmptyString(this.subheading)) {
      return hasSlotContent({ el: this.el, slotName: 'subheading' }) ? <slot name='subheading' /> : null;
    }

    return (
      <tnw-heading text={this.subheading} size="sm" level='h4' alignment={this.textAlignment} part='subheading' />
    )
  }

  private renderDescription() {
    if (!isNotEmptyString(this.description)) {
      return hasSlotContent({ el: this.el, slotName: 'description' }) ? <slot name='description' /> : null;
    }

    return (
      <tnw-text text={this.description} alignment={this.textAlignment} part='description' />
    )
  }

  private renderButton() {
    if (!isNotEmptyString(this.buttonLabel)) {
      return hasSlotContent({ el: this.el, slotName: 'button' }) ? <slot name='button' /> : null;
    }

    return (
      <tnw-button label={this.buttonLabel} borderRadius={this.buttonRadius} part='button' href={this.buttonHref} hoverEffect='contrast' />
    )
  }

  private renderContent() {
    if (hasSlotContent({ el: this.el, slotName: 'content' })) {
      return (
        <div class={this.getContentClasses()} part='content'>
          <slot name='content' />
        </div>
      )
    }

    return (
      <div class={this.getContentClasses()} part='content'>
        <div class={`${this.baseClass}__content-heading`}>
          {(this.renderBadge() !== null || this.renderDate() !== null) && (
            <div class={`${this.baseClass}__badge-wrapper`}>
              {this.renderBadge()}
              {this.renderDate()}
            </div>
          )}
          {this.renderHeading()}
          {this.renderSubheading()}
        </div>

        {this.renderDescription()}

        {this.renderButton()}
      </div>
    )
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        {
          this.orderContentFirst
          && this.renderContent()
        }

        {this.renderImage()}

        {
          !this.orderContentFirst
          && this.renderContent()
        }
      </Host>
    );
  }
}