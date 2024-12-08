import { Component, Host, Prop, State, h, Element, Watch, Fragment } from '@stencil/core';
import { GLOBAL_PREFIX, getColorClass, getTextTransformClass, getTypographyClass, isNotEmptyString } from '../../utils/utils';
import { FontSizeType, FontWeightType, LineHeightType, TextAlignmentType, TextColorType, TextTransformType, SizeType } from '../../utils/component-props-types';
import { validateProps } from './utils/tnw-heading-validate-props';
import { styles } from './tnw-heading.styles';
import { typographyStyleSheet, colorStyleSheet } from '../../utils/shared-styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-heading` component is used to render a customizable heading or title with various styling options.
 * It allows you to control the text alignment, color, size, weight, transformation, and line height, 
 * along with the ability to use a different HTML tag for the heading element.
 * 
 * @slot - Use the default slot to add custom content inside the heading tag.
 * 
 * @part heading - The root `heading` element rendered by the component.
 */
@Component({
  tag: 'tnw-heading',
  shadow: true,
})
export class TnwHeading {
  private baseClass: string = `${GLOBAL_PREFIX}-heading`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwHeadingElement;

  @State() computedWeight: FontWeightType;
  @State() computedSize: FontSizeType;

  /**
   * The content of the heading. If no text is provided, the slot content will be used.
   */
  @Prop() text?: string;

  /**
   * Specifies which piece of text in the `text` prop should be bolded.
   */
  @Prop() highlight?: string;

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
   * Specifies the HTML tag to be used for the heading.
   */
  @Prop() level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';

  /**
   * Specifies the HTML tag to be used for the heading.
   * @deprecated since v1.0.0. Use `level` instead.
   */
  @Prop() headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';

  /**
   * Sets the text alignment within the container.
   */
  @Prop() alignment?: TextAlignmentType;

  /**
   * Sets the color of the text based on the available theme colors.
   */
  @Prop() color?: TextColorType;

  /**
   * Specifies the font weight of the text.
   */
  @Prop() weight?: FontWeightType;

  /**
   * Defines the font size of the text.
   */
  @Prop() size?: FontSizeType;

  /**
   * Controls the text transformation (e.g., uppercase, lowercase).
   */
  @Prop() textCase?: TextTransformType;

  /**
   * Adjusts the line height of the text.
   */
  @Prop() lineHeight?: LineHeightType = "1_5";

  /**
   * The width size of the text.
   */
  @Prop() widthSize?: SizeType | "xl" | "full" = 'full';

  /**
   * If true, applies a text font style to the heading instead of the default heading font.
   */
  @Prop() useTextFont: boolean = false;

  @Watch('level')
  @Watch('weight')
  @Watch('size')
  @Watch('alignment')
  handlePropsChange() {
    this.updateDefaultStyles();
  }

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
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
    const propsValues = [this.alignment, this.color, this.headingTag, this.highlight, this.highlightColor, this.highlightTag, this.highlightWeight, this.level, this.lineHeight, this.size, this.text, this.textCase, this.useTextFont, this.weight, this.widthSize];
    validateProps(propsValues);

    this.updateDefaultStyles();
  }

  private updateDefaultStyles() {
    this.computedWeight = this.weight || this.getDefaultWeight();
    this.computedSize = this.size || this.getDefaultSize();
  }

  private getDefaultWeight(): FontWeightType {
    switch (this.level) {
      case 'h1': return '700';
      case 'h2': return '600';
      default: return '400';
    }
  }

  private getDefaultSize(): FontSizeType {
    switch (this.level) {
      case 'h1': return '5xl';
      case 'h2': return 'heading';
      default: return 'xl';
    }
  }

  private getHostClasses(): string {
    const { baseClass, widthSize } = this;
    return [
      baseClass,
      isNotEmptyString(widthSize) ? `${baseClass}--width-${widthSize}` : ``,
    ].filter(Boolean).join(' ').trim();
  }

  private getHeadingClasses(): string {
    const { baseClass, color, textCase, lineHeight, useTextFont, alignment, computedWeight, computedSize } = this;
    const headingClass = `${baseClass}__inner`;

    return [
      headingClass,
      useTextFont ? `${headingClass}--textFont` : ``,
      getColorClass('color', color),
      getTypographyClass('fs', computedSize),
      getTypographyClass('lh', lineHeight),
      getTypographyClass('fw', computedWeight),
      getTextTransformClass(textCase),
      getTypographyClass('ta', alignment),
    ].filter(Boolean).join(' ').trim();
  }

  private renderHighlightedText() {
    const { text, highlight, highlightColor, highlightWeight, highlightTag } = this;

    if (!isNotEmptyString(highlight)) return null;

    let preText = text;
    let highlightedText = null;
    let postText = null;

    const highlightIndex = text.toLowerCase().indexOf(highlight.toLowerCase());

    if (highlightIndex !== -1) {
      preText = text.slice(0, highlightIndex).trimEnd();
      highlightedText = text.slice(highlightIndex, highlightIndex + highlight.length);
      postText = text.slice(highlightIndex + highlight.length).trimStart();
    }

    return (
      <Fragment>
        {isNotEmptyString(preText) && preText}
        {isNotEmptyString(preText) && ' '}
        {isNotEmptyString(highlightedText) && (
          <tnw-text
            text={highlightedText}
            textTag={highlightTag}
            weight={highlightWeight}
            color={highlightColor}
            displayMode='inline-block'
            widthSize={null}
          />
        )}
        {isNotEmptyString(postText) && ' '}
        {isNotEmptyString(postText) && postText}
      </Fragment>
    );
  }

  private renderHeadingText() {
    const { text } = this;

    if (!isNotEmptyString(text)) return null;

    if (this.renderHighlightedText() !== null) return this.renderHighlightedText();

    return text;
  }

  render() {
    const HeadingTag = this.level;

    return (
      <Host class={this.getHostClasses()}>
        <HeadingTag class={this.getHeadingClasses()} part='heading'>
          {
            this.renderHeadingText() !== null ?
              this.renderHighlightedText() :
              <slot />
          }
        </HeadingTag>
      </Host>
    );
  }
}
