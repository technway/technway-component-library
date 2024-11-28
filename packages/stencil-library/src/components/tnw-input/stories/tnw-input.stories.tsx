import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-input');

export default {
  title: 'Components/Input',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Input Field
export const Standard = Template.bind({});
Standard.args = {
  label: 'Full Name',
  inputId: 'input-fullname',
  placeholder: 'Enter your full name',
  type: 'text',
  isRequired: true,
};

// Input with Help Text
export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  label: 'Email Address',
  inputId: 'input-email',
  placeholder: 'Enter your email address',
  type: 'email',
  helpText: 'We will not share your email with anyone.',
  autoComplete: 'email',
};

// Input with Validation Error
export const InputWithError = Template.bind({});
InputWithError.args = {
  label: 'Username',
  inputId: 'input-username',
  placeholder: 'Choose a username',
  type: 'text',
  alert: 'This username is already taken.',
  alertType: 'danger',
  isInvalid: true,
  autoComplete: 'off',
};

// Password Input with Success Alert
export const PasswordInputWithSuccess = Template.bind({});
PasswordInputWithSuccess.args = {
  label: 'Password',
  inputId: 'input-password',
  placeholder: 'Enter your password',
  type: 'password',
  alert: 'Your password is strong!',
  alertType: 'success',
  isRequired: true,
  autoComplete: 'current-password',
};

// Input with Underlined Variant
export const UnderlinedInput = Template.bind({});
UnderlinedInput.args = {
  label: 'Phone Number',
  inputId: 'input-phone',
  placeholder: 'Enter your phone number',
  type: 'tel',
  variant: 'underlined',
  borderRadius: 'none',
  autoComplete: 'tel',
};

// Input with Underlined Variant
export const FullRounded = Template.bind({});
FullRounded.args = {
  ...Standard.args,
  inputId: 'input-full-rounded',
  borderRadius: 'full',
};

// Input with Hidden Label (SrOnly)
export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  ...Standard.args,
  inputId: 'input-hidden-label',
  isLabelSrOnly: true,
};