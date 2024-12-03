### When to use:

- **Displaying Footer Information**: Use `tnw-footer` to display essential information at the bottom of a webpage, such as organization names, copyright details, and important notes.
- **Dynamic or Static Years**: The component is useful for displaying dynamic years (e.g., "2023 - 2024") or static date ranges.
- **Customizable Footer Layout**: When you need a customizable footer that supports text alignment, background colors, and custom content via slots.

### Use Cases:

1. **Standard Footer with Organization Name and Years**:
   Use this when you want to display your organization's name with a start and end year range, along with optional pretext (e.g., "©") and posttext (e.g., "All Rights Reserved").

   @useStory Standard

2. **Footer with Custom Slot Content**:
   Use this case when you need to fully customize the content of the footer, such as including images, links, or any custom HTML content.

   @useStory WithCustomSlot

3. **Footer with Dynamic Years**:
   Automatically display the current year, which is useful for keeping the footer up to date without manual adjustments.

   @useStory DynamicYears

### Additional Considerations:

- **Custom Colors**: You can easily adjust the text color, background color, and top border color of the footer to match your brand’s design.
- **Custom Slot Content**: When using the slot for custom content, make sure the `enableSlot` prop is set to `true` to render your custom HTML or elements in the footer.
- **Text Alignment**: The footer supports centering the content when the `centerContent` prop is enabled, making it adaptable for different layout needs.
