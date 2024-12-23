import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-heading');

export default {
  title: 'Components/Heading',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

export const Standard = Template.bind({});
Standard.args = {
  text: "Section Title: Quick Overview on Why Using Stencil.js to Build a Scalable Component Library",
};

export const HeadingOne = Template.bind({});
HeadingOne.args = {
  text: "Main Page Heading: Welcome to the Future of CDD with Stencil.js",
  level: "h1"
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  text: "Primary Title: Using Primary Color",
  color: "primary",
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  text: "Uppercase Title",
  textCase: "uppercase"
};

export const MassiveTitle = Template.bind({});
MassiveTitle.args = {
  text: "Massive Title: When Size Matters Use This",
  size: "6xl"
};

export const SmallBoldTitle = Template.bind({});
SmallBoldTitle.args = {
  text: "Small Title: Perfect for Subtle Section Headings",
  size: "sm",
  weight: "700"
};

export const HighlighText = Template.bind({});
HighlighText.args = {
  text: "Highlighted Title: This is Important",
  weight: "400",
  highlight: "Important",
  highlightTag: "mark"
};