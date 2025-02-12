import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString, isNotEmptyStringOrNumber, isValidStringifiedJSON, parseJSONAsync } from '../../utils/utils';
import { styles } from './tnw-portfolio-grid.style';
import { TnwPortfolioGridItem } from './utils/types';
import { ExtendedSizeType } from '../../components';
import { validateProps } from './utils/tnw-portfolio-grid-validate-props';

/**
 * The `tnw-portfolio-grid` component creates a flexible, responsive grid for displaying portfolio or gallery items.
 */
@Component({
  tag: 'tnw-portfolio-grid',
  shadow: true,
})
export class TnwPortfolioGrid {
  private baseClass = `${GLOBAL_PREFIX}-portfolio-grid`;
  private componentStyles: CSSStyleSheet;

  @State() parsedItemsData: TnwPortfolioGridItem[] = [];

  @Element() el!: HTMLTnwPortfolioGridElement;

  /**
   * JSON string containing the grid items data. Each item includes required `src` and `alt` (string), and optional `link` (string), `rowStart` (number), `rowEnd` (number), `colStart` (number), and `colEnd` (number).
   */
  @Prop() itemsData: string;

  /**
   * Number of columns in the grid layout. Default is 3.
   */
  @Prop() columns?: number = 3;

  /**
   * Spacing between grid items (identifies value of CSS gap property).
   */
  @Prop() spacing?: ExtendedSizeType = 'sm';

  /**
   * Displays a gradient fade at the bottom of the grid. Default is `false`.
   */
  @Prop() showGradientFade?: boolean = false;

  /**
   * Watches for changes to the `menuData` prop and re-parses the JSON data.
   * 
   * This watcher is triggered whenever the `menuData` prop changes. It handles:
   * - Parsing new JSON data asynchronously
   * - Comparing with previous parsed data to avoid unnecessary updates
   * - Maintaining the previous state if parsing fails
   * - Throwing errors for invalid JSON
   * 
   * @param {string | undefined} newValue - The new value of the menuData prop
   * @returns {Promise<void>} A promise that resolves when parsing is complete
   * 
   * @throws {Error} If the JSON parsing fails, with message "Failed to parse menuData: [value]"
   */
  @Watch('itemsData')
  async handleItemsDataChange(newValue: string | undefined): Promise<void> {
    let oldParsedData = this.parsedItemsData;
    if (isNotEmptyString(newValue)) {
      this.validateItemsData(newValue);

      try {
        const parsedData = await parseJSONAsync(newValue);
        if (parsedData === oldParsedData) {
          return;
        }

        // Validate the parsed data before assigning
        this.parsedItemsData = parsedData;
      } catch (error) {
        this.parsedItemsData = oldParsedData;
        throw new Error(`Failed to parse itemsData: ${newValue}`);
      }
    } else {
      this.parsedItemsData = [];
    }
  }

  constructor() {
    this.initializeStyles();
  }

  connectedCallback() {
    this.applyStyles();
  }

  async componentWillLoad() {
    // Manually parse items data on initial load, only if itemsData is provided and is valid stringified JSON
    if (isNotEmptyString(this.itemsData) && isValidStringifiedJSON(this.itemsData)) {
      await this.handleItemsDataChange(this.itemsData);
    }

    validateProps([this.columns, this.itemsData, this.showGradientFade, this.spacing]);
  }

  /**
   * Validates that the provided itemsData string is valid JSON.
   * 
   * This method performs validation on the itemsData string to ensure it can be parsed as JSON.
   * It skips validation if the input is empty/null/undefined.
   * 
   * @throws {Error} If itemsData is provided but cannot be parsed as valid JSON, with message "Failed to parse itemsData: [value]"
   */
  private validateItemsData(itemsData: string): void {
    // Skip validation if itemsData is empty, undefined, or null
    if (!isNotEmptyString(itemsData)) {
      return;
    }

    if (!isValidStringifiedJSON(itemsData)) {
      throw new Error(`Failed to parse itemsData: ${itemsData}`);
    }
  }

  private initializeStyles() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    } else {
      const styleEl = document.createElement('style');
      styleEl.textContent = styles;
      this.el.shadowRoot?.appendChild(styleEl);
    }
  }

  private applyStyles() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        this.componentStyles
      ];
    } else {
      const componentStyleEl = document.createElement('style');

      if (this.componentStyles && this.componentStyles.cssRules) {
        componentStyleEl.textContent = Array.from(this.componentStyles.cssRules)
          .map(rule => rule.cssText)
          .join(' ');
      }

      this.el.shadowRoot.appendChild(componentStyleEl);
    }
  }

  private getColsStyles() {
    return {
      gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
    };
  }

  private getContentClasses() {
    const contentClass = `${this.baseClass}__content`;
    return [
      contentClass,
      `${contentClass}--spacing-${this.spacing}`,
      this.showGradientFade ? `${contentClass}--gradient-fade` : '',
    ].filter(Boolean).join(' ');
  }

  render() {
    return (
      <Host class={this.baseClass}>
        <div class={this.getContentClasses()} style={this.getColsStyles()}>
          {this.parsedItemsData.map((item) => [
            <div
              class={`${this.baseClass}__item`}
              style={{
                gridRow: isNotEmptyStringOrNumber(item.rowStart) ? `${item.rowStart} / ${item.rowEnd}` : '',
                gridColumn: isNotEmptyStringOrNumber(item.colStart) ? `${item.colStart} / ${item.colEnd}` : '',
              }}
            >
              {isNotEmptyString(item.link) ? (
                <tnw-anchor href={item.link} labelAria={item.alt}>
                  <tnw-image src={item.src} alt={item.alt} widthSize='full' heightSize='full' objectFit='cover'></tnw-image>
                </tnw-anchor>
              ) : (
                <tnw-image src={item.src} alt={item.alt} widthSize='full' heightSize='full' objectFit='cover'></tnw-image>
              )}
            </div>
          ])}
        </div>
      </Host>
    );
  }
}