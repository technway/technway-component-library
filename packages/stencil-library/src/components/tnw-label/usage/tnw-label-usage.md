### When to use:

- **Form Labels**: Use the `tnw-label` component when you need to label form elements such as inputs, textareas, or checkboxes.
- **Screen Reader-Only Labels**: This component is ideal when you want the label to be accessible to screen readers but hidden visually from users, such as when using icon-based inputs or button controls.
- **Customizable Label Styling**: Use this when you need labels with custom styles such as bold text, uppercase transformation, or specific colors to align with your design system.

### Use Cases:

1. **Standard Form Label**:
   A basic label for form elements such as an input or textarea.

   @useStory Standard

2. **Bold Label**:
   Use this when you need a bolder label to grab more attention.

   @useStory BoldLabel

3. **Uppercase Label**:
   This example transforms the text of the label to uppercase for emphasis.

   @useStory UppercaseLabel

4. **Large Font Label**:
   For forms where labels need to be highly visible, use a larger font size.

   @useStory LargeLabel

5. **Colored Label**:
   When you want to apply specific colors to your labels to indicate importance or for branding.

   @useStory ColoredLabel

### Additional Considerations:

- **Accessibility**: The `htmlFor` attribute is used to associate the label with a specific form element, which is crucial for accessibility.
- **Screen Reader-Only Option**: The `isSrOnly` prop hides the label visually but keeps it accessible to screen readers, which is important for accessibility in minimal UI designs.
- **Custom Styles**: Use the color, size, weight, and text transformation options to easily style the label according to your design system's requirements.