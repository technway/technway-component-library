import { Component, Element, Host, Prop, h } from '@stencil/core';
import { getColorClass, getHeightClass, getMinHeightClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { containerStyleSheet } from '../../utils/shared-styles';
import { ColorType, LogicalAlignmentType, SizeType } from '../../utils/component-props-types';
import { styles } from './tnw-header.styles';
import { validateProps } from './utils/tnw-header-validate-props';

/**
 * The `tnw-header` component is designed to create a customizable and structured header for your application.
 * It allows for flexible layout options with support for navigation bars, banners, and various alignment and size customizations.
 * 
 * @slot navbar - Slot for inserting navigation bar elements. Use this slot to insert your navigation bar.
 * @slot banner - Slot for inserting header-related content like a banner.
 * 
 * @part header - The main `header` element that wraps the header's content.
 */
@Component({
  tag: 'tnw-header',
  shadow: true,
})
export class TnwHeader {
  private baseClass = `${GLOBAL_PREFIX}-header`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwHeaderElement;

  /**
   * If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.
   */
  @Prop() disableInternalContainer?: boolean = false;

  /**
   * Specifies the background color for the header. Available options include 'primary', 'secondary', 'inverse', 'auto', 'white', and 'black'.
   */
  @Prop() backgroundColor: 'primary' | 'secondary' | 'inverse' | 'auto' | 'white' | 'black';

  /**
   * Defines the color of the bottom border of the header. Accepts standard color types like 'primary', 'secondary', 'black', and more.
   */
  @Prop() borderBottomColor: ColorType;

  /**
   * Sets the overall height of the header. Options include predefined size types such as 'full', 'auto', or 'full-screen'. Default is 'auto'.
   */
  @Prop() height: SizeType | 'xl' | 'full' | 'auto' | 'full-screen' = 'auto';

  /**
   * Sets the minimum height of the header. Like the `height` prop, it accepts size types like 'full', 'auto', or 'full-screen'. Default is 'auto'.
   */
  @Prop() minHeight: SizeType | 'full' | 'auto' | 'full-screen' = 'auto';

  /**
   * Controls the alignment of the header content. Accepts logical alignment types such as 'start', 'center', or 'end'. Default is 'start'.
   */
  @Prop() alignment: LogicalAlignmentType = 'start';

  /**
   * If `true`, centers the banner content both horizontally and vertically within the header.
   */
  @Prop() centerBanner: boolean = false;

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
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    validateProps([this.alignment, this.backgroundColor, this.borderBottomColor, this.centerBanner, this.disableInternalContainer, this.height, this.minHeight]);
  }

  private getHostClasses(): string {
    const { baseClass, height, backgroundColor, borderBottomColor, minHeight, centerBanner } = this;

    return [
      this.baseClass,
      centerBanner ? `${baseClass}--centerBanner` : '',
      isNotEmptyString(borderBottomColor) ? `${baseClass}--borderBottom` : ``,
      getColorClass('bg', backgroundColor),
      getColorClass('border-bottom', borderBottomColor),
      getMinHeightClass(minHeight),
      getHeightClass(height),
    ].filter(Boolean).join(' ').trim();
  }

  private getContentClasses() {
    const { baseClass, alignment, disableInternalContainer } = this;
    const contentClass = `${baseClass}__content`;

    return [
      contentClass,
      `${contentClass}--${alignment}`,
      !disableInternalContainer ? `container` : '',
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <header class={this.getContentClasses()} part='header'>
          <slot name='navbar' />
          <slot name='banner' />
        </header>
      </Host >
    );
  }
}