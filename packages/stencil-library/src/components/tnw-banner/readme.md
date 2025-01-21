# tnw-banner



<!-- Auto Generated Below -->


## Overview

The `tnw-banner` component is a customizable banner used for multi-purpose content.
As an example it can be used to display a newsletter banner, advertisement banner, contact banner etc.
It supports various appearances and colors, and allows for custom content to be inserted via slots.

## Properties

| Property                   | Attribute                    | Description                                                                                                                                                                          | Type                                                                                                  | Default      |
| -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ------------ |
| `alignment`                | `alignment`                  | If `true`, the banner will center its content.                                                                                                                                       | `"center" \| "end" \| "start"`                                                                        | `'center'`   |
| `appearance`               | `appearance`                 | Defines the visual appearance of the banner (e.g., solid, outline).                                                                                                                  | `"gradient" \| "mixed" \| "outlined" \| "solid" \| "transparent"`                                     | `'solid'`    |
| `appearanceColor`          | `appearance-color`           | Specifies the primary appearance color of the banner. if appearance is gradient, this prop will be ignored.                                                                          | `"auto" \| "black" \| "inverse" \| "light" \| "primary" \| "secondary" \| "white"`                    | `'primary'`  |
| `borderRadius`             | `border-radius`              | Defines the border radius of the banner.                                                                                                                                             | `"2xl" \| "3xl" \| "circle" \| "default" \| "full" \| "lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"` | `'default'`  |
| `disableInternalContainer` | `disable-internal-container` | If `true`, the section body will be wrapped in a container for centering and padding.                                                                                                | `boolean`                                                                                             | `false`      |
| `enableContentSlot`        | `enable-content-slot`        | If `true`, the banner will render custom content using the `content` slot. When this is enabled, the standard slots (`subtitle`, `title`, `description`, `button`) will not be used. | `boolean`                                                                                             | `false`      |
| `gap`                      | `gap`                        | Defines the spacing between the content and the button. This will not control gap between elements inside the content.                                                               | `"2xl" \| "3xl" \| "4xl" \| "lg" \| "md" \| "sm" \| "xl" \| "xs"`                                     | `'md'`       |
| `layout`                   | `layout`                     | The layout of the banner.                                                                                                                                                            | `"horizontal" \| "vertical"`                                                                          | `'vertical'` |
| `margin`                   | `margin`                     | Defines the margin of the banner.                                                                                                                                                    | `"2xl" \| "3xl" \| "4xl" \| "lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"`                           | `'xl'`       |
| `paddingHorizontal`        | `padding-horizontal`         | Defines the horizontal padding of the banner.                                                                                                                                        | `"2xl" \| "3xl" \| "4xl" \| "lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"`                           | `'lg'`       |
| `paddingVertical`          | `padding-vertical`           | Defines the vertical padding of the banner.                                                                                                                                          | `"2xl" \| "3xl" \| "4xl" \| "lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"`                           | `'lg'`       |
| `textAlignment`            | `text-alignment`             | Defines the alignment of the text content.                                                                                                                                           | `"center" \| "end" \| "left" \| "right" \| "start"`                                                   | `'center'`   |


## Slots

| Slot            | Description                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `"button"`      | Use this slot to insert a button or call-to-action element.                                                                                |
| `"content"`     | Use this slot to insert custom content when `enableContentSlot` is set to `true`. When enabled, only the `content` slot will be available. |
| `"description"` | Use this slot to insert a description or additional information in the banner.                                                             |
| `"subtitle"`    | Use this slot to insert a short title or subtitle in the banner.                                                                           |
| `"title"`       | Use this slot to insert the main title or heading of the banner.                                                                           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
