import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-section');

export default {
  title: 'Components/Section',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Section Example
export const Standard = Template.bind({});
Standard.args = {
  headerSlot: `
    <tnw-heading slot="header" text="Section Header" size="lg" color="primary"></tnw-heading>
  `,
  bodySlot: `
    <tnw-text slot="body" text="This is the main content of the section. It uses tnw-text for body content." size="md"></tnw-text>
  `,
  footerSlot: `
    <tnw-button slot="footer" label="Click Me"></tnw-button>
  `,
};

// Section with Glassmorphism Effect
export const WithGlassmorphism = Template.bind({});
WithGlassmorphism.args = {
  ...Standard.args,
  useGlassmorphismEffect: true,
};

// Section with Solid Appearance and Custom Content
export const SolidAppearance = Template.bind({});
SolidAppearance.args = {
  appearance: 'solid',
  variant: 'primary',
  headerSlot: `
    <tnw-heading slot="header" text="Solid Appearance Header" size="lg" color="white"></tnw-heading>
  `,
  bodySlot: `
    <tnw-text slot="body" text="This is a section with a solid primary background appearance." size="md" color="white"></tnw-text>
  `,
  footerSlot: `
    <tnw-button slot="footer" label="Get Started" variant="white"></tnw-button>
  `,
};

// Section with Transparent Appearance
export const Centered = Template.bind({});
Centered.args = {
  ...Standard.args,
  alignment: 'center',
};

// Section with Custom Padding and Margin
export const CustomPaddingAndMargin = Template.bind({});
CustomPaddingAndMargin.args = {
  padding: '2xl',
  margin: 'lg',
  headerSlot: `
    <tnw-heading slot="header" text="Custom Padding and Margin" size="lg" color="primary"></tnw-heading>
  `,
  bodySlot: `
    <tnw-text slot="body" text="This section has custom padding and margin settings." size="md"></tnw-text>
  `,
  footerSlot: `
    <tnw-button slot="footer" label="Contact Us"></tnw-button>
  `,
};

// First Section Example
export const FirstSection = Template.bind({});
FirstSection.args = {
  isFirstSection: true,
  headerSlot: `
    <tnw-heading slot="header" text="First Section Header" size="lg" color="primary"></tnw-heading>
  `,
  bodySlot: `
    <tnw-text slot="body" text="This is the first section of the page." size="md"></tnw-text>
  `,
  footerSlot: `
    <tnw-button slot="footer" label="Get Started"></tnw-button>
  `,
};

// Last Section Example
export const LastSection = Template.bind({});
LastSection.args = {
  isLastSection: true,
  headerSlot: `
    <tnw-heading slot="header" text="Last Section Header" size="lg" color="primary"></tnw-heading>
  `,
  bodySlot: `
    <tnw-text slot="body" text="This is the last section of the page." size="md"></tnw-text>
  `,
  footerSlot: `
    <tnw-button slot="footer" label="Finish"></tnw-button>
  `,
};
