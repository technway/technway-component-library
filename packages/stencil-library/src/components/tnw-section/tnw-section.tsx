import { Component, Element, Host, Prop, h } from '@stencil/core';
import { getDirectionalAppearanceClass, GLOBAL_PREFIX, isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { DirectionalAppearanceType, ExtendedSizeType } from '../../utils/component-props-types';
import { ColorType } from '../../utils/component-props-types';
import { styles } from './tnw-section.styles';
import { validateProps } from './utils/tnw-section-validate-props';
import { containerStyleSheet } from '../../utils/shared-styles';

/**
 * The `tnw-section` component is a layout container that wraps content such as headers, bodies, and footers.
 * It supports various appearance styles, optional glassmorphism effects, and an internal container to handle
 * content alignment and padding.
 * 
 * @slot header - Slot for the section header content, used for section titles.
 * @slot body - Slot for the section body content, used for section content.
 * @slot footer - Slot for the section footer content, used for section call-to-actions.
 * 
 * @part section - The main container of the section.
 */
@Component({
  tag: 'tnw-section',
  shadow: true,
})
export class TnwSection {
  private baseClass = `${GLOBAL_PREFIX}-section`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwSectionElement;

  /**
   * If `true`, the section will have a glassmorphism effect applied to its background.
   */
  @Prop() useGlassmorphismEffect?: boolean = false;

  /**
   * Defines the appearance style of the section.
   */
  @Prop() appearance?: DirectionalAppearanceType;

  /**
   * Specifies the color variant for the section's appearance.
   */
  @Prop() variant?: ColorType = 'auto';

  /**
   * If `true`, the section body will be wrapped in a container.
   */
  @Prop() disableInternalContainer?: boolean = false;

  /**
   * The padding size applied to the section.
   */
  @Prop() padding?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'xl';

  /**
   * The margin size applied to the section.
   */
  @Prop() margin?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'none';

  /**
   * The spacing size between the section slots.
   */
  @Prop() spacing?: ExtendedSizeType = 'md';

  /**
   * If `true`, the section is the first section on the page, and top padding/margin will not be applied.
   */
  @Prop() isFirstSection?: boolean = false;

  /**
   * If `true`, the section is the last section on the page, and bottom padding/margin will not be applied.
   */
  @Prop() isLastSection?: boolean = false;

  /**
   * The alignment of the section content.
   */
  @Prop() alignment?: "start" | "center" | "end" = "start";

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        containerStyleSheet,
        this.componentStyles
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.alignment, this.appearance, this.disableInternalContainer, this.isFirstSection, this.isLastSection, this.margin, this.padding, this.spacing, this.useGlassmorphismEffect, this.variant];
    validateProps(propsValues);
  }

  private getHostClasses() {
    const { baseClass, useGlassmorphismEffect, appearance, variant, padding, margin, isFirstSection, isLastSection } = this;

    const glassmorphismClass = useGlassmorphismEffect ? `${baseClass}--glassmorphism` : '';

    return [
      baseClass,
      `${baseClass}--padding-block-${padding}`,
      `${baseClass}--margin-${margin}`,
      appearance === 'solid' || appearance === 'outlined' || appearance === 'transparent' ? `${baseClass}--padding-inline-${padding}` : ``,
      isFirstSection ? `${baseClass}--first` : '',
      isLastSection ? `${baseClass}--last` : '',
      glassmorphismClass,
      getDirectionalAppearanceClass(appearance, variant),
    ]
      .filter(Boolean).join(' ').trim();
  }

  private getSectionContentClasses() {
    const { baseClass, disableInternalContainer, spacing, alignment } = this;
    const contentClass = `${baseClass}__content`;

    return [
      contentClass,
      `${contentClass}--spacing-${spacing}`,
      `${contentClass}--${alignment}`,
      !disableInternalContainer ? 'container' : '',
    ].filter(Boolean).join(' ').trim();
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <section class={this.getSectionContentClasses()} part='section'>
          <slot name='header' />
          <slot name='body' />
          <slot name='footer' />
        </section>
      </Host>
    );
  }
}