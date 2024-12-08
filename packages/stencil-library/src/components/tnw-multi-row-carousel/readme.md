# tnw-multi-row-carousel



<!-- Auto Generated Below -->


## Overview

The `tnw-multi-row-carousel` component provides an animated, infinitely scrolling carousel 
with multiple rows. Each row scrolls independently and can move in alternating directions.

## Usage

### Tnw-multi-row-carousel-usage





## Properties

| Property         | Attribute         | Description                                     | Type     | Default |
| ---------------- | ----------------- | ----------------------------------------------- | -------- | ------- |
| `animationSpeed` | `animation-speed` | The speed of the row animation in milliseconds. | `number` | `22000` |
| `rows`           | `rows`            | The number of rows in the carousel.             | `number` | `2`     |


## Slots

| Slot             | Description                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `"row-[number]"` | A slot for each row's content. Replace `[number]` with the row index (starting from 1). Ensure the number of slots matches the `rows` prop. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
