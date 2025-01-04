import { Component, Host, h, Prop, State, Event, EventEmitter, Element, Method, Watch } from '@stencil/core';
import { generateRandomId, getBorderRadiusClass, GLOBAL_PREFIX, isNotEmptyString, parseJSONAsync } from '../../utils/utils';
import { styles } from './tnw-select.styles';
import { BorderRadiusType, ExtendedColorType } from '../../utils/component-props-types';
import { validateProps } from './utils/tnw-select-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { borderRadiusStyleSheet, extendedAppearanceStyleSheet } from '../../utils/shared-styles';
import { TnwSelectOption } from './utils/tnw-select-data-types';

/**
 * The `tnw-select` component provides a custom dropdown select element with support for dynamic options, selection, and keyboard navigation.
 * 
 * @part button - The button that triggers the dropdown.
 * @part dropdown - The dropdown container element.
 * @part option - The individual dropdown option.
 */
@Component({
  tag: 'tnw-select',
  shadow: true,
})
export class TnwSelect {
  private baseClass = `${GLOBAL_PREFIX}-select`;
  private handleDocumentClickBound = this.handleDocumentClick.bind(this);
  private componentStyles: CSSStyleSheet;
  private initialWidth: string | undefined;

  @Element() el!: HTMLTnwSelectElement;

  @State() parsedOptionsData: TnwSelectOption[] = [];
  @State() isOpen: boolean = false;
  @State() selectedOption?: TnwSelectOption = { label: undefined, value: undefined };
  @State() selectId: string;
  @State() initialWidthSet: boolean = false;

  /**
   * JSON string representing the options available in the select dropdown.
   * Each option can include a label, value, ariaLabel, and disabled state.
   */
  @Prop() optionsData!: string;
  /**
   * The label to display when no option is selected.
   */
  @Prop() label?: string = 'Select an option';

  /**
   * Border radius of the select.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * Controls the size of the select component.
   * Options are 'sm' (small), 'md' (medium), or 'lg' (large).
   * Default is 'md' (medium).
   */
  @Prop() size?: 'sm' | 'md' | 'lg' = 'md';

  /**
   * If `true`, the select component will be disabled and cannot be interacted with.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the select component will expand to fill the full width of its container.
   * Default is `false`, which means the component will size based on its content.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * A custom accessibility ID for the select component.
   * Can be used to provide a specific identifier for screen readers or testing.
   */
  @Prop() accessibilityId?: string;

  /**
   * Specifies the variant of the select component.
   * 
   * - `standard`: Default variant without any additional icons or images.
   * - `withIconName`: Variant that includes an icon by name.
   * - `withSvgIcon`: Variant that includes an SVG icon.
   * - `withImage`: Variant that includes an image.
   * - `withStatus`: Variant that includes a status indicator.
   */
  @Prop() variant?: "standard" | 'withIconName' | 'withSvgIcon' | 'withImage' | 'withStatus' = 'standard'; // Todo: GroupedOptions, MultiSelect, Searchable

  // Todo: @prop() appearance?: "basic" | "withTitle" | "floatingLabel";

  /**
   * The appearance of the select options. if bordered a border top and bottom will be added to the options.
   */
  @Prop() optionAppearance?: 'standard' | 'bordered' = 'standard';

  /**
   * Emitted when an option is selected from the dropdown.
   */
  @Event() optionSelected: EventEmitter<TnwSelectOption>;

  /**
   * Emitted when the dropdown is toggled open or closed.
   */
  @Event() dropdownToggled: EventEmitter<{ isOpen: boolean }>;

  /**
   * Resets the selected option to the default or placeholder label.
   */
  @Method()
  async resetSelectedOption(): Promise<void> {
    this.selectedOption = undefined;
    this.optionSelected.emit(undefined);
  }

  /**
   * Retrieves the currently selected option.
   */
  @Method()
  async getSelectedOption(): Promise<TnwSelectOption | undefined> {
    return this.selectedOption;
  }

