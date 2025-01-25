import { Component, Prop, Host, h, Element, State, Event, EventEmitter } from '@stencil/core';
import { generateRandomId, getBorderRadiusClass, GLOBAL_PREFIX, isNotEmptyString } from '../../utils/utils';
import { styles } from './tnw-input.styles';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { BorderRadiusType, ColorType, ExtendedSizeType } from '../../utils/component-props-types';
import { createStore } from '@stencil/store';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { containsSQLInjectionPatterns, sanitizeInput } from '../../utils/security-utils';
import { validateProps } from './utils/tnw-input-validate-props';

/**
 * The `tnw-input` component is a customizable input field that supports various input types, validation, and appearance options.
 * It is designed to be versatile and accessible, allowing for both visual and screen-reader friendly labels, as well as handling error alerts.
 * 
 * @part input - The `<input>` element itself.
 * @part label - The `<label>` element for the input.
 * @part alert - The alert message for validation errors or other information.
 * @part help-text - The help text providing additional context for the input.
 */
@Component({
  tag: 'tnw-input',
  shadow: true,
})
export class TnwInput {
  private baseClass = `${GLOBAL_PREFIX}-input`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwInputElement;

  @State() store = createStore({
    inputValue: this.value,
    alertMessage: this.helpText,
    alertType: undefined,
    isInvalid: false,
  });

  /**
   * The label for the input.
   */
  @Prop() label?: string;

  /**
   * The unique ID for the input element. If not provided, a random ID will be generated.
   */
  @Prop() inputId?: string = generateRandomId(this.baseClass);

  /**
   * The input type (e.g., text, password).
   */
  @Prop() type: string = 'text';

  /**
   * The placeholder text for the input.
   */
  @Prop() placeholder?: string;

  /**
   * Defines the appearance of the input.
   */
  @Prop() appearance?: 'outlined' | 'underlined' | 'none' = 'outlined';

  /**
   * The appearance color of the input, determining the overall color scheme.
   */
  @Prop() appearanceColor?: ColorType = 'auto';

  /**
   * If true, the label is visually hidden but still accessible to screen readers.
   */
  @Prop() isLabelSrOnly?: boolean;

  /**
   * The name of the input field.
   */
  @Prop() name?: string = '';

  /**
   * The size of the input.
   */
  @Prop() size?: ExtendedSizeType = 'md';

  /**
   * The initial value of the input.
   */
  @Prop() value?: string = '';

  /**
   * Marks the input as required.
   */
  @Prop() isRequired?: boolean = false;

  /**
   * The maximum number of characters allowed in the input.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum number of characters required in the input.
   */
  @Prop() minlength?: number;

  /**
   * A regex pattern to validate the input.
   */
  @Prop() pattern?: string = '';

  /**
   * The autocomplete setting for the input.
   */
  @Prop() autoComplete?: string = 'off';

  /**
   * Disables the input if set to true.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Specifies the hover effect of the input.
   * - `color`: Changes the border color of the input when hovered.
   * - `ring`: Adds a ring around the input when hovered.
   */
  @Prop() hoverEffect?: 'color' | 'ring' = 'color';

  /**
   * The help text providing additional information about the input.
   */
  @Prop() helpText?: string = '';

  /**
   * The border radius of the input.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * Determines whether the input value should be sanitized during change events to prevent SQL injection attacks.
   * If set to `true`, the input will be sanitized before being validated.
   * If set to `false`, the input will still undergo validation but without sanitization.
   */
  @Prop() sanitizeInput?: boolean = false;

  /**
   * Event emitted when the input value changes. The event's payload contains the new value.
   */
  @Event() inputChanged: EventEmitter<string>;

  /**
   * Event emitted when validation fails.
   * 
   * The event payload contains:
   * - `inputId`: The unique ID of the input element.
   * - `error`: A string message explaining the validation failure.
   */
  @Event() validationFailed!: EventEmitter<{ inputId: string; error: string }>;

  /**
   * Event emitted when the input receives focus.
   */
  @Event() tnwInputFocused!: EventEmitter<void>;

