import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-divider`;

export const styles = `
:host {
    display: block;
    border-width: 1px;
    width: 100%:
    height: 1px;
}

:host(.${baseClass}--solid) {
    border-bottom-style: solid;
}

:host(.${baseClass}--dashed) {
    border-bottom-style: dashed;
}

:host(.${baseClass}--primary) {
    border-bottom-color: var(--tnw-primary-color);
}
:host(.${baseClass}--secondary) {
    border-bottom-color: var(--tnw-secondary-color);
}
:host(.${baseClass}--auto) {
    border-bottom-color: var(--tnw-border-color);
}
:host(.${baseClass}--inverse) {
    border-bottom-color: var(--tnw-border-color-inverse);
}
:host(.${baseClass}--light) {
    border-bottom-color: var(--tnw-border-color-light);
}
:host(.${baseClass}--white) {
    border-bottom-color: var(--tnw-white);
}
:host(.${baseClass}--black) {
    border-bottom-color: var(--tnw-black);
}
:host(.${baseClass}--gray100) {
    border-bottom-color: var(--tnw-gray100);
}
:host(.${baseClass}--gray200) {
    border-bottom-color: var(--tnw-gray200);
}
:host(.${baseClass}--gray300) {
    border-bottom-color: var(--tnw-gray300);
}
:host(.${baseClass}--gray400) {
    border-bottom-color: var(--tnw-gray400);
}
:host(.${baseClass}--gray500) {
    border-bottom-color: var(--tnw-gray500);
}
:host(.${baseClass}--gray600) {
    border-bottom-color: var(--tnw-gray600);
}
:host(.${baseClass}--gray700) {
    border-bottom-color: var(--tnw-gray700);
}
:host(.${baseClass}--gray800) {
    border-bottom-color: var(--tnw-gray800);
}
:host(.${baseClass}--gray900) {
    border-bottom-color: var(--tnw-gray900);
}
`;