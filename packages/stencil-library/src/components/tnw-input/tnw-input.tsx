import { Component, Prop, Host, h, Element, State, Watch, Event, EventEmitter } from '@stencil/core';
import { getBorderRadiusClass, GLOBAL_PREFIX, isNotEmptyString } from '../../utils/utils';
import { styles } from './tnw-input.styles';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { BorderRadiusType } from '../../utils/component-props-types';
import { createStore } from '@stencil/store';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { containsSQLInjectionPatterns, sanitizeInput } from '../../utils/security-utils';
import { validateProps } from './utils/tnw-input-validate-props';

/**
 * The `tnw-input` component is a customizable input field that supports various input types, validation, and appearance options.
 * It is designed to be versatile and accessible, allowing for both visual and screen-reader friendly labels, as well as handling error alerts.
 * 
 * @part label - The `<label>` element for the input.
 * @part input - The main `<input>` element.
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
    isInvalid: this.isInvalid
  });

  /**
   * The label for the input.
   */
  @Prop() label!: string;

  /**
   * The unique ID for the input element.
   */
  @Prop() inputId!: string;

  /**
   * The input type (e.g., text, password).
   */
  @Prop() type!: string;

  /**
   * The placeholder text for the input.
   */
  @Prop() placeholder!: string;

  /**
   * Defines the color variant of the input.
   */
  @Prop() variant?: 'outlined' | 'underlined' | 'none' = 'outlined';

  /**
   * If true, the label is visually hidden but still accessible to screen readers.
   */
  @Prop() isLabelSrOnly?: boolean;

  /**
   * The name of the input field.
   */
  @Prop() name?: string = '';

  /**
   * The initial value of the input.
   */
  @Prop() value?: string = '';

  /**
   * Marks the input as required.
   */
  @Prop() isRequired?: boolean = false;

  /**
   * Indicates if the input has invalid data.
   */
  @Prop() isInvalid?: boolean = false;

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
  @Event() validationFailed: EventEmitter<{ inputId: string; error: string }>;

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
    validateProps([this.autoComplete, this.borderRadius, this.disabled, this.helpText, this.inputId, this.isInvalid, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.pattern, this.placeholder, this.sanitizeInput, this.type, this.value, this.variant]);

    this.initStore();
    this.validateInput(this.value || '');
  }

  @Watch('value')
  handleValueChange(newValue: string) {
    this.store.set('inputValue', newValue);
    this.validateInput(newValue);
  }

  @Watch('isInvalid')
  handleIsInvalidChange(newValue: boolean) {
    this.store.set('isInvalid', newValue);
  }

  private initStore() {
    this.store.set('inputValue', this.value || '');
    this.store.set('alertMessage', this.helpText || '');
    this.store.set('alertType', undefined);
    this.store.set('isInvalid', this.isInvalid || false);
  }

  private validateInput(value: string): void {
    try {
      const sanitizedValue = this.sanitizeInput ? sanitizeInput(value) : value;
      /**
       * Check for SQL injection patterns. Only perform this check if `sanitizeInput` prop is false.
       */
      if (!this.sanitizeInput && containsSQLInjectionPatterns(sanitizedValue)) {
        throw new Error('Invalid SQL patterns detected.');
      }
      
      // Check for pattern mismatch
      if (this.pattern && !new RegExp(this.pattern).test(sanitizedValue)) {
        throw new Error('Input does not match the required pattern.');
      }

      this.store.set('inputValue', sanitizedValue);
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

  private handleInputOnChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    
    this.validateInput(input.value);
    this.inputChanged.emit(input.value);
  };

  private getInputClasses(): string {
    const { baseClass, variant } = this;
    const alertType = this.store.get('alertType');

    return [
      baseClass,
      `${baseClass}--${variant}`,
      isNotEmptyString(alertType) ? `${baseClass}--${alertType}` : ``,
      getBorderRadiusClass(this.borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private getAriaAttributes(): Record<string, string | null> {
    return {
      'aria-invalid': this.store.get('isInvalid') ? 'true' : null,
      'aria-required': this.isRequired ? 'true' : null,
      'aria-describedby': [
        isNotEmptyString(this.store.get('alertMessage')) ? `${this.inputId}-${this.store.get('alertType')}` : null,
        isNotEmptyString(this.helpText) ? `${this.inputId}-help` : null,
      ].filter(Boolean).join(' '),
      'aria-labelledby': isNotEmptyString(this.label) ? this.inputId : null,
    };
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

  private renderAlert(): JSX.Element | null {
    const alertMessage = this.store.get('alertMessage');
    const alertType = this.store.get('alertType');

    if (!isNotEmptyString(alertMessage)) {
      return null;
    }

    return (
      <tnw-alert
        message={alertMessage}
        variant={alertType}
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
          onChange={this.handleInputOnChange}
          part='input'
        />
        {this.renderAlert() || this.renderHelpText()}
      </Host>
    );
  }
}
