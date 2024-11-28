import { Component, Element, Host, Prop, h } from '@stencil/core';
import { colorStyleSheet, fontWeightStyleSheet, textTransformStyleSheet } from '../../utils/shared-styles';
import { TextColorType, SizeType, FontWeightType, TextTransformType } from '../../utils/component-props-types';
import { GLOBAL_PREFIX, getColorClass, getTypographyClass, getTextTransformClass } from '../../utils/utils';
import { styles } from './tnw-label.styles';
import { validateProps } from './utils/tnw-label-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-label` component is used to create a text label for a form element like an input or a textarea.
 * It supports various font sizes, weights, colors, and text transformations. Additionally, it allows the label to be visually hidden while remaining accessible to screen readers.
 * 
 * @part label - The `<label>` element itself. This can be targeted for further styling.
 */
@Component({
  tag: 'tnw-label',
  shadow: true,
})
export class TnwLabel {
  private baseClass: string = `${GLOBAL_PREFIX}-label`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwLabelElement;

  /**
   * The content of the component.
   */
  @Prop() text!: string | number;

  /**
   * The `for` attribute, used to associate the label with an input element by ID.
   */
  @Prop() htmlFor!: string;

  /**
   * Sets the color of the label based on the available colors.
   */
  @Prop() color?: TextColorType;

  /**
   * Defines the font size of the label.
   */
  @Prop() size?: SizeType = "sm";

  /**
   * Specifies the font weight of the label.
   */
  @Prop() weight?: FontWeightType = "500";

  /**
   * Controls the text transformation (e.g., uppercase, lowercase).
   */
  @Prop() textCase?: TextTransformType;

  /**
   * This prop is used to render the label as a hidden label for accessibility purposes.
   */
  @Prop() isSrOnly?: boolean = false;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        fontWeightStyleSheet,
        colorStyleSheet,
        textTransformStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.color, this.htmlFor, this.isSrOnly, this.size, this.text, this.textCase, this.weight];
    validateProps(propsValues);
  }

  private getClasses(): string {
    const { baseClass, color, size, weight, textCase, isSrOnly } = this;

    return [
      baseClass,
      `${baseClass}--${size}`,
      isSrOnly ? `sr-only` : ``,
      getColorClass('color', color),
      getTypographyClass('fw', weight),
      getTextTransformClass(textCase),
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host>
        <label class={this.getClasses()} htmlFor={this.htmlFor} part='label'>
          {this.text}
        </label>
      </Host>
    );
  }
}
