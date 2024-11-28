import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-divider');

export default {
  title: 'Components/Divider',
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

export const Dashed = Template.bind({});
Dashed.args = {
  variant: 'dashed',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};
