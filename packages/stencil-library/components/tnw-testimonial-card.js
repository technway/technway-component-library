/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, n as getAppearanceClass, c as getBorderRadiusClass, w as generateRandomColor } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$4 } from './p-247f7459.js';
import { d as defineCustomElement$3 } from './p-c8a09d4d.js';
import { d as defineCustomElement$2 } from './p-b708dbe9.js';

const baseClass = `${GLOBAL_PREFIX}-testimonial-card`;
const authorClass = `${baseClass}__author`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;

    --${baseClass}-gap-2xs: var(--tnw-spacing-2xs);
    --${baseClass}-gap-xs: var(--tnw-spacing-sm);
    --${baseClass}-gap-sm: var(--tnw-spacing-md);
    --${baseClass}-gap-md: var(--tnw-spacing-lg);
    --${baseClass}-gap-lg: var(--tnw-spacing-xl);
    --${baseClass}-padding-sm: var(--tnw-spacing-md);
    --${baseClass}-padding-md: var(--tnw-spacing-lg);
    --${baseClass}-padding-lg: var(--tnw-spacing-xl);
}

:host(.${baseClass}--padding-sm) {
    padding: var(--${baseClass}-padding-sm);
}
:host(.${baseClass}--padding-md) {
    padding: var(--${baseClass}-padding-md);
}
:host(.${baseClass}--padding-lg) {
    padding: var(--${baseClass}-padding-lg);
}

:host(.${baseClass}--spacing-sm) {
    gap: var(--${baseClass}-gap-sm);
}
:host(.${baseClass}--spacing-md) {
    gap: var(--${baseClass}-gap-md);
}
:host(.${baseClass}--spacing-lg) {
    gap: var(--${baseClass}-gap-lg);
}

:host(.${baseClass}--glassmorphism) {
    background: linear-gradient(to top, rgba(var(--tnw-background-color-inverse-rgb), 0.025), rgba(var(--tnw-background-color-inverse-rgb), 0)) !important;
}

.${authorClass}-details {
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--${baseClass}-gap-xs);
}

.${authorClass}-role {
    margin-top: 2px;
}

.${authorClass}-photo {
    width: 48px;
    height: 48px;
}
    
.${authorClass}-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-testimonial-card.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.authorName, this.authorPhotoAlt, this.authorPhotoSrc, this.authorRole, this.borderRadius, this.padding, this.spacing, this.text, this.useGlassmorphismEffect, this.useRandomAvatar]);
 *
 * GENERATED USING `npm run g:components-validations tnw-testimonial-card`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "appearance",
            "type": [
                "mixed",
                "none",
                "outlined",
                "solid",
                "transparent"
            ],
            "isRequired": false
        },
        {
            "name": "appearanceColor",
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
            "name": "authorName",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "authorPhotoAlt",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "authorPhotoSrc",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "authorRole",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "borderRadius",
            "type": [
                "2xl",
                "3xl",
                "circle",
                "default",
                "full",
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
                "lg",
                "md",
                "none",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "spacing",
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
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "useGlassmorphismEffect",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "useRandomAvatar",
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

const TnwTestimonialCard$1 = /*@__PURE__*/ proxyCustomElement(class TnwTestimonialCard extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-testimonial-card`;
        /**
         * Controls the spacing between description and author details.
         */
        this.spacing = 'sm';
        /**
         * The padding size for the card.
         */
        this.padding = "sm";
        /**
         * The appearance style of the card.
         */
        this.appearance = 'outlined';
        /**
         * The color appearance color of the card, determining the overall color scheme.
         */
        this.appearanceColor = 'auto';
        /**
         * The border radius applied to the card.
         */
        this.borderRadius = 'default';
        /**
         * If `true`, the card will have a glassmorphism effect applied to its background.
         */
        this.useGlassmorphismEffect = false;
        /**
         * If `true`, a random gradient avatar will be generated when no photo is provided.
         */
        this.useRandomAvatar = false;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                extendedAppearanceStyleSheet,
                borderRadiusStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.appearance, this.appearanceColor, this.authorName, this.authorPhotoAlt, this.authorPhotoSrc, this.authorRole, this.borderRadius, this.padding, this.spacing, this.text, this.useGlassmorphismEffect, this.useRandomAvatar]);
    }
    getHostClasses() {
        const { baseClass, appearanceColor, appearance, borderRadius, useGlassmorphismEffect, padding, spacing } = this;
        return [
            baseClass,
            `${baseClass}--spacing-${spacing}`,
            appearance !== "none" ? `${baseClass}--padding-${padding}` : ``,
            useGlassmorphismEffect ? `${baseClass}--glassmorphism` : '',
            getAppearanceClass(appearance, appearanceColor),
            getBorderRadiusClass(borderRadius),
        ].filter(Boolean).join(' ').trim();
    }
    renderRandomAvatar() {
        if (!this.useRandomAvatar)
            return null;
        const color1 = generateRandomColor();
        const color2 = generateRandomColor();
        return (h("div", { style: {
                background: `linear-gradient(to bottom, ${color1} 0%, ${color2} 100%)`,
            }, class: `${this.baseClass}__author-avatar`, part: "avatar" }));
    }
    renderAuthorDetails() {
        if (!isNotEmptyString(this.authorName))
            return null;
        return (h("div", { class: `${this.baseClass}__author-details`, part: 'author-details' }, isNotEmptyString(this.authorPhotoSrc) ?
            h("tnw-image", { src: this.authorPhotoSrc, alt: this.authorPhotoAlt, BorderRadius: "circle", heightSize: "full", widthSize: "full", objectFit: "cover", class: `${this.baseClass}__author-photo`, part: 'author-photo' })
            :
                this.renderRandomAvatar(), h("div", { class: `${this.baseClass}__author-details-section` }, h("tnw-heading", { level: "h3", size: "sm", weight: "600", text: this.authorName, class: `${this.baseClass}__author-name`, part: 'author-name', textCase: 'capitalize' }), h("tnw-text", { text: this.authorRole, size: "sm", weight: "300", textCase: "capitalize", class: `${this.baseClass}__author-role`, color: 'light', part: 'author-role' }))));
    }
    render() {
        return (h(Host, { key: '4af35977a03d405cdd5780b92117bdb95927c526', class: this.getHostClasses() }, this.renderAuthorDetails(), h("tnw-text", { key: '1feb5c5af26ca5edc5ae655e23bcc28276c7d3bf', text: this.text, class: `${this.baseClass}__description`, part: 'description', lineHeight: '1_75', weight: '300' })));
    }
    get el() { return this; }
}, [1, "tnw-testimonial-card", {
        "authorPhotoSrc": [1, "author-photo-src"],
        "authorPhotoAlt": [1, "author-photo-alt"],
        "authorName": [1, "author-name"],
        "authorRole": [1, "author-role"],
        "text": [1],
        "spacing": [1],
        "padding": [1],
        "appearance": [1],
        "appearanceColor": [1, "appearance-color"],
        "borderRadius": [1, "border-radius"],
        "useGlassmorphismEffect": [4, "use-glassmorphism-effect"],
        "useRandomAvatar": [4, "use-random-avatar"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-testimonial-card", "tnw-heading", "tnw-image", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-testimonial-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwTestimonialCard$1);
            }
            break;
        case "tnw-heading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tnw-image":
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

const TnwTestimonialCard = TnwTestimonialCard$1;
const defineCustomElement = defineCustomElement$1;

export { TnwTestimonialCard, defineCustomElement };

//# sourceMappingURL=tnw-testimonial-card.js.map