/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-dd363b95.js';
import { a as state } from './p-1b00fef8.js';
import { i as isNotEmptyString } from './p-80d80a0e.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-accordion-group.tsx` file.
 *
validateProps([this.singleExpand]);
 *
 * GENERATED USING `npm run g:components-validations tnw-accordion-group`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "singleExpand",
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

const TnwAccordionGroup$1 = /*@__PURE__*/ proxyCustomElement(class TnwAccordionGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.singleExpand = false;
    }
    componentWillLoad() {
        validateProps([this.singleExpand]);
    }
    /**
     * Handles the `accordionToggle` event triggered by child components.
     */
    handleToggleEvent(event) {
        const { id: accordionId, expanded } = event.detail;
        if (this.singleExpand) {
            // Collapse all other accordion items and toggle the clicked one
            const updatedState = Object.assign({}, state.expandedItems);
            Object.keys(updatedState).forEach((key) => {
                updatedState[key] = key === accordionId ? expanded : false;
            });
            state.expandedItems = updatedState;
        }
        else {
            // Toggle only the current accordion item
            state.expandedItems = Object.assign(Object.assign({}, state.expandedItems), { [accordionId]: expanded });
        }
    }
    render() {
        return (h(Host, { key: '0edd9744769ba31bda8780e947c9176a256db69a' }, h("slot", { key: '507aa838ce837d4c5b809c66f9a70b17724a2844' })));
    }
    get el() { return this; }
}, [1, "tnw-accordion-group", {
        "singleExpand": [4, "single-expand"]
    }, [[0, "accordionToggled", "handleToggleEvent"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-accordion-group"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-accordion-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwAccordionGroup$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TnwAccordionGroup = TnwAccordionGroup$1;
const defineCustomElement = defineCustomElement$1;

export { TnwAccordionGroup, defineCustomElement };

//# sourceMappingURL=tnw-accordion-group.js.map