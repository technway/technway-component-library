### When to use:

- **Standard Text Input**: Use `tnw-input` for general text input needs such as forms, user profiles, or anywhere basic text input is required.
- **Validation & Alerts**: If your input requires validation (e.g., email validation, error alerts), this component allows for easy integration of alert messages and validation states.
- **Hidden Labels for Accessibility**: When you want to hide the label visually but keep it accessible for screen readers, `tnw-input` allows you to hide labels without sacrificing accessibility.

### Use Cases:

1. **Standard Input Field**:
   Use this for basic text inputs, such as entering a name or other text information.

   @useStory Standard

2. **Input with Help Text**:
   Provide additional context to guide users on how to fill out the input field.

   @useStory InputWithHelpText

3. **Input with Validation Error**:
   Use this when input validation fails, and you need to display an error message to the user.

   @useStory InputWithError

4. **Password Input with Success Alert**:
   Use this to provide feedback on password strength or other success alerts for form fields.

   @useStory PasswordInputWithSuccess

### Additional Considerations:

- **Accessibility**: Ensure that the `alert` and `helpText` attributes are used properly to provide clear instructions and error messages to screen readers.
- **Variants and Custom Styles**: With customizable variants like `underlined` and border radius options, you can adapt the input field to match different UI styles.
- **Label Visibility**: The `isLabelSrOnly` prop allows you to hide labels visually while keeping them accessible to screen readers, ensuring both clean design and accessibility.