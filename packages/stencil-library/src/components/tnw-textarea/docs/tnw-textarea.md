# tnw-textarea

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Usage](#usage)

## Overview

The `tnw-textarea` component is a customizable textarea field that supports various appearance options, validation, and accessibility features.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-textarea>` |
| React Component Tag | `TnwTextarea` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **alert** | Error alert displayed when the textarea is invalid. | `''` | `string` |
| **alertType** | Indicates if the textarea is in an invalid state. | N/A | `"danger"` \| `"info"` \| `"success"` \| `"warning"` |
| **autoComplete** | The autocomplete setting for the textarea. | `''` | `string` |
| **borderRadius** | The border radius of the textarea. | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **cols** | The visible width of the textarea. | N/A | `number` |
| **disabled** | Disables the textarea if set to true. | `false` | `boolean` |
| **helpText** | The help text providing additional information about the textarea. | `''` | `string` |
| **isInvalid** | Indicates if the textarea has invalid data. | `false` | `boolean` |
| **isLabelSrOnly** | If true, the label is visually hidden but still accessible to screen readers. | N/A | `boolean` |
| **isRequired** | Marks the textarea as required. | `false` | `boolean` |
| **label** | The label for the textarea. | N/A | `string` |
| **maxlength** | The maximum number of characters allowed in the textarea. | N/A | `number` |
| **minlength** | The minimum number of characters required in the textarea. | N/A | `number` |
| **name** | The name of the textarea field. | `''` | `string` |
| **placeholder** | The placeholder text for the textarea. | N/A | `string` |
| **resize** | Controls the resize behavior of the textarea. | `'vertical'` | `"both"` \| `"horizontal"` \| `"none"` \| `"vertical"` |
| **rows** | The number of visible text lines for the textarea. | `3` | `number` |
| **textareaId** | The unique ID for the textarea element. | N/A | `string` |
| **value** | The initial value of the textarea. | `''` | `string` |
| **variant** | Defines the color variant of the textarea. | `'outlined'` | `"outlined"` \| `"underlined"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **alert** | The element that displays the alert when the textarea is invalid. |
| **help-text** | The element that displays help text below the textarea. |
| **label** | The label element associated with the textarea. |
| **textarea** | The textarea element itself. |

## Usage & Examples

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

