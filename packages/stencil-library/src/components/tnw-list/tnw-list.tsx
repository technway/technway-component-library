import { Component, Host, Prop, State, Element, h } from '@stencil/core';
import { getColorClass, getTextTransformClass, getTypographyClass, GLOBAL_PREFIX, parseJSONAsync } from '../../utils/utils';
import { styles } from './tnw-list.styles';
import { validateProps } from './utils/tnw-list-validate-props';
import { FontSizeType, FontWeightType, LineHeightType, TextColorType, TextTransformType } from '../../utils/component-props-types';
import { colorStyleSheet, typographyStyleSheet } from '../../utils/shared-styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { TnwListData, TnwListItem } from './utils/tnw-list-data-types';

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

  @State() parsedData: TnwListData | null = null;

  /**
   * A JSON string representing the list data. Each item can contain `text` and an optional `icon`.
   */
  @Prop() listData!: string;

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

    validateProps([this.color, this.lineHeight, this.listData, this.markerPosition, this.size, this.textCase, this.weight]);
  }

  private getMarkerTypeClasses(baseClass: string, markerType?: string, listTag?: string): string {
    if (markerType && markerType.trim() !== '') {
      return `${baseClass}--${markerType}`;
    }

    if (listTag === 'ul') {
      return `${baseClass}--disc`;
    }

    if (listTag === 'ol') {
      return `${baseClass}--decimal`;
    }

    return '';
  }

  private getListClasses(
    markerType?: string,
    listTag?: string,
    baseClass: string = this.baseClass
  ): string {
    const { markerPosition } = this;

    return [
      baseClass,
      `${baseClass}--${markerPosition}`,
      this.getMarkerTypeClasses(baseClass, markerType, listTag),
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

  private renderList(listItems?: TnwListData | null, className?: string, partName?: string) {
    if (this.isInvalidListItems(listItems)) {
      return null;
    }

    const ListTag: string = listItems.listTag ?? 'ul';

    return (
      <ListTag class={className} part={partName}>
        {listItems.items.map((item) => this.renderListItem(item))}
      </ListTag>
    );
  }

  private isInvalidListItems(listItems?: TnwListData | null): boolean {
    return listItems == null || listItems.items == null || !Array.isArray(listItems.items);
  }

  private renderListItem(item: TnwListItem) {
    const { text, iconName, subList, url } = item;
    const subListClass = `${this.baseClass}__sub-list`;

    return (
      <li class={this.getItemClasses()} part="item">
        {iconName && (
          <tnw-icon
            class={`${this.baseClass}__icon`}
            name={iconName}
            size="xs"
            part="icon"
          ></tnw-icon>
        )}
        {url && url.trim() !== '' ? (
          <tnw-anchor
            href={url}
            textDecoration="none"
            color={this.color}
            text={text}
            size={this.size}
          />
        ) : (
          text
        )}
        {subList != null ? this.renderList(subList, this.getListClasses(subList?.markerType, subList?.listTag, subListClass), 'sub-list') : null}
      </li>
    );
  }

  render(): JSX.Element {
    const { parsedData } = this;

    if (parsedData === null) return null;

    return (
      <Host>
        {this.renderList(this.parsedData, this.getListClasses(parsedData?.markerType, parsedData?.listTag), 'list')}
      </Host>
    );
  }
}