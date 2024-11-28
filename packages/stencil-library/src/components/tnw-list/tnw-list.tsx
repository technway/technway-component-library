import { Component, Host, Prop, State, Element, h } from '@stencil/core';
import { getClassNames, getColorClass, getTextTransformClass, getTypographyClass, GLOBAL_PREFIX, parseJSONAsync } from '../../utils/utils';
import { styles } from './tnw-list.styles';
import { validateProps } from './utils/tnw-list-validate-props';
import { FontSizeType, FontWeightType, LineHeightType, TextColorType, TextTransformType } from '../../utils/component-props-types';
import { colorStyleSheet, typographyStyleSheet } from '../../utils/shared-styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-list` component is a customizable list element supporting both ordered and unordered styles.
 * It allows you to create lists with various marker types, colors, and fonts, and can also include icons within list items.
 * 
 * @part list - The `<ul>` element of the list itself.
 * @part item - Each `<li>` element representing an individual list item.
 * @part icon - The `tnw-icon` element displayed next to list items (optional).
 */
@Component({
  tag: 'tnw-list',
  shadow: true,
})
export class TnwList {
  private baseClass = `${GLOBAL_PREFIX}-list`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwListElement;

  @State() parsedData: any[] = [];

  /**
   * A JSON string representing the list data. Each item can contain `text` and an optional `icon`.
   */
  @Prop() listData!: string;

  /**
   * Defines the type of list marker to use.
   */
  @Prop() markerType?: 'disc' | 'circle' | 'square' | 'decimal' | 'lower-roman' | 'upper-roman' | 'none' = 'disc';

  /**
   * Specifies the position of the list marker relative to the text.
   */
  @Prop() markerPosition?: 'inside' | 'outside' = 'inside';

  /**
   * Sets the color of the list items based on the available colors.
   */
  @Prop() color?: TextColorType;

  /**
   * Defines the font size of the list items.
   */
  @Prop() size?: FontSizeType;

  /**
   * Specifies the font weight of the list items.
   */
  @Prop() weight?: FontWeightType;

  /**
   * Controls the list items text transformation (e.g., uppercase, lowercase).
   */
  @Prop() textCase?: TextTransformType;

  /**
   * Adjusts the line height of the list items.
   */
  @Prop() lineHeight?: LineHeightType = "1_75";

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
      ]
    }
  }

  async componentWillLoad() {
    this.parsedData = await parseJSONAsync(this.listData);

    const propsValues = [this.color, this.lineHeight, this.listData, this.markerPosition, this.markerType, this.size, this.textCase, this.weight];
    validateProps(propsValues);
  }

  private getListClasses() {
    const { baseClass, markerType, markerPosition } = this;

    const classes = [
      markerType,
      markerPosition,
    ];

    return [
      baseClass,
      getClassNames(classes, baseClass),
    ].filter(Boolean).join(' ').trim();
  }

  private getItemClasses() {
    const { baseClass, color, size, lineHeight, weight, textCase } = this;
    const itemClass = `${baseClass}__item`;

    return [
      itemClass,
      getColorClass('color', color),
      getTypographyClass('fs', size),
      getTypographyClass('lh', lineHeight),
      getTypographyClass('fw', weight),
      getTextTransformClass(textCase),
    ].filter(Boolean).join(' ').trim();
  }

  render(): JSX.Element {
    const listClasses: string = this.getListClasses();
    const itemClasses: string = this.getItemClasses();
    const iconClasses: string = `${this.baseClass}__icon`;

    return (
      <Host>
        <ul class={listClasses} part='list'>
          {this.parsedData.map((item) => (
            <li class={itemClasses} part='item'>
              {item.icon && <tnw-icon class={iconClasses} name={item.icon} size='xs' part='icon'></tnw-icon>}
              {item.text}
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}