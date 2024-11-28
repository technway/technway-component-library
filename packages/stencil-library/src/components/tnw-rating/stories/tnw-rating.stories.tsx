import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-rating');

export default {
  title: 'Components/Rating',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Default Rating
export const Default = Template.bind({});
Default.args = {
  rating: 4,
};

// Small Rating
export const SmallRating = Template.bind({});
SmallRating.args = {
  ...Default.args,
  starSize: 'xs',
};

// Large Rating
export const LargeRating = Template.bind({});
LargeRating.args = {
  ...Default.args,
  starSize: 'lg',
};

// Partial Rating with Hidden Empty Icons
export const VisibleEmptyIcons = Template.bind({});
VisibleEmptyIcons.args = {
  ...Default.args,
  rating: 3,
};

// Partial Rating with Hidden Empty Icons
export const HiddenEmptyStars = Template.bind({});
HiddenEmptyStars.args = {
  ...VisibleEmptyIcons.args,
  hideEmptyStars: true,
};

// Increase Total Stars
export const IncreaseTotalStars = Template.bind({});
IncreaseTotalStars.args = {
  rating: 8,
  totalStars: 10,
};