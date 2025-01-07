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
import { Grid } from '@technway/layout-kit';

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
        xs: 1,   // 1 column on extra small screens
        sm: 2,   // 2 columns on small screens
        md: 3,   // 3 columns on medium screens
        lg: 4    // 4 columns on large screens
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
import { Flex } from '@technway/layout-kit';

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
import { Spacing } from '@technway/layout-kit';

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
      mt={2}   // Margin top
      mb={4}   // Margin bottom
      px={3}   // Padding horizontal
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
      <Spacing as="article" p={2}>Article Content</Spacing>
    </Grid>
  );
}
```

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