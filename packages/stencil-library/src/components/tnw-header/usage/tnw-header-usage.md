### When to use:

- **Site Header with Navigation**: Use `tnw-header` to create a structured header for your application that includes navigation, banners, and other important elements.
- **Sticky Navigation**: The component is ideal when you need a sticky header that remains visible as the user scrolls, providing persistent navigation and quick access to key areas.
- **Customizable Header Layout**: `tnw-header` is flexible, allowing you to control the alignment of content, background colors, and sizes for different layout needs.

### Use Cases:

1. **Default Header with Navigation Bar and Banner**:
   Use this setup when you want a standard header containing a navigation bar and a banner. It works well for websites where both elements are key features.

   @useStory Default

2. **Centered Header with Custom Height**:
   If your design requires the header content to be centered (both horizontally and vertically), use this case with custom height to achieve that layout.

   @useStory CenteredHeader

3. **Sticky Header with Full-Screen Banner**:
   Use a sticky header when you want the navigation bar to remain at the top of the page as users scroll. This is especially useful for long pages where persistent navigation is needed. A full-screen banner provides maximum visual impact for marketing or landing pages.

   @useStory StickyHeader

### Additional Considerations:

- **Customizable Layout**: You can customize the header’s background, border, and content alignment to suit your design. Whether you need a full-screen, auto-sized, or centered layout, `tnw-header` adapts to your requirements.
- **Slot Flexibility**: The component provides slots for both the navigation bar and banner, allowing you to insert custom components or layouts that fit your specific use case.
- **Sticky Navigation**: When using the sticky header, ensure it’s configured to maintain accessibility and usability as users scroll through long content.