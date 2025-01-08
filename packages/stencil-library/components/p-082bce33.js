/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-4617b122.js';
import { i as isNotEmptyString, G as GLOBAL_PREFIX, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, o as getAspectRatioClass, p as getObjectFitClass, q as getObjectPositionClass, c as getBorderRadiusClass } from './p-80d80a0e.js';
import { m as mediaStyleSheet, b as borderRadiusStyleSheet } from './p-20eedb96.js';

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-image.tsx` file.
 *
validateProps([this.BorderRadius, this.alt, this.aspectRatio, this.caption, this.height, this.heightSize, this.lazyLoading, this.objectFit, this.objectPosition, this.src, this.width, this.widthSize]);
 *
 * GENERATED USING `npm run g:components-validations tnw-image`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "BorderRadius",
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
            "name": "alt",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "aspectRatio",
            "type": [
                "16_9",
                "1_1",
                "21_9",
                "3_4",
                "4_3",
                "9_16",
                "9_21",
                "initial"
            ],
            "isRequired": false
        },
        {
            "name": "caption",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "height",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "heightSize",
            "type": [
                "full",
                "lg",
                "md",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "lazyLoading",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "objectFit",
            "type": [
                "contain",
                "cover",
                "fill",
                "none",
                "scale-down"
            ],
            "isRequired": false
        },
        {
            "name": "objectPosition",
            "type": [
                "bottom",
                "bottom-left",
                "bottom-right",
                "center",
                "center-bottom",
                "center-left",
                "center-right",
                "center-top",
                "initial",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
                "top-left",
                "top-right"
            ],
            "isRequired": false
        },
        {
            "name": "src",
            "type": [
                "string"
            ],
            "isRequired": true
        },
        {
            "name": "width",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "widthSize",
            "type": [
                "full",
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

const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  --tnw-image-font: var(--tnw-font-text);
  display: flex;
  max-width: 100%;
}
:host(.tnw-image--width-sm) {
  width: var(--tnw-image-width, 200px);
}
:host(.tnw-image--height-sm) {
  height: var(--tnw-image-height, 200px);
}
:host(.tnw-image--width-md) {
  width: var(--tnw-image-width, 600px);
}
:host(.tnw-image--height-md) {
  height: var(--tnw-image-height, 600px);
}
:host(.tnw-image--width-lg) {
  width: var(--tnw-image-width, 1000px);
}
:host(.tnw-image--height-lg) {
  height: var(--tnw-image-height, 1000px);
}
:host(.tnw-image--width-full) {
  width: var(--tnw-image-width, 100%);
}
:host(.tnw-image--height-full) {
  height: var(--tnw-image-height, 100%);
}
.tnw-image--full {
  width: 100%;
  height: 100%;
}
.tnw-image__figure {
    width: 100%;
    height: 100%;
    margin: 0;
}
.tnw-image__figure-caption {
    text-align: center;
    margin-top: 5px;
    font-size: var(--tnw-fs-sm);
    font-style: italic;
    font-family: var(--tnw-image-font);
}
`;

const TnwImage = /*@__PURE__*/ proxyCustomElement(class TnwImage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-image`;
        /**
         * An optional caption to be displayed below the image.
         */
        this.caption = '';
        /**
         * The width size of the image. This controls the width of the image container. Values are not units, but rather likw `full`, `lg`, `md` ...
         */
        this.widthSize = 'full';
        /**
         * The aspect ratio of the image (width / height). Useful for maintaining image proportions.
         */
        this.aspectRatio = "initial";
        /**
         * The object position of the image. This defines how the image is positioned within its container.
         */
        this.objectPosition = "initial";
        /**
         * If `true`, the image will use lazy loading, loading only when it is about to be visible in the viewport.
         */
        this.lazyLoading = false;
        /**
         * Determines the border radius of the image.
         */
        this.BorderRadius = 'default';
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                mediaStyleSheet,
                borderRadiusStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.BorderRadius, this.alt, this.aspectRatio, this.caption, this.heightSize, this.lazyLoading, this.objectFit, this.objectPosition, this.src, this.widthSize]);
    }
    hasWidthOrHeight() {
        return isNotEmptyString(this.width) || isNotEmptyString(this.height);
    }
    getImageClasses() {
        const { baseClass, aspectRatio, objectFit, objectPosition } = this;
        return [
            baseClass,
            !this.hasWidthOrHeight() ? `${baseClass}--full` : '',
            getAspectRatioClass(aspectRatio),
            getObjectFitClass(objectFit),
            getObjectPositionClass(objectPosition),
            getBorderRadiusClass(this.BorderRadius),
        ].filter(Boolean).join(' ').trim();
    }
    getHostClasses() {
        const { baseClass, widthSize, heightSize } = this;
        return [
            isNotEmptyString(widthSize) ? `${baseClass}--width-${widthSize}` : ``,
            isNotEmptyString(heightSize) ? `${baseClass}--height-${heightSize}` : ``,
        ].filter(Boolean).join(' ').trim();
    }
    /**
     * Returns the rendered image element.
     * @returns A rendered image element (JSX.Element)
     */
    renderImage() {
        return (h("img", { class: this.getImageClasses(), src: this.src, alt: this.alt, loading: this.lazyLoading ? 'lazy' : 'eager', part: 'image', style: {
                width: this.width,
                height: this.height,
            } }));
    }
    renderFigCaption() {
        if (isNotEmptyString(this.caption)) {
            return (h("figcaption", { class: `${this.baseClass}__figure-caption`, part: 'figcaption' }, this.caption));
        }
        return null;
    }
    render() {
        const image = this.renderImage();
        const hasCaption = Boolean(this.caption);
        return (h(Host, { key: 'c16a3352d007ab953fd8d9b6a6c1cbbda282ce8f', class: this.getHostClasses() }, hasCaption ? (h("figure", { class: `${this.baseClass}__figure`, part: 'figure' }, image, this.renderFigCaption())) : (image)));
    }
    get el() { return this; }
}, [1, "tnw-image", {
        "src": [1],
        "alt": [1],
        "caption": [1],
        "width": [1],
        "height": [1],
        "widthSize": [1, "width-size"],
        "heightSize": [1, "height-size"],
        "aspectRatio": [1, "aspect-ratio"],
        "objectPosition": [1, "object-position"],
        "objectFit": [1, "object-fit"],
        "lazyLoading": [516, "lazy-loading"],
        "BorderRadius": [1, "border-radius"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-image"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-image":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwImage);
            }
            break;
    } });
}
defineCustomElement();

export { TnwImage as T, defineCustomElement as d };

//# sourceMappingURL=p-082bce33.js.map