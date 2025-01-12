/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, n as getAppearanceClass, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$7 } from './p-aecebc3f.js';
import { d as defineCustomElement$6 } from './p-aa4fbea0.js';
import { d as defineCustomElement$5 } from './p-247f7459.js';
import { d as defineCustomElement$4 } from './p-3d848afd.js';
import { d as defineCustomElement$3 } from './p-fa750891.js';
import { d as defineCustomElement$2 } from './p-b708dbe9.js';

const baseClass = `${GLOBAL_PREFIX}-card`;
const contentClass = `${baseClass}__content`;
const imageClass = `${baseClass}__image`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
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
:host(.${baseClass}--horizontal) {
    flex-direction: row;
    justify-content: space-between;
}
:host(.${baseClass}--horizontal) .${imageClass} {
    height: 100%;
}

:host(.${baseClass}--horizontal.${baseClass}--equal-image) .${imageClass},
:host(.${baseClass}--horizontal.${baseClass}--equal-image) .${contentClass} {
    width: calc(50% - (var(--${baseClass}-gap-lg) / 2)) !important;
}

:host(.${baseClass}--horizontal.${baseClass}--larger-image) .${imageClass} {
    width: calc(55% - (var(--${baseClass}-gap-lg) / 2)) !important;
}
:host(.${baseClass}--horizontal.${baseClass}--larger-image) .${contentClass} {
    width: calc(45% - (var(--${baseClass}-gap-lg) / 2)) !important;
}

@media only screen and (max-width: 567px) {
    :host {
        flex-direction: horizontal;
        justify-content: unset;
    }
    :host(.${baseClass}--horizontal) .${imageClass},
    :host(.${baseClass}--horizontal) .${contentClass} {
        width: 100% !important;
    }
}

:host(.${baseClass}--vertical) {
    flex-direction: column;
}
    
:host(.${baseClass}--items-start) {
    align-items: start;
    justify-content: start;
}
:host(.${baseClass}--items-center) {
    align-items: center;
    justify-content: center;
}
:host(.${baseClass}--items-end) {
    align-items: end;
    justify-content: end;
}
:host(.${baseClass}--horizontal-center) {
    align-items: center;
}
:host(.${baseClass}--vertical-center) {
    justify-content: center;
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

.${contentClass} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--${baseClass}-gap-xs);
}

.${contentClass}--spacing-sm {
    gap: var(--${baseClass}-gap-xs);
}
.${contentClass}--spacing-md {
    gap: var(--${baseClass}-gap-sm);
}
.${contentClass}--spacing-lg {
    gap: var(--${baseClass}-gap-md);
}

.${contentClass}-heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--${baseClass}-gap-2xs);
}
    
.${contentClass}--text-left {
    text-align: left;
}
.${contentClass}--text-right {
    text-align: right;
}
.${contentClass}--text-center {
    text-align: center;
}
.${contentClass}--text-justify {
    text-align: justify;
}
.${contentClass}--text-start {
    text-align: start;
}
.${contentClass}--text-end {
    text-align: end;
}

