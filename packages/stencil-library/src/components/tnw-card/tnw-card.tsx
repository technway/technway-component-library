import { Component, Host, Prop, Element, h } from '@stencil/core';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { ColorType, TextAlignmentType, BorderRadiusType, LayoutType, LogicalAlignmentType, OptionalAppearanceType, SizeType } from '../../utils/component-props-types';
import { styles } from './tnw-card.styles';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-card-validate-props';

/**
 * The `tnw-card` component is a flexible container used to display content such as images, text, and buttons in a 
 * card layout. It supports various customization options for layout orientation, appearance styles, spacing, 
 * and content alignment. The card can display images, headings, subheadings, descriptions, and buttons, 
 * with slots for each, allowing full customization.
 * 
 * @slot image - Slot for the card image. This slot can be used if the `imageSrc` prop is not set.
 * @slot heading - Slot for the card heading. This slot can be used if the `heading` prop is not set.
 * @slot subheading - Slot for the card subheading. This slot can be used if the `subheading` prop is not set.
 * @slot description - Slot for the card description. This slot can be used if the `description` prop is not set.
 * @slot button - Slot for the card button. This slot can be used if the `buttonLabel` prop is not set.
 * @slot content - Slot for custom card content, replacing default content when `enableContentSlot` is set to `true`.
 * 
 * @part image - The card's `tnw-image` element or the container for the `image` slot.
 * @part image-container - The container `div` element for the card's image.
 * @part heading - The `tnw-heading` element displaying the card's main heading.
 * @part subheading - The `tnw-heading` element displaying the card's subheading.
 * @part description - The `tnw-text` element displaying the card's description.
 * @part button - The `tnw-button` element or the container for the `button` slot.
 * @part content - The container `div` element that wraps all content inside the card.
 * @part content-heading - The container `div` element for the card's heading and subheading.
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
   * Controls the alignment of the card's content.
   */
  @Prop() textAlignment?: TextAlignmentType = 'start';

  /**
   * Controls the alignment of items within the card.
   */
  @Prop() itemsAlignment?: LogicalAlignmentType;

  /**
   * Controls the spacing between elements inside the card.
   */
  @Prop() spacing?: SizeType = 'sm';

  /**
   * The padding size for the card.
   */
  @Prop() padding?: SizeType | "none";

  /**
   * The appearance style of the card.
   */
  @Prop() appearance?: OptionalAppearanceType = 'none';

  /**
   * The color variant of the card, determining the overall color scheme.
   */
  @Prop() variant?: ColorType = 'auto';

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
   * If `true`, the image slot will be visible.
   */
  @Prop() enableImageSlot?: boolean = false;

  /**
   * If `true`, the heading, subheading, description, and button will not be rendered. Use the `content` slot to provide custom content instead.
   */
  @Prop() enableContentSlot?: boolean = false;

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
    const propsValues = [this.appearance, this.borderRadius, this.buttonLabel, this.description, this.enableContentSlot, this.enableImageSlot, this.heading, this.imageAlt, this.imageSrc, this.itemsAlignment, this.layout, this.orderContentFirst, this.padding, this.spacing, this.subheading, this.textAlignment, this.useGlassmorphismEffect, this.variant];
    validateProps(propsValues);
  }

  private getHostClasses() {
    const { baseClass, variant, appearance, borderRadius, useGlassmorphismEffect, itemsAlignment, layout, padding, spacing } = this;
    return [
      baseClass,
      `${baseClass}--${layout}`,
      isNotEmptyString(itemsAlignment) && itemsAlignment !== "center" ? `${baseClass}--${itemsAlignment}` : ``,
      itemsAlignment === 'center' && layout === 'horizontal' ? `${baseClass}--horizontal-center` : '',
      itemsAlignment === 'center' && layout === 'vertical' ? `${baseClass}--vertical-center` : '',
      `${baseClass}--spacing-${spacing}`,
      appearance !== "none" ? `${baseClass}--padding-${padding}` : ``,
      useGlassmorphismEffect ? `${baseClass}--glassmorphism` : '',
      getAppearanceClass(appearance, variant),
      getBorderRadiusClass(borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private getContentClasses() {
    const { baseClass } = this;
    const contentClass = `${baseClass}__content`;
    return [
      contentClass,
      `${contentClass}-${this.textAlignment}`,
    ].filter(Boolean).join(' ').trim();
  }

  private renderImage(): JSX.Element | null {
    if (this.enableImageSlot) {
      return (
        <div class={`${this.baseClass}__image`} part='image-container'>
          <slot name='image' />
        </div>
      );
    }

    if (isNotEmptyString(this.imageSrc)) {
      return (
        <div class={`${this.baseClass}__image`} part='image'>
          <tnw-image src={this.imageSrc} alt={this.heading || this.imageAlt} BorderRadius={this.borderRadius} part='image' />
        </div>
      )
    }

    return null;
  }

  private renderHeading() {
    if (!isNotEmptyString(this.heading)) {
      return <slot name='heading' />;
    }

    return (
      <tnw-heading text={this.heading} size="lg" level='h3' alignment={this.textAlignment} weight='600' part='heading' />
    )
  }

  private renderSubheading() {
    if (!isNotEmptyString(this.subheading)) {
      return <slot name='subheading' />;
    }

    return (
      <tnw-heading text={this.subheading} size="sm" level='h4' alignment={this.textAlignment} part='subheading' />
    )
  }

  private renderDescription() {
    if (!isNotEmptyString(this.description)) {
      return <slot name='description' />;
    }

    return (
      <tnw-text text={this.description} alignment={this.textAlignment} part='description' />
    )
  }

  private renderButton() {
    if (!isNotEmptyString(this.buttonLabel)) {
      return <slot name='button' />;
    }

    return (
      <tnw-button label={this.buttonLabel} borderRadius={this.borderRadius} part='button' />
    )
  }

  private renderContent() {
    if (this.enableContentSlot) {
      return (
        <div class={this.getContentClasses()} part='content'>
          <slot name='content' />
        </div>
      );
    }

    return (
      <div class={this.getContentClasses()} part='content'>
        <div class={`${this.baseClass}__content-heading`}>
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
