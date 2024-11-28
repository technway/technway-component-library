import { Component, Element, Fragment, Host, Prop, h } from '@stencil/core';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX } from '../../utils/utils';
import { LogicalAlignmentType, AppearanceType, BorderRadiusType, ColorType } from '../../utils/component-props-types';
import { styles } from './tnw-contact-banner.styles';
import { validateProps } from './utils/tnw-contact-banner-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-contact-banner` component is a customizable banner used to display contact information or call-to-action content.
 * It supports various appearances and color variants, and allows for custom content to be inserted via slots.
 * 
 * @slot short-title - Use this slot to insert a short title or subtitle in the banner.
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
	@Prop() appearance?: AppearanceType = 'solid';

	/**
	 * Specifies the primary color variant of the banner.
	 */
	@Prop() variant?: ColorType = 'primary';

	/**
	 * If `true`, the banner will render custom content using the `content` slot. 
	 * When this is enabled, the standard slots (`short-title`, `title`, `description`, `button`) will not be used.
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
		const propsValues = [this.alignment, this.appearance, this.borderRadius, this.enableContentSlot, this.variant];
		validateProps(propsValues);
	}

	private getContactBannerClasses(): string {
		const { baseClass, appearance, variant, alignment } = this;

		return [
			baseClass,
			`${baseClass}--${alignment}`,
			getAppearanceClass(appearance, variant),
			getBorderRadiusClass(this.borderRadius),
		].filter(Boolean).join(' ').trim();
	}

	render() {
		return (
			<Host class={this.getContactBannerClasses()}>
				{this.enableContentSlot ?
					<slot name='content' />
					: (
						<Fragment>
							<div class={`${this.baseClass}__content`}>
								<div class={`${this.baseClass}__content-heading`}>
									<slot name="short-title" />
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
