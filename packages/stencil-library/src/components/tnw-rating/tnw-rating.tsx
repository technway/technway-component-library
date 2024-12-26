import { Component, Element, Host, Prop, h } from '@stencil/core';
import { GLOBAL_PREFIX } from '../../utils/utils';
import { styles } from './tnw-rating.styles';
import { ColorType, ExtendedSizeType } from '../../utils/component-props-types';
import { colorStyleSheet } from '../../utils/shared-styles';
import { validateProps } from './utils/tnw-rating-validate-props';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-rating` component is used to display a star-based rating system, allowing users to see a visual representation of a rating out of a total number of stars.
 * 
 * @part default-icon - The `tnw-icon` element used to render the default star icons.
 */
@Component({
  tag: 'tnw-rating',
  shadow: true,
})
export class TnwRating {
  private baseClass = `${GLOBAL_PREFIX}-rating`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwRatingElement;

  /**
   * The total number of stars to display in the rating component.
   */
  @Prop() totalStars: number = 5;

  /**
   * The current rating value to display as filled stars.
   */
  @Prop() rating: number = this.totalStars || 0;

  /**
   * The size of the stars.
   */
  @Prop() starSize: ExtendedSizeType = 'sm';

  /**
   * The color of the filled stars.
   */
  @Prop() filledStarColor: ColorType = 'primary';

  /**
   * The color of the empty (unfilled) stars.
   */
  @Prop() emptyStarColor: ColorType = 'auto';

  /**
   * If true, empty stars (unfilled) will be hidden, showing only the filled stars.
   */
  @Prop() hideEmptyStars: boolean = false;

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        colorStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    const propsValues = [this.emptyStarColor, this.filledStarColor, this.hideEmptyStars, this.rating, this.starSize, this.totalStars];
    validateProps(propsValues);
  }

  private getDefaultIcon(isFilled: boolean): JSX.Element {
    return (
      <tnw-icon enableSvg={true} name="star" size={this.starSize} color={isFilled ? this.filledStarColor : this.emptyStarColor} hiddenAria={true} part="default-icon">
        <svg slot="svg" viewBox="0 0 16 16">
          <rect width="16" height="16" fill="none" />
          <path d="M16,6.204l-5.528-0.803L8,0.392L5.528,5.401L0,6.204l4,3.899l-0.944,5.505L8,13.009l4.944,2.599L12,10.103L16,6.204z" />
        </svg>
      </tnw-icon>
    )
  }

  private renderRatingIcons(): JSX.Element[] {
    const { totalStars, rating, hideEmptyStars } = this;
    const ratingIcons = [];
    const maxStarsNum = hideEmptyStars ? rating : totalStars;

    for (let i = 1; i <= maxStarsNum; i++) {
      const isFilled = i <= rating;
      ratingIcons.push(
        this.getDefaultIcon(isFilled)
      );
    }

    return ratingIcons;
  }

  render() {
    const { baseClass, rating, totalStars } = this;

    return (
      <Host class={baseClass} role="img" aria-label={`Rating: ${rating} out of ${totalStars}`}>
        {this.renderRatingIcons()}
      </Host>
    );
  }
}