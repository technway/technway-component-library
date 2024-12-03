import { Component, Host, Prop, Element, State, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { styles } from './tnw-multi-row-carousel.style';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';

/**
 * The `tnw-multi-row-carousel` provides an animated, infinitely scrolling carousel 
 * with multiple rows. Each row scrolls independently and can move in alternating directions.
 *
 * @slot - Default slot to provide the content for the carousel. Each row will auto-distribute the slot's content.
 */
@Component({
  tag: 'tnw-multi-row-carousel',
  shadow: true,
})
export class TnwMultiRowCarousel {
  private baseClass = `${GLOBAL_PREFIX}-multi-row-carousel`;
  private componentStyles: CSSStyleSheet;

  @State() rowContents: HTMLElement[][] = [];

  @Element() el!: HTMLTnwMultiRowCarouselElement;

  /**
   * The number of rows in the carousel.
   */
  @Prop() rows: number = 2;

  /**
   * The speed of the row animation in milliseconds.
   */
  @Prop() animationSpeed: number = 22000;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  connectedCallback(): void {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        extendedAppearanceStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles
      ];
    } else {
      const style = document.createElement('style');
      style.textContent = styles;
      this.el.shadowRoot?.appendChild(style);
    }
  }

  componentDidLoad() {
    const slotContent = Array.from(this.getSlotContent());
    this.rowContents = this.distributeContentIntoRows(slotContent, this.rows);
  }

  private getSlotContent(): HTMLElement[] {
    const fallbackContent = Array.from(this.el.children) as HTMLElement[];
    fallbackContent.forEach(child => child.remove());

    return fallbackContent;
  }

  private distributeContentIntoRows(content: HTMLElement[], rows: number): HTMLElement[][] {
    const distributed: HTMLElement[][] = Array.from({ length: rows }, () => []);
    content.forEach((item, index) => {
      const rowIndex = index % rows;
      distributed[rowIndex].push(item.cloneNode(true) as HTMLElement);
    });
    return distributed;
  }

  private getRowStyles(rowIndex: number): { [key: string]: string } {
    const isEvenRow = rowIndex % 2 === 0;
    const animationDirection = isEvenRow ? 'alternate' : 'alternate-reverse';

    return {
      animationName: 'scroll-loop',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: animationDirection,
      animationDuration: `${this.animationSpeed}ms`,
      animationPlayState: 'running',
      transition: 'animation-play-state 0.3s ease',
    };
  }

  private handleRowHover(rowElement: HTMLElement, isHover: boolean): void {
    rowElement.style.animationPlayState = isHover ? 'paused' : 'running';
  }

  private handleMouseEnter(event: MouseEvent): void {
    const rowElement = event.currentTarget as HTMLElement;
    this.handleRowHover(rowElement, true);
  }

  private handleMouseLeave(event: MouseEvent): void {
    const rowElement = event.currentTarget as HTMLElement;
    this.handleRowHover(rowElement, false);
  }

  render() {
    return (
      <Host class={this.baseClass}>
        <div class={`${this.baseClass}__container`}>
          {this.rowContents.map((row, rowIndex) => (
            <div
              class={`${this.baseClass}__row`}
              style={this.getRowStyles(rowIndex)}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              {row.map((item, itemIndex) => (
                <div
                  class={`${this.baseClass}__item`}
                  key={`${rowIndex}-${itemIndex}`}
                  innerHTML={item.outerHTML}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
