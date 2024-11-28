### When to use:

- **Content Display**: Use `tnw-card` to structure and display different types of content, such as images, text, and buttons, in a compact and visually appealing layout.
- **Call to Action**: It’s ideal for scenarios where you want to encourage user interaction, such as featuring a product, service, or article with an accompanying button.
- **Flexible Layouts**: Cards can be laid out either vertically or horizontally, making them adaptable to various design needs and responsive contexts.

### Use Cases:

1. **Default Card with Image and Content**:
   Use this case for standard card displays that include an image, heading, subheading, description, and a button for user interaction.

   @useStory Default

2. **Horizontal Layout Card**:
   Use this when you want the card's content to be arranged horizontally, with the image and text side by side.

   @useStory HorizontalLayout

3. **Card with Content Displayed First**:
   This layout is useful when you want the text content to appear before the image, emphasizing the message over the visual element.

   @useStory ContentFirst

4. **Card without an Image**:
   When the card content does not require an image, this variant focuses on textual content and a call to action.

   @useStory WithoutImage

5. **Card with Different Appearances**:
   Customize the card's appearance for different design styles. Use outlined or solid backgrounds based on your branding and visual needs.

   @useStory OutlinedAppearance
   @useStory SolidAppearance

### Additional Considerations:

- **Custom Content Flexibility**: With customizable slots for the image, heading, subheading, description, and button, `tnw-card` allows for maximum flexibility in content arrangement. You can even replace default content with fully custom structures by using the `content` slot.
- **Layouts**: The card can be arranged vertically or horizontally, and content can be ordered before or after the image to suit your design needs.
- **Glassmorphism**: You can apply a glassmorphism effect for a modern, frosted-glass aesthetic on the card's background.
- **Accessibility**: Ensure meaningful content is provided in the card, especially for headings and buttons, to make it accessible and user-friendly.