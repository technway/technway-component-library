import { h } from '@stencil/core';
import { DropdownMenuProps, dropdownMenuDefaults } from './dropdown-types';
import { baseClass, getDropdownMenuClasses } from './dropdown-utils';

export const renderDropdownMenu = ({
    itemsData,
    itemsSize = dropdownMenuDefaults.itemsSize,
    menuInvisibilityBreakpoint,
}: DropdownMenuProps) => {
    const hostClasses = getDropdownMenuClasses(menuInvisibilityBreakpoint);

    return (
        <ul class={`${hostClasses}__list`}>
            {itemsData.map((item) => (
                <li class={`${baseClass}__item`} tabindex="0">
                    <tnw-anchor
                        href={item.link}
                        text={item.label}
                        newTab={item.newTab}
                        hideNewTabIcon={false}
                        textDecoration="none"
                        size={itemsSize}
                    />
                </li>
            ))}
        </ul>
    );
};