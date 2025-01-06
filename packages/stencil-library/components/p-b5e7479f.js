/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, F as Fragment, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, d as getClassNames, e as getExtendedAppearanceClass, c as getBorderRadiusClass } from './p-80d80a0e.js';

const baseClass = `${GLOBAL_PREFIX}-button`;
const elementClass = `${baseClass}__el`;
const styles = `
* {
    box-sizing: border-box;
}

:host {
    --${baseClass}-fw: var(--tnw-fw-500);
    --${baseClass}-ff: var(--tnw-font-text);
    --${baseClass}-spacing: var(--tnw-spacing-xs);
    display: inline-flex;
    transition: all 0.2s ease-in-out;
}

/* - States - */
:host(.${baseClass}--disabled) {
    opacity: 0.7;
    cursor: not-allowed;
}

/* - Sizes - */
:host(.${baseClass}--xs) {
    --${baseClass}-p: 3px 6px;
    --${baseClass}-fs: var(--tnw-fs-2xs);
}
:host(.${baseClass}--sm) {
    --${baseClass}-p: 5px 10px;
    --${baseClass}-fs: var(--tnw-fs-xs);
}
:host(.${baseClass}--md) {
    --${baseClass}-p: 12px 24px;
    --${baseClass}-fs: var(--tnw-fs-text);
}
:host(.${baseClass}--lg) {
    --${baseClass}-p: 16px 32px;
    --${baseClass}-fs: var(--tnw-fs-sm);
}
:host(.${baseClass}--xl) {
    --${baseClass}-p: 20px 40px;
    --${baseClass}-fs: var(--tnw-fs-md);
}
@media only screen and (max-width: 567px) {
    :host(.${baseClass}--md) {
        --${baseClass}-p: 10px 20px;
    }
}
@media only screen and (max-width: 1024px) {
    :host(.${baseClass}--xl) {
        --${baseClass}-fs: var(--tnw-fs-sm);
        --${baseClass}-p: 14px 28px;
    }
    :host(.${baseClass}--lg) {
        --${baseClass}-p: 17px 34px;
    }
}

/* - Hover Effects - */
:host(.${baseClass}--hoverEffect-scale-down:hover) {
    transform: scale(0.97);
}
:host(.${baseClass}--hoverEffect-scale-up:hover) {
    transform: scale(1.02);
}
:host(.${baseClass}--hoverEffect-contrast:hover) {
    filter: contrast(1.1);       
}
:host(.${baseClass}--hoverEffect-opacity:hover) {
    opacity: 0.9;
}

/* - Hovers - */
:host(.${baseClass}--hover-solid-primary:hover) {
    background-color: var(--tnw-primary-color);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-primary:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-secondary:hover) {
    background-color: var(--tnw-secondary-color);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-secondary:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-black:hover) {
    background-color: var(--tnw-black);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-black:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-solid-white:hover) {
    background-color: var(--tnw-white);
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-solid-white:hover) tnw-icon {
    fill: var(--tnw-primary-color);
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-solid-inverse:hover) {
    background-color: var(--tnw-background-color-inverse);
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-solid-inverse:hover) tnw-icon {
    fill: var(--tnw-text-color-inverse);
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-solid-auto:hover) {
    background-color: var(--tnw-background-color);
    color: var(--tnw-text-color);
}
:host(.${baseClass}--hover-solid-auto:hover) tnw-icon {
    fill: var(--tnw-text-color);
    color: var(--tnw-text-color);
}

:host(.${baseClass}--hover-outlined-primary:hover) {
    border-width: var(--tnw-primary-sm);
    border-style: solid;
    border-color: var(--tnw-primary-color);
    background: none;
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-outlined-primary:hover) tnw-icon {
    fill: var(--tnw-primary-color);
    color: var(--tnw-primary-color);
}
:host(.${baseClass}--hover-outlined-secondary:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-secondary-color);
    background: none;
    color: var(--tnw-secondary-color);
}
:host(.${baseClass}--hover-outlined-secondary:hover) tnw-icon {
    fill: var(--tnw-secondary-color);
    color: var(--tnw-secondary-color);
}
:host(.${baseClass}--hover-outlined-black:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-black);
    background: none;
    color: var(--tnw-black);
}
:host(.${baseClass}--hover-outlined-black:hover) tnw-icon {
    fill: var(--tnw-black);
    color: var(--tnw-black);
}
:host(.${baseClass}--hover-outlined-white:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-white);
    background: none;
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-outlined-white:hover) tnw-icon {
    fill: var(--tnw-white);
    color: var(--tnw-white);
}
:host(.${baseClass}--hover-outlined-inverse:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-border-color-inverse);
    background: none;
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-outlined-inverse:hover) tnw-icon {
    fill: var(--tnw-text-color-inverse);
    color: var(--tnw-text-color-inverse);
}
:host(.${baseClass}--hover-outlined-auto:hover) {
    border-width: var(--tnw-border-sm);
    border-style: solid;
    border-color: var(--tnw-border-color);
    background: none;
    color: var(--tnw-text-color);
}
:host(.${baseClass}--hover-outlined-auto:hover) tnw-icon {
    fill: var(--tnw-text-color);
    color: var(--tnw-text-color);
}

.${elementClass} {
    background: none;
    border: 0;
    outline-color: transparent;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--${baseClass}-spacing);
    font-weight: var(--${baseClass}-fw);
    font-size: var(--${baseClass}-fs);
    font-family: var(--${baseClass}-ff);
    color: inherit;
    cursor: pointer;
}
.${elementClass}--has-padding {
    padding: var(--${baseClass}-p);
}

a {
    text-decoration: none;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-button.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disabled, this.hoverAppearance, this.hoverAppearanceColor, this.href, this.label, this.newTab, this.size, this.type]);
 *
 * GENERATED USING `npm run g:components-validations tnw-button`
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
                "danger",
                "info",
                "inverse",
                "light",
                "primary",
                "secondary",
                "success",
                "warning",
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
            "name": "disabled",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "hoverAppearance",
            "type": [
                "none",
                "outlined",
                "solid"
            ],
            "isRequired": false
        },
        {
            "name": "hoverAppearanceColor",
            "type": [
                "auto",
                "black",
                "inverse",
                "primary",
                "secondary",
                "white"
            ],
            "isRequired": false
        },
        {
            "name": "href",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "label",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "newTab",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "size",
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
            "name": "type",
            "type": [
                "button",
                "submit"
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

const TnwButton = /*@__PURE__*/ proxyCustomElement(class TnwButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-button`;
        /**
         * Specifies the button type.
         */
        this.type = 'button';
        /**
         * Defines the appearance color of the button.
         */
        this.appearanceColor = 'primary';
        /**
         * Specifies the appearance color of the button.
         */
        this.appearance = 'solid';
        /**
         * Determines the size of the button.
         */
        this.size = 'md';
        /**
         * Specifies the hover appearance color for the button.
         */
        this.hoverAppearance = 'none';
        /**
         * Specifies the hover appearance color color for the button color.
         */
        this.hoverAppearanceColor = 'primary';
        /**
         * If `true`, the link will open in a new tab. Only relevant when `href` is provided.
         */
        this.newTab = false;
        /**
         * Specifies whether the button is disabled.
         */
        this.disabled = false;
        /**
         * Specifies the border radius of the button.
         */
        this.borderRadius = 'default';
        this.renderAnchor = () => (h("a", { class: this.getButtonClasses(), href: this.disabled ? undefined : this.href, target: this.newTab ? "_blank" : undefined, rel: this.newTab ? "noopener noreferrer" : undefined, "aria-disabled": this.disabled ? 'true' : undefined, part: 'button' }, this.renderButtonContent()));
        this.renderButtonElement = () => (h("button", { class: this.getButtonClasses(), type: this.type, disabled: this.disabled !== false ? true : undefined, part: 'button' }, this.renderButtonContent()));
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disabled, this.hoverAppearance, this.hoverAppearanceColor, this.href, this.label, this.newTab, this.size, this.type]);
    }
    getHostClasses() {
        const { baseClass, appearanceColor, appearance, size, hoverAppearance, hoverAppearanceColor, disabled } = this;
        const classesArray = [size];
        return [
            baseClass,
            disabled ? `${baseClass}--disabled` : '',
            hoverAppearance !== 'none' ? `${baseClass}--hover-${hoverAppearance}-${hoverAppearanceColor}` : ``,
            getClassNames(classesArray, baseClass),
            getExtendedAppearanceClass(appearance, appearanceColor),
            getBorderRadiusClass(this.borderRadius),
        ].filter(Boolean).join(' ').trim();
    }
    getButtonClasses() {
        const { baseClass, appearance } = this;
        const elClassBase = `${baseClass}__el`;
        return [
            elClassBase,
            appearance !== 'none' ? `${elClassBase}--has-padding` : ``,
        ].join(' ').trim();
    }
    renderButtonContent() {
        return (h(Fragment, null, h("slot", { name: "icon-start" }), isNotEmptyString(this.label) ? this.label : h("slot", null), h("slot", { name: "icon-end" })));
    }
    render() {
        return (h(Host, { key: '831ac1441da3fcb0bad13aef51bf1fb22c1d0a7f', class: this.getHostClasses() }, isNotEmptyString(this.href) ?
            this.renderAnchor() :
            this.renderButtonElement()));
    }
    get el() { return this; }
}, [1, "tnw-button", {
        "label": [1],
        "type": [1],
        "appearanceColor": [1, "appearance-color"],
        "appearance": [1],
        "size": [1],
        "hoverAppearance": [1, "hover-appearance"],
        "hoverAppearanceColor": [1, "hover-appearance-color"],
        "href": [1],
        "newTab": [4, "new-tab"],
        "disabled": [4],
        "borderRadius": [1, "border-radius"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-button"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwButton);
            }
            break;
    } });
}
defineCustomElement();

export { TnwButton as T, defineCustomElement as d };

//# sourceMappingURL=p-b5e7479f.js.map