import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-items-carousel`;
const slideClass = `${baseClass}__slide`;

export const styles = `
* {
    box-sizing: border-box;
}

:host {
    position: relative;
    display: block;
    width: 100%;
}
:host(.${baseClass}--fit-container) {
    overflow: hidden;
}
:host(.${baseClass}:hover) .${baseClass}__control {
    visibility: visible;  
}
:host(.${baseClass}--fit-container) .${baseClass}__control--prev {
    left: var(--tnw-spacing-md);
}

:host(.${baseClass}--fit-container) .${baseClass}__control--prev-rtl {
    right: var(--tnw-spacing-md);
}

:host(.${baseClass}--fit-container) .${baseClass}__control--next {
    right: var(--tnw-spacing-md);
}

:host(.${baseClass}--fit-container) .${baseClass}__control--next-rtl {
    left: var(--tnw-spacing-md);
}

:host(.${baseClass}--is-beginning)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 90px;
    height: 100%;
    display: block;
    background-image: var(--tnw-gradient-x-bg-to-transparent);
    transform: rotate(180deg);
    z-index: 1;
    transition: 0.3s all ease-in-out;
}
:host(.${baseClass}--is-beginning-rtl)::after {
    right: unset;
    left: 0;
    transform: rotate(0);
}
:host(.${baseClass}--is-end)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 90px;
    height: 100%;
    display: block;
    background-image: var(--tnw-gradient-x-bg-to-transparent);
    z-index: 1;
    transition: 0.3s all ease-in-out;
}
:host(.${baseClass}--is-end-rtl)::before {
    left: unset;
    right: 0;
    transform: rotate(180deg);
}

.${baseClass}__slides {
    transition: all 0.52s ease-in-out;
    display: flex;
    gap: 30px;
    flex-wrap: nowrap;
}

.${slideClass} {
    flex-grow: 0;
    flex-shrink: 0;
}
.${slideClass}--sm {
    flex-basis: 300px;
}
.${slideClass}--md {
    flex-basis: 450px;
}
.${slideClass}--lg {
    flex-basis: 600px;
}

.${baseClass}__control--sm {
    --${baseClass}-control-size: 45px;
}
.${baseClass}__control--md {
    --${baseClass}-control-size: 65px;
}
.${baseClass}__control--lg {
    --${baseClass}-control-size: 80px;
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--md {
        --${baseClass}-control-size: 45px;
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--lg {
        --${baseClass}-control-size: 50px;
    }
}
.${baseClass}__control {
    position: absolute;
    opacity: 0.7;
    visibility: hidden;
    top: 50%;
    transform: translateY(-50%);
    width: var(--${baseClass}-control-size);
    height: var(--${baseClass}-control-size);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--tnw-background-color);
    transition: opacity 0.3s ease-in-out;
    border: var(--tnw-border-sm) solid rgba(var(--tnw-border-color-inverse-rgb), 0.25);
    z-index: 2;
    cursor: pointer;
}
.${baseClass}__control:hover {
    opacity: 1;
}
.${baseClass}__control--prev {
    left: calc(var(--${baseClass}-control-size) / -2);
    box-shadow: -9px 2px 9px -4px var(--tnw-shadow);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--prev {
        left: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--prev {
        left: 5px;
    }
}
.${baseClass}__control--prev-rtl {
    left: unset !important;
    right: calc(var(--${baseClass}-control-size) / -2);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--prev-rtl {
        left: unset !important;
        right: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--prev-rtl {
        left: unset !important;
        right: 5px;
    }
}
.${baseClass}__control--next {
    right: calc(var(--${baseClass}-control-size) / -2);
    box-shadow: 9px 2px 9px -4px var(--tnw-shadow);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--next {
        right: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--next {
        right: 5px;
    }
}
.${baseClass}__control--next-rtl {
  right: unset !important;
  left: calc(var(--${baseClass}-control-size) / -2);
}
@media only screen and (max-width: 1024px) {
    .${baseClass}__control--next-rtl {
        right: unset !important;
        left: calc(var(--${baseClass}-control-size) / 2);
    }
}
@media only screen and (max-width: 567px) {
    .${baseClass}__control--next-rtl {
        right: unset !important;
        left: 5px;
    }
}
`;