import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-subscription-form`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    box-sizing: border-box;
}

form {
    display: flex;
    align-items: stretch;
    width: 100%;
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