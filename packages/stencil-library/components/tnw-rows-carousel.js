/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-4617b122.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported } from './p-80d80a0e.js';
import { i as isValuePositive } from './p-13eae0fe.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-rows-carousel.tsx` file.
 *
validateProps([this.animationSpeed, this.rows]);
 *
 * GENERATED USING `npm run g:components-validations tnw-rows-carousel`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "animationSpeed",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "rows",
            "type": [
                "number"
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

const styles = `
:host {
  display: block;
  width: 100%;
  overflow: hidden;
}

.tnw-rows-carousel__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;
}

.tnw-rows-carousel__container::before,
.tnw-rows-carousel__container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 350px;
  pointer-events: none;
}

.tnw-rows-carousel__container::before {
  left: 0;
  background: linear-gradient(
    to right,
    #fff 0%,
    rgba(255, 255, 255, 0.75) 25%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.25) 95%,
    rgba(255, 255, 255, 0) 100%
  );
}
.tnw-rows-carousel__container::after {
  right: 0;
  background: linear-gradient(
    to left,
    #fff 0%,
    rgba(255, 255, 255, 0.75) 25%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.25) 95%,
    rgba(255, 255, 255, 0) 100%
  );
}

.tnw-rows-carousel__row {
  display: flex;
  animation-timing-function: linear;
  flex-shrink: 0;
  width: fit-content;
  min-width: max-content;
  max-width: max-content;
}

::slotted(*) {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin-right: 20px;
}

@keyframes scroll-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;

const TnwRowsCarousel$1 = /*@__PURE__*/ proxyCustomElement(class TnwRowsCarousel extends H {
    /**
     * Pauses the animation of all carousel rows.
     * Emits a `tnwRowPause` event for each row that is paused.
     */
    async pauseAll() {
        const rows = this.el.shadowRoot.querySelectorAll(`.${this.baseClass}__row`);
        rows.forEach((row, index) => {
            row.style.animationPlayState = 'paused';
            this.tnwRowPause.emit(index);
        });
    }
    /**
     * Resumes the animation of all carousel rows.
     * Emits a `tnwRowResume` event for each row that is resumed.
     */
    async resumeAll() {
        const rows = this.el.shadowRoot.querySelectorAll(`.${this.baseClass}__row`);
        rows.forEach((row, index) => {
            row.style.animationPlayState = 'running';
            this.tnwRowResume.emit(index);
        });
    }
    /**
     * Toggles the animation state of a specific row between paused and running.
     * Emits either a `tnwRowPause` or `tnwRowResume` event depending on the new state.
     *
     * @param rowIndex - The zero-based index of the row to toggle
     */
    async toggleRow(rowIndex) {
        const rows = this.el.shadowRoot.querySelectorAll(`.${this.baseClass}__row`);
        if (rowIndex >= 0 && rowIndex < rows.length) {
            const row = rows[rowIndex];
            const isPaused = row.style.animationPlayState === 'paused';
            row.style.animationPlayState = isPaused ? 'running' : 'paused';
            if (isPaused) {
                this.tnwRowResume.emit(rowIndex);
            }
            else {
                this.tnwRowPause.emit(rowIndex);
            }
        }
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tnwRowPause = createEvent(this, "tnwRowPause", 7);
        this.tnwRowResume = createEvent(this, "tnwRowResume", 7);
        this.baseClass = `${GLOBAL_PREFIX}-rows-carousel`;
        /**
         * The number of rows in the carousel.
         */
        this.rows = 2;
        /**
         * The speed of the row animation in milliseconds.
         */
        this.animationSpeed = 22000;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    connectedCallback() {
        var _a;
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                this.componentStyles
            ];
        }
        else {
            const style = document.createElement('style');
            style.textContent = styles;
            (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(style);
        }
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
        }
        catch (error) {
            throw error;
        }
    }
    handleRowHover(rowElement, isHover, rowIndex) {
        rowElement.style.animationPlayState = isHover ? 'paused' : 'running';
        if (isHover) {
            this.tnwRowPause.emit(rowIndex);
        }
        else {
            this.tnwRowResume.emit(rowIndex);
        }
    }
    handleMouseEnter(event) {
        const rowElement = event.currentTarget;
        const rowIndex = Array.from(rowElement.parentElement.children).indexOf(rowElement);
        this.handleRowHover(rowElement, true, rowIndex);
    }
    handleMouseLeave(event) {
        const rowElement = event.currentTarget;
        const rowIndex = Array.from(rowElement.parentElement.children).indexOf(rowElement);
        this.handleRowHover(rowElement, false, rowIndex);
    }
    getRowStyles(rowIndex) {
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
        return (h(Host, { key: '030b26711714bdeda59b4af1a1adb6ac7fb4f201', class: this.baseClass }, h("div", { key: '9291da467cbabbce79cd3ab23eccf7ebe8e0630e', class: `${this.baseClass}__container` }, Array.from({ length: this.rows }, (_, index) => (h("div", { class: `${this.baseClass}__row`, style: this.getRowStyles(index), onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("slot", { name: `row-${index + 1}` })))))));
    }
    get el() { return this; }
}, [1, "tnw-rows-carousel", {
        "rows": [2],
        "animationSpeed": [2, "animation-speed"],
        "pauseAll": [64],
        "resumeAll": [64],
        "toggleRow": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-rows-carousel"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-rows-carousel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwRowsCarousel$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TnwRowsCarousel = TnwRowsCarousel$1;
const defineCustomElement = defineCustomElement$1;

export { TnwRowsCarousel, defineCustomElement };

//# sourceMappingURL=tnw-rows-carousel.js.map