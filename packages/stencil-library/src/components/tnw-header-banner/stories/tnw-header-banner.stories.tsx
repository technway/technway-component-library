import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-header-banner');

export default {
  title: 'Components/Header Banner',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

export const Default = Template.bind({});
Default.args = {
  heading: 'Welcome to Our Website',
  subheading: 'We Create Beautiful Experiences',
  description: 'Our team provides innovative solutions tailored to your needs.',
  buttonLabel: 'Learn More',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Default.args,
  width: 'sm',
  description: 'Our team provides innovative solutions tailored to your needs. Our team provides innovative solutions tailored to your needs. Our team provides innovative solutions tailored to your needs.',
};

export const Centered = Template.bind({});
Centered.args = {
  ...CustomWidth.args,
  alignment: 'center',
};

