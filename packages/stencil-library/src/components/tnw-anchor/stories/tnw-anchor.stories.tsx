import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-anchor');

export default {
  title: 'Components/Anchor',
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
  href: 'https://technway.biz',
  text: 'Go to Technway Website',
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  ...Standard.args,
  color: 'primary',
};

export const OpenInNewTab = Template.bind({});
OpenInNewTab.args = {
  ...Standard.args,
  newTab: true,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  ...Standard.args,
  text: "",
  defaultSlot: `<img src="https://via.placeholder.com/150" alt="Placeholder Image" />`,
}