# tnw-contact-banner



<!-- Auto Generated Below -->


## Overview

The `tnw-contact-banner` component is a customizable banner used to display contact information or call-to-action content.
It supports various appearances and colors, and allows for custom content to be inserted via slots.

## Usage

### Tnw-contact-banner-usage

### When to use:

- **Promotional Banners**: The `tnw-contact-banner` component is ideal for highlighting contact information or calls to action on landing pages, product sections, or help/support pages.
- **Support and Assistance**: Use the banner to draw attention to customer support options or provide a direct link to contact your business.
- **Customization**: The component supports both predefined slots for titles, descriptions, and buttons, as well as a custom content slot for more flexible layouts.

### Use Cases:

1. **Default Contact Banner**:
   This example showcases a default banner layout with a short title, main title, description, and a call-to-action button.

   @useStory Default

2. **Contact Banner with Alignment Start**:
   Use this option when you want to align content to the start of the banner.

   @useStory AlignmentStart

3. **Contact Banner with Outlined Appearance**:
   This version of the contact banner uses an outlined appearance, giving the banner a more subtle look, often suited for less prominent sections.

   @useStory OutlinedAppearance

4. **Contact Banner with Inverse Variant**:
   This banner example utilizes an inverse color variant, often useful for dark mode or contrasting sections.

   @useStory InverseVariant

### Additional Considerations:

- **Custom Slots**: When the `enableContentSlot` prop is set to true, the component disables the standard slots (`short-title`, `title`, `description`, `button`) in favor of a flexible `content` slot.
- **Alignment Options**: The `alignment` prop allows you to align the banner content to the start, center, or end, based on your layout requirements.
- **Appearance and Color Customization**: You can modify the appearance of the banner using the `appearance` and `variant` props, making it easy to match your branding and design guidelines.



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
