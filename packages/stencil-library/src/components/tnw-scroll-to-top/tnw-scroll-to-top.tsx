import { Component, Host, Prop, State, Listen, Element, h, Event, EventEmitter } from '@stencil/core';
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
   * Defines the appearance color of the scroll-to-top button.
   */
  @Prop() appearanceColor?: ColorType = 'primary';

  /**
   * Determines the appearance of the scroll-to-top button.
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

  /**
   * Emitted when the scroll-to-top button becomes visible.
   * The `detail` object contains:
   * - `isVisible`: `true`
   * - `scrollY`: The current scroll position.
   */
  @Event() visible: EventEmitter<{ isVisible: boolean; scrollY: number }>;

  /**
   * Emitted when the scroll-to-top button is clicked.
   * The `detail` object contains:
   * - `scrollY`: The current scroll position when clicked.
   */
  @Event() scrollToTopClicked: EventEmitter<{ scrollY: number }>;

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    const wasVisible: boolean = this.isVisible;
    this.isVisible = window.scrollY > 300;

    this.handleVisibility(wasVisible);
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
    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.color, this.customIconName, this.enableCustomSvgIcon, this.size]);
  }

  private handleVisibility(wasVisible: boolean): void {
    if (this.isVisible && !wasVisible) {
      this.el.classList.add(`${this.baseClass}--visible`);
      this.visible.emit({ isVisible: true, scrollY: window.scrollY });
    } else if (!this.isVisible && wasVisible) {
      this.el.classList.remove(`${this.baseClass}--visible`);
    }
  }

  private scrollToTop(): () => void {
    return () => {
      this.scrollToTopClicked.emit({ scrollY: window.scrollY });
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
          appearanceColor={this.appearanceColor}
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