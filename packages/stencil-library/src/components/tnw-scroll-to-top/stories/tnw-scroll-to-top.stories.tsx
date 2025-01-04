import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-scroll-to-top');

export default {
  title: 'Components/Scroll To Top',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Default Scroll To Top
export const Standard = Template.bind({});
Standard.args = {};

// Small Scroll To Top
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

// Large Scroll To Top
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

// Scroll To Top with Different Color
export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  appearanceColor: 'secondary',
  appearance: 'outlined',
};

// Scroll To Top with Custom Icon
export const CustomIcon = Template.bind({});
CustomIcon.args = {
  customIconName: 'tnw-heart',
};

// Scroll To Top with Custom SVG
export const CustomSvgIcon = Template.bind({});
CustomSvgIcon.args = {
  enableCustomSvgIcon: true,
  iconSvgSlot: `
    <svg slot="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  `,
};

// Scroll To Top with Black Variant
export const CircledBlack = Template.bind({});
CircledBlack.args = {
  borderRadius: 'circle',
  appearanceColor: 'black',
};
