import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-header`; 
const contentClass = `${baseClass}__content`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    position: relative;
}
:host(.${baseClass}--borderBottom) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

:host(.${baseClass}--centerBanner) ::slotted(tnw-header-banner) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 30px;
}

.${contentClass} {
    gap: 25px;
    height: 100%;
    width: 100%;
}
.${contentClass}--center {
    align-items: center;
}
.${contentClass}--start {
    align-items: start;
}
.${contentClass}--end {
    align-items: end;
}
`;