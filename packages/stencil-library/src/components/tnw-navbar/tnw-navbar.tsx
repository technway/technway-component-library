import { Component, Element, Host, Prop, h, Event, EventEmitter, Watch, State } from '@stencil/core';
import { SizeType, BorderRadiusType, ColorType, OptionalAppearanceType } from '../../utils/component-props-types';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString, isValidStringifiedJSON, parseJSONAsync } from '../../utils/utils';
import { styles } from './tnw-navbar.style';
import { appearanceColorSheet, borderRadiusStyleSheet, containerStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-navbar-validate-props';
import { renderToggler } from './parts/toggler/part--toggler';
import { Menu, MenuProps } from './parts/menu/part--menu-types';
import { renderMenu } from './parts/menu/part--menu';

/**
 * The `tnw-navbar` component creates a responsive, customizable navigation bar.
 * It supports various appearance colors, optional glassmorphism effects, and flexible content slots for building structured navigation systems.
 * 
 * @part navbar - The outermost `<nav>` element wrapping the navigation bar.
 * @part menu - The container for the menu items.
 * @part menu-item - A single menu item.
 * @part menu-link - The link inside a menu item.
 * @part toggler - The button toggling menu visibility.
 * @part toggler-icon - The icon inside the toggler button.
 *
 * @slot cta - Slot for adding custom content on the right (requires `enableCtaSlot`).
 * @slot logo - Slot for adding a custom logo (requires `enableLogoSlot`).
 * @slot menu - Slot for overriding the default menu (requires `enableMenuSlot`).
 * @slot link-<n> - Slots for custom menu links (requires `enableLinkSlot`).
 */
@Component({
  tag: 'tnw-navbar',
  shadow: true,
})
export class TnwNavbar {
  // Base class name for the component
  private baseClass = `${GLOBAL_PREFIX}-navbar`;

  // Holds the component's styles
  private componentStyles: CSSStyleSheet;

  /**
   * The host element reference.
   */
  @Element() el!: HTMLTnwNavbarElement;

  /* --------------- Internal State Management --------------- */

  /**
   * Parsed menu data from the `menuData` prop.
   */
  @State() parsedMenuData: Menu | null = null;

  /**
   * Tracks if meu is open/closed of the menu When interact with menu toggler
   */
  @State() isOpen: boolean = false;

  /**
   * Tracks the visibility of the menu for responsive behaviors.
   */
  @State() isHidden: boolean = false;

  /* -------------------------- Props -------------------------- */

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
   * The menu data as a JSON string. Each item should include a label, optional link, optional newTab, and optional subMenu.
   */
  @Prop() menuData?: string;

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
  @Prop() hideMenuBelow?: MenuProps['hideMenuBelow'] = false;

  /**
   * Enables custom link slots for menu items.
   * 
   * This property allows you to inject custom components or HTML elements for the navigation links, 
   * rather than relying on the `menuData` prop for automatic generation of menu items. 
   * When `enableLinkSlot` is set to `true`, each menu item can be represented by a custom element 
   * provided via a named slot in the format `link-<n>` where `<n>` is the index of the link (starting from 1).
   * 
   * **Usage Notes:**
   * - This is particularly useful in frameworks like React or Angular where you might need to inject 
   *   custom routing components such as `NavLink` (React) or `routerLink` (Angular).
   * - When this property is `true`, the `menuData` prop is ignored.
   * - Ensure that the `linksLength` prop is also specified to define the total number of links.
   * 
   * **Example:**
   * ```html
   * <TnwNavbar enableLinkSlot={true} linksLength={2}>
   *   <NavLink slot="link-1" to="/">Home</NavLink>
   *   <NavLink slot="link-2" to="/services">Services</NavLink>
   * </TnwNavbar>
   * ```
   */
  @Prop() enableLinkSlot?: boolean = false;

  /**
   * Specifies the number of links when `enableLinkSlot` is enabled.
   * 
   * This property works in conjunction with `enableLinkSlot` to define the total number of 
   * custom link slots available in the navigation bar. The value determines the number of 
   * slots named `link-<n>` (e.g., `link-1`, `link-2`, etc.) that can be populated with 
   * custom components or HTML elements.
   * 
   * **Usage Notes:**
   * - This property is required when `enableLinkSlot` is `true` to ensure the component knows how 
   *   many slots to handle.
   * - If this value is not provided, the component will not render the custom link slots.
   * 
   * **Error Handling:**
   * - If `enableLinkSlot` is `true` but `linksLength` is not specified, the component will not be rendered as expected.
   * 
   * **Best Practices:**
   * - Ensure that the `linksLength` matches the number of `link-<n>` slots defined in your component usage.
   */
  @Prop() linksLength?: number;

  /* ------------------------- Watchers ------------------------- */

  @Watch('hideMenuBelow')
  updateHideMenuBelow(newValue: MenuProps['hideMenuBelow']) {
    this.hideMenuBelow = newValue;
  }

  /**
   * Watches for changes to the `menuData` prop and re-parses the JSON data.
   * 
   * This watcher is triggered whenever the `menuData` prop changes. It handles:
   * - Parsing new JSON data asynchronously
   * - Comparing with previous parsed data to avoid unnecessary updates
   * - Maintaining the previous state if parsing fails
   * - Throwing errors for invalid JSON
   * 
   * @param {string | undefined} newValue - The new value of the menuData prop
   * @returns {Promise<void>} A promise that resolves when parsing is complete
   * 
   * @throws {Error} If the JSON parsing fails, with message "Failed to parse menuData: [value]"
   */
  @Watch('menuData')
  async handleMenuDataChange(newValue: string | undefined): Promise<void> {
    let oldParsedData = this.parsedMenuData;

    if (isNotEmptyString(newValue)) {
      try {
        const parsedData = await parseJSONAsync(newValue);
        if (parsedData === oldParsedData) {
          return;
        }

        this.parsedMenuData = parsedData;
      } catch (error) {
        console.error('Navbar: Error parsing menu data', error);
        this.parsedMenuData = oldParsedData;
        throw new Error(`Failed to parse menuData: ${newValue}`);
      }
    } else {
      this.parsedMenuData = oldParsedData;
    }
  }

  /* -------------------------- Events -------------------------- */

  /**
   * Emitted when the menu toggler is clicked. Event detail contains { isOpen: boolean }
   */
  @Event() tnwMenuToggle: EventEmitter<{ isOpen: boolean }>;

  /**
   * Emitted when the window is resized depending on the current breakpoint to the value of `hideMenuBelow`
   */
  @Event() tnwMenuVisibilityChange: EventEmitter<{ isMenuHidden: boolean, windowWidth: number }>;

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
    window.addEventListener('resize', this.handleResize);

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

  async componentWillLoad() {
    // Manually parse menu data on initial load, only if menuData is provided and is valid stringified JSON
    if (isNotEmptyString(this.menuData) && isValidStringifiedJSON(this.menuData)) {
      await this.handleMenuDataChange(this.menuData);
    }

    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableCtaSlot, this.enableLinkSlot, this.enableLogoSlot, this.enableMenuSlot, this.hideMenuBelow, this.linksLength, this.menuData, this.menuExactCenter, this.menuPlacement, this.paddingHorizontal, this.paddingVertical, this.scopeStylesToContainer, this.sticky, this.togglerPlacement]);
  }

  /**
   * Validates the menuData prop after the component has fully loaded, but only if menuData is provided.
   * 
   * This validation is performed in componentDidLoad rather than componentWillLoad
   * because the menuData prop may not be available during the earlier lifecycle method.
   * ComponentDidLoad ensures all props and state are fully initialized before validation.
   * 
   * @throws {Error} If menuData is provided but is not valid JSON
   */
  componentDidLoad() {
    const { menuData } = this;
    // Skip validation if menuData is empty, undefined, or null
    if (!isNotEmptyString(menuData)) {
      return;
    }

    if (isValidStringifiedJSON(menuData)) {
      console.log('parsedData is valid JSON');
    } else {
      throw new Error(`Failed to parse menuData: ${menuData}`);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);

    if (this.sticky) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  private handleResize = () => {
    const breakpoint =
      typeof this.hideMenuBelow === 'string'
        ? parseInt(this.hideMenuBelow, 10)
        : this.hideMenuBelow === false || this.hideMenuBelow === 'false'
          ? Infinity
          : 0;

    const isMenuHidden = window.innerWidth <= breakpoint;

    this.isHidden = isMenuHidden;
    this.tnwMenuVisibilityChange.emit({ isMenuHidden, windowWidth: window.innerWidth });
  };

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

  private menuToggler() {
    if (this.menu() === null) {
      return null;
    }

    return (
      renderToggler({
        isOpen: this.isOpen,
        togglerDisplay: { display: 'none' },
        toggleMenu: () => {
          this.isOpen = !this.isOpen;
          this.tnwMenuToggle.emit({ isOpen: this.isOpen });
        }
      })
    );
  }

  private menu(): null {
    const { parsedMenuData, isOpen, menuPlacement, hideMenuBelow, enableLinkSlot, linksLength, menuExactCenter } = this;
    const menu = renderMenu({
      parsedMenuData,
      isOpen,
      menuPlacement,
      hideMenuBelow,
      enableLinkSlot,
      linksLength,
      menuExactCenter
    })

    if (menu === null) {
      if (this.enableMenuSlot) {
        return <slot name="menu" />;
      }

      return null;
    }

    return menu;
  }

  private logo(): null {
    if (!this.enableLogoSlot) {
      return null;
    }

    return <slot name='logo' />;
  }

  private cta(): null {
    if (!this.enableCtaSlot) {
      return null;
    }

    return <slot name='cta' />;
  }

  private renderContent() {
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