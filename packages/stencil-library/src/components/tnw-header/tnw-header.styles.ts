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
    padding-top: 10px;
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
}
.${contentClass}--center {
    align-items: center;
    justify-content: center;
}
.${contentClass}--start {
    align-items: start;
    justify-content: start;
}
.${contentClass}--end {
    align-items: end;
    justify-content: end;
}

tnw-header-banner {
    margin-block: auto;
    padding-bottom: 100px;
}
`;