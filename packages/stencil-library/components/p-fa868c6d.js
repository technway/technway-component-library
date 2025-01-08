/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, g as generateRandomId } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet, h as fontFamilyStyleSheet } from './p-20eedb96.js';
import { d as defineCustomElement$4 } from './p-a256c866.js';
import { d as defineCustomElement$3 } from './p-2b0400b3.js';
import { d as defineCustomElement$2 } from './p-a6c3ed1e.js';
import { d as defineCustomElement$1 } from './p-29b34b17.js';

const baseClass = `${GLOBAL_PREFIX}-subscription-form`;
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
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-subscription-form.tsx` file.
 *
validateProps([this.borderRadius, this.buttonLabel, this.enableButtonSlot, this.formAction, this.formAttributes, this.formMethod, this.inputId, this.inputPlaceholder, this.successMessage, this.theme, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-subscription-form`
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

const TnwSubscriptionForm = /*@__PURE__*/ proxyCustomElement(class TnwSubscriptionForm extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-subscription-form`;
        /**
         * The label for the subscribe button. If `enableButtonSlot` is true, this prop will be ignored.
         */
        this.buttonLabel = 'Subscribe';
        /**
         * The placeholder for the email input
         */
        this.inputPlaceholder = 'Enter your email';
        /**
         * The message to display after successful subscription
         */
        this.successMessage = 'Thanks for subscribing!';
        /**
         * The border radius for the component. Set for both input and button
         */
        this.borderRadius = 'default';
        /**
         * The variant for the component
         * - Primary: The button is next to the input
         * - Secondary: The button is inside the input
         */
        this.variant = 'primary';
        /**
         * The theme for the component. It controls the color scheme of the component.
         */
        this.theme = 'primary';
        /**
         * Whether to enable the button slot. If true, the buttonLabel prop will be ignored.
         */
        this.enableButtonSlot = false;
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
        return (h(Host, { key: '7b9ec668a30faf6d6e66e5af9c56092880d77d66', class: this.getHostClasses() }, h("form", Object.assign({ key: '99a3ba729dcf67cfe3231b9f6db27fb7b747493d', action: this.formAction, method: this.formMethod }, parsedFormAttributes), this.renderInput(), this.renderButton())));
    }
    get el() { return this; }
}, [1, "tnw-subscription-form", {
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
    const components = ["tnw-subscription-form", "tnw-alert", "tnw-button", "tnw-input", "tnw-label"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-subscription-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwSubscriptionForm);
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

export { TnwSubscriptionForm as T, defineCustomElement as d };

//# sourceMappingURL=p-fa868c6d.js.map