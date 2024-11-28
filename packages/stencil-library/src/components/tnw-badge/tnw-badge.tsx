import { Component, Host, Prop, h, Element } from '@stencil/core';
import { getClassNames, getExtendedAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, isNotEmptyStringOrNumber } from '../../utils/utils';
import { BorderRadiusType, ExtendedColorType, OptionalAppearanceType, SizeType } from '../../utils/component-props-types';
import { validateProps } from './utils/tnw-badge-validate-props';
import { styles } from './tnw-badge.styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

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

  /**
   * The text or label displayed inside the badge. If not provided, custom content can be inserted via the slot.
   */
  @Prop() label?: string | number;

  /**
   * The color variant of the badge, determining the overall color scheme.
   */
  @Prop() variant?: ExtendedColorType = 'auto';

  /**
   * The appearance determines the overall style of the badge, such as whether it is solid or outlined.
   */
  @Prop() appearance?: OptionalAppearanceType = 'outlined';

  /**
   * The size of the badge.
   */
  @Prop() size?: SizeType = 'sm';

  /**
   * The border radius of the badge.
   */
  @Prop() borderRadius?: BorderRadiusType = 'lg';

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
    const propsValues = [this.appearance, this.borderRadius, this.label, this.size, this.variant];
    validateProps(propsValues);
  }

  private getBadgeClasses(): string {
    const { baseClass, size, appearance, variant, borderRadius } = this;

    const classes = [size];

    return [
      baseClass,
      getClassNames(classes, baseClass),
      getBorderRadiusClass(borderRadius),
      getExtendedAppearanceClass(appearance, variant),
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    const isLabelUsed = isNotEmptyStringOrNumber(this.label);
    return (
      <Host class={this.getBadgeClasses()}>
        {isLabelUsed ? this.label : <slot />}
      </Host>
    );
  }
}