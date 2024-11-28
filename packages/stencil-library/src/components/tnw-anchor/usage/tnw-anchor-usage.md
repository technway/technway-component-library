### When to use:

- **Basic Links**: Use `tnw-anchor` when you need a standard text-based hyperlink to navigate users to other pages or external resources.
- **Custom Content Links**: The component is also suitable when you want to wrap custom content like images, icons, or cards in a link, providing flexibility beyond simple text links.
- **New Tab Links**: Use `tnw-anchor` to create links that open in a new tab when navigating to external resources, while optionally hiding or displaying the "new tab" icon.

### Use Cases:

1. **Standard Text Link**:
   Use this for regular text-based navigation, such as linking to other websites or internal pages.

   @useStory Standard

2. **Colored Link**:
   You can modify the text color using predefined color options to ensure the link visually aligns with your design theme.

   @useStory PrimaryColor

3. **Link that Opens in a New Tab**:
   When linking to external sites, use this case to open the link in a new browser tab. You can also choose to show or hide the "new tab" icon based on your preferences.

   @useStory OpenInNewTab

4. **Custom Content Inside Anchor**:
   Wrap custom content like images or icons within the anchor tag to create complex, clickable elements, such as a linked image or card. 
   
   **Important for a11y**: When using non-text content like images or icons, ensure that an appropriate `labelAria` is provided. This is crucial for accessibility, as it helps screen readers and other assistive technologies understand the purpose of the link.

   @useStory CustomContent

### Additional Considerations:

- **Accessibility**: The component supports custom `aria-label` properties. If the anchor content is not text-based (e.g., images, icons), always provide an `aria-label` to describe the link's purpose, ensuring it’s accessible to screen readers. If no `labelAria` is provided, it defaults to the `text` prop or falls back to a generic "Link" label.
- **Customizable Text Decoration**: You can easily control the text decoration (`underline`, `overline`, `none`) to match your application's style and requirements.
- **New Tab Behavior**: For external links, the `newTab` option ensures that the link opens safely in a new tab with proper `noopener noreferrer` attributes for security.
- **Dynamic Slot Usage**: If custom content is placed in the slot (e.g., images or complex HTML), ensure the `text` prop is not used simultaneously, and provide a `labelAria` for accessibility.