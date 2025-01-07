/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, c as colorStyleSheet, b as borderRadiusStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$2 } from './p-3d848afd.js';

const baseClass = `${GLOBAL_PREFIX}-items-carousel`;
const slideClass = `${baseClass}__slide`;
const styles = `
* {
    box-sizing: border-box;
}

:host {
    position: relative;
    display: block;
    width: 100%;
}
:host(.${baseClass}--fit-container) {
    overflow: hidden;
}
:host(.${baseClass}:hover) .${baseClass}__control {
    visibility: visible;  
}
:host(.${baseClass}--fit-container) .${baseClass}__control--prev {
    left: var(--tnw-spacing-md);
}

:host(.${baseClass}--fit-container) .${baseClass}__control--prev-rtl {
    right: var(--tnw-spacing-md);
}

:host(.${baseClass}--fit-container) .${baseClass}__control--next {
    right: var(--tnw-spacing-md);
}

:host(.${baseClass}--fit-container) .${baseClass}__control--next-rtl {
    left: var(--tnw-spacing-md);
}

:host(.${baseClass}--is-beginning)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 90px;
    height: 100%;
    display: block;
    background-image: var(--tnw-gradient-x-bg-to-transparent);
    transform: rotate(180deg);
    z-index: 1;
    transition: 0.3s all ease-in-out;
}
:host(.${baseClass}--is-beginning-rtl)::after {
    right: unset;
    left: 0;
    transform: rotate(0);
}
:host(.${baseClass}--is-end)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 90px;
    height: 100%;
    display: block;
    background-image: var(--tnw-gradient-x-bg-to-transparent);
    z-index: 1;
    transition: 0.3s all ease-in-out;
}
:host(.${baseClass}--is-end-rtl)::before {
    left: unset;
    right: 0;
    transform: rotate(180deg);
}

.${baseClass}__slides {
    transition: all 0.52s ease-in-out;
    display: flex;
    gap: 30px;
    flex-wrap: nowrap;
}

.${slideClass} {
    flex-grow: 0;
    flex-shrink: 0;
}
.${slideClass}--sm {
    flex-basis: 300px;
}
.${slideClass}--md {
    flex-basis: 450px;
}
.${slideClass}--lg {
    flex-basis: 600px;
}

.${baseClass}__control--sm {
    --${baseClass}-control-size: 45px;
}
.${baseClass}__control--md {
    --${baseClass}-control-size: 65px;
}
.${baseClass}__control--lg {
    --${baseClass}-control-size: 80px;
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--md {
        --${baseClass}-control-size: 45px;
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--lg {
        --${baseClass}-control-size: 50px;
    }
}
.${baseClass}__control {
    position: absolute;
    opacity: 0.7;
    visibility: hidden;
    top: 50%;
    transform: translateY(-50%);
    width: var(--${baseClass}-control-size);
    height: var(--${baseClass}-control-size);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--tnw-background-color);
    transition: opacity 0.3s ease-in-out;
    border: var(--tnw-border-sm) solid rgba(var(--tnw-border-color-inverse-rgb), 0.25);
    z-index: 2;
    cursor: pointer;
}
.${baseClass}__control:hover {
    opacity: 1;
}
.${baseClass}__control--prev {
    left: calc(var(--${baseClass}-control-size) / -2);
    box-shadow: -9px 2px 9px -4px var(--tnw-shadow);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--prev {
        left: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--prev {
        left: 5px;
    }
}
.${baseClass}__control--prev-rtl {
    left: unset !important;
    right: calc(var(--${baseClass}-control-size) / -2);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--prev-rtl {
        left: unset !important;
        right: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--prev-rtl {
        left: unset !important;
        right: 5px;
    }
}
.${baseClass}__control--next {
    right: calc(var(--${baseClass}-control-size) / -2);
    box-shadow: 9px 2px 9px -4px var(--tnw-shadow);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--next {
        right: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--next {
        right: 5px;
    }
}
.${baseClass}__control--next-rtl {
  right: unset !important;
  left: calc(var(--${baseClass}-control-size) / -2);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--next-rtl {
        right: unset !important;
        left: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--next-rtl {
        right: unset !important;
        left: 5px;
    }
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-items-carousel.tsx` file.
 *
