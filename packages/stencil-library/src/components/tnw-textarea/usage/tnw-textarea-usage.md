### When to use:

- **User Input**: Use the `tnw-textarea` component when you need users to provide longer text inputs, such as comments, descriptions, or feedback.
- **Forms**: Perfect for form sections where users need to enter multi-line responses.
- **Customizable**: This component provides flexibility for resizing, label visibility, and error handling, making it a great fit for adaptable forms.

### Use Cases:

1. **Standard Textarea**:
   This basic example shows a standard textarea with a label and placeholder, useful for typical text input.

   @useStory Standard

2. **Textarea with Border Radius**:
   This example showcases a textarea with rounded corners, which can make the input field look softer and more appealing.

   @useStory WithBorderRadius

3. **Disabled Textarea**:
   Use this when you need to display a textarea that users can't interact with, perhaps in read-only forms or locked sections.

   @useStory Disabled

4. **Textarea with Error Alert**:
   Shows how to indicate an invalid input with an alert message, ensuring the user is aware of any issues.

   @useStory WithErrorAlert

5. **Textarea with Help Text**:
   This example demonstrates a textarea with helper text, guiding the user on what type of content is expected.

   @useStory WithHelpText

6. **Textarea with Maxlength**:
   Useful for scenarios where you want to limit the number of characters a user can input, such as when there's a strict word or character count requirement.

   @useStory WithMaxlength

7. **Textarea with Vertical Resize**:
   Shows how the textarea can be set to resize vertically, ideal for situations where space is limited horizontally but input may grow vertically.

   @useStory VerticalResize

8. **Textarea with Hidden Label (Screen Reader Only)**:
   This example demonstrates how to visually hide the label while keeping it accessible for screen readers, making it great for accessibility improvements.

   @useStory HiddenLabel

### Additional Considerations:

- **Alert Handling**: Customize alert messages for invalid or incorrect inputs.
- **Resize Control**: Use the `resize` prop to control how users can resize the textarea, or disable resizing altogether.
- **Responsive Design**: The component supports flexible layouts, with options to disable or enable resizing based on screen size or user needs.