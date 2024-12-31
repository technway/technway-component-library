import { h } from '@stencil/core';
import { Logo } from './part--logo-types';

interface LogoProps extends Logo {
    width?: string;
    height?: string;
}

const defaultWidth: string = '150px';
const defaultHeight: string = 'auto';

// Render Function for Menu
export const renderLogo = (
    props: LogoProps
) => {
    return (
        <tnw-image
            style={{
                width: props.width || defaultWidth,
                height: props.height || defaultHeight,
            }}
            src={props.src}
            alt={props.alt}
        />
    )
};