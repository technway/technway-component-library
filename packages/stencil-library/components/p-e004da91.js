/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-dd363b95.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, g as generateRandomId } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet, h as fontFamilyStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$4 } from './p-b2b7ed74.js';
import { d as defineCustomElement$3 } from './p-912d4f82.js';
import { d as defineCustomElement$2 } from './p-205792e6.js';
import { d as defineCustomElement$1 } from './p-42809605.js';

const baseClass = `${GLOBAL_PREFIX}-newsletter-form`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    box-sizing: border-box;
}

form {
    display: flex;
    align-items: stretch;
    width: 100%;
}

tnw-input {
    width: 100%;
}

tnw-input::part(input) {
    height: 100%;
    padding: 20px 150px 20px 19px !important;
}

/**
 * Primary Variant
 */
:host(.${baseClass}--primary) {
    gap: 10px;
}

/**
 * Secondary Variant
 */
:host(.${baseClass}--secondary) {
    position: relative;
    min-width: 250px;
}
:host(.${baseClass}--secondary) tnw-button {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-newsletter-form.tsx` file.
 *
validateProps([this.borderRadius, this.buttonLabel, this.enableButtonSlot, this.formAction, this.formAttributes, this.formMethod, this.inputId, this.inputPlaceholder, this.successMessage, this.theme, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-newsletter-form`
 */
function validateProps(propsValues) {
    const props = [
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
            "name": "enableButtonSlot",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "formAction",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "formAttributes",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "formMethod",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "inputId",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "inputPlaceholder",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "successMessage",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "theme",
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
            "name": "variant",
            "type": [
                "primary",
                "secondary"
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

const TnwNewsletterForm = /*@__PURE__*/ proxyCustomElement(class TnwNewsletterForm extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-newsletter-form`;
        this.finalInputId = undefined;
        this.buttonLabel = 'Subscribe';
        this.inputPlaceholder = 'Enter your email';
        this.successMessage = 'Thanks for subscribing!';
        this.borderRadius = 'default';
        this.variant = 'primary';
        this.theme = 'primary';
        this.enableButtonSlot = false;
        this.inputId = undefined;
        this.formAction = undefined;
        this.formMethod = undefined;
        this.formAttributes = undefined;
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
                fontFamilyStyleSheet,
                this.componentStyles
            ];
        }
    }
    componentWillLoad() {
        this.setInputId();
        validateProps([this.borderRadius, this.buttonLabel, this.enableButtonSlot, this.formAction, this.formAttributes, this.formMethod, this.inputId, this.inputPlaceholder, this.successMessage, this.theme, this.variant]);
    }
    setInputId() {
        if (isNotEmptyString(this.inputId)) {
            this.finalInputId = this.inputId;
        }
        else {
            this.finalInputId = generateRandomId(this.baseClass);
        }
    }
    getHostClasses() {
        return [
            this.baseClass,
            `${this.baseClass}--${this.variant}`,
        ].filter(Boolean).join(' ').trim();
    }
    /**
     * Parse the given attributes string into a key-value pair object.
     * The given string is expected to be in the format "key1=value1; key2=value2" or "key1; key2=value2".
     * If the format is invalid, an empty object is returned and a warning is logged to the console.
     * @param attributes the string to be parsed
     * @returns a key-value pair object containing the parsed attributes
     */
    parseAttributes(attributes) {
        if (attributes === undefined)
            return {};
        try {
            return attributes
                .split(';')
                .filter(attr => attr.includes('='))
                .reduce((acc, attr) => {
                const [key, value] = attr.split('=').map(item => item.trim());
                acc[key] = value;
                return acc;
            }, {});
        }
        catch (_a) {
            console.warn('Invalid formAttributes format. Expected format: "key1=value1; key2=value2".');
            return {};
        }
    }
    renderInput() {
        return (h("tnw-input", { placeholder: this.inputPlaceholder, type: 'email', inputId: this.finalInputId, label: this.inputPlaceholder, borderRadius: this.borderRadius, isRequired: true, isLabelSrOnly: true, appearance: "outlined", part: 'input' }));
    }
    renderButton() {
        if (this.enableButtonSlot) {
            return h("slot", { name: 'button' });
        }
        return (h("tnw-button", { label: this.buttonLabel, borderRadius: this.borderRadius, appearance: 'solid', appearanceColor: this.theme, part: 'button' }));
    }
    render() {
        const parsedFormAttributes = this.parseAttributes(this.formAttributes);
        return (h(Host, { key: 'b748cd4938ecbceacd1bdc55e5e236b961b84af5', class: this.getHostClasses() }, h("form", Object.assign({ key: '615d444acc4e33cc0ff6a6394782081fd4efc69a', action: this.formAction, method: this.formMethod }, parsedFormAttributes), this.renderInput(), this.renderButton())));
    }
    get el() { return this; }
}, [1, "tnw-newsletter-form", {
        "buttonLabel": [1, "button-label"],
        "inputPlaceholder": [1, "input-placeholder"],
        "successMessage": [1, "success-message"],
        "borderRadius": [1, "border-radius"],
        "variant": [1],
        "theme": [1],
        "enableButtonSlot": [4, "enable-button-slot"],
        "inputId": [1, "input-id"],
        "formAction": [1, "form-action"],
        "formMethod": [1, "form-method"],
        "formAttributes": [1, "form-attributes"],
        "finalInputId": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-newsletter-form", "tnw-alert", "tnw-button", "tnw-input", "tnw-label"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-newsletter-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwNewsletterForm);
            }
            break;
        case "tnw-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tnw-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tnw-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "tnw-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { TnwNewsletterForm as T, defineCustomElement as d };

//# sourceMappingURL=p-e004da91.js.map