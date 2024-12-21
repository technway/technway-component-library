# tnw-textarea

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Events](#events)
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
| **autoComplete** | <div>The autocomplete setting for the textarea.</div> | `''` | `string` |
| **borderRadius** | <div>The border radius of the textarea.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **cols** | <div>The visible width of the textarea.</div> | N/A | `number` |
| **disabled** | <div>Disables the textarea if set to true.</div> | `false` | `boolean` |
| **helpText** | <div>The help text providing additional information about the textarea.</div> | `''` | `string` |
| **isLabelSrOnly** | <div>If true, the label is visually hidden but still accessible to screen readers.</div> | N/A | `boolean` |
| **isRequired** | <div>Marks the textarea as required.</div> | `false` | `boolean` |
| **label** | <div>The label for the textarea.</div> | N/A | `string` |
| **maxlength** | <div>The maximum number of characters allowed in the textarea.</div> | N/A | `number` |
| **minlength** | <div>The minimum number of characters required in the textarea.</div> | N/A | `number` |
| **name** | <div>The name of the textarea field.</div> | `''` | `string` |
| **placeholder** | <div>The placeholder text for the textarea.</div> | N/A | `string` |
| **resize** | <div>Controls the resize behavior of the textarea.</div> | `'vertical'` | `"both"` \| `"horizontal"` \| `"none"` \| `"vertical"` |
| **rows** | <div>The number of visible text lines for the textarea.</div> | `3` | `number` |
| **sanitizeTextarea** | <div>Determines whether the textarea value should be sanitized during change events to prevent SQL injection attacks.
If set to `true`, the textarea will be sanitized before being validated.
If set to `false`, the textarea will still undergo validation but without sanitization.</div> | `false` | `boolean` |
| **textareaId** | <div>The unique ID for the textarea element. If not provided, a random ID will be generated.</div> | N/A | `string` |
| **value** | <div>The initial value of the textarea.</div> | `''` | `string` |
| **variant** | <div>Defines the color variant of the textarea.</div> | `'outlined'` | `"outlined"` \| `"underlined"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **alert** | The element that displays the alert when the textarea is invalid. |
| **help-text** | The element that displays help text below the textarea. |
| **label** | The label element associated with the textarea. |
| **textarea** | The textarea element itself. |

## Events

| Event | Description |
| --- | --- |
| **textareaChanged** | Event emitted when the textarea value changes. The event's payload contains the new value. |
| **validationFailed** | Event emitted when validation fails.

The event payload contains:
- `textareaId`: The unique ID of the textarea element.
- `error`: A string message explaining the validation failure. |

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

