import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-footer');

export default {
  title: 'Components/Footer',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Footer with Organization Name and Years
export const Standard = Template.bind({});
Standard.args = {
  startYear: 2010,
  endYear: 'current-year',
  organizationName: 'Your Organization',
  preText: '©',
  centerContent: true,
  postText: 'All Rights Reserved',
};

// Footer with Custom Slot Content
export const WithCustomSlot = Template.bind({});
WithCustomSlot.args = {
  centerContent: true,
  enableSlot: true,
  defaultSlot: `
    <tnw-text text="Custom content inside the footer. You can add any text or elements here." size="xs" color="primary"></tnw-text>
  `,
};

// Footer with Dynamic Years (Both Current Year)
export const DynamicYears = Template.bind({});
DynamicYears.args = {
  ...Standard.args,
  useCurrentYearAsEndYear: true,
};

// Footer with Custom Colors
export const WithCustomColors = Template.bind({});
WithCustomColors.args = {
  ...Standard.args,
  textColor: 'black',
  organizationNameColor: 'secondary',
  backgroundColor: 'white',
  borderTopColor: 'secondary',
};

// Footer with Custom Background and Border Color
export const WithCustomBackgroundAndBorder = Template.bind({});
WithCustomBackgroundAndBorder.args = {
  ...Standard.args,
  textColor: 'white',
  backgroundColor: 'black',
  borderTopColor: 'primary',
};

// Footer with No Slot and Default Content
export const CenterContent = Template.bind({});
CenterContent.args = {
  ...Standard.args,
  centerContent: true,
};