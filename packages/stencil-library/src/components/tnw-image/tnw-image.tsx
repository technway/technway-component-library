import { Component, Host, Prop, h, Element } from '@stencil/core';
import { getAspectRatioClass, getBorderRadiusClass, getObjectFitClass, getObjectPositionClass, GLOBAL_PREFIX, isNotEmptyString } from '../../utils/utils';
import { AspectRatioType, BorderRadiusType, ObjectFitType, ObjectPositionType, SizeType } from '../../utils/component-props-types';
import { validateProps } from './utils/tnw-image-validate-props';
import { styles } from './tnw-image.styles';
import { borderRadiusStyleSheet, mediaStyleSheet } from '../../utils/shared-styles';
import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from '../../utils/utils';

/**
 * The `tnw-image` component is used to display images with optional captions, lazy loading, and customizable styles. 
 * It supports various properties to control the image source, dimensions, and appearance.
 * 
 * @part image - The main `<img>` element rendering the image.
 * @part figure - The container `<figure>` element for the image and optional caption.
 * @part figcaption - The `<figcaption>` element for the image caption (if provided).
 */
@Component({
  tag: 'tnw-image',
  shadow: true,
})
export class TnwImage {
  private baseClass = `${GLOBAL_PREFIX}-image`;
  private componentStyles: CSSStyleSheet;

  @Element() el!: HTMLTnwImageElement;

  /**
   * The source URL/Path of the image.
   */
  @Prop() src!: string;

  /**
   * The alternative text for the image, used for accessibility.
   */
  @Prop() alt!: string;

  /**
   * An optional caption to be displayed below the image.
   */
  @Prop() caption?: string = '';

  /**
   * The width of the image. this will be apllied to the `<img>` element. Value should be a valid CSS unit, such as `px`, `em`, or `%`.
   */
  @Prop() width?: string;

  /**
   * The height of the image. this will be apllied to the `<img>` element. Value should be a valid CSS unit, such as `px`, `em`, or `%`.
   */
  @Prop() height?: string;

  /**
   * The width size of the image. This controls the width of the image container. Values are not units, but rather likw `full`, `lg`, `md` ...
   */
  @Prop() widthSize?: SizeType | "full" = 'full';

  /**
   * The height size of the image. This controls the height of the image container. Values are not units, but rather likw `full`, `lg`, `md` ...
   */
  @Prop() heightSize?: SizeType | "full";

  /**
   * The aspect ratio of the image (width / height). Useful for maintaining image proportions.
   */
  @Prop() aspectRatio?: AspectRatioType = "initial";

  /**
   * The object position of the image. This defines how the image is positioned within its container.
   */
  @Prop() objectPosition?: ObjectPositionType = "initial";

  /**
   * Defines how the image should be resized to fit its container. This controls the CSS `object-fit` property.
   */
  @Prop() objectFit?: ObjectFitType;

  /**
   * If `true`, the image will use lazy loading, loading only when it is about to be visible in the viewport.
   */
  @Prop({ reflect: true }) lazyLoading?: boolean = false;

  /**
   * Determines the border radius of the image.
   */
  @Prop() BorderRadius: BorderRadiusType = 'default';

  constructor() {
    if (isCSSStyleSheetSupported()) {
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(styles);
    }
  }

  connectedCallback() {
    if (isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        mediaStyleSheet,
        borderRadiusStyleSheet,
        this.componentStyles,
      ];
    }
  }

  componentWillLoad() {
    validateProps([this.BorderRadius, this.alt, this.aspectRatio, this.caption, this.heightSize, this.lazyLoading, this.objectFit, this.objectPosition, this.src, this.widthSize]);
  }

  private hasWidthOrHeight(): boolean {
    console.log({ hasWidth: isNotEmptyString(this.width), hasHeight: isNotEmptyString(this.height) });
    return isNotEmptyString(this.width) || isNotEmptyString(this.height);
  }

  private getImageClasses(): string {
    const { baseClass, aspectRatio, objectFit, objectPosition } = this;
    return [
      baseClass,
      !this.hasWidthOrHeight() ? `${baseClass}--full` : '',
      getAspectRatioClass(aspectRatio),
      getObjectFitClass(objectFit),
      getObjectPositionClass(objectPosition),
      getBorderRadiusClass(this.BorderRadius),
    ].filter(Boolean).join(' ').trim();
  }

  private getHostClasses(): string {
    const { baseClass, widthSize, heightSize } = this;
    return [
      isNotEmptyString(widthSize) ? `${baseClass}--width-${widthSize}` : ``,
      isNotEmptyString(heightSize) ? `${baseClass}--height-${heightSize}` : ``,
    ].filter(Boolean).join(' ').trim();
  }

  /**
   * Returns the rendered image element.
   * @returns A rendered image element (JSX.Element)
   */
  private renderImage(): JSX.Element {
    return (
      <img
        class={this.getImageClasses()}
        src={this.src}
        alt={this.alt}
        loading={this.lazyLoading ? 'lazy' : 'eager'}
        part='image'
        style={{
          width: this.width,
          height: this.height,
        }}
      />
    );
  }

  private renderFigCaption(): JSX.Element | null {
    if (isNotEmptyString(this.caption)) {
      return (
        <figcaption class={`${this.baseClass}__figure-caption`} part='figcaption'>
          {this.caption}
        </figcaption>
      )
    }

    return null;
  }

  render() {
    const image = this.renderImage();
    const hasCaption: boolean = Boolean(this.caption);
    return (
      <Host class={this.getHostClasses()}>
        {hasCaption ? (
          <figure class={`${this.baseClass}__figure`} part='figure'>
            {image}
            {this.renderFigCaption()}
          </figure>
        ) : (
          image
        )}
      </Host>
    );
  }
}