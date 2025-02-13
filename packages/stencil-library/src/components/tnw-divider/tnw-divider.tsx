import { Component, Element, Host, Prop, h } from '@stencil/core';
import { GLOBAL_PREFIX } from '../../utils/utils';
import { BorderColorType } from '../../utils/component-props-types';
import { styles } from './tnw-divider.styles';
import { validateProps } from './utils/tnw-divider-validate-props';
import { StyleHandler } from '../../utils/style-handler';

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
  private stylesHandler: StyleHandler;

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
    this.initializeStyles()
  }

  connectedCallback() {
    this.stylesHandler.applyStyles()
  }

  componentWillLoad() {
    validateProps([this.color, this.variant]);
  }

  private initializeStyles() {
    this.stylesHandler = new StyleHandler(
      this.el,
      styles
    );
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