import { Component, Host, Prop, State, h, Element, Watch } from '@stencil/core';
import { GLOBAL_PREFIX, getColorClass, getTextTransformClass, getTypographyClass } from '../../utils/utils';
import { FontSizeType, FontWeightType, LineHeightType, TextAlignmentType, TextColorType, TextTransformType } from '../../utils/component-props-types';
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
   * Specifies the HTML tag to be used for the heading.
   */
  @Prop() level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' = 'h2';

  /**
   * Specifies the HTML tag to be used for the heading.
   * @deprecated since v1.0.0
   */
  @Prop() headingTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' = 'h2';

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
    const propsValues = [this.alignment, this.color, this.level, this.lineHeight, this.size, this.text, this.textCase, this.useTextFont, this.weight];
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

  private getClasses(): string {
    const { baseClass, color, textCase, lineHeight, useTextFont, alignment, computedWeight, computedSize } = this;
    return [
      baseClass,
      useTextFont ? `${baseClass}--textFont` : ``,
      getColorClass('color', color),
      getTypographyClass('fs', computedSize),
      getTypographyClass('lh', lineHeight),
      getTypographyClass('fw', computedWeight),
      getTextTransformClass(textCase),
      getTypographyClass('ta', alignment),
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    const HeadingTag = this.level;

    return (
      <Host>
        <HeadingTag class={this.getClasses()} part='heading'>
          {this.text || <slot />}
        </HeadingTag>
      </Host>
    );
  }
}
