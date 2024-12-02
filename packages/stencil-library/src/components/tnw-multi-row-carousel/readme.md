# tnw-multi-row-carousel



<!-- Auto Generated Below -->


## Overview

The `tnw-multi-row-carousel` provides an animated, infinitely scrolling carousel 
with multiple rows. Each row scrolls independently and can move in alternating directions.

## Usage

### Tnw-multi-row-carousel-usage





## Properties

| Property         | Attribute         | Description                                                                    | Type                | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------ | ------------------- | ----------- |
| `animationSpeed` | `animation-speed` | The speed of the row animation in milliseconds.                                | `number`            | `5000`      |
| `direction`      | `direction`       | The direction of row movement. Alternates automatically unless explicitly set. | `"left" \| "right"` | `undefined` |
| `rows`           | `rows`            | The number of rows in the carousel.                                            | `number`            | `3`         |


## Slots

| Slot | Description                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------- |
|      | Default slot to provide the content for the carousel. Each row will auto-distribute the slot's content. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