  /**
   * Event emitted when the input loses focus.
   */
  @Event() tnwInputBlurred!: EventEmitter<void>;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        extendedAppearanceStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    validateProps([this.appearance, this.appearanceColor, this.autoComplete, this.borderRadius, this.disabled, this.helpText, this.hoverEffect, this.inputId, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.pattern, this.placeholder, this.sanitizeInput, this.size, this.type, this.value]);

    /**
     * Initialize the store with the initial value.
     */
    this.setStore(this.value);
  }

  /**
   * Sets the store values for the input component.
   *
   * @param value - The value to be set in the store. Optional.
   * @param sanitizeValue - A flag indicating whether the value should be sanitized. Optional.
   *
   * This method attempts to set the store value and resets any alert messages or validation states.
   * If an error occurs during this process, it sets the appropriate alert messages and validation states,
   * and emits a validationFailed event with the input ID and error message.
   *
   * @throws Will set an error message in the store and emit a validationFailed event if an error occurs.
   */
  private setStore(value?: string, sanitizeValue?: boolean): void {
    try {
      this.setStoreValue(value, sanitizeValue);

      this.store.set('alertMessage', '');
      this.store.set('alertType', undefined);
      this.store.set('isInvalid', false);
    } catch (error) {
      const errorMsg = error.message || this.helpText;
      this.store.set('alertMessage', errorMsg);
      this.store.set('alertType', 'danger');
      this.store.set('isInvalid', true);
      this.validationFailed.emit({ inputId: this.inputId, error: errorMsg });
    }
  }

  /**
   * Sanitizes the input value based on the provided parameters.
   *
   * @param value - The input value to be sanitized. Defaults to the value from the store.
   * @param sanitizeValue - A boolean flag indicating whether to sanitize the input value. Defaults to true.
   * @returns The sanitized or original input value based on the sanitizeValue flag.
   */
  private sanitizeValue(
    value: string = this.store.get("inputValue"),
    sanitizeValue: boolean = true
  ): string {
    const validatedValue =
      sanitizeValue && this.sanitizeInput
        ? sanitizeInput(value) :
        value;

    return validatedValue;
  }

  /**
   * Validates the input value based on various criteria such as SQL injection patterns,
   * pattern mismatch, minimum length, and maximum length.
   *
   * @param value - The input value to be validated.
   * @param sanitizeValue - A boolean indicating whether the value should be sanitized before validation.
   * 
   * @throws {Error} If the input contains SQL injection patterns.
   * @throws {Error} If the input does not match the required pattern.
   * @throws {Error} If the input is shorter than the minimum length.
   * @throws {Error} If the input is longer than the maximum length.
   */
  private validateInput(value?: string, sanitizeValue?: boolean): void {
    const validatedValue = this.sanitizeValue(value, sanitizeValue) || '';

    // Check for SQL injection patterns
    if (containsSQLInjectionPatterns(validatedValue)) {
      throw new Error('Invalid SQL patterns detected.');
    }

    // Check for pattern mismatch
    if (this.pattern && !new RegExp(this.pattern).test(validatedValue)) {
      throw new Error('Input does not match the required pattern.');
    }

    // Check for minLength violation
    if (this.minlength && validatedValue.length < this.minlength) {
      throw new Error(`Input is too short. Minimum length is "${this.minlength}" characters.`);
    }

    // check for maxLength violation
    if (this.maxlength && validatedValue.length > this.maxlength) {
      throw new Error(`Input is too long. Maximum length is "${this.maxlength}" characters.`);
    }
  }

  /**
   * Sets the value in the store after sanitizing and validating it.
   *
   * @param value - The value to be set in the store. If not provided, defaults to an empty string.
   * @param sanitizeValue - A flag indicating whether the value should be sanitized before setting it in the store.
   */
  private setStoreValue(value?: string, sanitizeValue?: boolean): void {
    const validatedValue = this.sanitizeValue(value, sanitizeValue) || '';

    this.validateInput(validatedValue, sanitizeValue);

    this.store.set('inputValue', validatedValue);
  }

  /**
   * Handles the input change event.
   *
   * @param event - The input change event.
   *
   * This method performs the following actions:
   * 1. Retrieves the input element from the event target.
   * 2. Extracts the value from the input element.
   * 3. Validates the extracted value. If the sanitizeInput prop is set to true, the value is sanitized.
   * 4. Updates the store with the new value.
   * 5. Emits the `inputChanged` event with the new value.
   * 6. Sets the input element's value to the validated value.
   */
  private handleInputOnChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value: string = input.value;
    const validatedValue = this.sanitizeValue(value);

    this.setStore(value)

    this.inputChanged.emit(validatedValue);
    input.value = this.sanitizeValue(validatedValue);
  }

  /**
   * Handles the input event on the input element.
   *
   * @param event - The input event triggered by the user.
   * 
   * This method performs the following actions:
   * 1. Retrieves the input element from the event target.
   * 2. Extracts the value from the input element.
   * 3. Updates the store with the new value. It validates the input dynamically and displays alerts if necessary.
   *    The value isn't sanitized even if the sanitizeInput prop is set to true.
   *    It's sanitized only when the input change event is triggered.
   */
  private handleInputOnInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value: string = input.value;

    this.setStore(value, false);
  }

  /**
   * Handles the input focus event.
   */
  private handleInputFocus = () => {
    this.tnwInputFocused.emit();
  }

  /**
   * Handles the input blur event.
   */
  private handleInputBlur = () => {
    this.tnwInputBlurred.emit();
  }

  private getAriaAttributes(): Record<string, string | null> {
    return {
      'aria-invalid': this.store.get('isInvalid') ? 'true' : null,
      'aria-describedby': [
        isNotEmptyString(this.store.get('alertMessage')) ? `${this.inputId}-${this.store.get('alertType')}` : null,
        isNotEmptyString(this.helpText) ? `${this.inputId}-help` : null,
      ].filter(Boolean).join(' '),
      'aria-labelledby': isNotEmptyString(this.label) ? this.inputId : null,
    };
  }

  private getInputClasses(): string {
    const { baseClass, appearance, appearanceColor, size, hoverEffect } = this;
    const alertType = this.store.get('alertType');

    return [
      baseClass,
      `${baseClass}--${appearance}`,
      `${baseClass}--${appearanceColor}`,
      `${baseClass}--${size}`,
      `${baseClass}--hover-${hoverEffect}`,
      this.disabled ? `${baseClass}--disabled` : '',
      isNotEmptyString(alertType) ? `${baseClass}--${alertType}` : ``,
      getBorderRadiusClass(this.borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private renderLabel() {
    if (!isNotEmptyString(this.label)) {
      return null;
    }

    return (
      <tnw-label
        class={this.isLabelSrOnly ? 'sr-only' : ''}
        text={this.label}
        htmlFor={this.inputId}
        isSrOnly={this.isLabelSrOnly}
        part='label'
      ></tnw-label>
    );
  }

  private renderAlert(): null {
    const alertMessage = this.store.get('alertMessage');
    const alertType = this.store.get('alertType');

    if (!isNotEmptyString(alertMessage)) {
      return null;
    }

    return (
      <tnw-alert
        message={alertMessage}
        appearanceColor={alertType}
        alertId={`${this.inputId}-${alertType}`}
        part="alert"
      />
    );
  }

  private renderHelpText() {
    if (!isNotEmptyString(this.helpText)) {
      return null;
    }

    return (
      <tnw-alert
        message={this.helpText}
        alertId={`${this.inputId}-help`}
        part="help-text"
      />
    );
  }

  render() {
    return (
      <Host>
        {this.renderLabel()}
        <input
          class={this.getInputClasses()}
          id={this.inputId}
          type={this.type}
          name={this.name}
          value={this.store.get('inputValue')}
          required={this.isRequired}
          placeholder={this.placeholder}
          maxlength={this.maxlength}
          minlength={this.minlength}
          pattern={this.pattern}
          autocomplete={this.autoComplete}
          disabled={this.disabled}
          {...this.getAriaAttributes()}
          onInput={this.handleInputOnInput}
          onChange={this.handleInputOnChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          part='input'
        />
        {this.renderAlert() || this.renderHelpText()}
      </Host>
    );
  }
}