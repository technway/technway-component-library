### When to use:

- **Managing Multiple Accordions**: Use `tnw-accordion-group` when you need to manage multiple `tnw-accordion` components in a unified way, such as organizing a FAQ section or displaying related expandable content in a list.
- **Single Expand Mode**: If you want only one accordion to be expanded at a time (e.g., to reduce scrolling or keep users focused), `tnw-accordion-group` can handle this behavior seamlessly with its `singleExpand` option.

### Use Cases:

1. **Multiple Accordions with Independent Toggles**:
   Use this when you have several `tnw-accordion` items, but you want users to be able to expand and collapse each one independently.

   @useStory Standard

2. **Single Expand Mode**:
   Use this when you want only one accordion to be expanded at a time, ensuring that users can only view one section of content at once. This mode is great for minimizing distraction or controlling the flow of content consumption.

   @useStory SingleExpand

3. **Pre-Expanded Accordion in Group**:
   Useful for scenarios where you want to draw attention to one specific accordion item by having it open by default in a group of collapsible items.

   @useStory defaultExpandedAccordion

### Additional Considerations:

- **Keyboard Accessibility**: The `tnw-accordion-group` works in conjunction with individual `tnw-accordion` components to support full keyboard accessibility, ensuring users can navigate and toggle accordions with ease.
- **Single Expand Logic**: If `singleExpand` is enabled, only one accordion item remains open at a time. When a new item is expanded, the previously expanded one is automatically collapsed, simplifying navigation in long lists.
- **Custom Appearance in Groups**: Each `tnw-accordion` within the group can have its own appearance and styling, allowing for custom designs even within a unified structure.