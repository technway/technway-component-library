import { Component, Host, Prop, h, Element } from '@stencil/core';
import { FontSizeType, TextColorType } from '../../utils/component-props-types';
import { getColorClass, getTypographyClass, GLOBAL_PREFIX } from '../../utils/utils';
import { colorStyleSheet, fontSizeStyleSheet } from '../../utils/shared-styles';
import { styles } from './tnw-anchor-styler.styles';
import { validateProps } from './utils/tnw-anchor-styler-validate-props';
import { StyleHandler } from '../../utils/style-handler';

/**
 * The `tnw-anchor-styler` component is a decorative wrapper for custom anchor-like elements.
 * It focuses purely on styling and requires slotted children for its content.
 * 
 * This component is particularly suitable for use with React Router's `Link` or `NavLink` components 
 * and Next.js's `Link` components, where navigation functionality is handled externally, 
 * and styling can be applied through this wrapper.
 *
 * @slot - Default slot for custom content (e.g., an anchor, text, or any HTML structure).
 * 
 * @part wrapper - The `<div>` element that wraps and styles the slotted content.
 */
@Component({
  tag: 'tnw-anchor-styler',
  shadow: true,
})
export class TnwAnchorStyler {
  private baseClass = `${GLOBAL_PREFIX}-anchor-styler`;
  private stylesHandler: StyleHandler;

  @Element() el!: HTMLTnwAnchorStylerElement;

  /**
   * Specifies the text content of the link. If not provided, the content should be provided via the default slot.
   */
  @Prop() text?: string;

  /**
   * Sets the color of the text based on the available colors.
   */
  @Prop() color?: TextColorType = 'auto';

  /**
   * Sets the font size of the anchor text.
   */
  @Prop() size?: FontSizeType;

  /**
   * Specifies the text decoration line of the anchor text.
   */
  @Prop() textDecoration: 'none' | 'underline' | 'overline' | 'line-through' = 'underline';

  /**
   * Enables the new tab icon.
   */
  @Prop() enableNewTabIcon: boolean = false;

  constructor() {
    this.initializeStyles();
  }

  componentWillLoad() {
    validateProps([this.color, this.enableNewTabIcon, this.size, this.text, this.textDecoration]);
  }

  connectedCallback() {
    this.stylesHandler.applyStyles();
  }

  private initializeStyles() {
    this.stylesHandler = new StyleHandler(
      this.el,
      styles,
      [fontSizeStyleSheet, colorStyleSheet,]
    );
  }

  private getHostClasses(): string {
    const { baseClass, textDecoration } = this;

    return [
      baseClass,
      `${baseClass}--${textDecoration}`,
    ].filter(Boolean).join(' ').trim();
  }

  private getWrapperClasses(): string {
    const { baseClass, color, size } = this;
    const wrapperClass = `${baseClass}__wrapper`;
    return [
      wrapperClass,
      getColorClass('color', color),
      getTypographyClass('fs', size),
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <div class={this.getWrapperClasses()} part="wrapper">
          <slot />
          {this.enableNewTabIcon &&
            <tnw-icon
              class={`${this.baseClass}__newTab-icon`}
              name='tnw-arrow-up-right'
              hiddenAria={true}
              color={this.color}
              size='xs'
              part='icon'
            />
          }
        </div>
      </Host>
    );
  }
}
