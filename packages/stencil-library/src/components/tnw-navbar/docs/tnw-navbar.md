# tnw-navbar

## Table of Contents

- [Overview](#overview)
- [Properties](#properties)
- [Slots](#slots)
- [Shadow Parts](#shadow-parts)
- [Events](#events)
- [Usage](#usage)

## Overview

The `tnw-navbar` component creates a responsive, customizable navigation bar.
It supports various appearance colors, optional glassmorphism effects, and flexible content slots for building structured navigation systems.

| Detail | Value |
| --- | --- |
| HTML Component Tag | `<tnw-navbar>` |
| React Component Tag | `TnwNavbar` |
| Encapsulation | `shadow` |

<div style="overflow-x: auto;">
## Properties

| Property | Description | Default | Type |
| --- | --- | --- | --- |
| **appearance** | <div>Determines the appearance of the navigation bar. Supports styles like 'outlined', 'solid', 'transparent', etc.</div> | `'solid'` | `"mixed"` \| `"none"` \| `"outlined"` \| `"outlined-bottom"` \| `"solid"` \| `"transparent"` |
| **appearanceColor** | <div>Specifies the appearance color of the navigation bar. Available options include 'primary', 'secondary', 'black', 'white', etc.</div> | `'auto'` | `"auto"` \| `"black"` \| `"inverse"` \| `"light"` \| `"primary"` \| `"secondary"` \| `"white"` |
| **borderRadius** | <div>Sets the border-radius of the navigation bar.</div> | `'default'` | `"2xl"` \| `"3xl"` \| `"circle"` \| `"default"` \| `"full"` \| `"lg"` \| `"md"` \| `"none"` \| `"sm"` \| `"xl"` \| `"xs"` |
| **disableInternalContainer** | <div>If true, the navigation bar content will not be wrapped in a container for centering and padding.</div> | `false` | `boolean` |
| **enableCtaSlot** | <div>If true, the CTA slot is enabled.</div> | `false` | `boolean` |
| **enableLogoSlot** | <div>If true, the logo slot is enabled.</div> | `false` | `boolean` |
| **enableMenuSlot** | <div>If true, the menu slot is enabled.</div> | `false` | `boolean` |
| **hideMenuBelow** | <div>The breakpoint at which the navbar should be hidden. Set to `false` to always show the navbar.</div> | `false` | `"1024"` \| `"1439"` \| `"567"` \| `"767"` \| `boolean` |
| **linkElement** | <div>An optional element to be used as the link element for the menu items.

For example, this could be a React Router Link or Next.js Link component.
Example for React Router:

import { Link } from 'react-router-dom';

itemLinkElement?: typeof Link;

Example for Next.js:

import Link from 'next/link';

itemLinkElement?: typeof Link;</div> | N/A | `(props: any) => Element` |
| **menuData** | <div>The menu data as a JSON string. Each item should include a label, optional link, optional newTab, and optional subMenu. The JSON format should be an array of objects, where each object can include the following properties: - `label`: The text of the menu item. - `link`: (Optional) The URL for the menu item. - `newTab`: (Optional) A boolean indicating whether the link opens in a new tab. - `subMenu`: (Optional) An array of submenu items including item `label`, `link`, and optional newTab..</div> | N/A | `string` |
| **menuExactCenter** | <div>When true, the menu will be centered exactly in the horizontal center of the screen. Only if `menuPosition` is set to 'middle'.</div> | `false` | `boolean` |
| **menuPlacement** | <div>Determines the placement of the menu. Available options are 'start', 'middle', or 'end'.</div> | `'middle'` | `"end"` \| `"middle"` \| `"start"` |
| **paddingHorizontal** | <div>Sets the horizontal padding size of the navigation bar.</div> | `'md'` | `"lg"` \| `"md"` \| `"none"` \| `"sm"` |
| **paddingVertical** | <div>Sets the vertical padding size of the navigation bar.</div> | `'md'` | `"lg"` \| `"md"` \| `"none"` \| `"sm"` |
| **scopeStylesToContainer** | <div>When true, the component will apply its styles (like the appearance colors and effects) to its internal container element.
If false, the styles will be applied directly to the component host element.</div> | `false` | `boolean` |
| **sticky** | <div>Makes the navigation bar sticky at the top of the viewport when set to true.</div> | `false` | `boolean` |
| **togglerPlacement** | <div>Specifies the placement of the burger menu toggler. Options are 'start' or 'end' of the navbar.</div> | `'end'` | `"end"` \| `"start"` |

</div>

## Shadow Parts

| Part | Description |
| --- | --- |
| **menu** | the container for the navigation menu items. |
| **menu-item** | an individual menu item. |
| **menu-link** | a link within a menu item. |
| **navbar** | the outermost `nav` element that wraps all the content. |
| **toggler** | the button that toggles the menu visibility. |
| **toggler-icon** | the icon displayed within the toggler button. |

## Slots

| Slot | Description |
| --- | --- |
| **cta** | The slot for custom content to be added to the end side of the navigation bar. To use this slot, set the `enableCtaSlot` property to `true`. |
| **logo** | The slot for custom logo content to be added to the navigation bar. To use this slot, set the `enableLogoSlot` property to `true`. |
| **menu** | The slot for custom menu content to be added to the navigation bar. To use this slot, set the `enableMenuSlot` property to `true`. And do not use the `menuData` prop. |

## Events

| Event | Description |
| --- | --- |
| **tnwBreakpointChange** | Emitted when the navbar's responsive breakpoint changes. Event detail contains { breakpoint: string } |
| **tnwMenuToggle** | Emitted when the menu toggler is clicked. Event detail contains { isOpen: boolean } |
| **tnwScrollChange** | Emitted when the navbar's scroll position changes (only when sticky=true). Event detail contains { scrollY: number } |

## Usage & Examples

### When to use:

- **Standard Navigation Bars**: Use the `tnw-navbar` component to create a responsive, structured navigation system for your application.
- **Customizable Layout**: Ideal for applications requiring customizable content areas (start, middle, end) with different layouts or slots.
- **Sticky and Fixed Navbar**: When you need a sticky or fixed navigation bar that stays at the top of the viewport during scrolling.
- **Glassmorphism Effect**: To add a frosted glass effect to your navbar for a modern UI design, use the glassmorphism option.

### Use Cases:

1. **Navbar Without Logo**:
   This configuration is useful when you need a simple navigation bar without a logo, but with a structured navigation menu and action button.

   @notuseStory WithoutLogo

### Additional Considerations:

- **Responsive Design**: The `tnw-navbar` component is responsive by default, ensuring your navigation works on various screen sizes.
- **Custom Controls**: You can easily customize the menu toggler position (start or end) and use slots for custom icons or actions within the navbar.
- **Glassmorphism and appearance colors**: Take advantage of the appearance customization to create transparent, outlined, or solid navigation bars, with additional glassmorphism effects.

