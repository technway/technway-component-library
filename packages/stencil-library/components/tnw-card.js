/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, n as getAppearanceClass, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet } from './p-9bc88248.js';
import { d as defineCustomElement$5 } from './p-b5e7479f.js';
import { d as defineCustomElement$4 } from './p-e9a15164.js';
import { d as defineCustomElement$3 } from './p-a50feca5.js';
import { d as defineCustomElement$2 } from './p-215cb154.js';

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
    
:host(.${baseClass}--start) {
    align-items: start;
    justify-content: start;
}
:host(.${baseClass}--horizontal-center) {
    align-items: center;
}
:host(.${baseClass}--vertical-center) {
    justify-content: center;
}
:host(.${baseClass}--end) {
    align-items: end;
    justify-content: end;
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

.${contentClass}-heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--${baseClass}-gap-2xs);
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-card.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.buttonLabel, this.description, this.enableContentSlot, this.enableImageSlot, this.heading, this.imageAlt, this.imageSrc, this.itemsAlignment, this.largerImage, this.layout, this.orderContentFirst, this.padding, this.spacing, this.subheading, this.textAlignment, this.useGlassmorphismEffect]);
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
            "name": "buttonLabel",
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
         * Controls the alignment of the card's content.
         */
        this.textAlignment = 'start';
        /**
         * Controls the spacing between elements inside the card.
         */
        this.spacing = 'sm';
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
         * If `true`, the image will be displayed at a larger size, not be equally split with the content.
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
        validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.buttonLabel, this.description, this.enableContentSlot, this.enableImageSlot, this.heading, this.imageAlt, this.imageSrc, this.itemsAlignment, this.largerImage, this.layout, this.orderContentFirst, this.padding, this.spacing, this.subheading, this.textAlignment, this.useGlassmorphismEffect]);
    }
    getHostClasses() {
        const { baseClass, appearanceColor, appearance, borderRadius, useGlassmorphismEffect, itemsAlignment, layout, padding, spacing, largerImage } = this;
        return [
            baseClass,
            `${baseClass}--${layout}`,
            isNotEmptyString(itemsAlignment) && itemsAlignment !== "center" ? `${baseClass}--${itemsAlignment}` : ``,
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
        const { baseClass } = this;
        const contentClass = `${baseClass}__content`;
        return [
            contentClass,
            `${contentClass}-${this.textAlignment}`,
        ].filter(Boolean).join(' ').trim();
    }
    renderImage() {
        if (this.enableImageSlot) {
            return (h("div", { class: `${this.baseClass}__image`, part: 'image-container' }, h("slot", { name: 'image' })));
        }
        if (isNotEmptyString(this.imageSrc)) {
            return (h("div", { class: `${this.baseClass}__image`, part: 'image' }, h("tnw-image", { src: this.imageSrc, alt: this.heading || this.imageAlt, BorderRadius: this.borderRadius, part: 'image' })));
        }
        return null;
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
        return (h("tnw-button", { label: this.buttonLabel, borderRadius: this.borderRadius, part: 'button' }));
    }
    renderContent() {
        if (this.enableContentSlot) {
            return (h("div", { class: this.getContentClasses(), part: 'content' }, h("slot", { name: 'content' })));
        }
        return (h("div", { class: this.getContentClasses(), part: 'content' }, h("div", { class: `${this.baseClass}__content-heading` }, this.renderHeading(), this.renderSubheading()), this.renderDescription(), this.renderButton()));
    }
    render() {
        return (h(Host, { key: '61cd42f300a76b806252178342b8123fae374e18', class: this.getHostClasses() }, this.orderContentFirst
            && this.renderContent(), this.renderImage(), !this.orderContentFirst
            && this.renderContent()));
    }
    get el() { return this; }
}, [1, "tnw-card", {
        "imageSrc": [1, "image-src"],
        "imageAlt": [1, "image-alt"],
        "heading": [1],
        "subheading": [1],
        "description": [1],
        "buttonLabel": [1, "button-label"],
        "textAlignment": [1, "text-alignment"],
        "itemsAlignment": [1, "items-alignment"],
        "spacing": [1],
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
    const components = ["tnw-card", "tnw-button", "tnw-heading", "tnw-image", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwCard$1);
            }
            break;
        case "tnw-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
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

const TnwCard = TnwCard$1;
const defineCustomElement = defineCustomElement$1;

export { TnwCard, defineCustomElement };

//# sourceMappingURL=tnw-card.js.map