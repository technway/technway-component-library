# tnw-subscription-form

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Usage](#usage)

## Overview

The `tnw-subscription-form` component provides a customizable subscription form.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-subscription-form>` |
| React Component Tag | `TnwSubscriptionForm` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **borderRadius** | <div>The border radius for the component. Set for both input and button</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **buttonLabel** | <div>The label for the subscribe button. If `enableButtonSlot` is true, this prop will be ignored.</div> | `'Subscribe'` | `string` |
| **enableButtonSlot** | <div>Whether to enable the button slot. If true, the buttonLabel prop will be ignored.</div> | `false` | `boolean` |
| **formAction** | <div>The action attribute for the form</div> | N/A | `string` |
| **formAttributes** | <div>The attributes/data-attribute(s) for the form. The given string is expected to be in the format "key1=value1; key2=value2" or "key1; key2=value2".</div> | N/A | `string` |
| **formMethod** | <div>The method attribute for the form</div> | N/A | `string` |
| **inputId** | <div>The id for the email input</div> | `generateRandomId(this.baseClass)` | `string` |
| **inputPlaceholder** | <div>The placeholder for the email input</div> | `'Enter your email'` | `string` |
| **successMessage** | <div>The message to display after successful subscription</div> | `'Thanks for subscribing!'` | `string` |
| **theme** | <div>The theme for the component. It controls the color scheme of the component.</div> | `'primary'` | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **variant** | <div>The variant for the component
- button-outside: The button is positioned next to the input field (default)
- button-inside: The button is positioned inside the input field on the right</div> | `'button-outside'` | `"button-inside"` \| `"button-outside"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **button** | No description provided. |
| **input** | No description provided. |

## Usage & Examples

No usage is provided for this component.

