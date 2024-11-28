import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-accordion-group');

export default {
  title: 'Components/Accordion Group',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Standard Accordion Group with Multiple Items Toggle Ability
export const Standard = Template.bind({});
Standard.args = {
  singleExpand: false,
  defaultSlot: `
    \na
    \n
    <tnw-accordion 
      heading="Accordion Item 1" 
      content="This is the content for the first item." 
      appearance="underlined">
    </tnw-accordion>
    <tnw-accordion 
      heading="Accordion Item 2" 
      content="This is the content for the second item." 
      appearance="underlined">
    </tnw-accordion>
    <tnw-accordion 
      heading="Accordion Item 3" 
      content="This is the content for the third item." 
      appearance="underlined">
    </tnw-accordion>
    \na
    \n
  `,
};

// Accordion Group with Single Expand Mode
export const SingleExpand = Template.bind({});
SingleExpand.args = {
  ...Standard.args,
  singleExpand: true,
};

// Default Expanded Accordion
export const defaultExpandedAccordion = Template.bind({});
defaultExpandedAccordion.args = {
  ...Standard.args,
  singleExpand: true,
  defaultSlot: `
    <tnw-accordion 
      heading="Accordion Item 1" 
      content="This is the content for the first item." 
      appearance="underlined"
      expand>
    </tnw-accordion>
    <tnw-accordion 
      heading="Accordion Item 2" 
      content="This is the content for the second item." 
      appearance="underlined">
    </tnw-accordion>
    <tnw-accordion 
      heading="Accordion Item 3" 
      content="This is the content for the third item." 
      appearance="underlined">
    </tnw-accordion>
  `,
}