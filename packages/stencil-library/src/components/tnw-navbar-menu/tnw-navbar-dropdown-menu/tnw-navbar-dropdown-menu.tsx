import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, parseJSONAsync } from '../../../utils/utils';
import { state as navbarState } from '../../../stores/navbar-store';
import { styles } from './tnw-navbar-dropdown-menu.styles';
import { FontSizeType } from '../../../components';

/**
 * The `tnw-navbar-dropdown-menu` component is designed to be used within the `tnw-navbar-menu` component to handle dropdown navigation menus.
 */
@Component({
  tag: 'tnw-navbar-dropdown-menu',
  shadow: true,
})
export class TnwNavbarDropdownMenu {
  private baseClass = `${GLOBAL_PREFIX}-navbar-dropdown-menu`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwNavbarDropdownMenuElement;

  @State() parsedData: any[] = [];

  /**
   * The JSON string representing the dropdown menu items. Each item should include a `label`, `link`, and optional newTab.
   */
  @Prop() itemsData!: string;

  /**
   * The size of the items.
   */
  @Prop() itemsSize?: FontSizeType = 'sm';

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

  async componentWillLoad() {
    this.parsedData = await parseJSONAsync(this.itemsData);
  }

  private get menuInvisibilityBreakpoint(): "767" | "1024" {
    return navbarState.hideBelowBreakpoint;
  }

  private getHostClasses(): string {
    const { baseClass, menuInvisibilityBreakpoint } = this;

    return [
      baseClass,
      `${baseClass}--bp-${menuInvisibilityBreakpoint}`,
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <ul class={`${this.baseClass}__list`}>
          {this.parsedData.map((item) => (
            <li class={`${this.baseClass}__item`} tabindex="0">
              <tnw-anchor href={item.link} text={item.label} newTab={item.newTab} hideNewTabIcon={false} textDecoration='none' size={this.itemsSize} />
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}