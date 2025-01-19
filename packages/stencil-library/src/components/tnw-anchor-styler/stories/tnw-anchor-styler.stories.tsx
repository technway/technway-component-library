import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-anchor-styler');

export default {
  title: 'Components/Anchor Styler',
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
Standard.args = {
  defaultSlot: '<a href="https://www.google.com">Google</a>',
};

export const WithNewTabIcon = Template.bind({});
WithNewTabIcon.args = {
  ...Standard.args,
  enableNewTabIcon: true,
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  ...Standard.args,
  color: 'primary',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  ...Standard.args,
  size: 'lg',
};

export const NoTextDecoration = Template.bind({});
NoTextDecoration.args = {
  ...Standard.args,
  textDecoration: 'none',
};

export const LineThroughTextDecoration = Template.bind({});
LineThroughTextDecoration.args = {
  ...Standard.args,
  textDecoration: 'line-through',
};
