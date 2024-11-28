import { Component, Element, Host, Prop, h } from '@stencil/core';
import { getBorderRadiusClass, getExtendedAppearanceClass, GLOBAL_PREFIX } from '../../utils/utils';
import { BorderRadiusType, OptionalAppearanceType, SizeType } from '../../utils/component-props-types';
import { styles } from './tnw-alert.styles';
import { validateProps } from './utils/tnw-alert-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-alert` component is used to display a prominent message to the user, such as
 * important notifications, success messages, warnings, or errors.
 * 
 * @part text - The `p` element containing the alert message text.
 */
@Component({
  tag: 'tnw-alert',
  shadow: true,
})
export class TnwAlert {
  private baseClass = `${GLOBAL_PREFIX}-alert`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwAlertElement;

  /**
   * The unique ID for the alert message. This ID is important for accessibility purposes, helping to associate the alert with form elements or any other triggering components.
   */
  @Prop() alertId!: string;

  /**
   * The message text to display in the alert. This is the main content of the alert and should be concise but informative.
   */
  @Prop() message!: string;

  /**
   * Defines the font size of the alert message.
   */
  @Prop() size?: SizeType = 'sm';

  /**
   * The appearance of the alert, defining how the alert will be styled.
   */
  @Prop() appearance?: OptionalAppearanceType = 'transparent';

  /**
   * The color variant of the alert, defining the type of message being displayed.
   */
  @Prop() variant?: "danger" | "warning" | "success" | "info";

  /**
   * Controls whether the alert is visible or hidden. When `true`, the component does not render
   */
  @Prop() isHidden: boolean = false;

  /**
   * The border radius of the alert.
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
        this.componentStyles
      ]
    }
  }

  componentWillLoad() {
    const propsValues = [this.alertId, this.appearance, this.borderRadius, this.isHidden, this.message, this.size, this.variant];
    validateProps(propsValues);
  }

  private getHostClasses() {
    const { variant, baseClass, size } = this;
    return [
      `${baseClass}--${size}`,
      this.appearance !== 'none' && this.appearance !== 'transparent' ? `${baseClass}--hasPadding` : ``,
      getExtendedAppearanceClass(this.appearance, variant),
      getBorderRadiusClass(this.borderRadius),
    ].join(' ');
  }

  render() {
    // If not visible, don't render the component
    if (this.isHidden) {
      return null;
    }

    return (
      <Host
        class={this.getHostClasses()}
        id={this.alertId}
        role="alert"
        aria-live="assertive"
      >
        <p
          class={this.baseClass}
          part='text'
        >
          {this.message}
        </p>
      </Host>
    );
  }
}