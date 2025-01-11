/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { p as proxyCustomElement, H, c as createEvent, h as h$1, d as Host } from './p-4617b122.js';
import { G as GLOBAL_PREFIX, i as isNotEmptyString, c as getBorderRadiusClass, u as isArrayEmpty, a as isCSSStyleSheetSupported, b as isAdoptedStyleSheetsSupported, n as getAppearanceClass } from './p-80d80a0e.js';
import { a as containerStyleSheet, b as borderRadiusStyleSheet, j as appearanceColorSheet, e as extendedAppearanceStyleSheet } from './p-20eedb96.js';
import { h } from './p-93b5355a.js';
import { d as defineCustomElement$4 } from './p-d53cb6f4.js';
import { d as defineCustomElement$3 } from './p-3d848afd.js';
import { d as defineCustomElement$2 } from './p-b708dbe9.js';

const baseClass$6 = `${GLOBAL_PREFIX}-navbar-menu`;
const itemClass = `${baseClass$6}__item`;
const closedMenuStyles = () => (`
    position: absolute;
    opacity: 0;
    transform: translateY(-10px);
    z-index: -1;
    visibility: hidden;
    left: unset;
    top: unset;
    border-radius: var(--tnw-rounded-default);    
`);
const openedMenuStyles = () => (`
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out, visibility 250ms ease-in-out;
    padding: 40px 30px;
    top: 130%;
    left: 0;
    right: 0;
    border: var(--tnw-border-sm) solid var(--tnw-primary-color-opacity) !important;
    background-color: var(--tnw-background-color) !important;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
`);
const styles$3 = `
.${baseClass$6} {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
}

@media only screen and (max-width: 1439px) {
    .${baseClass$6}--hideMenuBelow-1439 {
        ${closedMenuStyles()}
    }
    .${baseClass$6}--hideMenuBelow-1439.${baseClass$6}--opened {
        ${openedMenuStyles()}
    }
}
@media only screen and (max-width: 1024px) {
    .${baseClass$6}--hideMenuBelow-1024 {
        ${closedMenuStyles()}
    }
    .${baseClass$6}--hideMenuBelow-1024.${baseClass$6}--opened {
        ${openedMenuStyles()}
    }
}
@media only screen and (max-width: 767px) {
    .${baseClass$6}--hideMenuBelow-767 {
        ${closedMenuStyles()}
    }
    .${baseClass$6}--hideMenuBelow-767.${baseClass$6}--opened {
        ${openedMenuStyles()}
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass$6}--hideMenuBelow-567 {
        ${closedMenuStyles()}
    }
    .${baseClass$6}--hideMenuBelow-567.${baseClass$6}--opened {
        ${openedMenuStyles()}   
    }
}

.${itemClass} {
    width: fit-content;
    padding-inline: 10px;
}
.${itemClass},
tnw-anchor::part(anchor),
tnw-text::part(text),
tnw-anchor::part(icon) {
    transition: 0.18s all ease-in-out;
}

.${itemClass}--hasSubmenu {
    position: relative;
    cursor: pointer;
}
.${itemClass}--hasSubmenu tnw-anchor {
    display: flex;
    align-items: center;
    gap: 5px;
}
.${itemClass}--hasSubmenu:hover > tnw-navbar-dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translateY(0) translateX(-50%);
    z-index: 1000;
}

.${itemClass}--hasPadding {
    padding: 5px 10px;
}

.${itemClass}--color-auto:hover tnw-anchor::part(anchor),
.${itemClass}--color-auto:hover tnw-text::part(text),
.${itemClass}--color-auto:hover tnw-anchor::part(icon) {
    color: var(--tnw-text-color);
}
.${itemClass}--color-inverse:hover tnw-anchor::part(anchor),
.${itemClass}--color-inverse:hover tnw-text::part(text),
.${itemClass}--color-inverse:hover tnw-anchor::part(icon) {
    color: var(--tnw-text-color-inverse);
}
.${itemClass}--color-primary:hover tnw-anchor::part(anchor),
.${itemClass}--color-primary:hover tnw-text::part(text),
.${itemClass}--color-primary:hover tnw-anchor::part(icon) {
    color: var(--tnw-primary-color);
}
.${itemClass}--color-secondary:hover tnw-anchor::part(anchor),
.${itemClass}--color-secondary:hover tnw-text::part(text),
.${itemClass}--color-secondary:hover tnw-anchor::part(icon) {
    color: var(--tnw-secondary-color);
}
.${itemClass}--color-black:hover tnw-anchor::part(anchor),
.${itemClass}--color-black:hover tnw-text::part(text),
.${itemClass}--color-black:hover tnw-anchor::part(icon) {
    color: var(--tnw-black);
}
.${itemClass}--color-white:hover tnw-anchor::part(anchor),
.${itemClass}--color-white:hover tnw-text::part(text),
.${itemClass}--color-white:hover tnw-anchor::part(icon) {
    color: var(--tnw-white);
}

.${itemClass}--solid,
.${itemClass}--outlined {
    padding: 5px 10px;
}

.${itemClass}--outlined {
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
}
.${itemClass}--outlined-auto:hover {
    border-color: var(--tnw-border-color);
}
.${itemClass}--outlined-inverse:hover {
    border-color: var(--tnw-border-color-inverse);
}
.${itemClass}--outlined-primary:hover {
    border-color: var(--tnw-primary-color);
}
.${itemClass}--outlined-secondary:hover {
    border-color: var(--tnw-secondary-color);
}
.${itemClass}--outlined-black:hover {
    border-color: var(--tnw-black);
}
.${itemClass}--outlined-white:hover {
    border-color: var(--tnw-white);
}

.${itemClass}--solid-auto:hover {
    background-color: var(--tnw-background-color);
}
.${itemClass}--solid-auto:hover tnw-anchor::part(anchor),
.${itemClass}--solid-auto:hover tnw-text::part(text),
.${itemClass}--solid-auto:hover tnw-anchor::part(icon) {
    color: var(--tnw-text-color);
}
.${itemClass}--solid-inverse:hover {
    background-color: var(--tnw-background-color-inverse);
}
.${itemClass}--solid-inverse:hover tnw-anchor::part(anchor),
.${itemClass}--solid-inverse:hover tnw-text::part(text),
.${itemClass}--solid-inverse:hover tnw-anchor::part(icon) {
    color: var(--tnw-text-color-inverse);
}
.${itemClass}--solid-primary:hover {
    background-color: var(--tnw-primary-color);
}
.${itemClass}--solid-primary:hover tnw-anchor::part(anchor),
.${itemClass}--solid-primary:hover tnw-text::part(text),
.${itemClass}--solid-primary:hover tnw-anchor::part(icon) {
    color: var(--tnw-white);
}
.${itemClass}--solid-secondary:hover {
    background-color: var(--tnw-secondary-color);
}
.${itemClass}--solid-secondary:hover tnw-anchor::part(anchor),
.${itemClass}--solid-secondary:hover tnw-text::part(text),
.${itemClass}--solid-secondary:hover tnw-anchor::part(icon) {
    color: var(--tnw-white);
}
.${itemClass}--solid-black:hover {
    background-color: var(--tnw-black);
}
.${itemClass}--solid-black:hover tnw-anchor::part(anchor),
.${itemClass}--solid-black:hover tnw-text::part(text),
.${itemClass}--solid-black:hover tnw-anchor::part(icon) {
    color: var(--tnw-white);
}
.${itemClass}--solid-white:hover {
    background-color: var(--tnw-white);
}
.${itemClass}--solid-white:hover tnw-anchor::part(anchor),
.${itemClass}--solid-white:hover tnw-text::part(text),
.${itemClass}--solid-white:hover tnw-anchor::part(icon) {
    color: var(--tnw-black);
}

.${itemClass}--contrast:hover {
    filter: contrast(1.1);  
}
.${itemClass}--opacity:hover {
    opacity: 0.7;
}

tnw-text::part(text) {
    display: flex;
}
`;

