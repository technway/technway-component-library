/**
 * This file contains modular and reusable Constructable Stylesheets that are applied across the component library.
 * The styles are organized into categories such as appearance, borders, colors, global styles, icons, media, sizes,
 * and typography. Each section includes individual stylesheets for specific CSS properties (e.g., border width, text color)
 * and combined stylesheets (e.g., allColorStyleSheet) for applying multiple styles in one go.
 * 
 * The styles are implemented using the `CSSStyleSheet` API, allowing for efficient reuse of styles across multiple components
 * without duplication. The use of Constructable Stylesheets helps in maintaining performance and memory efficiency by attaching
 * the same stylesheet across shadow DOMs.
 * 
 * ⚠️ With Checking if CSSStyleSheet is available before creating and using it.
 * 
 * Usage Example:
 * 
 * ```ts
 * componentWillLoad() {
 *   this.shadowRoot.adoptedStyleSheets = [
 *     appearanceStyleSheet,
 *     colorStyleSheet,
 *     typographyStyleSheet,
 *   ];
 * }
 * ```
 * 
 * Developers can import and apply only the required styles for each component, or use the combined stylesheets to
 * apply multiple style properties at once. Additionally, this setup supports dynamic styling updates by re-calling 
 * `replaceSync()` if needed.
 * 
 * Categories:
 * - Appearance Styles
 * - Border Styles
 * - Color Styles
 * - Global Styles
 * - Icon Styles
 * - Media Styles
 * - Size Styles
 * - Typography Styles
 */
import { isCSSStyleSheetSupported } from "../utils";
import { appearanceStyles, directionalAppearanceStyles, extendedAppearanceStyles } from "./appearance.styles";
import { borderColorStyles, borderWidthStyles, borderRadiusStyles } from "./border.styles";
import { colorStyles, backgroundColorStyles, placeholderColorStyles } from "./color.styles";
import { a11yStyles, containerStyles, globalStyles, resetStyles } from "./global.styles";
import { iconSetupStyles, iconClassNames } from "./icon.styles";
import { objectPositionStyles, objectFitStyles, aspectRatioStyles } from "./media.styles";
import { heightStyles, maxHeightStyles, maxWidthStyles, minHeightStyles, minWidthStyles, widthStyles } from "./size.styles";
import { fontSizeStyles, fontWeightStyles, fontFamilyStyles, lineHeightStyles, textAlignStyles, textTransformStyles } from "./typography.styles";

/**
 * Appearance Related Stylesheets
 * 
 * These styles control the overall appearance of UI components such as buttons, alerts, and other elements
 * with different visual states (e.g., primary, secondary, success, warning, danger).
 * 
 * Available stylesheets:
 * - `appearanceStyleSheet`: defines the base appearance (e.g., primary, secondary states).
 * - `extendedAppearanceStyleSheet`: defines extended appearance states (e.g., success, warning, danger).
 * - `appearanceHoverStyleSheet`: defines appearance changes on hover for interactive elements.
 * - `extendedAppearanceHoverStyleSheet`: extends hover states for success, warning, danger.
 */
export const appearanceStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (appearanceStyleSheet !== null) {
    appearanceStyleSheet.replaceSync(appearanceStyles);
}

export const extendedAppearanceStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (extendedAppearanceStyleSheet !== null) {
    extendedAppearanceStyleSheet.replaceSync(extendedAppearanceStyles);
}

export const directionalAppearanceStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (directionalAppearanceStyleSheet !== null) {
    directionalAppearanceStyleSheet.replaceSync(directionalAppearanceStyles);
}

/**
 * Border Related Stylesheets
 * 
 * These styles control the border appearance of UI components, including color, width, and radius.
 * 
 * Available stylesheets:
 * - `borderColorStyleSheet`: defines the border color.
 * - `borderWidthStyleSheet`: defines the border width.
 * - `borderRadiusStyleSheet`: defines the border radius.
 * - `allBorderStyleSheet`: combines `borderColorStyleSheet`, `borderWidthStyleSheet`, and `borderRadiusStyleSheet`.
 */
export const borderColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (borderColorStyleSheet !== null) {
    borderColorStyleSheet.replaceSync(borderColorStyles);
}

export const borderWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (borderWidthStyleSheet !== null) {
    borderWidthStyleSheet.replaceSync(borderWidthStyles);
}

