import { Component, Host, Prop, h, Element, State } from '@stencil/core';
import { FontSizeType, TextColorType } from '../../utils/component-props-types';
import { getColorClass, getTypographyClass, GLOBAL_PREFIX, isNotEmptyString } from '../../utils/utils';
import { validateProps } from './utils/tnw-anchor-validate-props';
import { styles } from './tnw-anchor.styles';
import { colorStyleSheet, fontSizeStyleSheet } from '../../utils/shared-styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-anchor` component is a versatile anchor link element that can be used to navigate to other pages or external resources.
 * This component supports both text content and custom content via a slot, making it flexible for various use cases, such as wrapping other elements like images or icons.
 * 
 * @slot - Default slot for custom content (e.g., an image, icon, or complex HTML structure).
 * 
 * @part anchor - The `<a>` element that serves as the anchor link. Use this part for styling the anchor element.
 * @part icon - The `<tnw-icon>` element that displays the "new tab" icon. Only rendered if the property `hideNewTabIcon` is set to `false`.
 */
@Component({
  tag: 'tnw-anchor',
  shadow: true,
})
export class TnwAnchor {
  private baseClass = `${GLOBAL_PREFIX}-anchor`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwAnchorElement;

  @State() labelAriaValue: string = this.labelAria;

  /**
   * Specifies the URL that the link navigates to. This prop is required.
   */
  @Prop({ reflect: true }) href!: string;

  /**
   * Specifies the text content of the link. If not provided, the content should be provided via the default slot.
   */
  @Prop() text?: string;

  /**
   * Sets the color of the text based on the available colors.
   */
  @Prop() color?: TextColorType = 'auto';


  /**
   * Sets the font size of the anchor text.
   */
  @Prop() size?: FontSizeType;

  /**
   * Specifies the aria-label for the anchor, providing an accessible name for screen readers. If not provided, it defaults to the value of the `text` prop or falls back to a custom value if content is slotted.
   */
  @Prop() labelAria?: string;

  /**
   * Specifies the text decoration line of the anchor text.
   */
  @Prop() textDecoration: 'none' | 'underline' | 'overline' | 'line-through' = 'underline';

  /**
   * Specifies whether the link should open in a new browser tab.
   */
  @Prop() newTab: boolean = false;

  /**
   * Hides the new tab icon.
   */
  @Prop() hideNewTabIcon: boolean = false;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        fontSizeStyleSheet,
        colorStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.color, this.hideNewTabIcon, this.href, this.labelAria, this.newTab, this.size, this.text, this.textDecoration];
    validateProps(propsValues);

    // If `labelAria` is not explicitly provided, default it to the text content if available.
    if (!isNotEmptyString(this.labelAria)) {
      this.labelAriaValue = isNotEmptyString(this.text) ? this.text : 'Link';
    }
  }

  private getAnchorClasses(): string {
    const { baseClass, textDecoration, color, size } = this;

    return [
      baseClass,
      getColorClass('color', color),
      `${baseClass}--${textDecoration}`,
      getTypographyClass('fs', size),
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    const { href, labelAriaValue, text, newTab, baseClass, hideNewTabIcon } = this;
    const target = newTab ? "_blank" : undefined;
    const rel = newTab ? "noopener noreferrer" : undefined;

    return (
      <Host>
        <a
          class={this.getAnchorClasses()}
          href={href}
          aria-label={labelAriaValue}
          target={target}
          rel={rel}
          part='anchor'
        >
          {isNotEmptyString(text) && text}
          {(!hideNewTabIcon && newTab) ? (
            <tnw-icon
              class={`${baseClass}__newTab-icon`}
              name='tnw-arrow-up-right'
              hiddenAria={true}
              color={this.color}
              size='xs'
              part='icon'
            />
          ) : (
            <slot />
          )}
        </a>
      </Host>
    );
  }
}