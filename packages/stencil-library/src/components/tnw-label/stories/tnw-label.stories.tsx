import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-label');

export default {
  title: 'Components/Label',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Label
export const Standard = Template.bind({});
Standard.args = {
  text: 'Full Name',
};

// Label with Custom Font Weight
export const BoldLabel = Template.bind({});
BoldLabel.args = {
  ...Standard.args,
  weight: '700',
};

// Label with Text Transform
export const UppercaseLabel = Template.bind({});
UppercaseLabel.args = {
  ...Standard.args,
  textCase: 'uppercase',
};

// Label with Different Font Size
export const LargeLabel = Template.bind({});
LargeLabel.args = {
  ...Standard.args,
  size: 'lg',
};

// Label with Different Color
export const ColoredLabel = Template.bind({});
ColoredLabel.args = {
  ...Standard.args,
  color: 'primary',
};
