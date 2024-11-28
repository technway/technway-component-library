import { Component, Host, Prop, h, State, Element } from '@stencil/core';
import { getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { createStore } from '@stencil/store';
import { BorderRadiusType } from '../../utils/component-props-types';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { styles } from './tnw-textarea.styles';
import { validateProps } from './utils/tnw-textarea-validate-props';

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
  });

  /**
   * The label for the textarea.
   */
  @Prop() label!: string;

  /**
   * Defines the color variant of the textarea.
   */
  @Prop() variant?: 'outlined' | 'underlined' = 'outlined';

  /**
   * If true, the label is visually hidden but still accessible to screen readers.
   */
  @Prop() isLabelSrOnly?: boolean;

  /**
   * The unique ID for the textarea element.
   */
  @Prop() textareaId!: string;

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
   * The placeholder text for the textarea.
   */
  @Prop() placeholder!: string;

  /**
   * Indicates if the textarea has invalid data.
   */
  @Prop() isInvalid?: boolean = false;

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
   * Error alert displayed when the textarea is invalid.
   */
  @Prop() alert?: string = '';

  /**
   * Indicates if the textarea is in an invalid state.
   */
  @Prop() alertType?: "danger" | "warning" | "success" | "info";

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
  }

  componentWillLoad() {
    const propsValues = [this.alert, this.alertType, this.autoComplete, this.borderRadius, this.cols, this.disabled, this.helpText, this.isInvalid, this.isLabelSrOnly, this.isRequired, this.label, this.maxlength, this.minlength, this.name, this.placeholder, this.resize, this.rows, this.textareaId, this.value, this.variant];
    validateProps(propsValues);
  }

  private handleInput = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement;
    this.store.set('textareaValue', textarea.value);
  };



  private renderLabel() {
    if (!isNotEmptyString(this.label)) {
      return null;
    }

    return (
      <tnw-label
        class={this.isLabelSrOnly ? 'sr-only' : ''}
        text={this.label}
        htmlFor={this.textareaId}
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
        alertId={`${this.textareaId}-${this.alertType}`}
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
        alertId={`${this.textareaId}-help`}
        part='help-text'
      />
    );
  }

  private getTextareaClasses(): string {
    const { baseClass, variant, resize, alertType, borderRadius, disabled } = this;

    return [
      baseClass,
      `${baseClass}--${variant}`,
      `${baseClass}--resize-${resize}`,
      disabled ? `${baseClass}--disabled` : '',
      isNotEmptyString(alertType) ? `${baseClass}--${alertType}` : ``,
      getBorderRadiusClass(borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host>
        {this.renderLabel()}

        <textarea
          class={this.getTextareaClasses()}
          id={this.textareaId}
          name={this.name}
          value={this.store.get('textareaValue')}
          required={this.isRequired}
          placeholder={this.placeholder}
          maxlength={this.maxlength}
          minlength={this.minlength}
          rows={this.rows}
          cols={this.cols}
          autocomplete={this.autoComplete}
          disabled={this.disabled}
          aria-invalid={this.isInvalid ? 'true' : null}
          aria-required={this.isRequired ? 'true' : null}
          aria-labelledby={isNotEmptyString(this.label) ? this.textareaId : null}
          onInput={this.handleInput}
          part='textarea'
        ></textarea>

        {this.renderAlert() || this.renderHelpText()}
      </Host>
    );
  }
}
