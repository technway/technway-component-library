import { Component, Host, Prop, Element, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { validateProps } from './utils/tnw-multi-row-carousel-validate-props';
import { styles } from './tnw-multi-row-carousel.style';

/**
 * The `tnw-multi-row-carousel` component provides an animated, infinitely scrolling carousel 
 * with multiple rows. Each row scrolls independently and can move in alternating directions.
 *
 * @slot row-[number] - A slot for each row's content. Replace `[number]` with the row index (starting from 1). Ensure the number of slots matches the `rows` prop.
 */
@Component({
  tag: 'tnw-multi-row-carousel',
  shadow: true,
})
export class TnwMultiRowCarousel {
  private baseClass = `${GLOBAL_PREFIX}-multi-row-carousel`;
  private componentStyles: CSSStyleSheet;

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
        this.componentStyles
      ];
    } else {
      const style = document.createElement('style');
      style.textContent = styles;
      this.el.shadowRoot?.appendChild(style);
    }
  }

  componentWillLoad() {
    const propsValues = [this.animationSpeed, this.rows];
    validateProps(propsValues);
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

  render() {
    return (
      <Host class={this.baseClass}>
        <div class={`${this.baseClass}__container`}>
          {Array.from({ length: this.rows }, (_, index) => (
            <div
              class={`${this.baseClass}__row`}
              style={this.getRowStyles(index)}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <slot name={`row-${index + 1}`} />
            </div>
          ))}
        </div>
      </Host>
    );
  }
}