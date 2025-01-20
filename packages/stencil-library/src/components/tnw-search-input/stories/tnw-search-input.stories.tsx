import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-search-input');

export default {
  title: 'Components/Search Input',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'beta', // 'beta', 'stable', 'deprecated', 'releaseCandidate'
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

export const Standard = Template.bind({});
Standard.args = {};

export const Expandable = Template.bind({});
Expandable.args = {
  ...Standard.args,
  variant: 'expandable',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  ...Standard.args,
  variant: 'icon-left',
};

export const IconRight = Template.bind({});
IconRight.args = {
  ...Standard.args,
  variant: 'icon-right',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Standard.args,
  variant: 'no-icon',
};

export const FullRounded = Template.bind({});
FullRounded.args = {
  ...Standard.args,
  borderRadius: 'full'
}

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Standard.args,
  width: '300px'
}
