/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-dd363b95.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, g as generateRandomId, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { c as colorStyleSheet } from './p-9bc88248.js';
import { s as setItemExpanded, a as state } from './p-1b00fef8.js';
import { d as defineCustomElement$4 } from './p-63ff45e8.js';
import { d as defineCustomElement$3 } from './p-5a064db7.js';
import { d as defineCustomElement$2 } from './p-6191d268.js';

const baseClass = `${GLOBAL_PREFIX}-accordion`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    /**
     * @prop --tnw-accordion-gap: The gap between accordion header and body.
     * @prop-default: var(--tnw-spacing-xs)
     */
    gap: var(--${baseClass}-gap, var(--tnw-spacing-xs));
}

:host(.${baseClass}--hasPadding) {
    /**
     * @prop --tnw-accordion-padding: The accordion padding.
     * @prop-default: var(--tnw-spacing-xs) calc(var(--tnw-spacing-xs) * 2)
     */
    padding: var(--${baseClass}-padding, var(--tnw-spacing-xs) calc(var(--tnw-spacing-xs) * 2));
}

h3 {
    padding: 0;
    margin: 0;
}

/* Appearance & Variants Styles */
:host(.${baseClass}--outlined) {
    border-width: 1px;
    border-style: solid;
}
:host(.${baseClass}--outlined-primary) {
    border-color: var(--tnw-primary-color);
}
:host(.${baseClass}--outlined-secondary) {
    border-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--outlined-auto) {
    border-color: var(--tnw-border-color);
}
:host(.${baseClass}--outlined-light) {
    border-color: var(--tnw-border-color-opacity);
}
:host(.${baseClass}--outlined-inverse) {
    border-color: var(--tnw-border-color-inverse);
}
:host(.${baseClass}--outlined-black) {
    border-color: var(--tnw-black);
}
:host(.${baseClass}--outlined-white) {
    border-color: var(--tnw-white);
}

:host(.${baseClass}--underlined) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
:host(.${baseClass}--underlined-primary) {
    border-bottom-color: var(--tnw-primary-color);
}
:host(.${baseClass}--underlined-secondary) {
    border-bottom-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--underlined-auto) {
    border-bottom-color: var(--tnw-border-color);
}
:host(.${baseClass}--underlined-light) {
    border-bottom-color: var(--tnw-border-color-opacity);
}
:host(.${baseClass}--underlined-inverse) {
    border-bottom-color: var(--tnw-border-color-inverse);
}
:host(.${baseClass}--underlined-black) {
    border-bottom-color: var(--tnw-black);
}
:host(.${baseClass}--underlined-white) {
    border-bottom-color: var(--tnw-white);
}

:host(.${baseClass}--solid-primary) {
    background-color: var(--tnw-primary-color);
}
:host(.${baseClass}--solid-secondary) {
    background-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--solid-auto) {
    background-color: var(--tnw-background-color);
}
:host(.${baseClass}--solid-light) {
    background-color: var(--tnw-background-color-100);
}
:host(.${baseClass}--solid-inverse) {
    background-color: var(--tnw-background-color-inverse);
}
:host(.${baseClass}--solid-black) {
    background-color: var(--tnw-black);
}
:host(.${baseClass}--solid-white) {
    background-color: var(--tnw-white);
}

tnw-button {
    width: 100%;
}

.${baseClass}__header-button {
    display: flex;
    align-items: center;

    /**
     * @prop --tnw-accordion-header-gap: The gap between accordion header title and expand icon.
     * @prop-default: var(--tnw-spacing-2xs)
     */
    gap: var(--${baseClass}-header-gap, var(--tnw-spacing-2xs));
}

