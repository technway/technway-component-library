/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-51091f4a.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, r as parseJSONAsync, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, k as isNotEmptyStringOrNumber } from './p-80d80a0e.js';
import { d as defineCustomElement$4 } from './p-ccb460e0.js';
import { d as defineCustomElement$3 } from './p-f442dd94.js';
import { d as defineCustomElement$2 } from './p-75a1c6b1.js';

const baseClass = `${GLOBAL_PREFIX}-portfolio-grid`;
const contentClass = `${baseClass}__content`;
// const itemClass = `${baseClass}__item`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;

    --${baseClass}-spacing-xs: var(--tnw-spacing-xs);
    --${baseClass}-spacing-sm: var(--tnw-spacing-sm);
    --${baseClass}-spacing-md: var(--tnw-spacing-md);
    --${baseClass}-spacing-lg: var(--tnw-spacing-lg);
    --${baseClass}-spacing-xl: var(--tnw-spacing-xl);
}

.${contentClass} {
    display: grid;
    grid-template-rows: auto auto;
}

.${contentClass}--gradient-fade {
    position: relative;
}
.${contentClass}--gradient-fade::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 350px;
    background-image: linear-gradient(to bottom, rgba(var(--tnw-background-color-rgb), 0), rgba(var(--tnw-background-color-rgb), 1));
    pointer-events: none;
}

/* Spacings */
.${contentClass}--spacing-xs {
    gap: var(--${baseClass}-spacing-xs);
}
.${contentClass}--spacing-sm {
    gap: var(--${baseClass}-spacing-sm);
}
.${contentClass}--spacing-md {
    gap: var(--${baseClass}-spacing-md);
}
.${contentClass}--spacing-lg {
    gap: var(--${baseClass}-spacing-lg);
}
.${contentClass}--spacing-xl {
    gap: var(--${baseClass}-spacing-xl);
}

tnw-anchor,
tnw-anchor::part(anchor) {
    width: 100%;
    height: 100%;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-portfolio-grid.tsx` file.
 *
validateProps([this.columns, this.itemsData, this.showGradientFade, this.spacing]);
 *
 * GENERATED USING `npm run g:components-validations tnw-portfolio-grid`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "columns",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "itemsData",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "showGradientFade",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "spacing",
            "type": [
                "lg",
                "md",
                "sm",
                "xl",
                "xs"
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

const TnwPortfolioGrid$1 = /*@__PURE__*/ proxyCustomElement(class TnwPortfolioGrid extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-portfolio-grid`;
        this.parsedItemsData = [];
        this.itemsData = undefined;
        this.columns = 3;
        this.spacing = 'sm';
        this.showGradientFade = false;
        this.initializeStyles();
    }
    connectedCallback() {
        this.applyStyles();
    }
    async componentWillLoad() {
        this.parsedItemsData = await parseJSONAsync(this.itemsData);
        validateProps([this.columns, this.itemsData, this.showGradientFade, this.spacing]);
    }
    initializeStyles() {
        var _a;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
        else {
            const styleEl = document.createElement('style');
            styleEl.textContent = styles;
            (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(styleEl);
        }
    }
    applyStyles() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                this.componentStyles
            ];
        }
        else {
            const componentStyleEl = document.createElement('style');
            if (this.componentStyles && this.componentStyles.cssRules) {
                componentStyleEl.textContent = Array.from(this.componentStyles.cssRules)
                    .map(rule => rule.cssText)
                    .join(' ');
            }
            this.el.shadowRoot.appendChild(componentStyleEl);
        }
    }
    getColsStyles() {
        return {
            gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
        };
    }
    getContentClasses() {
        const contentClass = `${this.baseClass}__content`;
        return [
            contentClass,
            `${contentClass}--spacing-${this.spacing}`,
            this.showGradientFade ? `${contentClass}--gradient-fade` : '',
        ].filter(Boolean).join(' ');
    }
    render() {
        return (h(Host, { key: '13e9956a7e8a4b657680ca868c8f9d1f5dc0f761', class: this.baseClass }, h("div", { key: '5e001af312facc1b2fec97f1d9d6ebacd72da04b', class: this.getContentClasses(), style: this.getColsStyles() }, this.parsedItemsData.map((item) => [
            h("div", { class: `${this.baseClass}__item`, style: {
                    gridRow: isNotEmptyStringOrNumber(item.rowStart) ? `${item.rowStart} / ${item.rowEnd}` : '',
                    gridColumn: isNotEmptyStringOrNumber(item.colStart) ? `${item.colStart} / ${item.colEnd}` : '',
                } }, isNotEmptyString(item.link) ? (h("tnw-anchor", { href: item.link, labelAria: item.alt }, h("tnw-image", { src: item.src, alt: item.alt, widthSize: 'full', heightSize: 'full', objectFit: 'cover' }))) : (h("tnw-image", { src: item.src, alt: item.alt, widthSize: 'full', heightSize: 'full', objectFit: 'cover' })))
        ]))));
    }
    get el() { return this; }
}, [1, "tnw-portfolio-grid", {
        "itemsData": [1, "items-data"],
        "columns": [2],
        "spacing": [1],
        "showGradientFade": [4, "show-gradient-fade"],
        "parsedItemsData": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-portfolio-grid", "tnw-anchor", "tnw-icon", "tnw-image"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-portfolio-grid":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwPortfolioGrid$1);
            }
            break;
        case "tnw-anchor":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tnw-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tnw-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const TnwPortfolioGrid = TnwPortfolioGrid$1;
const defineCustomElement = defineCustomElement$1;

export { TnwPortfolioGrid, defineCustomElement };

//# sourceMappingURL=tnw-portfolio-grid.js.map