import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { generateRandomId, getBorderRadiusClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported, isNotEmptyString } from '../../utils/utils';
import { styles } from './tnw-accordion.styles';
import { BorderRadiusType, ColorType, TextColorType } from '../../utils/component-props-types';
import { colorStyleSheet } from '../../utils/shared-styles';
import { setItemExpanded, state } from '../../stores/accordion-store';
import { validateProps } from './utils/tnw-accordion-validate-props';

/**
 * The `tnw-accordion` component provides a collapsible/expandable section
 * with a header and body content. It is ideal for use in creating FAQ sections, collapsible panels,
 * or other UI components requiring content toggling.
 *
 * @slot heading - Slot for custom content to replace the header text. This slot can only be used if the `heading` prop is not set.
 * @slot body - Slot for custom body content. This slot can only be used if the `content` prop is not set.
 * @slot expand-icon - Slot for a custom expand/collapse icon. To use this slot, set the `enableCustomExpandIcon` prop to `true`. If used, it overrides the default icon.
 *
 * @part header - The root `h3` element of the accordion header.
 * @part header-button - The clickable `div` inside the `tnw-button` that toggles the accordion. This element wraps both the header text and expand/collapse icon.
 * @part header-icon - The default icon `tnw-icon` that shows the expanded/collapsed state. When the `expand-icon` slot is used, this icon is replaced.
 * @part header-text - The `tnw-text` component displaying the accordion's heading.
 * @part body - The root part of the accordion's body content. It contains the collapsible content of the accordion.
 */
@Component({
  tag: 'tnw-accordion',
  shadow: true,
})
export class TnwAccordion {
  private baseClass: string = `${GLOBAL_PREFIX}-accordion`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwAccordionElement;

  @State() uniqueId: string;
  @State() isExpanded: boolean;

  // To DO:
  /**
   * Add variant prop for the placement of icon or some other style changes
   */

  /**
   * The heading of the accordion item, displayed in the header.
   */
  @Prop() heading: string;

  /**
   * The content for the accordion body.
   */
  @Prop() content: string;

  /**
   * If `true`, the accordion item will be expanded by default.
   */
  @Prop({ reflect: true }) expand: boolean = false;

  @Watch('expand')
  watchExpandHandler(newValue: boolean) {
    this.isExpanded = newValue;
    setItemExpanded(this.uniqueId, newValue);
  }

  /**
   * Unique ID of the accordion item. Used for accessibility.
   */
  @Prop() accordionId: string;

  /**
   * The appearance color of the accordion, determining the overall color scheme.
   */
  @Prop() appearanceColor?: ColorType = 'auto';

  /**
   * The text color of the accordion text.
   */
  @Prop() color?: TextColorType;

  /**
   * The appearance color of the accordion.
   */
  @Prop() appearance?: "none" | "transparent" | "solid" | "outlined" | "underlined" = 'outlined';

  /**
   * If `true`, a custom icon can be provided via the `icon` slot instead of the default icon.
   */
  @Prop() enableCustomExpandIcon?: boolean = false;

  /**
   * If `true`, the arrow icon rotates when the accordion is expanded to visually indicate the state change.
   */
  @Prop() disableExpandIconRotate?: boolean = false;

  /**
   * The border radius of the accordion.
   */
  @Prop() borderRadius: BorderRadiusType = "default";

  /**
   * Emit an event when the accordion item is expanded or collapsed. type: {EventEmitter<{ id: string, expanded: boolean }>}
   */
  @Event() accordionToggled: EventEmitter<{ id: string, expanded: boolean }>;

  constructor() {
    this.initializeStyles();
  }

  connectedCallback() {
    this.setUniqueId();
    this.applyStyles();
  }

  componentWillLoad() {
    this.isExpanded = this.expand;
    if (typeof state.expandedItems[this.uniqueId] === 'undefined') {
      setItemExpanded(this.uniqueId, this.expand);
    }
    validateProps([this.accordionId, this.appearance, this.appearanceColor, this.borderRadius, this.color, this.content, this.disableExpandIconRotate, this.enableCustomExpandIcon, this.expand, this.heading]);
  }

