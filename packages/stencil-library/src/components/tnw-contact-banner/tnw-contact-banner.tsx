import { Component, Element, Fragment, Host, Prop, h } from '@stencil/core';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX } from '../../utils/utils';
import { LogicalAlignmentType, AppearanceType, BorderRadiusType, ColorType } from '../../utils/component-props-types';
import { styles } from './tnw-contact-banner.styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { validateProps } from './utils/tnw-contact-banner-validate-props';

/**
 * The `tnw-contact-banner` component is a customizable banner used to display contact information or call-to-action content.
 * It supports various appearances and color variants, and allows for custom content to be inserted via slots.
 * 
 * @slot subtitle - Use this slot to insert a short title or subtitle in the banner.
 * @slot title - Use this slot to insert the main title or heading of the banner.
 * @slot description - Use this slot to insert a description or additional information in the banner.
 * @slot button - Use this slot to insert a button or call-to-action element.
 * 
 * @slot content - Use this slot to insert custom content when `enableContentSlot` is set to `true`. When enabled, only the `content` slot will be available.
 */
@Component({
	tag: 'tnw-contact-banner',
	shadow: true,
})
export class TnwContactBanner {
	private baseClass = `${GLOBAL_PREFIX}-contact-banner`;
	private componentStyles: CSSStyleSheet;

	@Element() el!: HTMLTnwContactBannerElement;

	/**
	 * Defines the visual appearance of the banner (e.g., solid, outline).
	 */
	@Prop() appearance?: AppearanceType | 'gradient' = 'solid';

	/**
	 * Specifies the primary color variant of the banner. if appearance is gradient, this prop will be ignored.
	 */
	@Prop() variant?: ColorType = 'primary';

	/**
	 * If `true`, the banner will render custom content using the `content` slot. When this is enabled, the standard slots (`subtitle`, `title`, `description`, `button`) will not be used.
	 */
	@Prop() enableContentSlot?: boolean = false;

	/**
	 * If `true`, the banner will center its content.
	 */
	@Prop() alignment?: LogicalAlignmentType = 'center';

	/**
	 * Defines the border radius of the banner.
	 */
	@Prop() borderRadius?: BorderRadiusType = 'default';

	/**
	 * Defines the margin of the banner.
	 */
	@Prop() margin?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'xl';

	/**
	 * Defines the horizontal padding of the banner.
	 */
	@Prop() horizontalPadding?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = '2xl';

	/**
	 * Defines the vertical padding of the banner.
	 */
	@Prop() VerticalPadding?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = '2xl';

	/**
	 * If `true`, the section body will be wrapped in a container for centering and padding.
	 */
	@Prop() disableInternalContainer?: boolean = false;

	constructor() {
		if (isCSSStyleSheetSupported()) {
			this.componentStyles = new CSSStyleSheet();
			this.componentStyles.replaceSync(styles);
		}
	}

	connectedCallback() {
		if (isAdoptedStyleSheetsSupported()) {
			(this.el.shadowRoot as any).adoptedStyleSheets = [this.componentStyles];
		}
	}

	componentWillLoad() {
		const propsValues = [this.VerticalPadding, this.alignment, this.appearance, this.borderRadius, this.disableInternalContainer, this.enableContentSlot, this.horizontalPadding, this.margin, this.variant];
		validateProps(propsValues);
	}

	private getHostClasses(): string {
		const { baseClass, appearance, variant, alignment, borderRadius, margin, horizontalPadding, VerticalPadding, disableInternalContainer } = this;

		return [
			baseClass,
			!disableInternalContainer ? 'container' : '',
			`${baseClass}--${alignment}`,
			`${baseClass}--margin-${margin}`,
			`${baseClass}--padding-inline-${horizontalPadding}`,
			`${baseClass}--padding-block-${VerticalPadding}`,
			appearance === 'gradient' ? `${baseClass}--gradient` : getAppearanceClass(appearance, variant),
			getBorderRadiusClass(borderRadius),
		].filter(Boolean).join(' ').trim();
	}

	render() {
		return (
			<Host class={this.getHostClasses()}>
				{this.enableContentSlot ?
					<slot name='content' />
					: (
						<Fragment>
							<div class={`${this.baseClass}__content`}>
								<div class={`${this.baseClass}__content-heading`}>
									<slot name="subtitle" />
									<slot name="title" />
								</div>
								<slot name="description" />
							</div>
							<slot name="button" />
						</Fragment>
					)
				}
			</Host>
		);
	}
}