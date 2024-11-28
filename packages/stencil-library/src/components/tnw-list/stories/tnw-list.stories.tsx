import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-list');

export default {
  title: 'Components/List',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard List
export const Standard = Template.bind({});
Standard.args = {
  listDataJson: JSON.stringify([
    { text: 'First item' },
    { text: 'Second item' },
    { text: 'Third item' },
  ]),
  markerType: 'disc',
  markerPosition: 'inside',
};

// List with Icons
export const ListWithIcons = Template.bind({});
ListWithIcons.args = {
  listDataJson: JSON.stringify([
    { text: 'First item', icon: 'tnw-checkmark' },
    { text: 'Second item', icon: 'tnw-checkmark' },
    { text: 'Third item', icon: 'tnw-checkmark' },
  ]),
  markerType: 'none',
  markerPosition: 'inside',
};

// Colored List with Custom Typography
export const ColoredList = Template.bind({});
ColoredList.args = {
  ...Standard.args,
  color: 'primary',
};

// Ordered List with Roman Numerals
export const OrderedRomanList = Template.bind({});
OrderedRomanList.args = {
  listDataJson: JSON.stringify([
    { text: 'Step One' },
    { text: 'Step Two' },
    { text: 'Step Three' },
  ]),
  markerType: 'upper-roman',
};

// Custom Text Case and Line Height
export const CustomTextCaseList = Template.bind({});
CustomTextCaseList.args = {
  ...Standard.args,
  textCase: 'uppercase',
};