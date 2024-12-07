import { generateComponentArgTypes, getComponentByTagName } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-footer');

export default {
  title: 'Components/Footer',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = () => `
<tnw-footer
  footer-data='{
    "brand": { "logo": "logo.png", "name": "Technway" },
    "links": {
      "heading": "Useful Links",
      "items": [
        { "label": "About Us", "url": "/about" },
        { "label": "Services", "url": "/services" },
        { "label": "Portfolio", "url": "/portfolio" }
      ]
    },
    "contact": {
      "heading": "Contact",
      "email": "contact@techway.biz",
      "phone": "00967 73xxxxxx"
    },
    "socialmedia": [
      { "iconName": "tnw-github", "url": "https://github.com" },
      { "iconName": "tnw-linkedin", "url": "https://linkedin.com" },
      { "iconName": "tnw-facebook", "url": "https://facebook.com" }
    ],
    "newsletter": {
      "heading": "Stay in the Loop. Join Our Newsletter!",
      "description": "Get the latest updates, offers, and blogs in your inbox.",
      "placeholder": "Enter Your Email",
      "buttonText": "Subscribe"
    }
  }'
  background-color="light"
  heading-color="primary"
  text-color="dark"
  center-content="true"
>
</tnw-footer>
`;

export const Standard = Template.bind({});
Standard.args = {};