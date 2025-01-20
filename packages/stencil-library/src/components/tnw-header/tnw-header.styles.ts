import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-header`; 
const contentClass = `${baseClass}__content`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
}
:host(.${baseClass}--borderBottom) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

:host(.${baseClass}--centerBanner) {
    align-items: center;
    justify-content: center; 
}
:host(.${baseClass}--centerBanner) ::slotted(tnw-navbar) {
    margin-bottom: auto;
}
:host(.${baseClass}--centerBanner) ::slotted(tnw-header-banner) {
    margin-block: auto;
    padding-bottom: 10%;
}

.${contentClass} {
    display: flex;
    flex-direction: column;
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