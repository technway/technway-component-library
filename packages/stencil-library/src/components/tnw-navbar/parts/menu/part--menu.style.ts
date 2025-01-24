import { GLOBAL_PREFIX } from "../../../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-navbar-menu`;
const itemClass = `${baseClass}__item`;

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
    top: 140%;
    left: 0;
    right: 0;
    border: var(--tnw-border-sm) solid var(--tnw-border-color-opacity) !important;
    background-color: var(--tnw-background-color) !important;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    z-index: 0;
`);

export const styles = `
.${baseClass} {
    display: flex;
    align-items: center;
    gap: var(--tnw-navbar-menu-gap-f);
    margin: 0;
    padding: 0;
    list-style: none;
}

.${baseClass}--exact-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media only screen and (max-width: 1439px) {
    .${baseClass}--hideMenuBelow-1439 {
        ${closedMenuStyles()}
    }
    .${baseClass}--hideMenuBelow-1439.${baseClass}--opened {
        ${openedMenuStyles()}
    }
}
@media only screen and (max-width: 1024px) {
    .${baseClass}--hideMenuBelow-1024 {
        ${closedMenuStyles()}
    }
    .${baseClass}--hideMenuBelow-1024.${baseClass}--opened {
        ${openedMenuStyles()}
    }
}
@media only screen and (max-width: 767px) {
    .${baseClass}--hideMenuBelow-767 {
        ${closedMenuStyles()}
    }
    .${baseClass}--hideMenuBelow-767.${baseClass}--opened {
        ${openedMenuStyles()}
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}--hideMenuBelow-567 {
        ${closedMenuStyles()}
    }
    .${baseClass}--hideMenuBelow-567.${baseClass}--opened {
        ${openedMenuStyles()}   
    }
}
.${baseClass}--hideMenuBelow-always {
    ${closedMenuStyles()}
}
.${baseClass}--hideMenuBelow-always.${baseClass}--opened {
    ${openedMenuStyles()}   
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

::slotted(a) {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
`;