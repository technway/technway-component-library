import { Component, Host, h, Prop, State, Event, EventEmitter, Element, Watch } from '@stencil/core';
import { getBorderRadiusClass, GLOBAL_PREFIX, parseJSONAsync } from '../../utils/utils';
import { styles } from './tnw-select.styles';
import { BorderRadiusType } from '../../utils/component-props-types';
import { validateProps } from './utils/tnw-select-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { borderRadiusStyleSheet } from '../../utils/shared-styles';

/**
 * ⚠️ COMPONENT IN DEVELOPMENT
 * 
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

  @Element() el!: HTMLTnwSelectElement;

  @State() parsedOptionsData: any[] = [];
  @State() isOpen: boolean = false;

  /**
   * JSON string representing the options available in the select dropdown.
   * Each option can include a label, value, ariaLabel, and disabled state.
   */
  @Prop() optionsData!: string;

  /**
   * The currently selected option.
   */
  @State() selectedOption?: string = '';

  /**
   * The label to display when no option is selected.
   */
  @Prop() label?: string = 'Select an option';

  /**
   * The default option that should be selected on component load.
   */
  @Prop() defaultOption?: string;

  /**
   * Border radius of the select.
   */
  @Prop() borderRadius?: BorderRadiusType = 'default';

  /**
   * Emitted when an option is selected from the dropdown.
   */
  @Event() optionSelected: EventEmitter<string>;

  //  Watches for changes to `defaultOption` and updates the selected option accordingly.
  @Watch('defaultOption')
  watchDefaultOption(newValue: string) {
    this.setSelectedOption(newValue);
  }

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles)
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        borderRadiusStyleSheet,
        this.componentStyles,
      ]
    }
  }

  async componentWillLoad() {
    this.parsedOptionsData = await parseJSONAsync(this.optionsData);
    this.setSelectedOption(this.defaultOption);

    // Validate Props
    const propsValues = [this.borderRadius, this.defaultOption, this.label, this.optionsData];
    validateProps(propsValues);
  }

  componentDidLoad() {
    document.addEventListener('click', this.handleDocumentClickBound);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleDocumentClickBound);
  }

  private handleDocumentClick(event: Event) {
    if (!this.el.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  private setSelectedOption(option: string | null) {
    this.selectedOption = option ?? this.label;
  }

  private toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  private handleKeyDown(event: KeyboardEvent) {
    const options = this.parsedOptionsData;
    const currentIndex = options.findIndex(option => option.value === this.selectedOption);

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleDropdown();
    } else if (event.key === 'Escape') {
      this.isOpen = false;
    } else if (event.key === 'ArrowDown' && this.isOpen) {
      event.preventDefault();
      const nextIndex = this.findNextEnabledOption(currentIndex, 1);
      if (nextIndex !== -1) {
        this.selectOption(options[nextIndex].value);
      }
    } else if (event.key === 'ArrowUp' && this.isOpen) {
      event.preventDefault();
      const prevIndex = this.findNextEnabledOption(currentIndex, -1);
      if (prevIndex !== -1) {
        this.selectOption(options[prevIndex].value);
      }
    }
  }

  private selectOption(selectedOption: string) {
    this.selectedOption = selectedOption;
    this.isOpen = false;
    this.optionSelected.emit(selectedOption);
  }

  private handleOptionClick(option: any) {
    if (!option.disabled) {
      this.selectOption(option.value);
    }
  }

  private findNextEnabledOption(currentIndex: number, direction: number): number {
    const options = this.parsedOptionsData;
    let nextIndex = currentIndex + direction;

    while (nextIndex >= 0 && nextIndex < options.length) {
      if (!options[nextIndex].disabled) {
        return nextIndex;
      }
      nextIndex += direction;
    }

    return -1;
  }

  private getButtonClasses(): string {
    return [
      `${this.baseClass}__button`,
      getBorderRadiusClass(this.borderRadius),
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

  private renderSelectButton() {
    return (
      <button
        class={this.getButtonClasses()}
        aria-haspopup="listbox"
        aria-expanded={this.isOpen.toString()}
        aria-labelledby={`${this.baseClass}-label`}
        aria-describedby={`${this.baseClass}-description`}
        onClick={this.toggleDropdown}
        onKeyDown={this.handleKeyDown}
        part='button'
        data-select-toggler
      >
        {this.selectedOption || this.label}
        <tnw-icon slot="icon-end" name='tnw-chevron-down' />
      </button>
    )
  }

  private renderSelectDropdown() {
    const options = this.parsedOptionsData;

    return (
      <ul class={this.getDropdownClasses()} role="listbox" part='dropdown' data-select>
        {options.map((option, index) => (
          <li
            class={`${this.baseClass}__option`}
            role="option"
            id={`${this.baseClass}-option-${index}`}
            aria-selected={this.selectedOption === option.value}
            aria-label={option.ariaLabel || option.label}
            aria-disabled={option.disabled ? 'true' : 'false'}
            onClick={this.handleOptionClick}
            tabIndex={option.disabled ? -1 : 0}
            part='option'
            data-select-option
          >
            {option.label}
          </li>
        ))}
      </ul>
    )
  }

  render() {

    return (
      <Host class={this.baseClass}>
        {this.renderSelectButton()}
        {this.renderSelectDropdown()}
      </Host>
    );
  }
}