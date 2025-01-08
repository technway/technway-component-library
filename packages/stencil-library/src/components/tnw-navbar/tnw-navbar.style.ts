import { GLOBAL_PREFIX } from "../../utils/utils";
import { styles as menuStyles } from "./parts/menu/part--menu.style";
import { styles as dropdownMenuStyles } from "./parts/dropdpwn/part--dropdown.style";
import { styles as togglerStyles } from "./parts/toggler/part--toggler.style";

const baseClass = `${GLOBAL_PREFIX}-navbar`;
const contentClass = `${baseClass}__content`;

const exactCenterStyles = () => (`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
`);

export let styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    width: 100%;
    z-index: 10;
}

:host(.${baseClass}--sticky) {
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

.${baseClass}__start {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-inline-end: auto;
}
.${baseClass}__middle {
    margin-inline: auto;
}
.${baseClass}__end {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-inline-start: auto;
}
    
@media only screen and (min-width: 1440px) {
    .${baseClass}--hideMenuBelow-1439.${baseClass}__middle--exact-center {
        ${exactCenterStyles()}
    }
}
@media only screen and (min-width: 1025px) {
    .${baseClass}--hideMenuBelow-1024.${baseClass}__middle--exact-center {
        ${exactCenterStyles()}
    }
}
@media only screen and (min-width: 768px) {
    .${baseClass}--hideMenuBelow-767.${baseClass}__middle--exact-center {
        ${exactCenterStyles()}
    }
}
@media only screen and (min-width: 568px) {
    .${baseClass}--hideMenuBelow-567px.${baseClass}__middle--exact-center {
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

.${baseClass}__logo {
    max-height: 40px;
    max-width: 150px;
    object-fit: contain;
    margin-right: 16px;
}
`;

styles += menuStyles;
styles += dropdownMenuStyles;
styles += togglerStyles;