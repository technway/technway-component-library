import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-icon');

export default {
  title: 'Components/Icon',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Icon
export const Standard = Template.bind({});
Standard.args = {
  name: 'tnw-code',
  tooltip: 'Code icon',
};

// Primary Color Icon
export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  ...Standard.args,
  color: 'primary',
};

// Icon with Different Sizes
export const IconSizes = Template.bind({});
IconSizes.args = {
  name: 'tnw-mute',
  size: 'lg',
  tooltip: 'Mute icon',
};

// Icon with Different Appearances
export const IconWithAppearance = Template.bind({});
IconWithAppearance.args = {
  name: 'tnw-search',
  appearance: 'outlined',
  variant: 'warning',
  tooltip: 'Search icon',
};

// Icon with Border Radius
export const IconWithBorderRadius = Template.bind({});
IconWithBorderRadius.args = {
  name: 'tnw-heart',
  borderRadius: 'lg',
  appearance: "solid",
  variant: 'inverse',
  color: 'inverse',
  tooltip: 'Heart icon with border radius',
};

// Icon with SVG
export const SvgIcon = Template.bind({});
SvgIcon.args = {
  enableSvg: true,
  tooltip: 'Custom SVG icon',
  labelAria: 'Custom SVG icon',
  svgSlot: `<svg slot="svg" viewBox="0 0 24 24" id="plus" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M12,20a1,1,0,0,1-1-1V13H5a1,1,0,0,1,0-2h6V5a1,1,0,0,1,2,0v6h6a1,1,0,0,1,0,2H13v6A1,1,0,0,1,12,20Z" style="fill: rgb(0, 0, 0);"></path></svg>`,
};

// Icon with Button Role
export const IconButton = Template.bind({});
IconButton.args = {
  name: 'tnw-close',
  isButton: true,
  tooltip: 'Close button',
};

// Hidden Icon from Screen Readers
export const HiddenIcon = Template.bind({});
HiddenIcon.args = {
  ...Standard.args,
  hiddenAria: true,
};
