### When to use:

- **Image or Content Sliders**: Use `tnw-items-carousel` when you need to showcase multiple items like images, cards, or any other content in a horizontally scrolling format.
- **Custom Control Icons**: If you want to replace the default navigation controls with custom icons, this component supports slots for inserting custom controls.
- **Edge Shadows for Enhanced Visuals**: Enable edge shadows to add a visual cue for scrollable content at the beginning and end of the carousel.
- **Touch Gestures**: Use this carousel for mobile or touch-enabled devices, as it includes built-in support for swipe gestures.

### Use Cases:

1. **Standard Image Carousel**:
   This example demonstrates the use of the carousel to display multiple images.

   @useStory Default

2. **Carousel with Edge Shadows**:
   Edge shadows are used to enhance the carousel's visual style.

   @useStory widthEdgesShadows

### Additional Considerations:

- **Custom Controls**: Use the `enableControlsSlots` property to override the default controls with your custom icons or buttons by providing content in the `control-prev-icon` and `control-next-icon` slots.
- **Accessibility**: Ensure that appropriate labels or ARIA attributes are used for control buttons and carousel items to maintain accessibility.
- **Touch and Gesture Support**: The carousel comes with touch gesture support, allowing users to swipe between slides on touch-enabled devices.
- **Dynamic Content**: Use the slots to customize each slide's content dynamically, such as integrating images, text, or custom elements into each carousel slide.