import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-list');

export default {
  title: 'Components/List',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Example JSON data
const listDataJson = JSON.stringify({
  listTag: "ul",
  markerType: "circle",
  items: [
    {
      text: "Introduction",
      iconName: "tnw-folder",
      url: "https://example.com/introduction",
      newTab: true,
    },
    {
      text: "Features",
      iconName: "tnw-star",
      subListItems: {
        listTag: "ol",
        items: [
          {
            text: "Feature 1: Customizable",
            iconName: "tnw-gear",
            url: "https://example.com/feature1",
            newTab: false,
          },
          {
            text: "Feature 2: Responsive",
            iconName: "tnw-device",
            subListItems: {
              listTag: "ul",
              items: [
                {
                  text: "Mobile Friendly",
                  iconName: "tnw-mobile",
                },
                {
                  text: "Cross-browser Support",
                  iconName: "tnw-browser",
                },
              ],
            },
          },
        ],
      },
    },
    {
      text: "Download Resources",
      iconName: "tnw-download",
      subListItems: {
        listTag: "ul",
        items: [
          {
            text: "Documentation",
            iconName: "tnw-document",
            url: "https://example.com/docs",
          },
          {
            text: "Source Code",
            iconName: "tnw-code",
            url: "https://example.com/source",
            newTab: true,
          },
        ],
      },
    },
    {
      text: "Contact Us",
      iconName: "tnw-envelope",
      url: "mailto:contact@example.com",
    },
  ],
});

// **Standard List**
export const Standard = Template.bind({});
Standard.args = {
  listDataJson: listDataJson,
  markerPosition: 'inside',
};

// **List with Different Markers**
export const WithSquareMarkers = Template.bind({});
WithSquareMarkers.args = {
  listDataJson: listDataJson,
  markerPosition: 'inside',
};

// **List with Custom Colors**
export const CustomColors = Template.bind({});
CustomColors.args = {
  listDataJson: listDataJson,
  color: 'primary', // Example using primary color
  size: 'md',
};

// **List with Nested Structure**
export const NestedList = Template.bind({});
NestedList.args = {
  listDataJson: listDataJson,
  markerPosition: 'outside',
};