validateProps([this.controlsSize, this.enableControlsSlots, this.fitWithContainer, this.hideControls, this.showEdgesShadows, this.slidesCount, this.slidesSize]);
 *
 * GENERATED USING `npm run g:components-validations tnw-items-carousel`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "controlsSize",
            "type": [
                "lg",
                "md",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "enableControlsSlots",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "fitWithContainer",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "hideControls",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "showEdgesShadows",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "slidesCount",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "slidesSize",
            "type": [
                "lg",
                "md",
                "none",
                "sm"
            ],
            "isRequired": false
        }
    ];
    // Iterate over all the properties of the component
    props.forEach((prop, i) => {
        const value = propsValues[i];
        const expectedTypes = prop.type;
        const isRequired = prop.isRequired;
        // Check if a required prop has no value
        if (isRequired && (!isNotEmptyString(value) || value === undefined || value === null)) {
            throw new Error(`Required prop "${prop.name}" must have value`);
        }
        // Check if the value is valid for the expected types
        const isValid = expectedTypes.some(expectedType => {
            // Handle primitive types such as string, number, boolean
            if (expectedType === "string" || expectedType === "number" || expectedType === "boolean") {
                return typeof value === expectedType;
            }
            // For enum-like values (like 'center', 'left', etc.), check if value matches
            return expectedType === value;
        });
        if (!isValid && value !== undefined) {
            throw new Error(`Invalid prop value for "${prop.name}": expected one of ${expectedTypes.join(", ")}, but got "${value}".`);
        }
    });
}

