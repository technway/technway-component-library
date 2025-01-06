/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, j as getColorClass, s as getMinHeightClass, t as getHeightClass } from './p-80d80a0e.js';
import { a as containerStyleSheet } from './p-9bc88248.js';

const baseClass = `${GLOBAL_PREFIX}-header`;
const contentClass = `${baseClass}__content`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    padding-top: 10px !important;
}
:host(.${baseClass}--borderBottom) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

:host(.${baseClass}--centerBanner) {
    align-items: center;
    justify-content: center; 
}

.${contentClass} {
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100%;
    justify-content: center;
}
.${contentClass}--center {
    align-items: center;
}
.${contentClass}--start {
    align-items: start;
}
.${contentClass}--end {
    align-items: end;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-header.tsx` file.
 *
validateProps([this.alignment, this.backgroundColor, this.borderBottomColor, this.centerBanner, this.disableInternalContainer, this.height, this.minHeight]);
 *
 * GENERATED USING `npm run g:components-validations tnw-header`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "alignment",
            "type": [
                "center",
                "end",
                "start"
            ],
            "isRequired": false
        },
        {
            "name": "backgroundColor",
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
            "name": "borderBottomColor",
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
            "name": "centerBanner",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "disableInternalContainer",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "height",
            "type": [
                "auto",
                "full",
                "full-screen",
                "lg",
                "md",
                "sm",
                "xl"
            ],
            "isRequired": false
        },
        {
            "name": "minHeight",
            "type": [
                "auto",
                "full",
                "full-screen",
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

const TnwHeader$1 = /*@__PURE__*/ proxyCustomElement(class TnwHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-header`;
        /**
         * If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.
         */
        this.disableInternalContainer = false;
        /**
         * Sets the overall height of the header. Options include predefined size types such as 'full', 'auto', or 'full-screen'. Default is 'auto'.
         */
        this.height = 'auto';
        /**
         * Sets the minimum height of the header. Like the `height` prop, it accepts size types like 'full', 'auto', or 'full-screen'. Default is 'auto'.
         */
        this.minHeight = 'auto';
        /**
         * Controls the alignment of the header content. Accepts logical alignment types such as 'start', 'center', or 'end'. Default is 'start'.
         */
        this.alignment = 'start';
        /**
         * If `true`, centers the banner content both horizontally and vertically within the header.
         */
        this.centerBanner = false;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                containerStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.alignment, this.backgroundColor, this.borderBottomColor, this.centerBanner, this.disableInternalContainer, this.height, this.minHeight]);
    }
    getHostClasses() {
        const { baseClass, height, backgroundColor, borderBottomColor, minHeight, centerBanner } = this;
        return [
            this.baseClass,
            centerBanner ? `${baseClass}--centerBanner` : '',
            isNotEmptyString(borderBottomColor) ? `${baseClass}--borderBottom` : ``,
            getColorClass('bg', backgroundColor),
            getColorClass('border-bottom', borderBottomColor),
            getMinHeightClass(minHeight),
            getHeightClass(height),
        ].filter(Boolean).join(' ').trim();
    }
    getContentClasses() {
        const { baseClass, alignment, disableInternalContainer } = this;
        const contentClass = `${baseClass}__content`;
        return [
            contentClass,
            `${contentClass}--${alignment}`,
            !disableInternalContainer ? `container` : '',
        ].filter(Boolean).join(' ').trim();
    }
    render() {
        return (h(Host, { key: '742aa3ee9280cccc52a0f4094f208ea6ff9e76b0', class: this.getHostClasses() }, h("header", { key: '8e833878c22eba99bd02122b96bbe9813d2e6204', class: this.getContentClasses(), part: 'header' }, h("slot", { key: '36fef41b55ac3214d9deb2a7fb9487e1e92a9c3e', name: 'navbar' }), h("slot", { key: '8e7f1bfe5b0906bc21d54cfd4ea133b66654565b', name: 'banner' }))));
    }
    get el() { return this; }
}, [1, "tnw-header", {
        "disableInternalContainer": [4, "disable-internal-container"],
        "backgroundColor": [1, "background-color"],
        "borderBottomColor": [1, "border-bottom-color"],
        "height": [1],
        "minHeight": [1, "min-height"],
        "alignment": [1],
        "centerBanner": [4, "center-banner"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-header"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwHeader$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TnwHeader = TnwHeader$1;
const defineCustomElement = defineCustomElement$1;

export { TnwHeader, defineCustomElement };

//# sourceMappingURL=tnw-header.js.map