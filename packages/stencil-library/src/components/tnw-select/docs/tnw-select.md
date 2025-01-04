# tnw-select

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Events](#events)
- [Methods](#methods)
- [Usage](#usage)

## Overview

The `tnw-select` component provides a custom dropdown select element with support for dynamic options, selection, and keyboard navigation.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-select>` |
| React Component Tag | `TnwSelect` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **accessibilityId** | <div>A custom accessibility ID for the select component.
Can be used to provide a specific identifier for screen readers or testing.</div> | N/A | `string` |
| **borderRadius** | <div>Border radius of the select.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **disabled** | <div>If `true`, the select component will be disabled and cannot be interacted with.</div> | `false` | `boolean` |
| **fullWidth** | <div>If `true`, the select component will expand to fill the full width of its container.
Default is `false`, which means the component will size based on its content.</div> | `false` | `boolean` |
| **label** | <div>The label to display when no option is selected.</div> | `'Select an option'` | `string` |
| **optionAppearance** | <div>The appearance of the select options. if bordered a border top and bottom will be added to the options.</div> | `'standard'` | `"bordered"` \| `"standard"` |
| **optionsData** | <div>JSON string representing the options available in the select dropdown.
Each option can include a label, value, ariaLabel, and disabled state.</div> | N/A | `string` |
| **size** | <div>Controls the size of the select component.
Options are 'sm' (small), 'md' (medium), or 'lg' (large).
Default is 'md' (medium).</div> | `'md'` | `"lg"` \| `"md"` \| `"sm"` |
| **variant** | <div>Specifies the variant of the select component.

- `standard`: Default variant without any additional icons or images.
- `withIconName`: Variant that includes an icon by name.
- `withSvgIcon`: Variant that includes an SVG icon.
- `withImage`: Variant that includes an image.
- `withStatus`: Variant that includes a status indicator.</div> | `'standard'` | `"standard"` \| `"withIconName"` \| `"withImage"` \| `"withStatus"` \| `"withSvgIcon"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **button** | The button that triggers the dropdown. |
| **dropdown** | The dropdown container element. |
| **option** | The individual dropdown option. |

## Events

| Event | Description |
| --- | --- |
| **dropdownToggled** | Emitted when the dropdown is toggled open or closed. |
| **optionSelected** | Emitted when an option is selected from the dropdown. |

## Methods

| Method | Description |
| --- | --- |
| **getSelectedOption**() | Retrieves the currently selected option. |
| **resetSelectedOption**() | Resets the selected option to the default or placeholder label. |
| **toggleDropdown**() | Programmatically toggles the dropdown open or closed. |

## Usage & Examples

No usage is provided for this component.

