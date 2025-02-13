import { Component, Element, Fragment, Host, Prop, h } from '@stencil/core';
import { getAppearanceClass, getBorderRadiusClass, GLOBAL_PREFIX } from '../../utils/utils';
import { LogicalAlignmentType, AppearanceType, BorderRadiusType, ColorType, LayoutType, AlignmentType } from '../../utils/component-props-types';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';
import { styles } from './tnw-banner.styles';
import { validateProps } from './utils/tnw-banner-validate-props';
import { StyleHandler } from '../../utils/style-handler';

/**
 * The `tnw-banner` component is a customizable banner used for multi-purpose content.
 * As an example it can be used to display a newsletter banner, advertisement banner, contact banner etc.
 * It supports various appearances and colors, and allows for custom content to be inserted via slots.
 * 
 * @slot subtitle - Use this slot to insert a short title or subtitle in the banner.
 * @slot title - Use this slot to insert the main title or heading of the banner.
 * @slot description - Use this slot to insert a description or additional information in the banner.
 * @slot button - Use this slot to insert a button or call-to-action element.
 * 
 * @slot content - Use this slot to insert custom content when `enableContentSlot` is set to `true`. When enabled, only the `content` slot will be available.
 */
@Component({
	tag: 'tnw-banner',
	shadow: true,
})
export class TnwBanner {
	private baseClass = `${GLOBAL_PREFIX}-banner`;
	private stylesHandler: StyleHandler;

	@Element() el!: HTMLTnwBannerElement;

	/**
	 * Defines the visual appearance of the banner (e.g., solid, outline).
	 */
	@Prop() appearance?: AppearanceType | 'gradient' = 'solid';

	/**
	 * Specifies the primary appearance color of the banner. if appearance is gradient, this prop will be ignored.
	 */
	@Prop() appearanceColor?: ColorType = 'primary';

	/**
	 * If `true`, the banner will render custom content using the `content` slot. When this is enabled, the standard slots (`subtitle`, `title`, `description`, `button`) will not be used.
	 */
	@Prop() enableContentSlot?: boolean = false;

	/**
	 * If `true`, the banner will center its content.
	 */
	@Prop() alignment?: LogicalAlignmentType = 'center';

	/**
	 * Defines the alignment of the text content.
	 */
	@Prop() textAlignment?: AlignmentType = 'center';

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
	@Prop() paddingHorizontal?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'lg';

	/**
	 * Defines the vertical padding of the banner.
	 */
	@Prop() paddingVertical?: 'none' | "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'lg';

	/**
	 * Defines the spacing between the content and the button. This will not control gap between elements inside the content.
	 */
	@Prop() gap?: "xs" | "sm" | "md" | "lg" | "xl" | '2xl' | '3xl' | '4xl' = 'md';

	/**
	 * The layout of the banner.
	 */
	@Prop() layout?: LayoutType = 'vertical';

	/**
	 * If `true`, the section body will be wrapped in a container for centering and padding.
	 */
	@Prop() disableInternalContainer?: boolean = false;

	constructor() {
		this.initializeStyles();
	}

	connectedCallback() {
		this.stylesHandler.applyStyles();
	}

	componentWillLoad() {
		validateProps([this.alignment, this.appearance, this.appearanceColor, this.borderRadius, this.disableInternalContainer, this.enableContentSlot, this.gap, this.layout, this.margin, this.paddingHorizontal, this.paddingVertical, this.textAlignment]);
	}

	private initializeStyles() {
		this.stylesHandler = new StyleHandler(
			this.el,
			styles
		);
	}

	private getHostClasses(): string {
		const { baseClass, appearance, appearanceColor, layout, textAlignment, gap, alignment, borderRadius, margin, paddingHorizontal, paddingVertical, disableInternalContainer } = this;

		return [
			baseClass,
			!disableInternalContainer ? 'container' : '',
			`${baseClass}--${alignment}`,
			`${baseClass}--text-${textAlignment}`,
			`${baseClass}--gap-${gap}`,
			`${baseClass}--${layout}`,
			`${baseClass}--margin-${margin}`,
			`${baseClass}--padding-inline-${paddingHorizontal}`,
			`${baseClass}--padding-block-${paddingVertical}`,
			appearance === 'gradient' ? `${baseClass}--gradient` : getAppearanceClass(appearance, appearanceColor),
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