import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-subscription-form');

export default {
  title: 'Components/Subscription Form',
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
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const SecondaryFullRounded = Template.bind({});
SecondaryFullRounded.args = {
  ...Secondary.args,
  borderRadius: 'full',
};