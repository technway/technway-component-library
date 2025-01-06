/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, f as enforceRequiredPropsWhenConditionMissing, h as enforceGroupedPropsUsage, j as getColorClass, e as getExtendedAppearanceClass, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { i as iconStyleSheet } from './p-9bc88248.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-icon.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.color, this.enableSvg, this.hiddenAria, this.isButton, this.labelAria, this.name, this.size, this.tooltip]);
 *
 * GENERATED USING `npm run g:components-validations tnw-icon`
 */
function validateProps(propsValues) {
    const props = [
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
                "auto",
                "black",
                "danger",
                "info",
                "inverse",
                "light",
                "primary",
                "secondary",
                "success",
                "warning",
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
            "name": "enableSvg",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "hiddenAria",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "isButton",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "labelAria",
            "type": [
                "string"
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
            "name": "size",
            "type": [
                "2xl",
                "2xs",
                "3xl",
                "3xs",
                "lg",
                "md",
                "sm",
                "xl",
                "xs"
            ],
            "isRequired": false
        },
        {
            "name": "tooltip",
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

const baseClass = `${GLOBAL_PREFIX}-icon`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

:host(.${baseClass}--clickable) {
  cursor: pointer;
}

:host(.${baseClass}--padding-3xs),
:host(.${baseClass}--padding-2xs),
:host(.${baseClass}--padding-xs) {
  padding: 2px;
}
:host(.${baseClass}--padding-sm) {
  padding: 4px;
}
:host(.${baseClass}--padding-md) {
  padding: 10px;
}
:host(.${baseClass}--padding-lg) {
  padding: 10px;
}
:host(.${baseClass}--padding-xl) {
  padding: 6px;
}
:host(.${baseClass}--padding-2xl) {
  padding: 15px;
}
:host(.${baseClass}--padding-3xl) {
  padding: 20px;
}

:host(.${baseClass}--font-3xs) {
  --${baseClass}-fs: 10px;
}
:host(.${baseClass}--font-2xs) {
  --${baseClass}-fs: 12px;
}
:host(.${baseClass}--font-xs) {
  --${baseClass}-fs: 14px;
}
:host(.${baseClass}--font-sm) {
  --${baseClass}-fs: 16px;
}
:host(.${baseClass}--font-md) {
  --${baseClass}-fs: 20px;
}
:host(.${baseClass}--font-lg) {
  --${baseClass}-fs: 24px;
}
:host(.${baseClass}--font-xl) {
  --${baseClass}-fs: 28px;
}
:host(.${baseClass}--font-2xl) {
  --${baseClass}-fs: 50px;
}
:host(.${baseClass}--font-3xl) {
  --${baseClass}-fs: 54px;
}

@media only screen and (max-width: 567px) {
  :host(.${baseClass}--padding-md) {
    padding: 8px;
  }
  :host(.${baseClass}--padding-lg) {
    padding: 8px;
  }
  :host(.${baseClass}--padding-xl) {
    padding: 6px;
  }
  :host(.${baseClass}--padding-2xl) {
    padding: 10px;
  }
  :host(.${baseClass}--padding-3xl) {
    padding: 15px;
  }
    
  :host(.${baseClass}--font-md) {
    --${baseClass}-fs: 18px;
  }
  :host(.${baseClass}--font-lg) {
    --${baseClass}-fs: 20px;
  }
  :host(.${baseClass}--font-xl) {
    --${baseClass}-fs: 24px;
  }
  :host(.${baseClass}--font-2xl) {
    --${baseClass}-fs: 45px;
  }
  :host(.${baseClass}--font-3xl) {
    --${baseClass}-fs: 50px;
  }
}

:host(.${baseClass}--svg-3xs) {
  width: 16px;
  height: 16px;
}

:host(.${baseClass}--svg-2xs) {
  width: 18px;
  height: 18px;
}

:host(.${baseClass}--svg-xs) {
  width: 22px;
  height: 22px;
}
:host(.${baseClass}--svg-sm) {
  width: 26px;
  height: 26px;
}
:host(.${baseClass}--svg-md) {
  width: 40px;
  height: 40px;
}
:host(.${baseClass}--svg-lg) {
  width: 40px;
  height: 40px;
}
:host(.${baseClass}--svg-xl) {
  width: 40px;
  height: 40px;
}
:host(.${baseClass}--svg-2xl) {
  width: 50px;
  height: 50px;
}
:host(.${baseClass}--svg-3xl) {
  width: 70px;
  height: 70px;
}

i {
  font-size: var(--${baseClass}-font-size, var(--${baseClass}-fs));
  color: inherit;
  display: inline-block;
}
  
::slotted(svg) {
  fill: inherit;
  width: 100%;
  height: 100%;
}
`;

const TnwIcon = /*@__PURE__*/ proxyCustomElement(class TnwIcon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-icon`;
        /**
         * Defines the appearance color of the icon.
         */
        this.appearanceColor = 'auto';
        /**
         * Determines the visual appearance color of the icon (e.g., solid, outlined).
         */
        this.appearance = 'none';
        /**
         * Sets the color of the icon. This will be used to set the color of the icon element.
         * Not supported when svg is enabled.
         */
        this.color = 'auto';
        /**
         * Specifies the size of the icon. The size means that the icon will have the width same as the height.
         */
        this.size = 'sm';
        /**
         * If `true`, the icon will be rendered as an SVG. The SVG content should be provided via the `svg` slot.
         */
        this.enableSvg = false;
        /**
         * If `true`, the icon will be hidden from screen readers. Defaults to `true`.
         */
        this.hiddenAria = false;
        /**
         * If `true`, the icon will be treated as a button, with appropriate `role` and additional classes.
         */
        this.isButton = false;
        /**
         * Determines the border radius of the icon.
         */
        this.borderRadius = 'default';
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                iconStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.color, this.enableSvg, this.hiddenAria, this.isButton, this.labelAria, this.name, this.size, this.tooltip]);
        enforceRequiredPropsWhenConditionMissing(this.getConditionalPropsChecks());
        enforceGroupedPropsUsage(this.getGroupedPropsChecks());
    }
    getConditionalPropsChecks() {
        return [
            {
                requiredPropName: "name",
                requiredProp: this.name,
                conditionalPropName: "enableSvg",
                conditionalProp: this.enableSvg,
            },
        ];
    }
    getGroupedPropsChecks() {
        return [
            {
                propNames: ['appearance', 'appearanceColor'],
                propValues: [this.appearance, this.appearanceColor],
            }
        ];
    }
    // Getter to calculate the label for accessibility based on `labelAria` or fallback to `name`
    get labelAriaVal() {
        return this.labelAria || this.name || '';
    }
    getHostClasses() {
        const { baseClass, size, appearanceColor, appearance, isButton, color } = this;
        const clickable = isButton ? `${baseClass}--clickable` : ``;
        return [
            baseClass,
            this.enableSvg ? `${baseClass}--svg-${size}` : `${baseClass}--font-${size}`,
            this.appearance !== 'none' ? `${baseClass}--padding-${size}` : ``,
            getColorClass('color', color),
            getExtendedAppearanceClass(appearance, appearanceColor),
            getBorderRadiusClass(this.borderRadius),
            clickable,
        ].filter(Boolean).join(' ').trim();
    }
    render() {
        const { enableSvg, name, hiddenAria, isButton, tooltip, labelAriaVal } = this;
        const iconAttributes = Object.assign(Object.assign(Object.assign(Object.assign({}, (hiddenAria && { 'aria-hidden': 'true' })), (isButton && { 'role': 'button' })), (tooltip && { 'title': tooltip })), (!hiddenAria && { 'aria-label': labelAriaVal }));
        return (h(Host, { key: 'aebcd2c1d9733c71c67d260aefb6df49c3e19992', class: this.getHostClasses() }, enableSvg ? (h("slot", { name: 'svg' })) : (h("i", Object.assign({ class: `icon-${name}` }, iconAttributes, { part: 'icon' })))));
    }
    get el() { return this; }
}, [1, "tnw-icon", {
        "name": [1],
        "appearanceColor": [1, "appearance-color"],
        "appearance": [1],
        "color": [1],
        "size": [1],
        "tooltip": [1],
        "enableSvg": [4, "enable-svg"],
        "labelAria": [1, "label-aria"],
        "hiddenAria": [4, "hidden-aria"],
        "isButton": [4, "is-button"],
        "borderRadius": [1, "border-radius"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwIcon);
            }
            break;
    } });
}
defineCustomElement();

export { TnwIcon as T, defineCustomElement as d };

//# sourceMappingURL=p-86f498c8.js.map