  /**
   * Programmatically toggles the dropdown open or closed.
   */
  @Method()
  async toggleDropdown(): Promise<void> {
    if (this.disabled) return;

    this.isOpen = !this.isOpen;
    this.dropdownToggled.emit({ isOpen: this.isOpen });

    // Focus the first dropdown option when opened
    if (this.isOpen) {
      // requestAnimationFrame ensures the dropdown is rendered before focusing
      requestAnimationFrame(() => {
        const firstOption = this.el.shadowRoot?.querySelector<HTMLElement>(`[data-select-option]:not([aria-disabled="true"])`);
        if (firstOption) {
          firstOption.focus();
        }
      });
    }
  }

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleOptionKeyDown = this.handleOptionKeyDown.bind(this);
  }

  connectedCallback() {
    document.addEventListener('click', this.handleDocumentClickBound);

    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        borderRadiusStyleSheet,
        this.variant === "withStatus" ? extendedAppearanceStyleSheet : null,
        this.componentStyles,
      ].filter(Boolean);
    }
  }

  @Watch('parsedOptionsData')
  handleOptionsDataChange(newValue: TnwSelectOption[]) {

    // Only set the initial width once when options are first loaded
    if (newValue.length > 0 && !this.initialWidthSet) {
      requestAnimationFrame(() => {
        const buttonElement = this.el.shadowRoot?.querySelector('[data-select-toggler]');
        if (buttonElement) {
          this.initialWidth = `${buttonElement.clientWidth}px`;
          this.initialWidthSet = true;
        }
      });
    }
  }

  async componentWillLoad() {
    this.initSelectId();

    try {
      const parsedData: TnwSelectOption[] = await parseJSONAsync(this.optionsData);
      this.parsedOptionsData = parsedData;
      validateProps([this.accessibilityId, this.borderRadius, this.disabled, this.fullWidth, this.label, this.optionAppearance, this.optionsData, this.size, this.variant]);
    } catch (error) {
      console.error('Error parsing optionsData:', error);
    }
  }

  componentDidLoad() {

    // Calculate initial width after the component is fully loaded
    const buttonElement = this.el.shadowRoot?.querySelector('[data-select-toggler]');
    if (buttonElement && buttonElement.clientWidth) {
      this.initialWidth = `${buttonElement.clientWidth}px`;
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleDocumentClickBound);
  }

  private handleDocumentClick(event: Event) {
    if (!this.el.contains(event.target as Node) && this.isOpen) {
      this.isOpen = false;
      this.dropdownToggled.emit({ isOpen: false });
    }
  }

  private setSelectedOption(optionValue?: string): void {
    const selected: TnwSelectOption = this.parsedOptionsData.find(opt => opt.value === optionValue);

    if (!selected) {
      this.selectedOption = undefined;
      return;
    }

    this.selectedOption = selected;
  }

  private selectOption(option: TnwSelectOption): void {
    this.setSelectedOption(option.value);
    this.isOpen = false;
    this.optionSelected.emit(option);
  }

  private handleOptionClick(option: TnwSelectOption): void {
    if (!option.disabled) {
      this.selectOption(option);
    }
  }

  private initSelectId(): void {
    if (isNotEmptyString(this.accessibilityId)) {
      this.selectId = this.accessibilityId;
    } else {
      this.selectId = generateRandomId(this.baseClass);
    }
  }

  // private findNextEnabledOption(currentIndex: number, direction: number): number {
  //   const options = this.parsedOptionsData;
  //   let index = currentIndex + direction;

  //   while (index >= 0 && index < options.length) {
  //     if (!options[index].disabled) return index;
  //     index += direction;
  //   }

  //   return -1;
  // }

  private handleOptionKeyDown(event: KeyboardEvent) {
    const options = this.parsedOptionsData;
    const currentFocusedOption = this.el.shadowRoot?.querySelector<HTMLElement>('li[data-select-option]:focus');
    const currentIndex = currentFocusedOption ?
      options.findIndex(opt => opt.value === currentFocusedOption.dataset.value) : -1;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.isOpen && currentFocusedOption) {
          // Only select when Enter/Space is pressed
          const selectedOption = options.find(opt => opt.value === currentFocusedOption.dataset.value);
          if (selectedOption && !selectedOption.disabled) {
            this.selectOption(selectedOption);
          }
        }
        break;

      case 'ArrowDown':
      case 'ArrowUp':
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;

        // Find next non-disabled option to focus
        let nextIndex = currentIndex;
        do {
          nextIndex = (nextIndex + direction + options.length) % options.length;
        } while (options[nextIndex].disabled);

        // Focus the next option without selecting it
        const nextOptionElement = this.el.shadowRoot?.querySelector<HTMLElement>(
          `li[data-select-option][data-value="${options[nextIndex].value}"]`
        );

        if (nextOptionElement) {
          nextOptionElement.focus();
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.isOpen = false;
        this.dropdownToggled.emit({ isOpen: false });
        break;
    }
  }

  private isOptionSelected(optionValue: string): boolean {
    if (optionValue === undefined || optionValue === null) return false;
    if (this.selectedOption?.value === undefined || this.selectedOption?.value === null) return false;

    return this.selectedOption?.value === optionValue;
  }

  private getHostClasses(): string {
    return [
      this.baseClass,
      `${this.baseClass}--${this.size}`,
      this.disabled ? `${this.baseClass}--disabled` : '',
      this.fullWidth ? `${this.baseClass}--full-width` : '',
    ].filter(Boolean).join(" ").trim();
  }

  private getButtonClasses(): string {
    return [
      `${this.baseClass}__button`,
      getBorderRadiusClass(this.borderRadius),
      this.isOpen ? `${this.baseClass}__button--clicked` : '',
    ].filter(Boolean).join(" ").trim();
  }

  private getDropdownClasses(): string {
    const dropdownClass = `${this.baseClass}__dropdown`;
    return [
      dropdownClass,
      this.isOpen ? `${dropdownClass}--open` : ``,
      getBorderRadiusClass(this.borderRadius),
    ].filter(Boolean).join(" ").trim();
  }

  private getOptionClasses(option: TnwSelectOption): string {
    const optionClass = `${this.baseClass}__option`;
    return [
      optionClass,
      `${this.isOptionSelected(option.value) ? `${optionClass}--selected` : ''}`,
      `${this.optionAppearance === 'bordered' ? `${optionClass}--bordered` : ''}`,
      `${option.disabled ? `${optionClass}--disabled` : ''}`,
    ].filter(Boolean).join(" ").trim();
  }

  private renderSelectButton() {
    const option: TnwSelectOption = this.selectedOption;

    return (
      <button
        class={this.getButtonClasses()}
        aria-haspopup="listbox"
        aria-expanded={this.isOpen.toString()}
        id={`${this.label}-label-${this.selectId}`}
        aria-controls={this.selectId}
        tabIndex={0}
        onClick={this.toggleDropdown}
        role='combobox'
        part='button'
        data-select-toggler
      >
        <div class={`${this.baseClass}__button-content`}>
          {this.variant === 'withIconName' && 'iconName' in option && option.iconName && (
            <tnw-icon name={option.iconName as 'string'} size='2xs' />
          )}

          {this.variant === 'withSvgIcon' && 'svgIcon' in option && option.svgIcon && (
            <tnw-icon enableSvg={true} size='2xs'>
              <span class={`${this.baseClass}__button-icon`} slot='svg' innerHTML={option.svgIcon as string}></span>
            </tnw-icon>
          )}

          {this.variant === 'withImage' && 'imageSource' in option && option.imageSource && (
            <tnw-badge variant='image' imageSrc={option.imageSource as 'string'} size='sm' />
          )}

          {this.variant === 'withStatus' && 'status' in option && option.status && (
            <tnw-badge appearanceColor={option.status as ExtendedColorType} appearance="solid" size="sm" variant='status' />
          )}

          <span class={`${this.baseClass}__button-label`}>{this.selectedOption?.label || this.label}</span>
        </div>

        <tnw-icon name='tnw-chevron-down' />
      </button>
    )
  }

  private renderSelectOption(option: TnwSelectOption, index: number) {
    return (
      <li
        class={this.getOptionClasses(option)}
        role="option"
        aria-selected={this.isOptionSelected(option.value) ? 'true' : 'false'}
        aria-disabled={option.disabled ? 'true' : 'false'}
        onClick={() => this.handleOptionClick(option)}
        onKeyDown={this.handleOptionKeyDown}
        tabIndex={index === 0 ? 0 : -1}
        part="option"
        data-value={option.value}
        data-select-option
      >
        {this.variant === 'withIconName' && 'iconName' in option && option.iconName && (
          <tnw-icon name={option.iconName as 'string'} size='2xs' />
        )}

        {this.variant === 'withSvgIcon' && 'svgIcon' in option && option.svgIcon && (
          <tnw-icon enableSvg={true} size='2xs'>
            <span class={`${this.baseClass}__option-icon`} slot='svg' innerHTML={option.svgIcon as string}></span>
          </tnw-icon>
        )}

        {this.variant === 'withImage' && 'imageSource' in option && option.imageSource && (
          <tnw-badge variant='image' imageSrc={option.imageSource as 'string'} size='sm' />
        )}

        {this.variant === 'withStatus' && 'status' in option && option.status && (
          <tnw-badge appearanceColor={option.status as ExtendedColorType} appearance="solid" size="sm" variant='status' />
        )}

        <span class={`${this.baseClass}__option-label`}>{option.label}</span>
      </li>
    )
  }

  private renderSelectDropdown() {
    const options = this.parsedOptionsData;

    return (
      <ul
        class={this.getDropdownClasses()}
        aria-labelledby={`${this.label}-label-${this.selectId}`}
        role="listbox"
        tabIndex={-1}
        id={this.selectId}
        part='dropdown'
        data-select
      >
        {options.map((option, index) => (
          this.renderSelectOption(option, index)
        ))}
      </ul>
    )
  }

  render() {
    return (
      <Host
        style={{
          width: this.initialWidth,
        }}
        class={this.getHostClasses()}
      >
        {this.renderSelectButton()}
        {this.renderSelectDropdown()}
      </Host>
    );
  }
}
