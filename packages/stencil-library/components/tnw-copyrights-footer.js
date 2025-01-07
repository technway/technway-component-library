/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, k as isNotEmptyStringOrNumber, j as getColorClass } from './p-80d80a0e.js';
import { c as colorStyleSheet, a as containerStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$2 } from './p-b708dbe9.js';

const baseClass = `${GLOBAL_PREFIX}-copyrights-footer`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    padding: 15px 0;
}
:host(.${baseClass}--borderTop) {
    border-top-width: 1px;
    border-top-style: solid;
}
:host(.${baseClass}--center) > footer,
:host(.${baseClass}--center) > div {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.${baseClass}__content {
    display: flex;
    gap: 4px;
}

footer > p {
    margin: 0;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-copyrights-footer.tsx` file.
 *
validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.enableSlot, this.endYear, this.organizationName, this.organizationNameColor, this.postText, this.preText, this.startYear, this.textColor, this.useCurrentYearAsEndYear, this.useCurrentYearAsStartYear, this.useDivAsContainer]);
 *
 * GENERATED USING `npm run g:components-validations tnw-copyrights-footer`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "backgroundColor",
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
            "name": "borderTopColor",
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
            "name": "centerContent",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "disableInternalContainer",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "enableSlot",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "endYear",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "organizationName",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "organizationNameColor",
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
            "name": "postText",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "preText",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "startYear",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "textColor",
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
            "name": "useCurrentYearAsEndYear",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "useCurrentYearAsStartYear",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "useDivAsContainer",
            "type": [
                "boolean"
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

function validateYearsProps(startYear, endYear, useCurrentYearAsStartYear, useCurrentYearAsEndYear) {
    const currentYear = new Date().getFullYear();
    const startYearValue = useCurrentYearAsStartYear ? currentYear : startYear;
    const endYearValue = useCurrentYearAsEndYear ? currentYear : endYear;
    if (startYearValue !== undefined && endYearValue !== undefined && startYearValue > endYearValue) {
        throw new Error('Invalid year range: startYear cannot be greater than endYear');
    }
}

const TnwCopyrightsFooter$1 = /*@__PURE__*/ proxyCustomElement(class TnwCopyrightsFooter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-copyrights-footer`;
        /**
         * If true, the starting year will be set to the current year.
         */
        this.useCurrentYearAsStartYear = false;
        /**
         * If true, the ending year will be set to the current year.
         */
        this.useCurrentYearAsEndYear = false;
        /**
         * The text color for the footer content.
         */
        this.textColor = 'auto';
        /**
         * The color of the organization name. Defaults to the same value as `textColor`.
         */
        this.organizationNameColor = this.textColor;
        /**
         * The background color for the footer.
         */
        this.backgroundColor = 'auto';
        /**
         * The color of the top border of the footer.
         */
        this.borderTopColor = 'auto';
        /**
         * If true, the footer will render custom content using a slot instead of the default content.
         */
        this.enableSlot = false;
        /**
         * Centering text
         */
        this.centerContent = false;
        /**
         * If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.
         */
        this.disableInternalContainer = false;
        /**
         * If `true`, the footer will be rendered using a `<div>` element instead of a `<footer>` element. This is useful when this component is used inside a `<footer>` or inside the component `<tnw-footer>`.
         */
        this.useDivAsContainer = false;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                colorStyleSheet,
                containerStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.enableSlot, this.endYear, this.organizationName, this.organizationNameColor, this.postText, this.preText, this.startYear, this.textColor, this.useCurrentYearAsEndYear, this.useCurrentYearAsStartYear, this.useDivAsContainer]);
        validateYearsProps(this.startYear, this.endYear, this.useCurrentYearAsStartYear, this.useCurrentYearAsEndYear);
    }
    getYearsRange() {
        const { startYear, endYear, useCurrentYearAsStartYear, useCurrentYearAsEndYear } = this;
        const currentYear = new Date().getFullYear();
        const startYearValue = useCurrentYearAsStartYear ? currentYear : startYear;
        const endYearValue = useCurrentYearAsEndYear ? currentYear : endYear;
        if (isNotEmptyStringOrNumber(startYearValue)) {
            if (isNotEmptyStringOrNumber(endYearValue)) {
                return `${String(startYearValue)} - ${String(endYearValue)}`;
            }
            return String(startYearValue);
        }
        // If endYearValue is not null or undefined, return it
        if (isNotEmptyStringOrNumber(endYearValue)) {
            return String(endYearValue);
        }
        return '';
    }
    getHostClasses() {
        const { baseClass, borderTopColor, backgroundColor, centerContent } = this;
        return [
            baseClass,
            centerContent ? `${baseClass}--center` : ``,
            isNotEmptyString(borderTopColor) ? `${baseClass}--borderTop` : ``,
            getColorClass('bg', backgroundColor),
            getColorClass('border-top', borderTopColor),
        ].filter(Boolean).join(' ').trim();
    }
    renderContent() {
        const yearsRange = this.getYearsRange();
        const contentParts = [];
        if (isNotEmptyString(this.preText)) {
            contentParts.push(this.preText);
        }
        if (isNotEmptyString(this.organizationName)) {
            contentParts.push(this.organizationName);
        }
        if (isNotEmptyString(this.postText)) {
            contentParts.push(this.postText);
        }
        if (isNotEmptyString(yearsRange)) {
            contentParts.push(yearsRange);
        }
        return (h("tnw-text", { text: contentParts.join(' '), size: "xs", color: this.textColor, class: `${this.baseClass}__content`, part: "content", alignment: this.centerContent ? 'center' : undefined }));
    }
    render() {
        const FooterTag = this.useDivAsContainer ? 'div' : 'footer';
        return (h(Host, { key: '46f0d369fd30e031160a6e9af5a64555bc19b759', class: this.getHostClasses() }, h(FooterTag, { key: '09f35df47163d73ed808b36a8a1e632caace9f16', class: !this.disableInternalContainer ? 'container' : '', part: 'container', "aria-label": "Copyright information" }, this.enableSlot ? (h("slot", null)) : (this.renderContent()))));
    }
    get el() { return this; }
}, [1, "tnw-copyrights-footer", {
        "startYear": [2, "start-year"],
        "endYear": [2, "end-year"],
        "useCurrentYearAsStartYear": [4, "use-current-year-as-start-year"],
        "useCurrentYearAsEndYear": [4, "use-current-year-as-end-year"],
        "organizationName": [1, "organization-name"],
        "preText": [1, "pre-text"],
        "postText": [1, "post-text"],
        "textColor": [1, "text-color"],
        "organizationNameColor": [1, "organization-name-color"],
        "backgroundColor": [1, "background-color"],
        "borderTopColor": [1, "border-top-color"],
        "enableSlot": [4, "enable-slot"],
        "centerContent": [4, "center-content"],
        "disableInternalContainer": [4, "disable-internal-container"],
        "useDivAsContainer": [4, "use-div-as-container"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-copyrights-footer", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-copyrights-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwCopyrightsFooter$1);
            }
            break;
        case "tnw-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const TnwCopyrightsFooter = TnwCopyrightsFooter$1;
const defineCustomElement = defineCustomElement$1;

export { TnwCopyrightsFooter, defineCustomElement };

//# sourceMappingURL=tnw-copyrights-footer.js.map