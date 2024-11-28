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
  variant: 'primary',
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

// Badge with No Label (Slot-based Content)
export const IconOnlyBadge = Template.bind({});
IconOnlyBadge.args = {
  label: '',
  defaultSlot: `<i>🚀</i>`,
};

export const NumberBadge = Template.bind({});
NumberBadge.args = {
  label: 99,
};