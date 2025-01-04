import { Component, Element, Host, Prop, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { BorderColorType } from '../../utils/component-props-types';
import { styles } from './tnw-divider.styles';
import { validateProps } from './utils/tnw-divider-validate-props';

/**
 * The `tnw-divider` component creates a horizontal or vertical line to visually separate content.
 * It provides customizable styles and color options to fit different design requirements.
 */
@Component({
  tag: 'tnw-divider',
  shadow: true,
})
export class TnwDivider {
  private baseClass = `${GLOBAL_PREFIX}-divider`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwDividerElement;

  /**
   * Style of the divider
   */
  @Prop() variant?: "solid" | "dashed" = "solid";

  /**
   * Color Variant of the divider
   */
  @Prop() color?: BorderColorType = 'auto';

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        this.componentStyles
      ];
    }
  }

  componentWillLoad() {
    validateProps([this.color, this.variant]);
  }

  private getHostClasses() {
    const { baseClass } = this;

    return [
      baseClass,
      `${baseClass}--${this.color}`,
      `${baseClass}--${this.variant}`,
    ].filter(Boolean).join(" ").trim();
  }

  render() {
    return (
      <Host class={this.getHostClasses()}></Host>
    );
  }
}