import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-subscription-form`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    box-sizing: border-box;
    display: block;
}

.${baseClass} {
    display: flex;
    position: relative;
    width: 100%;
    min-width: 250px;
}

.${baseClass}--button-outside {
    align-items: stretch;
    gap: 8px;
}

.${baseClass}--button-outside input {
    flex: 1;
    min-width: 0;
    padding: 8px 16px;
    font-size: 14px;
    border: 1px solid var(--tnw-border-color);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.${baseClass}--button-outside input:focus {
    border-color: var(--tnw-primary-color);
    box-shadow: 0 0 0 1px var(--tnw-primary-color);
}

.${baseClass}--button-outside input.${baseClass}__input--error {
    border-color: var(--tnw-error-color, #dc3545);
}

.${baseClass}--button-outside input.${baseClass}__input--error:focus {
    box-shadow: 0 0 0 1px var(--tnw-error-color, #dc3545);
}

.${baseClass}--button-inside {
    border-width: 1px;
    border-style: solid;
    align-items: center;
    padding: 4px;
    background: var(--tnw-white);
    transition: border-color 0.2s, box-shadow 0.2s;
}

.${baseClass}--button-inside input {
    flex: 1;
    min-width: 0;
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    outline: none;
    background: transparent;
}

.${baseClass}--button-inside:focus-within {
    border-color: var(--tnw-primary-color);
    box-shadow: 0 0 0 1px var(--tnw-primary-color);
}

.${baseClass}--button-inside.${baseClass}--error {
    border-color: var(--tnw-error-color, #dc3545);
}

.${baseClass}--button-inside.${baseClass}--error:focus-within {
    box-shadow: 0 0 0 1px var(--tnw-error-color, #dc3545);
}

/* Theme-based border colors for button-inside variant */
.${baseClass}--button-inside.${baseClass}--primary {
    border-color: var(--tnw-primary-color);
}
.${baseClass}--button-inside.${baseClass}--secondary {
    border-color: var(--tnw-secondary-color);
}
.${baseClass}--button-inside.${baseClass}--auto {
    border-color: var(--tnw-border-color);
}
.${baseClass}--button-inside.${baseClass}--inverse {
    border-color: var(--tnw-border-color-inverse);
}
.${baseClass}--button-inside.${baseClass}--light {
    border-color: var(--tnw-border-color-opacity);
}
.${baseClass}--button-inside.${baseClass}--white {
    border-color: var(--tnw-white);
}
.${baseClass}--button-inside.${baseClass}--black {
    border-color: var(--tnw-black);
}

/* States */
.${baseClass}--loading {
    opacity: 0.7;
    pointer-events: none;
}

.${baseClass}--disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.${baseClass}--disabled input {
    cursor: not-allowed;
}

/* Placeholder styling */
.${baseClass} input::placeholder {
    color: var(--tnw-text-color-muted, #6c757d);
    opacity: 0.8;
}
`;