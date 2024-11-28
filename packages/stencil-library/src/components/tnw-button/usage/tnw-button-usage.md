### When to use:

- **Action Buttons**: Use `tnw-button` for actions like submitting forms, triggering events, or interacting with the interface.
- **Custom Link Buttons**: When you need a button that functions as a link (e.g., navigating to a new page), use `tnw-button` with the `href` prop.
- **Buttons with Icons**: For buttons that need icons before or after the label (e.g., for visual emphasis or direction), use the available slots.

### Use Cases:

1. **Standard Button**:
   Use this for common actions like clicking or submitting forms.

   @useStory Standard

3. **Button as Link**:
   When a button needs to navigate to an external site or another page, use this case, and configure it to open in a new tab if needed.

   @useStory ButtonAsLink

4. **Button with Start Icon**:
   Add an icon before the button text for added clarity or branding.

   @useStory WithStartIcon

### Additional Considerations:

- **Accessibility**: Ensure proper ARIA attributes are in place, especially for buttons that act as links or are disabled.
- **Button or Link**: The button will render as an anchor (`<a>`) when the `href` prop is provided, enabling navigation while retaining button styling.
- **Custom Styling**: The button supports customization for appearance, size, and hover effects, allowing it to fit various design needs in your application.