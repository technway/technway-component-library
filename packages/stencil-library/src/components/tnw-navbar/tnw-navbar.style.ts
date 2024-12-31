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

.${contentClass}--padding-sm {
    padding: 5px;
}
.${contentClass}--padding-md {
    padding: 10px;
}
.${contentClass}--padding-lg {
    padding: 15px;
}

.${contentClass}--paddingBottom-sm {
    padding-bottom: 5px;
}
.${contentClass}--paddingBottom-md {
    padding-bottom: 10px;
}
.${contentClass}--paddingBottom-lg {
    padding-bottom: 15px;
}

.${contentClass}--outlined-bottom {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
.${contentClass}--outlined-bottom.${contentClass}--primary {
    border-bottom-color: var(--tnw-primary-color);
}
.${contentClass}--outlined-bottom.${contentClass}--secondary {
    border-bottom-color: var(--tnw-secondary-color);
}
.${contentClass}--outlined-bottom.${contentClass}--auto {
    border-bottom-color: var(--tnw-border-color);
}
.${contentClass}--outlined-bottom.${contentClass}--inverse {
    border-bottom-color: var(--tnw-border-color-inverse);
}
.${contentClass}--outlined-bottom.${contentClass}--light {
    border-bottom-color: var(--tnw-border-color-opacity);
}
.${contentClass}--outlined-bottom.${contentClass}--white {
    border-bottom-color: var(--tnw-white);
}
.${contentClass}--outlined-bottom.${contentClass}--black {
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