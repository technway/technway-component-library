import { Component, Host, Prop, Element, h, Event, EventEmitter, Method } from '@stencil/core';
import { GLOBAL_PREFIX } from '../../utils/utils';
import { validateProps } from './utils/tnw-rows-carousel-validate-props';
import { styles } from './tnw-rows-carousel.style';
import { isValuePositive } from '../../utils/component-validations';
import { StyleHandler } from '../../utils/style-handler';

/**
 * The `tnw-rows-carousel` component provides an animated, infinitely scrolling carousel 
 * with multiple rows. Each row scrolls independently and can move in alternating directions.
 *
 * @slot row-[number] - A slot for each row's content. Replace `[number]` with the row index (starting from 1). Ensure the number of slots matches the `rows` prop.
 */
@Component({
  tag: 'tnw-rows-carousel',
  shadow: true,
})
export class TnwRowsCarousel {
  private baseClass = `${GLOBAL_PREFIX}-rows-carousel`;
  private stylesHandler: StyleHandler;

  @Element() el!: HTMLTnwRowsCarouselElement;

  /**
   * The number of rows in the carousel.
   */
  @Prop() rows: number = 2;

  /**
   * The speed of the row animation in milliseconds.
   */
  @Prop() animationSpeed: number = 22000;

  /**
   * Event emitted when a row's animation is paused.
   * The event detail contains the index of the paused row (zero-based).
   */
  @Event() tnwRowPause: EventEmitter<number>;

  /**
   * Event emitted when a row's animation is resumed.
   * The event detail contains the index of the resumed row (zero-based).
   */
  @Event() tnwRowResume: EventEmitter<number>;

  /**
   * Pauses the animation of all carousel rows.
   * Emits a `tnwRowPause` event for each row that is paused.
   */
  @Method()
  async pauseAll() {
    const rows = this.el.shadowRoot.querySelectorAll(`.${this.baseClass}__row`);
    rows.forEach((row, index) => {
      (row as HTMLElement).style.animationPlayState = 'paused';
      this.tnwRowPause.emit(index);
    });
  }

  /**
   * Resumes the animation of all carousel rows.
   * Emits a `tnwRowResume` event for each row that is resumed.
   */
  @Method()
  async resumeAll() {
    const rows = this.el.shadowRoot.querySelectorAll(`.${this.baseClass}__row`);
    rows.forEach((row, index) => {
      (row as HTMLElement).style.animationPlayState = 'running';
      this.tnwRowResume.emit(index);
    });
  }

  /**
   * Toggles the animation state of a specific row between paused and running.
   * Emits either a `tnwRowPause` or `tnwRowResume` event depending on the new state.
   * 
   * @param rowIndex - The zero-based index of the row to toggle
   */
  @Method()
  async toggleRow(rowIndex: number) {
    const rows = this.el.shadowRoot.querySelectorAll(`.${this.baseClass}__row`);
    if (rowIndex >= 0 && rowIndex < rows.length) {
      const row = rows[rowIndex] as HTMLElement;
      const isPaused = row.style.animationPlayState === 'paused';
      row.style.animationPlayState = isPaused ? 'running' : 'paused';
      if (isPaused) {
        this.tnwRowResume.emit(rowIndex);
      } else {
        this.tnwRowPause.emit(rowIndex);
      }
    }
  }

  constructor() {
    this.initializeStyles();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  connectedCallback() {
    this.stylesHandler.applyStyles();
  }

  componentWillLoad() {
    try {
      validateProps([this.animationSpeed, this.rows]);

      if (!isValuePositive(this.rows)) {
        throw new Error('rows must be a positive number');
      }

      if (!isValuePositive(this.animationSpeed)) {
        throw new Error('animationSpeed must be a positive number');
      }
    } catch (error) {
      throw error;
    }
  }

  private initializeStyles() {
    this.stylesHandler = new StyleHandler(
      this.el,
      styles
    );
  }

  private handleRowHover(rowElement: HTMLElement, isHover: boolean, rowIndex?: number): void {
    rowElement.style.animationPlayState = isHover ? 'paused' : 'running';
    if (isHover) {
      this.tnwRowPause.emit(rowIndex);
    } else {
      this.tnwRowResume.emit(rowIndex);
    }
  }

  private handleMouseEnter(event: MouseEvent): void {
    const rowElement = event.currentTarget as HTMLElement;
    const rowIndex = Array.from(rowElement.parentElement.children).indexOf(rowElement);
    this.handleRowHover(rowElement, true, rowIndex);
  }

  private handleMouseLeave(event: MouseEvent): void {
    const rowElement = event.currentTarget as HTMLElement;
    const rowIndex = Array.from(rowElement.parentElement.children).indexOf(rowElement);
    this.handleRowHover(rowElement, false, rowIndex);
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