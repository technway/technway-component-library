export const globalVariables = {
    colors: {
        white: 'var(--tnw-white, #ffffff)',
        black: 'var(--tnw-black, #000000)',
        gray: {
            100: 'var(--tnw-gray-100, #f2f2f2)',
            200: 'var(--tnw-gray-200, #e5e5e5)',
            300: 'var(--tnw-gray-300, #d9d9d9)',
            400: 'var(--tnw-gray-400, #cccccc)',
            500: 'var(--tnw-gray-500, #b4b4b4)',
            600: 'var(--tnw-gray-600, #6c757d)',
            700: 'var(--tnw-gray-700, #495057)',
            800: 'var(--tnw-gray-800, #343a40)',
            900: 'var(--tnw-gray-900, #071a2e)',
        },
        background: {
            default: 'var(--tnw-background-color, #ffffff)',
            rgb: 'var(--tnw-background-color-rgb, 255, 255, 255)',
            100: 'var(--tnw-background-color-100, #e9e9e9)',
            200: 'var(--tnw-background-color-200, #d8d8d8)',
            opacity: 'var(--tnw-background-color-opacity, rgba(var(--tnw-background-color-rgb), 0.2))',
            inverse: 'var(--tnw-background-color-inverse, #060606)',
            inverseRgb: 'var(--tnw-background-color-inverse-rgb, 6, 6, 6)',
            inverse100: 'var(--tnw-background-color-inverse-100, #171418)',
            inverse200: 'var(--tnw-background-color-inverse-200, #323132)',
        },
        text: {
            default: 'var(--tnw-text-color, #0e0e0e)',
            light: 'var(--tnw-text-color-light, #222)',
            inverse: 'var(--tnw-text-color-inverse, #fefefe)',
        },
        border: {
            default: 'var(--tnw-border-color, #ccc)',
            rgb: 'var(--tnw-border-color-rgb, 204, 204, 204)',
            focus: 'var(--tnw-border-color-focus, #6e6e6e)',
            inverse: 'var(--tnw-border-color-inverse, #2d2d2d)',
            inverseRgb: 'var(--tnw-border-color-inverse-rgb, 51, 42, 41)',
            opacity: 'var(--tnw-border-color-opacity, rgba(150, 150, 150, 0.301))',
        },
    },
    fontSizes: {
        heading: 'var(--tnw-fs-heading, var(--tnw-fs-3xl))',
        text: 'var(--tnw-fs-text, var(--tnw-fs-sm))',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
    },
    fonts: {
        textEn: "var(--tnw-font-text-en, 'Montserrat', sans-serif)",
        headingEn: "var(--tnw-font-heading-en, 'Montserrat', sans-serif)",
        textAr: "var(--tnw-font-text-ar, 'Readex Pro', sans-serif)",
        headingAr: "var(--tnw-font-heading-ar, 'Tajawal', sans-serif)",
        icon: "var(--tnw-font-icon, 'icomoon')",
    },
    fontWeights: {
        fw100: 'var(--tnw-fw-100, 100)',
        fw200: 'var(--tnw-fw-200, 200)',
        fw300: 'var(--tnw-fw-300, 300)',
        fw400: 'var(--tnw-fw-400, 400)',
        fw500: 'var(--tnw-fw-500, 500)',
        fw600: 'var(--tnw-fw-600, 600)',
        fw700: 'var(--tnw-fw-700, 700)',
        fw800: 'var(--tnw-fw-800, 800)',
        fw900: 'var(--tnw-fw-900, 900)',
        heading: 'var(--tnw-fw-heading, var(--tnw-fw-600))',
        text: 'var(--tnw-fw-text, var(--tnw-fw-300))',
    },
    lineHeights: {
        heading: 'var(--tnw-lh-heading, var(--tnw-lh-1_25))',
        text: 'var(--tnw-lh-text, var(--tnw-lh-1_75))',
    },
    spacings: {
        auto: 'auto',
        none: 'var(--tnw-spacing-none, 0)',
        '2xs': 'var(--tnw-spacing-2xs, 5px)',
        xs: 'var(--tnw-spacing-xs, 10px)',
        sm: 'var(--tnw-spacing-sm, 15px)',
        md: 'var(--tnw-spacing-md, 20px)',
        lg: 'var(--tnw-spacing-lg, 40px)',
        xl: 'var(--tnw-spacing-xl, 55px)',
        '2xl': 'var(--tnw-spacing-2xl, 70px)',
        '3xl': 'var(--tnw-spacing-3xl, 90px)',
        '4xl': 'var(--tnw-spacing-4xl, 120px)',
    },
    sizes: {
        auto: 'var(--tnw-size-auto, auto)',
        full: 'var(--tnw-size-full, 100%)',
        fullScreen: 'var(--tnw-size-full-screen, 100vh)',
        xs: 'var(--tnw-size-xs, 300px)',
        sm: 'var(--tnw-size-sm, 350px)',
        md: 'var(--tnw-size-md, 400px)',
        lg: 'var(--tnw-size-lg, 500px)',
        xl: 'var(--tnw-size-xl, 600px)',
    },
    borderRadius: {
        default: 'var(--tnw-rounded-default, var(--tnw-rounded-sm))',
        md: '12px',
        lg: '16px',
    },
    borders: {
        default: 'var(--tnw-border-default, var(--tnw-border-sm))',
    },
    transitions: {
        base: '250ms ease-in-out',
    },
    direction: {
        default: 'var(--tnw-direction, ltr)',
    },
    container: {
        width: 'var(--tnw-container-width, var(--container-width, 92%))',
        maxWidth: 'var(--tnw-container-max-width, var(--container-width-max, 1100px))',
    },
};

export const globalStyles = {
    '*': {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
    },
};

export const containerStyles = {
    maxWidth: globalVariables.container.maxWidth,
    width: globalVariables.container.width,
    marginLeft: 'auto',
    marginRight: 'auto',
};