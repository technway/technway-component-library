/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-dd363b95.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, e as getExtendedAppearanceClass, c as getBorderRadiusClass } from './p-80d80a0e.js';

const baseClass = `${GLOBAL_PREFIX}-alert`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    --${baseClass}-font: var(--tnw-font-text);
    --${baseClass}-fs-default: var(--tnw-fs-text);
    display: block;
}

:host(.${baseClass}--hasPadding) {
    padding: var(--${baseClass}-padding, 7px 14px);
}
    
:host(.${baseClass}--auto) {
    font-size: var(--${baseClass}-font-size, var(--${baseClass}-fs-default))
}
:host(.${baseClass}--sm) {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-2xs)) 
}
:host(.${baseClass}--md) {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-xs)) 
}
:host(.${baseClass}--lg) {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-sm)) 
}

.${baseClass} {
    font-family: var(--${baseClass}-font);
    margin: 0;
    padding: 0;
    color: inherit;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-alert.tsx` file.
 *
validateProps([this.alertId, this.appearance, this.appearanceColor, this.borderRadius, this.isHidden, this.message, this.size]);
 *
 * GENERATED USING `npm run g:components-validations tnw-alert`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "alertId",
            "type": [
                "string"
            ],
            "isRequired": true
        },
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
                "danger",
                "info",
                "success",
                "warning"
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
            "name": "isHidden",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "message",
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

const TnwAlert = /*@__PURE__*/ proxyCustomElement(class TnwAlert extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-alert`;
        this.alertId = undefined;
        this.message = undefined;
        this.size = 'sm';
        this.appearance = 'transparent';
        this.appearanceColor = undefined;
        this.isHidden = false;
        this.borderRadius = 'default';
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                this.componentStyles
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.alertId, this.appearance, this.appearanceColor, this.borderRadius, this.isHidden, this.message, this.size]);
    }
    getHostClasses() {
        const { appearanceColor, baseClass, size } = this;
        return [
            `${baseClass}--${size}`,
            this.appearance !== 'none' && this.appearance !== 'transparent' ? `${baseClass}--hasPadding` : ``,
            getExtendedAppearanceClass(this.appearance, appearanceColor),
            getBorderRadiusClass(this.borderRadius),
        ].join(' ');
    }
    render() {
        // If not visible, don't render the component
        if (this.isHidden) {
            return null;
        }
        return (h(Host, { class: this.getHostClasses(), id: this.alertId, role: "alert", "aria-live": "assertive" }, h("p", { class: this.baseClass, part: 'text' }, this.message)));
    }
    get el() { return this; }
}, [1, "tnw-alert", {
        "alertId": [1, "alert-id"],
        "message": [1],
        "size": [1],
        "appearance": [1],
        "appearanceColor": [1, "appearance-color"],
        "isHidden": [4, "is-hidden"],
        "borderRadius": [1, "border-radius"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwAlert);
            }
            break;
    } });
}
defineCustomElement();

export { TnwAlert as T, defineCustomElement as d };

//# sourceMappingURL=p-61d7eae9.js.map