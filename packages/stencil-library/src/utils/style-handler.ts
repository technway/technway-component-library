import { isAdoptedStyleSheetsSupported, isCSSStyleSheetSupported } from './utils';

export class StyleHandler {
  private componentStyles: CSSStyleSheet;
  private el: HTMLElement;
  private styles: string;
  private additionalStyleSheets: CSSStyleSheet[];

  /**
   * Constructor for the StyleHandler class
   * @param el The element to apply the styles to
   * @param styles The styles to apply to the element
   * @param additionalStyleSheets The additional style sheets to apply to the element
   */
  constructor(el: HTMLElement, styles: string, additionalStyleSheets: CSSStyleSheet[] = []) {
    this.el = el;
    this.styles = styles;
    this.additionalStyleSheets = additionalStyleSheets;
    this.initializeStyles();
  }

  /**
   * Initialize the styles for the component
   */
  private initializeStyles() {
    if (isCSSStyleSheetSupported()) {
      // If CSSStyleSheet is supported, create a new CSSStyleSheet and replace the content of the styles
      this.componentStyles = new CSSStyleSheet();
      this.componentStyles.replaceSync(this.styles);
    } else {
      // Else, create a new style element and append it to the shadow root
      const styleEl = document.createElement('style');
      styleEl.textContent = this.styles;
      if (this.el.shadowRoot) {
        this.el.shadowRoot.appendChild(styleEl);
      }
    }
  }

  /**
   * Apply the styles to the component
   */
  public applyStyles() {
    if (isAdoptedStyleSheetsSupported()) {
      // Use adoptedStyleSheets API for modern browsers
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        ...this.additionalStyleSheets,
        this.componentStyles
      ];
    } else {
      // Fallback for older browsers
      const styleElements = this.createStyleElements();
      this.appendStylesToShadowRoot(styleElements);
    }
  }

  /**
   * Create the style elements for the component
   * @returns The style elements for the component
   */
  private createStyleElements() {
    const additionalStyleEl = document.createElement('style');
    const componentStyleEl = document.createElement('style');

    // Handle additional styles
    additionalStyleEl.textContent = this.additionalStyleSheets
      .map(sheet => this.getStyleSheetContent(sheet))
      .join(' ');

    // Handle component styles
    componentStyleEl.textContent = this.getStyleSheetContent(this.componentStyles);

    return { additionalStyleEl, componentStyleEl };
  }

  /**
   * Get the content of the style sheet
   * @param sheet The style sheet to get the content of
   * @returns The content of the style sheet
   */
  private getStyleSheetContent(sheet: CSSStyleSheet | string | undefined): string {
    if (!sheet) return '';

    if (sheet instanceof CSSStyleSheet && sheet.cssRules) {
      return Array.from(sheet.cssRules)
        .map(rule => rule.cssText)
        .join(' ');
    }

    return sheet.toString();
  }

  /**
   * Append the styles to the shadow root
   * @param styleElements The style elements to append to the shadow root
   */
  private appendStylesToShadowRoot(styleElements: { additionalStyleEl: HTMLStyleElement; componentStyleEl: HTMLStyleElement }) {
    if (this.el.shadowRoot) {
      this.el.shadowRoot.appendChild(styleElements.additionalStyleEl);
      this.el.shadowRoot.appendChild(styleElements.componentStyleEl);
    }
  }
} 