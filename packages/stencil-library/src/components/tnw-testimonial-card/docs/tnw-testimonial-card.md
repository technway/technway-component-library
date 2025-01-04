# tnw-testimonial-card

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Usage](#usage)

## Overview

The `tnw-testimonial-card` component is a versatile component designed to display testimonials. It includes options for an author's photo, name, role, and a testimonial description, with support for custom styles, spacing, and visual effects.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-testimonial-card>` |
| React Component Tag | `TnwTestimonialCard` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **appearance** | <div>The appearance style of the card.</div> | `'outlined'` | `"mixed"` \| `"none"` \| `"outlined"` \| `"solid"` \| `"transparent"` |
| **appearanceColor** | <div>The color appearance color of the card, determining the overall color scheme.</div> | `'auto'` | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **authorName** | <div>The name of the author.</div> | N/A | `string` |
| **authorPhotoAlt** | <div>Alternative text for the author's photo.</div> | N/A | `string` |
| **authorPhotoSrc** | <div>The URL of the author's photo.</div> | N/A | `string` |
| **authorRole** | <div>The role or title of the author.</div> | N/A | `string` |
| **borderRadius** | <div>The border radius applied to the card.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **padding** | <div>The padding size for the card.</div> | `"sm"` | `"lg"` \| `"md"` \| `"none"` \| `"sm"` |
| **spacing** | <div>Controls the spacing between description and author details.</div> | `'sm'` | `"lg"` \| `"md"` \| `"sm"` |
| **text** | <div>The text of the testimonial.</div> | N/A | `string` |
| **useGlassmorphismEffect** | <div>If `true`, the card will have a glassmorphism effect applied to its background.</div> | `false` | `boolean` |
| **useRandomAvatar** | <div>If `true`, a random gradient avatar will be generated when no photo is provided.</div> | `false` | `boolean` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **author-details** | The container `div` element for the author's details (name and role). |
| **author-name** | The `tnw-heading` element displaying the author's name. |
| **author-photo** | The `tnw-image` element for the author's photo. |
| **author-role** | The `tnw-text` element displaying the author's role. |
| **avatar** | The container for the author's avatar or randomly generated gradient avatar. |
| **description** | The `tnw-text` element displaying the testimonial description. |

## Usage & Examples

No usage is provided for this component.

