import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-navbar');

export default {
  title: 'Components/Navbar',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const navbar = (slot: string) => `
<tnw-navbar-menu
 slot="${slot}"
 items-data='[{"label":"Home","link":"/"},{"label":"About Us","link":"/about"},{"label":"Services","link":"#","subMenu":[{"label":"Web Development","link":"/services/web"},{"label":"Mobile Development","link":"/services/mobile"}]},{"label":"Contact","link":"/contact"}]'
></tnw-navbar-menu>
`;

const button = (slot: string) => `
<tnw-button slot="${slot}" label="Button" border-radius="full"></tnw-button>
`;

const logo = (slot: string) => `
<svg slot="${slot}" width="35px" height="35px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Storybook icon</title><path d="M16.34.24l-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.14L18.65.1l1.33-.1a1.2 1.2 0 0 1 1.28 1.2v21.6A1.2 1.2 0 0 1 20 24l-16.1-.72a1.2 1.2 0 0 1-1.15-1.16L2 2.32a1.2 1.2 0 0 1 1.13-1.27l13.2-.83.01.02zM13.27 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.86-4.89-3.15 0-4.9 1.72-4.9 4.29 0 4.45 6 4.53 6 6.96 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.65-.48-3.77 0-.27 4.03 2.23 5.2 5.1 5.2 2.79 0 4.97-1.49 4.97-4.18 0-4.77-6.1-4.64-6.1-7 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"/></svg>
`;

const Template = (args) => getComponentTemplate(args, component);

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  useStartSlot: true,
  useEndSlot: true,
  burgerMenuPlacement: 'end',
  startSlot: navbar('start'),
  endSlot: button('end'),
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  useStartSlot: true,
  useMiddleSlot: true,
  useEndSlot: true,
  burgerMenuPlacement: 'end',
  startSlot: logo('start'),
  middleSlot: navbar('middle'),
  endSlot: button('end'),
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...WithLogo.args,
  appearance: 'outlined',
  variant: 'auto',
};

export const Underlined = Template.bind({});
Underlined.args = {
  ...WithLogo.args,
  appearance: 'outlined-bottom',
  variant: 'auto',
};

export const RoundedCorners = Template.bind({});
RoundedCorners.args = {
  ...Outlined.args,
  borderRadius: 'full',
};

export const GlassmorphismEffect = Template.bind({});
GlassmorphismEffect.args = {
  ...RoundedCorners.args,
  useGlassMorphism: true,
};