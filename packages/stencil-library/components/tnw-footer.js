/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, F as Fragment, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, r as parseJSONAsync, j as getColorClass } from './p-80d80a0e.js';
import { c as colorStyleSheet, a as containerStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$b } from './p-a256c866.js';
import { d as defineCustomElement$a } from './p-d53cb6f4.js';
import { d as defineCustomElement$9 } from './p-aa4fbea0.js';
import { d as defineCustomElement$8 } from './p-247f7459.js';
import { d as defineCustomElement$7 } from './p-3d848afd.js';
import { d as defineCustomElement$6 } from './p-fa750891.js';
import { d as defineCustomElement$5 } from './p-a6c3ed1e.js';
import { d as defineCustomElement$4 } from './p-29b34b17.js';
import { d as defineCustomElement$3 } from './p-88b8adb7.js';
import { d as defineCustomElement$2 } from './p-b708dbe9.js';

const baseClass = `${GLOBAL_PREFIX}-footer`;
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
    --${baseClass}-spacing-2xl: var(--tnw-spacing-2xl);
    --${baseClass}-spacing-3xl: var(--tnw-spacing-3xl);
    --${baseClass}-spacing-4xl: var(--tnw-spacing-4xl);
}
:host(.${baseClass}--borderTop) {
    border-top-width: 1px;
    border-top-style: solid;
}
:host(.${baseClass}--center) > footer {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.${baseClass}__content {
    display: grid;
    gap: 80px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
    
/* Paddings Block */
.${baseClass}__content--padding-xs {
    padding-block: var(--${baseClass}-spacing-xs);
}
.${baseClass}__content--padding-sm {
    padding-block: var(--${baseClass}-spacing-sm);
}
.${baseClass}__content--padding-md {
    padding-block: var(--${baseClass}-spacing-md);
}
.${baseClass}__content--padding-lg {
    padding-block: var(--${baseClass}-spacing-lg);
}
.${baseClass}__content--padding-xl {
    padding-block: var(--${baseClass}-spacing-xl);
}
.${baseClass}__content--padding-2xl {
    padding-block: var(--${baseClass}-spacing-2xl);
}
.${baseClass}__content--padding-3xl {
    padding-block: var(--${baseClass}-spacing-3xl);
}
.${baseClass}__content--padding-4xl {
    padding-block: var(--${baseClass}-spacing-4xl);
}

/* Margins */
:host(.${baseClass}--margin-top-xs) {
    margin-top: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--margin-top-sm) {
    margin-top: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--margin-top-md) {
    margin-top: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--margin-top-lg) {
    margin-top: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--margin-top-xl) {
    margin-top: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--margin-top-2xl) {
    margin-top: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--margin-top-3xl) {
    margin-top: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--margin-top-4xl) {
    margin-top: var(--${baseClass}-spacing-4xl);
}

tnw-heading {
    margin-bottom: 20px;
}

.${baseClass}__brand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.${baseClass}__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.${baseClass}__subscription-description {
    margin-bottom: 20px;
}

.${baseClass}__socialmedia {
    display: flex;
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
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-footer.tsx` file.
 *
validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.footerData, this.headingColor, this.margin, this.padding, this.textColor]);
 *
 * GENERATED USING `npm run g:components-validations tnw-footer`
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
                "none",
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
            "name": "footerData",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "headingColor",
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
            "name": "margin",
            "type": [
                "2xl",
                "3xl",
                "4xl",
                "lg",
                "md",
                "none",
                "sm",
                "xl",
                "xs"
            ],
            "isRequired": false
        },
        {
            "name": "padding",
            "type": [
                "2xl",
                "3xl",
                "4xl",
                "lg",
                "md",
                "none",
                "sm",
                "xl",
                "xs"
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

const TnwFooter$1 = /*@__PURE__*/ proxyCustomElement(class TnwFooter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-footer`;
        this.parsedFooterData = null;
        /**
         * The background color for the footer.
         */
        this.backgroundColor = 'auto';
        /**
         * The color for the footer border.
         */
        this.borderTopColor = 'auto';
        /**
         * The padding size applied to the footer.
         */
        this.padding = 'xl';
        /**
         * The margin top size applied to the footer.
         */
        this.margin = 'none';
        /**
         * The color for the footer headings.
         */
        this.headingColor = 'auto';
        /**
         * The color for the footer content.
         */
        this.textColor = 'auto';
        /**
         * If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.
         */
        this.disableInternalContainer = false;
        /**
         * Center-align the footer content.
         */
        this.centerContent = false;
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
    async componentWillLoad() {
        if (this.footerData !== undefined) {
            this.parsedFooterData = await parseJSONAsync(this.footerData);
        }
        validateProps([this.backgroundColor, this.borderTopColor, this.centerContent, this.disableInternalContainer, this.footerData, this.headingColor, this.margin, this.padding, this.textColor]);
    }
    getHostClasses() {
        const { baseClass, backgroundColor, centerContent, borderTopColor, margin } = this;
        return [
            baseClass,
            centerContent ? `${baseClass}--center` : ``,
            isNotEmptyString(borderTopColor) || borderTopColor !== 'none' ? `${baseClass}--borderTop` : ``,
            getColorClass('bg', backgroundColor),
            getColorClass('border-top', borderTopColor),
            `${baseClass}--margin-top-${margin}`,
        ].filter(Boolean).join(' ').trim();
    }
    getContentClasses() {
        const { baseClass, padding } = this;
        const contentClass = `${baseClass}__content`;
        return [
            contentClass,
            `${contentClass}--padding-${padding}`,
        ].filter(Boolean).join(' ').trim();
    }
    renderHeading(heading) {
        if (!heading)
            return null;
        return (h("tnw-heading", { text: heading, level: 'h3', weight: '600', size: 'sm', color: this.headingColor }));
    }
    renderBrand(brand, socialmedia) {
        if (!brand || (!brand.logo && !brand.name)) {
            return (h("div", { class: `${this.baseClass}__column ${this.baseClass}__brand`, part: "brand" }, h("slot", { name: "brand" }), this.renderSocialMedia(socialmedia)));
        }
        return (h("div", { class: `${this.baseClass}__column ${this.baseClass}__brand`, part: "brand" }, brand.logo && h("tnw-image", { src: brand.logo, alt: `${brand.name || 'Brand'} logo` }), this.renderSocialMedia(socialmedia)));
    }
    renderLinks(links) {
        var _a;
        if (!links || !links.heading) {
            return null;
        }
        return (h("div", { class: `${this.baseClass}__column ${this.baseClass}__links`, part: "links" }, (links === null || links === void 0 ? void 0 : links.heading) && this.renderHeading(links.heading), h("ul", { class: `${this.baseClass}__list` }, (!links || (!((_a = links.items) === null || _a === void 0 ? void 0 : _a.length) && !(links === null || links === void 0 ? void 0 : links.useCustomLinks) && links.linksLength < 1)) ? (h("slot", { name: "links" })) : ((links === null || links === void 0 ? void 0 : links.useCustomLinks) ? (Array.from({ length: links.linksLength }, (_, i) => {
            return (h("li", null, h("tnw-text", { class: `${this.baseClass}__list-item`, color: this.textColor }, h("slot", { name: `link-${i + 1}` }))));
        })) : (links.items.map(link => (h("li", null, h("tnw-anchor", Object.assign({ class: `${this.baseClass}__list-item`, href: link.url }, (link.newTab ? { newTab: true } : { newTab: false }), { textDecoration: 'underline', color: this.textColor }), link.label)))))))));
    }
    renderContact(contact) {
        if (!contact || !contact.heading) {
            return null;
        }
        return (h("div", { class: `${this.baseClass}__column ${this.baseClass}__contact`, part: "contact" }, (contact === null || contact === void 0 ? void 0 : contact.heading) && this.renderHeading(contact.heading), h("ul", { class: `${this.baseClass}__list` }, (!contact.email && !contact.phone) ? (h("slot", { name: "contact" })) : (h(Fragment, null, contact.email && (h("li", null, h("tnw-anchor", { class: `${this.baseClass}__list-item`, href: `mailto:${contact.email}`, text: contact.email, newTab: true, textDecoration: 'underline', color: this.textColor }))), contact.phone && (h("li", null, h("tnw-text", { class: `${this.baseClass}__list-item`, text: contact.phone, color: this.textColor }))))))));
    }
    renderSocialMedia(socialmedia) {
        return (h("div", { class: `${this.baseClass}__socialmedia`, part: "socialmedia" }, !(socialmedia === null || socialmedia === void 0 ? void 0 : socialmedia.length)
            ? (h("slot", { name: "socialmedia" })) : (socialmedia.map(icon => (h("tnw-anchor", { href: icon.url, newTab: true, hideNewTabIcon: true, textDecoration: 'none' }, h("tnw-icon", { name: icon.iconName, size: 'md', color: this.textColor })))))));
    }
    renderSubscription(subscription) {
        if (!subscription || !subscription.heading) {
            return null;
        }
        return (h("div", { class: `${this.baseClass}__column ${this.baseClass}__subscription`, style: { gridColumn: "span 2" }, part: "subscription" }, (subscription === null || subscription === void 0 ? void 0 : subscription.heading) &&
            h("tnw-heading", { text: subscription.heading, level: 'h3', weight: '600', size: 'md', color: this.headingColor }), subscription.description &&
            h("tnw-text", { class: `${this.baseClass}__subscription-description`, text: subscription.description, color: this.textColor }), h("tnw-subscription-form", { inputPlaceholder: subscription.placeholder, buttonLabel: subscription.buttonText, variant: 'secondary', borderRadius: 'full' })));
    }
    render() {
        const { parsedFooterData } = this;
        return (h(Host, { key: '0a00b7f6d6d9f654dc57d1e070009d2372062b1e', class: this.getHostClasses() }, h("footer", { key: '290f96b7a49525294583d4dd71457f7114bb1063', class: !this.disableInternalContainer ? 'container' : '', part: "container" }, h("div", { key: '418d615fe21314689c206880c598881aba4398d9', class: this.getContentClasses() }, parsedFooterData !== null ? (h(Fragment, null, this.renderBrand(parsedFooterData.brand, parsedFooterData.socialmedia), this.renderLinks(parsedFooterData.links), this.renderContact(parsedFooterData.contact), this.renderSubscription(parsedFooterData.subscription))) : (h(Fragment, null, h("slot", { name: "brand" }), h("slot", { name: "links" }), h("slot", { name: "contact" }), h("slot", { name: "socialmedia" }), h("slot", { name: "subscription" })))), h("slot", { key: '1bfd8e8410a8e57926ebb28a4b8522b3a84eedcc', name: "copyrights" }))));
    }
    get el() { return this; }
}, [1, "tnw-footer", {
        "backgroundColor": [1, "background-color"],
        "borderTopColor": [1, "border-top-color"],
        "padding": [1],
        "margin": [1],
        "headingColor": [1, "heading-color"],
        "textColor": [1, "text-color"],
        "disableInternalContainer": [4, "disable-internal-container"],
        "centerContent": [4, "center-content"],
        "footerData": [1, "footer-data"],
        "parsedFooterData": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-footer", "tnw-alert", "tnw-anchor", "tnw-button", "tnw-heading", "tnw-icon", "tnw-image", "tnw-input", "tnw-label", "tnw-subscription-form", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwFooter$1);
            }
            break;
        case "tnw-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "tnw-anchor":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "tnw-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "tnw-heading":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "tnw-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "tnw-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "tnw-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "tnw-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tnw-subscription-form":
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

const TnwFooter = TnwFooter$1;
const defineCustomElement = defineCustomElement$1;

export { TnwFooter, defineCustomElement };

//# sourceMappingURL=tnw-footer.js.map