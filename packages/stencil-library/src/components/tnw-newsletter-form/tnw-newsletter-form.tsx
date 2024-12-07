import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { BorderRadiusType } from '../../components';
import { ColorType } from '../../utils/component-props-types';
import { generateRandomId, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { styles } from './tnw-newsletter-form.style';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet, fontFamilyStyleSheet } from '../../utils/shared-styles';

@Component({
  tag: 'tnw-newsletter-form',
  shadow: true,
})
export class TnwNewsletterForm {
  private baseClass = `${GLOBAL_PREFIX}-newsletter-form`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwNewsletterFormElement;

  @State() finalInputId: string;

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
   */
  @Prop() variant?: 'primary' | 'secondary' = 'primary';

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
  @Prop() inputId?: string;

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
        fontFamilyStyleSheet,
        this.componentStyles
      ];
    }
  }

  componentWillLoad() {
    this.setInputId();
  }

  private setInputId() {
    if (isNotEmptyString(this.inputId)) {
      this.finalInputId = this.inputId;
    } else {
      this.finalInputId = generateRandomId(this.baseClass);
    }
  }

  private getHostClasses() {
    return [
      this.baseClass,
      `${this.baseClass}--${this.variant}`,
    ].filter(Boolean).join(' ').trim();
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

  private renderInput() {
    return (
      <tnw-input
        placeholder={this.inputPlaceholder}
        type='email'
        inputId={this.finalInputId}
        label={this.inputPlaceholder}
        borderRadius={this.borderRadius}
        isRequired={true}
        isLabelSrOnly={true}
        variant="outlined"
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
        label={this.buttonLabel}
        borderRadius={this.borderRadius}
        appearance='solid'
        variant={this.theme}
        part='button'
      />
    )
  }

  render() {
    const parsedFormAttributes = this.parseAttributes(this.formAttributes);

    return (
      <Host class={this.getHostClasses()}>
        <form
          action={this.formAction}
          method={this.formMethod}
          {...parsedFormAttributes}
        >
          {this.renderInput()}
          {this.renderButton()}
        </form>
      </Host>
    );
  }
}