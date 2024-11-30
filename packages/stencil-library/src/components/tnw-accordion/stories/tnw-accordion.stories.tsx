import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-accordion');

export default {
  title: 'Components/Accordion',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Accordion (Default Props Values)
export const Standard = Template.bind({});
Standard.args = {
  heading: 'Accordion Item 1',
  content: 'This is the content of the first accordion item.',
};

// Expanded by Default
export const ExpandedByDefault = Template.bind({});
ExpandedByDefault.args = {
  ...Standard.args,
  expand: true,
};

// Accordion with Custom Icon
export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  heading: 'Accordion with Custom Icon',
  content: 'This accordion has a custom expand icon.',
  enableCustomExpandIcon: true,
  disableExpandIconRotate: true,
  expandIconSlot: '<tnw-icon slot="expand-icon" name="tnw-add"></tnw-icon>',
};

// Accordion with No Appearance
export const NoneAppearance = Template.bind({});
NoneAppearance.args = {
  heading: 'No Appearance',
  content: 'This accordion has no appearance.',
  appearance: 'none',
};

// Accordion with No Expand Icon Rotation
export const NoExpandIconRotation = Template.bind({});
NoExpandIconRotation.args = {
  heading: 'Accordion without Icon Rotation',
  content: 'The icon does not rotate when expanded or collapsed.',
  disableExpandIconRotate: true,
};

// Accordion with Custom Body Content
export const CustomBodyContent = Template.bind({});
CustomBodyContent.args = {
  heading: 'Accordion with Custom Body Content',
  bodySlot: `
  <div slot="body">
    <tnw-heading level="h4" text="Hello World"></tnw-heading>
    <tnw-text text="Some other text"></tnw-text>
  </div>
  `,
};