  private initializeStyles() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    } else {
      // Fallback for browsers without CSSStyleSheet support
      const styleEl = document.createElement('style');
      styleEl.textContent = styles;
      this.el.shadowRoot?.appendChild(styleEl);
    }
  }

  private applyStyles() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        colorStyleSheet,
        this.componentStyles
      ];
    } else {
      const colorStyleEl = document.createElement('style');
      const componentStyleEl = document.createElement('style');

      if (colorStyleSheet && colorStyleSheet.cssRules) {
        colorStyleEl.textContent = Array.from(colorStyleSheet.cssRules)
          .map(rule => rule.cssText)
          .join(' ');
      } else if (colorStyleSheet) {
        colorStyleEl.textContent = colorStyleSheet.toString();
      }

      if (this.componentStyles && this.componentStyles.cssRules) {
        componentStyleEl.textContent = Array.from(this.componentStyles.cssRules)
          .map(rule => rule.cssText)
          .join(' ');
      }

      this.el.shadowRoot.appendChild(colorStyleEl);
      this.el.shadowRoot.appendChild(componentStyleEl);
    }
  }

  private setUniqueId(): void {
    if (isNotEmptyString(this.accordionId)) {
      this.uniqueId = this.accordionId;
    } else {
      this.uniqueId = generateRandomId(this.baseClass);
    }
  }

  private toggleAccordion = () => {
    this.isExpanded = !this.isExpanded;
    setItemExpanded(this.uniqueId, this.isExpanded);

    this.accordionToggled.emit({ id: this.uniqueId, expanded: this.isExpanded });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleAccordion();
    }
  };

  private getHostClasses(): string {
    const { baseClass, appearance, appearanceColor, borderRadius } = this;

    return [
      baseClass,

      /**
       * Add expanded class if the accordion is expanded
       */
      this.isExpanded ? `${baseClass}--expanded` : ``,

      /**
       * Add underlined appearance class if the appearance is underlined
       */
      appearance === 'underlined' ? `${baseClass}--underlined` : '',

      /**
       * Add outlined appearance class if the appearance is outlined
       */
      appearance === 'outlined' ? `${baseClass}--outlined` : '',

      /**
       * Add padding class if the appearance is not none
       */
      appearance !== 'none' ? `${baseClass}--hasPadding` : ``,

      /**
       * Add appearanceColor class if the appearance is not none
       */
      appearance !== 'none' ? `${baseClass}--${appearance}-${appearanceColor}` : ``,

      /**
       * Add border radius class only if the appearance is either solid or outlined
       */
      appearance === "solid" || appearance === 'outlined' ? getBorderRadiusClass(borderRadius) : ``,
    ].filter(Boolean).join(' ').trim();
  }

  private getExpandIconClasses(): string {
    const { baseClass, isExpanded, disableExpandIconRotate } = this;
    const iconBaseClass = `${baseClass}__expand-icon`;
    return [
      iconBaseClass,
      !disableExpandIconRotate && isExpanded ? `${iconBaseClass}--rotated` : ``,
    ].filter(Boolean).join(' ').trim();
  }

  private getTextColor(): TextColorType {
    const { color, appearanceColor, appearance } = this;

    if (isNotEmptyString(color)) {
      return color;
    }

    if (appearance === 'solid') {
      switch (appearanceColor) {
        case 'primary':
          return 'white';

        case 'secondary':
          return 'white';

        case 'white':
          return 'black';

        case 'black':
          return 'white';

        case 'auto':
          return 'auto';

        case 'inverse':
          return 'inverse';

        case 'light':
          return 'black';

        default:
          return appearanceColor;
      }
    }

    return 'auto';
  }

  private renderHeader(buttonId: string, contentId: string): void {
    return (
      <h3 class={`${this.baseClass}__header`} part='header'>
        <tnw-button
          id={buttonId}
          aria-expanded={this.isExpanded.toString()}
          aria-controls={contentId}
          onClick={this.toggleAccordion}
          onKeyDown={this.handleKeyDown}
          tabindex="0"
          appearance='none'
          size='sm'
        >
          <div class={`${this.baseClass}__header-button`} part='header-button'>
            <div class={this.getExpandIconClasses()}>
              {this.enableCustomExpandIcon ? (
                <slot name="expand-icon"></slot>
              ) : (
                <tnw-icon
                  name='tnw-chevron-down'
                  hiddenAria={true}
                  color={this.getTextColor()}
                  part='header-icon'
                />
              )}
            </div>

            {isNotEmptyString(this.heading) ? (
              <tnw-text text={this.heading} size="xs" color={this.getTextColor()} weight='600' part='header-text' />
            ) : (
              <slot name="heading"></slot>
            )}
          </div>
        </tnw-button>
      </h3>
    )
  }

  private renderBody(buttonId: string, contentId: string): void {
    return (
      <div
        id={contentId}
        class={`${this.baseClass}__body`}
        role="region"
        hidden={!this.isExpanded}
        aria-labelledby={buttonId}
        part='body'
      >
        {isNotEmptyString(this.content) ? (
          <tnw-text text={this.content} size="xs" color={this.getTextColor()} />
        ) : (
          <slot name="body"></slot>
        )}
      </div>
    )
  }

  render() {
    const buttonId = `${this.uniqueId}-header`;
    const contentId = `${this.uniqueId}-body`;

    return (
      <Host class={this.getHostClasses()}>
        {this.renderHeader(buttonId, contentId)}
        {this.renderBody(buttonId, contentId)}
      </Host>
    );
  }
}