.${baseClass}__expand-icon {
    /**
     * @prop --tnw-accordion-transition-delay: The delay of the expanding accordion transition.
     * @prop-default: 0.25s
     */
    transition: var(--${baseClass}-transition-delay, 0.25s) transform ease-in-out;
}
.${baseClass}__expand-icon--rotated {
    /**
     * @prop --tnw-accordion-icon-rotation: The rotation angle of the icon when the accordion is expanded.
     * @prop-default: -180deg
     */
    transform: rotate(var(--${baseClass}-item-icon-rotation, -180deg));
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-accordion.tsx` file.
 *
validateProps([this.accordionId, this.appearance, this.appearanceColor, this.borderRadius, this.color, this.content, this.disableExpandIconRotate, this.enableCustomExpandIcon, this.expand, this.heading]);
 *
 * GENERATED USING `npm run g:components-validations tnw-accordion`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "accordionId",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "appearance",
            "type": [
                "none",
                "outlined",
                "solid",
                "transparent",
                "underlined"
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
            "name": "color",
            "type": [
                "auto",
                "black",
                "gray100",
                "gray200",
                "gray300",
                "gray400",
                "gray500",
                "gray600",
                "gray700",
                "gray800",
                "gray900",
                "inverse",
                "light",
                "placeholder",
                "primary",
                "secondary",
                "white"
            ],
            "isRequired": false
        },
        {
            "name": "content",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "disableExpandIconRotate",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "enableCustomExpandIcon",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "expand",
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

const TnwAccordion$1 = /*@__PURE__*/ proxyCustomElement(class TnwAccordion extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.accordionToggled = createEvent(this, "accordionToggled", 7);
        this.baseClass = `${GLOBAL_PREFIX}-accordion`;
        this.toggleAccordion = () => {
            const newState = !this.isExpanded;
            setItemExpanded(this.uniqueId, newState);
            this.accordionToggled.emit({ id: this.uniqueId, expanded: newState });
        };
        this.handleKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.toggleAccordion();
            }
        };
        this.uniqueId = undefined;
        this.heading = undefined;
        this.content = undefined;
        this.expand = false;
        this.accordionId = undefined;
        this.appearanceColor = 'auto';
        this.color = undefined;
        this.appearance = 'outlined';
        this.enableCustomExpandIcon = false;
        this.disableExpandIconRotate = false;
        this.borderRadius = "default";
        this.initializeStyles();
    }
    connectedCallback() {
        if (typeof state.expandedItems[this.uniqueId] === 'undefined') {
            setItemExpanded(this.uniqueId, this.expand);
        }
        this.setUniqueId();
        this.applyStyles();
    }
    componentWillLoad() {
        validateProps([this.accordionId, this.appearance, this.appearanceColor, this.borderRadius, this.color, this.content, this.disableExpandIconRotate, this.enableCustomExpandIcon, this.expand, this.heading]);
    }
    initializeStyles() {
        var _a;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
        else {
            // Fallback for browsers without CSSStyleSheet support
            const styleEl = document.createElement('style');
            styleEl.textContent = styles;
            (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(styleEl);
        }
    }
    applyStyles() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                colorStyleSheet,
                this.componentStyles
            ];
        }
        else {
            const colorStyleEl = document.createElement('style');
            const componentStyleEl = document.createElement('style');
            if (colorStyleSheet && colorStyleSheet.cssRules) {
                colorStyleEl.textContent = Array.from(colorStyleSheet.cssRules)
                    .map(rule => rule.cssText)
                    .join(' ');
            }
            else if (colorStyleSheet) {
                colorStyleEl.textContent = colorStyleSheet.toString();
            }
            if (this.componentStyles && this.componentStyles.cssRules) {
                componentStyleEl.textContent = Array.from(this.componentStyles.cssRules)
                    .map(rule => rule.cssText)
                    .join(' ');
            }
            this.el.shadowRoot.appendChild(colorStyleEl);
            this.el.shadowRoot.appendChild(componentStyleEl);
        }
    }
    setUniqueId() {
        if (isNotEmptyString(this.accordionId)) {
            this.uniqueId = this.accordionId;
        }
        else {
            this.uniqueId = generateRandomId(this.baseClass);
        }
    }
    /**
     * Determines if the accordion item is expanded by checking the store.
     * If no state exists for the item, it uses the 'expand' prop.
     */
    get isExpanded() {
        return state.expandedItems[this.uniqueId] !== undefined
            ? state.expandedItems[this.uniqueId]
            : this.expand;
    }
    getHostClasses() {
        const { baseClass, appearance, appearanceColor, borderRadius } = this;
        return [
            baseClass,
            /**
             * Add expanded class if the accordion is expanded
             */
            this.isExpanded ? `${baseClass}--expanded` : ``,
            /**
             * Add underlined appearance class if the appearance is underlined
             */
            appearance === 'underlined' ? `${baseClass}--underlined` : '',
            /**
             * Add outlined appearance class if the appearance is outlined
             */
            appearance === 'outlined' ? `${baseClass}--outlined` : '',
            /**
             * Add padding class if the appearance is not none
             */
            appearance !== 'none' ? `${baseClass}--hasPadding` : ``,
            /**
             * Add appearanceColor class if the appearance is not none
             */
            appearance !== 'none' ? `${baseClass}--${appearance}-${appearanceColor}` : ``,
            /**
             * Add border radius class only if the appearance is either solid or outlined
             */
            appearance === "solid" || appearance === 'outlined' ? getBorderRadiusClass(borderRadius) : ``,
        ].filter(Boolean).join(' ').trim();
    }
    getExpandIconClasses() {
        const { baseClass, isExpanded, disableExpandIconRotate } = this;
        const iconBaseClass = `${baseClass}__expand-icon`;
        return [
            iconBaseClass,
            !disableExpandIconRotate && isExpanded ? `${iconBaseClass}--rotated` : ``,
        ].filter(Boolean).join(' ').trim();
    }
    getTextColor() {
        const { color, appearanceColor, appearance } = this;
        if (isNotEmptyString(color)) {
            return color;
        }
        if (appearance === 'solid') {
            switch (appearanceColor) {
                case 'primary':
                    return 'white';
                case 'secondary':
                    return 'white';
                case 'white':
                    return 'black';
                case 'black':
                    return 'white';
                case 'auto':
                    return 'auto';
                case 'inverse':
                    return 'inverse';
                case 'light':
                    return 'black';
                default:
                    return appearanceColor;
            }
        }
        return 'auto';
    }
    renderHeader(buttonId, contentId) {
        return (h("h3", { class: `${this.baseClass}__header`, part: 'header' }, h("tnw-button", { id: buttonId, "aria-expanded": this.isExpanded.toString(), "aria-controls": contentId, onClick: this.toggleAccordion, onKeyDown: this.handleKeyDown, tabindex: "0", appearance: 'none', size: 'sm' }, h("div", { class: `${this.baseClass}__header-button`, part: 'header-button' }, h("div", { class: this.getExpandIconClasses() }, this.enableCustomExpandIcon ? (h("slot", { name: "expand-icon" })) : (h("tnw-icon", { name: 'tnw-chevron-down', hiddenAria: true, color: this.getTextColor(), part: 'header-icon' }))), isNotEmptyString(this.heading) ? (h("tnw-text", { text: this.heading, size: "xs", color: this.getTextColor(), weight: '600', part: 'header-text' })) : (h("slot", { name: "heading" }))))));
    }
    renderBody(buttonId, contentId) {
        return (h("div", { id: contentId, class: `${this.baseClass}__body`, role: "region", hidden: !this.isExpanded, "aria-labelledby": buttonId, part: 'body' }, isNotEmptyString(this.content) ? (h("tnw-text", { text: this.content, size: "xs", color: this.getTextColor() })) : (h("slot", { name: "body" }))));
    }
    render() {
        const buttonId = `${this.uniqueId}-header`;
        const contentId = `${this.uniqueId}-body`;
        return (h(Host, { key: '8886581d8aa4a2d789e64ce36d50676f71d566ed', class: this.getHostClasses() }, this.renderHeader(buttonId, contentId), this.renderBody(buttonId, contentId)));
    }
    get el() { return this; }
}, [1, "tnw-accordion", {
        "heading": [1],
        "content": [1],
        "expand": [516],
        "accordionId": [1, "accordion-id"],
        "appearanceColor": [1, "appearance-color"],
        "color": [1],
        "appearance": [1],
        "enableCustomExpandIcon": [4, "enable-custom-expand-icon"],
        "disableExpandIconRotate": [4, "disable-expand-icon-rotate"],
        "borderRadius": [1, "border-radius"],
        "uniqueId": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-accordion", "tnw-button", "tnw-icon", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwAccordion$1);
            }
            break;
        case "tnw-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tnw-icon":
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

const TnwAccordion = TnwAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { TnwAccordion, defineCustomElement };

//# sourceMappingURL=tnw-accordion.js.map