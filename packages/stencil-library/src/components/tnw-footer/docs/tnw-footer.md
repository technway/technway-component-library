# tnw-footer

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Shadow Parts](#shadow-parts)
- [Usage](#usage)

## Overview

The `tnw-footer` component displays a structured footer with sections for branding, links, contact information, 
social media, and a newsletter subscription form. It is designed to be highly customizable and accessible.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-footer>` |
| React Component Tag | `TnwFooter` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **backgroundColor** | <div>The background color for the footer.</div> | `'auto'` | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **borderTopColor** | <div>The color for the footer border.</div> | `'auto'` | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"none"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **centerContent** | <div>Center-align the footer content.</div> | `false` | `boolean` |
| **disableInternalContainer** | <div>If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.</div> | `false` | `boolean` |
| **footerData** | <div>JSON data for dynamically populating the footer content.
Expected structure:
{
  brand: { logo: string, name: string },
  links: { heading: string, items: Array<{ label: string, url: string }> },
  contact: { heading: string, email: string, phone: string },
  socialmedia: Array<{ iconName: string, url: string }>,
  newsletter: {
    heading: string,
    description: string,
    placeholder: string,
    buttonText: string
  }
}</div> | N/A | `string` |
| **headingColor** | <div>The color for the footer headings.</div> | `'auto'` | `"auto"` \| `"black"` \| `"gray100"` \| `"gray200"` \| `"gray300"` \| `"gray400"` \| `"gray500"` \| `"gray600"` \| `"gray700"` \| `"gray800"` \| `"gray900"` \| `"inverse"` \| `"light"` \| `"placeholder"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **margin** | <div>The margin top size applied to the footer.</div> | `'none'` | `"2xl"` \| `"3xl"` \| `"4xl"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **padding** | <div>The padding size applied to the footer.</div> | `'xl'` | `"2xl"` \| `"3xl"` \| `"4xl"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **textColor** | <div>The color for the footer content.</div> | `'auto'` | `"auto"` \| `"black"` \| `"gray100"` \| `"gray200"` \| `"gray300"` \| `"gray400"` \| `"gray500"` \| `"gray600"` \| `"gray700"` \| `"gray800"` \| `"gray900"` \| `"inverse"` \| `"light"` \| `"placeholder"` \| `"primary"` \| `"secondary"` \| `"white"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **brand** | No description provided. |
| **contact** | No description provided. |
| **container** | The container wrapping the footer sections. |
| **footer** | The main `footer` element wrapping the entire component. |
| **links** | No description provided. |
| **newsletter** | No description provided. |
| **socialmedia** | No description provided. |

## Slots

| Slot | Description |
| --- | --- |
| **brand** | Slot for the brand logo and name. |
| **contact** | Slot for contact information. |
| **copyrights** | Slot for copyright information. Use `tnw-copyrights-footer` instead. |
| **links** | Slot for useful links. |
| **newsletter** | Slot for the newsletter subscription form. |
| **socialmedia** | Slot for social media icons. |

## Usage & Examples

No usage is provided for this component.

