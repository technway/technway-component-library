# tnw-multi-row-carousel

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Usage](#usage)

## Overview

The `tnw-multi-row-carousel` provides an animated, infinitely scrolling carousel 
with multiple rows. Each row scrolls independently and can move in alternating directions.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-multi-row-carousel>` |
| React Component Tag | `TnwMultiRowCarousel` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **animationSpeed** | <div>The speed of the row animation in milliseconds.</div> | `5000` | `number` |
| **direction** | <div>The direction of row movement. Alternates automatically unless explicitly set.</div> | N/A | `"left"` \| `"right"` |
| **rows** | <div>The number of rows in the carousel.</div> | `3` | `number` |

</div>

## Slots

| Slot | Description |
| --- | --- |
| **default** | Default slot to provide the content for the carousel. Each row will auto-distribute the slot's content. |

## Usage & Examples

No usage is provided for this component.

