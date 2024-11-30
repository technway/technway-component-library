import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString, isNotEmptyStringOrNumber, parseJSONAsync } from '../../utils/utils';
import { styles } from './tnw-portfolio-grid.style';
import { TnwPortfolioGridItem } from './utils/types';
import { ExtendedSizeType } from '../../components';
import { validateProps } from './utils/tnw-portfolio-grid-validate-props';

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
  @Prop() itemsData!: string;

  /**
   * Number of columns in the grid layout. Default is 3.
   */
  @Prop() columns?: number = 3;

  /**
   * Spacing between grid items (identifies value of CSS gap property).
   */
  @Prop() spacing?: ExtendedSizeType = 'sm';

  constructor() {
    this.initializeStyles();
  }

  connectedCallback() {
    this.applyStyles();
  }

  async componentWillLoad() {
    this.parsedItemsData = await parseJSONAsync(this.itemsData);

    const propsValues = [this.columns, this.itemsData, this.spacing];
    validateProps(propsValues);
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

  render() {
    return (
      <Host>
        <div class={this.baseClass} style={this.getColsStyles()}>
          {this.parsedItemsData.map((item) => (
            <div
              class={`${this.baseClass}__item`}
              style={{
                gridRow: isNotEmptyStringOrNumber(item.rowStart) ? `${item.rowStart} / ${item.rowEnd}` : '',
                gridColumn: isNotEmptyStringOrNumber(item.colStart) ? `${item.colStart} / ${item.colEnd}` : '',
              }}
            >
              {isNotEmptyString(item.link) ? (
                <tnw-anchor href={item.link} labelAria={item.alt}>
                  <tnw-image src={item.src} alt={item.alt}></tnw-image>
                </tnw-anchor>
              ) : (
                <tnw-image src={item.src} alt={item.alt}></tnw-image>
              )}
            </div>
          ))}
        </div>
      </Host>
    );
  }
}