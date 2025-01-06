/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-dd363b95.js';
import { d as fontWeightStyleSheet, c as colorStyleSheet, g as textTransformStyleSheet } from './p-9bc88248.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, j as getColorClass, l as getTypographyClass, m as getTextTransformClass } from './p-80d80a0e.js';

const baseClass = `${GLOBAL_PREFIX}-label`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host{
    --${baseClass}-font: var(--tnw-font-text);
    --${baseClass}-fs-default: var(--tnw-fs-text);
    display: block;
}
    
.${baseClass}--auto {
    font-size: var(--${baseClass}-font-size, var(--${baseClass}-fs-default))
}
.${baseClass}--sm {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-xs)) 
}
.${baseClass}--md {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-sm)) 
}
.${baseClass}--lg {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-md)) 
}

.${baseClass} {
    font-family: var(--${baseClass}-font);
    margin: 0;
    padding: 0;
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-label.tsx` file.
 *
validateProps([this.color, this.htmlFor, this.isSrOnly, this.size, this.text, this.textCase, this.weight]);
 *
 * GENERATED USING `npm run g:components-validations tnw-label`
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
            "name": "htmlFor",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "isSrOnly",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "size",
            "type": [
                "lg",
                "md",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "text",
            "type": [
                "number",
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "textCase",
            "type": [
                "capitalize",
                "lowercase",
                "normal-case",
                "uppercase"
            ],
            "isRequired": false
        },
        {
            "name": "weight",
            "type": [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
                "heading",
                "text"
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

const TnwLabel = /*@__PURE__*/ proxyCustomElement(class TnwLabel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-label`;
        this.text = undefined;
        this.htmlFor = undefined;
        this.color = undefined;
        this.size = "sm";
        this.weight = "500";
        this.textCase = undefined;
        this.isSrOnly = false;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                fontWeightStyleSheet,
                colorStyleSheet,
                textTransformStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.color, this.htmlFor, this.isSrOnly, this.size, this.text, this.textCase, this.weight]);
    }
    getClasses() {
        const { baseClass, color, size, weight, textCase } = this;
        return [
            baseClass,
            `${baseClass}--${size}`,
            getColorClass('color', color),
            getTypographyClass('fw', weight),
            getTextTransformClass(textCase),
        ].filter(Boolean).join(' ').trim();
    }
    getSrOnlyClasses() {
        if (!this.isSrOnly) {
            return {};
        }
        return {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: '0',
        };
    }
    render() {
        return (h(Host, { key: '8c89b1f5b0f3545467e72cb0b6e9c815b7b180ac', style: this.getSrOnlyClasses() }, h("label", { key: '57ef93480f7a2e5ce222aed6b0dcbe3882344c4d', class: this.getClasses(), htmlFor: this.htmlFor, part: 'label' }, this.text)));
    }
    get el() { return this; }
}, [1, "tnw-label", {
        "text": [8],
        "htmlFor": [1, "html-for"],
        "color": [1],
        "size": [1],
        "weight": [1],
        "textCase": [1, "text-case"],
        "isSrOnly": [4, "is-sr-only"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-label"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwLabel);
            }
            break;
    } });
}
defineCustomElement();

export { TnwLabel as T, defineCustomElement as d };

//# sourceMappingURL=p-95b9069c.js.map