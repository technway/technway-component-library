import { create } from '@storybook/theming/create';
import Logo from './static/logo.png';
import './custom-theme.css';

export default create({
    // Branding
    base: 'light',
    brandImage: Logo,
    brandTitle: 'Technway Design System',
    brandUrl: 'https://technway.biz',
    brandTarget: '_self',

    colorPrimary: '#f76f30',
    colorSecondary: '#f76f30',

    // Typography
    fontBase: '"Montserrat", sans-serif',
    fontCode: 'monospace',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#dddddd',
    appBorderRadius: 10,

    // Text colors
    textColor: '#0e0e0e',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: "#73828C",
    barSelectedColor: "#0e0e0e",
    barHoverColor: '#f76f30',
    barBg: '#fffbf9',

    // Form
    inputBorderRadius: 6,
});