export const borderRadiusStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (borderRadiusStyleSheet !== null) {
    borderRadiusStyleSheet.replaceSync(borderRadiusStyles);
}

export const allBorderStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allBorderStyleSheet !== null) {
    allBorderStyleSheet.replaceSync(
        borderColorStyles +
        borderWidthStyles +
        borderRadiusStyles
    );
}

/**
 * Color Related Stylesheets
 * 
 * These styles control the text, background, and placeholder colors of UI components.
 * 
 * Available stylesheets:
 * - `colorStyleSheet`: defines the text color.
 * - `backgroundColorStyleSheet`: defines the background color.
 * - `placeholderColorStyleSheet`: defines the placeholder color.
 * - `allColorStyleSheet`: combines `colorStyleSheet`, `backgroundColorStyleSheet`, and `placeholderColorStyleSheet`.
 */
export const colorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (colorStyleSheet !== null) {
    colorStyleSheet.replaceSync(colorStyles);
}

export const backgroundColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (backgroundColorStyleSheet !== null) {
    backgroundColorStyleSheet.replaceSync(backgroundColorStyles);
}

export const placeholderColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (placeholderColorStyleSheet !== null) {
    placeholderColorStyleSheet.replaceSync(placeholderColorStyles);
}

export const allColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allColorStyleSheet !== null) {
    allColorStyleSheet.replaceSync(
        colorStyles +
        backgroundColorStyles +
        placeholderColorStyles
    );
}

/**
 * Global Stylesheets
 * 
 * These styles apply global adjustments, including accessibility-related styles.
 * 
 * Available stylesheets:
 * - `globalStyleSheet`: defines global styles applied across the application.
 * - `a11yStyleSheet`: defines accessibility styles.
 * - `allGlobalStyleSheet`: combines `globalStyleSheet` and `a11yStyleSheet`.
 */
export const a11yStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (a11yStyleSheet !== null) {
    a11yStyleSheet.replaceSync(a11yStyles);
}

export const resetStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (resetStyleSheet !== null) {
    resetStyleSheet.replaceSync(resetStyles);
}

export const containerStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (containerStyleSheet !== null) {
    containerStyleSheet.replaceSync(containerStyles);
}

export const globalStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (globalStyleSheet !== null) {
    globalStyleSheet.replaceSync(globalStyles);
}

export const allGlobalStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allGlobalStyleSheet !== null) {
    allGlobalStyleSheet.replaceSync(
        resetStyles +
        globalStyles +
        containerStyles +
        a11yStyles
    );
}

/**
 * Icon Related Stylesheets
 * 
 * These styles control the appearance and setup of icons within the UI.
 * 
 * Available stylesheets:
 * - `iconSetupStyleSheet`: defines icon setup styles.
 * - `iconStyleSheet`: defines the class names and appearance of icons.
 */
export const iconSetupStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (iconSetupStyleSheet !== null) {
    iconSetupStyleSheet.replaceSync(iconSetupStyles);
}

export const iconStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (iconStyleSheet !== null) {
    iconStyleSheet.replaceSync(
        iconSetupStyles +
        iconClassNames
    );
}

/**
 * Media Related Stylesheets
 * 
 * These styles control the object positioning, fitting, and aspect ratios for media (e.g., images, videos).
 * 
 * Available stylesheets:
 * - `objectPositionStyleSheet`: defines object position (e.g., top, center).
 * - `objectFitStyleSheet`: defines how objects fit within their containers (e.g., cover, contain).
 * - `aspectRatioStyleSheet`: defines the aspect ratio of media elements.
 * - `mediaStyleSheet`: combines `objectPositionStyleSheet`, `objectFitStyleSheet`, and `aspectRatioStyleSheet`.
 */
export const objectPositionStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (objectPositionStyleSheet !== null) {
    objectPositionStyleSheet.replaceSync(objectPositionStyles);
}

export const objectFitStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (objectFitStyleSheet !== null) {
    objectFitStyleSheet.replaceSync(objectFitStyles);
}

export const aspectRatioStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (aspectRatioStyleSheet !== null) {
    aspectRatioStyleSheet.replaceSync(aspectRatioStyles);
}

