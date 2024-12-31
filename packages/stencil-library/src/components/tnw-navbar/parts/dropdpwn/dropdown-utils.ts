import { GLOBAL_PREFIX } from '../../../../utils/utils';
import { DropdownMenuProps } from './dropdown-types';

export const baseClass = `${GLOBAL_PREFIX}-navbar-dropdown-menu`;

export function getDropdownMenuClasses(
    menuInvisibilityBreakpoint: DropdownMenuProps['menuInvisibilityBreakpoint']
): string {
    return [
        baseClass,
        `${baseClass}--bp-${menuInvisibilityBreakpoint}`,
    ]
        .filter(Boolean)
        .join(' ')
        .trim();
}
