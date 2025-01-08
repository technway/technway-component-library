// Default configurations
const defaultBreakpoints = {
  'xs': '567px',
  'sm': '767px',
  'md': '1024px',
  'lg': '1279px',
  'xl': '1439px',
  'xxl': '1920px'
};

const defaultGridConfig = {
  columnCounts: [1, 2, 3, 4, 6, 12],
  gaps: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32]
};

const defaultSpacingConfig = {
  margin: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32],
  padding: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32]
};

// Configuration manager
export class LayoutKitConfig {
  private static instance: LayoutKitConfig;
  
  // Current configurations
  private _breakpoints: Record<string, string> = { ...defaultBreakpoints };
  private _gridConfig: typeof defaultGridConfig = { ...defaultGridConfig };
  private _spacingConfig: typeof defaultSpacingConfig = { ...defaultSpacingConfig };

  // Private constructor to enforce singleton pattern
  private constructor() {}

  // Singleton instance getter
  public static getInstance(): LayoutKitConfig {
    if (!LayoutKitConfig.instance) {
      LayoutKitConfig.instance = new LayoutKitConfig();
    }
    return LayoutKitConfig.instance;
  }

  // Breakpoints configuration
  public setBreakpoints(breakpoints: Partial<Record<Breakpoint, string>>) {
    this._breakpoints = { ...this._breakpoints, ...breakpoints };
    return this;
  }

  // Grid configuration
  public setGridConfig(config: Partial<typeof defaultGridConfig>) {
    this._gridConfig = { 
      columnCounts: config.columnCounts || this._gridConfig.columnCounts,
      gaps: config.gaps || this._gridConfig.gaps
    };
    return this;
  }

  // Spacing configuration
  public setSpacingConfig(config: Partial<typeof defaultSpacingConfig>) {
    this._spacingConfig = {
      margin: config.margin || this._spacingConfig.margin,
      padding: config.padding || this._spacingConfig.padding
    };
    return this;
  }

  // Getter methods
  public getBreakpoints() {
    return this._breakpoints;
  }

  public getGridConfig() {
    return this._gridConfig;
  }

  public getSpacingConfig() {
    return this._spacingConfig;
  }

  // Validation method
  public validateConfig() {
    return {
      breakpoints: Object.keys(this._breakpoints),
      columnCounts: this._gridConfig.columnCounts,
      gapSizes: this._gridConfig.gaps
    };
  }

  // Reset to default configurations
  public reset() {
    this._breakpoints = { ...defaultBreakpoints };
    this._gridConfig = { ...defaultGridConfig };
    this._spacingConfig = { ...defaultSpacingConfig };
    return this;
  }
}

// Export types
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ColumnCount = 1 | 2 | 3 | 4 | 6 | 12;
export type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32;

// Convenience export for direct use
export const layoutKitConfig = LayoutKitConfig.getInstance();
