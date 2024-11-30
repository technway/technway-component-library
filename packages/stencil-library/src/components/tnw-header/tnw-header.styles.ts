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
    padding-top: 10px !important;
}
:host(.${baseClass}--borderBottom) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

:host(.${baseClass}--centerBanner) {
    align-items: center;
    justify-content: center; 
}

.${contentClass} {
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100%;
    justify-content: center;
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