import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

// Get the tnw-header component
const component = getComponentByTagName('tnw-header');

export default {
  title: 'Components/Header',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

// Navbar configuration to use within the header stories
const navbar = (isSticky: boolean = false) => `
  <tnw-navbar slot="navbar" use-start-slot use-middle-slot use-end-slot burger-menu-placement="end" ${isSticky ? 'sticky' : ''} disable-internal-container>
    <svg slot="start" width="35px" height="35px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Storybook icon</title><path d="M16.34.24l-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.14L18.65.1l1.33-.1a1.2 1.2 0 0 1 1.28 1.2v21.6A1.2 1.2 0 0 1 20 24l-16.1-.72a1.2 1.2 0 0 1-1.15-1.16L2 2.32a1.2 1.2 0 0 1 1.13-1.27l13.2-.83.01.02zM13.27 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.86-4.89-3.15 0-4.9 1.72-4.9 4.29 0 4.45 6 4.53 6 6.96 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.65-.48-3.77 0-.27 4.03 2.23 5.2 5.1 5.2 2.79 0 4.97-1.49 4.97-4.18 0-4.77-6.1-4.64-6.1-7 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"/></svg>

    <tnw-navbar-menu slot="middle" items-data='[{"label":"Home","link":"/"},{"label":"About Us","link":"/about"},{"label":"Services","link":"#","subMenu":[{"label":"Web Development","link":"/services/web"},{"label":"Mobile Development","link":"/services/mobile"}]},{"label":"Contact","link":"/contact"}]'></tnw-navbar-menu>
    
    <tnw-button slot="end" label="Button"></tnw-button>
  </tnw-navbar>
`;

// Header banner configuration to use within the header stories
const banner = (isSticky: boolean = false) => `
  <tnw-header-banner slot="banner" heading="Welcome to Our Website" subheading="We Create Beautiful Experiences" description="Our team provides innovative solutions tailored to your needs." button-label="Learn More" ${isSticky ? 'sticky-navbar' : ''}></tnw-header-banner>
`;

// Template function for generating the stories
const Template = (args) => getComponentTemplate(args, component);

// Default header with a navigation bar and banner
export const Default = Template.bind({});
Default.args = {
  navbarSlot: navbar(),
  bannerSlot: banner(),
};

// Header with the navbar centered and customized height
export const CenteredHeader = Template.bind({});
CenteredHeader.args = {
  ...Default.args,
  alignment: 'center',
};

// Header with a sticky navbar and a full-screen banner
export const StickyHeader = Template.bind({});
StickyHeader.args = {
  ...Default.args,
  navbarSlot: navbar(true),
  height: 'lg',
  centerBanner: true,
  disableInternalContainer: true,
};
