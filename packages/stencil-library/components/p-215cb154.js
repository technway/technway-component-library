/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, F as Fragment, d as Host } from './p-4617b122.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, k as isNotEmptyStringOrNumber, j as getColorClass, l as getTypographyClass, m as getTextTransformClass } from './p-80d80a0e.js';
import { t as typographyStyleSheet, c as colorStyleSheet } from './p-20eedb96.js';
import { v as validateHighlightText } from './p-13eae0fe.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-text.tsx` file.
 *
validateProps([this.alignment, this.color, this.displayMode, this.highlight, this.highlightColor, this.highlightTag, this.highlightWeight, this.lineHeight, this.size, this.text, this.textCase, this.textTag, this.weight, this.widthSize]);
 *
 * GENERATED USING `npm run g:components-validations tnw-text`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "alignment",
            "type": [
                "center",
                "end",
                "justify",
                "left",
                "right",
                "start"
            ],
            "isRequired": false
        },
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
            "name": "displayMode",
            "type": [
                "block",
                "inline",
                "inline-block"
            ],
            "isRequired": false
        },
        {
            "name": "highlight",
            "type": [
                "number",
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "highlightColor",
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
            "name": "highlightTag",
            "type": [
                "em",
                "mark",
                "span",
                "strong"
            ],
            "isRequired": false
        },
        {
            "name": "highlightWeight",
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
        },
        {
            "name": "lineHeight",
            "type": [
                "1",
                "1_25",
                "1_5",
                "1_75",
                "2",
                "2_25",
                "2_5"
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
                "number",
                "string"
            ],
            "isRequired": false
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
            "name": "textTag",
            "type": [
                "em",
                "mark",
                "p",
                "span",
                "strong"
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
        },
        {
            "name": "widthSize",
            "type": [
                "full",
                "lg",
                "md",
                "sm",
                "unset",
                "xl"
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

const baseClass = `${GLOBAL_PREFIX}-text`;
const headingClass = `${baseClass}__inner`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host{
    --tnw-text-font: var(--tnw-font-text);
    max-width: 100%;
}

:host(.${baseClass}--block) {
  display: block;
}
:host(.${baseClass}--inline-block) {
  display: inline-block;
}
:host(.${baseClass}--inline) {
  display: inline;
}

:host(.${baseClass}--width-sm) {
  width: var(--${baseClass}-width, 450px);
}
:host(.${baseClass}--width-md) {
  width: var(--${baseClass}-width, 600px);
}
:host(.${baseClass}--width-lg) {
  width: var(--${baseClass}-width, 800px);
}
:host(.${baseClass}--width-xl) {
  width: var(--${baseClass}-width, 1000px);
}
:host(.${baseClass}--width-full) {
  width: var(--${baseClass}-width, 100%);
}

.${headingClass} {
    font-family: var(--tnw-text-font);
    margin: 0;
    padding: 0;
}

p {
  width: 100%;
}
`;

const TnwText = /*@__PURE__*/ proxyCustomElement(class TnwText extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-text`;
        /**
         * Specifies the font weight of the highlighted text.
         */
        this.highlightWeight = "600";
        /**
         * Specifies the HTML tag to be used for the highlighted text. Useful for SEO purposes.
         */
        this.highlightTag = "span";
        /**
         * Adjusts the line height of the text.
         */
        this.lineHeight = "1_75";
        /**
         * The width size of the text. Use unset to avoid setting width.
         */
        this.widthSize = 'full';
        /**
         * Defines the HTML tag of the component.
         */
        this.textTag = "p";
        /**
         * Defines the display mode of the component. It's not recommended to use the `"inline"` display mode, use `"inline-block"` instead.
         */
        this.displayMode = "block";
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                typographyStyleSheet,
                colorStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.alignment, this.color, this.displayMode, this.highlight, this.highlightColor, this.highlightTag, this.highlightWeight, this.lineHeight, this.size, this.text, this.textCase, this.textTag, this.weight, this.widthSize]);
        if (isNotEmptyStringOrNumber(this.highlight)) {
            validateHighlightText(this.text, this.highlight);
        }
    }
    getHostClasses() {
        const { baseClass, widthSize, displayMode } = this;
        return [
            baseClass,
            `${baseClass}--${displayMode}`,
            isNotEmptyString(widthSize) ? `${baseClass}--width-${widthSize}` : ``,
        ].filter(Boolean).join(' ').trim();
    }
    getTextClasses() {
        const { baseClass, color, size, lineHeight, weight, textCase, alignment } = this;
        const headingClass = `${baseClass}__inner`;
        return [
            headingClass,
            getColorClass('color', color),
            getTypographyClass('fs', size),
            getTypographyClass('lh', lineHeight),
            getTypographyClass('fw', weight),
            getTextTransformClass(textCase),
            getTypographyClass('ta', alignment),
        ].filter(Boolean).join(' ').trim();
    }
    renderHighlightedText() {
        const { text, highlight, highlightColor, highlightWeight, highlightTag } = this;
        if (!isNotEmptyStringOrNumber(highlight))
            return null;
        let preText = text;
        let highlightedText = null;
        let postText = null;
        const textString = text.toString();
        const highlightString = highlight.toString();
        const highlightIndex = textString.toLowerCase().indexOf(highlightString.toLowerCase());
        if (highlightIndex !== -1) {
            preText = textString.slice(0, highlightIndex).trimEnd();
            highlightedText = textString.slice(highlightIndex, highlightIndex + highlightString.length);
            postText = textString.slice(highlightIndex + highlightString.length).trimStart();
        }
        return (h(Fragment, null, isNotEmptyStringOrNumber(preText) && preText, isNotEmptyStringOrNumber(preText) && ' ', isNotEmptyStringOrNumber(highlightedText) && (h("tnw-text", { text: highlightedText, textTag: highlightTag, weight: highlightWeight, color: highlightColor, displayMode: 'inline-block', widthSize: "unset", part: 'highlighted-text' })), isNotEmptyStringOrNumber(postText) && ' ', isNotEmptyStringOrNumber(postText) && postText));
    }
    renderText() {
        const { text } = this;
        if (!isNotEmptyStringOrNumber(text))
            return null;
        if (this.renderHighlightedText() !== null)
            return this.renderHighlightedText();
        return text;
    }
    render() {
        const Tag = this.textTag;
        return (h(Host, { key: '34cac28356fac894f23f7bf50619892956c6427a', class: this.getHostClasses() }, h(Tag, { key: '28147b8a1b42fe5bc8fc0f64917de1d1ab741f0e', class: this.getTextClasses(), part: 'text' }, this.renderText(), h("slot", { key: '2089286f0257b90928583c96b537aabffb85ac12' }))));
    }
    get el() { return this; }
}, [1, "tnw-text", {
        "text": [8],
        "highlight": [8],
        "highlightColor": [1, "highlight-color"],
        "highlightWeight": [1, "highlight-weight"],
        "highlightTag": [1, "highlight-tag"],
        "alignment": [1],
        "color": [1],
        "size": [1],
        "weight": [1],
        "textCase": [1, "text-case"],
        "lineHeight": [1, "line-height"],
        "widthSize": [1, "width-size"],
        "textTag": [1, "text-tag"],
        "displayMode": [1, "display-mode"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-text", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwText);
            }
            break;
        case "tnw-text":
            if (!customElements.get(tagName)) {
                defineCustomElement();
            }
            break;
    } });
}
defineCustomElement();

export { TnwText as T, defineCustomElement as d };

<<<<<<<< HEAD:packages/stencil-library/components/p-b708dbe9.js
//# sourceMappingURL=p-b708dbe9.js.map
========
//# sourceMappingURL=p-215cb154.js.map
>>>>>>>> 5935193418841c071bfed2a488e2c48c64bb9b02:packages/stencil-library/components/p-215cb154.js
