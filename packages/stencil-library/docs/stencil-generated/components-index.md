# Components Index

This page lists all the library components.

<div class="table-contents">

- [tnw-accordion](#tnw-accordion)
- [tnw-accordion-group](#tnw-accordion-group)
- [tnw-alert](#tnw-alert)
- [tnw-anchor](#tnw-anchor)
- [tnw-anchor-styler](#tnw-anchor-styler)
- [tnw-badge](#tnw-badge)
- [tnw-button](#tnw-button)
- [tnw-card](#tnw-card)
- [tnw-contact-banner](#tnw-contact-banner)
- [tnw-copyrights-footer](#tnw-copyrights-footer)
- [tnw-divider](#tnw-divider)
- [tnw-footer](#tnw-footer)
- [tnw-header](#tnw-header)
- [tnw-header-banner](#tnw-header-banner)
- [tnw-heading](#tnw-heading)
- [tnw-icon](#tnw-icon)
- [tnw-image](#tnw-image)
- [tnw-input](#tnw-input)
- [tnw-items-carousel](#tnw-items-carousel)
- [tnw-label](#tnw-label)
- [tnw-list](#tnw-list)
- [tnw-navbar](#tnw-navbar)
- [tnw-portfolio-grid](#tnw-portfolio-grid)
- [tnw-rating](#tnw-rating)
- [tnw-rows-carousel](#tnw-rows-carousel)
- [tnw-scroll-to-top](#tnw-scroll-to-top)
- [tnw-section](#tnw-section)
- [tnw-select](#tnw-select)
- [tnw-subscription-form](#tnw-subscription-form)
- [tnw-testimonial-card](#tnw-testimonial-card)
- [tnw-text](#tnw-text)
- [tnw-textarea](#tnw-textarea)

</div>


---

## tnw-accordion

The `tnw-accordion` component provides a collapsible/expandable section
with a header and body content. It is ideal for use in creating FAQ sections, collapsible panels,
or other UI components requiring content toggling.

---

## tnw-accordion-group

The `tnw-accordion-group` component serves as a container for multiple `tnw-accordion` components.
It supports a single-expand mode, where only one accordion item can be expanded at a time.
This component listens for `accordionToggle` events emitted by its child `tnw-accordion` components,
and handles the state updates accordingly.

---

## tnw-alert

The `tnw-alert` component is used to display a prominent message to the user, such as
important notifications, success messages, warnings, or errors.

---

## tnw-anchor

The `tnw-anchor` component is a versatile anchor link element that can be used to navigate to other pages or external resources.
This component supports both text content and custom content via a slot, making it flexible for various use cases, such as wrapping other elements like images or icons.

---

## tnw-anchor-styler

The `tnw-anchor-styler` component is a decorative wrapper for custom anchor-like elements.
It focuses purely on styling and requires slotted children for its content.

This component is particularly suitable for use with React Router's `Link` or `NavLink` components 
and Next.js's `Link` components, where navigation functionality is handled externally, 
and styling can be applied through this wrapper.

---

## tnw-badge

The `tnw-badge` component is used to display small pieces of information, such as labels, statuses, or counts, in a compact and visually distinct way.
This component supports various customization options including different variants, appearances, and sizes, making it versatile for a wide range of use cases.

---

## tnw-button

The `tnw-button` component is a customizable button element, which can be used as a standalone button or as a button in a form.
It supports various styles, sizes, and appearances, and allows for custom content to be inserted via a slot.
By default, the component renders a button element, but it can also render an anchor element if the `href` prop is provided.

---

## tnw-card

The `tnw-card` component is a flexible container used to display content such as images, text, and buttons in a 
card layout. It supports various customization options for layout orientation, appearance colors, spacing, 
and content alignment. The card can display images, headings, subheadings, descriptions, and buttons, 
with slots for each, allowing full customization.

---

## tnw-contact-banner

The `tnw-contact-banner` component is a customizable banner used to display contact information or call-to-action content.
It supports various appearances and colors, and allows for custom content to be inserted via slots.

---

## tnw-copyrights-footer

The `tnw-footer` component displays footer information such as the organization name, copyright years, 
and additional text. The component provides flexible options for colors, text layout, and custom slot content.
It can be customized to display dynamic or static years, as well as pre-defined text before and after the organization name.

---

## tnw-divider

The `tnw-divider` component creates a horizontal or vertical line to visually separate content.
It provides customizable styles and color options to fit different design requirements.

---

## tnw-footer

The `tnw-footer` component displays a structured footer with sections for branding, links, contact information, 
social media, and a subscription subscription form. It is designed to be highly customizable and accessible.

---

## tnw-header

The `tnw-header` component is designed to create a customizable and structured header for your application.
It allows for flexible layout options with support for navigation bars, banners, and various alignment and size customizations.

---

## tnw-header-banner

This component is designed to be used inside the `tnw-header`.

The `tnw-header-banner` component creates a customizable banner for headers, featuring headings, subheadings, descriptions, and buttons.
It is designed to align with the theme of the parent header component, making it a cohesive part of the header design.

---

## tnw-heading

The `tnw-heading` component is used to render a customizable heading or title with various styling options.
It allows you to control the text alignment, color, size, weight, transformation, and line height, 
along with the ability to use a different HTML tag for the heading element.

---

## tnw-icon

The `tnw-icon` component is a flexible icon element that supports various styles, sizes, and appearances. 
It can be used as a standalone icon or to display custom SVG icons through the `svg` slot.

---

## tnw-image

The `tnw-image` component is used to display images with optional captions, lazy loading, and customizable styles. 
It supports various properties to control the image source, dimensions, and appearance.

---

## tnw-input

The `tnw-input` component is a customizable input field that supports various input types, validation, and appearance options.
It is designed to be versatile and accessible, allowing for both visual and screen-reader friendly labels, as well as handling error alerts.

---

## tnw-items-carousel

The `tnw-items-carousel` component provides a flexible and customizable carousel for displaying multiple slides in a row.
The carousel supports custom controls, touch gestures, edge shadows, and can be resized dynamically.

---

## tnw-label

The `tnw-label` component is used to create a text label for a form element like an input or a textarea.
It supports various font sizes, weights, colors, and text transformations. Additionally, it allows the label to be visually hidden while remaining accessible to screen readers.

---

## tnw-list

The `tnw-list` component is a customizable list element supporting both ordered and unordered styles.
It allows you to create lists with various marker types, colors, and fonts, and can also include icons within list items.

---

## tnw-navbar

The `tnw-navbar` component creates a responsive, customizable navigation bar.
It supports various appearance colors, optional glassmorphism effects, and flexible content slots for building structured navigation systems.

---

## tnw-portfolio-grid

The `tnw-portfolio-grid` component creates a flexible, responsive grid for displaying portfolio or gallery items.

---

## tnw-rating

The `tnw-rating` component is used to display a star-based rating system, allowing users to see a visual representation of a rating out of a total number of stars.

---

## tnw-rows-carousel

The `tnw-rows-carousel` component provides an animated, infinitely scrolling carousel 
with multiple rows. Each row scrolls independently and can move in alternating directions.

---

## tnw-scroll-to-top

The `tnw-scroll-to-top` component provides a button that allows users to quickly scroll back to the top of the page.
The button becomes visible when the user scrolls down a certain distance.
It supports customization of the icon, size, appearance, and allows for the use of a custom SVG icon.

---

## tnw-section

The `tnw-section` component is a layout container that wraps content such as headers, bodies, and footers.
It supports various appearance colors, optional glassmorphism effects, and an internal container to handle
content alignment and padding.

---

## tnw-select

The `tnw-select` component provides a custom dropdown select element with support for dynamic options, selection, and keyboard navigation.

---

## tnw-subscription-form

The `tnw-subscription-form` component provides a customizable subscription form.

---

## tnw-testimonial-card

The `tnw-testimonial-card` component is a versatile component designed to display testimonials. It includes options for an author's photo, name, role, and a testimonial description, with support for custom styles, spacing, and visual effects.

---

## tnw-text

The `tnw-text` component is used to display descriptive text with customizable styling options. 
It supports various typography-related properties, color, and alignment.

---

## tnw-textarea

The `tnw-textarea` component is a customizable textarea field that supports various appearance options, validation, and accessibility features.

---

