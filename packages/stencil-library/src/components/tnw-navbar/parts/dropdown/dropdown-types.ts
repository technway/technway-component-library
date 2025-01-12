import { FontSizeType } from '../../../../utils/component-props-types';
import { MenuProps } from '../menu/part--menu-types';

export interface DropdownMenuProps {
    itemsData: Array<{ label: string; link?: string; newTab?: boolean }>;
    itemsSize?: FontSizeType;
    menuInvisibilityBreakpoint: MenuProps['hideMenuBelow'];
}

export const dropdownMenuDefaults: DropdownMenuProps = {
    itemsData: [],
    itemsSize: 'sm',
    menuInvisibilityBreakpoint: '1024',
};
