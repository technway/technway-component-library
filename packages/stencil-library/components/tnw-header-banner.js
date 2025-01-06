/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, h, F as Fragment, d as Host } from './p-dd363b95.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported } from './p-80d80a0e.js';
import { e as extendedAppearanceStyleSheet, b as borderRadiusStyleSheet } from './p-9bc88248.js';
import { d as defineCustomElement$5 } from './p-63ff45e8.js';
import { d as defineCustomElement$4 } from './p-b099ed17.js';
import { d as defineCustomElement$3 } from './p-025cca58.js';
import { d as defineCustomElement$2 } from './p-6191d268.js';

const baseClass = `${GLOBAL_PREFIX}-header-banner`;
const contentClass = `${baseClass}__content`;
const imageClass = `${baseClass}__image`;
const styles = `
:host {
    z-index: 2;
    max-width: 100%;
    margin-block: auto !important;
    padding-bottom: 100px !important;
}

.${contentClass} {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.${contentClass}--start {
    text-align: start;
    margin-inline-end: auto;
    justify-content: start;
    align-items: start;
}
.${contentClass}--center {
    text-align: center;
    margin-inline: auto;
    justify-content: center;
    align-items: center;
}
.${contentClass}--end {
    text-align: end;
    margin-inline-start: auto;
    justify-content: end;
    align-items: end;
}
.${contentClass}--right {
    text-align: right;
    margin-left: auto;
}
.${contentClass}--left {
    text-align: left;
    margin-right: auto;
}

.${contentClass}--sm {
    width: 450px;
}
.${contentClass}--md {
    width: 600px;
}
.${contentClass}--lg {
    width: 800px;
}
.${contentClass}--xl {
    width: 1000px;
}
.${contentClass}--full {
    width: 100%;
}

.tnw-header-banner__headings {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.${imageClass} {
    height: auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    max-width: 800px;
}
`;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-header-banner.tsx` file.
 *
validateProps([this.alignment, this.buttonLabel, this.description, this.enableImageSlot, this.heading, this.imageAlt, this.imageBorderRadius, this.imageSrc, this.stickyNavbar, this.subheading, this.theme, this.width, this.wrapImage]);
 *
 * GENERATED USING `npm run g:components-validations tnw-header-banner`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "alignment",
            "type": [
                "center",
                "end",
                "left",
                "right",
                "start"
            ],
            "isRequired": false
        },
        {
            "name": "buttonLabel",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "description",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "enableImageSlot",
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
        },
        {
            "name": "imageAlt",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "imageBorderRadius",
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
            "name": "stickyNavbar",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "subheading",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "theme",
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
            "name": "width",
            "type": [
                "full",
                "lg",
                "md",
                "sm",
                "xl"
            ],
            "isRequired": false
        },
        {
            "name": "wrapImage",
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

const TnwHeaderBanner$1 = /*@__PURE__*/ proxyCustomElement(class TnwHeaderBanner extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.baseClass = `${GLOBAL_PREFIX}-header-banner`;
        this.getThemeMatchedColor = () => {
            switch (this.theme) {
                case 'primary':
                    return 'white';
                case 'secondary':
                    return 'white';
                case 'inverse':
                    return 'inverse';
                case 'auto':
                    return 'auto';
                case 'white':
                    return 'black';
                case 'black':
                    return 'white';
                default:
                    return 'auto';
            }
        };
        this.heading = undefined;
        this.subheading = undefined;
        this.description = undefined;
        this.buttonLabel = undefined;
        this.theme = 'auto';
        this.alignment = 'start';
        this.width = 'full';
        this.stickyNavbar = false;
        this.enableImageSlot = false;
        this.imageSrc = undefined;
        this.imageAlt = undefined;
        this.wrapImage = false;
        this.imageBorderRadius = 'none';
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                extendedAppearanceStyleSheet,
                borderRadiusStyleSheet,
                this.componentStyles,
            ];
        }
    }
    componentWillLoad() {
        validateProps([this.alignment, this.buttonLabel, this.description, this.enableImageSlot, this.heading, this.imageAlt, this.imageBorderRadius, this.imageSrc, this.stickyNavbar, this.subheading, this.theme, this.width, this.wrapImage]);
    }
    getHostClasses() {
        const { baseClass, stickyNavbar } = this;
        return [
            baseClass,
            stickyNavbar ? `${baseClass}--stickyNavbar` : '',
        ].filter(Boolean).join(' ').trim();
    }
    getContentClasses() {
        const { baseClass, alignment, width } = this;
        const contentClass = `${baseClass}__content`;
        return [
            contentClass,
            `${contentClass}--${alignment}`,
            `${contentClass}--${width}`,
        ].filter(Boolean).join(' ').trim();
    }
    renderHeading() {
        if (!isNotEmptyString(this.heading)) {
            return h("slot", { name: 'heading' });
        }
        return (h("tnw-heading", { text: this.heading, size: "2xl", level: 'h1', alignment: this.alignment, weight: '600', color: this.getThemeMatchedColor(), part: 'heading' }));
    }
    renderSubheading() {
        if (!isNotEmptyString(this.subheading)) {
            return h("slot", { name: 'subheading' });
        }
        return (h("tnw-heading", { text: this.subheading, size: "md", level: 'h2', weight: '400', alignment: this.alignment, color: this.getThemeMatchedColor(), part: 'subheading' }));
    }
    renderDescription() {
        if (!isNotEmptyString(this.description)) {
            return h("slot", { name: 'description' });
        }
        return (h("tnw-text", { text: this.description, alignment: this.alignment, color: this.getThemeMatchedColor(), part: 'description' }));
    }
    renderButton() {
        if (!isNotEmptyString(this.buttonLabel)) {
            return h("slot", { name: 'button' });
        }
        return (h("tnw-button", { label: this.buttonLabel, appearance: 'solid', appearanceColor: 'primary', part: 'button' }));
    }
    renderHeadings() {
        if (isNotEmptyString(this.heading) && isNotEmptyString(this.subheading)) {
            return (h("div", { class: `${this.baseClass}__headings` }, this.renderSubheading(), this.renderHeading()));
        }
        return (h(Fragment, null, this.renderHeading(), this.renderSubheading()));
    }
    renderImage() {
        const { enableImageSlot, imageBorderRadius, imageSrc } = this;
        if (enableImageSlot || isNotEmptyString(imageSrc)) {
            return (h("div", { class: `${this.baseClass}__image`, part: 'image-container' }, enableImageSlot ?
                h("slot", { name: 'image' })
                :
                    h("tnw-image", { src: imageSrc, alt: this.imageAlt, BorderRadius: imageBorderRadius, part: 'image', heightSize: 'full', widthSize: 'full', objectFit: 'cover' })));
        }
    }
    renderContent() {
        return (h("div", { class: this.getContentClasses(), part: 'content' }, this.renderHeadings(), this.renderDescription(), this.renderButton()));
    }
    render() {
        return (h(Host, { key: '124f16f7041e82c504b89c0dbaf53167c09a2493', class: this.getHostClasses() }, this.renderContent(), this.renderImage()));
    }
    get el() { return this; }
}, [1, "tnw-header-banner", {
        "heading": [1],
        "subheading": [1],
        "description": [1],
        "buttonLabel": [1, "button-label"],
        "theme": [1],
        "alignment": [1],
        "width": [1],
        "stickyNavbar": [4, "sticky-navbar"],
        "enableImageSlot": [4, "enable-image-slot"],
        "imageSrc": [1, "image-src"],
        "imageAlt": [1, "image-alt"],
        "wrapImage": [4, "wrap-image"],
        "imageBorderRadius": [1, "image-border-radius"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-header-banner", "tnw-button", "tnw-heading", "tnw-image", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-header-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwHeaderBanner$1);
            }
            break;
        case "tnw-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "tnw-heading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tnw-image":
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

const TnwHeaderBanner = TnwHeaderBanner$1;
const defineCustomElement = defineCustomElement$1;

export { TnwHeaderBanner, defineCustomElement };

//# sourceMappingURL=tnw-header-banner.js.map