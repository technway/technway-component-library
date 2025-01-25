# tnw-button

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Shadow Parts](#shadow-parts)
- [Events](#events)
- [Usage](#usage)

## Overview

The `tnw-button` component is a customizable button element, which can be used as a standalone button or as a button in a form.
It supports various styles, sizes, and appearances, and allows for custom content to be inserted via a slot.
By default, the component renders a button element, but it can also render an anchor element if the `href` prop is provided.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-button>` |
| React Component Tag | `TnwButton` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **appearance** | <div>Specifies the appearance color of the button.</div> | `'solid'` | `"mixed"` \| `"none"` \| `"outlined"` \| `"solid"` \| `"transparent"` |
| **appearanceColor** | <div>Defines the appearance color of the button.</div> | `'primary'` | `"auto"` \| `"black"` \| `"danger"` \| `"info"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"success"` \| `"warning"` \| `"white"` |
| **borderRadius** | <div>Specifies the border radius of the button.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **disabled** | <div>Specifies whether the button is disabled.</div> | `false` | `boolean` |
| **hoverAppearance** | <div>Specifies the hover appearance color for the button.</div> | `'none'` | `"none"` \| `"outlined"` \| `"solid"` |
| **hoverAppearanceColor** | <div>Specifies the hover appearance color color for the button color.</div> | `'primary'` | `"auto"` \| `"black"` \| `"inverse"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **hoverEffect** | <div>Specifies the hover effect of the button.</div> | `'none'` | `"contrast"` \| `"focus-ring"` \| `"none"` \| `"opacity"` \| `"scale-down"` \| `"scale-up"` |
| **href** | <div>If provided, the button will render as a link with this `href`.</div> | N/A | `string` |
| **label** | <div>Specifies the text label displayed on the button. This prop is required.</div> | N/A | `string` |
| **newTab** | <div>If `true`, the link will open in a new tab. Only relevant when `href` is provided.</div> | `false` | `boolean` |
| **size** | <div>Determines the size of the button.</div> | `'md'` | `"lg"` \| `"md"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **type** | <div>Specifies the button type.</div> | `'button'` | `"button"` \| `"submit"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **button** | The main clickable `button` or `anchor` element. |

## Slots

| Slot | Description |
| --- | --- |
| **icon-end** | Slot for adding an icon or custom content at the end of the button. |
| **icon-start** | Slot for adding an icon or custom content at the start of the button. |

## Events

| Event | Description |
| --- | --- |
| **tnwButtonBlurred** | Event emitted when the button loses focus. |
| **tnwButtonFocused** | Event emitted when the button receives focus. |

## Usage & Examples

### When to use:

- **Action Buttons**: Use `tnw-button` for actions like submitting forms, triggering events, or interacting with the interface.
- **Custom Link Buttons**: When you need a button that functions as a link (e.g., navigating to a new page), use `tnw-button` with the `href` prop.
- **Buttons with Icons**: For buttons that need icons before or after the label (e.g., for visual emphasis or direction), use the available slots.

### Use Cases:

1. **Standard Button**:
   Use this for common actions like clicking or submitting forms.

   @useStory Standard

3. **Button as Link**:
   When a button needs to navigate to an external site or another page, use this case, and configure it to open in a new tab if needed.

   @useStory ButtonAsLink

4. **Button with Start Icon**:
   Add an icon before the button text for added clarity or branding.

   @useStory WithStartIcon

### Additional Considerations:

- **Accessibility**: Ensure proper ARIA attributes are in place, especially for buttons that act as links or are disabled.
- **Button or Link**: The button will render as an anchor (`<a>`) when the `href` prop is provided, enabling navigation while retaining button styling.
- **Custom Styling**: The button supports customization for appearance, size, and hover effects, allowing it to fit various design needs in your application.

