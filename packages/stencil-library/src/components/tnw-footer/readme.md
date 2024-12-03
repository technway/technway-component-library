# tnw-lower-footer



<!-- Auto Generated Below -->


## Overview

The `tnw-footer` component displays a structured footer with sections for branding, links, contact information, 
social media, and a newsletter subscription form. It is designed to be highly customizable and accessible.

## Usage

### Tnw-footer-usage

### When to use:

- **Displaying Footer Information**: Use `tnw-footer` to display essential information at the bottom of a webpage, such as organization names, copyright details, and important notes.
- **Dynamic or Static Years**: The component is useful for displaying dynamic years (e.g., "2023 - 2024") or static date ranges.
- **Customizable Footer Layout**: When you need a customizable footer that supports text alignment, background colors, and custom content via slots.

### Use Cases:

1. **Standard Footer with Organization Name and Years**:
   Use this when you want to display your organization's name with a start and end year range, along with optional pretext (e.g., "©") and posttext (e.g., "All Rights Reserved").

   @useStory Standard

2. **Footer with Custom Slot Content**:
   Use this case when you need to fully customize the content of the footer, such as including images, links, or any custom HTML content.

   @useStory WithCustomSlot

3. **Footer with Dynamic Years**:
   Automatically display the current year, which is useful for keeping the footer up to date without manual adjustments.

   @useStory DynamicYears

### Additional Considerations:

- **Custom Colors**: You can easily adjust the text color, background color, and top border color of the footer to match your brand’s design.
- **Custom Slot Content**: When using the slot for custom content, make sure the `enableSlot` prop is set to `true` to render your custom HTML or elements in the footer.
- **Text Alignment**: The footer supports centering the content when the `centerContent` prop is enabled, making it adaptable for different layout needs.



## Properties

| Property                   | Attribute                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Default     |
| -------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `backgroundColor`          | `background-color`           | The background color for the footer.                                                                                                                                                                                                                                                                                                                                                                                                           | `"auto" \| "black" \| "inverse" \| "light" \| "primary" \| "secondary" \| "white"`                                                                                                                                       | `'auto'`    |
| `centerContent`            | `center-content`             | Center-align the footer content.                                                                                                                                                                                                                                                                                                                                                                                                               | `boolean`                                                                                                                                                                                                                | `false`     |
| `disableInternalContainer` | `disable-internal-container` | If `true`, a container class will be added around the content to align it within the page layout. Default is `false`.                                                                                                                                                                                                                                                                                                                          | `boolean`                                                                                                                                                                                                                | `false`     |
| `footerData` _(required)_  | `footer-data`                | JSON data for dynamically populating the footer content. Expected structure: {   brand: { logo: string, name: string },   links: { heading: string, items: Array<{ label: string, url: string }> },   contact: { heading: string, email: string, phone: string },   socialmedia: Array<{ iconName: string, url: string }>,   newsletter: {     heading: string,     description: string,     placeholder: string,     buttonText: string   } } | `string`                                                                                                                                                                                                                 | `undefined` |
| `headingColor`             | `heading-color`              | The color for the footer headings.                                                                                                                                                                                                                                                                                                                                                                                                             | `"auto" \| "black" \| "gray100" \| "gray200" \| "gray300" \| "gray400" \| "gray500" \| "gray600" \| "gray700" \| "gray800" \| "gray900" \| "inverse" \| "light" \| "placeholder" \| "primary" \| "secondary" \| "white"` | `'auto'`    |
| `textColor`                | `text-color`                 | The color for the footer content.                                                                                                                                                                                                                                                                                                                                                                                                              | `"auto" \| "black" \| "gray100" \| "gray200" \| "gray300" \| "gray400" \| "gray500" \| "gray600" \| "gray700" \| "gray800" \| "gray900" \| "inverse" \| "light" \| "placeholder" \| "primary" \| "secondary" \| "white"` | `'auto'`    |


## Slots

| Slot            | Description                                |
| --------------- | ------------------------------------------ |
| `"brand"`       | Slot for the brand logo and name.          |
| `"contact"`     | Slot for contact information.              |
| `"links"`       | Slot for useful links.                     |
| `"newsletter"`  | Slot for the newsletter subscription form. |
| `"socialmedia"` | Slot for social media icons.               |


## Shadow Parts

| Part            | Description                                              |
| --------------- | -------------------------------------------------------- |
| `"brand"`       |                                                          |
| `"contact"`     |                                                          |
| `"container"`   | The container wrapping the footer sections.              |
| `"footer"`      | The main `footer` element wrapping the entire component. |
| `"links"`       |                                                          |
| `"newsletter"`  |                                                          |
| `"socialmedia"` |                                                          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
