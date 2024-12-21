import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-textarea');

export default {
  title: 'Components/Textarea',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Textarea
export const Standard = Template.bind({});
Standard.args = {
  textareaId: 'textarea1',
  label: 'Enter your text:',
  placeholder: 'Type here...',
  rows: 5,
};

// Textarea with Border Radius
export const WithBorderRadius = Template.bind({});
WithBorderRadius.args = {
  textareaId: 'textarea2',
  label: 'Rounded textarea:',
  placeholder: 'Type here...',
  rows: 5,
  borderRadius: 'lg',
};

// Disabled Textarea
export const Disabled = Template.bind({});
Disabled.args = {
  textareaId: 'textarea3',
  label: 'Disabled textarea:',
  placeholder: 'You cannot type here...',
  rows: 5,
  disabled: true,
};

// Textarea with Error Alert
export const WithErrorAlert = Template.bind({});
WithErrorAlert.args = {
  textareaId: 'textarea4',
  label: 'Invalid input:',
  placeholder: 'Type here...',
  rows: 5,
  isInvalid: true,
  alert: 'This input is invalid.',
  alertType: 'danger',
};

// Textarea with Help Text
export const WithHelpText = Template.bind({});
WithHelpText.args = {
  textareaId: 'textarea5',
  label: 'Textarea with help:',
  placeholder: 'Type here...',
  rows: 5,
  helpText: 'This is some helpful text.',
};

// Textarea with Maxlength
export const WithMaxlength = Template.bind({});
WithMaxlength.args = {
  textareaId: 'textarea6',
  label: 'Limited characters:',
  placeholder: 'Type here...',
  rows: 5,
  maxlength: 50,
};

// Textarea with Vertical Resize
export const VerticalResize = Template.bind({});
VerticalResize.args = {
  ...Standard.args,
  textareaId: 'textarea7',
  resize: 'vertical',
};

// Textarea with Hidden Label (SrOnly)
export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  ...Standard.args,
  textareaId: 'textarea8',
  isLabelSrOnly: true,
};

// Textarea with initially sanitized value
export const SanitizedValue = Template.bind({});
SanitizedValue.args = {
  ...Standard.args,
  sanitizeTextarea: true,
  value: "'; DROP TABLE users; --",
};

// Textarea without initially not sanitized value
export const NotSanitizedValue = Template.bind({});
NotSanitizedValue.args = {
  ...Standard.args,
  value: "'; DROP TABLE users; --",
};