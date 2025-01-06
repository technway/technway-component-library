/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-dd363b95.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, g as generateRandomId, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { c as createStore } from './p-8a7995fd.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet } from './p-9bc88248.js';
import { s as sanitizeInput, c as containsSQLInjectionPatterns } from './p-664fd6b2.js';
import { d as defineCustomElement$3 } from './p-61d7eae9.js';
import { d as defineCustomElement$2 } from './p-95b9069c.js';

const baseClass = `${GLOBAL_PREFIX}-textarea`;
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

.${baseClass} {
  min-height: 50px;
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

.${baseClass}--resize-none {
  resize: none;
}
.${baseClass}--resize-horizontal {
  resize: horizontal;
}
.${baseClass}--resize-vertical {
  resize: vertical;
}
.${baseClass}--resize-both {
  resize: both;
}

.${baseClass}--disabled {
  opacity: 0.7;
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
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-textarea.tsx` file.
 *
validateProps([this.appearance, this.autoComplete, this.borderRadius, this.cols, this.disabled, this.helpText, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.placeholder, this.resize, this.rows, this.sanitizeTextarea, this.textareaId, this.value]);
 *
 * GENERATED USING `npm run g:components-validations tnw-textarea`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "appearance",
            "type": [
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
            "name": "cols",
            "type": [
                "number"
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
            "name": "placeholder",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "resize",
            "type": [
                "both",
                "horizontal",
                "none",
                "vertical"
            ],
            "isRequired": false
        },
        {
            "name": "rows",
            "type": [
                "number"
            ],
            "isRequired": false
        },
        {
            "name": "sanitizeTextarea",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "textareaId",
            "type": [
                "string"
            ],
            "isRequired": false
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

const TnwTextarea$1 = /*@__PURE__*/ proxyCustomElement(class TnwTextarea extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.textareaChanged = createEvent(this, "textareaChanged", 7);
        this.validationFailed = createEvent(this, "validationFailed", 7);
        this.baseClass = `${GLOBAL_PREFIX}-textarea`;
        /**
         * Handles the textarea change event.
         *
         * @param event - The textarea change event.
         *
         * This method performs the following actions:
         * 1. Retrieves the textarea element from the event target.
         * 2. Extracts the value from the textarea element.
         * 3. Validates the extracted value. If the sanitizeTextarea prop is set to true, the value is sanitized.
         * 4. Updates the store with the new value.
         * 5. Emits the `textareaChanged` event with the new value.
         * 6. Sets the textarea element's value to the validated value.
         */
        this.handleTextareaOnChange = (event) => {
            const textarea = event.target;
            const value = textarea.value;
            this.setStore(value);
            const validatedValue = this.sanitizeValue(value);
            console.log("validatedValue ", validatedValue);
            this.textareaChanged.emit(validatedValue);
            textarea.value = this.sanitizeValue(validatedValue);
        };
        /**
         * Handles the input event on the textarea element.
         *
         * @param event - The input event triggered by the user.
         *
         * This method performs the following actions:
         * 1. Retrieves the textarea element from the event target.
         * 2. Extracts the value from the textarea element.
         * 3. Updates the store with the new value. It validates the textarea dynamically and displays alerts if necessary.
         *    The value isn't sanitized even if the sanitizeTextarea prop is set to true.
         *    It's sanitized only when the input change event is triggered.
         */
        this.handleTextareaOnInput = (event) => {
            const textarea = event.target;
            const value = textarea.value;
            this.setStore(value, false);
        };
        this.store = createStore({
            textareaValue: this.value,
            alertMessage: this.helpText,
            alertType: undefined,
            isInvalid: false,
            uniqueId: undefined,
        });
        this.label = undefined;
        this.textareaId = undefined;
        this.placeholder = undefined;
        this.appearance = 'outlined';
        this.isLabelSrOnly = undefined;
        this.name = '';
        this.value = '';
        this.isRequired = false;
        this.maxlength = undefined;
        this.minlength = undefined;
        this.rows = 3;
        this.cols = undefined;
        this.disabled = false;
        this.autoComplete = '';
        this.helpText = '';
        this.resize = 'vertical';
        this.borderRadius = 'default';
        this.sanitizeTextarea = false;
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
                this.componentStyles
            ];
        }
        this.setUniqueId();
    }
    componentWillLoad() {
        validateProps([this.appearance, this.autoComplete, this.borderRadius, this.cols, this.disabled, this.helpText, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.placeholder, this.resize, this.rows, this.sanitizeTextarea, this.textareaId, this.value]);
        /**
         * Initialize the store with the initial value.
         */
        this.setStore(this.value);
    }
    /**
     * Sets a unique ID for the textarea element.
     *
     * This method checks if `textareaId` is a non-empty string. If it is,
     * it stores `textareaId` as `uniqueId` in the store. Otherwise, it
     * generates a random ID and stores it as `uniqueId`.
     */
    setUniqueId() {
        if (isNotEmptyString(this.textareaId)) {
            this.store.set('uniqueId', this.textareaId);
        }
        else {
            this.store.set('uniqueId', generateRandomId(this.baseClass));
        }
    }
    /**
     * Sets the store values for the textarea component.
     *
     * @param value - The value to be set in the store. Optional.
     * @param sanitizeValue - A flag indicating whether the value should be sanitized. Optional.
     *
     * This method attempts to set the store value and resets any alert messages or validation states.
     * If an error occurs during this process, it sets the appropriate alert messages and validation states,
     * and emits a validationFailed event with the textarea ID and error message.
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
            console.log('Validation error detected:', error.message);
            const errorMsg = error.message || this.helpText;
            this.store.set('alertMessage', errorMsg);
            this.store.set('alertType', 'danger');
            this.store.set('isInvalid', true);
            this.validationFailed.emit({ textareaId: this.uniqueId, error: errorMsg });
        }
    }
    /**
     * Sanitizes the textarea value based on the provided parameters.
     *
     * @param value - The textarea value to be sanitized. Defaults to the value from the store.
     * @param sanitizeValue - A boolean flag indicating whether to sanitize the textarea value. Defaults to true.
     * @returns The sanitized or original textarea value based on the sanitizeValue flag.
     */
    sanitizeValue(value = this.store.get("textareaValue"), sanitizeValue = true) {
        const validatedValue = sanitizeValue && this.sanitizeTextarea
            ? sanitizeInput(value) :
            value;
        return validatedValue;
    }
    /**
     * Validates the textarea value based on various criteria such as SQL injection patterns,
     * pattern mismatch, minimum length, and maximum length.
     *
     * @param value - The textarea value to be validated.
     * @param sanitizeValue - A boolean indicating whether the value should be sanitized before validation.
     *
     * @throws {Error} If the textarea contains SQL injection patterns.
     * @throws {Error} If the textarea is shorter than the minimum length.
     * @throws {Error} If the textarea is longer than the maximum length.
     */
    validateTextarea(value, sanitizeValue) {
        const validatedValue = this.sanitizeValue(value, sanitizeValue) || '';
        // Check for SQL injection patterns
        if (containsSQLInjectionPatterns(validatedValue)) {
            console.log('SQL injection pattern detected:', validatedValue);
            throw new Error('Invalid SQL patterns detected.');
        }
        // Check for minLength violation
        if (this.minlength && validatedValue.length < this.minlength) {
            throw new Error(`Text is too short. Minimum length is "${this.minlength}" characters.`);
        }
        // check for maxLength violation
        if (this.maxlength && validatedValue.length > this.maxlength) {
            throw new Error(`Text is too long. Maximum length is "${this.maxlength}" characters.`);
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
        this.validateTextarea(validatedValue, sanitizeValue);
        this.store.set('textareaValue', validatedValue);
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
    getTextareaClasses() {
        const { baseClass, appearance, disabled, resize } = this;
        const alertType = this.store.get('alertType');
        return [
            baseClass,
            `${baseClass}--${appearance}`,
            disabled ? `${baseClass}--disabled` : '',
            `${baseClass}--resize-${resize}`,
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
        return (h(Host, { key: 'e9d93432b491c5fded85d186cc5b0332c779eed3' }, this.renderLabel(), h("textarea", Object.assign({ key: '28c2b287f6d441fcf1bcfa002b2b90c30c172fdf', class: this.getTextareaClasses(), id: this.uniqueId, name: this.name, required: this.isRequired, placeholder: this.placeholder, maxlength: this.maxlength, minlength: this.minlength, rows: this.rows, cols: this.cols, autocomplete: this.autoComplete, disabled: this.disabled, value: this.store.get('textareaValue') }, this.getAriaAttributes(), { onInput: this.handleTextareaOnInput, onChange: this.handleTextareaOnChange, part: "textarea" })), this.renderAlert() || this.renderHelpText()));
    }
    get el() { return this; }
}, [1, "tnw-textarea", {
        "label": [1],
        "textareaId": [1, "textarea-id"],
        "placeholder": [1],
        "appearance": [1],
        "isLabelSrOnly": [4, "is-label-sr-only"],
        "name": [1],
        "value": [1],
        "isRequired": [4, "is-required"],
        "maxlength": [2],
        "minlength": [2],
        "rows": [2],
        "cols": [2],
        "disabled": [4],
        "autoComplete": [1, "auto-complete"],
        "helpText": [1, "help-text"],
        "resize": [1],
        "borderRadius": [1, "border-radius"],
        "sanitizeTextarea": [4, "sanitize-textarea"],
        "store": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-textarea", "tnw-alert", "tnw-label"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-textarea":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwTextarea$1);
            }
            break;
        case "tnw-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tnw-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const TnwTextarea = TnwTextarea$1;
const defineCustomElement = defineCustomElement$1;

export { TnwTextarea, defineCustomElement };

//# sourceMappingURL=tnw-textarea.js.map