/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, r as parseJSONAsync, g as generateRandomId, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { b as borderRadiusStyleSheet, e as extendedAppearanceStyleSheet } from './p-9bc88248.js';
import { d as defineCustomElement$3 } from './p-e1633904.js';
import { d as defineCustomElement$2 } from './p-86f498c8.js';

const baseClass = `${GLOBAL_PREFIX}-select`;
const buttonClass = `${baseClass}__button`;
const dropdownClass = `${baseClass}__dropdown`;
const optionClass = `${baseClass}__option`;
const baseStyles = `
* {
    box-sizing: border-box;
}
    
:host {
  --tnw-text-font: var(--tnw-font-text);
  --tnw-select-hover-color: var(--tnw-gray-100);
  --tnw-select-shadow: 0 10px 15px -5px var(--tnw-shadow-color);
  display: inline-block;
  position: relative;
  width: max-content;
}

:host(.${baseClass}--full-width) {
  width: 100%:
}
:host(.${baseClass}--disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}
:host(.${baseClass}--sm) {
  --tnw-select-fs: var(--tnw-fs-2xs);
  --tnw-select-padding-y: 5px;
  --tnw-select-padding-x: 10px;
}
:host(.${baseClass}--md) {
  --tnw-select-fs: var(--tnw-fs-xs);
  --tnw-select-padding-y: 8px;
  --tnw-select-padding-x: 16px;
}
:host(.${baseClass}--lg) {
  --tnw-select-padding-y: 10px;
  --tnw-select-padding-x: 20px;
}
`;
const buttonStyles = `
.${buttonClass} {
  padding: var(--tnw-select-padding-y) var(--tnw-select-padding-x);
  background-color: transparent;
  cursor: pointer;
  border: var(--tnw-border-sm) solid var(--tnw-border-color);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  transition: border-color 0.2s ease-in-out;
  min-width: 100%;
  max-width: 300px;
}
.${buttonClass}-content {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: calc(100% - 20px);
}
.${buttonClass}-label {
  text-transform: capitalize;
  font-family: var(--tnw-font-text);
  font-size: var(--tnw-select-fs);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  font-weight: var(--tnw-fw-500);
}
.${buttonClass}--clicked,
.${buttonClass}:hover {
  border-color: var(--tnw-border-color-focus);
}
`;
const dropdownStyles = `
.${dropdownClass} {
  border: var(--tnw-border-sm) solid var(--tnw-border-color);
  background-color: var(--tnw-background-color);
  position: absolute;
  top: 40px;
  left: 0; 
  z-index: 4;
  min-width: 100%;
  width: max-content;
  width: -moz-max-content;
  max-height: 215px;
  overflow-x: hidden;
  overflow-y: auto;
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 2px 0;
  box-shadow: var(--tnw-select-shadow);
  max-width: 300px;
}
.${dropdownClass}--open {
  display: block;
}
/*.${dropdownClass}::-webkit-scrollbar {
  width: var(--tnw-scrollbar-size);
}
.${dropdownClass}::-webkit-scrollbar-track {
  background-color: transparent;
  border: 0;
}
.${dropdownClass}::-webkit-scrollbar-thumb {
  background-color: var(--tnw-scrollbar-thumb-color);
  border: 0;
}*/
`;
const optionStyles = `
.${optionClass} {
  font-family: var(--tnw-text-font);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding:
    var(--tnw-select-padding-y)
    calc(var(--tnw-select-padding-x) * 2)
    var(--tnw-select-padding-y)
    var(--tnw-select-padding-x);
  transition: background-color 0.2s ease-in-out;
}
.${optionClass}--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.${optionClass}--bordered:not(:last-child) {
  border-bottom: var(--tnw-border-sm) solid var(--tnw-border-color-opacity);
}
.${optionClass}:not(${optionClass}--disabled):hover {
  background-color: var(--tnw-select-hover-color);

}
.${buttonClass}-icon,
.${optionClass}-icon {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.${optionClass}-label {
  font-size: var(--tnw-select-fs);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
}
`;
const styles = baseStyles + buttonStyles + dropdownStyles + optionStyles;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-select.tsx` file.
 *
validateProps([this.accessibilityId, this.borderRadius, this.disabled, this.fullWidth, this.label, this.optionAppearance, this.optionsData, this.size, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-select`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "accessibilityId",
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
            "name": "fullWidth",
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
            "isRequired": false
        },
        {
            "name": "optionAppearance",
            "type": [
                "bordered",
                "standard"
            ],
            "isRequired": false
        },
        {
            "name": "optionsData",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "size",
            "type": [
                "lg",
                "md",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "variant",
            "type": [
                "standard",
                "withIconName",
                "withImage",
                "withStatus",
                "withSvgIcon"
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

const TnwSelect$1 = /*@__PURE__*/ proxyCustomElement(class TnwSelect extends H {
    /**
     * Resets the selected option to the default or placeholder label.
     */
    async resetSelectedOption() {
        this.selectedOption = undefined;
        this.optionSelected.emit(undefined);
    }
    /**
     * Retrieves the currently selected option.
     */
    async getSelectedOption() {
        return this.selectedOption;
    }
    /**
     * Programmatically toggles the dropdown open or closed.
     */
    async toggleDropdown() {
        if (this.disabled)
            return;
        this.isOpen = !this.isOpen;
        this.dropdownToggled.emit({ isOpen: this.isOpen });
        // Focus the first dropdown option when opened
        if (this.isOpen) {
            // requestAnimationFrame ensures the dropdown is rendered before focusing
            requestAnimationFrame(() => {
                var _a;
                const firstOption = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-select-option]:not([aria-disabled="true"])`);
                if (firstOption) {
                    firstOption.focus();
                }
            });
        }
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.optionSelected = createEvent(this, "optionSelected", 7);
        this.dropdownToggled = createEvent(this, "dropdownToggled", 7);
        this.baseClass = `${GLOBAL_PREFIX}-select`;
        this.handleDocumentClickBound = this.handleDocumentClick.bind(this);
        this.parsedOptionsData = [];
        this.isOpen = false;
        this.selectedOption = { label: undefined, value: undefined };
        this.initialWidthSet = false;
        /**
         * The label to display when no option is selected.
         */
        this.label = 'Select an option';
        /**
         * Border radius of the select.
         */
        this.borderRadius = 'default';
        /**
         * Controls the size of the select component.
         * Options are 'sm' (small), 'md' (medium), or 'lg' (large).
         * Default is 'md' (medium).
         */
        this.size = 'md';
        /**
         * If `true`, the select component will be disabled and cannot be interacted with.
         */
        this.disabled = false;
        /**
         * If `true`, the select component will expand to fill the full width of its container.
         * Default is `false`, which means the component will size based on its content.
         */
        this.fullWidth = false;
        /**
         * Specifies the variant of the select component.
         *
         * - `standard`: Default variant without any additional icons or images.
         * - `withIconName`: Variant that includes an icon by name.
         * - `withSvgIcon`: Variant that includes an SVG icon.
         * - `withImage`: Variant that includes an image.
         * - `withStatus`: Variant that includes a status indicator.
         */
        this.variant = 'standard'; // Todo: GroupedOptions, MultiSelect, Searchable
        // Todo: @prop() appearance?: "basic" | "withTitle" | "floatingLabel";
        /**
         * The appearance of the select options. if bordered a border top and bottom will be added to the options.
         */
        this.optionAppearance = 'standard';
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleOptionKeyDown = this.handleOptionKeyDown.bind(this);
    }
    connectedCallback() {
        document.addEventListener('click', this.handleDocumentClickBound);
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                borderRadiusStyleSheet,
                this.variant === "withStatus" ? extendedAppearanceStyleSheet : null,
                this.componentStyles,
            ].filter(Boolean);
        }
    }
    handleOptionsDataChange(newValue) {
        // Only set the initial width once when options are first loaded
        if (newValue.length > 0 && !this.initialWidthSet) {
            requestAnimationFrame(() => {
                var _a;
                const buttonElement = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('[data-select-toggler]');
                if (buttonElement) {
                    this.initialWidth = `${buttonElement.clientWidth}px`;
                    this.initialWidthSet = true;
                }
            });
        }
    }
    async componentWillLoad() {
        this.initSelectId();
        try {
            const parsedData = await parseJSONAsync(this.optionsData);
            this.parsedOptionsData = parsedData;
            validateProps([this.accessibilityId, this.borderRadius, this.disabled, this.fullWidth, this.label, this.optionAppearance, this.optionsData, this.size, this.variant]);
        }
        catch (error) {
            console.error('Error parsing optionsData:', error);
        }
    }
    componentDidLoad() {
        var _a;
        // Calculate initial width after the component is fully loaded
        const buttonElement = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('[data-select-toggler]');
        if (buttonElement && buttonElement.clientWidth) {
            this.initialWidth = `${buttonElement.clientWidth}px`;
        }
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClickBound);
    }
    handleDocumentClick(event) {
        if (!this.el.contains(event.target) && this.isOpen) {
            this.isOpen = false;
            this.dropdownToggled.emit({ isOpen: false });
        }
    }
    setSelectedOption(optionValue) {
        const selected = this.parsedOptionsData.find(opt => opt.value === optionValue);
        if (!selected) {
            this.selectedOption = undefined;
            return;
        }
        this.selectedOption = selected;
    }
    selectOption(option) {
        this.setSelectedOption(option.value);
        this.isOpen = false;
        this.optionSelected.emit(option);
    }
    handleOptionClick(option) {
        if (!option.disabled) {
            this.selectOption(option);
        }
    }
    initSelectId() {
        if (isNotEmptyString(this.accessibilityId)) {
            this.selectId = this.accessibilityId;
        }
        else {
            this.selectId = generateRandomId(this.baseClass);
        }
    }
    // private findNextEnabledOption(currentIndex: number, direction: number): number {
    //   const options = this.parsedOptionsData;
    //   let index = currentIndex + direction;
    //   while (index >= 0 && index < options.length) {
    //     if (!options[index].disabled) return index;
    //     index += direction;
    //   }
    //   return -1;
    // }
    handleOptionKeyDown(event) {
        var _a, _b;
        const options = this.parsedOptionsData;
        const currentFocusedOption = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('li[data-select-option]:focus');
        const currentIndex = currentFocusedOption ?
            options.findIndex(opt => opt.value === currentFocusedOption.dataset.value) : -1;
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (this.isOpen && currentFocusedOption) {
                    // Only select when Enter/Space is pressed
                    const selectedOption = options.find(opt => opt.value === currentFocusedOption.dataset.value);
                    if (selectedOption && !selectedOption.disabled) {
                        this.selectOption(selectedOption);
                    }
                }
                break;
            case 'ArrowDown':
            case 'ArrowUp':
                event.preventDefault();
                const direction = event.key === 'ArrowDown' ? 1 : -1;
                // Find next non-disabled option to focus
                let nextIndex = currentIndex;
                do {
                    nextIndex = (nextIndex + direction + options.length) % options.length;
                } while (options[nextIndex].disabled);
                // Focus the next option without selecting it
                const nextOptionElement = (_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`li[data-select-option][data-value="${options[nextIndex].value}"]`);
                if (nextOptionElement) {
                    nextOptionElement.focus();
                }
                break;
            case 'Escape':
                event.preventDefault();
                this.isOpen = false;
                this.dropdownToggled.emit({ isOpen: false });
                break;
        }
    }
    isOptionSelected(optionValue) {
        var _a, _b, _c;
        if (optionValue === undefined || optionValue === null)
            return false;
        if (((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value) === undefined || ((_b = this.selectedOption) === null || _b === void 0 ? void 0 : _b.value) === null)
            return false;
        return ((_c = this.selectedOption) === null || _c === void 0 ? void 0 : _c.value) === optionValue;
    }
    getHostClasses() {
        return [
            this.baseClass,
            `${this.baseClass}--${this.size}`,
            this.disabled ? `${this.baseClass}--disabled` : '',
            this.fullWidth ? `${this.baseClass}--full-width` : '',
        ].filter(Boolean).join(" ").trim();
    }
    getButtonClasses() {
        return [
            `${this.baseClass}__button`,
            getBorderRadiusClass(this.borderRadius),
            this.isOpen ? `${this.baseClass}__button--clicked` : '',
        ].filter(Boolean).join(" ").trim();
    }
    getDropdownClasses() {
        const dropdownClass = `${this.baseClass}__dropdown`;
        return [
            dropdownClass,
            this.isOpen ? `${dropdownClass}--open` : ``,
            getBorderRadiusClass(this.borderRadius),
        ].filter(Boolean).join(" ").trim();
    }
    getOptionClasses(option) {
        const optionClass = `${this.baseClass}__option`;
        return [
            optionClass,
            `${this.isOptionSelected(option.value) ? `${optionClass}--selected` : ''}`,
            `${this.optionAppearance === 'bordered' ? `${optionClass}--bordered` : ''}`,
            `${option.disabled ? `${optionClass}--disabled` : ''}`,
        ].filter(Boolean).join(" ").trim();
    }
    renderSelectButton() {
        var _a;
        const option = this.selectedOption;
        return (h("button", { class: this.getButtonClasses(), "aria-haspopup": "listbox", "aria-expanded": this.isOpen.toString(), id: `${this.label}-label-${this.selectId}`, "aria-controls": this.selectId, tabIndex: 0, onClick: this.toggleDropdown, role: 'combobox', part: 'button', "data-select-toggler": true }, h("div", { class: `${this.baseClass}__button-content` }, this.variant === 'withIconName' && 'iconName' in option && option.iconName && (h("tnw-icon", { name: option.iconName, size: '2xs' })), this.variant === 'withSvgIcon' && 'svgIcon' in option && option.svgIcon && (h("tnw-icon", { enableSvg: true, size: '2xs' }, h("span", { class: `${this.baseClass}__button-icon`, slot: 'svg', innerHTML: option.svgIcon }))), this.variant === 'withImage' && 'imageSource' in option && option.imageSource && (h("tnw-badge", { variant: 'image', imageSrc: option.imageSource, size: 'sm' })), this.variant === 'withStatus' && 'status' in option && option.status && (h("tnw-badge", { appearanceColor: option.status, appearance: "solid", size: "sm", variant: 'status' })), h("span", { class: `${this.baseClass}__button-label` }, ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.label) || this.label)), h("tnw-icon", { name: 'tnw-chevron-down' })));
    }
    renderSelectOption(option, index) {
        return (h("li", { class: this.getOptionClasses(option), role: "option", "aria-selected": this.isOptionSelected(option.value) ? 'true' : 'false', "aria-disabled": option.disabled ? 'true' : 'false', onClick: () => this.handleOptionClick(option), onKeyDown: this.handleOptionKeyDown, tabIndex: index === 0 ? 0 : -1, part: "option", "data-value": option.value, "data-select-option": true }, this.variant === 'withIconName' && 'iconName' in option && option.iconName && (h("tnw-icon", { name: option.iconName, size: '2xs' })), this.variant === 'withSvgIcon' && 'svgIcon' in option && option.svgIcon && (h("tnw-icon", { enableSvg: true, size: '2xs' }, h("span", { class: `${this.baseClass}__option-icon`, slot: 'svg', innerHTML: option.svgIcon }))), this.variant === 'withImage' && 'imageSource' in option && option.imageSource && (h("tnw-badge", { variant: 'image', imageSrc: option.imageSource, size: 'sm' })), this.variant === 'withStatus' && 'status' in option && option.status && (h("tnw-badge", { appearanceColor: option.status, appearance: "solid", size: "sm", variant: 'status' })), h("span", { class: `${this.baseClass}__option-label` }, option.label)));
    }
    renderSelectDropdown() {
        const options = this.parsedOptionsData;
        return (h("ul", { class: this.getDropdownClasses(), "aria-labelledby": `${this.label}-label-${this.selectId}`, role: "listbox", tabIndex: -1, id: this.selectId, part: 'dropdown', "data-select": true }, options.map((option, index) => (this.renderSelectOption(option, index)))));
    }
    render() {
        return (h(Host, { key: 'a71edf0dbc2dc73cc19297643cac237ae864e347', style: {
                width: this.initialWidth,
            }, class: this.getHostClasses() }, this.renderSelectButton(), this.renderSelectDropdown()));
    }
    get el() { return this; }
    static get watchers() { return {
        "parsedOptionsData": ["handleOptionsDataChange"]
    }; }
}, [1, "tnw-select", {
        "optionsData": [1, "options-data"],
        "label": [1],
        "borderRadius": [1, "border-radius"],
        "size": [1],
        "disabled": [4],
        "fullWidth": [4, "full-width"],
        "accessibilityId": [1, "accessibility-id"],
        "variant": [1],
        "optionAppearance": [1, "option-appearance"],
        "parsedOptionsData": [32],
        "isOpen": [32],
        "selectedOption": [32],
        "selectId": [32],
        "initialWidthSet": [32],
        "resetSelectedOption": [64],
        "getSelectedOption": [64],
        "toggleDropdown": [64]
    }, undefined, {
        "parsedOptionsData": ["handleOptionsDataChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-select", "tnw-badge", "tnw-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwSelect$1);
            }
            break;
        case "tnw-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tnw-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const TnwSelect = TnwSelect$1;
const defineCustomElement = defineCustomElement$1;

export { TnwSelect, defineCustomElement };

//# sourceMappingURL=tnw-select.js.map