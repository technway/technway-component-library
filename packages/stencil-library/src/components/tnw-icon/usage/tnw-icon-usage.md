### When to use:

- **Visual Indicators**: Use `tnw-icon` to display visual indicators such as status icons, action buttons, or brand logos in your UI.
- **Custom SVG Icons**: When you need to insert custom SVG content, this component supports using an SVG slot for more complex or brand-specific icons.
- **Clickable Icons**: For icons that act as buttons, you can use the `isButton` prop to make the icon interactive, such as closing modals or performing actions.

### Use Cases:

1. **Standard Icon**:
   Use this for simple icons where the name defines the icon to be displayed.

   @useStory Standard

2. **Primary Color Icon**:
   Use this case when you want to apply your theme’s primary color to the icon.

   @useStory PrimaryColor

3. **Icon with Different Sizes**:
   When the icon size needs to be adjusted for larger or smaller use cases, such as action buttons or inline icons.

   @useStory IconSizes

4. **Clickable Icon Button**:
   For icons that perform an action (e.g., closing a modal or triggering an event), enable the `isButton` prop to add appropriate ARIA roles and styles.

   @useStory IconButton

### Additional Considerations:

- **Accessibility**: If the icon has a functional role or provides information, ensure it has an appropriate `aria-label` for screen readers. If the icon is decorative or should be hidden from assistive technologies, set `hiddenAria` to `true`.
- **Custom SVG Support**: Use the `enableSvg` prop to display custom SVG icons. This allows you to insert complex vector graphics directly into the component using the slot.
- **Icon Appearances**: Icons support multiple appearances, including solid, outlined, and variations with border radius for more flexible visual customization.