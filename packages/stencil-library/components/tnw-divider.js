/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-51091f4a.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported } from './p-80d80a0e.js';

const baseClass = `${GLOBAL_PREFIX}-divider`;
const styles = `
:host {
    display: block;
    border-width: 1px;
    width: 100%:
    height: 1px;
}

:host(.${baseClass}--solid) {
    border-bottom-style: solid;
}

:host(.${baseClass}--dashed) {
    border-bottom-style: dashed;
}

:host(.${baseClass}--primary) {
    border-bottom-color: var(--tnw-primary-color);
}
:host(.${baseClass}--secondary) {
    border-bottom-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--auto) {
    border-bottom-color: var(--tnw-border-color);
}
:host(.${baseClass}--inverse) {
    border-bottom-color: var(--tnw-border-color-inverse);
}
:host(.${baseClass}--light) {
    border-bottom-color: var(--tnw-border-color-light);
}
:host(.${baseClass}--white) {
    border-bottom-color: var(--tnw-white);
}
:host(.${baseClass}--black) {
    border-bottom-color: var(--tnw-black);
}
:host(.${baseClass}--gray100) {
    border-bottom-color: var(--tnw-gray100);
}
:host(.${baseClass}--gray200) {
    border-bottom-color: var(--tnw-gray200);
}
:host(.${baseClass}--gray300) {
    border-bottom-color: var(--tnw-gray300);
}
:host(.${baseClass}--gray400) {
    border-bottom-color: var(--tnw-gray400);
}
:host(.${baseClass}--gray500) {
    border-bottom-color: var(--tnw-gray500);
}
:host(.${baseClass}--gray600) {
    border-bottom-color: var(--tnw-gray600);
}
:host(.${baseClass}--gray700) {
    border-bottom-color: var(--tnw-gray700);
}
:host(.${baseClass}--gray800) {
    border-bottom-color: var(--tnw-gray800);
}
:host(.${baseClass}--gray900) {
    border-bottom-color: var(--tnw-gray900);
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-divider.tsx` file.
 *
validateProps([this.color, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-divider`
 */
function validateProps(propsValues) {
    const props = [
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
                "none",
                "primary",
                "secondary",
                "white"
            ],
            "isRequired": false
        },
        {
            "name": "variant",
            "type": [
                "dashed",
                "solid"
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

const TnwDivider$1 = /*@__PURE__*/ proxyCustomElement(class TnwDivider extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-divider`;
        this.variant = "solid";
        this.color = 'auto';
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
        validateProps([this.color, this.variant]);
    }
    getHostClasses() {
        const { baseClass } = this;
        return [
            baseClass,
            `${baseClass}--${this.color}`,
            `${baseClass}--${this.variant}`,
        ].filter(Boolean).join(" ").trim();
    }
    render() {
        return (h(Host, { key: 'cc91f8d7327e803f7c1ca3a28852e1f9a7e79990', class: this.getHostClasses() }));
    }
    get el() { return this; }
}, [1, "tnw-divider", {
        "variant": [1],
        "color": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-divider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwDivider$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TnwDivider = TnwDivider$1;
const defineCustomElement = defineCustomElement$1;

export { TnwDivider, defineCustomElement };

//# sourceMappingURL=tnw-divider.js.map