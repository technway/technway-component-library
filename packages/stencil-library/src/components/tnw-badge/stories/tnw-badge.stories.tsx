import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-badge');

export default {
  title: 'Components/Badge',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Default Badge
export const Standard = Template.bind({});
Standard.args = {
  label: 'New',
};

// Badge with Outline Appearance
export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  ...Standard.args,
  appearanceColor: 'primary',
  appearance: 'outlined',
};

// Badge with Different Sizes
export const SmallBadge = Template.bind({});
SmallBadge.args = {
  ...Standard.args,
  size: 'sm',
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
  ...Standard.args,
  size: 'lg',
};

export const NumericBadge = Template.bind({});
NumericBadge.args = {
  variant: 'numeric',
  label: "asdasd",
  size: 'md',
};

export const NumericBadge2 = Template.bind({});
NumericBadge2.args = {
  variant: 'numeric',
  label: 6,
  appearance: 'solid',
  appearanceColor: 'primary'
};

export const StatusBadge = Template.bind({});
StatusBadge.args = {
  variant: 'status',
  appearance: 'solid',
  appearanceColor: 'success',
};

export const ImageBadge = Template.bind({});
ImageBadge.args = {
  variant: 'image',
  imageSrc: 'https://randomuser.me/api/portraits/men/10.jpg',
};