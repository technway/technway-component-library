/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-4617b122.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet } from './p-20eedb96.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, b as isAdoptedStyleSheetsSupported } from './p-80d80a0e.js';
import { d as defineCustomElement$2 } from './p-3d848afd.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-scroll-to-top.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.color, this.customIconName, this.enableCustomSvgIcon, this.size]);
 *
 * GENERATED USING `npm run g:components-validations tnw-scroll-to-top`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "appearance",
            "type": [
                "mixed",
                "outlined",
                "solid",
                "transparent"
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
                "inverse",
                "light",
                "primary",
                "secondary",
                "white"
            ],
            "isRequired": false
        },
        {
            "name": "customIconName",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "enableCustomSvgIcon",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "size",
            "type": [
                "lg",
                "md",
                "sm",
                "xl",
                "xs"
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

const baseClass = `${GLOBAL_PREFIX}-scroll-to-top`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    opacity: 0;
    z-index: 9999;
    visibility: hidden;
}
:host(.${baseClass}--visible) {
    opacity: 0.9;
    visibility: visible;
    transition: 0.25s all ease-in-out;
}
:host(.${baseClass}--visible:hover) {
    opacity: 1;
    transform: translateY(-3px);
}
`;

const TnwScrollToTop$1 = /*@__PURE__*/ proxyCustomElement(class TnwScrollToTop extends H {
    handleScroll() {
        const wasVisible = this.isVisible;
        this.isVisible = window.scrollY > 300;
        this.handleVisibility(wasVisible);
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.visible = createEvent(this, "visible", 7);
        this.scrollToTopClicked = createEvent(this, "scrollToTopClicked", 7);
        this.baseClass = `${GLOBAL_PREFIX}-scroll-to-top`;
        this.isVisible = false;
        /**
         * Specifies the size of the scroll-to-top button.
         */
        this.size = 'md';
        /**
         * Defines the appearance color of the scroll-to-top button.
         */
        this.appearanceColor = 'primary';
        /**
         * Determines the appearance of the scroll-to-top button.
         */
        this.appearance = 'solid';
        /**
         * Determines the border radius.
         */
        this.borderRadius = "default";
        /**
         * The name of the custom icon to be used for the scroll-to-top button.
         */
        this.customIconName = 'tnw-arrow-thin-up';
        /**
         * If true, a custom SVG icon provided via the `icon-svg` slot will be used.
         */
        this.enableCustomSvgIcon = false;
        if (isAdoptedStyleSheetsSupported()) {
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
    }
    componentWillLoad() {
        validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.color, this.customIconName, this.enableCustomSvgIcon, this.size]);
    }
    handleVisibility(wasVisible) {
        if (this.isVisible && !wasVisible) {
            this.el.classList.add(`${this.baseClass}--visible`);
            this.visible.emit({ isVisible: true, scrollY: window.scrollY });
        }
        else if (!this.isVisible && wasVisible) {
            this.el.classList.remove(`${this.baseClass}--visible`);
        }
    }
    scrollToTop() {
        return () => {
            this.scrollToTopClicked.emit({ scrollY: window.scrollY });
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };
    }
    render() {
        return (h(Host, { key: 'c061fdb2a608e0c84ec48a9cc665a288a81b63b6', class: this.baseClass }, h("tnw-icon", { key: 'caec92d190d244d7070cb59018e1da4b257fbaef', name: this.customIconName, size: this.size, appearanceColor: this.appearanceColor, appearance: this.appearance, color: this.color, isButton: true, onClick: this.scrollToTop(), enableSvg: this.enableCustomSvgIcon, borderRadius: this.borderRadius, part: 'icon' }, h("slot", { key: '26998f8dda985d2fd4b927dd0ad43ddbdd2e263b', name: "icon-svg", slot: 'svg' }))));
    }
    get el() { return this; }
}, [1, "tnw-scroll-to-top", {
        "size": [1],
        "appearanceColor": [1, "appearance-color"],
        "appearance": [1],
        "color": [1],
        "borderRadius": [1, "border-radius"],
        "customIconName": [1, "custom-icon-name"],
        "enableCustomSvgIcon": [4, "enable-custom-svg-icon"],
        "isVisible": [32]
    }, [[9, "scroll", "handleScroll"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-scroll-to-top", "tnw-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-scroll-to-top":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwScrollToTop$1);
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

const TnwScrollToTop = TnwScrollToTop$1;
const defineCustomElement = defineCustomElement$1;

export { TnwScrollToTop, defineCustomElement };

//# sourceMappingURL=tnw-scroll-to-top.js.map