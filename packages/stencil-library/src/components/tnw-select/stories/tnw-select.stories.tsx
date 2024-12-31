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
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Dragon Fruit', value: 'dragon-fruit' },
    { label: 'Elderberry', value: 'elderberry' },
    { label: 'Fig', value: 'fig' },
    { label: 'Grape', value: 'grape' },
    { label: 'Honeydew Melon', value: 'honeydew-melon' },
    { label: 'Indian Fig', value: 'indian-fig' },
    { label: 'Jackfruit', value: 'jackfruit' },
  ]),
  label: 'Choose a fruit',
};

// Long Label
export const LongLabel = Template.bind({});
LongLabel.args = {
  ...Standard.args,
  label: "Select a fruit from the list with an excessively long label to test overflow handling",
};

// Preselected Option
export const PreselectedOption = Template.bind({});
PreselectedOption.args = {
  ...Standard.args,
  optionsDataJson: JSON.stringify([
    { label: 'Option 1', value: '1', selected: true },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]),
};

// Select with Border Radius
export const WithBorderRadius = Template.bind({});
WithBorderRadius.args = {
  ...Standard.args,
  borderRadius: 'xl',
};

// Select with Custom Label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Bird', value: 'bird' },
  ]),
  label: 'Select your favorite pet',
};

// Select with Icon Name Variant
export const WithIconName = Template.bind({});
WithIconName.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Home', value: 'home', iconName: 'tnw-home' },
    { label: 'Settings', value: 'settings', iconName: 'tnw-settings' },
    { label: 'Profile', value: 'profile', iconName: 'tnw-user', disabled: true },
  ]),
  label: 'Choose an action',
  variant: 'withIconName',
};

// Select with SVG Icon Variant
export const WithSvgIcon = Template.bind({});
WithSvgIcon.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Save', value: 'save', svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"/></svg>' },
    { label: 'Delete', value: 'delete', svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6zm-6-4a2 2 0 0 1 2 2a1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2z"/></svg>' },
    { label: 'Edit', value: 'edit', svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.925 3.137a3.027 3.027 0 0 0-4.283.001l-9.507 9.52a3.03 3.03 0 0 0-.885 2.139V18c0 .414.336.75.75.75h3.223c.803 0 1.573-.32 2.14-.887l9.5-9.506a3.03 3.03 0 0 0 0-4.28zM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"/></svg>', disabled: true },
  ]),
  label: 'Select an action with SVG icons',
  variant: 'withSvgIcon',
};

// Select with Image Variant
export const WithImage = Template.bind({});
WithImage.args = {
  optionsDataJson: JSON.stringify([
    { label: 'John Doe', value: 'john', imageSource: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { label: 'Jane Smith', value: 'jane', imageSource: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { label: 'Chris Brown', value: 'chris', imageSource: 'https://randomuser.me/api/portraits/men/20.jpg' },
  ]),
  label: 'Select a contact',
  variant: 'withImage',
};

export const WithImageBordered = Template.bind({});
WithImageBordered.args = {
  optionsDataJson: JSON.stringify([
    { label: 'John Doe', value: 'john', imageSource: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { label: 'Jane Smith', value: 'jane', imageSource: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { label: 'Chris Brown', value: 'chris', imageSource: 'https://randomuser.me/api/portraits/men/20.jpg' },
  ]),
  label: 'Select a contact',
  variant: 'withImage',
  optionAppearance: 'bordered',
};

// Select with Status Variant
export const WithStatus = Template.bind({});
WithStatus.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Online', value: 'online', status: 'success' },
    { label: 'Offline', value: 'offline', status: 'danger' },
    { label: 'Away', value: 'away', status: 'warning' },
  ]),
  label: 'Select a status',
  variant: 'withStatus',
};
// Select with Status Variant
export const WithStatusBordered = Template.bind({});
WithStatusBordered.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Online', value: 'online', status: 'success' },
    { label: 'Offline', value: 'offline', status: 'danger' },
    { label: 'Away', value: 'away', status: 'warning' },
  ]),
  label: 'Select a status',
  variant: 'withStatus',
  optionAppearance: 'bordered',
};

// Select with Bordered Option Appearance
export const BorderedOptionAppearance = Template.bind({});
BorderedOptionAppearance.args = {
  ...Standard.args,
  optionAppearance: 'bordered',
};

// Select with Disabled Option
export const DisabledOption = Template.bind({});
DisabledOption.args = {
  optionsDataJson: JSON.stringify([
    { label: 'Enabled Option', value: 'enabled' },
    { label: 'Disabled Option', value: 'disabled', disabled: true },
  ]),
  label: 'Select an option',
};
