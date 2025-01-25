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

export const ButtonInside = Template.bind({});
ButtonInside.args = {
  variant: 'button-inside',
};

export const ButtonInsideFullRounded = Template.bind({});
ButtonInsideFullRounded.args = {
  ...ButtonInside.args,
  borderRadius: 'full',
};