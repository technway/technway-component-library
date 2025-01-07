/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, g as generateRandomId, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet } from './p-20eedb96.js';
import { c as createStore } from './p-c039142c.js';
import { s as sanitizeInput, c as containsSQLInjectionPatterns } from './p-664fd6b2.js';
import { d as defineCustomElement$2 } from './p-a256c866.js';
import { d as defineCustomElement$1 } from './p-29b34b17.js';

const baseClass = `${GLOBAL_PREFIX}-input`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  display: flex;
  flex-direction: column;
  gap: var(--${baseClass}-gap);
  --${baseClass}-padding: 10px;
  --${baseClass}-gap: 8px;
  --tnw-input-success: var(--tnw-success-color);
  --tnw-input-danger: var(--tnw-danger-color);
  --tnw-input-warning: var(--tnw-warning-color);
  --tnw-input-info: var(--tnw-info-color);
  --${baseClass}-pl-c: var(--tnw-placeholder-color);
  --${baseClass}-pl-foc-c: var(--tnw-placeholder-color);
  --${baseClass}-font: var(--tnw-font-text);
}

::-webkit-input-placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
::-moz-placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
:-ms-input-placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
::placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
:focus::placeholder {
  color: var(--tnw-input-placeholder-focus-color, var(--${baseClass}-pl-foc-c));
}

.${baseClass}--none {
  border: 0;
}

.${baseClass}--outlined {
  background: none;
  outline-width: var(--tnw-border-sm);
  outline-style: solid;
  outline-color: var(--tnw-border-color);
  border: 0;
  padding: var(--${baseClass}-padding) calc(var(--${baseClass}-padding) * 1.5);
  background: none;
}
.${baseClass}--outlined:focus {
  outline-color: var(--tnw-primary-color);
}

.${baseClass}--underlined {
  border: 0;
  border-bottom: var(--tnw-border-sm) solid var(--tnw-border-color);
  outline-color: transparent;
  padding-bottom: var(--${baseClass}-padding);
  background: none;
}
.${baseClass}--underlined:focus,
.${baseClass}--underlined:focus-within,
.${baseClass}--underlined:focus-visible {
  border-bottom-color: var(--tnw-primary-color);
}
.${baseClass}--underlined:focus-visible {
  outline-style: none;
}

.${baseClass}--success {
  outline-color: var(--tnw-input-success);
  border-bottom-color: var(--tnw-primary-success);
}
.${baseClass}--success:focus,
.${baseClass}--success:focus-within,
.${baseClass}--success:focus-visible {
  outline-color: var(--tnw-input-success);
  border-bottom-color: var(--tnw-primary-success);
}

.${baseClass}--danger {
  outline-color: var(--tnw-input-danger);
  border-bottom-color: var(--tnw-primary-danger);
}
.${baseClass}--danger:focus,
.${baseClass}--danger:focus-within,
.${baseClass}--danger:focus-visible {
  outline-color: var(--tnw-input-danger);
  border-bottom-color: var(--tnw-primary-danger);
}

.${baseClass}--warning {
  outline-color: var(--tnw-input-warning);
  border-bottom-color: var(--tnw-primary-warning);
}
.${baseClass}--warning:focus,
.${baseClass}--warning:focus-within,
.${baseClass}--warning:focus-visible {
  outline-color: var(--tnw-input-warning);
  border-bottom-color: var(--tnw-primary-warning);
}

