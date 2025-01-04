import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-alert');

export default {
  title: 'Components/Alert',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Info Alert
export const Standard = Template.bind({});
Standard.args = {
  alertId: 'alert-info',
  message: 'This is a normal alert.',
};

// Info Alert
export const InfoAlert = Template.bind({});
InfoAlert.args = {
  alertId: 'alert-info',
  message: 'Enter a valid email address.',
  appearanceColor: 'info',
};

// Success Alert
export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  alertId: 'alert-success',
  message: 'Your operation was successful!',
  appearanceColor: 'success',
};

// Warning Alert
export const WarningAlert = Template.bind({});
WarningAlert.args = {
  alertId: 'alert-warning',
  message: 'Please check your inputs before proceeding.',
  appearanceColor: 'warning',
};

// Danger Alert
export const DangerAlert = Template.bind({});
DangerAlert.args = {
  alertId: 'alert-danger',
  message: 'An error occurred. Please try again.',
  appearanceColor: 'danger',
};

// Info Alert With Outlined Appearance
export const InfoOutlinedAppearance = Template.bind({});
InfoOutlinedAppearance.args = {
  ...InfoAlert.args,
  appearance: 'outlined',
};

// Success Alert With Solid Appearance
export const SuccessSolidAppearance = Template.bind({});
SuccessSolidAppearance.args = {
  ...SuccessAlert.args,
  appearance: 'solid',
};

// Danger Alert With Mixed Appearance
export const DangerMixedAppearance = Template.bind({});
DangerMixedAppearance.args = {
  ...DangerAlert.args,
  appearance: 'mixed',
};

// Large Danger Alert
export const LargeDanger = Template.bind({});
LargeDanger.args = {
  ...DangerMixedAppearance.args,
  size: 'lg',
};