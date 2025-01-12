import { GLOBAL_PREFIX } from "../../../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-navbar-dropdown-menu`;
const listClass = `${baseClass}__list`;

export const styles = `
.${baseClass} {
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

    --${baseClass}-border-color: var(--tnw-primary-color-opacity);
    --${baseClass}-background-color: var(--tnw-background-color);
    --${baseClass}-border-radius: var(--tnw-rounded-default);
    --${baseClass}-primary-color: var(--tnw-primary-color);
}


@media only screen and (max-width: 1024px) {
    .${baseClass}--bp-1024 {    
        position: unset;
        min-width: unset;
        transform: unset !important;
        padding-top: 10px;
    }   
    .${baseClass}--bp-1024 .${listClass} {
        padding: 0;
        border: 0;
        background: transparent;
    }   
}

@media only screen and (max-width: 767px) {
    .${baseClass}--bp-767 {    
        position: unset;
        min-width: unset;
        transform: unset !important;
        padding-top: 10px;
    }      
    .${baseClass}--bp-767 .${listClass} {
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
    border: var(--tnw-border-sm) solid var(--${baseClass}-border-color);
    background-color: var(--${baseClass}-background-color);
    width: 100%;
    list-style: none;
    margin: 0;
    border-radius: var(--${baseClass}-border-radius);
}

.${baseClass}__item tnw-anchor::part(anchor),
.${baseClass}__item tnw-icon::part(icon) {
    transition: 0.25s all ease-in-out;
}
.${baseClass}__item:hover tnw-anchor::part(anchor),
.${baseClass}__item:hover tnw-icon::part(icon) {
    color: var(--${baseClass}-primary-color);
}
`;