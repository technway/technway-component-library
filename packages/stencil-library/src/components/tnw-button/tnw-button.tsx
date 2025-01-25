import { Component, Host, Prop, Element, h, Fragment, Event, EventEmitter } from '@stencil/core';
import { GLOBAL_PREFIX, getBorderRadiusClass, getExtendedAppearanceClass, isNotEmptyString } from '../../utils/utils';
import { OptionalAppearanceType, BorderRadiusType, ExtendedColorType, ExtendedSizeType } from '../../utils/component-props-types';
import { styles } from './tnw-button.styles';
import { validateProps } from './utils/tnw-button-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { borderRadiusStyleSheet } from '../../utils/shared-styles';

/**
 * The `tnw-button` component is a customizable button element, which can be used as a standalone button or as a button in a form.
 * It supports various styles, sizes, and appearances, and allows for custom content to be inserted via a slot.
 * By default, the component renders a button element, but it can also render an anchor element if the `href` prop is provided.
 * 
 * @slot icon-start - Slot for adding an icon or custom content at the start of the button.
 * @slot icon-end - Slot for adding an icon or custom content at the end of the button.
 * 
 * @part button - The main clickable `button` or `anchor` element.
 */
@Component({
  tag: 'tnw-button',
  shadow: true,
})
export class TnwButton {
  private baseClass = `${GLOBAL_PREFIX}-button`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwButtonElement;

  /************************ Props ************************/

  /**
   * Specifies the text label displayed on the button. This prop is required.
   */
  @Prop() label?: string;

  /**
   * Specifies the button type.
   */
  @Prop() type?: 'button' | 'submit' = 'button';

  /**
   * Defines the appearance color of the button.
   */
  @Prop() appearanceColor?: ExtendedColorType = 'primary';

  /**
   * Specifies the appearance color of the button.
   */
  @Prop() appearance?: OptionalAppearanceType = 'solid';

  /**
   * Determines the size of the button.
   */
  @Prop() size?: ExtendedSizeType = 'md';

  /**
   * Specifies the hover appearance color for the button.
   */
  @Prop() hoverAppearance?: 'none' | 'solid' | 'outlined' = 'none';

  /**
   * Specifies the hover appearance color color for the button color.
   */
  @Prop() hoverAppearanceColor?: 'primary' | 'secondary' | 'black' | 'white' | 'inverse' | 'auto' = 'primary';

  /**
   * Specifies the hover effect of the button.
   */
  @Prop() hoverEffect?: 'none' | 'scale-up' | 'scale-down' | 'contrast' | 'opacity' | 'focus-ring' = 'none';

  /**
   * If provided, the button will render as a link with this `href`.
   */
  @Prop() href?: string;

  /**
   * If `true`, the link will open in a new tab. Only relevant when `href` is provided.
   */
  @Prop() newTab?: boolean = false;

  /**
   * Specifies whether the button is disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Specifies the border radius of the button.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /************************ Events ************************/

  /**
   * Event emitted when the button receives focus.
   */
  @Event() tnwButtonFocused!: EventEmitter<void>;

  /**
   * Event emitted when the button loses focus.
   */
  @Event() tnwButtonBlurred!: EventEmitter<void>;

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
    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disabled, this.hoverAppearance, this.hoverAppearanceColor, this.hoverEffect, this.href, this.label, this.newTab, this.size, this.type]);
  }

  private getButtonClasses() {
    const { baseClass, appearance, appearanceColor, size, hoverAppearance, hoverAppearanceColor, hoverEffect, disabled } = this;

    return [
      baseClass,
      appearance !== 'none' ? `${baseClass}--has-padding` : ``,
      disabled ? `${baseClass}--disabled` : '',
      hoverAppearance !== 'none' ? `${baseClass}--hover-${hoverAppearance}-${hoverAppearanceColor}` : ``,
      hoverEffect !== 'none' ? `${baseClass}--hover-${hoverEffect}` : ``,
      `${baseClass}--${size}`,
      getExtendedAppearanceClass(appearance, appearanceColor),
      getBorderRadiusClass(this.borderRadius),
    ].join(' ').trim();
  }

  private renderButtonContent() {
    return (
      <Fragment>
        <slot name="icon-start" />
        {isNotEmptyString(this.label) ? this.label : <slot />}
        <slot name="icon-end" />
      </Fragment>
    )
  }

  /**
   * Handles the button focus event.
   */
  private handleButtonFocus = () => {
    this.tnwButtonFocused.emit();
  }

  /**
   * Handles the button blur event.
   */
  private handleButtonBlur = () => {
    this.tnwButtonBlurred.emit();
  }

  /**
   * Handles keyboard interaction for accessibility
   */
  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!this.disabled) {
        if (this.href) {
          window.location.href = this.href;
        }
        // You could emit a click event here if needed
      }
    }
  }

  private renderAnchor = () => (
    <a
      class={this.getButtonClasses()}
      href={this.disabled ? undefined : this.href}
      target={this.newTab ? "_blank" : undefined}
      rel={this.newTab ? "noopener noreferrer" : undefined}
      aria-disabled={this.disabled ? 'true' : undefined}
      part='button'
      onFocus={this.handleButtonFocus}
      onBlur={this.handleButtonBlur}
      onKeyDown={this.handleKeyDown}
      tabIndex={this.disabled ? -1 : 0}
    >
      {this.renderButtonContent()}
    </a>
  );

  private renderButtonElement = () => (
    <button
      class={this.getButtonClasses()}
      type={this.type}
      disabled={this.disabled !== false ? true : undefined}
      part='button'
      onFocus={this.handleButtonFocus}
      onBlur={this.handleButtonBlur}
      onKeyDown={this.handleKeyDown}
      tabIndex={this.disabled ? -1 : 0}
    >
      {this.renderButtonContent()}
    </button>
  );

  render() {
    return (
      <Host
        aria-disabled={this.disabled ? 'true' : undefined}
      >
        {
          isNotEmptyString(this.href) ?
            this.renderAnchor() :
            this.renderButtonElement()
        }
      </Host>
    )
  }
}
