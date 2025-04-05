import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { BorderRadiusType } from '../../components';
import { ColorType } from '../../utils/component-props-types';
import { generateRandomId, getBorderRadiusClass, GLOBAL_PREFIX } from '../../utils/utils';
import { styles } from './tnw-subscription-form.style';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet, fontFamilyStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-subscription-form-validate-props';
import { StyleHandler } from '../../utils/style-handler';

/**
 * The `tnw-subscription-form` component provides a customizable subscription form.
 */
@Component({
  tag: 'tnw-subscription-form',
  shadow: true,
})
export class TnwSubscriptionForm {
  private baseClass = `${GLOBAL_PREFIX}-subscription-form`;
  private stylesHandler: StyleHandler;

  @Element() el!: HTMLTnwSubscriptionFormElement;

  /************************ States ************************/

  /**
   * Internal state for form validation and values
   */
  @State() emailValue: string = '';

  /************************ Props ************************/

  /**
   * The label for the subscribe button. If `enableButtonSlot` is true, this prop will be ignored.
   */
  @Prop() buttonLabel?: string = 'Subscribe';

  /**
   * The placeholder for the email input
   */
  @Prop() inputPlaceholder?: string = 'Enter your email';

  /**
   * The message to display after successful subscription
   */
  @Prop() successMessage?: string = 'Thanks for subscribing!';

  /**
   * The border radius for the component. Set for both input and button
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * The variant for the component
   * - button-outside: The button is positioned next to the input field (default)
   * - button-inside: The button is positioned inside the input field on the right
   */
  @Prop() variant?: 'button-outside' | 'button-inside' = 'button-outside';

  /**
   * The theme for the component. It controls the color scheme of the component.
   */
  @Prop() theme?: ColorType = 'primary';

  /**
   * Whether to enable the button slot. If true, the buttonLabel prop will be ignored.
   */
  @Prop() enableButtonSlot?: boolean = false;

  /**
   * The id for the email input
   */
  @Prop() inputId?: string = generateRandomId(this.baseClass);

  /**
   * The action attribute for the form
   */
  @Prop() formAction?: string;

  /**
   * The method attribute for the form
   */
  @Prop() formMethod?: string;

  /**
   * The attributes/data-attribute(s) for the form. The given string is expected to be in the format "key1=value1; key2=value2" or "key1; key2=value2".
   */
  @Prop() formAttributes?: string;

  /**
   * Whether the form is in loading state
   */
  @Prop() loading?: boolean = false;

  /**
   * Whether to disable the form
   */
  @Prop() disabled?: boolean = false;

  /************************ Events ************************/

  /**
   * Event emitted when form is submitted with valid email
   */
  @Event() tnwSubscribe: EventEmitter<{ email: string }>;

  /**
   * Event emitted when form submission fails
   */
  @Event() tnwError: EventEmitter<{ message: string }>;

  /**
   * Event emitted when the input value changes onChange. The event's payload contains the new value.
   */
  @Event() tnwChangedOnChange: EventEmitter<string>;

  /**
   * Event emitted when the input value changes onInput. The event's payload contains the new value.
   */
  @Event() tnwChangedOnInput: EventEmitter<string>;

  /**
   * Event emitted when the input receives focus.
   */
  @Event() tnwFocused!: EventEmitter<void>;

  /**
   * Event emitted when the input loses focus.
   */
  @Event() tnwBlurred!: EventEmitter<void>;

  constructor() {
    this.initializeStyles()
  }

  connectedCallback() {
    this.stylesHandler.applyStyles()
  }

  componentWillLoad() {
    validateProps([this.borderRadius, this.buttonLabel, this.enableButtonSlot, this.formAction, this.formAttributes, this.formMethod, this.inputId, this.inputPlaceholder, this.successMessage, this.theme, this.variant]);
  }

  private initializeStyles() {
    this.stylesHandler = new StyleHandler(
      this.el,
      styles,
      [extendedAppearanceStyleSheet, borderRadiusStyleSheet, fontFamilyStyleSheet]
    );
  }