const baseClass$5 = `${GLOBAL_PREFIX}-navbar-dropdown-menu`;
const listClass = `${baseClass$5}__list`;
const styles$2 = `
.${baseClass$5} {
    display: none;
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    position: absolute;
    top: 18px;
    padding-top: 30px;
    left: 50%;
    transform: translateY(-10px) translateX(-50%);
    min-width: 170px;
    width: max-content;
    transition:
        opacity 250ms ease-in-out,
        transform 250ms ease-in-out,
        visibility 250ms ease-in-out;
    cursor: auto;

    --${baseClass$5}-border-color: var(--tnw-primary-color-opacity);
    --${baseClass$5}-background-color: var(--tnw-background-color);
    --${baseClass$5}-border-radius: var(--tnw-rounded-default);
    --${baseClass$5}-primary-color: var(--tnw-primary-color);
}


@media only screen and (max-width: 1024px) {
    .${baseClass$5}--bp-1024 {    
        position: unset;
        min-width: unset;
        transform: unset !important;
        padding-top: 10px;
    }   
    .${baseClass$5}--bp-1024 .${listClass} {
        padding: 0;
        border: 0;
        background: transparent;
    }   
}

@media only screen and (max-width: 767px) {
    .${baseClass$5}--bp-767 {    
        position: unset;
        min-width: unset;
        transform: unset !important;
        padding-top: 10px;
    }      
    .${baseClass$5}--bp-767 .${listClass} {
        padding: 0;
        border: 0;
        background: transparent;        
    }   
}

.${listClass} {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: var(--tnw-spacing-sm);
    border: var(--tnw-border-sm) solid var(--${baseClass$5}-border-color);
    background-color: var(--${baseClass$5}-background-color);
    width: 100%;
    list-style: none;
    margin: 0;
    border-radius: var(--${baseClass$5}-border-radius);
}

.${baseClass$5}__item tnw-anchor::part(anchor),
.${baseClass$5}__item tnw-icon::part(icon) {
    transition: 0.25s all ease-in-out;
}
.${baseClass$5}__item:hover tnw-anchor::part(anchor),
.${baseClass$5}__item:hover tnw-icon::part(icon) {
    color: var(--${baseClass$5}-primary-color);
}
`;

