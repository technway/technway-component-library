/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, v as getDirectionalAppearanceClass } from './p-80d80a0e.js';
import { a as containerStyleSheet } from './p-20eedb96.js';

const baseClass = `${GLOBAL_PREFIX}-section`;
const contentClass = `${baseClass}__content`;
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
:host(.${baseClass}--glassmorphism) {
    background: linear-gradient(to top, rgba(var(--tnw-background-color-inverse-rgb), 0.025), rgba(var(--tnw-background-color-inverse-rgb), 0)) !important;
}

:host(.${baseClass}--first) {
    padding-top: 0 !important;
    margin-top: 0 !important;
}
:host(.${baseClass}--last) {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
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
}
/* Spacings */
.${contentClass}--spacing-xs {
    gap: var(--${baseClass}-spacing-xs);
}
.${contentClass}--spacing-sm {
    gap: var(--${baseClass}-spacing-sm);
}
.${contentClass}--spacing-md {
    gap: var(--${baseClass}-spacing-md);
}
.${contentClass}--spacing-lg {
    gap: var(--${baseClass}-spacing-lg);
}
.${contentClass}--spacing-xl {
    gap: var(--${baseClass}-spacing-xl);
}

.${contentClass}--start {
    text-align: start;
    align-items: start;
    justify-content: start;
}
.${contentClass}--center {
    text-align: center;
    align-items: center;
    justify-content: center;
}
.${contentClass}--end {
    text-align: end;
    align-items: end;
    justify-content: end;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-section.tsx` file.
 *
validateProps([this.alignment, this.appearance, this.appearanceColor, this.disableInternalContainer, this.isFirstSection, this.isLastSection, this.margin, this.padding, this.spacing, this.useGlassmorphismEffect]);
 *
 * GENERATED USING `npm run g:components-validations tnw-section`
 */
function validateProps(propsValues) {
    const props = [
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
                "mixed",
                "outlined",
                "outlined-block",
                "outlined-bottom",
                "outlined-inline",
                "outlined-left",
                "outlined-right",
                "outlined-top",
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
            "name": "disableInternalContainer",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "isFirstSection",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "isLastSection",
            "type": [
                "boolean"
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
            "name": "spacing",
            "type": [
                "lg",
                "md",
                "sm",
                "xl",
                "xs"
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

const TnwSection$1 = /*@__PURE__*/ proxyCustomElement(class TnwSection extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-section`;
        /**
         * If `true`, the section will have a glassmorphism effect applied to its background.
         */
        this.useGlassmorphismEffect = false;
        /**
         * Specifies the appearance color for the section's appearance.
         */
        this.appearanceColor = 'auto';
        /**
         * If `true`, the section body will be wrapped in a container.
         */
        this.disableInternalContainer = false;
        /**
         * The padding size applied to the section.
         */
        this.padding = 'xl';
        /**
         * The margin size applied to the section.
         */
        this.margin = 'none';
        /**
         * The spacing size between the section slots.
         */
        this.spacing = 'md';
        /**
         * If `true`, the section is the first section on the page, and top padding/margin will not be applied.
         */
        this.isFirstSection = false;
        /**
         * If `true`, the section is the last section on the page, and bottom padding/margin will not be applied.
         */
        this.isLastSection = false;
        /**
         * The alignment of the section content.
         */
        this.alignment = "start";
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                containerStyleSheet,
                this.componentStyles
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.alignment, this.appearance, this.appearanceColor, this.disableInternalContainer, this.isFirstSection, this.isLastSection, this.margin, this.padding, this.spacing, this.useGlassmorphismEffect]);
    }
    getHostClasses() {
        const { baseClass, useGlassmorphismEffect, appearance, appearanceColor, padding, margin, isFirstSection, isLastSection } = this;
        const glassmorphismClass = useGlassmorphismEffect ? `${baseClass}--glassmorphism` : '';
        return [
            baseClass,
            `${baseClass}--padding-block-${padding}`,
            `${baseClass}--margin-${margin}`,
            appearance === 'solid' || appearance === 'outlined' || appearance === 'transparent' ? `${baseClass}--padding-inline-${padding}` : ``,
            isFirstSection ? `${baseClass}--first` : '',
            isLastSection ? `${baseClass}--last` : '',
            glassmorphismClass,
            getDirectionalAppearanceClass(appearance, appearanceColor),
        ]
            .filter(Boolean).join(' ').trim();
    }
    getSectionContentClasses() {
        const { baseClass, disableInternalContainer, spacing, alignment } = this;
        const contentClass = `${baseClass}__content`;
        return [
            contentClass,
            `${contentClass}--spacing-${spacing}`,
            `${contentClass}--${alignment}`,
            !disableInternalContainer ? 'container' : '',
        ].filter(Boolean).join(' ').trim();
    }
    render() {
        return (h(Host, { key: '72d5285c50a9dfb90160ac8b6625a365baeca570', class: this.getHostClasses() }, h("section", { key: '0502be0d1b5ea030bc054fc7937712fe76890b5e', class: this.getSectionContentClasses(), part: 'section' }, h("slot", { key: '95afa7a38207ba1fd6c04580175309d557f0acf4', name: 'header' }), h("slot", { key: '6538d61ba6ffcef47dfecf27b56e698b800fb8cf', name: 'body' }), h("slot", { key: '35c7881bd8874a2d49fe840e47a115d6224ee419', name: 'footer' }))));
    }
    get el() { return this; }
}, [1, "tnw-section", {
        "useGlassmorphismEffect": [4, "use-glassmorphism-effect"],
        "appearance": [1],
        "appearanceColor": [1, "appearance-color"],
        "disableInternalContainer": [4, "disable-internal-container"],
        "padding": [1],
        "margin": [1],
        "spacing": [1],
        "isFirstSection": [4, "is-first-section"],
        "isLastSection": [4, "is-last-section"],
        "alignment": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-section"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-section":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwSection$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TnwSection = TnwSection$1;
const defineCustomElement = defineCustomElement$1;

export { TnwSection, defineCustomElement };

//# sourceMappingURL=tnw-section.js.map