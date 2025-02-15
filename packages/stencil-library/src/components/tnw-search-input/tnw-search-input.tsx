import { Component, Prop, Host, h, Element, State, Event, EventEmitter, Watch } from '@stencil/core';
import { generateRandomId, getBorderRadiusClass, GLOBAL_PREFIX, isNotEmptyString } from '../../utils/utils';
import { borderRadiusStyleSheet, colorStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { BorderRadiusType, ColorType, TextColorType } from '../../utils/component-props-types';
import styles from './tnw-search-input.style';
import { validateProps } from './utils/tnw-search-input-validate-props';
import { StyleHandler } from '../../utils/style-handler';

/**
 * The `tnw-search-input` component is a customizable search input field that supports various input types, validation, and appearance options.
 * It is designed to be versatile and accessible, allowing for both visual and screen-reader friendly labels, as well as handling error alerts.
 * 
 * @part input - The `<input>` element itself.
 * @part icon - The `<tnw-icon>` element for the search icon.
 */
@Component({
  tag: 'tnw-search-input',
  shadow: true,
})
export class TnwSearchInput {
  private baseClass = `${GLOBAL_PREFIX}-search-input`;
  private stylesHandler: StyleHandler;
  private inputRef?: HTMLInputElement;

  @Element() el!: HTMLTnwSearchInputElement;

  /************************ States ************************/

  @State() isVisible = false;
  @State() defaultIconColor: TextColorType = 'gray400';

  /************************ Props ************************/

  /**
   * The label for the input.
   * It will not be displayed (Screen Reader Only).
   */
  @Prop() label?: string = 'Search';

  /**
   * The unique ID for the input element. If not provided, a random ID will be generated.
   */
  @Prop() inputId?: string = generateRandomId(this.baseClass);

  /**
   * The type of the input.
   */
  @Prop() type?: 'search' | 'text' = 'search';

  /**
   * The placeholder text for the input.
   */
  @Prop() placeholder?: string = 'Search';

  /**
   * The variant of the search input.
   */
  @Prop() variant?: 'icon-left' | 'icon-right' | 'expandable' | 'no-icon' = 'icon-left';

  /**
   * Defines the appearance of the input.
   */
  @Prop() appearance?: 'outlined' | 'underlined' | 'none' = 'outlined';

  /**
   * The appearance color of the input, determining the overall color scheme.
   */
  @Prop() appearanceColor?: ColorType = 'auto';

  /**
   * The name of the input field.
   */
  @Prop({ reflect: true }) name?: string = '';

  /**
   * The initial value of the input.
   */
  @Prop({ reflect: true }) value?: string = '';

  /**
   * The autocomplete setting for the input.
   */
  @Prop() autoComplete?: string = 'on';

  /**
   * The border radius of the input.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * The width of the input. Accepts any valid CSS width value.
   */
  @Prop() width?: string = '100%';

  /**
   * The color of the search icon.
   */
  @Prop() iconColor?: TextColorType;

  /************************ Watchers ************************/

  // Watches the variant prop and updates the default icon color
  @Watch('variant')
  variantChanged(newValue: 'expandable' | 'icon-left' | 'icon-right' | 'no-icon') {
    // If the variant prop is not set, update the default icon color
    if (newValue !== this.variant) {
      this.updateDefaultIconColor();
    }
  }

  // Watches the iconColor prop and updates the default icon color
  @Watch('iconColor')
  iconColorChanged(newValue: TextColorType | undefined) {
    // If the iconColor prop is not set, update the default icon color
    if (!isNotEmptyString(newValue)) {
      this.updateDefaultIconColor();
    }
  }

  /************************ Events ************************/

  /**
   * Event emitted when the input value changes. The event's payload contains the new value.
   */
  @Event() tnwInputChangedOnType: EventEmitter<string>;

  /**
   * Event emitted when the input value changes. The event's payload contains the new value.
   */
  @Event() tnwInputChangedOnChange: EventEmitter<string>;

  /**
   * Event emitted when the input receives focus.
   */
  @Event() tnwInputFocused: EventEmitter<void>;

  /**
   * Event emitted when the input loses focus.
   */
  @Event() tnwInputBlurred: EventEmitter<void>;

  constructor() {
    this.initializeStyles()
  }

  componentWillLoad() {
    this.updateDefaultIconColor();
    validateProps([this.appearance, this.appearanceColor, this.autoComplete, this.borderRadius, this.iconColor, this.inputId, this.label, this.name, this.placeholder, this.type, this.value, this.variant, this.width]);
  }

  connectedCallback() {
    this.stylesHandler.applyStyles()
    
    if (this.variant === 'expandable') {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }

  disconnectedCallback() {
    if (this.variant === 'expandable') {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  componentDidLoad() {
    if (this.variant !== 'expandable') {
      this.isVisible = true;
    }
  }

  private initializeStyles () {
    this.stylesHandler = new StyleHandler (
      this.el,
      styles,
      [extendedAppearanceStyleSheet, borderRadiusStyleSheet, colorStyleSheet]
    )
  }

  /**
   * Handles the input change event.
   * 
   * @param event - The input change event.
   */
  private handleInputOnType = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value: string = input.value;
    this.tnwInputChangedOnType.emit(value);
  }

  /**
   * Handles the change event.
   * 
   * @param event - The change event.
   */
  private handleInputOnChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value: string = input.value;
    this.tnwInputChangedOnChange.emit(value);
  }

  /**
   * Handles the visibility of the input when variant is `expandable`.
   */
  private setIsVisible = (event?: MouseEvent) => {
    if (this.variant === 'expandable') {
      event?.stopPropagation();
      this.isVisible = !this.isVisible;

      if (this.isVisible) {
        setTimeout(() => {
          this.inputRef?.focus();
        }, 50);
      }
    }
  }

  private handleDocumentClick = (event: MouseEvent) => {
    if (
      this.variant === 'expandable' &&
      this.isVisible &&
      !this.el.contains(event.target as Node)
    ) {
      this.isVisible = false;
    }
  };

  /**
   * Handles the input focus event.
   */
  private handleInputFocus = () => {
    this.tnwInputFocused.emit();
  }

  /**
   * Handles the input blur event.
   */
  private handleInputBlur = () => {
    this.tnwInputBlurred.emit();
  }

  private getHostClasses(): string {
    const { baseClass, variant } = this;
    return [
      baseClass,
      `${baseClass}--${variant}`,
      variant === 'expandable' && this.isVisible || variant !== 'expandable' ? `${baseClass}--w` : '',
      variant === 'expandable' ? `${baseClass}--expandable` : '',
    ].filter(Boolean).join(' ').trim();
  }

  private getInputClasses(): string {
    const { baseClass, appearance, appearanceColor, variant } = this;
    const inputClass = `${baseClass}__field`;
    return [
      inputClass,
      variant !== 'expandable' ? `${inputClass}--${appearance}` : '',
      variant !== 'expandable' ? `${inputClass}--${appearance}-${appearanceColor}` : '',
      variant === 'expandable' ? `${inputClass}--expandable` : '',
      variant === 'expandable' || appearance === 'underlined' ? '' : getBorderRadiusClass(this.borderRadius),
      variant === 'icon-left' ? `${inputClass}--left` : (variant === 'icon-right' ? `${inputClass}--right` : ''),
      variant === 'expandable' ? (this.isVisible ? `${inputClass}--visible` : `${inputClass}--invisible`) : '',
    ].filter(Boolean).join(' ').trim();
  }

  /**
   * Updates the default icon color based on the variant
   */
  private updateDefaultIconColor() {
    this.defaultIconColor = this.variant === 'expandable' ? 'auto' : 'gray400';
  }

  private renderSearchIcon(position?: 'left' | 'right') {
    return (
      <tnw-icon
        name='tnw-search'
        part='icon'
        class={`
          ${this.baseClass}__icon
          ${this.variant !== 'expandable' ? `${this.baseClass}__icon--pos` : ''}
          ${position && this.variant !== 'expandable' ? `${this.baseClass}__icon--${position}` : ''}
        `}
        onClick={(event: MouseEvent) => this.setIsVisible(event)}
        isButton={this.variant === 'expandable'}
        color={this.iconColor || this.defaultIconColor}
      />
    );
  }

  private handleInputRef = (el: HTMLInputElement) => {
    this.inputRef = el;
  };

  render() {
    return (
      <Host
        class={this.getHostClasses()}
        style={{
          [`--${this.baseClass}-width`]: this.variant === 'expandable' ? 'auto' : this.width,
        }}
      >
        <label class='sr-only' htmlFor={this.inputId}>{this.label}</label>
        {this.variant === 'icon-left' && this.renderSearchIcon('left')}
        {this.variant === 'expandable' && this.renderSearchIcon()}
        <input
          ref={this.handleInputRef}
          class={this.getInputClasses()}
          id={this.inputId}
          type={this.type}
          name={this.name}
          value={this.value}
          placeholder={this.placeholder}
          onInput={this.handleInputOnType}
          onChange={this.handleInputOnChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          part='input'
          autoComplete={this.autoComplete}
        />
        {this.variant === 'icon-right' && this.renderSearchIcon('right')}
      </Host>
    );
  }
}