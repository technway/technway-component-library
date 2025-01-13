/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-9d664f2a.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, j as getColorClass, l as getTypographyClass } from './p-80d80a0e.js';
import { f as fontSizeStyleSheet, c as colorStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$1 } from './p-d78ea6f0.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-anchor.tsx` file.
 *
validateProps([this.color, this.hideNewTabIcon, this.href, this.labelAria, this.newTab, this.size, this.text, this.textDecoration]);
 *
 * GENERATED USING `npm run g:components-validations tnw-anchor`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "color",
            "type": [
                "auto",
                "black",
                "gray100",
                "gray200",
                "gray300",
                "gray400",
                "gray500",
                "gray600",
                "gray700",
                "gray800",
                "gray900",
                "inverse",
                "light",
                "placeholder",
                "primary",
                "secondary",
                "white"
            ],
            "isRequired": false
        },
        {
            "name": "hideNewTabIcon",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "href",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "labelAria",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "newTab",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "size",
            "type": [
                "2xl",
                "3xl",
                "4xl",
                "5xl",
                "6xl",
                "7xl",
                "8xl",
                "9xl",
                "heading",
                "lg",
                "md",
                "sm",
                "text",
                "xl",
                "xs"
            ],
            "isRequired": false
        },
        {
            "name": "text",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "textDecoration",
            "type": [
                "line-through",
                "none",
                "overline",
                "underline"
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
* {
    box-sizing: border-box;
}
    
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:host {
    --tnw-anchor-font: var(--tnw-font-text);
    display: inline-block;
}

.tnw-anchor {
    font-family: var(--tnw-anchor-font);
    display: flex;
    gap: 3px;
}
    
.tnw-anchor--none {
    text-decoration: none;
}
.tnw-anchor--underline {
    text-decoration: underline;
}
.tnw-anchor--overline {
    text-decoration: overline;
}
.tnw-anchor--line-through {
    text-decoration: line-through;
}
`;

const TnwAnchor = /*@__PURE__*/ proxyCustomElement(class TnwAnchor extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-anchor`;
        this.labelAriaValue = this.labelAria;
        /**
         * Sets the color of the text based on the available colors.
         */
        this.color = 'auto';
        /**
         * Specifies the text decoration line of the anchor text.
         */
        this.textDecoration = 'underline';
        /**
         * Specifies whether the link should open in a new browser tab.
         */
        this.newTab = false;
        /**
         * Hides the new tab icon.
         */
        this.hideNewTabIcon = false;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                fontSizeStyleSheet,
                colorStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        const propsValues = [this.color, this.hideNewTabIcon, this.href, this.labelAria, this.newTab, this.size, this.text, this.textDecoration];
        validateProps(propsValues);
        // If `labelAria` is not explicitly provided, default it to the text content if available.
        if (!isNotEmptyString(this.labelAria)) {
            this.labelAriaValue = isNotEmptyString(this.text) ? this.text : 'Link';
        }
    }
    getAnchorClasses() {
        const { baseClass, textDecoration, color, size } = this;
        return [
            baseClass,
            getColorClass('color', color),
            `${baseClass}--${textDecoration}`,
            getTypographyClass('fs', size),
        ].filter(Boolean).join(' ').trim();
    }
    render() {
        const { href, labelAriaValue, text, newTab, baseClass, hideNewTabIcon } = this;
        const target = newTab ? "_blank" : undefined;
        const rel = newTab ? "noopener noreferrer" : undefined;
        return (h(Host, { key: '61e4bee4a10fc2e2e663071794a500436791bff7' }, h("a", { key: '8fda5e56959a4cc7a35ee7366a710eefdebc7093', class: this.getAnchorClasses(), href: href, "aria-label": labelAriaValue, target: target, rel: rel, part: 'anchor' }, isNotEmptyString(text) && text, (!hideNewTabIcon && newTab) ? (h("tnw-icon", { class: `${baseClass}__newTab-icon`, name: 'tnw-arrow-up-right', hiddenAria: true, color: this.color, size: 'xs', part: 'icon' })) : (h("slot", null)))));
    }
    get el() { return this; }
}, [1, "tnw-anchor", {
        "href": [1],
        "text": [1],
        "color": [1],
        "size": [1],
        "labelAria": [1, "label-aria"],
        "textDecoration": [1, "text-decoration"],
        "newTab": [4, "new-tab"],
        "hideNewTabIcon": [4, "hide-new-tab-icon"],
        "labelAriaValue": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-anchor", "tnw-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-anchor":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwAnchor);
            }
            break;
        case "tnw-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { TnwAnchor as T, defineCustomElement as d };

//# sourceMappingURL=p-0157daa2.js.map