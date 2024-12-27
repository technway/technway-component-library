import { FontSizeType } from '../../../../utils/component-props-types';

export interface DropdownMenuProps {
    itemsData: Array<{ label: string; link?: string; newTab?: boolean }>;
    itemsSize?: FontSizeType;
    menuInvisibilityBreakpoint: "1024" | "767" | "567" | "1439" | false;
}

export const dropdownMenuDefaults: DropdownMenuProps = {
    itemsData: [],
    itemsSize: 'sm',
    menuInvisibilityBreakpoint: '1024',
};
