import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-newsletter-form`;

export const styles = `
:host {
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
}

tnw-input {
    width: 100%;
}

tnw-input::part(input) {
    height: 100%;
    padding: 20px 150px 20px 19px !important;
}

/**
 * Primary Variant
 */
:host(.${baseClass}--primary) {
    gap: 10px;
}

/**
 * Secondary Variant
 */
:host(.${baseClass}--secondary) {
    position: relative;
    min-width: 250px;
}
:host(.${baseClass}--secondary) tnw-button {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
}
`;