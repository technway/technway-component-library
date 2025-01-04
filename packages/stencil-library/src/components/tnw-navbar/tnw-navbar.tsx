import { Component, Element, Host, Prop, h, Event, EventEmitter, Watch, State } from '@stencil/core';
import { SizeType, BorderRadiusType, ColorType, OptionalAppearanceType } from '../../utils/component-props-types';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { styles } from './tnw-navbar.style';
import { appearanceColorSheet, borderRadiusStyleSheet, containerStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-navbar-validate-props';
import { renderToggler } from './parts/toggler/part--toggler';
import { renderMenu } from './parts/menu/part--menu-render';
import { Menu } from './parts/menu/part--menu-types';
import { Logo } from './parts/logo/part--logo-types';
import { renderNavbarLogo } from './parts/logo/part--logo';

/**
 * The `tnw-navbar` component creates a responsive, customizable navigation bar.
 * It supports various appearance colors, optional glassmorphism effects, and flexible content slots for building structured navigation systems.
 * 
 * @part navbar - the outermost `nav` element that wraps all the content.
 * @part menu - the container for the navigation menu items.
 * @part menu-item - an individual menu item.
 * @part menu-link - a link within a menu item.
 * @part toggler - the button that toggles the menu visibility.
 * @part toggler-icon - the icon displayed within the toggler button.
 * 
 * @slot cta - The slot for custom content to be added to the end side of the navigation bar. To use this slot, set the `enableCtaSlot` property to `true`.
 */
@Component({
  tag: 'tnw-navbar',
  shadow: true,
})
export class TnwNavbar {
  private baseClass = `${GLOBAL_PREFIX}-navbar`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwNavbarElement;

  @State() parsedMenuData: Menu = null;
  @State() parsedLogoData: Logo = null;

  @State() isVisible: boolean = false;

  /**
   * Determines the appearance of the navigation bar. Supports styles like 'outlined', 'solid', 'transparent', etc.
   */
  @Prop() appearance?: OptionalAppearanceType | "outlined-bottom" = 'solid';

  /**
   * Specifies the appearance color of the navigation bar. Available options include 'primary', 'secondary', 'black', 'white', etc.
   */
  @Prop() appearanceColor?: ColorType = 'auto';

  /**
   * Makes the navigation bar sticky at the top of the viewport when set to true.
   */
  @Prop() sticky?: boolean = false;

  /**
   * If true, the navigation bar content will not be wrapped in a container for centering and padding.
   */
  @Prop() disableInternalContainer?: boolean = false;

  /**
   * When true, the menu will be centered exactly in the horizontal center of the screen. Only if `menuPosition` is set to 'middle'.
   */
  @Prop() menuExactCenter: boolean = false;

  /**
   * Determines the placement of the menu. Available options are 'start', 'middle', or 'end'.
   */
  @Prop() menuPlacement?: 'start' | 'middle' | 'end' = 'middle';

  /**
   * Specifies the placement of the burger menu toggler. Options are 'start' or 'end' of the navbar.
   */
  @Prop() togglerPlacement?: 'start' | 'end' = 'end';

  /**
   * Sets the border-radius of the navigation bar.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * Sets the padding size of the navigation bar.
   */
  @Prop() padding?: SizeType | 'none' = 'none';

  /**
   * The menu data as a JSON string. Each item should include a label, optional link, optional newTab, and optional subMenu. The JSON format should be an array of objects, where each object can include the following properties: - `label`: The text of the menu item. - `link`: (Optional) The URL for the menu item. - `newTab`: (Optional) A boolean indicating whether the link opens in a new tab. - `subMenu`: (Optional) An array of submenu items including item `label`, `link`, and optional newTab..
   */
  @Prop() menuData?: string;

  /**
   * The logo data as a JSON string. The JSON format should include the following properties: - `src`: The URL of the logo image. - `alt`: The alternative text for the logo image. - `link`: (Optional) The URL for the logo link.
   */
  @Prop() logoData?: string;

  /**
   * If true, the CTA slot is enabled.
   */
  @Prop() enableCtaSlot?: boolean = false;

  /**
   * The breakpoint at which the navbar should be hidden. Set to `false` to always show the navbar.
   */
  @Prop() hideMenuBelow?: "1024" | "767" | "567" | "1439" | false = false;

  @Watch('hideMenuBelow')
  updateHideMenuBelow(newValue: "1024" | "767" | "567" | "1439" | false) {
    this.hideMenuBelow = newValue;
  }

  @Watch('menuData')
  parseMenuData(newValue: string) {
    try {
      this.parsedMenuData = newValue ? JSON.parse(newValue) : [];
    } catch (error) {
      console.error('Navbar: Error parsing menu data', error);
      this.parsedMenuData = null;
    }
  }

  /**
   * Emitted when the navbar's responsive breakpoint changes. Event detail contains { breakpoint: string }
   */
  @Event() tnwBreakpointChange: EventEmitter<{ breakpoint: "1024" | "767" | "567" | "1439" }>;

  /**
   * Emitted when the menu toggler is clicked. Event detail contains { isOpen: boolean }
   */
  @Event() tnwMenuToggle: EventEmitter<{ isOpen: boolean }>;

  /**
   * Emitted when the navbar's scroll position changes (only when sticky=true). Event detail contains { scrollY: number }
   */
  @Event() tnwScrollChange: EventEmitter<{ scrollY: number }>;

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
        borderRadiusStyleSheet,
        appearanceColorSheet,
        extendedAppearanceStyleSheet,
        this.componentStyles
      ];
    }

    if (this.sticky) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillLoad() {
    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableCtaSlot, this.hideMenuBelow, this.logoData, this.menuData, this.menuExactCenter, this.menuPlacement, this.padding, this.sticky, this.togglerPlacement]);

    // Manually parse menu data on initial load
    if (this.menuData) {
      this.parseMenuData(this.menuData);
      this.parseLogoData(this.logoData);
    }
  }

  disconnectedCallback() {
    if (this.sticky) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  private parseLogoData(logoData: string) {
    try {
      this.parsedLogoData = logoData ? JSON.parse(logoData) : null;
    } catch (error) {
      console.error('Navbar: Error parsing logo data', error);
      this.parsedLogoData = null;
    }
  }

  private getHostClasses(): string {
    const { baseClass, sticky } = this;

    return [
      baseClass,
      sticky ? `${baseClass}--sticky` : '',
    ].filter(Boolean).join(' ').trim();
  }

  private getContentClasses(): string {
    const { baseClass, appearance, appearanceColor, borderRadius, padding } = this;

    const contentClass = `${baseClass}__content`;

    return [
      contentClass,
      padding !== 'none' ? `${contentClass}--padding-${padding}` : ``,
      (appearance === 'outlined-bottom') ? `${contentClass}--paddingBottom-${padding}` : ``,
      borderRadius !== 'none' ? getBorderRadiusClass(borderRadius) : ``,
      // Add appearance class if the appearance is not outlined
      appearance !== 'outlined-bottom' ? getAppearanceClass(appearance, appearanceColor) : (appearance === 'outlined-bottom' ? `${contentClass}--outlined-bottom ${contentClass}--${appearanceColor}` : ''),
    ].filter(Boolean).join(' ').trim();
  }

  private handleScroll = () => {
    if (this.sticky) {
      this.tnwScrollChange.emit({ scrollY: window.scrollY });
    }
  }

  private menuToggler(): JSX.Element {
    return (
      renderToggler({
        isOpen: this.isVisible,
        togglerDisplay: { display: 'none' },
        toggleMenu: () => {
          this.isVisible = !this.isVisible;
          this.tnwMenuToggle.emit({ isOpen: this.isVisible });
        }
      })
    );
  }

  private menu(): JSX.Element | null {
    if (!this.parsedMenuData) {
      return null;
    }

    return renderMenu(
      this.parsedMenuData,
      this.isVisible,
      this.menuPlacement,
    );
  }

  private logo(): JSX.Element | null {
    if (!this.parsedLogoData) {
      return null;
    }

    return renderNavbarLogo(this.parsedLogoData);
  }

  private cta(): JSX.Element | null {
    if (!this.enableCtaSlot) {
      return null;
    }

    return <slot name='cta' />;
  }

  private renderContent(): JSX.Element {
    return (
      <nav class={this.getContentClasses()} part='navbar'>
        {this.togglerPlacement === 'start' && this.menuToggler()}
        <div class={`${this.baseClass}__start`}>
          {this.logo()}
          {this.menuPlacement === 'start' && this.menu()}
        </div>

        {this.menuPlacement === 'middle' && (
          <div class={`${this.baseClass}__middle ${this.menuExactCenter ? `${this.baseClass}__middle--exact-center` : ''}`}>
            {this.menu()}
          </div>
        )}

        <div class={`${this.baseClass}__end`}>
          {this.menuPlacement === 'end' && this.menu()}
          {this.cta()}
          {this.togglerPlacement === 'end' && this.menuToggler()}
        </div>
      </nav>
    );
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        {this.disableInternalContainer ? (
          this.renderContent()
        ) : (
          <div class='container'>
            {this.renderContent()}
          </div>
        )}
      </Host >
    );
  }
}