const baseClass$4 = `${GLOBAL_PREFIX}-navbar__toggler`;
const styles$1 = `
.${baseClass$4} {
    cursor: pointer;
}

.${baseClass$4}--1024,
.${baseClass$4}--767,
.${baseClass$4}--567,
.${baseClass$4}--1439 {
    display: none;
}
.${baseClass$4}--1024 {
    @media (max-width: 1024px) {
        display: block;
    }
}
.${baseClass$4}--767 {
    @media (max-width: 767px) {
        display: block;
    }
}
.${baseClass$4}--567 {
    @media (max-width: 567px) {
        display: block;
    }
}
.${baseClass$4}--1439 {
    @media (max-width: 1439px) {
        display: block;
    }
}
.${baseClass$4}--all {
    display: block;
}
`;

const baseClass$3 = `${GLOBAL_PREFIX}-navbar`;
const contentClass = `${baseClass$3}__content`;
const exactCenterStyles = () => (`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
`);
let styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    width: 100%;
    z-index: 10;
}

:host(.${baseClass$3}--sticky) {
    position: fixed;
    left: 0;
    right: 0;
    top: 10px;
}

.${contentClass} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.${baseClass$3}__start {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-inline-end: auto;
}
.${baseClass$3}__middle {
    margin-inline: auto;
}
.${baseClass$3}__end {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-inline-start: auto;
}
    
@media only screen and (min-width: 1440px) {
    .${baseClass$3}--hideMenuBelow-1439.${baseClass$3}__middle--exact-center {
        ${exactCenterStyles()}
    }
}
@media only screen and (min-width: 1025px) {
    .${baseClass$3}--hideMenuBelow-1024.${baseClass$3}__middle--exact-center {
        ${exactCenterStyles()}
    }
}
@media only screen and (min-width: 768px) {
    .${baseClass$3}--hideMenuBelow-767.${baseClass$3}__middle--exact-center {
        ${exactCenterStyles()}
    }
}
@media only screen and (min-width: 568px) {
    .${baseClass$3}--hideMenuBelow-567px.${baseClass$3}__middle--exact-center {
        ${exactCenterStyles()}
    }
}

