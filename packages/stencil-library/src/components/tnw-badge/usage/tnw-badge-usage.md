### When to use:

- **Displaying Status or Counts**: Use `tnw-badge` to highlight small but important information, such as notifications, counts, or status indicators.
- **Labeling and Tagging**: The badge is great for labeling items with brief, distinct tags, such as "New", "Sale", or "Featured".
- **Custom Content Badges**: You can wrap custom content like icons inside the badge, allowing for more flexible designs that go beyond simple text labels.

### Use Cases:

1. **Standard Badge**:
   Use this to display basic text, such as a status label or tag.

   @useStory Standard

2. **Outlined Badge**:
   Use this variant when you want a badge with an outlined appearance, great for visually distinct but lightweight labels.

   @useStory OutlinedPrimary

3. **Badge with Different Sizes**:
   The badge size can be adjusted depending on where it is used. Smaller badges are ideal for inline labels, while larger badges can be used for emphasis.

   @useStory SmallBadge
   @useStory LargeBadge

4. **Badge with Custom Content**:
   If the badge content isn’t text (e.g., an icon or custom HTML), use the default slot to wrap the custom content. This is useful for displaying icons or emojis inside a badge.

   @useStory IconOnlyBadge

5. **Badge Displaying Numbers**:
   Badges can also display numbers, often used for notifications or counts.

   @useStory NumberBadge

### Additional Considerations:

- **Accessibility**: Ensure the badge is used with meaningful content. If a badge is used for notifications or important status information, consider adding appropriate ARIA attributes or screen reader labels.
- **Custom Content via Slot**: When using custom content (e.g., an icon or image), ensure the `label` prop is not used. Instead, provide content through the default slot for maximum flexibility.
- **Appearance and Styling**: You can customize the badge appearance with different variants (`outlined`, `solid`, `mixed`), and adjust the size and border radius to match your design needs.
- **Dynamic Content**: The badge is flexible for displaying dynamic information, such as live counts or status changes, and can adapt to various use cases.