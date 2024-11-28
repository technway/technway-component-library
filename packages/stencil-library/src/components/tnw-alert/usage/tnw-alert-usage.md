### When to use:

- **Displaying Important Messages**: Use `tnw-alert` when you need to show prominent messages to users, such as notifications, success messages, warnings, or errors. It's ideal for guiding users with critical information that requires immediate attention.
- **Feedback for User Actions**: Alerts are great for providing feedback to users after they perform actions, such as submitting a form, encountering an error, or completing a task successfully.

### Use Cases:

1. **Standard Alert for General Information**:
   Use this when you need to display a regular message, such as notifying users of basic information or guidance.

   @useStory Standard

2. **Success, Warning, Info, and Danger Alerts**:
   Use different variants based on the message type—success for positive feedback, warning for potential issues, info for guidance, and danger for errors or critical problems.

   @useStory SuccessAlert
   @useStory WarningAlert
   @useStory InfoAlert
   @useStory DangerAlert

3. **Alert with Custom Appearance**:
   If you need a more distinct look for your alerts, such as outlined or solid backgrounds, you can customize the appearance of the alert based on your design requirements.

   @useStory InfoOutlinedAppearance
   @useStory SuccessSolidAppearance
   @useStory DangerMixedAppearance

4. **Large Alerts for Emphasis**:
   When you need to emphasize a message even more, use a larger size for the alert, especially for warnings or errors where visibility is crucial.

   @useStory LargeDanger

### Additional Considerations:

- **Accessibility**: The `tnw-alert` component is fully accessible with proper ARIA attributes like `aria-live="assertive"`, ensuring that screen readers announce the alert content immediately when it appears.
- **Persistent vs Temporary Alerts**: Depending on your design and use case, you can control whether the alert should be visible at all times or hidden after some action using the `isHidden` prop.
- **Styling Variants**: Different appearances such as `solid`, `outlined`, or `mixed` provide flexibility to match your application's visual needs, allowing alerts to either stand out or blend in depending on the context.
- **Custom Border Radius**: You can adjust the border radius to ensure the alert fits well with other components in your layout or to give it a distinct, modern look.