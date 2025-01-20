import { h } from '@stencil/core';
import { GLOBAL_PREFIX } from '../../../../utils/utils';
import { MenuProps } from '../menu/part--menu-types';

interface TogglerProps {
    isOpen: boolean;
    toggleMenu: () => void;
    togglerDisplay: {};
    displayBelow: MenuProps['hideMenuBelow'];
}

const baseClass = `${GLOBAL_PREFIX}-navbar__toggler`;

function getTogglerClasses(
    isOpen: TogglerProps['isOpen'],
    displayBelow: TogglerProps['displayBelow'] = '1024'
): string {
    return [
        baseClass,
        `${baseClass}--${isOpen ? 'open' : 'closed'}`,     
        `${baseClass}--${displayBelow}`,   
    ].filter(Boolean).join(' ').trim();
}

export const renderToggler = (props: TogglerProps) => {
    return (
        <div
            role="button"
            aria-label="Toggle Navbar Menu"
            onClick={() => {
                props.toggleMenu();
            }}
            aria-expanded={props.isOpen.toString()}
            class={getTogglerClasses(
                props.isOpen,
                props.displayBelow
            )}
            part='toggler'
        >
            <tnw-icon
                name='tnw-menu'
                color='auto'
                size='md'
                appearance='outlined'
                appearanceColor='auto'
                hiddenAria={false}
                borderRadius='circle'
                part='toggler-icon'
            />
        </div>
    );
};