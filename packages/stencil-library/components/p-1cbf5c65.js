/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-dd363b95.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, c as getBorderRadiusClass, e as getExtendedAppearanceClass } from './p-80d80a0e.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-badge.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.imageSrc, this.label, this.size, this.variant]);
 *
 * GENERATED USING `npm run g:components-validations tnw-badge`
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
            "name": "imageSrc",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "label",
            "type": [
                "number",
                "string"
            ],
            "isRequired": false
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
                "image",
                "numeric",
                "status",
                "textual"
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

const baseClass = `${GLOBAL_PREFIX}-badge`;
const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  display: inline-block;
  font-weight: var(--${baseClass}-font-weight, var(--tnw-fw-400));
  font-family: var(--tnw-font-text);
}
:host(.${baseClass}--padding-sm) {
  padding: var(--${baseClass}-padding, 3px 9px);
}
:host(.${baseClass}--padding-md) {
  padding: var(--${baseClass}-padding, 4px 12px);
}
:host(.${baseClass}--padding-lg) {
  padding: var(--${baseClass}-padding, 6px 18px);
}

:host(.${baseClass}--status-size-sm) {
  width: 15px;
  height: 15px;
}
:host(.${baseClass}--status-size-md) {
  width: 20px;
  height: 20px;
}
:host(.${baseClass}--status-size-lg) {
  width: 25px;
  height: 25px;
}

:host(.${baseClass}--numeric) {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

:host(.${baseClass}--image-size-sm) {
  width: 20px;
  height: 20px;
}
:host(.${baseClass}--image-size-md) {
  width: 30px;
  height: 30px;
}
:host(.${baseClass}--image-size-lg) {
  width: 40px;
  height: 40px;
}

:host(.${baseClass}--numeric-size-sm) {
  width: 25px;
  height: 25px;
}
:host(.${baseClass}--numeric-size-md) {
  width: 35px;
  height: 35px;
}
:host(.${baseClass}--numeric-size-lg) {
  width: 45px;
  height: 45px;
}

:host(.${baseClass}--numeric-size-sm),
:host(.${baseClass}--padding-sm) {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-2xs));
}
:host(.${baseClass}--numeric-size-md),
:host(.${baseClass}--padding-md) {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-xs));
}
:host(.${baseClass}--numeric-size-lg),
:host(.${baseClass}--padding-lg) {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-md));
}
`;

function validateNumericalVariantLabel(label) {
    if (label === undefined)
        return;
    const errorMsg = `Invalid value for "label" prop: expected a numeric string or number.`;
    if (typeof label === 'string') {
        // Check if the string is a valid number
        if (isNaN(Number(label))) {
            throw new Error(errorMsg);
        }
    }
    else if (typeof label !== 'number') {
        throw new Error(errorMsg);
    }
}

const TnwBadge = /*@__PURE__*/ proxyCustomElement(class TnwBadge extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-badge`;
        this.displayedLabel = undefined;
        this.label = undefined;
        this.variant = 'textual';
        this.appearance = 'outlined';
        this.appearanceColor = 'auto';
        this.size = 'sm';
        this.borderRadius = 'lg';
        this.imageSrc = undefined;
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.imageSrc, this.label, this.size, this.variant]);
        this.initDisplayedLabel();
        if (this.variant === 'numeric') {
            try {
                validateNumericalVariantLabel(this.label);
                this.maximizeLabelNumber(this.label);
            }
            catch (e) {
                this.setDisplayedLabel(0);
                throw e;
            }
        }
    }
    /**
     * Sets the displayed label based on the provided value.
     * If the value is undefined or null, an empty string is used instead.
     * @param label - The value to use for the displayed label
     */
    setDisplayedLabel(label) {
        this.displayedLabel = label != null ? String(label) : '';
    }
    /**
    * Initializes the displayed label with the current label value.
    */
    initDisplayedLabel() {
        this.setDisplayedLabel(this.label);
    }
    /**
     * Sets the displayed label to '99+' if the provided label is a number (or numeric string) greater than 99.
     * @param label - The label to be checked. Should be a number or numeric string.
     */
    maximizeLabelNumber(label) {
        const numericValue = typeof label === 'string' ? Number(label) : label;
        if (numericValue > 99) {
            this.setDisplayedLabel('99+');
        }
        else {
            this.setDisplayedLabel(String(numericValue));
        }
    }
    getVariantClasses() {
        const { baseClass, size, borderRadius, variant } = this;
        const classes = [];
        switch (variant) {
            case 'status':
                classes.push(`${baseClass}--status-size-${size}`);
                break;
            case 'numeric':
                classes.push(`${baseClass}--numeric`, `${baseClass}--numeric-size-${size}`, getBorderRadiusClass('circle'));
                break;
            case 'image':
                classes.push(`${baseClass}--image-size-${size}`, getBorderRadiusClass('circle'));
                break;
            case 'textual':
                classes.push(`${baseClass}--padding-${size}`, getBorderRadiusClass(borderRadius));
                break;
        }
        return classes;
    }
    getImageStyles() {
        if (this.variant !== 'image' || this.imageSrc === undefined)
            return {};
        return {
            backgroundImage: this.imageSrc ? `url(${this.imageSrc})` : undefined,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
    }
    getBadgeClasses() {
        const { baseClass, appearance, appearanceColor } = this;
        return [
            baseClass,
            getExtendedAppearanceClass(appearance, appearanceColor),
            ...this.getVariantClasses()
        ].filter(Boolean).join(' ').trim();
    }
    render() {
        const isLabelUsed = isNotEmptyString(this.displayedLabel);
        return (h(Host, { key: '60ca9bc0588547c6547c452e905e12ac4b37a5ab', class: this.getBadgeClasses(), style: this.getImageStyles() }, this.variant !== 'status' && this.variant !== 'image'
            && (isLabelUsed
                ? this.displayedLabel
                : h("slot", null))));
    }
    get el() { return this; }
}, [1, "tnw-badge", {
        "label": [8],
        "variant": [1],
        "appearance": [1],
        "appearanceColor": [1, "appearance-color"],
        "size": [1],
        "borderRadius": [1, "border-radius"],
        "imageSrc": [1, "image-src"],
        "displayedLabel": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwBadge);
            }
            break;
    } });
}
defineCustomElement();

export { TnwBadge as T, defineCustomElement as d };

//# sourceMappingURL=p-1cbf5c65.js.map