import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-card');

export default {
  title: 'Components/Card',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const VerticalTemplate = (args) => getComponentTemplate(args, component, true, "1000px");
const HorizontalTemplate = (args) => getComponentTemplate(args, component, true);

// Default Card Example
export const Default = HorizontalTemplate.bind({});
Default.args = {
  imageSrc: 'https://picsum.photos/512/288',
  heading: 'Card Heading',
  subheading: 'Card Subheading',
  description: 'This is a description of the card. It provides additional details about the content.',
  buttonLabel: 'Click Me',
};

// Horizontal Layout Card
export const HorizontalLayout = VerticalTemplate.bind({});
HorizontalLayout.args = {
  ...Default.args,
  layout: 'horizontal',
};

// 
export const itemsCenter = VerticalTemplate.bind({});
itemsCenter.args = {
  ...HorizontalLayout.args,
  itemsAlignment: 'center',
};

// Card with Content First
export const ContentFirst = HorizontalTemplate.bind({});
ContentFirst.args = {
  imageSrc: 'https://via.placeholder.com/300x200',
  heading: 'Card Heading',
  subheading: 'Card Subheading',
  description: 'This is a description of the card. It provides additional details about the content.',
  orderContentFirst: true,
};

// Card without Image
export const WithoutImage = HorizontalTemplate.bind({});
WithoutImage.args = {
  heading: 'Card Without Image',
  description: 'This card does not include an image, focusing on the content only.',
  buttonLabel: 'Contact Us',
};

// Card with Outlined Appearance
export const OutlinedAppearance = HorizontalTemplate.bind({});
OutlinedAppearance.args = {
  ...Default.args,
  appearance: 'outlined',
  appearanceColor: 'auto',
  padding: 'sm',
};

// Card with Solid Appearance
export const SolidAppearance = HorizontalTemplate.bind({});
SolidAppearance.args = {
  imageSrc: 'https://via.placeholder.com/300x200',
  heading: 'Card Heading',
  subheading: 'Card Subheading',
  description: 'This is a description of the card. It provides additional details about the content.',
  buttonSlot: `<tnw-button slot="button" label="Button" appearance-color="white"></tnw-button>`,
  appearance: 'solid',
  appearanceColor: 'inverse',
  padding: 'sm',
};

// Card with rounded corners
export const RoundedCorners = HorizontalTemplate.bind({});
RoundedCorners.args = {
  ...OutlinedAppearance.args,
  borderRadius: "lg",
};

// Card with Larger Image
export const LargerImage = VerticalTemplate.bind({});
LargerImage.args = {
  ...OutlinedAppearance.args,
  layout: "horizontal",
  largerImage: true,
};

export const BlogPost = HorizontalTemplate.bind({});
BlogPost.args = {
  imageSrc: 'https://picsum.photos/512/288',
  heading: 'Agile Project Management: Tips for Effective Team Collaboration',
  description: 'Agile project management has become increasingly popular in recent years as more and more organizations recognize the value of a flexible, collaborative approach to project management. One of the key components of agile project management is effective team collaboration. In this article, we will provide some tips for achieving effective team collaboration in an agile project management context.',
  badgeLabel: 'Project Management',
  date: 'March 2023',
  buttonLabel: 'Read More',
  layout: "vertical",
  spacing: 'md',
  contentSpacing: 'md',
  buttonRadius: 'full'
};

// With Large Image
export const WithLargeImage = HorizontalTemplate.bind({});
WithLargeImage.args = {
  ...BlogPost.args,
  layout: "horizontal",
  largerImage: true,
};

// Test
export const TestImageSlot = HorizontalTemplate.bind({});
TestImageSlot.args = {
  heading: 'Some Heading',
  description: 'Some Description',
  appearance: 'outlined',
  appearanceColor: 'light',
  padding: 'sm',
  spacing: 'md',
  useGlassmorphismEffect: true,
  imageSlot: `<tnw-image
                  src="https://picsum.photos/400/200"
                  alt="Some Alt"
                  objectFit="cover"
                  slot="image"
              ></tnw-image>`
};