### When to use:

- **Collapsible Sections**: Ideal for areas like FAQs, product details, or interactive guides where content needs to be collapsed and expanded to enhance readability and avoid clutter.
- **Grouped Content**: Perfect for organizing related sections under expandable headers, such as multi-step instructions or grouped categories, allowing users to reveal details as needed.

### Use Cases:

1. **Single Item Expanded by Default**:
   Use this when you want to emphasize a specific section by having it open by default, ensuring key content is immediately visible.
   
   @useStory ExpandedByDefault

2. **Accordion with Custom Expand Icon**:
   Customize the expand/collapse icon to fit your design language or to indicate more specific states (e.g., using plus/minus icons for expand/collapse).
   
   @useStory WithCustomIcon

4. **Simple Accordion Appearance**:
   Opt for this style when you prefer a clean, unstyled look for the accordion, allowing it to integrate subtly within various layouts or content sections without drawing extra attention. Ideal for filter panels or settings menus, where functionality is prioritized over visual style.
   
   @useStory NoneAppearance

5. **Multiple Accordions in a Group**:
   For scenarios where users need to explore multiple sections of content without scrolling through everything at once. Common for documentation, settings pages, or any multi-sectioned content display.
   
   See the documentation for `tnw-accordion-group`.

### Additional Considerations:

- **Keyboard Accessibility**: The `tnw-accordion` supports keyboard interaction with the Enter and Space keys for toggling. This ensures that users navigating via keyboard or assistive technologies can interact with the component seamlessly.
- **Customizing Appearance**: The component allows for appearance customizations like `outlined`, `solid`, and `underlined`. Use these appearance options to match your application's visual style or highlight specific accordion content.
- **Icon Rotation Control**: If visual clarity is essential, you can disable the icon rotation on expansion by setting `disableExpandIconRotate` to `true`, providing a consistent icon state if needed.
- **Unique ID Generation**: When no `accordionId` is provided, the component automatically generates a unique ID for accessibility, ensuring each accordion is uniquely identifiable in the DOM without additional setup.