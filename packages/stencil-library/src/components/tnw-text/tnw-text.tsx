import { Component, Host, h, Prop, Element } from '@stencil/core';
import { FontSizeType, FontWeightType, LineHeightType, TextAlignmentType, TextColorType, TextTransformType } from '../../utils/component-props-types';
import { getColorClass, getTextTransformClass, getTypographyClass, GLOBAL_PREFIX } from '../../utils/utils';
import { validateProps } from './utils/tnw-text-validate-props';
import { colorStyleSheet, typographyStyleSheet } from '../../utils/shared-styles';
import { styles } from './tnw-text.styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-text` component is used to display descriptive text with customizable styling options. 
 * It supports various typography-related properties, color, and alignment.
 *
 * @slot - Use the default slot to add custom content inside the text tag.
 * 
 * @part text - The main text content element.
 */
@Component({
  tag: 'tnw-text',
  shadow: true,
})
export class TnwText {
  private baseClass: string = `${GLOBAL_PREFIX}-text`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwTextElement;

  /**
   * The content of the component.
   */
  @Prop() text: string | number;

  /**
   * Specifies the text alignment.
   */
  @Prop() alignment?: TextAlignmentType;

  /**
   * Sets the color of the text based on the available colors.
   */
  @Prop() color?: TextColorType;

  /**
   * Defines the font size of the text.
   */
  @Prop() size?: FontSizeType;

  /**
   * Specifies the font weight of the text.
   */
  @Prop() weight?: FontWeightType;

  /**
   * Controls the text transformation (e.g., uppercase, lowercase).
   */
  @Prop() textCase?: TextTransformType;

  /**
   * Adjusts the line height of the text.
   */
  @Prop() lineHeight?: LineHeightType = "1_75";

  /**
   * Defines the HTML tag of the component.
   */
  @Prop() textTag?: "p" | "span" = "p";

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles)
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        typographyStyleSheet,
        colorStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.alignment, this.color, this.lineHeight, this.size, this.text, this.textCase, this.textTag, this.weight];
    validateProps(propsValues);
  }

  private getClasses(): string {
    const { baseClass, color, size, lineHeight, weight, textCase, alignment } = this;

    return [
      baseClass,
      getColorClass('color', color),
      getTypographyClass('fs', size),
      getTypographyClass('lh', lineHeight),
      getTypographyClass('fw', weight),
      getTextTransformClass(textCase),
      getTypographyClass('ta', alignment),
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    const Tag = this.textTag;

    return (
      <Host>
        <Tag class={this.getClasses()} part='text'>{this.text || <slot />}</Tag>
      </Host>
    );
  }
}
