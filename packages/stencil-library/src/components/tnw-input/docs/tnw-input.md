# tnw-input

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Usage](#usage)

## Overview

The `tnw-input` component is a customizable input field that supports various input types, validation, and appearance options.
It is designed to be versatile and accessible, allowing for both visual and screen-reader friendly labels, as well as handling error alerts.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-input>` |
| React Component Tag | `TnwInput` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **alert** | alert displayed when the input is invalid. | `''` | `string` |
| **alertType** | Indicates if the input is in an invalid state. | N/A | `"danger"` \| `"info"` \| `"success"` \| `"warning"` |
| **autoComplete** | The autocomplete setting for the input. | `'off'` | `string` |
| **borderRadius** | The border radius of the input. | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **disabled** | Disables the input if set to true. | `false` | `boolean` |
| **helpText** | The help text providing additional information about the input. | `''` | `string` |
| **inputId** | The unique ID for the input element. | N/A | `string` |
| **isInvalid** | Indicates if the input has invalid data. | `false` | `boolean` |
| **isLabelSrOnly** | If true, the label is visually hidden but still accessible to screen readers. | N/A | `boolean` |
| **isRequired** | Marks the input as required. | `false` | `boolean` |
| **label** | The label for the input. | N/A | `string` |
| **maxlength** | The maximum number of characters allowed in the input. | N/A | `number` |
| **minlength** | The minimum number of characters required in the input. | N/A | `number` |
| **name** | The name of the input field. | `''` | `string` |
| **pattern** | A regex pattern to validate the input. | `''` | `string` |
| **placeholder** | The placeholder text for the input. | N/A | `string` |
| **type** | The input type (e.g., text, password). | N/A | `string` |
| **value** | The initial value of the input. | `''` | `string` |
| **variant** | Defines the color variant of the input. | `'outlined'` | `"outlined"` \| `"underlined"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **alert** | The alert message for validation errors or other information. |
| **help-text** | The help text providing additional context for the input. |
| **input** | The main `<input>` element. |
| **label** | The `<label>` element for the input. |

## Usage & Examples

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

