import { Component, Host, Prop, Element, State, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { styles } from './tnw-multi-row-carousel.style';

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
  @Prop() rows: number = 3;

  /**
   * The speed of the row animation in milliseconds.
   */
  @Prop() animationSpeed: number = 5000;

  /**
   * The direction of row movement. Alternates automatically unless explicitly set.
   */
  @Prop() direction?: 'left' | 'right';

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback(): void {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [this.componentStyles];
    } else {
      const style = document.createElement('style');
      style.textContent = styles;
      this.el.shadowRoot?.appendChild(style);
    }
  }

  componentWillLoad() {
    const slotContent = Array.from(this.getSlotContent());
    this.rowContents = this.distributeContentIntoRows(slotContent, this.rows);
  }

  private getSlotContent(): HTMLElement[] {
    const slot = this.el.shadowRoot.querySelector('slot');
    if (slot) {
      const assignedElements = (slot as HTMLSlotElement).assignedElements({ flatten: true }) as HTMLElement[];
      if (assignedElements.length > 0) {
        console.log(`[${this.baseClass}] getSlotContent: Retrieved ${assignedElements.length} assigned slot items.`);
        return assignedElements;
      }
    }
  
    // Save the current children into fallbackContent
    const fallbackContent = Array.from(this.el.children) as HTMLElement[];
  
    // Remove these elements from the DOM
    fallbackContent.forEach(child => child.remove());
  
    console.log(`[${this.baseClass}] getSlotContent: Saved ${fallbackContent.length} fallback children and removed them from DOM.`);
    return fallbackContent;
  }  

  private distributeContentIntoRows(content: HTMLElement[], rows: number): HTMLElement[][] {
    const distributed: HTMLElement[][] = Array.from({ length: rows }, () => []);
    content.forEach((item, index) => {
      const rowIndex = index % rows;
      distributed[rowIndex].push(item);
    });
    return distributed;
  }

  private getRowStyles(rowIndex: number): { [key: string]: string } {
    const isEvenRow = rowIndex % 2 === 0;
    const direction = this.direction || (isEvenRow ? 'left' : 'right');
    const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right';

    return {
      animation: `${animationName} ${this.animationSpeed}ms linear infinite`,
    };
  }

  render() {
    return (
      <Host class={this.baseClass}>
        <div class={`${this.baseClass}__container`}>
          {this.rowContents.map((row, rowIndex) => (
            <div
              class={`${this.baseClass}__row`}
              style={this.getRowStyles(rowIndex)}
            >
              {row.map((item, itemIndex) => (
                <div
                  class={`${this.baseClass}__item`}
                  key={itemIndex}
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