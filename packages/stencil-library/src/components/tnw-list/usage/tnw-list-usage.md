### When to use:

- **Standard Lists**: Use the `tnw-list` component when you need to create either ordered or unordered lists with custom markers or icons.
- **Icon-Based Lists**: This component is ideal when you want to add icons next to list items to enhance the visual hierarchy or represent certain statuses.
- **Customizable List Styling**: Use this component to apply custom text styles (color, size, weight, text transformation) to lists for consistent typography in your design system.

### Use Cases:

1. **Standard Unordered List**:
   Use this for simple bullet-point lists, which are commonly used in content formatting.

   @useStory Standard

3. **Colored and Custom Typography List**:
   This case allows you to apply a specific color and typography settings to the list items.

   @useStory CustomColors

### Additional Considerations:

- **Accessibility**: Ensure that lists are semantically structured and avoid using only icons for visual distinctions without proper text or `aria-label` support.
- **Icon Support**: You can add icons to your list items by passing an icon name in the JSON structure. This is useful for checklists or status-based lists.
- **Marker Customization**: You can easily customize the marker types for ordered and unordered lists, offering flexibility in how lists are presented in your UI.