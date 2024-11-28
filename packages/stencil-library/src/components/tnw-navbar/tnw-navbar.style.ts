import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-navbar`;
const contentClass = `${baseClass}__content`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    position: relative;
    width: 100%;
    z-index: 10;
}

:host(.${baseClass}--sticky) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
}

.${baseClass}__start,
.${baseClass}__middle,
.${baseClass}__end {
    display: flex;
    align-items: center;
    gap: 20px;
}

@media only screen and (max-width: 567px) {
    .${baseClass}__start,
    .${baseClass}__middle,
    .${baseClass}__end {
        gap: 10px;
    }
}

.${baseClass}__start {
    margin-inline-end: auto;
}

.${baseClass}__middle {
    margin-inline: auto;
}

.${baseClass}__end {
    margin-inline-start: auto;
}

.${baseClass}__middle--1024.${baseClass}__middle--exact-center {
    @media only screen and (min-width: 1025px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
    }
}
.${baseClass}__middle--767.${baseClass}__middle--exact-center {
    @media only screen and (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
    }
}

.${contentClass} {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.${contentClass}--glassmorphism {
    backdrop-filter: blur(20px);
    background-color: rgba(var(--tnw-background-color-rgb), 0.7);
    border: var(--tnw-border-sm) solid rgba(var(--tnw-border-color-rgb), 0.85);
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
`;