.paddingX-sm,
:host(.paddingX-sm) {
    padding-left: 5px;
    padding-right: 5px;
}
.paddingX-md,
:host(.paddingX-md) {
    padding-left: 10px;
    padding-right: 10px;
}
.paddingX-lg,
:host(.paddingX-lg) {
    padding-left: 15px;
    padding-right: 15px;
}

.paddingY-sm,
:host(.paddingY-sm) {
    padding-top: 5px;
    padding-bottom: 5px;
}
.paddingY-md,
:host(.paddingY-md) {
    padding-top: 10px;
    padding-bottom: 10px;
}
.paddingY-lg,
:host(.paddingY-lg) {
    padding-top: 15px;
    padding-bottom: 15px;
}
    
.outlined-bottom,
:host(.outlined-bottom) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
.outlined-bottom.primary,
:host(.outlined-bottom.primary) {
    border-bottom-color: var(--tnw-primary-color);
}
.outlined-bottom.secondary,
:host(.outlined-bottom.secondary) {
    border-bottom-color: var(--tnw-secondary-color);
}
.outlined-bottom.auto,
:host(.outlined-bottom.auto) {
    border-bottom-color: var(--tnw-border-color);
}
.outlined-bottom.inverse,
:host(.outlined-bottom.inverse) {
    border-bottom-color: var(--tnw-border-color-inverse);
}
.outlined-bottom.light,
:host(.outlined-bottom.light) {
    border-bottom-color: var(--tnw-border-color-opacity);
}
.outlined-bottom.white,
:host(.outlined-bottom.white) {
    border-bottom-color: var(--tnw-white);
}
.outlined-bottom.black,
:host(.outlined-bottom.black) {
    border-bottom-color: var(--tnw-black);
}

