/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, F as Fragment, d as Host } from './p-dd363b95.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, n as getAppearanceClass, c as getBorderRadiusClass } from './p-80d80a0e.js';

const baseClass = `${GLOBAL_PREFIX}-contact-banner`;
const contentClass = `${baseClass}__content`;
const headingClass = `${contentClass}-heading`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    --${baseClass}-gradient-from: var(--tnw-background-color-inverse);
    --${baseClass}-gradient-to: var(--tnw-primary-color);
    --${baseClass}-spacing-xs: var(--tnw-spacing-xs);
    --${baseClass}-spacing-sm: var(--tnw-spacing-sm);
    --${baseClass}-spacing-md: var(--tnw-spacing-md);
    --${baseClass}-spacing-lg: var(--tnw-spacing-lg);
    --${baseClass}-spacing-xl: var(--tnw-spacing-xl);
    --${baseClass}-spacing-2xl: var(--tnw-spacing-2xl);
    --${baseClass}-spacing-3xl: var(--tnw-spacing-3xl);
    --${baseClass}-spacing-4xl: var(--tnw-spacing-4xl);
}
:host(.${baseClass}--center) {
    text-align: center;
    align-items: center;
    justify-content: center;
}
:host(.${baseClass}--start) {
    text-align: start;
    align-items: start;
    justify-content: start;
}
:host(.${baseClass}--end) {
    text-align: end;
    align-items: end;
    justify-content: end;
}

:host(.${baseClass}--gradient) {
    background-color: var(--${baseClass}-gradient-from);
    background-image: radial-gradient(
        ellipse at top,
        var(--tnw-contact-banner-gradient-from) 0%,
        var(--tnw-contact-banner-gradient-from) 50%,
        var(--tnw-contact-banner-gradient-to) 100%
    );
}


/* Paddings Block */
:host(.${baseClass}--padding-block-xs) {
    padding-block: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--padding-block-sm) {
    padding-block: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--padding-block-md) {
    padding-block: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--padding-block-lg) {
    padding-block: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--padding-block-xl) {
    padding-block: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--padding-block-2xl) {
    padding-block: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--padding-block-3xl) {
    padding-block: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--padding-block-4xl) {
    padding-block: var(--${baseClass}-spacing-4xl);
}
    
/* Paddings Inline */
:host(.${baseClass}--padding-inline-xs) {
    padding-inline: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--padding-inline-sm) {
    padding-inline: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--padding-inline-md) {
    padding-inline: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--padding-inline-lg) {
    padding-inline: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--padding-inline-xl) {
    padding-inline: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--padding-inline-2xl) {
    padding-inline: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--padding-inline-3xl) {
    padding-inline: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--padding-inline-4xl) {
    padding-inline: var(--${baseClass}-spacing-4xl);
}
    
/* Margins */
:host(.${baseClass}--margin-xs) {
    margin-block: var(--${baseClass}-spacing-xs);
}
:host(.${baseClass}--margin-sm) {
    margin-block: var(--${baseClass}-spacing-sm);
}
:host(.${baseClass}--margin-md) {
    margin-block: var(--${baseClass}-spacing-md);
}
:host(.${baseClass}--margin-lg) {
    margin-block: var(--${baseClass}-spacing-lg);
}
:host(.${baseClass}--margin-xl) {
    margin-block: var(--${baseClass}-spacing-xl);
}
:host(.${baseClass}--margin-2xl) {
    margin-block: var(--${baseClass}-spacing-2xl);
}
:host(.${baseClass}--margin-3xl) {
    margin-block: var(--${baseClass}-spacing-3xl);
}
:host(.${baseClass}--margin-4xl) {
    margin-block: var(--${baseClass}-spacing-4xl);
}

.${contentClass} {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.${headingClass} {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

::slotted([slot="description"]) {
    width: 100%;
    max-width: 600px;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-contact-banner.tsx` file.
 *
validateProps([this.VerticalPadding, this.alignment, this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableContentSlot, this.horizontalPadding, this.margin]);
 *
 * GENERATED USING `npm run g:components-validations tnw-contact-banner`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "VerticalPadding",
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
            "name": "alignment",
            "type": [
                "center",
                "end",
                "start"
            ],
            "isRequired": false
        },
        {
            "name": "appearance",
            "type": [
                "gradient",
                "mixed",
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
            "name": "disableInternalContainer",
            "type": [
                "boolean"
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
            "name": "horizontalPadding",
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

const TnwContactBanner$1 = /*@__PURE__*/ proxyCustomElement(class TnwContactBanner extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-contact-banner`;
        this.appearance = 'solid';
        this.appearanceColor = 'primary';
        this.enableContentSlot = false;
        this.alignment = 'center';
        this.borderRadius = 'default';
        this.margin = 'xl';
        this.horizontalPadding = '2xl';
        this.VerticalPadding = '2xl';
        this.disableInternalContainer = false;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [this.componentStyles];
        }
    }
    componentWillLoad() {
        validateProps([this.VerticalPadding, this.alignment, this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableContentSlot, this.horizontalPadding, this.margin]);
    }
    getHostClasses() {
        const { baseClass, appearance, appearanceColor, alignment, borderRadius, margin, horizontalPadding, VerticalPadding, disableInternalContainer } = this;
        return [
            baseClass,
            !disableInternalContainer ? 'container' : '',
            `${baseClass}--${alignment}`,
            `${baseClass}--margin-${margin}`,
            `${baseClass}--padding-inline-${horizontalPadding}`,
            `${baseClass}--padding-block-${VerticalPadding}`,
            appearance === 'gradient' ? `${baseClass}--gradient` : getAppearanceClass(appearance, appearanceColor),
            getBorderRadiusClass(borderRadius),
        ].filter(Boolean).join(' ').trim();
    }
    render() {
        return (h(Host, { key: 'b064ad607def7ed35ba15ec45ca684e65f462db4', class: this.getHostClasses() }, this.enableContentSlot ?
            h("slot", { name: 'content' })
            : (h(Fragment, null, h("div", { class: `${this.baseClass}__content` }, h("div", { class: `${this.baseClass}__content-heading` }, h("slot", { name: "subtitle" }), h("slot", { name: "title" })), h("slot", { name: "description" })), h("slot", { name: "button" })))));
    }
    get el() { return this; }
}, [1, "tnw-contact-banner", {
        "appearance": [1],
        "appearanceColor": [1, "appearance-color"],
        "enableContentSlot": [4, "enable-content-slot"],
        "alignment": [1],
        "borderRadius": [1, "border-radius"],
        "margin": [1],
        "horizontalPadding": [1, "horizontal-padding"],
        "VerticalPadding": [1, "vertical-padding"],
        "disableInternalContainer": [4, "disable-internal-container"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-contact-banner"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-contact-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwContactBanner$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TnwContactBanner = TnwContactBanner$1;
const defineCustomElement = defineCustomElement$1;

export { TnwContactBanner, defineCustomElement };

//# sourceMappingURL=tnw-contact-banner.js.map