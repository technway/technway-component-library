/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-51091f4a.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported } from './p-80d80a0e.js';
import { c as colorStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$2 } from './p-f442dd94.js';

const baseClass = `${GLOBAL_PREFIX}-rating`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  --${baseClass}-gap: 5px;
  
  display: flex;
  align-items: center;
  gap: var(--${baseClass}-gap);
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-rating.tsx` file.
 *
validateProps([this.emptyStarColor, this.filledStarColor, this.hideEmptyStars, this.rating, this.starSize, this.totalStars]);
 *
 * GENERATED USING `npm run g:components-validations tnw-rating`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "emptyStarColor",
            "type": [
                "auto",
                "black",
                "inverse",
                "light",
                "primary",
                "secondary",
                "white"
            ],
            "isRequired": false
        },
        {
            "name": "filledStarColor",
            "type": [
                "auto",
                "black",
                "inverse",
                "light",
                "primary",
                "secondary",
                "white"
            ],
            "isRequired": false
        },
        {
            "name": "hideEmptyStars",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "rating",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "starSize",
            "type": [
                "lg",
                "md",
                "sm",
                "xl",
                "xs"
            ],
            "isRequired": false
        },
        {
            "name": "totalStars",
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

const TnwRating$1 = /*@__PURE__*/ proxyCustomElement(class TnwRating extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-rating`;
        this.totalStars = 5;
        this.rating = this.totalStars || 0;
        this.starSize = 'sm';
        this.filledStarColor = 'primary';
        this.emptyStarColor = 'auto';
        this.hideEmptyStars = false;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                colorStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.emptyStarColor, this.filledStarColor, this.hideEmptyStars, this.rating, this.starSize, this.totalStars]);
    }
    getDefaultIcon(isFilled) {
        return (h("tnw-icon", { enableSvg: true, name: "star", size: this.starSize, color: isFilled ? this.filledStarColor : this.emptyStarColor, hiddenAria: true, part: "default-icon" }, h("svg", { slot: "svg", viewBox: "0 0 16 16" }, h("rect", { width: "16", height: "16", fill: "none" }), h("path", { d: "M16,6.204l-5.528-0.803L8,0.392L5.528,5.401L0,6.204l4,3.899l-0.944,5.505L8,13.009l4.944,2.599L12,10.103L16,6.204z" }))));
    }
    renderRatingIcons() {
        const { totalStars, rating, hideEmptyStars } = this;
        const ratingIcons = [];
        const maxStarsNum = hideEmptyStars ? rating : totalStars;
        for (let i = 1; i <= maxStarsNum; i++) {
            const isFilled = i <= rating;
            ratingIcons.push(this.getDefaultIcon(isFilled));
        }
        return ratingIcons;
    }
    render() {
        const { baseClass, rating, totalStars } = this;
        return (h(Host, { key: '8fd3d73884b7680b380a0daa0df1fe7ea89f07c5', class: baseClass, role: "img", "aria-label": `Rating: ${rating} out of ${totalStars}` }, this.renderRatingIcons()));
    }
    get el() { return this; }
}, [1, "tnw-rating", {
        "totalStars": [2, "total-stars"],
        "rating": [2],
        "starSize": [1, "star-size"],
        "filledStarColor": [1, "filled-star-color"],
        "emptyStarColor": [1, "empty-star-color"],
        "hideEmptyStars": [4, "hide-empty-stars"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-rating", "tnw-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-rating":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwRating$1);
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

const TnwRating = TnwRating$1;
const defineCustomElement = defineCustomElement$1;

export { TnwRating, defineCustomElement };

//# sourceMappingURL=tnw-rating.js.map