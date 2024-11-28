### When to use:

- **Text Display**: Use `tnw-text` to present simple descriptive content, such as paragraphs or small pieces of text, with customizable typography.
- **Headlines & Descriptions**: It is ideal for text components where precise control over color, font size, line height, alignment, and font weight is required.
- **Inline or Block Elements**: You can switch between `p` (block) and `span` (inline) elements based on layout needs.

### Use Cases:

1. **Standard Text**:
   This case demonstrates basic text usage with the default styling options, perfect for paragraphs or body text in various sections.

   @useStory Standard

2. **Gray Color**:
   This use case applies a specific color to the text, showcasing how color customization can be used to tone down or emphasize certain sections.

   @useStory GrayColor

3. **Medium Font Size**:
   Here, the font size is adjusted to medium, ideal for subheadings or smaller content pieces within a larger section.

   @useStory mediumSize

4. **Small Line Height**:
   This example modifies the line height, making the text more compact, useful when dealing with dense content in a small space.

   @useStory SmallLineHeight

5. **Bold Text**:
   Bold text is great for headings or emphasis within a body of text. This example demonstrates how to increase font weight for a stronger visual impact.

   @useStory Bold

### Additional Considerations:

- **Slot Flexibility**: The default slot can be used to insert custom HTML or other components, giving the `tnw-text` component flexibility to adapt to different content types.
- **Customizable Alignment**: The `alignment` prop allows you to fine-tune the placement of the text within its container, offering support for left, right, or centered text.
- **Typography Control**: With control over text transformation, font size, weight, and line height, the `tnw-text` component is a versatile choice for various UI scenarios.