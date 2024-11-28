import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-scroll-to-top`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    opacity: 0;
    z-index: 9999;
    visibility: hidden;
}
:host(.${baseClass}--visible) {
    opacity: 0.9;
    visibility: visible;
    transition: 0.25s all ease-in-out;
}
:host(.${baseClass}--visible:hover) {
    opacity: 1;
    transform: translateY(-3px);
}
`;