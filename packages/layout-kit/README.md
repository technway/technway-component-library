# Layout Kit

A powerful, flexible layout system for React applications with responsive grid, flex, and spacing utilities.

## Installation

### npm

```bash
npm install @technway/layout-kit
```

### yarn

```bash
yarn add @technway/layout-kit
```

## Basic Usage

### Grid Component

#### Simple Grid

```tsx
import { Grid } from "@technway/layout-kit";

function MyComponent() {
  return (
    <Grid columns={4} gap={4}>
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
      <div>Column 4</div>
    </Grid>
  );
}
```

#### Responsive Grid

```tsx
function ResponsiveGrid() {
  return (
    <Grid
      responsive={{
        xs: 1, // 1 column on extra small screens
        sm: 2, // 2 columns on small screens
        md: 3, // 3 columns on medium screens
        lg: 4, // 4 columns on large screens
      }}
      gap={4}
    >
      {/* Grid items */}
    </Grid>
  );
}
```

### Flex Component

#### Basic Flex

```tsx
import { Flex } from "@technway/layout-kit";

function FlexExample() {
  return (
    <Flex justify="between" align="center">
      <div>Left Content</div>
      <div>Right Content</div>
    </Flex>
  );
}
```

#### Flex Direction

```tsx
function FlexDirectionExample() {
  return (
    <Flex direction="col" gap={2}>
      <div>Vertical</div>
      <div>Stack</div>
    </Flex>
  );
}
```

### Spacing Component

#### Margin and Padding

```tsx
import { Spacing } from "@technway/layout-kit";

function SpacingExample() {
  return (
    <Spacing m={4} p={2}>
      Content with margin and padding
    </Spacing>
  );
}
```

#### Directional Spacing

```tsx
function DirectionalSpacingExample() {
  return (
    <Spacing
      mt={2} // Margin top
      mb={4} // Margin bottom
      px={3} // Padding horizontal
    >
      Directional spacing
    </Spacing>
  );
}
```

## Advanced Features

### Polymorphic Components

All components support polymorphic rendering:

```tsx
function PolymorphicExample() {
  return (
    <Grid as="section" columns={2}>
      <Flex as="header">Header Content</Flex>
      <Spacing as="article" p={2}>
        Article Content
      </Spacing>
    </Grid>
  );
}
```

## Configuration

Layout Kit provides a flexible configuration system to customize breakpoints, grid system, and spacing.

### Creating a Configuration File

Create a configuration file in your project, for example `layout-kit.config.ts`:

```typescript
// layout-kit.config.ts
import { layoutKitConfig } from '@technway/layout-kit';

// Global configuration setup
export function setupLayoutKitConfig() {
  // Customize breakpoints
  layoutKitConfig.setBreakpoints({
    'xs': '567px',
    'sm': '767px',
    'md': '1024px',
    'lg': '1279px',
    'xl': '1439px',
    'xxl': '1920px'
    // Add custom breakpoints
    'custom': '1200px'
  });

  // Customize grid configuration
  layoutKitConfig.setGridConfig({
    // Specify allowed column counts
    columnCounts: [1, 2, 3, 4, 5, 6, 8, 12],

    // Define gap sizes
    gaps: [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40]
  });

  // Customize spacing
  layoutKitConfig.setSpacingConfig({
    margin: [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48],
    padding: [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48]
  });
}

// Call the setup function
setupLayoutKitConfig();
```

### Integration in Different Frameworks

#### React (Create React App, Next.js)

In your main entry file (e.g., `_app.tsx` or `index.tsx`):

```typescript
// Import the configuration setup
import "./layout-kit.config";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

#### Vite

In your `main.tsx` or `main.ts`:

```typescript
import "./layout-kit.config";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Advanced Configuration Techniques

#### Partial Configuration

You can apply partial configurations:

```typescript
// Only modify specific aspects
layoutKitConfig
  .setBreakpoints({ custom: "1200px" })
  .setGridConfig({ columnCounts: [1, 2, 3, 4, 5, 6, 8, 12] });
```

#### Runtime Configuration

Dynamically modify configurations based on conditions:

```typescript
// Example: Responsive configuration
function adjustConfigForDevice() {
  const isMobile = window.innerWidth < 768;

  layoutKitConfig.setGridConfig({
    columnCounts: isMobile ? [1, 2] : [1, 2, 3, 4, 6, 12],
    gaps: isMobile ? [2, 4, 6] : [0, 2, 4, 6, 8, 10, 12],
  });
}

// Call on resize or device change
window.addEventListener("resize", adjustConfigForDevice);
```

### Configuration Validation

Validate your current configuration:

```typescript
const config = layoutKitConfig.validateConfig();
console.log(config);
// Outputs current configuration details
```

### Resetting to Defaults

Reset to default configurations:

```typescript
layoutKitConfig.reset();
```

### TypeScript Support

Layout Kit provides type-safe configuration:

```typescript
import { Breakpoint, ColumnCount, SpacingValue } from "@technway/layout-kit";

// Type-safe usage
const breakpoint: Breakpoint = "md";
const columns: ColumnCount = 4;
const gap: SpacingValue = 6;
```

### Best Practices

1. Set configurations as early as possible in your application
2. Use environment-specific configurations
3. Avoid frequent runtime changes
4. Leverage TypeScript for type safety

### Troubleshooting

- If a configuration value is invalid, it will fall back to the default
- Use `validateConfig()` to verify your current setup
- Check the console for any configuration-related warnings

## Breakpoints

Available breakpoints:

- `xs`: Extra Small
- `sm`: Small
- `md`: Medium
- `lg`: Large
- `xl`: Extra Large
- `2xl`: 2X Large

## Utility Values

### Spacing Scale

- `0` to `32` (increments of 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32)

### Grid Columns

- `1`, `2`, `3`, `4`, `6`, `12`

## Performance and Compatibility

- Lightweight and tree-shakeable
- Compatible with React 18+
- TypeScript support
- Tailwind-inspired design
- Minimal runtime overhead

## License

MIT License
