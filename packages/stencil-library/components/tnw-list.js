/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, r as parseJSONAsync, j as getColorClass, l as getTypographyClass, m as getTextTransformClass } from './p-80d80a0e.js';
import { t as typographyStyleSheet, c as colorStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$3 } from './p-d53cb6f4.js';
import { d as defineCustomElement$2 } from './p-3d848afd.js';

const baseClass = `${GLOBAL_PREFIX}-list`;
const subListClass = `${baseClass}__sub-list`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    --${baseClass}-font: var(--tnw-font-text);
}

.${baseClass} {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.${baseClass}--disc,
${subListClass}--disc {
    list-style-type: disc;
}
.${baseClass}--circle,
${subListClass}--circle {
    list-style-type: circle;
}
.${baseClass}--square,
${subListClass}--square {
    list-style-type: square;
}
.${baseClass}--decimal,
${subListClass}--decimal {
    list-style-type: decimal;
}
.${baseClass}--lower-roman,
${subListClass}--lower-roman {
    list-style-type: lower-roman;
}
.${baseClass}--upper-roman,
${subListClass}--upper-roman {
    list-style-type: upper-roman;
}

.${baseClass}--inside,
${subListClass}--inside {
    list-style-position: inside;
}
.${baseClass}--outside,
${subListClass}--outside {
    list-style-position: outside;
}

/*.${baseClass}__icon {
    margin-inline-end: var(--tnw-spacing-xs);
}*/

.${baseClass}__item {
    font-family: var(--${baseClass}-font);
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-list.tsx` file.
 *
validateProps([this.color, this.lineHeight, this.listData, this.markerPosition, this.size, this.textCase, this.weight]);
 *
 * GENERATED USING `npm run g:components-validations tnw-list`
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
            "name": "listData",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "markerPosition",
            "type": [
                "inside",
                "outside"
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

const TnwList$1 = /*@__PURE__*/ proxyCustomElement(class TnwList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-list`;
        this.parsedData = null;
        /**
         * Specifies the position of the list marker relative to the text.
         */
        this.markerPosition = 'inside';
        /**
         * Adjusts the line height of the list items.
         */
        this.lineHeight = "1_75";
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
    async componentWillLoad() {
        this.parsedData = await parseJSONAsync(this.listData);
        validateProps([this.color, this.lineHeight, this.listData, this.markerPosition, this.size, this.textCase, this.weight]);
    }
    getMarkerTypeClasses(baseClass, markerType, listTag) {
        if (markerType && markerType.trim() !== '') {
            return `${baseClass}--${markerType}`;
        }
        if (listTag === 'ul') {
            return `${baseClass}--disc`;
        }
        if (listTag === 'ol') {
            return `${baseClass}--decimal`;
        }
        return '';
    }
    getListClasses(markerType, listTag, baseClass = this.baseClass) {
        const { markerPosition } = this;
        return [
            baseClass,
            `${baseClass}--${markerPosition}`,
            this.getMarkerTypeClasses(baseClass, markerType, listTag),
        ].filter(Boolean).join(' ').trim();
    }
    getItemClasses() {
        const { baseClass, color, size, lineHeight, weight, textCase } = this;
        const itemClass = `${baseClass}__item`;
        return [
            itemClass,
            getColorClass('color', color),
            getTypographyClass('fs', size),
            getTypographyClass('lh', lineHeight),
            getTypographyClass('fw', weight),
            getTextTransformClass(textCase),
        ].filter(Boolean).join(' ').trim();
    }
    renderList(listItems, className, partName) {
        var _a;
        if (this.isInvalidListItems(listItems)) {
            return null;
        }
        const ListTag = (_a = listItems.listTag) !== null && _a !== void 0 ? _a : 'ul';
        return (h(ListTag, { class: className, part: partName }, listItems.items.map((item) => this.renderListItem(item))));
    }
    isInvalidListItems(listItems) {
        return listItems == null || listItems.items == null || !Array.isArray(listItems.items);
    }
    renderListItem(item) {
        const { text, iconName, subList, url } = item;
        const subListClass = `${this.baseClass}__sub-list`;
        return (h("li", { class: this.getItemClasses(), part: "item" }, iconName && (h("tnw-icon", { class: `${this.baseClass}__icon`, name: iconName, size: "xs", part: "icon" })), url && url.trim() !== '' ? (h("tnw-anchor", { href: url, textDecoration: "none", color: this.color, text: text, size: this.size })) : (text), subList != null ? this.renderList(subList, this.getListClasses(subList === null || subList === void 0 ? void 0 : subList.markerType, subList === null || subList === void 0 ? void 0 : subList.listTag, subListClass), 'sub-list') : null));
    }
    render() {
        const { parsedData } = this;
        if (parsedData === null)
            return null;
        return (h(Host, null, this.renderList(this.parsedData, this.getListClasses(parsedData === null || parsedData === void 0 ? void 0 : parsedData.markerType, parsedData === null || parsedData === void 0 ? void 0 : parsedData.listTag), 'list')));
    }
    get el() { return this; }
}, [1, "tnw-list", {
        "listData": [1, "list-data"],
        "markerPosition": [1, "marker-position"],
        "color": [1],
        "size": [1],
        "weight": [1],
        "textCase": [1, "text-case"],
        "lineHeight": [1, "line-height"],
        "parsedData": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-list", "tnw-anchor", "tnw-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwList$1);
            }
            break;
        case "tnw-anchor":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
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

const TnwList = TnwList$1;
const defineCustomElement = defineCustomElement$1;

export { TnwList, defineCustomElement };

//# sourceMappingURL=tnw-list.js.map