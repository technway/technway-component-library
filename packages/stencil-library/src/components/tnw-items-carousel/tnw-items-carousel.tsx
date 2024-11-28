import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { SizeType } from '../../utils/component-props-types';
import { styles } from './tnw-items-carousel.styles';
import { borderRadiusStyleSheet, colorStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-items-carousel-validate-props';


/**
 * The `tnw-items-carousel` component provides a flexible and customizable carousel for displaying multiple slides in a row.
 * The carousel supports custom controls, touch gestures, edge shadows, and can be resized dynamically.
 * 
 * @slot slide-<n> - Slot for content in the n-th slide.
 * 
 * @slot control-prev-icon - Custom icon for the previous slide control. Can be used when `enableControlsSlots` is set to `true`.
 * @slot control-next-icon - Custom icon for the next slide control. Can be used when `enableControlsSlots` is set to `true`.
 * 
 * @part carousel-slide - The wrapper element for each slide in the carousel.
 * @part controls-container - The container `div` element that wraps the carousel controls.
 * @part control - The `button` element for the control (next/previous buttons).
 */
@Component({
  tag: 'tnw-items-carousel',
  shadow: true,
})
export class TnwItemsCarousel {
  private baseClass = `${GLOBAL_PREFIX}-items-carousel`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwItemsCarouselElement;

  @State() isBeginning: boolean = true;
  @State() isEnd: boolean = false;

  /**
   * Determines whether navigation controls are shown. 
   */
  @Prop() hideControls?: boolean = false;

  /**
   * If `true`, the `control-prev-icon` and `control-next-icon` slots will be shown.
   */
  @Prop() enableControlsSlots?: boolean = false;

  /**
   * If `true`, shadow effects will be shown on the edges of the carousel.
   */
  @Prop() showEdgesShadows?: boolean = false;

  /**
   * Sets the size of the control buttons.
   */
  @Prop() controlsSize?: SizeType = 'md';

  /**
   * If `true`, the carousel width will be cut to match the container width.
   */
  @Prop() fitWithContainer?: boolean = false;

  /**
   * The number of slides in the carousel.
   */
  @Prop() slidesCount: number = 0;

  /**
   * Sets the size of the slides.
   */
  @Prop() slidesSize?: 'sm' | 'md' | 'lg' | 'none' = 'sm';

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        extendedAppearanceStyleSheet,
        colorStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.controlsSize, this.enableControlsSlots, this.fitWithContainer, this.hideControls, this.showEdgesShadows, this.slidesCount, this.slidesSize];
    validateProps(propsValues);
  }

  componentDidLoad() {
    // Bind touch event handlers
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleResize = this.handleResize.bind(this);

    // Add touch event listeners
    this.el.shadowRoot.addEventListener('touchstart', this.handleTouchStart, false);
    this.el.shadowRoot.addEventListener('touchmove', this.handleTouchMove, false);
    this.el.shadowRoot.addEventListener('touchend', this.handleTouchEnd, false);

    // Add resize event listener
    window.addEventListener('resize', this.handleResize);

    // Defer the shadow class update until after the component is rendered
    setTimeout(() => {
      this.updateShadowClasses();
    }, 0);
  }

  disconnectedCallback() {
    // Remove event listeners to avoid memory leaks
    this.el.shadowRoot.removeEventListener('touchstart', this.handleTouchStart);
    this.el.shadowRoot.removeEventListener('touchmove', this.handleTouchMove);
    this.el.shadowRoot.removeEventListener('touchend', this.handleTouchEnd);
    window.removeEventListener('resize', this.handleResize);
  }

  private isRtl(): boolean {
    const bodyElem = document.documentElement;
    return bodyElem.classList.contains('rtl');
  }

  private handleResize(): void {
    const slides = this.el.shadowRoot.querySelector('[data-carousel-slides]') as HTMLElement;
    slides.style.transform = `translateX(0px)`;
    this.updateShadowClasses();
  }

  private getSlideWidth(): number {
    const slide = this.el.shadowRoot.querySelector('[data-carousel-slide]');

    // Ensure the slide element exists
    if (slide === null) {
      return 0;
    }

    // Get the computed styles of the slide element's parent or container (not the host)
    const slidesContainer = this.el.shadowRoot.querySelector('[data-carousel-slides]');
    if (slidesContainer === null) {
      return 0;
    }

    const styles = window.getComputedStyle(slidesContainer);
    const slidesSpacing = styles.getPropertyValue(`--${GLOBAL_PREFIX}-carousel-slides-gap`);

    // Handle missing or invalid slides spacing
    const slidesSpacingVal = parseFloat(slidesSpacing) || 0;

    // Get the slide width and add the spacing value
    const width = slide.getBoundingClientRect().width;
    const totalWidth = width + slidesSpacingVal;

    return totalWidth;
  }


  private getCurrentTranslateX(): number {
    const slides = this.el.shadowRoot.querySelector('[data-carousel-slides]') as HTMLElement;
    if (slides === null) {
      return 0;
    }

    const currentTransform = slides.style.transform;
    const translateXMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
    return translateXMatch !== null ? parseFloat(translateXMatch[1]) : 0;
  }

  private moveSlide(direction: 'next' | 'prev'): void {
    const carousel = this.el.shadowRoot;
    const slides = carousel.querySelector('[data-carousel-slides]') as HTMLElement;
    const slideWidth = this.getSlideWidth();
    const currentTranslateX = this.getCurrentTranslateX();

    const isRTL = this.isRtl();
    let maxTranslateX = this.el.clientWidth - slides.scrollWidth;

    if (isRTL) {
      maxTranslateX = slides.scrollWidth - this.el.clientWidth;
    }

    let clampedTranslateX: number;

    if (isRTL) {
      clampedTranslateX = direction === 'next'
        ? Math.min(currentTranslateX + slideWidth, maxTranslateX)
        : Math.max(currentTranslateX - slideWidth, 0);
    } else {
      clampedTranslateX = direction === 'next'
        ? Math.max(currentTranslateX - slideWidth, maxTranslateX)
        : Math.min(currentTranslateX + slideWidth, 0);
    }

    slides.style.transform = `translateX(${clampedTranslateX}px)`;

    this.updateShadowClasses();
  }

  private nextSlide(): void {
    this.moveSlide('next');
  }

  private prevSlide(): void {
    this.moveSlide('prev');
  }

  private touchStartX: number = 0;
  private touchEndX: number = 0;

  private handleTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  private handleTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX;
  }

  private handleTouchEnd(): void {
    const touchDiff = this.touchStartX - this.touchEndX;

    if (touchDiff > 50) {
      this.nextSlide();
    } else if (touchDiff < -50) {
      this.prevSlide();
    }
  }

  private updateShadowClasses(): void {
    const slides = this.el.shadowRoot.querySelector('[data-carousel-slides]') as HTMLElement;

    // If slides element doesn't exist, exit early
    if (slides === null) {
      return;
    }

    const currentTranslateX = this.getCurrentTranslateX();
    const maxTranslateX = this.el.clientWidth - slides.scrollWidth;
    const isRTL = this.isRtl();
    const rtlMaxTranslateX = slides.scrollWidth - this.el.clientWidth;

    if (isRTL) {
      this.isBeginning = currentTranslateX === 0;
      this.isEnd = currentTranslateX === rtlMaxTranslateX;
    } else {
      this.isBeginning = currentTranslateX === 0;
      this.isEnd = currentTranslateX === maxTranslateX;
    }
    this.getShadowsClasses();
  }

  private getShadowsClasses(): string {
    const { baseClass, showEdgesShadows, isBeginning, isEnd } = this;

    if (showEdgesShadows) {
      if (!this.isRtl()) {
        return [
          !isBeginning ? `${baseClass}--is-end` : '',
          !isEnd ? `${baseClass}--is-beginning` : ''
        ].filter(Boolean).join(' ').trim();
      } else {
        return [
          !isBeginning ? `${baseClass}--is-end ${baseClass}--is-end-rtl` : '',
          !isEnd ? `${baseClass}--is-beginning ${baseClass}--is-beginning-rtl` : ''
        ].filter(Boolean).join(' ').trim();
      }
    }

    return '';
  }

  private getCarouselClasses(): string {
    const { baseClass, fitWithContainer } = this;

    return [
      baseClass,
      fitWithContainer ? `${baseClass}--fit-container` : '',
      this.getShadowsClasses(),
    ].filter(Boolean).join(' ').trim();
  }

  private getSlidesClasses(): string {
    const slidesClass = `${this.baseClass}__slides`;

    return [
      slidesClass,
    ].filter(Boolean).join(' ').trim();
  }

  private getSlideClasses(): string {
    const slideClass = `${this.baseClass}__slide`;

    return [
      slideClass,
      `${slideClass}--${this.slidesSize}`,
    ].filter(Boolean).join(' ').trim();
  }

  private renderControllers() {
    const controllerClasses = [
      `${this.baseClass}__control`,
      `${this.baseClass}__control--${this.controlsSize}`,
      `rounded-default`
    ].filter(Boolean).join(' ').trim();

    return (
      <div class={`${this.baseClass}__controls`} part='controls-container'>
        {!this.isBeginning && (
          <button class={`${controllerClasses} ${this.baseClass}__control--prev ${this.isRtl() ? `${this.baseClass}__control--prev-rtl` : ''}`} onClick={this.prevSlide} part='control'>
            {!this.enableControlsSlots ? (
              <tnw-icon name={`${!this.isRtl() ? `${GLOBAL_PREFIX}-arrow-thin-left` : `${GLOBAL_PREFIX}-arrow-thin-right`}`} size={this.controlsSize} appearance="none" />
            ) : (
              <slot name="control-prev-icon"></slot>
            )}
          </button>
        )}
        {!this.isEnd && (
          <button class={`${controllerClasses} ${this.baseClass}__control--next ${this.isRtl() ? `${this.baseClass}__control--next-rtl` : ''}`} onClick={this.nextSlide} part='control'>
            {!this.enableControlsSlots ? (
              <tnw-icon name={`${!this.isRtl() ? `${GLOBAL_PREFIX}-arrow-thin-right` : `${GLOBAL_PREFIX}-arrow-thin-left`}`} size={this.controlsSize} appearance="none" />
            ) : (
              <slot name="control-next-icon"></slot>
            )}
          </button>
        )}
      </div>
    )
  }

  private renderSlots() {
    const slots = Array.from({ length: this.slidesCount }, (_, i) =>
      <div
        class={this.getSlideClasses()}
        part='carousel-slide'
        data-carousel-slide
      >
        <slot name={`slide-${i + 1}`} />
      </div>
    );

    return slots;
  }

  render() {
    return (
      <Host class={this.getCarouselClasses()}>
        <div class={this.getSlidesClasses()} data-carousel-slides>
          {this.renderSlots()}
        </div>

        {!this.hideControls && this.renderControllers()}
      </Host>
    );
  }
}
