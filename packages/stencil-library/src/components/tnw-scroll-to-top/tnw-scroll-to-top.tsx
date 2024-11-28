import { Component, Host, Prop, State, Listen, Element, h } from '@stencil/core';
import { AppearanceType, BorderRadiusType, ColorType, ExtendedSizeType } from '../../utils/component-props-types';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-scroll-to-top-validate-props';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported } from '../../utils/utils';
import { styles } from './tnw-scroll-to-top.styles';

/**
 * The `tnw-scroll-to-top` component provides a button that allows users to quickly scroll back to the top of the page.
 * The button becomes visible when the user scrolls down a certain distance.
 * It supports customization of the icon, size, appearance, and allows for the use of a custom SVG icon.
 *
 * @slot icon-svg - Use this slot to provide a custom SVG icon for the scroll-to-top button.
 *
 * @part icon - The icon element used within the scroll-to-top button.
 */
@Component({
  tag: 'tnw-scroll-to-top',
  shadow: true,
})
export class TnwScrollToTop {
  private baseClass = `${GLOBAL_PREFIX}-scroll-to-top`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwScrollToTopElement;

  @State() isVisible?: boolean = false;

  /**
   * Specifies the size of the scroll-to-top button.
   */
  @Prop() size?: ExtendedSizeType = 'md';

  /**
   * Defines the color variant of the scroll-to-top button.
   */
  @Prop() variant?: ColorType = 'primary';

  /**
   * Determines the appearance style of the scroll-to-top button.
   */
  @Prop() appearance?: AppearanceType = 'solid';

  /**
   * Determines the color of the icon.
   */
  @Prop() color?: ColorType;

  /**
   * Determines the border radius.
   */
  @Prop() borderRadius?: BorderRadiusType = "default";

  /**
   * The name of the custom icon to be used for the scroll-to-top button.
   */
  @Prop() customIconName?: string = 'tnw-arrow-thin-up';

  /**
   * If true, a custom SVG icon provided via the `icon-svg` slot will be used.
   */
  @Prop() enableCustomSvgIcon?: boolean = false;

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    this.isVisible = window.scrollY > 300;
    this.handleVisibility();
  }

  constructor() {
    if (isAdoptedStyleSheetsSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        extendedAppearanceStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.appearance, this.borderRadius, this.color, this.customIconName, this.enableCustomSvgIcon, this.size, this.variant];
    validateProps(propsValues);
  }

  private handleVisibility(): void {
    if (this.isVisible) {
      this.el.classList.add(`${this.baseClass}--visible`);
    } else {
      this.el.classList.remove(`${this.baseClass}--visible`);
    }
  }

  private scrollToTop(): () => void {
    return () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <Host class={this.baseClass}>
        <tnw-icon
          name={this.customIconName}
          size={this.size}
          variant={this.variant}
          appearance={this.appearance}
          color={this.color}
          isButton={true}
          onClick={this.scrollToTop()}
          enableSvg={this.enableCustomSvgIcon}
          borderRadius={this.borderRadius}
          part='icon'
        >
          <slot name="icon-svg" slot='svg' />
        </tnw-icon>
      </Host>
    );
  }
}