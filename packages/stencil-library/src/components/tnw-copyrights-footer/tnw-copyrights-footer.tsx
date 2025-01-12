import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { getColorClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString, isNotEmptyStringOrNumber } from '../../utils/utils';
import { ColorType, TextColorType } from '../../utils/component-props-types';
import { styles } from './tnw-copyrights-footer.style';
import { colorStyleSheet, containerStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-copyrights-footer-validate-props';
import { validateYearsProps } from './utils/tnw-copyrights-footer-validate-years-props';
import { TnwCopyrightsFooterLink } from './utils/TnwCopyrightsFooterLink';

/**
 * The `tnw-footer` component displays footer information such as the organization name, copyright years, 
 * and additional text. The component provides flexible options for colors, text layout, and custom slot content.
 * It can be customized to display dynamic or static years, as well as pre-defined text before and after the organization name.
 * 
 * @part copyrights - the `tnw-text` element that displays the copyright information.
 * @part container - the `FooterTag` element that contains the footer content.
 * 
 * @slot copyrights - Slot for copyright information.
 * @slot link-<n> - Slots for custom links (requires `useCustomLinks` to be true).
 */
@Component({
  tag: 'tnw-copyrights-footer',
  shadow: true,
})
export class TnwCopyrightsFooter {

  private baseClass = `${GLOBAL_PREFIX}-copyrights-footer`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwCopyrightsFooterElement;

  /* --------------- Internal State Management --------------- */

  @State() parsedLinksData: TnwCopyrightsFooterLink[] = [];

  /* -------------------------- Props -------------------------- */
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
   * The color of the organization name. Defaults to the same value as `textColor`.
   * 
   * @deprecated since v2.2.0
   */
  @Prop() organizationNameColor?: TextColorType = this.textColor;

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
   * The background color for the footer.
   */
  @Prop() backgroundColor: ColorType = 'auto';

  /**
   * The color of the top border of the footer.
   */
  @Prop() borderTopColor: ColorType = 'auto';

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

  /**
   * Array of objects represents links data. Cannot be used when `useCustomLinks` is `true`.
   */
  @Prop() linksData?: string;

  /**
   * If `true`, the footer will render custom links using a slot instead of the `linksData`.
   * Provide accurate `linksLength` when this prop is `true`.
   * When use this prop, the `linksData` prop will be ignored.
   */
  @Prop() useCustomLinks?: boolean = false;

  /**
   * Number of links. Must be provided when `useCustomLinks` is `true`.
   */
  @Prop() linksLength?: number;

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
    validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.endYear, this.linksData, this.linksLength, this.organizationName, this.organizationNameColor, this.postText, this.preText, this.startYear, this.textColor, this.useCurrentYearAsEndYear, this.useCurrentYearAsStartYear, this.useCustomLinks, this.useDivAsContainer]);
    validateYearsProps(this.startYear, this.endYear, this.useCurrentYearAsStartYear, this.useCurrentYearAsEndYear);
    try {
      this.parsedLinksData = isNotEmptyString(this.linksData) ? JSON.parse(this.linksData) : [];
    } catch (error) {
      console.error('Error parsing links data', error);
      this.parsedLinksData = null;
    }
  }

  private getYearsRange(): string {
    const { startYear, endYear, useCurrentYearAsStartYear, useCurrentYearAsEndYear } = this;
    const currentYear = new Date().getFullYear();

    const startYearValue: number = useCurrentYearAsStartYear ? currentYear : startYear;
    const endYearValue: number = useCurrentYearAsEndYear ? currentYear : endYear;

    if (isNotEmptyStringOrNumber(startYearValue)) {
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

  private renderCopyrights() {
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

    if (contentParts.join(' ') === '') {
      return <slot name="copyrights" />;
    }

    return (
      <tnw-text
        text={contentParts.join(' ')}
        size="xs"
        color={this.textColor}
        class={`${this.baseClass}__content`}
        part="copyrights"
        alignment={this.centerContent ? 'center' : undefined}
        highlight={this.organizationName}
        highlightWeight='600'
        highlightTag='strong'
        widthSize='unset'
      />
    );
  }

  private renderLinks() {
    const hasParsedLinksData = this.parsedLinksData !== undefined && this.parsedLinksData.length > 0;
    const hasCustomLinks = this.useCustomLinks && this.linksLength > 0;

    if (!hasParsedLinksData && !hasCustomLinks) {
      return null;
    }

    return (
      <ul class={`${this.baseClass}__links`}>
        {hasCustomLinks ? (
          Array.from({ length: this.linksLength }, (_, i) => (
            <li>
              <tnw-text
                class={`${this.baseClass}__links-item`}
                color={this.textColor}
                widthSize='unset'
              >
                <slot name={`link-${i + 1}`} />
              </tnw-text>
            </li>
          ))
        ) : (
          hasParsedLinksData && (
            this.parsedLinksData.map((link: TnwCopyrightsFooterLink) => (
              <li>
                <tnw-anchor
                  class={`${this.baseClass}__links-item`}
                  text={link.text}
                  href={link.url}
                  newTab={link.newTab}
                  textDecoration='none'
                  color={this.textColor}
                  size='xs'
                />
              </li>
            ))
          )
        )}
      </ul>
    )
  }

  render() {
    const FooterTag = this.useDivAsContainer ? 'div' : 'footer';

    return (
      <Host class={this.getHostClasses()}>
        <FooterTag
          class={!this.disableInternalContainer ? 'container' : ''}
          part='container'
        >
          {[
            this.renderCopyrights(),
            this.renderLinks(),
          ]}
        </FooterTag>
      </Host>
    );
  }
}