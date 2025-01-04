import { h } from '@stencil/core';
import { Logo } from './part--logo-types';
import { isNotEmptyString } from '../../../../utils/utils';

const defaultWidth: string = '150px';
const defaultHeight: string = 'auto';

// Render Function for Menu
export const renderLogo = (
    props: Logo
) => {
    return (
        isNotEmptyString(props.link) ? (
            <tnw-anchor
                href={props.link}
                labelAria={props.ariaLabel}
            >
                <tnw-image
                    style={{
                        width: props.width || defaultWidth,
                        height: props.height || defaultHeight,
                    }}
                    src={props.src}
                    alt={props.alt}
                />
            </tnw-anchor>
        ) : (
            <tnw-image
                style={{
                    width: props.width || defaultWidth,
                    height: props.height || defaultHeight,
                }}
                src={props.src}
                alt={props.alt}
            />
        )
    );
};