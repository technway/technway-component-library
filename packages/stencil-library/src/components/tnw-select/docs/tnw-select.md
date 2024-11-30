# tnw-select

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Events](#events)
- [Usage](#usage)

## Overview

⚠️ COMPONENT IN DEVELOPMENT

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
| **borderRadius** | <div>Border radius of the select.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **defaultOption** | <div>The default option that should be selected on component load.</div> | N/A | `string` |
| **label** | <div>The label to display when no option is selected.</div> | `'Select an option'` | `string` |
| **optionsData** | <div>JSON string representing the options available in the select dropdown.
Each option can include a label, value, ariaLabel, and disabled state.</div> | N/A | `string` |

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
| **optionSelected** | Emitted when an option is selected from the dropdown. |

## Usage & Examples

No usage is provided for this component.

