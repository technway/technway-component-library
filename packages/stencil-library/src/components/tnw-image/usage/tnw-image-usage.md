### When to use:

- **Displaying Images with Optional Captions**: Use `tnw-image` to display images with optional captions for enhanced context or descriptions.
- **Custom Sizing and Aspect Ratios**: This component is ideal when you need control over the dimensions and aspect ratio of images to fit specific layouts or designs.
- **Optimized Image Loading**: For performance optimization, use the lazy loading feature to load images only when they are about to come into the viewport.

### Use Cases:

1. **Standard Image**:
   Use this case for displaying a basic image, such as a product image or media in a blog post.

   @useStory Standard

2. **Image with Caption**:
   When you need to provide additional context or information below the image, use this option with a caption.

   @useStory ImageWithCaption

3. **Image with Custom Aspect Ratio**:
   For maintaining specific proportions (e.g., 16:9 or 4:3) in your image display, use this case.

   @useStory AspectRatioImage

4. **Image with Object Fit (Cover)**:
   Use this when the image should cover the entire space of its container, such as for full-width hero images or banners.

   @useStory ObjectFitCover

### Additional Considerations:

- **Lazy Loading**: For performance optimization, enable lazy loading so that images load only when they are near the viewport. This is particularly useful for long pages or content-heavy websites.
- **Customizable Sizes and Ratios**: You can easily control the width, height, and aspect ratio to adapt the image to different layouts, ensuring responsive behavior across devices.
- **Object Fit and Position**: The `objectFit` and `objectPosition` properties allow fine control over how the image scales and positions itself within the container, ensuring a precise layout fit.