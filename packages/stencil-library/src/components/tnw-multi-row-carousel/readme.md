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


## Events

| Event          | Description                                                                                                           | Type                  |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `tnwRowPause`  | Event emitted when a row's animation is paused. The event detail contains the index of the paused row (zero-based).   | `CustomEvent<number>` |
| `tnwRowResume` | Event emitted when a row's animation is resumed. The event detail contains the index of the resumed row (zero-based). | `CustomEvent<number>` |


## Methods

### `pauseAll() => Promise<void>`

Pauses the animation of all carousel rows.
Emits a `tnwRowPause` event for each row that is paused.

#### Returns

Type: `Promise<void>`



### `resumeAll() => Promise<void>`

Resumes the animation of all carousel rows.
Emits a `tnwRowResume` event for each row that is resumed.

#### Returns

Type: `Promise<void>`



### `toggleRow(rowIndex: number) => Promise<void>`

Toggles the animation state of a specific row between paused and running.
Emits either a `tnwRowPause` or `tnwRowResume` event depending on the new state.

#### Parameters

| Name       | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| `rowIndex` | `number` | - The zero-based index of the row to toggle |

#### Returns

Type: `Promise<void>`




## Slots

| Slot             | Description                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `"row-[number]"` | A slot for each row's content. Replace `[number]` with the row index (starting from 1). Ensure the number of slots matches the `rows` prop. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
