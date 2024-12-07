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
    return (
      <Host class={this.getHostClasses()}>
        {this.renderInput()}
        {this.renderButton()}
      </Host>
    );
  }
}