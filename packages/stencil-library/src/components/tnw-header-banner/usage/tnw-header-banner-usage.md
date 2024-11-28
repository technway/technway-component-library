### When to use:

- **Header Banners with Call-to-Actions**: Use `tnw-header-banner` to create a visually appealing banner in the header section of your site, featuring a clear call-to-action with a button, heading, and subheading.
- **Promotional or Informational Banners**: Ideal for highlighting promotions, events, or key messages that require attention within a header layout.
- **Customizable Banner Alignment and Layout**: Use this component when you need full control over the alignment, size, and content arrangement in a header banner.

### Use Cases:

1. **Default Header Banner**:
   Use this for a standard banner with a heading, subheading, description, and button in your header section. It's great for drawing attention to important messages or CTAs.

   @useStory Default

2. **Custom Width Banner**:
   When the banner content is smaller and doesn’t need to span the entire width of the screen, this layout allows for a more concise presentation.

   @useStory CustomWidth

3. **Centered Header Banner**:
   For situations where the banner content should be centered both vertically and horizontally, such as for a large hero section or landing page introduction.

   @useStory Centered

### Additional Considerations:

- **Custom Content via Slots**: If you need to insert custom content (e.g., images, videos, or custom HTML), you can use the available slots for heading, subheading, description, and button.
- **Sticky Navigation Compatibility**: The `stickyNavbar` prop ensures that the banner aligns correctly beneath sticky navigation bars, making it perfect for headers with persistent navigation.
- **Theme Matching**: The banner can match the theme of the parent `tnw-header` through its `theme` prop, automatically adjusting text and button colors to fit the overall design.