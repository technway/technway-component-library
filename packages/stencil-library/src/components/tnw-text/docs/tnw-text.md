# tnw-text

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Shadow Parts](#shadow-parts)
- [Usage](#usage)

## Overview

The `tnw-text` component is used to display descriptive text with customizable styling options. 
It supports various typography-related properties, color, and alignment.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-text>` |
| React Component Tag | `TnwText` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **alignment** | <div>Specifies the text alignment.</div> | N/A | `"center"` \| `"end"` \| `"justify"` \| `"left"` \| `"right"` \| `"start"` |
| **color** | <div>Sets the color of the text based on the available colors.</div> | N/A | `"auto"` \| `"black"` \| `"gray100"` \| `"gray200"` \| `"gray300"` \| `"gray400"` \| `"gray500"` \| `"gray600"` \| `"gray700"` \| `"gray800"` \| `"gray900"` \| `"inverse"` \| `"light"` \| `"placeholder"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **displayMode** | <div>Defines the display mode of the component. It's not recommended to use the `"inline"` display mode, use `"inline-block"` instead.</div> | `"block"` | `"block"` \| `"inline"` \| `"inline-block"` |
| **highlight** | <div>Specifies which piece of text in the `text` prop should be bolded.</div> | N/A | `number` \| `string` |
| **highlightColor** | <div>Specifies the color of the highlighted text.</div> | N/A | `"auto"` \| `"black"` \| `"gray100"` \| `"gray200"` \| `"gray300"` \| `"gray400"` \| `"gray500"` \| `"gray600"` \| `"gray700"` \| `"gray800"` \| `"gray900"` \| `"inverse"` \| `"light"` \| `"placeholder"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **highlightTag** | <div>Specifies the HTML tag to be used for the highlighted text. Useful for SEO purposes.</div> | `"span"` | `"em"` \| `"mark"` \| `"span"` \| `"strong"` |
| **highlightWeight** | <div>Specifies the font weight of the highlighted text.</div> | `"600"` | `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"` \| `"heading"` \| `"text"` |
| **lineHeight** | <div>Adjusts the line height of the text.</div> | `"1_75"` | `"1"` \| `"1_25"` \| `"1_5"` \| `"1_75"` \| `"2"` \| `"2_25"` \| `"2_5"` |
| **size** | <div>Defines the font size of the text.</div> | N/A | `"2xl"` \| `"3xl"` \| `"4xl"` \| `"5xl"` \| `"6xl"` \| `"7xl"` \| `"8xl"` \| `"9xl"` \| `"heading"` \| `"lg"` \| `"md"` \| `"sm"` \| `"text"` \| `"xl"` \| `"xs"` |
| **text** | <div>The content of the component.</div> | N/A | `number` \| `string` |
| **textCase** | <div>Controls the text transformation (e.g., uppercase, lowercase).</div> | N/A | `"capitalize"` \| `"lowercase"` \| `"normal-case"` \| `"uppercase"` |
| **textTag** | <div>Defines the HTML tag of the component.</div> | `"p"` | `"em"` \| `"mark"` \| `"p"` \| `"span"` \| `"strong"` |
| **weight** | <div>Specifies the font weight of the text.</div> | N/A | `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"` \| `"heading"` \| `"text"` |
| **widthSize** | <div>The width size of the text. Use unset to avoid setting width.</div> | `'full'` | `"full"` \| `"lg"` \| `"md"` \| `"sm"` \| `"unset"` \| `"xl"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **highlighted-text** | The highlighted text content element. |
| **text** | The main text content element. |

## Slots

| Slot | Description |
| --- | --- |
| **default** | Use the default slot to add custom content inside the text tag. |

## Usage & Examples

### When to use:

- **Text Display**: Use `tnw-text` to present simple descriptive content, such as paragraphs or small pieces of text, with customizable typography.
- **Headlines & Descriptions**: It is ideal for text components where precise control over color, font size, line height, alignment, and font weight is required.
- **Inline or Block Elements**: You can switch between `p` (block) and `span` (inline) elements based on layout needs.

### Use Cases:

1. **Standard Text**:
   This case demonstrates basic text usage with the default styling options, perfect for paragraphs or body text in various sections.

   @useStory Standard

2. **Gray Color**:
   This use case applies a specific color to the text, showcasing how color customization can be used to tone down or emphasize certain sections.

   @useStory GrayColor

3. **Medium Font Size**:
   Here, the font size is adjusted to medium, ideal for subheadings or smaller content pieces within a larger section.

   @useStory mediumSize

4. **Small Line Height**:
   This example modifies the line height, making the text more compact, useful when dealing with dense content in a small space.

   @useStory SmallLineHeight

5. **Bold Text**:
   Bold text is great for headings or emphasis within a body of text. This example demonstrates how to increase font weight for a stronger visual impact.

   @useStory Bold

### Additional Considerations:

- **Slot Flexibility**: The default slot can be used to insert custom HTML or other components, giving the `tnw-text` component flexibility to adapt to different content types.
- **Customizable Alignment**: The `alignment` prop allows you to fine-tune the placement of the text within its container, offering support for left, right, or centered text.
- **Typography Control**: With control over text transformation, font size, weight, and line height, the `tnw-text` component is a versatile choice for various UI scenarios.

