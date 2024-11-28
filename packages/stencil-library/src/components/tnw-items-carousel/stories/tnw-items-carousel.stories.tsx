import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-items-carousel');

export default {
  title: 'Components/Items Carousel',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

const slideHtml = (slot: string) => `
<tnw-image slot="${slot}" src="https://via.placeholder.com/600?text=Placeholder+Image" width-size="full" height-size="sm"></tnw-image>
`;

// Default Carousel
export const Default = Template.bind({});
Default.args = {
  slidesCount:  7,
  slide1Slot: slideHtml('slide-1'),
  slide2Slot: slideHtml('slide-2'),
  slide3Slot: slideHtml('slide-3'),
  slide4Slot: slideHtml('slide-4'),
  slide5Slot: slideHtml('slide-5'),
  slide6Slot: slideHtml('slide-6'),
  slide7Slot: slideHtml('slide-7'),
};

// Carousel without Shadows
export const widthEdgesShadows = Template.bind({});
widthEdgesShadows.args = {
  ...Default.args,
  showEdgesShadows: true,
};