  /**
   * Parse the given attributes string into a key-value pair object.
   * The given string is expected to be in the format "key1=value1; key2=value2" or "key1; key2=value2".
   * If the format is invalid, an empty object is returned and a warning is logged to the console.
   * @param attributes the string to be parsed
   * @returns a key-value pair object containing the parsed attributes
   */
  private parseAttributes(attributes: string | undefined): Record<string, string> {
    if (attributes === undefined) return {};
    try {
      return attributes
        .split(';')
        .filter(attr => attr.includes('='))
        .reduce((acc, attr) => {
          const [key, value] = attr.split('=').map(item => item.trim());
          acc[key] = value;
          return acc;
        }, {} as Record<string, string>);
    } catch {
      console.warn('Invalid formAttributes format. Expected format: "key1=value1; key2=value2".');
      return {};
    }
  }

  private handleInputOnChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value: string = input.value;

    const isEmailValidated = this.validateEmail(value);

    if (isEmailValidated) {
      this.tnwChangedOnChange.emit(value);
    } else {
      this.tnwError.emit({ message: 'Please enter a valid email address' });
    }
  }

  private handleInputOnInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value: string = input.value;

    const isEmailValidated = this.validateEmail(value);

    if (isEmailValidated) {
      this.tnwChangedOnInput.emit(value);
    } else {
      this.tnwError.emit({ message: 'Please enter a valid email address' });
    }
  }

  private handleSubmit = async (e: Event) => {
    e.preventDefault();

    const emailInput = (e.target as HTMLFormElement).querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value.trim();

    if (!this.validateEmail(email)) {
      this.tnwError.emit({ message: 'Please enter a valid email address' });
      return;
    }

    try {
      this.tnwSubscribe.emit({ email });

      if (!this.formAction) {
        emailInput.value = '';
      }
    } catch (error) {
      this.tnwError.emit({ message: 'Subscription failed. Please try again.' });
    }
  };

  /**
   * Handles the input focus event.
   */
  private handleInputFocus = () => {
    this.tnwFocused.emit();
  }

  /**
   * Handles the input blur event.
   */
  private handleInputBlur = () => {
    this.tnwBlurred.emit();
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private getFormClasses() {
    return [
      this.baseClass,
      `${this.baseClass}--${this.variant}`,
      this.variant === 'button-inside' ? getBorderRadiusClass(this.borderRadius) : '',
      this.variant === 'button-inside' ? `${this.baseClass}--${this.theme}` : '',
      this.loading ? `${this.baseClass}--loading` : '',
      this.disabled ? `${this.baseClass}--disabled` : '',
    ].filter(Boolean).join(' ').trim();
  }

  private getInputClasses(): string {
    return [
      `${this.baseClass}__input`,
      this.disabled ? `${this.baseClass}__input--disabled` : '',
      this.variant === 'button-outside' ? getBorderRadiusClass(this.borderRadius) : '',
    ].filter(Boolean).join(' ').trim();
  }

  private renderInput() {
    return (
      <input
        class={this.getInputClasses()}
        placeholder={this.inputPlaceholder}
        type='email'
        id={this.inputId}
        onChange={this.handleInputOnChange}
        onInput={this.handleInputOnInput}
        onFocus={this.handleInputFocus}
        onBlur={this.handleInputBlur}
        disabled={this.disabled || this.loading}
        part='input'
      />
    );
  }

  private renderButton() {
    if (this.enableButtonSlot) {
      return <slot name='button' />;
    }

    return (
      <tnw-button
        label={this.loading ? 'Loading...' : this.buttonLabel}
        borderRadius={this.borderRadius}
        appearance='solid'
        appearanceColor={this.theme}
        hoverEffect='contrast'
        part='button'
        size='md'
        disabled={this.disabled || this.loading}
        type='submit'
      />
    )
  }

  render() {
    const parsedFormAttributes = this.parseAttributes(this.formAttributes);

    return (
      <Host>
        <form
          class={this.getFormClasses()}
          action={this.formAction}
          method={this.formMethod}
          {...parsedFormAttributes}
          onSubmit={this.handleSubmit}
        >
          {this.renderInput()}
          {this.renderButton()}
        </form>
      </Host>
    );
  }
}