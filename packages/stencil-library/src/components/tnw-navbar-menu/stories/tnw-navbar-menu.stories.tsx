import { generateComponentArgTypes, getComponentByTagName, getComponentTemplate } from "../../../utils/sb-utils";

const component = getComponentByTagName('tnw-navbar-menu');

export default {
  title: 'Components/Navbar Menu',
  parameters: {
    actions: { disable: true },
    status: {
      type: 'stable',
    },
  },
  argTypes: generateComponentArgTypes(component),
};

const Template = (args) => getComponentTemplate(args, component);

// Default Navbar Menu
export const Default = Template.bind({});
Default.args = {
  itemsDataJson: JSON.stringify([
    { label: 'Home', link: '/' },
    { label: 'Blog', link: '/blog', 'newTab': true },
    { label: 'About Us', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Contact', link: '/contact' },
  ]),
};

// Navbar Menu with Submenu
export const WithSubmenu = Template.bind({});
WithSubmenu.args = {
  itemsDataJson: JSON.stringify([
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    {
      label: 'Services',
      link: '#',
      subMenu: [
        { label: 'Web Development', link: '/services/web' },
        { label: 'Mobile Development', link: '/services/mobile' },
      ],
    },
    { label: 'Contact', link: '/contact' },
  ]),
};

// Navbar Menu with Small Items Size
export const SmallItemsSize = Template.bind({});
SmallItemsSize.args = {
  ...Default.args,
  itemsSize: 'xs',
};

// Navbar Menu with Primary Color and Solid Hover Effect
export const PrimaryColorSolidHover = Template.bind({});
PrimaryColorSolidHover.args = {
  ...Default.args,
  itemsColor: 'primary',
  itemsHoverAppearance: 'solid',
  itemsHoverVariant: 'primary',
};

// Navbar Menu with Color Hover Effect
export const ColorHover = Template.bind({});
ColorHover.args = {
  ...Default.args,
  itemsHoverAppearance: 'color',
  itemsHoverEffect: 'contrast',
};

// Navbar Menu with Large Border Radius
export const WithBorderRadius = Template.bind({});
WithBorderRadius.args = {
  ...Default.args,
  itemsBorderRadius: 'lg',
  itemsHoverAppearance: 'solid',
};

// Navbar Menu Hidden Below 1024px
export const HideBelow1024px = Template.bind({});
HideBelow1024px.args = {
  ...Default.args,
  hideBelowBreakpoint: '1024',
  itemsHoverAppearance: 'solid',
  itemsHoverEffect: 'opacity',
};
