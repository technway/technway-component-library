import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-button');

export default {
  title: 'Components/Button',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Button
export const Standard = Template.bind({});
Standard.args = {
  label: 'Click Me',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
  ...Standard.args,
  appearanceColor: "light",
};

// Button with Different Appearances
export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  appearance: 'outlined',
};

// Small Button
export const SmallSize = Template.bind({});
SmallSize.args = {
  ...Standard.args,
  size: 'sm',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  label: 'Add to Cart',
  iconStartSlot: '<tnw-icon slot="icon-start" name="tnw-shopping-cart-2" color="white"></tnw-icon>',
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  label: 'Read More',
  iconEndSlot: '<tnw-icon slot="icon-end" name="tnw-arrow-right" color="white"></tnw-icon>',
};

// Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const solidHoverAppearance = Template.bind({});
solidHoverAppearance.args = {
  ...Outlined.args,
  iconEndSlot: '<tnw-icon slot="icon-end" name="tnw-arrow-right" color="auto"></tnw-icon>',
  hoverAppearance: "solid",
};

export const FullRounded = Template.bind({});
FullRounded.args = {
  ...Standard.args,
  borderRadius: 'full',
};

// Button as Link
export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  label: 'Go to Example',
  href: 'https://example.com',
  newTab: true,
};

// Large Button
export const LargeSize = Template.bind({});
LargeSize.args = {
  ...Standard.args,
  size: 'lg',
};