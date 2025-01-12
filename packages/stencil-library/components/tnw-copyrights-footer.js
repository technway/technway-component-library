/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, k as isNotEmptyStringOrNumber, j as getColorClass } from './p-80d80a0e.js';
import { c as colorStyleSheet, a as containerStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$4 } from './p-d53cb6f4.js';
import { d as defineCustomElement$3 } from './p-3d848afd.js';
import { d as defineCustomElement$2 } from './p-b708dbe9.js';

const baseClass = `${GLOBAL_PREFIX}-copyrights-footer`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    padding: 15px 0;
    display: block;
}
:host(.${baseClass}--borderTop) {
    border-top-width: 1px;
    border-top-style: solid;
}
:host(.${baseClass}--center) > footer,
:host(.${baseClass}--center) > div {
    text-align: center;
    justify-content: center;
    flex-direction: column;
}
:host > footer,
:host > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}
@media only screen and (max-width: 767px) {
    :host > footer,
    :host > div {
        text-align: center;
        justify-content: center;
        flex-direction: column;
    }
}
:host(.${baseClass}--center) ul {
    justify-content: center;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px;
}

::slotted(a) {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-copyrights-footer.tsx` file.
 *
validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.endYear, this.linksData, this.linksLength, this.organizationName, this.organizationNameColor, this.postText, this.preText, this.startYear, this.textColor, this.useCurrentYearAsEndYear, this.useCurrentYearAsStartYear, this.useCustomLinks, this.useDivAsContainer]);
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
            "name": "endYear",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "linksData",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "linksLength",
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
            "name": "useCustomLinks",
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
        /* --------------- Internal State Management --------------- */
        this.parsedLinksData = [];
        /**
         * If true, the starting year will be set to the current year.
         */
        this.useCurrentYearAsStartYear = false;
        /**
         * If true, the ending year will be set to the current year.
         */
        this.useCurrentYearAsEndYear = false;
        /**
         * The color of the organization name. Defaults to the same value as `textColor`.
         *
         * @deprecated since v2.2.0
         */
        this.organizationNameColor = this.textColor;
        /**
         * The text color for the footer content.
         */
        this.textColor = 'auto';
        /**
         * The background color for the footer.
         */
        this.backgroundColor = 'auto';
        /**
         * The color of the top border of the footer.
         */
        this.borderTopColor = 'auto';
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
        /**
         * If `true`, the footer will render custom links using a slot instead of the `linksData`.
         * Provide accurate `linksLength` when this prop is `true`.
         * When use this prop, the `linksData` prop will be ignored.
         */
        this.useCustomLinks = false;
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
        validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.endYear, this.linksData, this.linksLength, this.organizationName, this.organizationNameColor, this.postText, this.preText, this.startYear, this.textColor, this.useCurrentYearAsEndYear, this.useCurrentYearAsStartYear, this.useCustomLinks, this.useDivAsContainer]);
        validateYearsProps(this.startYear, this.endYear, this.useCurrentYearAsStartYear, this.useCurrentYearAsEndYear);
        try {
            this.parsedLinksData = isNotEmptyString(this.linksData) ? JSON.parse(this.linksData) : [];
        }
        catch (error) {
            console.error('Error parsing links data', error);
            this.parsedLinksData = null;
        }
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
    renderCopyrights() {
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
        if (contentParts.join(' ') === '') {
            return h("slot", { name: "copyrights" });
        }
        return (h("tnw-text", { text: contentParts.join(' '), size: "xs", color: this.textColor, class: `${this.baseClass}__content`, part: "copyrights", alignment: this.centerContent ? 'center' : undefined, highlight: this.organizationName, highlightWeight: '600', highlightTag: 'strong', widthSize: 'unset' }));
    }
    renderLinks() {
        const hasParsedLinksData = this.parsedLinksData !== undefined && this.parsedLinksData.length > 0;
        const hasCustomLinks = this.useCustomLinks && this.linksLength > 0;
        if (!hasParsedLinksData && !hasCustomLinks) {
            return null;
        }
        return (h("ul", { class: `${this.baseClass}__links` }, hasCustomLinks ? (Array.from({ length: this.linksLength }, (_, i) => (h("li", null, h("tnw-text", { class: `${this.baseClass}__links-item`, color: this.textColor, widthSize: 'unset' }, h("slot", { name: `link-${i + 1}` })))))) : (hasParsedLinksData && (this.parsedLinksData.map((link) => (h("li", null, h("tnw-anchor", { class: `${this.baseClass}__links-item`, text: link.text, href: link.url, newTab: link.newTab, textDecoration: 'none', color: this.textColor, size: 'xs' }))))))));
    }
    render() {
        const FooterTag = this.useDivAsContainer ? 'div' : 'footer';
        return (h(Host, { key: '0cbe941431cf3e9fad74efedbe498ba60bd73fc8', class: this.getHostClasses() }, h(FooterTag, { key: '37722a82cf278da2cc1d6050168c6cfdb8fe5f25', class: !this.disableInternalContainer ? 'container' : '', part: 'container' }, [
            this.renderCopyrights(),
            this.renderLinks(),
        ])));
    }
    get el() { return this; }
}, [1, "tnw-copyrights-footer", {
        "startYear": [2, "start-year"],
        "endYear": [2, "end-year"],
        "useCurrentYearAsStartYear": [4, "use-current-year-as-start-year"],
        "useCurrentYearAsEndYear": [4, "use-current-year-as-end-year"],
        "organizationName": [1, "organization-name"],
        "organizationNameColor": [1, "organization-name-color"],
        "preText": [1, "pre-text"],
        "postText": [1, "post-text"],
        "textColor": [1, "text-color"],
        "backgroundColor": [1, "background-color"],
        "borderTopColor": [1, "border-top-color"],
        "centerContent": [4, "center-content"],
        "disableInternalContainer": [4, "disable-internal-container"],
        "useDivAsContainer": [4, "use-div-as-container"],
        "linksData": [1, "links-data"],
        "useCustomLinks": [4, "use-custom-links"],
        "linksLength": [2, "links-length"],
        "parsedLinksData": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-copyrights-footer", "tnw-anchor", "tnw-icon", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-copyrights-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwCopyrightsFooter$1);
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