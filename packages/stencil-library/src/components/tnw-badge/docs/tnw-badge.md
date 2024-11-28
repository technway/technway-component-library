# tnw-badge

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Usage](#usage)

## Overview

The `tnw-badge` component is used to display small pieces of information, such as labels, statuses, or counts, in a compact and visually distinct way.
This component supports various customization options including different variants, appearances, and sizes, making it versatile for a wide range of use cases.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-badge>` |
| React Component Tag | `TnwBadge` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **appearance** | The appearance determines the overall style of the badge, such as whether it is solid or outlined. | `'outlined'` | `"mixed"` \| `"none"` \| `"outlined"` \| `"solid"` \| `"transparent"` |
| **borderRadius** | The border radius of the badge. | `'lg'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **label** | The text or label displayed inside the badge. If not provided, custom content can be inserted via the slot. | N/A | `number` \| `string` |
| **size** | The size of the badge. | `'sm'` | `"lg"` \| `"md"` \| `"sm"` |
| **variant** | The color variant of the badge, determining the overall color scheme. | `'auto'` | `"auto"` \| `"black"` \| `"danger"` \| `"info"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"success"` \| `"warning"` \| `"white"` |

</div>

## Slots

| Slot | Description |
| --- | --- |
| **default** | Default slot for custom content inside the badge (e.g., icon or HTML structure). The `label` prop must not be used if the slot is used. |

## Usage & Examples

### When to use:

- **Displaying Status or Counts**: Use `tnw-badge` to highlight small but important information, such as notifications, counts, or status indicators.
- **Labeling and Tagging**: The badge is great for labeling items with brief, distinct tags, such as "New", "Sale", or "Featured".
- **Custom Content Badges**: You can wrap custom content like icons inside the badge, allowing for more flexible designs that go beyond simple text labels.

### Use Cases:

1. **Standard Badge**:
   Use this to display basic text, such as a status label or tag.

   @useStory Standard

2. **Outlined Badge**:
   Use this variant when you want a badge with an outlined appearance, great for visually distinct but lightweight labels.

   @useStory OutlinedPrimary

3. **Badge with Different Sizes**:
   The badge size can be adjusted depending on where it is used. Smaller badges are ideal for inline labels, while larger badges can be used for emphasis.

   @useStory SmallBadge
   @useStory LargeBadge

4. **Badge with Custom Content**:
   If the badge content isn’t text (e.g., an icon or custom HTML), use the default slot to wrap the custom content. This is useful for displaying icons or emojis inside a badge.

   @useStory IconOnlyBadge

5. **Badge Displaying Numbers**:
   Badges can also display numbers, often used for notifications or counts.

   @useStory NumberBadge

### Additional Considerations:

- **Accessibility**: Ensure the badge is used with meaningful content. If a badge is used for notifications or important status information, consider adding appropriate ARIA attributes or screen reader labels.
- **Custom Content via Slot**: When using custom content (e.g., an icon or image), ensure the `label` prop is not used. Instead, provide content through the default slot for maximum flexibility.
- **Appearance and Styling**: You can customize the badge appearance with different variants (`outlined`, `solid`, `mixed`), and adjust the size and border radius to match your design needs.
- **Dynamic Content**: The badge is flexible for displaying dynamic information, such as live counts or status changes, and can adapt to various use cases.

