import { Component, Host, Prop, h, Element, State } from '@stencil/core';
import { getExtendedAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, isNotEmptyString } from '../../utils/utils';
import { BorderRadiusType, ExtendedColorType, OptionalAppearanceType, SizeType } from '../../utils/component-props-types';
import { validateProps } from './utils/tnw-badge-validate-props';
import { styles } from './tnw-badge.styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { validateNumericalVariantLabel } from './utils/tnw-badge-validate-props-custom';

/**
 * The `tnw-badge` component is used to display small pieces of information, such as labels, statuses, or counts, in a compact and visually distinct way.
 * This component supports various customization options including different variants, appearances, and sizes, making it versatile for a wide range of use cases.
 *
 * @slot - Default slot for custom content inside the badge (e.g., icon or HTML structure). The `label` prop must not be used if the slot is used.
 */
@Component({
  tag: 'tnw-badge',
  shadow: true,
})
export class TnwBadge {
  private baseClass = `${GLOBAL_PREFIX}-badge`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwBadgeElement;

  @State() displayedLabel?: string;

  /**
   * The text or label displayed inside the badge. If not provided, custom content can be inserted via the slot.
   * If the variant is `numeric`, the label will be limited to 99+.
   */
  @Prop() label?: string | number;

  /**
   * Specifies the variant of the badge.
   * 
   * - `image`: The badge will display an image. label will be ignored.
   * - `color`: The badge will display a color. label and slot will be ignored.
   * - `textual`: The badge will display text. label will be displayed.
   * - `numeric`: The badge will display a number. even if the number is larger 99, the number displayed will be 99+.
   *   The label will be limited to 99+.
   */
  @Prop() variant?: 'image' | 'status' | 'textual' | 'numeric' = 'textual';

  /**
   * The appearance determines the overall style of the badge, such as whether it is solid or outlined.
   */
  @Prop() appearance?: OptionalAppearanceType = 'outlined';

  /**
   * The color appearance color of the badge, determining the overall color scheme.
   */
  @Prop() appearanceColor?: ExtendedColorType = 'auto';

  /**
   * The size of the badge. controls padding if the variant is textual, else it controls width with height.
   */
  @Prop() size?: SizeType = 'sm';

  /**
   * The border radius of the badge. it will be ignored if variant is not textual.
   */
  @Prop() borderRadius?: BorderRadiusType = 'lg';

  /**
   * The source URL of the image to display inside the badge when the variant is set to 'image'.
   * If not provided, the badge will not display an image.
   */
  @Prop() imageSrc?: string;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.imageSrc, this.label, this.size, this.variant]);

    this.initDisplayedLabel();

    if (this.variant === 'numeric') {
      try {
        validateNumericalVariantLabel(this.label);
        this.maximizeLabelNumber(this.label);
      } catch (e) {
        this.setDisplayedLabel(0);
        throw e;
      }
    }
  }

  /**
   * Sets the displayed label based on the provided value.
   * If the value is undefined or null, an empty string is used instead.
   * @param label - The value to use for the displayed label
   */
  private setDisplayedLabel(label: string | number | undefined): void {
    this.displayedLabel = label != null ? String(label) : '';
  }

  /**
  * Initializes the displayed label with the current label value.
  */
  private initDisplayedLabel(): void {
    this.setDisplayedLabel(this.label);
  }

  /**
   * Sets the displayed label to '99+' if the provided label is a number (or numeric string) greater than 99.
   * @param label - The label to be checked. Should be a number or numeric string.
   */
  private maximizeLabelNumber(label: string | number): void {
    const numericValue = typeof label === 'string' ? Number(label) : label;

    if (numericValue > 99) {
      this.setDisplayedLabel('99+');
    } else {
      this.setDisplayedLabel(String(numericValue));
    }
  }

  private getVariantClasses(): string[] {
    const { baseClass, size, borderRadius, variant } = this;
    const classes: string[] = [];

    switch (variant) {
      case 'status':
        classes.push(
          `${baseClass}--status-size-${size}`,
        );
        break;
      case 'numeric':
        classes.push(
          `${baseClass}--numeric`,
          `${baseClass}--numeric-size-${size}`,
          getBorderRadiusClass('circle')
        );
        break;
      case 'image':
        classes.push(
          `${baseClass}--image-size-${size}`,
          getBorderRadiusClass('circle')
        );
        break;
      case 'textual':
        classes.push(
          `${baseClass}--padding-${size}`,
          getBorderRadiusClass(borderRadius)
        );
        break;
    }

    return classes;
  }

  private getImageStyles() {
    if (this.variant !== 'image' || this.imageSrc === undefined) return {};

    return {
      backgroundImage: this.imageSrc ? `url(${this.imageSrc})` : undefined,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  }

  private getBadgeClasses(): string {
    const { baseClass, appearance, appearanceColor } = this;

    return [
      baseClass,
      getExtendedAppearanceClass(appearance, appearanceColor),
      ...this.getVariantClasses()
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    const isLabelUsed = isNotEmptyString(this.displayedLabel);
    return (
      <Host
        class={this.getBadgeClasses()}
        style={this.getImageStyles()}
      >
        {
          this.variant !== 'status' && this.variant !== 'image'
          && (
            isLabelUsed
              ? this.displayedLabel
              : <slot />
          )
        }
      </Host>
    );
  }
}