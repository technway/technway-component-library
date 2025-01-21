# tnw-banner

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Usage](#usage)

## Overview

The `tnw-banner` component is a customizable banner used for multi-purpose content.
As an example it can be used to display a newsletter banner, advertisement banner, contact banner etc.
It supports various appearances and colors, and allows for custom content to be inserted via slots.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-banner>` |
| React Component Tag | `TnwBanner` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **alignment** | <div>If `true`, the banner will center its content.</div> | `'center'` | `"center"` \| `"end"` \| `"start"` |
| **appearance** | <div>Defines the visual appearance of the banner (e.g., solid, outline).</div> | `'solid'` | `"gradient"` \| `"mixed"` \| `"outlined"` \| `"solid"` \| `"transparent"` |
| **appearanceColor** | <div>Specifies the primary appearance color of the banner. if appearance is gradient, this prop will be ignored.</div> | `'primary'` | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **borderRadius** | <div>Defines the border radius of the banner.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **disableInternalContainer** | <div>If `true`, the section body will be wrapped in a container for centering and padding.</div> | `false` | `boolean` |
| **enableContentSlot** | <div>If `true`, the banner will render custom content using the `content` slot. When this is enabled, the standard slots (`subtitle`, `title`, `description`, `button`) will not be used.</div> | `false` | `boolean` |
| **gap** | <div>Defines the spacing between the content and the button. This will not control gap between elements inside the content.</div> | `'md'` | `"2xl"` \| `"3xl"` \| `"4xl"` \| `"lg"` \| `"md"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **layout** | <div>The layout of the banner.</div> | `'vertical'` | `"horizontal"` \| `"vertical"` |
| **margin** | <div>Defines the margin of the banner.</div> | `'xl'` | `"2xl"` \| `"3xl"` \| `"4xl"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **paddingHorizontal** | <div>Defines the horizontal padding of the banner.</div> | `'lg'` | `"2xl"` \| `"3xl"` \| `"4xl"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **paddingVertical** | <div>Defines the vertical padding of the banner.</div> | `'lg'` | `"2xl"` \| `"3xl"` \| `"4xl"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **textAlignment** | <div>Defines the alignment of the text content.</div> | `'center'` | `"center"` \| `"end"` \| `"left"` \| `"right"` \| `"start"` |

</div>

## Slots

| Slot | Description |
| --- | --- |
| **button** | Use this slot to insert a button or call-to-action element. |
| **content** | Use this slot to insert custom content when `enableContentSlot` is set to `true`. When enabled, only the `content` slot will be available. |
| **description** | Use this slot to insert a description or additional information in the banner. |
| **subtitle** | Use this slot to insert a short title or subtitle in the banner. |
| **title** | Use this slot to insert the main title or heading of the banner. |

## Usage & Examples

No usage is provided for this component.

