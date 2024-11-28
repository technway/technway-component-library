### When to use:

- **Standard Navigation Bars**: Use the `tnw-navbar` component to create a responsive, structured navigation system for your application.
- **Customizable Layout**: Ideal for applications requiring customizable content areas (start, middle, end) with different layouts or slots.
- **Sticky and Fixed Navbar**: When you need a sticky or fixed navigation bar that stays at the top of the viewport during scrolling.
- **Glassmorphism Effect**: To add a frosted glass effect to your navbar for a modern UI design, use the glassmorphism option.

### Use Cases:

1. **Navbar Without Logo**:
   This configuration is useful when you need a simple navigation bar without a logo, but with a structured navigation menu and action button.

   @useStory WithoutLogo

2. **Navbar with Logo and Menu**:
   Perfect for applications that need a logo, navigation menu in the middle, and a button or additional actions at the end.

   @useStory WithLogo

3. **Outlined Navbar**:
   Adds an outline to the navbar for a more distinct separation from the page content. Useful for clear visual hierarchy.

   @useStory Outlined

4. **Underlined Navbar**:
   Creates a navbar with a bottom border. This is ideal for navigation bars where you want a minimalist underline appearance.

   @useStory Underlined

5. **Navbar with Rounded Corners**:
   Provides a rounded corner effect, offering a softer UI design. It can be combined with other appearances for modern design aesthetics.

   @useStory RoundedCorners

6. **Glassmorphism Navbar**:
   For applications that require a more modern design with glassmorphism effects. This is ideal for websites or apps with a futuristic or elegant design approach.

   @useStory GlassmorphismEffect

### Additional Considerations:

- **Responsive Design**: The `tnw-navbar` component is responsive by default, ensuring your navigation works on various screen sizes.
- **Custom Controls**: You can easily customize the menu toggler position (start or end) and use slots for custom icons or actions within the navbar.
- **Glassmorphism and Appearance Styles**: Take advantage of the appearance customization to create transparent, outlined, or solid navigation bars, with additional glassmorphism effects.