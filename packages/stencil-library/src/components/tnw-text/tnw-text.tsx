import { Component, Host, h, Prop, Element, Fragment } from '@stencil/core';
import { FontSizeType, FontWeightType, LineHeightType, TextAlignmentType, TextColorType, TextTransformType, SizeType } from '../../utils/component-props-types';
import { getColorClass, getTextTransformClass, getTypographyClass, GLOBAL_PREFIX, isNotEmptyString, isNotEmptyStringOrNumber } from '../../utils/utils';
import { validateProps } from './utils/tnw-text-validate-props';
import { colorStyleSheet, typographyStyleSheet } from '../../utils/shared-styles';
import { styles } from './tnw-text.styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { validateHighlightText } from '../../utils/component-validations';

/**
 * The `tnw-text` component is used to display descriptive text with customizable styling options. 
 * It supports various typography-related properties, color, and alignment.
 *
 * @slot - Use the default slot to add custom content inside the text tag.
 * 
 * @part text - The main text content element.
 * @part highlighted-text - The highlighted text content element.
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
   * Specifies which piece of text in the `text` prop should be bolded.
   */
  @Prop() highlight?: string | number;

  /**
   * Specifies the color of the highlighted text.
   */
  @Prop() highlightColor?: TextColorType;

  /**
   * Specifies the font weight of the highlighted text.
   */
  @Prop() highlightWeight?: FontWeightType = "600";

  /**
   * Specifies the HTML tag to be used for the highlighted text. Useful for SEO purposes.
   */
  @Prop() highlightTag?: "span" | "strong" | "em" | "mark" = "span";

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
   * The width size of the text. Use unset to avoid setting width.
   */
  @Prop() widthSize?: SizeType | "xl" | "full" | "unset" = 'full';

  /**
   * Defines the HTML tag of the component.
   */
  @Prop() textTag?: "p" | "span" | "strong" | "em" | "mark" = "p";

  /**
   * Defines the display mode of the component. It's not recommended to use the `"inline"` display mode, use `"inline-block"` instead.
   */
  @Prop() displayMode: "block" | "inline-block" | "inline" = "block";

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
    validateProps([this.alignment, this.color, this.displayMode, this.highlight, this.highlightColor, this.highlightTag, this.highlightWeight, this.lineHeight, this.size, this.text, this.textCase, this.textTag, this.weight, this.widthSize]);

    if (isNotEmptyStringOrNumber(this.highlight)) {
      validateHighlightText(this.text as string, this.highlight as string);
    }
  }

  private getHostClasses(): string {
    const { baseClass, widthSize, displayMode } = this;
    return [
      baseClass,
      `${baseClass}--${displayMode}`,
      isNotEmptyString(widthSize) ? `${baseClass}--width-${widthSize}` : ``,
    ].filter(Boolean).join(' ').trim();
  }

  private getTextClasses(): string {
    const { baseClass, color, size, lineHeight, weight, textCase, alignment } = this;
    const headingClass = `${baseClass}__inner`;

    return [
      headingClass,
      getColorClass('color', color),
      getTypographyClass('fs', size),
      getTypographyClass('lh', lineHeight),
      getTypographyClass('fw', weight),
      getTextTransformClass(textCase),
      getTypographyClass('ta', alignment),
    ].filter(Boolean).join(' ').trim();
  }

  private renderHighlightedText() {
    const { text, highlight, highlightColor, highlightWeight, highlightTag } = this;

    if (!isNotEmptyStringOrNumber(highlight)) return null;

    let preText: string | number = text;
    let highlightedText: string | number = null;
    let postText: string | number = null;

    const textString = text.toString();
    const highlightString = highlight.toString();

    const highlightIndex = textString.toLowerCase().indexOf(highlightString.toLowerCase());

    if (highlightIndex !== -1) {
      preText = textString.slice(0, highlightIndex).trimEnd();
      highlightedText = textString.slice(highlightIndex, highlightIndex + highlightString.length);
      postText = textString.slice(highlightIndex + highlightString.length).trimStart();
    }

    return (
      <Fragment>
        {isNotEmptyStringOrNumber(preText) && preText}
        {isNotEmptyStringOrNumber(preText) && ' '}
        {isNotEmptyStringOrNumber(highlightedText) && (
          <tnw-text
            text={highlightedText}
            textTag={highlightTag}
            weight={highlightWeight}
            color={highlightColor}
            displayMode='inline-block'
            widthSize={"unset"}
            part='highlighted-text'
          />
        )}
        {isNotEmptyStringOrNumber(postText) && ' '}
        {isNotEmptyStringOrNumber(postText) && postText}
      </Fragment>
    );
  }


  private renderText() {
    const { text } = this;

    if (!isNotEmptyStringOrNumber(text)) return null;

    if (this.renderHighlightedText() !== null) return this.renderHighlightedText();

    return text;
  }

  render() {
    const Tag = this.textTag;

    return (
      <Host class={this.getHostClasses()}>
        <Tag class={this.getTextClasses()} part='text'>
          {
            this.renderText() !== null ?
              this.renderText() :
              <slot />
          }
        </Tag>
      </Host>
    );
  }
}