.${baseClass}__badge-wrapper {
    display: flex;
    gap: var(--${baseClass}-gap-sm);
    align-items: center;
    margin-bottom: var(--${baseClass}-gap-xs);
}
.${baseClass}__date-wrapper {
    display: flex;
    gap: var(--${baseClass}-gap-2xs);
    align-items: center;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-card.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.badgeLabel, this.borderRadius, this.buttonHref, this.buttonLabel, this.buttonRadius, this.contentSpacing, this.date, this.description, this.enableContentSlot, this.enableImageSlot, this.heading, this.imageAlt, this.imageHeight, this.imageSrc, this.itemsAlignment, this.largerImage, this.layout, this.orderContentFirst, this.padding, this.spacing, this.subheading, this.textAlignment, this.useGlassmorphismEffect]);
 *
 * GENERATED USING `npm run g:components-validations tnw-card`
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
            "name": "badgeLabel",
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
            "name": "buttonHref",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "buttonLabel",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "buttonRadius",
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
            "name": "contentSpacing",
            "type": [
                "lg",
                "md",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "date",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "description",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "enableContentSlot",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "enableImageSlot",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "heading",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "imageAlt",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "imageHeight",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "imageSrc",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "itemsAlignment",
            "type": [
                "center",
                "end",
                "start"
            ],
            "isRequired": false
        },
        {
            "name": "largerImage",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "layout",
            "type": [
                "horizontal",
                "vertical"
            ],
            "isRequired": false
        },
        {
            "name": "orderContentFirst",
            "type": [
                "boolean"
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
            "name": "subheading",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "textAlignment",
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
            "name": "useGlassmorphismEffect",
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

const TnwCard$1 = /*@__PURE__*/ proxyCustomElement(class TnwCard extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-card`;
        /**
         * The height of the image. Value should be a valid CSS unit, such as `px`, `em`, auto, or `%`.
         */
        this.imageHeight = '300px';
        /**
         * The border radius applied to the card's button.
         */
        this.buttonRadius = 'default';
        /**
         * Controls the alignment of the card's content.
         */
        this.textAlignment = 'start';
        /**
         * Controls the spacing between image and the contnet.
         */
        this.spacing = 'sm';
        /**
         * Controls the spacing between elements inside the content.
         */
        this.contentSpacing = 'sm';
        /**
         * The appearance color of the card.
         */
        this.appearance = 'none';
        /**
         * The color appearance color of the card, determining the overall color scheme.
         */
        this.appearanceColor = 'auto';
        /**
         * If `true`, the card content will be displayed before the image.
         */
        this.orderContentFirst = false;
        /**
         * Specifies the layout orientation of the card, either 'vertical' or 'horizontal'.
         */
        this.layout = 'vertical';
        /**
         * The border radius applied to the card.
         */
        this.borderRadius = 'default';
        /**
         * If `true`, the card will have a glassmorphism effect applied to its background.
         */
        this.useGlassmorphismEffect = false;
        /**
         * If `true`, the image slot will be visible.
         */
        this.enableImageSlot = false;
        /**
         * If `true`, the heading, subheading, description, and button will not be rendered. Use the `content` slot to provide custom content instead.
         */
        this.enableContentSlot = false;
        /**
         * If `true`, the image will be displayed at a larger size, not be equally split with the content. Used for horizontal layout.
         */
        this.largerImage = false;
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
        validateProps([this.appearance, this.appearanceColor, this.badgeLabel, this.borderRadius, this.buttonHref, this.buttonLabel, this.buttonRadius, this.contentSpacing, this.date, this.description, this.enableContentSlot, this.enableImageSlot, this.heading, this.imageAlt, this.imageHeight, this.imageSrc, this.itemsAlignment, this.largerImage, this.layout, this.orderContentFirst, this.padding, this.spacing, this.subheading, this.textAlignment, this.useGlassmorphismEffect]);
    }
    getHostClasses() {
        const { baseClass, appearanceColor, appearance, borderRadius, useGlassmorphismEffect, itemsAlignment, layout, padding, spacing, largerImage } = this;
        return [
            baseClass,
            `${baseClass}--${layout}`,
            isNotEmptyString(itemsAlignment) && itemsAlignment !== "center" ? `${baseClass}--items-${itemsAlignment}` : ``,
            itemsAlignment === 'center' && layout === 'horizontal' ? `${baseClass}--horizontal-center` : '',
            itemsAlignment === 'center' && layout === 'vertical' ? `${baseClass}--vertical-center` : '',
            largerImage ? `${baseClass}--larger-image` : `${baseClass}--equal-image`,
            `${baseClass}--spacing-${spacing}`,
            appearance !== "none" ? `${baseClass}--padding-${padding}` : ``,
            useGlassmorphismEffect ? `${baseClass}--glassmorphism` : '',
            getAppearanceClass(appearance, appearanceColor),
            getBorderRadiusClass(borderRadius),
        ].filter(Boolean).join(' ').trim();
    }
    getContentClasses() {
        const { baseClass, contentSpacing, textAlignment } = this;
        const contentClass = `${baseClass}__content`;
        return [
            contentClass,
            `${contentClass}--text-${textAlignment}`,
            `${contentClass}--spacing-${contentSpacing}`,
        ].filter(Boolean).join(' ').trim();
    }
    renderImage() {
        if (this.enableImageSlot) {
            return (h("div", { class: `${this.baseClass}__image`, part: 'image-container' }, h("slot", { name: 'image' })));
        }
        if (isNotEmptyString(this.imageSrc)) {
            return (h("div", { class: `${this.baseClass}__image`, part: 'image' }, h("tnw-image", { src: this.imageSrc, alt: this.heading || this.imageAlt, borderRadius: this.borderRadius, part: 'image', width: '100%', height: this.imageHeight, objectFit: 'cover', lazyLoading: true })));
        }
        return null;
    }
    renderDate() {
        if (!isNotEmptyString(this.date)) {
            return h("slot", { name: 'date' });
        }
        return (h("div", { class: `${this.baseClass}__date-wrapper`, part: 'date-wrapper' }, h("tnw-icon", { name: 'tnw-alarm', size: 'xs', appearance: 'none', part: 'date-icon' }), h("tnw-text", { text: this.date, size: "xs", textTag: 'span', weight: '600', part: 'date', widthSize: 'unset', displayMode: 'inline-block' })));
    }
    renderBadge() {
        if (!isNotEmptyString(this.badgeLabel)) {
            return h("slot", { name: 'badge' });
        }
        return (h("tnw-badge", { label: this.badgeLabel, size: "sm", appearance: 'outlined', appearanceColor: 'auto', part: 'badge' }));
    }
    renderHeading() {
        if (!isNotEmptyString(this.heading)) {
            return h("slot", { name: 'heading' });
        }
        return (h("tnw-heading", { text: this.heading, size: "lg", level: 'h3', alignment: this.textAlignment, weight: '600', part: 'heading' }));
    }
    renderSubheading() {
        if (!isNotEmptyString(this.subheading)) {
            return h("slot", { name: 'subheading' });
        }
        return (h("tnw-heading", { text: this.subheading, size: "sm", level: 'h4', alignment: this.textAlignment, part: 'subheading' }));
    }
    renderDescription() {
        if (!isNotEmptyString(this.description)) {
            return h("slot", { name: 'description' });
        }
        return (h("tnw-text", { text: this.description, alignment: this.textAlignment, part: 'description' }));
    }
    renderButton() {
        if (!isNotEmptyString(this.buttonLabel)) {
            return h("slot", { name: 'button' });
        }
        return (h("tnw-button", { label: this.buttonLabel, borderRadius: this.buttonRadius, part: 'button', href: this.buttonHref, hoverEffect: 'contrast' }));
    }
    renderContent() {
        if (this.enableContentSlot) {
            return (h("div", { class: this.getContentClasses(), part: 'content' }, h("slot", { name: 'content' })));
        }
        return (h("div", { class: this.getContentClasses(), part: 'content' }, h("div", { class: `${this.baseClass}__content-heading` }, (this.renderBadge() !== null || this.renderDate() !== null) && (h("div", { class: `${this.baseClass}__badge-wrapper` }, this.renderBadge(), this.renderDate())), this.renderHeading(), this.renderSubheading()), this.renderDescription(), this.renderButton()));
    }
    render() {
        return (h(Host, { key: '6a921b9cf5bf5ef1cf7364a49d99b52ae0ccdec8', class: this.getHostClasses() }, this.orderContentFirst
            && this.renderContent(), this.renderImage(), !this.orderContentFirst
            && this.renderContent()));
    }
    get el() { return this; }
}, [1, "tnw-card", {
        "imageSrc": [1, "image-src"],
        "imageAlt": [1, "image-alt"],
        "imageHeight": [1, "image-height"],
        "heading": [1],
        "subheading": [1],
        "description": [1],
        "buttonLabel": [1, "button-label"],
        "buttonHref": [1, "button-href"],
        "buttonRadius": [1, "button-radius"],
        "date": [1],
        "badgeLabel": [1, "badge-label"],
        "textAlignment": [1, "text-alignment"],
        "itemsAlignment": [1, "items-alignment"],
        "spacing": [1],
        "contentSpacing": [1, "content-spacing"],
        "padding": [1],
        "appearance": [1],
        "appearanceColor": [1, "appearance-color"],
        "orderContentFirst": [4, "order-content-first"],
        "layout": [1],
        "borderRadius": [1, "border-radius"],
        "useGlassmorphismEffect": [4, "use-glassmorphism-effect"],
        "enableImageSlot": [4, "enable-image-slot"],
        "enableContentSlot": [4, "enable-content-slot"],
        "largerImage": [4, "larger-image"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-card", "tnw-badge", "tnw-button", "tnw-heading", "tnw-icon", "tnw-image", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwCard$1);
            }
            break;
        case "tnw-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "tnw-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "tnw-heading":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "tnw-icon":
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

const TnwCard = TnwCard$1;
const defineCustomElement = defineCustomElement$1;

export { TnwCard, defineCustomElement };

//# sourceMappingURL=tnw-card.js.map