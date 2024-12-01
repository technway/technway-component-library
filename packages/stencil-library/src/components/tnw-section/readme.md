# tnw-section



<!-- Auto Generated Below -->


## Overview

The `tnw-section` component is a layout container that wraps content such as headers, bodies, and footers.
It supports various appearance styles, optional glassmorphism effects, and an internal container to handle
content alignment and padding.

## Usage

### Tnw-section-usage

### When to use:

- **Layout Container**: The `tnw-section` component is designed to wrap different types of content, making it an ideal container for structuring pages into logical sections.
- **Theming & Appearance**: Use this component when you need to create sections with customizable appearances like glassmorphism, solid or outlined styles, and control over margins and paddings.
- **Responsive Design**: You can center content, align it flexibly, and adjust margins and padding to fit the design requirements, making it suitable for modern, responsive web design.

### Use Cases:

1. **Standard Section**:
   This section includes a header, body, and footer, where the body can be any content like text or components. It's a versatile section for general use.

   @useStory Standard

2. **Section with Glassmorphism Effect**:
   Adding a frosted glass background effect gives this section a modern design touch, ideal for premium or standout content sections.

   @useStory WithGlassmorphism

3. **Solid Appearance Section**:
   This example demonstrates a section with a solid background, perfect for primary calls-to-action or content you want to emphasize.

   @useStory SolidAppearance

4. **Centered Content Section**:
   This section centers the content, which is great for important sections such as main banners or introduction areas on a landing page.

   @useStory Centered

5. **Section with Custom Padding and Margin**:
   In this use case, you can customize the padding and margin to give extra space around the section or between elements, ideal for creating breathing room around dense content.

   @useStory CustomPaddingAndMargin

6. **First Section Example**:
   When the section is the first on a page, certain paddings and margins may be adjusted to make the transition from the header to the section smoother.

   @useStory FirstSection

7. **Last Section Example**:
   This use case focuses on the last section of the page, often used for wrapping up the content, like a final call to action.

   @useStory LastSection

### Additional Considerations:

- **Slot Flexibility**: The component supports slots for the header, body, and footer, allowing flexible content placement.
- **Customizable Alignment**: You can align content within the section either to the left, center, or right.
- **Padding & Margin Control**: Padding and margin can be adjusted based on your design requirements, allowing for tight or spacious layouts.



## Properties

| Property                   | Attribute                    | Description                                                                                            | Type                                                                                                                                                                       | Default     |
| -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `alignment`                | `alignment`                  | The alignment of the section content.                                                                  | `"center" \| "end" \| "start"`                                                                                                                                             | `"start"`   |
| `appearance`               | `appearance`                 | Defines the appearance style of the section.                                                           | `"mixed" \| "outlined" \| "outlined-block" \| "outlined-bottom" \| "outlined-inline" \| "outlined-left" \| "outlined-right" \| "outlined-top" \| "solid" \| "transparent"` | `undefined` |
| `disableInternalContainer` | `disable-internal-container` | If `true`, the section body will be wrapped in a container.                                            | `boolean`                                                                                                                                                                  | `false`     |
| `isFirstSection`           | `is-first-section`           | If `true`, the section is the first section on the page, and top padding/margin will not be applied.   | `boolean`                                                                                                                                                                  | `false`     |
| `isLastSection`            | `is-last-section`            | If `true`, the section is the last section on the page, and bottom padding/margin will not be applied. | `boolean`                                                                                                                                                                  | `false`     |
| `margin`                   | `margin`                     | The margin size applied to the section.                                                                | `"2xl" \| "3xl" \| "4xl" \| "lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"`                                                                                                | `'none'`    |
| `padding`                  | `padding`                    | The padding size applied to the section.                                                               | `"2xl" \| "3xl" \| "4xl" \| "lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"`                                                                                                | `'xl'`      |
| `spacing`                  | `spacing`                    | The spacing size between the section slots.                                                            | `"lg" \| "md" \| "sm" \| "xl" \| "xs"`                                                                                                                                     | `'md'`      |
| `useGlassmorphismEffect`   | `use-glassmorphism-effect`   | If `true`, the section will have a glassmorphism effect applied to its background.                     | `boolean`                                                                                                                                                                  | `false`     |
| `variant`                  | `variant`                    | Specifies the color variant for the section's appearance.                                              | `"auto" \| "black" \| "inverse" \| "light" \| "primary" \| "secondary" \| "white"`                                                                                         | `'auto'`    |


## Slots

| Slot       | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| `"body"`   | Slot for the section body content, used for section content.           |
| `"footer"` | Slot for the section footer content, used for section call-to-actions. |
| `"header"` | Slot for the section header content, used for section titles.          |


## Shadow Parts

| Part        | Description                        |
| ----------- | ---------------------------------- |
| `"section"` | The main container of the section. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