.${baseClass}--info {
  outline-color: var(--tnw-input-info);
  border-bottom-color: var(--tnw-primary-info);
}
.${baseClass}--info:focus,
.${baseClass}--info:focus-within,
.${baseClass}--info:focus-visible {
  outline-color: var(--tnw-input-info);
  border-bottom-color: var(--tnw-primary-info);
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-input.tsx` file.
 *
validateProps([this.appearance, this.autoComplete, this.borderRadius, this.disabled, this.helpText, this.inputId, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.pattern, this.placeholder, this.sanitizeInput, this.type, this.value]);
 *
 * GENERATED USING `npm run g:components-validations tnw-input`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "appearance",
            "type": [
                "none",
                "outlined",
                "underlined"
            ],
            "isRequired": false
        },
        {
            "name": "autoComplete",
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
            "name": "disabled",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "helpText",
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
            "name": "isLabelSrOnly",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "isRequired",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "label",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "maxlength",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "minlength",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "name",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "pattern",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "placeholder",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "sanitizeInput",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "type",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "value",
            "type": [
                "string"
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

const TnwInput = /*@__PURE__*/ proxyCustomElement(class TnwInput extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.inputChanged = createEvent(this, "inputChanged", 7);
        this.validationFailed = createEvent(this, "validationFailed", 7);
        this.baseClass = `${GLOBAL_PREFIX}-input`;
        this.store = createStore({
            inputValue: this.value,
            alertMessage: this.helpText,
            alertType: undefined,
            isInvalid: false,
            uniqueId: undefined,
        });
        /**
         * Defines the appearance of the input.
         */
        this.appearance = 'outlined';
        /**
         * The name of the input field.
         */
        this.name = '';
        /**
         * The initial value of the input.
         */
        this.value = '';
        /**
         * Marks the input as required.
         */
        this.isRequired = false;
        /**
         * A regex pattern to validate the input.
         */
        this.pattern = '';
        /**
         * The autocomplete setting for the input.
         */
        this.autoComplete = 'off';
        /**
         * Disables the input if set to true.
         */
        this.disabled = false;
        /**
         * The help text providing additional information about the input.
         */
        this.helpText = '';
        /**
         * The border radius of the input.
         */
        this.borderRadius = 'default';
        /**
         * Determines whether the input value should be sanitized during change events to prevent SQL injection attacks.
         * If set to `true`, the input will be sanitized before being validated.
         * If set to `false`, the input will still undergo validation but without sanitization.
         */
        this.sanitizeInput = false;
        /**
         * Handles the input change event.
         *
         * @param event - The input change event.
         *
         * This method performs the following actions:
         * 1. Retrieves the input element from the event target.
         * 2. Extracts the value from the input element.
         * 3. Validates the extracted value. If the sanitizeInput prop is set to true, the value is sanitized.
         * 4. Updates the store with the new value.
         * 5. Emits the `inputChanged` event with the new value.
         * 6. Sets the input element's value to the validated value.
         */
        this.handleInputOnChange = (event) => {
            const input = event.target;
            const value = input.value;
            const validatedValue = this.sanitizeValue(value);
            this.setStore(value);
            this.inputChanged.emit(validatedValue);
            input.value = this.sanitizeValue(validatedValue);
        };
        /**
         * Handles the input event on the input element.
         *
         * @param event - The input event triggered by the user.
         *
         * This method performs the following actions:
         * 1. Retrieves the input element from the event target.
         * 2. Extracts the value from the input element.
         * 3. Updates the store with the new value. It validates the input dynamically and displays alerts if necessary.
         *    The value isn't sanitized even if the sanitizeInput prop is set to true.
         *    It's sanitized only when the input change event is triggered.
         */
        this.handleInputOnInput = (event) => {
            const input = event.target;
            const value = input.value;
            this.setStore(value, false);
        };
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
        this.setUniqueId();
    }
    componentWillLoad() {
        validateProps([this.appearance, this.autoComplete, this.borderRadius, this.disabled, this.helpText, this.inputId, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.pattern, this.placeholder, this.sanitizeInput, this.type, this.value]);
        /**
         * Initialize the store with the initial value.
         */
        this.setStore(this.value);
    }
    /**
     * Sets a unique ID for the input element.
     *
     * This method checks if `inputId` is a non-empty string. If it is,
     * it stores `inputId` as `uniqueId` in the store. Otherwise, it
     * generates a random ID and stores it as `uniqueId`.
     */
    setUniqueId() {
        if (isNotEmptyString(this.inputId)) {
            this.store.set('uniqueId', this.inputId);
        }
        else {
            this.store.set('uniqueId', generateRandomId(this.baseClass));
        }
    }
    /**
     * Sets the store values for the input component.
     *
     * @param value - The value to be set in the store. Optional.
     * @param sanitizeValue - A flag indicating whether the value should be sanitized. Optional.
     *
     * This method attempts to set the store value and resets any alert messages or validation states.
     * If an error occurs during this process, it sets the appropriate alert messages and validation states,
     * and emits a validationFailed event with the input ID and error message.
     *
     * @throws Will set an error message in the store and emit a validationFailed event if an error occurs.
     */
    setStore(value, sanitizeValue) {
        try {
            this.setStoreValue(value, sanitizeValue);
            this.store.set('alertMessage', '');
            this.store.set('alertType', undefined);
            this.store.set('isInvalid', false);
        }
        catch (error) {
            const errorMsg = error.message || this.helpText;
            this.store.set('alertMessage', errorMsg);
            this.store.set('alertType', 'danger');
            this.store.set('isInvalid', true);
            this.validationFailed.emit({ inputId: this.uniqueId, error: errorMsg });
        }
    }
    /**
     * Sanitizes the input value based on the provided parameters.
     *
     * @param value - The input value to be sanitized. Defaults to the value from the store.
     * @param sanitizeValue - A boolean flag indicating whether to sanitize the input value. Defaults to true.
     * @returns The sanitized or original input value based on the sanitizeValue flag.
     */
    sanitizeValue(value = this.store.get("inputValue"), sanitizeValue = true) {
        const validatedValue = sanitizeValue && this.sanitizeInput
            ? sanitizeInput(value) :
            value;
        return validatedValue;
    }
    /**
     * Validates the input value based on various criteria such as SQL injection patterns,
     * pattern mismatch, minimum length, and maximum length.
     *
     * @param value - The input value to be validated.
     * @param sanitizeValue - A boolean indicating whether the value should be sanitized before validation.
     *
     * @throws {Error} If the input contains SQL injection patterns.
     * @throws {Error} If the input does not match the required pattern.
     * @throws {Error} If the input is shorter than the minimum length.
     * @throws {Error} If the input is longer than the maximum length.
     */
    validateInput(value, sanitizeValue) {
        const validatedValue = this.sanitizeValue(value, sanitizeValue) || '';
        // Check for SQL injection patterns
        if (containsSQLInjectionPatterns(validatedValue)) {
            throw new Error('Invalid SQL patterns detected.');
        }
        // Check for pattern mismatch
        if (this.pattern && !new RegExp(this.pattern).test(validatedValue)) {
            throw new Error('Input does not match the required pattern.');
        }
        // Check for minLength violation
        if (this.minlength && validatedValue.length < this.minlength) {
            throw new Error(`Input is too short. Minimum length is "${this.minlength}" characters.`);
        }
        // check for maxLength violation
        if (this.maxlength && validatedValue.length > this.maxlength) {
            throw new Error(`Input is too long. Maximum length is "${this.maxlength}" characters.`);
        }
    }
    /**
     * Sets the value in the store after sanitizing and validating it.
     *
     * @param value - The value to be set in the store. If not provided, defaults to an empty string.
     * @param sanitizeValue - A flag indicating whether the value should be sanitized before setting it in the store.
     */
    setStoreValue(value, sanitizeValue) {
        const validatedValue = this.sanitizeValue(value, sanitizeValue) || '';
        this.validateInput(validatedValue, sanitizeValue);
        this.store.set('inputValue', validatedValue);
    }
    get uniqueId() {
        return this.store.get('uniqueId');
    }
    getAriaAttributes() {
        return {
            'aria-invalid': this.store.get('isInvalid') ? 'true' : null,
            'aria-describedby': [
                isNotEmptyString(this.store.get('alertMessage')) ? `${this.uniqueId}-${this.store.get('alertType')}` : null,
                isNotEmptyString(this.helpText) ? `${this.uniqueId}-help` : null,
            ].filter(Boolean).join(' '),
            'aria-labelledby': isNotEmptyString(this.label) ? this.uniqueId : null,
        };
    }
    getInputClasses() {
        const { baseClass, appearance } = this;
        const alertType = this.store.get('alertType');
        return [
            baseClass,
            `${baseClass}--${appearance}`,
            isNotEmptyString(alertType) ? `${baseClass}--${alertType}` : ``,
            getBorderRadiusClass(this.borderRadius),
        ].filter(Boolean).join(' ').trim();
    }
    renderLabel() {
        if (!isNotEmptyString(this.label)) {
            return null;
        }
        return (h("tnw-label", { class: this.isLabelSrOnly ? 'sr-only' : '', text: this.label, htmlFor: this.uniqueId, isSrOnly: this.isLabelSrOnly, part: 'label' }));
    }
    renderAlert() {
        const alertMessage = this.store.get('alertMessage');
        const alertType = this.store.get('alertType');
        if (!isNotEmptyString(alertMessage)) {
            return null;
        }
        return (h("tnw-alert", { message: alertMessage, appearance: alertType, alertId: `${this.uniqueId}-${alertType}`, part: "alert" }));
    }
    renderHelpText() {
        if (!isNotEmptyString(this.helpText)) {
            return null;
        }
        return (h("tnw-alert", { message: this.helpText, alertId: `${this.uniqueId}-help`, part: "help-text" }));
    }
    render() {
        return (h(Host, { key: 'adb6d178f6ac4918ff5cfa149eae2f097522413a' }, this.renderLabel(), h("input", Object.assign({ key: '3aae4b3dca4e4e896a1e6a2f500dca9032068fc3', class: this.getInputClasses(), id: this.uniqueId, type: this.type, name: this.name, value: this.store.get('inputValue'), required: this.isRequired, placeholder: this.placeholder, maxlength: this.maxlength, minlength: this.minlength, pattern: this.pattern, autocomplete: this.autoComplete, disabled: this.disabled }, this.getAriaAttributes(), { onInput: this.handleInputOnInput, onChange: this.handleInputOnChange, part: 'input' })), this.renderAlert() || this.renderHelpText()));
    }
    get el() { return this; }
}, [1, "tnw-input", {
        "label": [1],
        "inputId": [1, "input-id"],
        "type": [1],
        "placeholder": [1],
        "appearance": [1],
        "isLabelSrOnly": [4, "is-label-sr-only"],
        "name": [1],
        "value": [1],
        "isRequired": [4, "is-required"],
        "maxlength": [2],
        "minlength": [2],
        "pattern": [1],
        "autoComplete": [1, "auto-complete"],
        "disabled": [4],
        "helpText": [1, "help-text"],
        "borderRadius": [1, "border-radius"],
        "sanitizeInput": [4, "sanitize-input"],
        "store": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-input", "tnw-alert", "tnw-label"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwInput);
            }
            break;
        case "tnw-alert":
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

export { TnwInput as T, defineCustomElement as d };

//# sourceMappingURL=p-4831c0ac.js.map