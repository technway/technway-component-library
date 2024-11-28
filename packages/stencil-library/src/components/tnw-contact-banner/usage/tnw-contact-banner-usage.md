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