import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-navbar');

export default {
  title: 'Components/Navbar',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'beta', // 'beta', 'stable', 'deprecated', 'releaseCandidate'
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

const menuData = JSON.stringify({
  menuItems: [
    {
      label: 'Home',
      link: '/',
      newTab: true,
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ],
  hideMenuBelow: '1024',
  itemsSize: 'sm',
  itemsColor: 'auto',
  itemsHoverAppearanceColor: 'primary',
  itemsHoverAppearance: 'color',
  itemsBorderRadius: 'default',
});

export const Default = Template.bind({});
Default.args = {
  enableLogoSlot: true,
  logoSlot: `<tnw-image height="40px" width="120px" slot="logo" src="https://via.placeholder.com/150" alt="logo"></tnw-image>`,
  enableCtaSlot: true,
  ctaSlot: `<tnw-button
    slot="cta"
    label="Get Started"
    href="/signup"
    variant="primary"
    appearance="solid"
    size="md"
    border-radius="default"
  >
  </tnw-button>`,
  menuDataJson: menuData,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  appearance: 'outlined',
  appearanceColor: 'light',
};

export const BottomOutlined = Template.bind({});
BottomOutlined.args = {
  ...Default.args,
  appearance: 'outlined-bottom',
  appearanceColor: 'light',
  paddingHorizontal: 'none',
  borderRadius: 'none',
};

export const Transparent = Template.bind({});
Transparent.args = {
  ...Default.args,
  appearance: 'transparent',
  appearanceColor: 'light',
};

export const MenuStartPlacement = Template.bind({});
MenuStartPlacement.args = {
  ...Default.args,
  menuPlacement: 'start',
};

export const MenuEndPlacement = Template.bind({});
MenuEndPlacement.args = {
  ...Default.args,
  menuPlacement: 'end',
};

export const disableInternalContainer = Template.bind({});
disableInternalContainer.args = {
  ...Default.args,
  disableInternalContainer: true,
};

export const menuExactCenter = Template.bind({});
menuExactCenter.args = {
  ...Default.args,
  menuExactCenter: true,
};

export const TextLogo = Template.bind({});
TextLogo.args = {
  ...Default.args,
  enableLogoSlot: true,
  logoSlot: `<tnw-heading text="Text Logo" level="h1" slot="logo" size="md"></tnw-heading>`,
  menuExactCenter: true,
};

export const scopeStylesToContainer = Template.bind({});
scopeStylesToContainer.args = {
  ...BottomOutlined.args,
  scopeStylesToContainer: true,
};