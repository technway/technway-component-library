import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-search-input`;
const inputClass = `${baseClass}__field`;

const baseStyles = `
* {
    box-sizing: border-box;
}
    
:host {
    --${baseClass}-p: 10px;
    --${baseClass}-pl-c: var(--tnw-placeholder-color);
    --${baseClass}-pl-foc-c: var(--tnw-placeholder-color);
    --${baseClass}-font: var(--tnw-font-text);
    --${baseClass}-transition: 0.3s ease-in-out;
    position: relative;
    display: inline-block;
    width: auto;
}

:host(.${baseClass}--w) {
    width: var(--${baseClass}-width);
}

:host(.${baseClass}--expandable) {
    display: inline-flex;
    align-items: center;
}
`;

const placeholderStyles = `
::-webkit-input-placeholder {
    font-family: var(--${baseClass}-font);
    color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
    opacity: 1;
}
::-moz-placeholder {
    font-family: var(--${baseClass}-font);
    color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
    opacity: 1;
}
:-ms-input-placeholder {
    font-family: var(--${baseClass}-font);
    color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
    opacity: 1;
}
::placeholder {
    font-family: var(--${baseClass}-font);
    color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
    opacity: 1;
}
:focus::placeholder {
    color: var(--tnw-input-placeholder-focus-color, var(--${baseClass}-pl-foc-c));
}
`;

const appearanceStyles = `
.${inputClass}--none {
    border: 0;
}

.${inputClass}--outlined {
    outline-width: var(--tnw-border-sm);
    outline-style: solid;
    border: 0;
    padding: var(--${baseClass}-padding) calc(var(--${baseClass}-padding) * 1.5);
    background: none;
}
.${inputClass}--outlined-primary {
    outline-color: var(--tnw-primary-color);
}
.${inputClass}--outlined-secondary {
    outline-color: var(--tnw-secondary-color);
}
.${inputClass}--outlined-auto {
    outline-color: var(--tnw-border-color);
}
.${inputClass}--outlined-inverse {
    outline-color: var(--tnw-border-color-inverse);
}
.${inputClass}--outlined-light {
    outline-color: var(--tnw-border-color-opacity);
}
.${inputClass}--outlined-white {
    outline-color: var(--tnw-white);
}
.${inputClass}--outlined-black {
    outline-color: var(--tnw-black);
}
.${inputClass}--outlined:focus {
    outline-color: var(--tnw-primary-color);
}

.${inputClass}--underlined {
    border: 0;
    outline-color: transparent;
    padding-bottom: var(--${baseClass}-padding);
    background: none;
}
.${inputClass}--underlined-primary {
    border-bottom: var(--tnw-border-color);
}
.${inputClass}--underlined-secondary {
    border-bottom: var(--tnw-secondary-color);
}
.${inputClass}--underlined-auto {
    border-bottom: var(--tnw-border-color);
}
.${inputClass}--underlined-inverse {
    border-bottom: var(--tnw-border-color-inverse);
}
.${inputClass}--underlined-light {
    border-bottom: var(--tnw-border-color-opacity);
}
.${inputClass}--underlined-white {
    border-bottom: var(--tnw-white);
}
.${inputClass}--underlined-black {
    border-bottom: var(--tnw-black);
}
.${inputClass}--underlined:focus,
.${inputClass}--underlined:focus-within,
.${inputClass}--underlined:focus-visible {
    border-bottom-color: var(--tnw-primary-color);
}
.${inputClass}--underlined:focus-visible {
    outline-style: none;
}
`;

const a11yStyles = `
.sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}
`;

const inputStyles = `
.${inputClass} {
    padding: var(--${baseClass}-p) calc(var(--${baseClass}-p) * 1.5);
    width: 100%;
    transition: all var(--${baseClass}-transition);
}
.${inputClass}--left {
    padding-left: calc(var(--${baseClass}-p) * 2 + 20px);
}
.${inputClass}--right {
    padding-right: calc(var(--${baseClass}-p) * 2 + 20px);
}

.${inputClass}--visible {
    opacity: 1;
    width: 100%;
    visibility: visible;
    padding-left: calc(var(--${baseClass}-p) * 1.5) !important;

}
.${inputClass}--invisible {
    opacity: 0;
    width: 0;
    visibility: hidden;
}

.${inputClass}--expandable {
    outline-color: transparent;
    border: 0;
    background: none;
    padding: 0;
}

/* Remove 'x' icon */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
    display: none;
}
input[type="search"]::-ms-clear,
input[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
}
`;

const iconStyles = `
.${baseClass}__icon--pos {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.${baseClass}__icon--pos.${baseClass}__icon--left {
    left: var(--${baseClass}-p);
}
.${baseClass}__icon--pos.${baseClass}__icon--right {
    right: var(--${baseClass}-p);
}
`;

const styles = [
    baseStyles,
    appearanceStyles,
    placeholderStyles,
    a11yStyles,
    inputStyles,
    iconStyles
].filter(Boolean).join('\n');

export default styles;