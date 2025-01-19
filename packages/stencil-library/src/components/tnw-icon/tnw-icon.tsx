import { Component, Element, Host, Prop, h } from '@stencil/core';
import { enforceGroupedPropsUsage, enforceRequiredPropsWhenConditionMissing, getBorderRadiusClass, getColorClass, getExtendedAppearanceClass, GLOBAL_PREFIX, PropDependencyCheck, PropGroupCheck } from '../../utils/utils';
import { BorderRadiusType, TextColorType, ExtendedColorType, ExtendedSizeType, OptionalAppearanceType } from '../../utils/component-props-types';
import { validateProps } from './utils/tnw-icon-validate-props';
import { styles } from './tnw-icon.styles';
import { iconStyleSheet } from '../../utils/shared-styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-icon` component is a flexible icon element that supports various styles, sizes, and appearances. 
 * It can be used as a standalone icon or to display custom SVG icons through the `svg` slot.
 * 
 * @slot svg - Use this slot to insert a custom SVG icon. This slot can be used only if `enableSvg` is set to `true`.
 * 
 * @part icon - The icon element or the container for the custom SVG slot content.
 */
@Component({
  tag: 'tnw-icon',
  shadow: true,
})
export class TnwIcon {
  private baseClass = `${GLOBAL_PREFIX}-icon`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwIconElement;

  /**
   * The name of the icon to be displayed. This is required when `enableSvg` is not set to `true`.
   */
  @Prop({reflect: true}) name?: string;

  /**
   * Defines the appearance color of the icon.
   */
  @Prop() appearanceColor?: ExtendedColorType = 'auto';

  /**
   * Determines the visual appearance color of the icon (e.g., solid, outlined).
   */
  @Prop() appearance?: OptionalAppearanceType = 'none';

  /**
   * Sets the color of the icon. This will be used to set the color of the icon element.
   * Not supported when svg is enabled.
   */
  @Prop() color?: TextColorType = 'auto';

  /**
   * Specifies the size of the icon. The size means that the icon will have the width same as the height.
   */
  @Prop() size?: ExtendedSizeType | "2xs" | "3xs" | "2xl" | "3xl" = 'sm';

  /**
   * Adds a tooltip to the icon, which will be displayed on hover. This is required when `enableSvg` is not set to `true`.
   */
  @Prop() tooltip?: string;

  /**
   * If `true`, the icon will be rendered as an SVG. The SVG content should be provided via the `svg` slot.
   */
  @Prop() enableSvg?: boolean = false;

  /**
   * Provides an accessible label for the icon. Defaults to the value of the `name` prop.
   */
  @Prop() labelAria?: string;

  /**
   * If `true`, the icon will be hidden from screen readers. Defaults to `true`.
   */
  @Prop() hiddenAria: boolean = false;

  /**
   * If `true`, the icon will be treated as a button, with appropriate `role` and additional classes.
   */
  @Prop() isButton: boolean = false;

  /**
   * Determines the border radius of the icon.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        iconStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.color, this.enableSvg, this.hiddenAria, this.isButton, this.labelAria, this.name, this.size, this.tooltip]);
    enforceRequiredPropsWhenConditionMissing(this.getConditionalPropsChecks());
    enforceGroupedPropsUsage(this.getGroupedPropsChecks());
  }

  private getConditionalPropsChecks(): PropDependencyCheck[] {
    return [
      {
        requiredPropName: "name",
        requiredProp: this.name,
        conditionalPropName: "enableSvg",
        conditionalProp: this.enableSvg,
      },
    ];
  }

  private getGroupedPropsChecks(): PropGroupCheck[] {
    return [
      {
        propNames: ['appearance', 'appearanceColor'],
        propValues: [this.appearance, this.appearanceColor],
      }
    ];
  }

  // Getter to calculate the label for accessibility based on `labelAria` or fallback to `name`
  get labelAriaVal(): string {
    return this.labelAria || this.name || '';
  }

  private getHostClasses(): string {
    const { baseClass, size, appearanceColor, appearance, isButton, color } = this;

    const clickable = isButton ? `${baseClass}--clickable` : ``;

    return [
      baseClass,
      this.enableSvg ? `${baseClass}--svg-${size}` : `${baseClass}--font-${size}`,
      this.appearance !== 'none' ? `${baseClass}--padding-${size}` : ``,
      getColorClass('color', color),
      getExtendedAppearanceClass(appearance, appearanceColor),
      getBorderRadiusClass(this.borderRadius),
      clickable,
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    const { enableSvg, name, hiddenAria, isButton, tooltip, labelAriaVal } = this;

    const iconAttributes = {
      ...(hiddenAria && { 'aria-hidden': 'true' }),
      ...(isButton && { 'role': 'button' }),
      ...(tooltip && { 'title': tooltip }),
      ...(!hiddenAria && { 'aria-label': labelAriaVal }),
    };

    return (
      <Host class={this.getHostClasses()}>
        {enableSvg ? (
          <slot name='svg' />
        ) : (
          <i class={`icon-${name}`} {...iconAttributes} part='icon' />
        )}
      </Host>
    );
  }
}