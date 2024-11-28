import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-text');

export default {
  title: 'Components/Text',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

export const Standard = Template.bind({});
Standard.args = {
  text: "This placeholder text serves as a temporary filler while you prepare your content. It gives a brief overview or introduction to the subject matter, helping to set the stage for more detailed information. Replace this with your actual content to provide a comprehensive explanation or summary.",
};

export const GrayColor = Template.bind({});
GrayColor.args = {
  ...Standard.args,
  color: "gray500"
};

export const mediumSize = Template.bind({});
mediumSize.args = {
  ...Standard.args,
  size: "md"
};

export const SmallLineHeight = Template.bind({});
SmallLineHeight.args = {
  ...Standard.args,
  lineHeight: "1_25"
};

export const Bold = Template.bind({});
Bold.args = {
  ...Standard.args,
  weight: "600"
};