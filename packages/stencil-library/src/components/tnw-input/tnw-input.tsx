import { Component, Prop, Host, h, Element, State } from '@stencil/core';
import { getBorderRadiusClass, GLOBAL_PREFIX, isNotEmptyString } from '../../utils/utils';
import { styles } from './tnw-input.styles';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { BorderRadiusType } from '../../utils/component-props-types';
import { createStore } from '@stencil/store';
import { validateProps } from './utils/tnw-input-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

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
  @Prop() variant?: 'outlined' | 'underlined' = 'outlined';

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
   * Indicates if the input is in an invalid state.
   */
  @Prop() alertType?: "danger" | "warning" | "success" | "info";

  /**
   * alert displayed when the input is invalid.
   */
  @Prop() alert?: string = '';

  /**
   * The help text providing additional information about the input.
   */
  @Prop() helpText?: string = '';

  /**
   * The border radius of the input.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

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
    const propsValues = [this.alert, this.alertType, this.autoComplete, this.borderRadius, this.disabled, this.helpText, this.inputId, this.isInvalid, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.pattern, this.placeholder, this.type, this.value, this.variant];
    validateProps(propsValues);
  }

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.store.set('inputValue', input.value);
  };

  private getInputClasses(): string {
    const { baseClass, variant, alertType } = this;

    return [
      baseClass,
      `${baseClass}--${variant}`,
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

  private renderAlert(): JSX.Element | null {
    if (!isNotEmptyString(this.alert)) {
      return null;
    }

    return (
      <tnw-alert
        message={this.alert}
        variant={this.alertType}
        alertId={`${this.inputId}-${this.alertType}`}
        part='alert'
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
        part='help-text'
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
          aria-invalid={isNotEmptyString(this.alert) ? 'true' : null}
          aria-required={this.isRequired ? 'true' : null}
          aria-describedby={
            [isNotEmptyString(this.alert) ? `${this.inputId}-${this.alertType}` : null, isNotEmptyString(this.helpText) ? `${this.inputId}-help` : null].filter(Boolean).join(' ')
          }
          aria-labelledby={isNotEmptyString(this.label) ? this.inputId : null}
          onInput={this.handleInput}
          part='input'
        />

        {this.renderAlert() || this.renderHelpText()}
      </Host>
    );
  }
}