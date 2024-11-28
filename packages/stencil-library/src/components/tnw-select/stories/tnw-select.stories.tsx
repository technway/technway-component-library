import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-select');

export default {
  title: 'Components/Select',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Select
export const Standard = Template.bind({});
Standard.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ]),
  label: 'Choose an option',
};

// Select with Preselected Option
export const PreselectedOption = Template.bind({});
PreselectedOption.args = {
  ...Standard.args,
  defaultOption: '2',
};

// Select with Border Radius
export const WithBorderRadius = Template.bind({});
WithBorderRadius.args = {
  ...Standard.args,
  borderRadius: 'lg',
};

// Select with Custom Label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Custom Option A', value: 'a' },
    { label: 'Custom Option B', value: 'b' },
    { label: 'Custom Option C', value: 'c' },
  ]),
  label: 'Select a Custom Option',
};

// Select with Keyboard Navigation
export const KeyboardNavigation = Template.bind({});
KeyboardNavigation.args = {
  ...Standard.args,
};

// Select with Disabled Option
export const DisabledOption = Template.bind({});
DisabledOption.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Enabled Option', value: '1' },
    { label: 'Disabled Option', value: '2', disabled: true },
  ]),
  label: 'Select an option',
};
