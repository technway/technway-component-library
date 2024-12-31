import { h } from '@stencil/core';
import { GLOBAL_PREFIX } from '../../../../utils/utils';

interface TogglerProps {
    isOpen: boolean;
    toggleMenu: () => void;
    togglerDisplay: {};
    displayBelow?: "1024" | "767" | "567" | "1439" | "all";
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
                variant='auto'
                hiddenAria={false}
                borderRadius='circle'
                part='toggler-icon'
            />
        </div>
    );
};