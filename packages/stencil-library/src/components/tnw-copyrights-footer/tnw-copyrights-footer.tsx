import { Component, Element, Host, Prop, h } from '@stencil/core';
import { getColorClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString, isNotEmptyStringOrNumber } from '../../utils/utils';
import { ColorType, TextColorType } from '../../utils/component-props-types';
import { styles } from './tnw-copyrights-footer.style';
import { colorStyleSheet, containerStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-copyrights-footer-props';

/**
 * The `tnw-footer` component displays footer information such as the organization name, copyright years, 
 * and additional text. The component provides flexible options for colors, text layout, and custom slot content.
 * It can be customized to display dynamic or static years, as well as pre-defined text before and after the organization name.
 * 
 * @slot - Custom content slot for the footer. When `enableSlot` is true, this slot is used instead of the default content.
 * 
 * @part footer - The `footer` element that wraps the entire content of the footer.
 */
@Component({
  tag: 'tnw-copyrights-footer',
  shadow: true,
})
export class TnwCopyrightsFooter {

  private baseClass = `${GLOBAL_PREFIX}-copyrights-footer`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwCopyrightsFooterElement;

  /**
   * The starting year to display in the footer. If `useCurrentYearAsStartYear` is true, this will default to the current year.
   */
  @Prop() startYear?: number;

  /**
   * The ending year to display in the footer. If `useCurrentYearAsEndYear` is true, this will default to the current year.
   */
  @Prop() endYear?: number;

  /**
   * If true, the starting year will be set to the current year.
   */
  @Prop() useCurrentYearAsStartYear: boolean = false;

  /**
   * If true, the ending year will be set to the current year.
   */
  @Prop() useCurrentYearAsEndYear: boolean = false;

  /**
   * The name of the organization to display in the footer.
   */
  @Prop() organizationName?: string;

  /**
   * Text to display before the organization name.
   */
  @Prop() preText?: string;

  /**
   * Text to display after the organization name.
   */
  @Prop() postText?: string;

  /**
   * The text color for the footer content.
   */
  @Prop() textColor?: TextColorType = 'auto';

  /**
   * The color of the organization name. Defaults to the same value as `textColor`.
   */
  @Prop() organizationNameColor?: TextColorType = this.textColor;

  /**
   * The background color for the footer.
   */
  @Prop() backgroundColor: ColorType = 'auto';

  /**
   * The color of the top border of the footer.
   */
  @Prop() borderTopColor: ColorType = 'auto';

  /**
   * If true, the footer will render custom content using a slot instead of the default content.
   */
  @Prop() enableSlot?: boolean = false;

  /**
   * Centering text
   */
  @Prop() centerContent: boolean = false;

  /**
   * If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.
   */
  @Prop() disableInternalContainer?: boolean = false;

  /**
   * If `true`, the footer will be rendered using a `<div>` element instead of a `<footer>` element. This is useful when this component is used inside a `<footer>` or inside the component `<tnw-footer>`.
   */
  @Prop() useDivAsContainer: boolean = false;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        colorStyleSheet,
        containerStyleSheet,
        this.componentStyles,
      ]
    }
  }

  componentWillLoad() {
    const propsValues = [this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.enableSlot, this.endYear, this.organizationName, this.organizationNameColor, this.postText, this.preText, this.startYear, this.textColor, this.useCurrentYearAsEndYear, this.useCurrentYearAsStartYear];
    validateProps(propsValues);
  }

  private getYearsRange(): string {
    const { startYear, endYear, useCurrentYearAsStartYear, useCurrentYearAsEndYear } = this;
    const currentYear = new Date().getFullYear();

    const startYearValue: number = useCurrentYearAsStartYear ? currentYear : startYear;
    const endYearValue: number = useCurrentYearAsEndYear ? currentYear : endYear;

    if (isNotEmptyStringOrNumber(startYear)) {
      if (isNotEmptyStringOrNumber(endYearValue)) {
        return `${String(startYearValue)} - ${String(endYearValue)}`;
      }
      return String(startYearValue);
    }

    // If endYearValue is not null or undefined, return it
    if (isNotEmptyStringOrNumber(endYearValue)) {
      return String(endYearValue);
    }

    return '';
  }

  private getHostClasses(): string {
    const { baseClass, borderTopColor, backgroundColor, centerContent } = this;

    return [
      baseClass,
      centerContent ? `${baseClass}--center` : ``,
      isNotEmptyString(borderTopColor) ? `${baseClass}--borderTop` : ``,
      getColorClass('bg', backgroundColor),
      getColorClass('border-top', borderTopColor),
    ].filter(Boolean).join(' ').trim();
  }

  private renderContent() {
    const yearsRange = this.getYearsRange();
    const contentParts: string[] = [];

    if (isNotEmptyString(this.preText)) {
      contentParts.push(this.preText);
    }

    if (isNotEmptyString(this.organizationName)) {
      contentParts.push(this.organizationName);
    }

    if (isNotEmptyString(this.postText)) {
      contentParts.push(this.postText);
    }

    if (isNotEmptyString(yearsRange)) {
      contentParts.push(yearsRange);
    }

    return (
      <tnw-text
        text={contentParts.join(' ')}
        size="xs"
        color={this.textColor}
        class={`${this.baseClass}__content`}
        part="content"
        alignment={this.centerContent ? 'center' : undefined}
      />
    );
  }

  render() {
    const FooterTag = this.useDivAsContainer ? 'div' : 'footer';

    return (
      <Host class={this.getHostClasses()}>
        <FooterTag
          class={!this.disableInternalContainer ? 'container' : ''}
          part='container'
          aria-label="Copyright information"
        >
          {this.enableSlot ? (
            <slot />
          ) : (
            this.renderContent()
          )}
        </FooterTag>
      </Host>
    );
  }
}