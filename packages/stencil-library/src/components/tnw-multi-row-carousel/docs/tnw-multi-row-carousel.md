# tnw-multi-row-carousel

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Usage](#usage)

## Overview

The `tnw-multi-row-carousel` component provides an animated, infinitely scrolling carousel 
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
| **animationSpeed** | <div>The speed of the row animation in milliseconds.</div> | `22000` | `number` |
| **rows** | <div>The number of rows in the carousel.</div> | `2` | `number` |

</div>

## Slots

| Slot | Description |
| --- | --- |
| **row-[number]** | A slot for each row's content. Replace `[number]` with the row index (starting from 1). Ensure the number of slots matches the `rows` prop. |

## Usage & Examples

No usage is provided for this component.

