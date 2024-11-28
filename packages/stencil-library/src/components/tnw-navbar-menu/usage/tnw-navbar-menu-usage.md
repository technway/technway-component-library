### When to use:

- **Responsive Navigation Menus**: The `tnw-navbar-menu` component is ideal for creating responsive and customizable menus that adapt to different screen sizes.
- **Submenu Support**: Use it when you need a multi-level menu structure, where items can have nested submenus.
- **Customizable Hover Effects**: This component is perfect if you want to apply different hover effects, like color changes, contrast, or opacity adjustments, to menu items.
- **Navigation Menus with Icon Support**: This component is also useful when you need to include icons, like dropdown indicators, alongside menu items.

### Use Cases:

1. **Default Navbar Menu**:
   Use the default configuration for simple navigation menus with clickable items that link to different pages.

   @useStory Default

2. **Navbar Menu with Submenu**:
   This example demonstrates how to use the component when your menu items include submenus, ideal for complex navigation structures.

   @useStory WithSubmenu

3. **Small Menu Items**:
   Use small-sized menu items for compact layouts or minimalist designs.

   @useStory SmallItemsSize

4. **Primary Color with Solid Hover Effect**:
   This example applies a solid hover effect with primary color variants for a more vibrant, interactive experience.

   @useStory PrimaryColorSolidHover

5. **Color Hover with Contrast Effect**:
   Apply a color-based hover effect with contrast changes to highlight menu items as users interact with them.

   @useStory ColorHover

6. **Menu with Large Border Radius**:
   Use this configuration if your design requires menu items with rounded corners for a more modern or soft visual appearance.

   @useStory WithBorderRadius

7. **Hide Navbar Below a Specific Breakpoint**:
   Use this configuration to hide the navbar when the viewport width is below a defined breakpoint, such as 1024px, for mobile responsiveness.

   @useStory HideBelow1024px

### Additional Considerations:

- **Customizable Hover Effects**: You can configure the hover appearance (solid, outlined, color) and apply hover effects (contrast, opacity) for an interactive and visually dynamic menu.
- **Submenu Management**: If your menu requires multiple layers of navigation, the `tnw-navbar-menu` component allows you to define and manage nested submenus.
- **Breakpoint Flexibility**: The component supports hiding the menu below specific breakpoints, ensuring responsiveness on different devices.