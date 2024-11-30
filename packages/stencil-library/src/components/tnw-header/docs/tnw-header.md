# tnw-header

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Shadow Parts](#shadow-parts)
- [Usage](#usage)

## Overview

The `tnw-header` component is designed to create a customizable and structured header for your application.
It allows for flexible layout options with support for navigation bars, banners, and various alignment and size customizations.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-header>` |
| React Component Tag | `TnwHeader` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **alignment** | <div>Controls the alignment of the header content. Accepts logical alignment types such as 'start', 'center', or 'end'. Default is 'start'.</div> | `'start'` | `"center"` \| `"end"` \| `"start"` |
| **backgroundColor** | <div>Specifies the background color for the header. Available options include 'primary', 'secondary', 'inverse', 'auto', 'white', and 'black'.</div> | N/A | `"auto"` \| `"black"` \| `"inverse"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **borderBottomColor** | <div>Defines the color of the bottom border of the header. Accepts standard color types like 'primary', 'secondary', 'black', and more.</div> | N/A | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **centerBanner** | <div>If `true`, centers the banner content both horizontally and vertically within the header.</div> | `false` | `boolean` |
| **disableInternalContainer** | <div>If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.</div> | `false` | `boolean` |
| **height** | <div>Sets the overall height of the header. Options include predefined size types such as 'full', 'auto', or 'full-screen'. Default is 'auto'.</div> | `'auto'` | `"auto"` \| `"full"` \| `"full-screen"` \| `"lg"` \| `"md"` \| `"sm"` \| `"xl"` |
| **minHeight** | <div>Sets the minimum height of the header. Like the `height` prop, it accepts size types like 'full', 'auto', or 'full-screen'. Default is 'auto'.</div> | `'auto'` | `"auto"` \| `"full"` \| `"full-screen"` \| `"lg"` \| `"md"` \| `"sm"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **header** | The main `header` element that wraps the header's content. |

## Slots

| Slot | Description |
| --- | --- |
| **banner** | Slot for inserting header-related content like a banner. |
| **navbar** | Slot for inserting navigation bar elements. Use this slot to insert your navigation bar. |

## Usage & Examples

### When to use:

- **Site Header with Navigation**: Use `tnw-header` to create a structured header for your application that includes navigation, banners, and other important elements.
- **Sticky Navigation**: The component is ideal when you need a sticky header that remains visible as the user scrolls, providing persistent navigation and quick access to key areas.
- **Customizable Header Layout**: `tnw-header` is flexible, allowing you to control the alignment of content, background colors, and sizes for different layout needs.

### Use Cases:

1. **Default Header with Navigation Bar and Banner**:
   Use this setup when you want a standard header containing a navigation bar and a banner. It works well for websites where both elements are key features.

   @useStory Default

2. **Centered Header with Custom Height**:
   If your design requires the header content to be centered (both horizontally and vertically), use this case with custom height to achieve that layout.

   @useStory CenteredHeader

3. **Sticky Header with Full-Screen Banner**:
   Use a sticky header when you want the navigation bar to remain at the top of the page as users scroll. This is especially useful for long pages where persistent navigation is needed. A full-screen banner provides maximum visual impact for marketing or landing pages.

   @useStory StickyHeader

### Additional Considerations:

- **Customizable Layout**: You can customize the header’s background, border, and content alignment to suit your design. Whether you need a full-screen, auto-sized, or centered layout, `tnw-header` adapts to your requirements.
- **Slot Flexibility**: The component provides slots for both the navigation bar and banner, allowing you to insert custom components or layouts that fit your specific use case.
- **Sticky Navigation**: When using the sticky header, ensure it’s configured to maintain accessibility and usability as users scroll through long content.

