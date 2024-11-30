import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import { BorderRadiusType, FontSizeType, TextColorType } from '../../utils/component-props-types';
import { getBorderRadiusClass, GLOBAL_PREFIX, isArrayEmpty, isCSSStyleSheetSupported, isNotEmptyString, parseJSONAsync } from '../../utils/utils';
import { state as navbarState } from '../../stores/navbar-store';
import { styles } from './tnw-navbar-menu.styles';
import { borderRadiusStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-navbar-menu-validate-props';

/**
 * The `tnw-navbar-menu` component is designed to be used inside the `tnw-navbar` component. It provides a flexible and responsive navigation menu, which can be configured with various alignment options, hover effects, and styles.
 * The menu supports nested submenus, text color customization, and adaptive behavior based on breakpoints.
 * 
 * @slot - Slot for custom menu content. The menu items will be rendered based on the provided `itemsData` prop.
 * 
 * @part menu - The root `<ul>` element that contains the entire menu.
 * @part item - The `<li>` elements representing individual menu items.
 * @part link - The anchor or span element inside each item, representing the clickable or text content.
 * @part submenu - The `<tnw-navbar-dropdown-menu>` element for nested submenu items.
 */
@Component({
  tag: 'tnw-navbar-menu',
  shadow: true,
})
export class TnwNavbarMenu {
  private baseClass = `${GLOBAL_PREFIX}-navbar-menu`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwNavbarMenuElement;

  @State() parsedMenuData: any[] = [];

  /**
   * The menu data as a JSON string. Each item should include a label, optional link, optional newTab, and optional subMenu. The JSON format should be an array of objects, where each object can include the following properties: - `label`: The text of the menu item. - `link`: (Optional) The URL for the menu item. - `newTab`: (Optional) A boolean indicating whether the link opens in a new tab. - `subMenu`: (Optional) An array of submenu items including item `label`, `link`, and optional newTab..
   */
  @Prop() itemsData!: string;

  /**
   * Hides the menu below a specified breakpoint width (in pixels).
   */
  @Prop() hideBelowBreakpoint: "1024" | "767" = "767";

  /**
   * Sets the font size of the menu items.
   */
  @Prop() itemsSize?: FontSizeType = 'sm';

  /**
   * Sets the text color of the menu items.
   */
  @Prop() itemsColor?: TextColorType = 'auto';

  /**
   * Sets the hover variant color for the menu items.
   */
  @Prop() itemsHoverVariant?: 'auto' | 'inverse' | 'primary' | 'secondary' | 'black' | 'white' = "primary";

  /**
   * Sets the hover effect for the menu items.
   */
  @Prop() itemsHoverEffect?: 'contrast' | 'opacity';

  /**
   * Defines the appearance of the hover effect for the menu items (e.g., solid, outlined).
   */
  @Prop() itemsHoverAppearance?: "solid" | "outlined" | "color" | "none" = 'color';

  /**
   * Sets the border-radius of the menu items.
   */
  @Prop() itemsBorderRadius?: BorderRadiusType = 'default';
  

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isCSSStyleSheetSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        borderRadiusStyleSheet,
        this.componentStyles
      ];
    }
  }

  async componentWillLoad() {
    // Set the initial hideBelowBreakpoint value in the store
    navbarState.hideBelowBreakpoint = this.hideBelowBreakpoint;

    this.parsedMenuData = await parseJSONAsync(this.itemsData);

    // Validate Props
    const propsValues = [this.hideBelowBreakpoint, this.itemsBorderRadius, this.itemsColor, this.itemsData, this.itemsHoverAppearance, this.itemsHoverEffect, this.itemsHoverVariant, this.itemsSize];
    validateProps(propsValues);
  }

  @Watch('hideBelowBreakpoint')
  updateBreakpoint(newValue: "1024" | "767") {
    navbarState.hideBelowBreakpoint = newValue;
  }

  private getOpenedMenuClass(): string {
    return navbarState.isMenuOpened ? `${this.baseClass}--opened` : '';
  }

  private getHostClasses(): string {
    return [
      this.baseClass,
      `${this.baseClass}--hideBelow-${this.hideBelowBreakpoint}`,
      this.getOpenedMenuClass(),
    ].filter(Boolean).join(' ').trim();
  }

  private getItemClasses(hasSubmenu: boolean) {
    const { baseClass, itemsHoverVariant, itemsHoverAppearance, itemsBorderRadius, itemsHoverEffect } = this;
    const itemClass = `${baseClass}__item`;

    return [
      itemClass,
      `${itemClass}--${itemsHoverAppearance}`,
      itemsHoverAppearance === 'outlined' || itemsHoverAppearance === 'solid' ? `${itemClass}--hasPadding` : ``,
      `${itemClass}--${itemsHoverAppearance}-${itemsHoverVariant}`,
      isNotEmptyString(itemsHoverEffect) ? `${itemClass}--${itemsHoverEffect}` : ``,
      itemsHoverAppearance === 'solid' || itemsHoverAppearance === 'outlined' ? getBorderRadiusClass(itemsBorderRadius) : ``,
      hasSubmenu ? `${itemClass}--hasSubmenu` : ``,
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <ul data-nav-menu part='menu'>
          {this.parsedMenuData.map((item) => (
            <li class={this.getItemClasses(!isArrayEmpty(item.subMenu))} tabindex="0" part='item'>
              {item.link ? (
                <tnw-anchor href={item.link} newTab={item.newTab} hideNewTabIcon={false} color={this.itemsColor} textDecoration='none' size={this.itemsSize} part='link'>
                  {item.label}
                  {!isArrayEmpty(item.subMenu) &&
                    <tnw-icon
                      name='tnw-chevron-down'
                      hiddenAria={true}
                    />
                  }
                </tnw-anchor>
              ) : (
                <tnw-text textTag='span' color={this.itemsColor} size={this.itemsSize} part='link'>
                  {item.label}
                  {!isArrayEmpty(item.subMenu) &&
                    <tnw-icon
                      name='tnw-chevron-down'
                      hiddenAria={true}
                    />
                  }
                </tnw-text>
              )}
              {!isArrayEmpty(item.subMenu) && (
                <tnw-navbar-dropdown-menu itemsData={JSON.stringify(item.subMenu)} itemsSize={this.itemsSize} part='submenu' />
              )}
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}