/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, F as Fragment, d as Host } from './p-51091f4a.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, j as getColorClass, l as getTypographyClass, m as getTextTransformClass } from './p-80d80a0e.js';
import { t as typographyStyleSheet, c as colorStyleSheet } from './p-20eedb96.js';
import { v as validateHighlightText } from './p-13eae0fe.js';
import { d as defineCustomElement$1 } from './p-fd4d7c0a.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-heading.tsx` file.
 *
validateProps([this.alignment, this.color, this.headingTag, this.highlight, this.highlightColor, this.highlightTag, this.highlightWeight, this.level, this.lineHeight, this.size, this.text, this.textCase, this.useTextFont, this.weight, this.widthSize]);
 *
 * GENERATED USING `npm run g:components-validations tnw-heading`
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
            "name": "headingTag",
            "type": [
                "div",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6"
            ],
            "isRequired": false
        },
        {
            "name": "highlight",
            "type": [
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
            "name": "level",
            "type": [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6"
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
            "name": "useTextFont",
            "type": [
                "boolean"
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

const baseClass = `${GLOBAL_PREFIX}-heading`;
const headingClass = `${baseClass}__inner`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host{
    --tnw-text-font: var(--tnw-font-text);
    display: block;
    max-width: 100%;
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

.${headingClass}--textFont {
    font-family: var(--tnw-heading-font-text);
}
`;

const TnwHeading = /*@__PURE__*/ proxyCustomElement(class TnwHeading extends H {
    handlePropsChange() {
        this.updateDefaultStyles();
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-heading`;
        this.computedWeight = undefined;
        this.computedSize = undefined;
        this.text = undefined;
        this.highlight = undefined;
        this.highlightColor = undefined;
        this.highlightWeight = "600";
        this.highlightTag = "span";
        this.level = 'h2';
        this.headingTag = undefined;
        this.alignment = undefined;
        this.color = undefined;
        this.weight = undefined;
        this.size = undefined;
        this.textCase = undefined;
        this.lineHeight = "1_5";
        this.widthSize = 'full';
        this.useTextFont = false;
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
        validateProps([this.alignment, this.color, this.headingTag, this.highlight, this.highlightColor, this.highlightTag, this.highlightWeight, this.level, this.lineHeight, this.size, this.text, this.textCase, this.useTextFont, this.weight, this.widthSize]);
        if (isNotEmptyString(this.highlight)) {
            validateHighlightText(this.text, this.highlight);
        }
        this.updateDefaultStyles();
    }
    updateDefaultStyles() {
        this.computedWeight = this.weight || this.getDefaultWeight();
        this.computedSize = this.size || this.getDefaultSize();
    }
    getDefaultWeight() {
        switch (this.level) {
            case 'h1': return '700';
            case 'h2': return '600';
            default: return '400';
        }
    }
    getDefaultSize() {
        switch (this.level) {
            case 'h1': return '5xl';
            case 'h2': return 'heading';
            default: return 'xl';
        }
    }
    getHostClasses() {
        const { baseClass, widthSize } = this;
        return [
            baseClass,
            isNotEmptyString(widthSize) ? `${baseClass}--width-${widthSize}` : ``,
        ].filter(Boolean).join(' ').trim();
    }
    getHeadingClasses() {
        const { baseClass, color, textCase, lineHeight, useTextFont, alignment, computedWeight, computedSize } = this;
        const headingClass = `${baseClass}__inner`;
        return [
            headingClass,
            useTextFont ? `${headingClass}--textFont` : ``,
            getColorClass('color', color),
            getTypographyClass('fs', computedSize),
            getTypographyClass('lh', lineHeight),
            getTypographyClass('fw', computedWeight),
            getTextTransformClass(textCase),
            getTypographyClass('ta', alignment),
        ].filter(Boolean).join(' ').trim();
    }
    renderHighlightedText() {
        const { text, highlight, highlightColor, highlightWeight, highlightTag } = this;
        if (!isNotEmptyString(highlight))
            return null;
        let preText = text;
        let highlightedText = null;
        let postText = null;
        const highlightIndex = text.toLowerCase().indexOf(highlight.toLowerCase());
        if (highlightIndex !== -1) {
            preText = text.slice(0, highlightIndex).trimEnd();
            highlightedText = text.slice(highlightIndex, highlightIndex + highlight.length);
            postText = text.slice(highlightIndex + highlight.length).trimStart();
        }
        return (h(Fragment, null, isNotEmptyString(preText) && preText, isNotEmptyString(preText) && ' ', isNotEmptyString(highlightedText) && (h("tnw-text", { text: highlightedText, textTag: highlightTag, weight: highlightWeight, color: highlightColor, displayMode: 'inline-block', widthSize: null, part: 'highlighted-text' })), isNotEmptyString(postText) && ' ', isNotEmptyString(postText) && postText));
    }
    renderHeadingText() {
        const { text } = this;
        if (!isNotEmptyString(text))
            return null;
        if (this.renderHighlightedText() !== null)
            return this.renderHighlightedText();
        return text;
    }
    render() {
        const HeadingTag = this.level;
        return (h(Host, { key: '981c7acdb298883d7a5c4dc460eedda47854c853', class: this.getHostClasses() }, h(HeadingTag, { key: '04dc2f40ef5be15fec3ebc72a52c9ab3437f2bda', class: this.getHeadingClasses(), part: 'heading' }, this.renderHeadingText() !== null ?
            this.renderHeadingText() :
            h("slot", null))));
    }
    get el() { return this; }
    static get watchers() { return {
        "level": ["handlePropsChange"],
        "weight": ["handlePropsChange"],
        "size": ["handlePropsChange"],
        "alignment": ["handlePropsChange"]
    }; }
}, [1, "tnw-heading", {
        "text": [1],
        "highlight": [1],
        "highlightColor": [1, "highlight-color"],
        "highlightWeight": [1, "highlight-weight"],
        "highlightTag": [1, "highlight-tag"],
        "level": [1],
        "headingTag": [1, "heading-tag"],
        "alignment": [1],
        "color": [1],
        "weight": [1],
        "size": [1],
        "textCase": [1, "text-case"],
        "lineHeight": [1, "line-height"],
        "widthSize": [1, "width-size"],
        "useTextFont": [4, "use-text-font"],
        "computedWeight": [32],
        "computedSize": [32]
    }, undefined, {
        "level": ["handlePropsChange"],
        "weight": ["handlePropsChange"],
        "size": ["handlePropsChange"],
        "alignment": ["handlePropsChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-heading", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-heading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwHeading);
            }
            break;
        case "tnw-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { TnwHeading as T, defineCustomElement as d };

//# sourceMappingURL=p-5faedee9.js.map