.${baseClass$3}__logo {
    max-height: 40px;
    max-width: 150px;
    object-fit: contain;
    margin-right: 16px;
}
`;
styles += styles$3;
styles += styles$2;
styles += styles$1;

/**
 * THIS FILE IS AUTO GENERATED. Do not update or add anything manually.
 *
 * ⚠️ IMPORTANT:
 *
 * Copy these code and put it in the `componentWillLoad()` Lifecycle method in the `tnw-navbar.tsx` file.
 *
validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableCtaSlot, this.enableLogoSlot, this.enableMenuSlot, this.hideMenuBelow, this.menuData, this.menuExactCenter, this.menuPlacement, this.paddingHorizontal, this.paddingVertical, this.scopeStylesToContainer, this.sticky, this.togglerPlacement]);
 *
 * GENERATED USING `npm run g:components-validations tnw-navbar`
 */
function validateProps(propsValues) {
    const props = [
        {
            "name": "appearance",
            "type": [
                "mixed",
                "none",
                "outlined",
                "outlined-bottom",
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
            "name": "disableInternalContainer",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "enableCtaSlot",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "enableLogoSlot",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "enableMenuSlot",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "hideMenuBelow",
            "type": [
                "1024",
                "1439",
                "567",
                "767",
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "menuData",
            "type": [
                "string"
            ],
            "isRequired": false
        },
        {
            "name": "menuExactCenter",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "menuPlacement",
            "type": [
                "end",
                "middle",
                "start"
            ],
            "isRequired": false
        },
        {
            "name": "paddingHorizontal",
            "type": [
                "lg",
                "md",
                "none",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "paddingVertical",
            "type": [
                "lg",
                "md",
                "none",
                "sm"
            ],
            "isRequired": false
        },
        {
            "name": "scopeStylesToContainer",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "sticky",
            "type": [
                "boolean"
            ],
            "isRequired": false
        },
        {
            "name": "togglerPlacement",
            "type": [
                "end",
                "start"
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

const baseClass$2 = `${GLOBAL_PREFIX}-navbar__toggler`;
function getTogglerClasses(isOpen, displayBelow = '1024') {
    return [
        baseClass$2,
        `${baseClass$2}--${isOpen ? 'open' : 'closed'}`,
        `${baseClass$2}--${displayBelow}`,
    ].filter(Boolean).join(' ').trim();
}
const renderToggler = (props) => {
    return (h("div", { role: "button", "aria-label": "Toggle Navbar Menu", onClick: () => {
            props.toggleMenu();
        }, "aria-expanded": props.isOpen.toString(), class: getTogglerClasses(props.isOpen, props.displayBelow), part: 'toggler' },
        h("tnw-icon", { name: 'tnw-menu', color: 'auto', size: 'md', appearance: 'outlined', appearanceColor: 'auto', hiddenAria: false, borderRadius: 'circle', part: 'toggler-icon' })));
};

const baseClass$1 = 'tnw-navbar-menu';
// Utility: Get Menu Classes
function getMenuClasses(hideMenuBelow, isMenuOpened, menuPosition) {
    return [
        baseClass$1,
        `${baseClass$1}--hideMenuBelow-${hideMenuBelow}`,
        isMenuOpened ? `${baseClass$1}--opened` : '',
        `${baseClass$1}--position-${menuPosition}`,
    ].filter(Boolean).join(' ').trim();
}
// Utility: Get Menu Item Classes
function getItemClasses(hasSubmenu, itemsHoverAppearanceColor = 'auto', itemsHoverAppearance = 'none', itemsBorderRadius = 'default', itemsHoverEffect) {
    const itemClass = `${baseClass$1}__item`;
    return [
        itemClass,
        `${itemClass}--${itemsHoverAppearance}`,
        (itemsHoverAppearance === 'outlined' || itemsHoverAppearance === 'solid') && `${itemClass}--hasPadding`,
        `${itemClass}--${itemsHoverAppearance}-${itemsHoverAppearanceColor}`,
        isNotEmptyString(itemsHoverEffect) ? `${itemClass}--${itemsHoverEffect}` : '',
        (itemsHoverAppearance === 'solid' || itemsHoverAppearance === 'outlined') && getBorderRadiusClass(itemsBorderRadius),
        hasSubmenu ? `${itemClass}--hasSubmenu` : '',
    ].filter(Boolean).join(' ').trim();
}

const dropdownMenuDefaults = {
    itemsData: [],
    itemsSize: 'sm',
    menuInvisibilityBreakpoint: '1024',
};

const baseClass = `${GLOBAL_PREFIX}-navbar-dropdown-menu`;
function getDropdownMenuClasses(menuInvisibilityBreakpoint) {
    return [
        baseClass,
        `${baseClass}--bp-${menuInvisibilityBreakpoint}`,
    ]
        .filter(Boolean)
        .join(' ')
        .trim();
}

const renderDropdownMenu = ({ itemsData, itemsSize = dropdownMenuDefaults.itemsSize, menuInvisibilityBreakpoint, }) => {
    const hostClasses = getDropdownMenuClasses(menuInvisibilityBreakpoint);
    return (h("ul", { class: `${hostClasses}__list` }, itemsData.map((item) => (h("li", { class: `${baseClass}__item`, tabindex: "0" },
        h("tnw-anchor", { href: item.link, text: item.label, newTab: item.newTab, hideNewTabIcon: false, textDecoration: "none", size: itemsSize }))))));
};

function processParsedMenuData(parsedMenuData) {
    const items = parsedMenuData.menuItems;
    const hideMenuBelow = parsedMenuData.hideMenuBelow;
    const itemsSize = parsedMenuData.itemsSize;
    const itemsColor = parsedMenuData.itemsColor;
    const itemsHoverAppearanceColor = parsedMenuData.itemsHoverAppearanceColor;
    const itemsHoverEffect = parsedMenuData.itemsHoverEffect;
    const itemsHoverAppearance = parsedMenuData.itemsHoverAppearance;
    const itemsBorderRadius = parsedMenuData.itemsBorderRadius;
    const menuInvisibilityBreakpoint = parsedMenuData.hideMenuBelow;
    return {
        items,
        hideMenuBelow,
        itemsSize,
        itemsColor,
        itemsHoverAppearanceColor,
        itemsHoverEffect,
        itemsHoverAppearance,
        itemsBorderRadius,
        menuInvisibilityBreakpoint,
    };
}
// Render Function for Menu
const renderMenu = (parsedMenuData, isMenuOpened, menuPosition, itemLinkElement) => {
    const { items: menuItems, hideMenuBelow, itemsSize, itemsColor, menuInvisibilityBreakpoint, itemsHoverAppearanceColor, itemsHoverEffect, itemsHoverAppearance, itemsBorderRadius, } = processParsedMenuData(parsedMenuData);
    const menuClasses = getMenuClasses(hideMenuBelow, isMenuOpened, menuPosition);
    if (menuItems === null || menuItems === undefined || menuItems.length === 0) {
        return null;
    }
    return (h("ul", { class: menuClasses, "data-nav-menu": true, part: "menu" }, menuItems.map((item) => {
        // const LinkElement: any = itemLinkElement || (
        //     <tnw-anchor
        //         href={item.link}
        //         newTab={item.newTab}
        //         hideNewTabIcon={false}
        //         color={itemsColor}
        //         textDecoration="none"
        //         size={itemsSize}
        //         part="menu-link"
        //         text={item.label}
        //     >
        //         {!isArrayEmpty(item.subMenu) && (
        //             <tnw-icon name="tnw-chevron-down" hiddenAria={true} />
        //         )}
        //     </tnw-anchor>
        // );
        const LinkElement = typeof itemLinkElement === 'function' ? itemLinkElement : null;
        console.log('LinkElement ', typeof itemLinkElement === 'function');
        return (h("li", { class: getItemClasses(!isArrayEmpty(item.subMenu), itemsHoverAppearanceColor, itemsHoverAppearance, itemsBorderRadius, itemsHoverEffect), tabindex: "0", part: "menu-item" },
            isNotEmptyString(item.link) ? (LinkElement !== null ? (
            // Render custom link component (e.g., React Router Link)
            h(LinkElement, { to: item.link, target: item.newTab ? '_blank' : undefined, rel: item.newTab ? 'noopener noreferrer' : undefined, class: "custom-link-class" },
                item.label,
                !isArrayEmpty(item.subMenu) && (h("tnw-icon", { name: "tnw-chevron-down", hiddenAria: true })))) : (h("a", { href: item.link, target: item.newTab ? '_blank' : undefined, rel: item.newTab ? 'noopener noreferrer' : undefined, class: "custom-link-class" },
                item.label,
                !isArrayEmpty(item.subMenu) && (h("tnw-icon", { name: "tnw-chevron-down", hiddenAria: true }))))) : (h("tnw-text", { text: item.label, textTag: "span", color: itemsColor, size: itemsSize, part: "menu-menulink" }, !isArrayEmpty(item.subMenu) && (h("tnw-icon", { name: "tnw-chevron-down", hiddenAria: true })))),
            !isArrayEmpty(item.subMenu) && (renderDropdownMenu({
                itemsData: item.subMenu,
                itemsSize: itemsSize,
                menuInvisibilityBreakpoint: menuInvisibilityBreakpoint
            }))));
    })));
};

const TnwNavbar$1 = /*@__PURE__*/ proxyCustomElement(class TnwNavbar extends H {
    updateHideMenuBelow(newValue) {
        this.hideMenuBelow = newValue;
    }
    parseMenuData(newValue) {
        try {
            this.parsedMenuData = isNotEmptyString(newValue) ? JSON.parse(newValue) : [];
        }
        catch (error) {
            console.error('Navbar: Error parsing menu data', error);
            this.parsedMenuData = null;
        }
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tnwBreakpointChange = createEvent(this, "tnwBreakpointChange", 7);
        this.tnwMenuToggle = createEvent(this, "tnwMenuToggle", 7);
        this.tnwScrollChange = createEvent(this, "tnwScrollChange", 7);
        this.baseClass = `${GLOBAL_PREFIX}-navbar`;
        this.parsedMenuData = null;
        this.isVisible = false;
        /**
         * Determines the appearance of the navigation bar. Supports styles like 'outlined', 'solid', 'transparent', etc.
         */
        this.appearance = 'solid';
        /**
         * Specifies the appearance color of the navigation bar. Available options include 'primary', 'secondary', 'black', 'white', etc.
         */
        this.appearanceColor = 'auto';
        /**
         * Makes the navigation bar sticky at the top of the viewport when set to true.
         */
        this.sticky = false;
        /**
         * If true, the navigation bar content will not be wrapped in a container for centering and padding.
         */
        this.disableInternalContainer = false;
        /**
         * When true, the component will apply its styles (like the appearance colors and effects) to its internal container element.
         * If false, the styles will be applied directly to the component host element.
         */
        this.scopeStylesToContainer = false;
        /**
         * When true, the menu will be centered exactly in the horizontal center of the screen. Only if `menuPosition` is set to 'middle'.
         */
        this.menuExactCenter = false;
        /**
         * Determines the placement of the menu. Available options are 'start', 'middle', or 'end'.
         */
        this.menuPlacement = 'middle';
        /**
         * Specifies the placement of the burger menu toggler. Options are 'start' or 'end' of the navbar.
         */
        this.togglerPlacement = 'end';
        /**
         * Sets the border-radius of the navigation bar.
         */
        this.borderRadius = 'default';
        /**
         * Sets the horizontal padding size of the navigation bar.
         */
        this.paddingHorizontal = 'md';
        /**
         * Sets the vertical padding size of the navigation bar.
         */
        this.paddingVertical = 'md';
        /**
         * If true, the CTA slot is enabled.
         */
        this.enableCtaSlot = false;
        /**
         * If true, the logo slot is enabled.
         */
        this.enableLogoSlot = false;
        /**
         * If true, the menu slot is enabled.
         */
        this.enableMenuSlot = false;
        /**
         * The breakpoint at which the navbar should be hidden. Set to `false` to always show the navbar.
         */
        this.hideMenuBelow = false;
        this.handleScroll = () => {
            if (this.sticky) {
                this.tnwScrollChange.emit({ scrollY: window.scrollY });
            }
        };
        if (isCSSStyleSheetSupported()) {
            this.componentStyles = new CSSStyleSheet();
            this.componentStyles.replaceSync(styles);
        }
    }
    connectedCallback() {
        if (isAdoptedStyleSheetsSupported()) {
            this.el.shadowRoot.adoptedStyleSheets = [
                containerStyleSheet,
                borderRadiusStyleSheet,
                appearanceColorSheet,
                extendedAppearanceStyleSheet,
                this.componentStyles
            ];
        }
        if (this.sticky) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
    componentWillLoad() {
        validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableCtaSlot, this.enableLogoSlot, this.enableMenuSlot, this.hideMenuBelow, this.menuData, this.menuExactCenter, this.menuPlacement, this.paddingHorizontal, this.paddingVertical, this.scopeStylesToContainer, this.sticky, this.togglerPlacement]);
        // Manually parse menu data on initial load
        if (isNotEmptyString(this.menuData)) {
            this.parseMenuData(this.menuData);
        }
    }
    disconnectedCallback() {
        if (this.sticky) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
    getHostClasses() {
        const { baseClass, sticky } = this;
        return [
            baseClass,
            sticky ? `${baseClass}--sticky` : '',
            ...(!this.scopeStylesToContainer ? this.getConditionalClasses() : []),
        ].filter(Boolean).join(' ').trim();
    }
    getConditionalClasses() {
        const { appearance, appearanceColor, borderRadius, paddingHorizontal, paddingVertical } = this;
        return [
            (paddingHorizontal !== 'none') ? `paddingX-${paddingHorizontal}` : ``,
            (paddingVertical !== 'none') ? `paddingY-${paddingVertical}` : ``,
            borderRadius !== 'none' ? getBorderRadiusClass(borderRadius) : ``,
            // Add appearance class if the appearance is not outlined
            appearance !== 'outlined-bottom' ? getAppearanceClass(appearance, appearanceColor) : (appearance === 'outlined-bottom' ? `outlined-bottom ${appearanceColor}` : ''),
        ].filter(Boolean);
    }
    getContentClasses() {
        const { baseClass } = this;
        const contentClass = `${baseClass}__content`;
        return [
            contentClass,
            ...(this.scopeStylesToContainer ? this.getConditionalClasses() : []),
        ].filter(Boolean).join(' ').trim();
    }
    menuToggler() {
        if (this.menu() === null) {
            return null;
        }
        return (renderToggler({
            isOpen: this.isVisible,
            togglerDisplay: { display: 'none' },
            toggleMenu: () => {
                this.isVisible = !this.isVisible;
                this.tnwMenuToggle.emit({ isOpen: this.isVisible });
            }
        }));
    }
    menu() {
        if (this.parsedMenuData === null) {
            if (this.enableMenuSlot) {
                return h$1("slot", { name: "menu" });
            }
            return null;
        }
        return renderMenu(this.parsedMenuData, this.isVisible, this.menuPlacement, this.linkElement);
    }
    logo() {
        if (!this.enableLogoSlot) {
            return null;
        }
        return h$1("slot", { name: 'logo' });
    }
    cta() {
        if (!this.enableCtaSlot) {
            return null;
        }
        return h$1("slot", { name: 'cta' });
    }
    renderContent() {
        return (h$1("nav", { class: this.getContentClasses(), part: 'navbar' }, (((this.menuPlacement === 'start' || this.togglerPlacement === 'start') && this.menu()) || this.logo()) &&
            h$1("div", { class: `${this.baseClass}__start` }, this.togglerPlacement === 'start' && this.menuToggler(), this.logo(), this.menuPlacement === 'start' && this.menu()), (this.menuPlacement === 'middle' && this.menu()) && (h$1("div", { class: `${this.baseClass}__middle ${this.menuExactCenter ? `${this.baseClass}__middle--exact-center` : ''}` }, this.menu())), (this.menu() || this.cta()) &&
            h$1("div", { class: `${this.baseClass}__end` }, this.menuPlacement === 'end' && this.menu(), this.cta(), this.togglerPlacement === 'end' && this.menuToggler())));
    }
    render() {
        return (h$1(Host, { key: 'f001c85abfc1b6fd7b29f6fbbb40557c08424aed', class: this.getHostClasses() }, this.disableInternalContainer ? (this.renderContent()) : (h$1("div", { class: 'container' }, this.renderContent()))));
    }
    get el() { return this; }
    static get watchers() { return {
        "hideMenuBelow": ["updateHideMenuBelow"],
        "menuData": ["parseMenuData"]
    }; }
}, [1, "tnw-navbar", {
        "appearance": [1],
        "appearanceColor": [1, "appearance-color"],
        "sticky": [4],
        "disableInternalContainer": [4, "disable-internal-container"],
        "scopeStylesToContainer": [4, "scope-styles-to-container"],
        "menuExactCenter": [4, "menu-exact-center"],
        "menuPlacement": [1, "menu-placement"],
        "togglerPlacement": [1, "toggler-placement"],
        "borderRadius": [1, "border-radius"],
        "paddingHorizontal": [1, "padding-horizontal"],
        "paddingVertical": [1, "padding-vertical"],
        "menuData": [1, "menu-data"],
        "linkElement": [16],
        "enableCtaSlot": [4, "enable-cta-slot"],
        "enableLogoSlot": [4, "enable-logo-slot"],
        "enableMenuSlot": [4, "enable-menu-slot"],
        "hideMenuBelow": [8, "hide-menu-below"],
        "parsedMenuData": [32],
        "isVisible": [32]
    }, undefined, {
        "hideMenuBelow": ["updateHideMenuBelow"],
        "menuData": ["parseMenuData"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tnw-navbar", "tnw-anchor", "tnw-icon", "tnw-text"];
    components.forEach(tagName => { switch (tagName) {
        case "tnw-navbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TnwNavbar$1);
            }
            break;
        case "tnw-anchor":
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

const TnwNavbar = TnwNavbar$1;
const defineCustomElement = defineCustomElement$1;

export { TnwNavbar, defineCustomElement };

//# sourceMappingURL=tnw-navbar.js.map