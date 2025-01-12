import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-copyrights-footer');

export default {
  title: 'Components/Copyrights Footer',
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

// Links Data Story
export const WithLinksCentered = Template.bind({});
WithLinksCentered.args = {
  ...Standard.args,
  linksDataJson: JSON.stringify([
    { text: 'Link 1', url: 'https://www.google.com' },
    { text: 'Link 2', url: 'https://www.google.com' },
    { text: 'Link 3', url: 'https://www.google.com', newTab: true },
  ]),
};
export const WithLinksData = Template.bind({});
WithLinksData.args = {
  ...WithLinksCentered.args,
  centerContent: false,
};

// Use Custom Slots Story
export const WithCustomSlots = Template.bind({});
WithCustomSlots.args = {
  copyrightsSlot: `
    <tnw-text slot="copyrights" text="Custom content inside the footer. You can add any text or elements here." size="xs" color="primary"></tnw-text>
  `,
  useCustomLinks: true,
  linksLength: 2,
  link1Slot: `
    <tnw-text text="Link 1" size="xs" color="primary" slot="link-1"></tnw-text>
  `,
  link2Slot: `
    <tnw-text text="Link 2" size="xs" color="primary" slot="link-2"></tnw-text>
  `,
};