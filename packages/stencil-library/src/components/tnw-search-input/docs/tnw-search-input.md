# tnw-search-input

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Shadow Parts](#shadow-parts)
- [Events](#events)
- [Usage](#usage)

## Overview

The `tnw-search-input` component is a customizable search input field that supports various input types, validation, and appearance options.
It is designed to be versatile and accessible, allowing for both visual and screen-reader friendly labels, as well as handling error alerts.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-search-input>` |
| React Component Tag | `TnwSearchInput` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **appearance** | <div>Defines the appearance of the input.</div> | `'outlined'` | `"none"` \| `"outlined"` \| `"underlined"` |
| **appearanceColor** | <div>The appearance color of the input, determining the overall color scheme.</div> | `'auto'` | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **autoComplete** | <div>The autocomplete setting for the input.</div> | `'off'` | `string` |
| **borderRadius** | <div>The border radius of the input.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **inputId** | <div>The unique ID for the input element. If not provided, a random ID will be generated.</div> | `generateRandomId(this.baseClass)` | `string` |
| **label** | <div>The label for the input.
It will not be displayed (Screen Reader Only).</div> | `'Search'` | `string` |
| **name** | <div>The name of the input field.</div> | `''` | `string` |
| **placeholder** | <div>The placeholder text for the input.</div> | `'Search'` | `string` |
| **type** | <div>The type of the input.</div> | `'search'` | `"search"` \| `"text"` |
| **value** | <div>The initial value of the input.</div> | `''` | `string` |
| **variant** | <div>The variant of the search input.</div> | `'icon-left'` | `"expandable"` \| `"icon-left"` \| `"icon-right"` \| `"no-icon"` |
| **width** | <div>The width of the input. Accepts any valid CSS width value.</div> | `'100%'` | `string` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **icon** | The `<tnw-icon>` element for the search icon. |
| **input** | The `<input>` element itself. |

## Events

| Event | Description |
| --- | --- |
| **inputChangedOnType** | Event emitted when the input value changes. The event's payload contains the new value. |

## Usage & Examples

No usage is provided for this component.

