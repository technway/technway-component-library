import { Component, Element, Host, Prop, h, Event, EventEmitter, Watch, State } from '@stencil/core';
import { SizeType, BorderRadiusType, ColorType, OptionalAppearanceType } from '../../utils/component-props-types';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { styles } from './tnw-navbar.style';
import { appearanceColorSheet, borderRadiusStyleSheet, containerStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-navbar-validate-props';
import { renderToggler } from './parts/toggler/part--toggler';
import { renderMenu } from './parts/menu/part--menu-render';
import { Menu } from './parts/menu/part--menu-types';

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
 * @slot logo - The slot for custom logo content to be added to the navigation bar. To use this slot, set the `enableLogoSlot` property to `true`.
 * @slot menu - The slot for custom menu content to be added to the navigation bar. To use this slot, set the `enableMenuSlot` property to `true`. And do not use the `menuData` prop.
 */
@Component({
  tag: 'tnw-navbar',
  shadow: true,
})
export class TnwNavbar {
  private baseClass = `${GLOBAL_PREFIX}-navbar`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwNavbarElement;

  @State() parsedMenuData: Menu | null = null;

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
   * When true, the component will apply its styles (like the appearance colors and effects) to its internal container element.
   * If false, the styles will be applied directly to the component host element.
   */
  @Prop() scopeStylesToContainer?: boolean = false;

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
   * Sets the horizontal padding size of the navigation bar.
   */
  @Prop() paddingHorizontal?: SizeType | 'none' = 'md';

  /**
   * Sets the vertical padding size of the navigation bar.
   */
  @Prop() paddingVertical?: SizeType | 'none' = 'md';

  /**
   * The menu data as a JSON string. Each item should include a label, optional link, optional newTab, and optional subMenu. The JSON format should be an array of objects, where each object can include the following properties: - `label`: The text of the menu item. - `link`: (Optional) The URL for the menu item. - `newTab`: (Optional) A boolean indicating whether the link opens in a new tab. - `subMenu`: (Optional) An array of submenu items including item `label`, `link`, and optional newTab..
   */
  @Prop() menuData?: string;

  /**
   * An optional element to be used as the link element for the menu items.
   * 
   * For example, this could be a React Router Link or Next.js Link component.
   * Example for React Router:
   * 
   * import { Link } from 'react-router-dom';
   * 
   * itemLinkElement?: typeof Link;
   * 
   * Example for Next.js:
   * 
   * import Link from 'next/link';
   * 
   * itemLinkElement?: typeof Link;
   */
  @Prop() linkElement?: (props: any) => JSX.Element;

  /**
   * If true, the CTA slot is enabled.
   */
  @Prop() enableCtaSlot?: boolean = false;

  /**
   * If true, the logo slot is enabled.
   */
  @Prop() enableLogoSlot?: boolean = false;

  /**
   * If true, the menu slot is enabled.
   */
  @Prop() enableMenuSlot?: boolean = false;

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
      this.parsedMenuData = isNotEmptyString(newValue) ? JSON.parse(newValue) : [];
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
    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableCtaSlot, this.enableLogoSlot, this.enableMenuSlot, this.hideMenuBelow, this.menuData, this.menuExactCenter, this.menuPlacement, this.paddingHorizontal, this.paddingVertical, this.scopeStylesToContainer, this.sticky, this.togglerPlacement]);

    // Manually parse menu data on initial load
    if (isNotEmptyString(this.menuData)) {
      this.parseMenuData(this.menuData);
    }
  }

  disconnectedCallback() {
    if (this.sticky) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  private getHostClasses(): string {
    const { baseClass, sticky } = this;

    return [
      baseClass,
      sticky ? `${baseClass}--sticky` : '',
      ...(!this.scopeStylesToContainer ? this.getConditionalClasses() : []),
    ].filter(Boolean).join(' ').trim();
  }

  private getConditionalClasses() {
    const { appearance, appearanceColor, borderRadius, paddingHorizontal, paddingVertical } = this;

    return [
      (paddingHorizontal !== 'none') ? `paddingX-${paddingHorizontal}` : ``,
      (paddingVertical !== 'none') ? `paddingY-${paddingVertical}` : ``,
      borderRadius !== 'none' ? getBorderRadiusClass(borderRadius) : ``,
      // Add appearance class if the appearance is not outlined
      appearance !== 'outlined-bottom' ? getAppearanceClass(appearance, appearanceColor) : (appearance === 'outlined-bottom' ? `outlined-bottom ${appearanceColor}` : ''),
    ].filter(Boolean);
  }

  private getContentClasses(): string {
    const { baseClass } = this;

    const contentClass = `${baseClass}__content`;

    return [
      contentClass,
      ...(this.scopeStylesToContainer ? this.getConditionalClasses() : []),
    ].filter(Boolean).join(' ').trim();
  }

  private handleScroll = () => {
    if (this.sticky) {
      this.tnwScrollChange.emit({ scrollY: window.scrollY });
    }
  }

  private menuToggler(): JSX.Element {
    if (this.menu() === null) {
      return null;
    }

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
    if (this.parsedMenuData === null) {
      if (this.enableMenuSlot) {
        return <slot name="menu" />;
      }

      return null;
    }

    return renderMenu(
      this.parsedMenuData,
      this.isVisible,
      this.menuPlacement,
      this.linkElement
    );
  }

  private logo(): JSX.Element | null {
    if (!this.enableLogoSlot) {
      return null;
    }

    return <slot name='logo' />;
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
        {(((this.menuPlacement === 'start' || this.togglerPlacement === 'start') && this.menu()) || this.logo()) &&
          <div class={`${this.baseClass}__start`}>
            {this.togglerPlacement === 'start' && this.menuToggler()}
            {this.logo()}
            {this.menuPlacement === 'start' && this.menu()}
          </div>
        }

        {(this.menuPlacement === 'middle' && this.menu()) && (
          <div class={`${this.baseClass}__middle ${this.menuExactCenter ? `${this.baseClass}__middle--exact-center` : ''}`}>
            {this.menu()}
          </div>
        )}

        {(this.menu() || this.cta()) &&
          <div class={`${this.baseClass}__end`}>
            {this.menuPlacement === 'end' && this.menu()}
            {this.cta()}
            {this.togglerPlacement === 'end' && this.menuToggler()}
          </div>
        }
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