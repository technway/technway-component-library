import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-contact-banner');

export default {
  title: 'Components/Contact Banner',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Default Contact Banner
export const Default = Template.bind({});
Default.args = {
  shortTitleSlot: '<tnw-text slot="subtitle" text="for free!" text-tag="span" size="xs"></tnw-text>',
  titleSlot: '<tnw-heading slot="title" text="Get in Touch"></tnw-heading>',
  descriptionSlot: '<tnw-text slot="description" text="We are here to help you with any questions or concerns. Reach out to us for assistance." size="md"></tnw-text>',
  buttonSlot: '<tnw-button slot="button" label="Contact Us" variant="white"></tnw-button>',
};

// Contact Banner with Alignment Start
export const AlignmentStart = Template.bind({});
AlignmentStart.args = {
  ...Default.args,
  alignment: 'start',
};

// Contact Banner with Outline Appearance
export const OutlinedAppearance = Template.bind({});
OutlinedAppearance.args = {
  appearance: 'outlined',
  titleSlot: '<tnw-heading slot="title" text="Need Assistance?"></tnw-heading>',
  descriptionSlot: '<tnw-text slot="description" text="We are here to provide 24/7 support for your business needs."></tnw-text>',
  buttonSlot: '<tnw-button slot="button" label="Get Help"></tnw-button>',
};

export const InverseVariant = Template.bind({});
InverseVariant.args = {
  ...Default.args,
  variant: "inverse",
};

// Contact Banner with Custom Content Slot
// export const CustomContent = Template.bind({});
// CustomContent.args = {
//   enableContentSlot: true,
//   contentSlot: `<div slot="content">
//                   <tnw-text text="For all your unique support requests, we offer tailored solutions. Get in touch for more information."></tnw-text>
//                   <tnw-button label="Learn More" variant="white"></tnw-button>
//                 </div>`,
// };