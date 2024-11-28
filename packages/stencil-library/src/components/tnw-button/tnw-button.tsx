import { Component, Host, Prop, Element, h, Fragment } from '@stencil/core';
import { GLOBAL_PREFIX, getBorderRadiusClass, getClassNames, getExtendedAppearanceClass, isNotEmptyString } from '../../utils/utils';
import { OptionalAppearanceType, BorderRadiusType, ExtendedColorType, ExtendedSizeType } from '../../utils/component-props-types';
import { styles } from './tnw-button.styles';
import { validateProps } from './utils/tnw-button-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

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

  /**
   * Specifies the text label displayed on the button. This prop is required.
   */
  @Prop() label: string;

  /**
   * Specifies the button type.
   */
  @Prop() type?: 'button' | 'submit' = 'button';

  /**
   * Defines the color variant of the button.
   */
  @Prop() variant?: ExtendedColorType = 'primary';

  /**
   * Specifies the appearance style of the button.
   */
  @Prop() appearance?: OptionalAppearanceType = 'solid';

  /**
   * Determines the size of the button.
   */
  @Prop() size?: ExtendedSizeType = 'md';

  /**
   * Specifies the hover appearance style for the button.
   */
  @Prop() hoverAppearance?: 'none' | 'solid' | 'outlined' = 'none';

  /**
   * Specifies the hover variant color for the button color.
   */
  @Prop() hoverVariant?: 'primary' | 'secondary' | 'black' | 'white' | 'inverse' | 'auto' = 'primary';

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

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.appearance, this.borderRadius, this.disabled, this.hoverAppearance, this.hoverVariant, this.href, this.label, this.newTab, this.size, this.type, this.variant];
    validateProps(propsValues);
  }

  private getHostClasses(): string {
    const { baseClass, variant, appearance, size, hoverAppearance, hoverVariant, disabled } = this;

    const classesArray = [size];

    return [
      baseClass,
      disabled ? `${baseClass}--disabled` : '',
      hoverAppearance !== 'none' ? `${baseClass}--hover-${hoverAppearance}-${hoverVariant}` : ``,
      getClassNames(classesArray, baseClass),
      getExtendedAppearanceClass(appearance, variant),
      getBorderRadiusClass(this.borderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private getButtonClasses() {
    const { baseClass, appearance } = this;
    const elClassBase = `${baseClass}__el`;
    return [
      elClassBase,
      appearance !== 'none' ? `${elClassBase}--has-padding` : ``,
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

  private renderAnchor = () => (
    <a
      class={this.getButtonClasses()}
      href={this.disabled ? undefined : this.href}
      target={this.newTab ? "_blank" : undefined}
      rel={this.newTab ? "noopener noreferrer" : undefined}
      aria-disabled={this.disabled ? 'true' : undefined}
      part='button'
    >
      {this.renderButtonContent()}
    </a>
  );

  private renderButtonElement = () => (
    <button
      class={this.getButtonClasses()}
      type={this.type}
      disabled={this.disabled}
      part='button'
    >
      {this.renderButtonContent()}
    </button>
  );

  render() {
    return (
      <Host class={this.getHostClasses()}>
        {
          isNotEmptyString(this.href) ?
            this.renderAnchor() :
            this.renderButtonElement()
        }
      </Host>
    )
  }
}