const TnwItemsCarousel$1 = /*@__PURE__*/ proxyCustomElement(class TnwItemsCarousel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-items-carousel`;
        this.isBeginning = true;
        this.isEnd = false;
        /**
         * Determines whether navigation controls are shown.
         */
        this.hideControls = false;
        /**
         * If `true`, the `control-prev-icon` and `control-next-icon` slots will be shown.
         */
        this.enableControlsSlots = false;
        /**
         * If `true`, shadow effects will be shown on the edges of the carousel.
         */
        this.showEdgesShadows = false;
        /**
         * Sets the size of the control buttons.
         */
        this.controlsSize = 'md';
        /**
         * If `true`, the carousel width will be cut to match the container width.
         */
        this.fitWithContainer = false;
        /**
         * The number of slides in the carousel.
         */
        this.slidesCount = 0;
        /**
         * Sets the size of the slides.
         */
        this.slidesSize = 'sm';
        this.touchStartX = 0;
        this.touchEndX = 0;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
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
    isRtl() {
        const bodyElem = document.documentElement;
        return bodyElem.classList.contains('rtl');
    }
    handleResize() {
        const slides = this.el.shadowRoot.querySelector('[data-carousel-slides]');
        slides.style.transform = `translateX(0px)`;
        this.updateShadowClasses();
    }
    getSlideWidth() {
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
    getCurrentTranslateX() {
        const slides = this.el.shadowRoot.querySelector('[data-carousel-slides]');
        if (slides === null) {
            return 0;
        }
        const currentTransform = slides.style.transform;
        const translateXMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
        return translateXMatch !== null ? parseFloat(translateXMatch[1]) : 0;
    }
    moveSlide(direction) {
        const carousel = this.el.shadowRoot;
        const slides = carousel.querySelector('[data-carousel-slides]');
        const slideWidth = this.getSlideWidth();
        const currentTranslateX = this.getCurrentTranslateX();
        const isRTL = this.isRtl();
        let maxTranslateX = this.el.clientWidth - slides.scrollWidth;
        if (isRTL) {
            maxTranslateX = slides.scrollWidth - this.el.clientWidth;
        }
        let clampedTranslateX;
        if (isRTL) {
            clampedTranslateX = direction === 'next'
                ? Math.min(currentTranslateX + slideWidth, maxTranslateX)
                : Math.max(currentTranslateX - slideWidth, 0);
        }
        else {
            clampedTranslateX = direction === 'next'
                ? Math.max(currentTranslateX - slideWidth, maxTranslateX)
                : Math.min(currentTranslateX + slideWidth, 0);
        }
        slides.style.transform = `translateX(${clampedTranslateX}px)`;
        this.updateShadowClasses();
    }
    nextSlide() {
        this.moveSlide('next');
    }
    prevSlide() {
        this.moveSlide('prev');
    }
    handleTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
    }
    handleTouchMove(event) {
        this.touchEndX = event.touches[0].clientX;
    }
    handleTouchEnd() {
        const touchDiff = this.touchStartX - this.touchEndX;
        if (touchDiff > 50) {
            this.nextSlide();
        }
        else if (touchDiff < -50) {
            this.prevSlide();
        }
    }
    updateShadowClasses() {
        const slides = this.el.shadowRoot.querySelector('[data-carousel-slides]');
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
        }
        else {
            this.isBeginning = currentTranslateX === 0;
            this.isEnd = currentTranslateX === maxTranslateX;
        }
        this.getShadowsClasses();
    }
    getShadowsClasses() {
        const { baseClass, showEdgesShadows, isBeginning, isEnd } = this;
        if (showEdgesShadows) {
            if (!this.isRtl()) {
                return [
                    !isBeginning ? `${baseClass}--is-end` : '',
                    !isEnd ? `${baseClass}--is-beginning` : ''
                ].filter(Boolean).join(' ').trim();
            }
            else {
                return [
                    !isBeginning ? `${baseClass}--is-end ${baseClass}--is-end-rtl` : '',
                    !isEnd ? `${baseClass}--is-beginning ${baseClass}--is-beginning-rtl` : ''
                ].filter(Boolean).join(' ').trim();
            }
        }
        return '';
    }
    getCarouselClasses() {
        const { baseClass, fitWithContainer } = this;
        return [
            baseClass,
            fitWithContainer ? `${baseClass}--fit-container` : '',
            this.getShadowsClasses(),
        ].filter(Boolean).join(' ').trim();
    }
    getSlidesClasses() {
        const slidesClass = `${this.baseClass}__slides`;
        return [
            slidesClass,
        ].filter(Boolean).join(' ').trim();
    }
    getSlideClasses() {
        const slideClass = `${this.baseClass}__slide`;
        return [
            slideClass,
            `${slideClass}--${this.slidesSize}`,
        ].filter(Boolean).join(' ').trim();
    }
    renderControllers() {
        const controllerClasses = [
            `${this.baseClass}__control`,
            `${this.baseClass}__control--${this.controlsSize}`,
            `rounded-default`
        ].filter(Boolean).join(' ').trim();
        return (h("div", { class: `${this.baseClass}__controls`, part: 'controls-container' }, !this.isBeginning && (h("button", { class: `${controllerClasses} ${this.baseClass}__control--prev ${this.isRtl() ? `${this.baseClass}__control--prev-rtl` : ''}`, onClick: this.prevSlide, part: 'control' }, !this.enableControlsSlots ? (h("tnw-icon", { name: `${!this.isRtl() ? `${GLOBAL_PREFIX}-arrow-thin-left` : `${GLOBAL_PREFIX}-arrow-thin-right`}`, size: this.controlsSize, appearance: "none" })) : (h("slot", { name: "control-prev-icon" })))), !this.isEnd && (h("button", { class: `${controllerClasses} ${this.baseClass}__control--next ${this.isRtl() ? `${this.baseClass}__control--next-rtl` : ''}`, onClick: this.nextSlide, part: 'control' }, !this.enableControlsSlots ? (h("tnw-icon", { name: `${!this.isRtl() ? `${GLOBAL_PREFIX}-arrow-thin-right` : `${GLOBAL_PREFIX}-arrow-thin-left`}`, size: this.controlsSize, appearance: "none" })) : (h("slot", { name: "control-next-icon" }))))));
    }
    renderSlots() {
        const slots = Array.from({ length: this.slidesCount }, (_, i) => h("div", { class: this.getSlideClasses(), part: 'carousel-slide', "data-carousel-slide": true }, h("slot", { name: `slide-${i + 1}` })));
        return slots;
    }
    render() {
        return (h(Host, { key: 'b23104078550182ee65e6581bbdec434e3411f61', class: this.getCarouselClasses() }, h("div", { key: 'b062a58f422ad80789a6c0d08d3dfea36a3845e7', class: this.getSlidesClasses(), "data-carousel-slides": true }, this.renderSlots()), !this.hideControls && this.renderControllers()));
    }
    get el() { return this; }
}, [1, "tnw-items-carousel", {
        "hideControls": [4, "hide-controls"],
        "enableControlsSlots": [4, "enable-controls-slots"],
        "showEdgesShadows": [4, "show-edges-shadows"],
        "controlsSize": [1, "controls-size"],
        "fitWithContainer": [4, "fit-with-container"],
        "slidesCount": [2, "slides-count"],
        "slidesSize": [1, "slides-size"],
        "isBeginning": [32],
        "isEnd": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-items-carousel", "tnw-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-items-carousel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwItemsCarousel$1);
            }
            break;
        case "tnw-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const TnwItemsCarousel = TnwItemsCarousel$1;
const defineCustomElement = defineCustomElement$1;

export { TnwItemsCarousel, defineCustomElement };

//# sourceMappingURL=tnw-items-carousel.js.map