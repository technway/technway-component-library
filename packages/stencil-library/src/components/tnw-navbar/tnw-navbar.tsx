import { Component, Element, Host, Prop, h } from '@stencil/core';
import { SizeType, BorderRadiusType, ColorType, OptionalAppearanceType } from '../../utils/component-props-types';
import { getBorderRadiusClass, getDirectionalAppearanceClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { styles } from './tnw-navbar.style';
import { borderRadiusStyleSheet, containerStyleSheet, directionalAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-navbar-validate-props';
import { state as navbarState } from '../../stores/navbar-store';

/**
 * The `tnw-navbar` component creates a responsive, customizable navigation bar.
 * It supports various appearance styles, optional glassmorphism effects, and flexible content slots for building structured navigation systems.
 * 
 * @slot start - Slot for the start content (e.g., logo). This slot can be used if `useStartSlot` is true.
 * @slot middle - Slot for the middle content (e.g., navigation menu). This slot can be used if `useMiddleSlot` is true.
 * @slot end - Slot for the end content (e.g., call-to-action, search, user profile). This slot can be used if `useEndSlot` is true.
 * 
 * @part navbar - The root navigation element `<nav>`.
 * @part start - The container element for the start content inside the navbar.
 * @part middle - The container element for the middle content inside the navbar.
 * @part end - The container element for the end content inside the navbar.
 * @part controls-container - The container for navigation controls like menu togglers.
 */
@Component({
  tag: 'tnw-navbar',
  shadow: true,
})
export class TnwNavbar {
  private baseClass = `${GLOBAL_PREFIX}-navbar`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwNavbarElement;

  /**
   * Determines the appearance style of the navigation bar. Supports styles like 'outlined', 'solid', 'transparent', etc.
   */
  @Prop() appearance?: OptionalAppearanceType | "outlined-bottom" = 'solid';

  /**
   * Specifies the background color variant of the navigation bar. Available options include 'primary', 'secondary', 'black', 'white', etc.
   */
  @Prop() variant?: ColorType = 'auto';

  /**
   * Enables a glassmorphism effect for the navigation bar. When true, the navbar will have a frosted glass appearance.
   */
  @Prop() useGlassmorphismEffect: boolean = false;

  /**
   * Makes the navigation bar sticky at the top of the viewport when set to true.
   */
  @Prop() sticky?: boolean = false;

  /**
   * If true, the navigation bar content will not be wrapped in a container for centering and padding.
   */
  @Prop() disableInternalContainer?: boolean = false;

  /**
   * Enables the start slot for custom content, such as logos or menus.
   */
  @Prop() useStartSlot?: boolean = false;

  /**
   * Enables the middle slot for custom content, typically used for navigation links.
   */
  @Prop() useMiddleSlot?: boolean = false;

  /**
   * Enables the end slot for custom content, like user actions or profile links.
   */
  @Prop() useEndSlot?: boolean = false;

  /**
   * When true, the middle slot will be centered exactly in the horizontal center of the screen.
   */
  @Prop() exactCenterMiddleSlot: boolean = false;

  /**
   * Specifies the placement of the burger menu toggler. Options are 'start' or 'end' of the navbar.
   */
  @Prop() burgerMenuPlacement?: 'start' | 'end' = 'end';

  /**
   * Sets the border-radius of the navigation bar.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * Sets the padding size of the navigation bar.
   */
  @Prop() paddingSize?: SizeType;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        containerStyleSheet,
        directionalAppearanceStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.appearance, this.borderRadius, this.burgerMenuPlacement, this.disableInternalContainer, this.exactCenterMiddleSlot, this.paddingSize, this.sticky, this.useEndSlot, this.useGlassmorphismEffect, this.useMiddleSlot, this.useStartSlot, this.variant];
    validateProps(propsValues);
  }

  private renderMenuToggler(): JSX.Element {
    return (
      <tnw-navbar-menu-toggler />
    );
  }

  private renderStartSlot(): JSX.Element | null {
    if (!this.useStartSlot) {
      return null;
    }

    return (
      <div class={`${this.baseClass}__start`} part='start'>
        {this.burgerMenuPlacement === 'start' && this.renderMenuToggler()}
        <slot name="start" />
      </div>
    )
  }

  private renderMiddleSlot(): JSX.Element | null {
    if (!this.useMiddleSlot) {
      return null;
    }

    const middleClass = `${this.baseClass}__middle`;
    const hideBelow = navbarState.hideBelowBreakpoint;

    const classes = [
      middleClass,
      this.exactCenterMiddleSlot ? `${middleClass}--exact-center` : ``,
      `${middleClass}--${hideBelow}`,
    ].filter(Boolean).join(' ').trim();

    return (
      <div class={classes} part='middle'>
        <slot name="middle" />
      </div>
    )
  }

  private renderEndSlot(): JSX.Element | null {
    if (!this.useEndSlot) {
      return null;
    }

    return (
      <div class={`${this.baseClass}__end`} part='end'>
        <slot name="end" />
        {this.burgerMenuPlacement === 'end' && this.renderMenuToggler()}
      </div>
    )
  }

  private getHostClasses(): string {
    const { baseClass, sticky } = this;

    return [
      baseClass,
      sticky ? `${baseClass}--sticky` : '',
    ].filter(Boolean).join(' ').trim();
  }

  private getContentClasses(): string {
    const { baseClass, appearance, variant, useGlassmorphismEffect, borderRadius } = this;

    const contentClass = `${baseClass}__content`;

    return [
      contentClass,
      useGlassmorphismEffect ? `${contentClass}--glassmorphism` : ``,
      !useGlassmorphismEffect && getDirectionalAppearanceClass(appearance, variant),
      (appearance === 'transparent' || appearance === 'solid' || appearance === 'outlined' || appearance === 'mixed') ? getBorderRadiusClass(borderRadius) : ``,
      (appearance === 'transparent' || appearance === 'solid' || appearance === 'outlined' || appearance === 'mixed') ? `${contentClass}--padding-${this.paddingSize}` : ``,
      (appearance === 'outlined-bottom') ? `${contentClass}--paddingBottom-${this.paddingSize}` : ``,
      !this.disableInternalContainer ? 'container' : '',
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <nav class={this.getContentClasses()} part='navbar'>
          {this.renderStartSlot()}
          {this.renderMiddleSlot()}
          {this.renderEndSlot()}
        </nav>
      </Host>
    );
  }
}