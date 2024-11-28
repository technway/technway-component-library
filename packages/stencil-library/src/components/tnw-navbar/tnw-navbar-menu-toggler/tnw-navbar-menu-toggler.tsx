import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { isCSSStyleSheetSupported } from '../../../utils/utils';
import { state as navbarState, onChange as onNavbarStateChange } from '../../../stores/navbar-store';
import { borderRadiusStyleSheet, colorStyleSheet, extendedAppearanceStyleSheet } from '../../../utils/shared-styles';
import { styles } from './tnw-navbar-menu-toggler.styles';
import { validateProps } from './utils/tnw-navbar-menu-toggler-validate-props';

/**
 * The `tnw-navbar-menu-toggler` component is designed to be used within the `tnw-navbar` component to handle `tnw-navbar-menu` responsive visibility.
 */
@Component({
  tag: 'tnw-navbar-menu-toggler',
  shadow: true,
})
export class TnwNavbarMenuToggler {
  private componentStyles: CSSStyleSheet;

  @State() togglerDisplay: { display: string } = { display: 'none' };
  @State() isOpen: boolean = false;

  @Element() el!: HTMLTnwNavbarMenuTogglerElement

  /**
   * Specifies the aria label for the menu toggler icon for accessibility purposes.
   */
  @Prop() labelAria: string = 'Toggle Navbar Menu';

  constructor() {
    this.toggleMenu = this.toggleMenu.bind(this);

    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    this.updateTogglerDisplay();

    // Reactively update the toggler display when hideBelowBreakpoint changes
    onNavbarStateChange('hideBelowBreakpoint', () => {
      this.updateTogglerDisplay();
    });

    (this.el.shadowRoot as any).adoptedStyleSheets = [
      extendedAppearanceStyleSheet,
      colorStyleSheet,
      borderRadiusStyleSheet,
      this.componentStyles
    ]
  }

  componentWillLoad() {
    const propsValues = [this.labelAria];
    validateProps(propsValues);
  }

  private updateTogglerDisplay() {
    const screenWidth = window.innerWidth;
    const hideBelow = parseInt(navbarState.hideBelowBreakpoint);

    this.togglerDisplay.display = screenWidth < hideBelow ? 'block' : 'none';
  }

  private toggleMenu() {
    // Toggle the isMenuOpened state in the store
    navbarState.isMenuOpened = !navbarState.isMenuOpened;
  }

  render() {
    return (
      <Host
        style={this.togglerDisplay}
        role="button"
        aria-label={this.labelAria}
        onClick={this.toggleMenu}
        aria-expanded={this.isOpen.toString()}
      >
        <tnw-icon
          name='tnw-menu'
          color='auto'
          size='md'
          appearance='outlined'
          variant='auto'
          hiddenAria={false}
          borderRadius='circle'
        />
      </Host>
    );
  }
}