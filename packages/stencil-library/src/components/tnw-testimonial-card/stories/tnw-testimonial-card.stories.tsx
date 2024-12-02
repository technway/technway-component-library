import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-testimonial-card');

export default {
  title: 'Components/Testimonial Card',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'beta', // 'beta', 'stable', 'deprecated', 'releaseCandidate'
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

export const Test = Template.bind({});
Test.args = {
  authorName: "John Doe",
  authorRole: "CEO",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et.",
  useRandomAvatar: true,
  useGlassmorphismEffect: true,
};