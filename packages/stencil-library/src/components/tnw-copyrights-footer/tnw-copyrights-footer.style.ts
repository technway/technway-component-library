import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-copyrights-footer`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
    padding: 15px 0;
}
:host(.${baseClass}--borderTop) {
    border-top-width: 1px;
    border-top-style: solid;
}
:host(.${baseClass}--center) > footer,
:host(.${baseClass}--center) > div {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.${baseClass}__content {
    display: flex;
    gap: 4px;
}

footer > p {
    margin: 0;
}
`;