export const mediaStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (mediaStyleSheet !== null) {
    mediaStyleSheet.replaceSync(
        objectPositionStyles +
        objectFitStyles +
        aspectRatioStyles
    );
}

/**
 * Size Related Stylesheets
 * 
 * These styles control the dimensions of UI components, including width, height, and their min/max values.
 * 
 * Available stylesheets:
 * - `widthStyleSheet`: defines the width of components.
 * - `minWidthStyleSheet`: defines the minimum width.
 * - `maxWidthStyleSheet`: defines the maximum width.
 * - `heightStyleSheet`: defines the height of components.
 * - `minHeightStyleSheet`: defines the minimum height.
 * - `maxHeightStyleSheet`: defines the maximum height.
 * - `allWidthStyleSheet`: combines `widthStyleSheet`, `minWidthStyleSheet`, and `maxWidthStyleSheet`.
 * - `allHeightStyleSheet`: combines `heightStyleSheet`, `minHeightStyleSheet`, and `maxHeightStyleSheet`.
 */
export const widthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (widthStyleSheet !== null) {
    widthStyleSheet.replaceSync(widthStyles);
}

export const minWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (minWidthStyleSheet !== null) {
    minWidthStyleSheet.replaceSync(minWidthStyles);
}

export const maxWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (maxWidthStyleSheet !== null) {
    maxWidthStyleSheet.replaceSync(maxWidthStyles);
}

export const allWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allWidthStyleSheet !== null) {
    allWidthStyleSheet.replaceSync(
        widthStyles +
        minWidthStyles +
        maxWidthStyles
    );
}

export const heightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (heightStyleSheet !== null) {
    heightStyleSheet.replaceSync(heightStyles);
}

export const minHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (minHeightStyleSheet !== null) {
    minHeightStyleSheet.replaceSync(minHeightStyles);
}

export const maxHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (maxHeightStyleSheet !== null) {
    maxHeightStyleSheet.replaceSync(maxHeightStyles);
}

export const allHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allHeightStyleSheet !== null) {
    allHeightStyleSheet.replaceSync(
        heightStyles +
        minHeightStyles +
        maxHeightStyles
    );
}

/**
 * Typography Related Stylesheets
 * 
 * These styles control typography-related properties such as font size, weight, family, line height, text alignment, and text transformations.
 * 
 * Available stylesheets:
 * - `fontSizeStyleSheet`: defines the font size.
 * - `fontWeightStyleSheet`: defines the font weight.
 * - `fontFamilyStyleSheet`: defines the font family.
 * - `lineHeightStyleSheet`: defines the line height.
 * - `textAlignStyleSheet`: defines the text alignment.
 * - `textTransformStyleSheet`: defines text transformations (e.g., uppercase, lowercase).
 * - `fontStyleSheet`: combines `fontSizeStyleSheet`, `fontWeightStyleSheet`, and `fontFamilyStyleSheet`.
 * - `typographyStyleSheet`: combines all the typography-related styles.
 */
export const fontSizeStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontSizeStyleSheet !== null) {
    fontSizeStyleSheet.replaceSync(fontSizeStyles);
}

export const fontWeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontWeightStyleSheet !== null) {
    fontWeightStyleSheet.replaceSync(fontWeightStyles);
}

export const fontFamilyStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontFamilyStyleSheet !== null) {
    fontFamilyStyleSheet.replaceSync(fontFamilyStyles);
}

export const lineHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (lineHeightStyleSheet !== null) {
    lineHeightStyleSheet.replaceSync(lineHeightStyles);
}

export const textAlignStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (textAlignStyleSheet !== null) {
    textAlignStyleSheet.replaceSync(textAlignStyles);
}

export const textTransformStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (textTransformStyleSheet !== null) {
    textTransformStyleSheet.replaceSync(textTransformStyles);
}

export const fontStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontStyleSheet !== null) {
    fontStyleSheet.replaceSync(
        fontSizeStyles +
        fontWeightStyles +
        fontFamilyStyles
    );
}

export const typographyStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (typographyStyleSheet !== null) {
    typographyStyleSheet.replaceSync(
        fontSizeStyles +
        fontWeightStyles +
        fontFamilyStyles +
        lineHeightStyles +
        textAlignStyles +
        textTransformStyles
    );
}