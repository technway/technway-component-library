import { Component, Host, Prop, Element, h, Fragment, Event, EventEmitter } from '@stencil/core';
import { GLOBAL_PREFIX, getBorderRadiusClass, getExtendedAppearanceClass, isNotEmptyString } from '../../utils/utils';
import { OptionalAppearanceType, BorderRadiusType, ExtendedColorType, ExtendedSizeType } from '../../utils/component-props-types';
import { styles } from './tnw-button.styles';
import { validateProps } from './utils/tnw-button-validate-props';
import { extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { borderRadiusStyleSheet } from '../../utils/shared-styles';
import { StyleHandler } from '../../utils/style-handler';

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
  private stylesHandler: StyleHandler;

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
  @Prop() hoverEffect?: 'none' | 'scale-up' | 'scale-down' | 'contrast' | 'opacity' | 'ring' = 'none';

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
   * Event emitted when the button receives focus. Contains the focus event details.
   */
  @Event() tnwButtonFocused!: EventEmitter<FocusEvent>;

  /**
   * Event emitted when the button loses focus. Contains the blur event details.
   */
  @Event() tnwButtonBlurred!: EventEmitter<FocusEvent>;

  /**
   * Event emitted when the button is clicked. Contains the click event details.
   */
  @Event() tnwButtonClicked!: EventEmitter<MouseEvent>;

  /**
   * Event emitted when a key is pressed while the button is focused. Contains the keyboard event details.
   */
  @Event() tnwButtonKeyDown!: EventEmitter<KeyboardEvent>;

  /**
   * Event emitted when the button is hovered. Contains the mouse event details.
   */
  @Event() tnwButtonMouseEnter!: EventEmitter<MouseEvent>;

  /**
   * Event emitted when the mouse leaves the button. Contains the mouse event details.
   */
  @Event() tnwButtonMouseLeave!: EventEmitter<MouseEvent>;

  constructor() {
    this.stylesHandler = new StyleHandler(
      this.el, 
      styles, 
      [extendedAppearanceStyleSheet, borderRadiusStyleSheet]
    );
  }

  connectedCallback() {
    this.stylesHandler.applyStyles();
  }

  componentWillLoad() {
    validateProps([this.appearance, this.appearanceColor, this.borderRadius, this.disabled, this.hoverAppearance, this.hoverAppearanceColor, this.hoverEffect, this.href, this.label, this.newTab, this.size, this.type]);
  }

  private getButtonClasses() {
    const { baseClass, appearance, appearanceColor, size, hoverAppearance, hoverAppearanceColor, hoverEffect, disabled } = this;

    return [
      baseClass,
      appearance !== 'none' ? `${baseClass}--has-padding` : ``,
      appearance !== 'outlined' ? `${baseClass}--no-border` : ``,
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
  private handleButtonFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.tnwButtonFocused.emit(event);
    }
  }

  /**
   * Handles the button blur event.
   */
  private handleButtonBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.tnwButtonBlurred.emit(event);
    }
  }

  /**
   * Handles the button click event.
   */
  private handleButtonClick = (event: MouseEvent) => {
    if (!this.disabled) {
      event.preventDefault();
      this.tnwButtonClicked.emit(event);
    }
  }

  /**
   * Handles keyboard interaction for accessibility
   */
  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.disabled) {
      this.tnwButtonKeyDown.emit(event);

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (!this.href) {
          this.handleButtonClick(event as unknown as MouseEvent);
        }
      }
    }
  }

  /**
   * Handles mouse enter event
   */
  private handleMouseEnter = (event: MouseEvent) => {
    if (!this.disabled) {
      this.tnwButtonMouseEnter.emit(event);
    }
  }

  /**
   * Handles mouse leave event
   */
  private handleMouseLeave = (event: MouseEvent) => {
    if (!this.disabled) {
      this.tnwButtonMouseLeave.emit(event);
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
      onClick={this.handleButtonClick}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
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
      onClick={this.handleButtonClick}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
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
