import { Component, Host, Prop, h, State, Element, Event, EventEmitter } from '@stencil/core';
import { generateRandomId, getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { createStore } from '@stencil/store';
import { BorderRadiusType } from '../../utils/component-props-types';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { styles } from './tnw-textarea.styles';
import { validateProps } from './utils/tnw-textarea-validate-props';
import { containsSQLInjectionPatterns, sanitizeInput } from '../../utils/security-utils';

/**
 * The `tnw-textarea` component is a customizable textarea field that supports various appearance options, validation, and accessibility features.
 * 
 * @part textarea - The textarea element itself.
 * @part label - The label element associated with the textarea.
 * @part alert - The element that displays the alert when the textarea is invalid.
 * @part help-text - The element that displays help text below the textarea.
 */
@Component({
  tag: 'tnw-textarea',
  shadow: true,
})
export class TnwTextarea {
  private baseClass = `${GLOBAL_PREFIX}-textarea`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwTextareaElement;

  @State() store = createStore({
    textareaValue: this.value,
    alertMessage: this.helpText,
    alertType: undefined,
    isInvalid: false,
    uniqueId: undefined,
  });

  /**
   * The label for the textarea.
   */
  @Prop() label!: string;

  /**
   * The unique ID for the textarea element. If not provided, a random ID will be generated.
   */
  @Prop() textareaId?: string;

  /**
   * The placeholder text for the textarea.
   */
  @Prop() placeholder!: string;

  /**
   * Defines the appearance of the textarea.
   */
  @Prop() appearance?: 'outlined' | 'underlined' = 'outlined';

  /**
   * If true, the label is visually hidden but still accessible to screen readers.
   */
  @Prop() isLabelSrOnly?: boolean;

  /**
   * The name of the textarea field.
   */
  @Prop() name?: string = '';

  /**
   * The initial value of the textarea.
   */
  @Prop() value?: string = '';

  /**
   * Marks the textarea as required.
   */
  @Prop() isRequired?: boolean = false;

  /**
   * The maximum number of characters allowed in the textarea.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum number of characters required in the textarea.
   */
  @Prop() minlength?: number;

  /**
   * The number of visible text lines for the textarea.
   */
  @Prop() rows: number = 3;

  /**
   * The visible width of the textarea.
   */
  @Prop() cols?: number;

  /**
   * Disables the textarea if set to true.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The autocomplete setting for the textarea.
   */
  @Prop() autoComplete?: string = '';

  /**
   * The help text providing additional information about the textarea.
   */
  @Prop() helpText?: string = '';

  /**
   * Controls the resize behavior of the textarea.
   */
  @Prop() resize?: 'none' | 'horizontal' | 'vertical' | 'both' = 'vertical';

  /**
   * The border radius of the textarea.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * Determines whether the textarea value should be sanitized during change events to prevent SQL injection attacks.
   * If set to `true`, the textarea will be sanitized before being validated.
   * If set to `false`, the textarea will still undergo validation but without sanitization.
   */
  @Prop() sanitizeTextarea?: boolean = false;

  /**
   * Event emitted when the textarea value changes. The event's payload contains the new value.
   */
  @Event() textareaChanged: EventEmitter<string>;

  /**
   * Event emitted when validation fails.
   * 
   * The event payload contains:
   * - `textareaId`: The unique ID of the textarea element.
   * - `error`: A string message explaining the validation failure.
   */
  @Event() validationFailed: EventEmitter<{ textareaId: string; error: string }>;

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
        this.componentStyles
      ];
    }

    this.setUniqueId();
  }

  componentWillLoad() {
    validateProps([this.appearance, this.autoComplete, this.borderRadius, this.cols, this.disabled, this.helpText, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.placeholder, this.resize, this.rows, this.sanitizeTextarea, this.textareaId, this.value]);

    /**
     * Initialize the store with the initial value.
     */
    this.setStore(this.value);
  }

  /**
   * Sets a unique ID for the textarea element.
   * 
   * This method checks if `textareaId` is a non-empty string. If it is, 
   * it stores `textareaId` as `uniqueId` in the store. Otherwise, it 
   * generates a random ID and stores it as `uniqueId`.
   */
  private setUniqueId(): void {
    if (isNotEmptyString(this.textareaId)) {
      this.store.set('uniqueId', this.textareaId);
    } else {
      this.store.set('uniqueId', generateRandomId(this.baseClass))
    }
  }

  /**
   * Sets the store values for the textarea component.
   *
   * @param value - The value to be set in the store. Optional.
   * @param sanitizeValue - A flag indicating whether the value should be sanitized. Optional.
   *
   * This method attempts to set the store value and resets any alert messages or validation states.
   * If an error occurs during this process, it sets the appropriate alert messages and validation states,
   * and emits a validationFailed event with the textarea ID and error message.
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
      console.log('Validation error detected:', error.message);
      const errorMsg = error.message || this.helpText;
      this.store.set('alertMessage', errorMsg);
      this.store.set('alertType', 'danger');
      this.store.set('isInvalid', true);
      this.validationFailed.emit({ textareaId: this.uniqueId, error: errorMsg });
    }
  }

  /**
   * Sanitizes the textarea value based on the provided parameters.
   *
   * @param value - The textarea value to be sanitized. Defaults to the value from the store.
   * @param sanitizeValue - A boolean flag indicating whether to sanitize the textarea value. Defaults to true.
   * @returns The sanitized or original textarea value based on the sanitizeValue flag.
   */
  private sanitizeValue(
    value: string = this.store.get("textareaValue"),
    sanitizeValue: boolean = true
  ): string {
    const validatedValue =
      sanitizeValue && this.sanitizeTextarea
        ? sanitizeInput(value) :
        value;

    return validatedValue;
  }

  /**
   * Validates the textarea value based on various criteria such as SQL injection patterns,
   * pattern mismatch, minimum length, and maximum length.
   *
   * @param value - The textarea value to be validated.
   * @param sanitizeValue - A boolean indicating whether the value should be sanitized before validation.
   * 
   * @throws {Error} If the textarea contains SQL injection patterns.
   * @throws {Error} If the textarea is shorter than the minimum length.
   * @throws {Error} If the textarea is longer than the maximum length.
   */
  private validateTextarea(value?: string, sanitizeValue?: boolean): void {
    const validatedValue = this.sanitizeValue(value, sanitizeValue) || '';

    // Check for SQL injection patterns
    if (containsSQLInjectionPatterns(validatedValue)) {
      console.log('SQL injection pattern detected:', validatedValue);
      throw new Error('Invalid SQL patterns detected.');
    }

    // Check for minLength violation
    if (this.minlength && validatedValue.length < this.minlength) {
      throw new Error(`Text is too short. Minimum length is "${this.minlength}" characters.`);
    }

    // check for maxLength violation
    if (this.maxlength && validatedValue.length > this.maxlength) {
      throw new Error(`Text is too long. Maximum length is "${this.maxlength}" characters.`);
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

    this.validateTextarea(validatedValue, sanitizeValue);

    this.store.set('textareaValue', validatedValue);
  }

  /**
   * Handles the textarea change event.
   *
   * @param event - The textarea change event.
   *
   * This method performs the following actions:
   * 1. Retrieves the textarea element from the event target.
   * 2. Extracts the value from the textarea element.
   * 3. Validates the extracted value. If the sanitizeTextarea prop is set to true, the value is sanitized.
   * 4. Updates the store with the new value.
   * 5. Emits the `textareaChanged` event with the new value.
   * 6. Sets the textarea element's value to the validated value.
   */
  private handleTextareaOnChange = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement;
    const value: string = textarea.value;
    
    this.setStore(value)
    const validatedValue = this.sanitizeValue(value);
    console.log("validatedValue ", validatedValue)
    this.textareaChanged.emit(validatedValue);
    textarea.value = this.sanitizeValue(validatedValue);
  }

  /**
   * Handles the input event on the textarea element.
   *
   * @param event - The input event triggered by the user.
   * 
   * This method performs the following actions:
   * 1. Retrieves the textarea element from the event target.
   * 2. Extracts the value from the textarea element.
   * 3. Updates the store with the new value. It validates the textarea dynamically and displays alerts if necessary.
   *    The value isn't sanitized even if the sanitizeTextarea prop is set to true.
   *    It's sanitized only when the input change event is triggered.
   */
  private handleTextareaOnInput = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement;
    const value: string = textarea.value;

    this.setStore(value, false);
  }

  private get uniqueId(): string {
    return this.store.get('uniqueId');
  }

  private getAriaAttributes(): Record<string, string | null> {
    return {
      'aria-invalid': this.store.get('isInvalid') ? 'true' : null,
      'aria-describedby': [
        isNotEmptyString(this.store.get('alertMessage')) ? `${this.uniqueId}-${this.store.get('alertType')}` : null,
        isNotEmptyString(this.helpText) ? `${this.uniqueId}-help` : null,
      ].filter(Boolean).join(' '),
      'aria-labelledby': isNotEmptyString(this.label) ? this.uniqueId : null,
    };
  }

  private getTextareaClasses(): string {
    const { baseClass, appearance, disabled, resize } = this;
    const alertType = this.store.get('alertType');

    return [
      baseClass,
      `${baseClass}--${appearance}`,
      disabled ? `${baseClass}--disabled` : '',
      `${baseClass}--resize-${resize}`,
      isNotEmptyString(alertType) ? `${baseClass}--${alertType}` : ``,
      getBorderRadiusClass(this.borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private renderLabel(): JSX.Element | null {
    if (!isNotEmptyString(this.label)) {
      return null;
    }

    return (
      <tnw-label
        class={this.isLabelSrOnly ? 'sr-only' : ''}
        text={this.label}
        htmlFor={this.uniqueId}
        isSrOnly={this.isLabelSrOnly}
        part='label'
      ></tnw-label>
    );
  }

  private renderAlert(): JSX.Element | null {
    const alertMessage = this.store.get('alertMessage');
    const alertType = this.store.get('alertType');

    if (!isNotEmptyString(alertMessage)) {
      return null;
    }

    return (
      <tnw-alert
        message={alertMessage}
        appearanceColor={alertType}
        alertId={`${this.uniqueId}-${alertType}`}
        part="alert"
      />
    );
  }

  private renderHelpText(): JSX.Element | null {
    if (!isNotEmptyString(this.helpText)) {
      return null;
    }

    return (
      <tnw-alert
        message={this.helpText}
        alertId={`${this.uniqueId}-help`}
        part="help-text"
      />
    );
  }

  render() {
    return (
      <Host>
        {this.renderLabel()}

        <textarea
          class={this.getTextareaClasses()}
          id={this.uniqueId}
          name={this.name}
          required={this.isRequired}
          placeholder={this.placeholder}
          maxlength={this.maxlength}
          minlength={this.minlength}
          rows={this.rows}
          cols={this.cols}
          autocomplete={this.autoComplete}
          disabled={this.disabled}
          value={this.store.get('textareaValue')}
          {...this.getAriaAttributes()}
          onInput={this.handleTextareaOnInput}
          onChange={this.handleTextareaOnChange}
          part="textarea"
        />

        {this.renderAlert() || this.renderHelpText()}
      </Host>
    );
  }
}