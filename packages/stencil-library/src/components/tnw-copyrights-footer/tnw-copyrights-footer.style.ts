import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-copyrights-footer`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    padding: 15px 0;
    display: block;
}
:host(.${baseClass}--borderTop) {
    border-top-width: 1px;
    border-top-style: solid;
}
:host(.${baseClass}--center) > footer,
:host(.${baseClass}--center) > div {
    text-align: center;
    justify-content: center;
    flex-direction: column;
}
:host > footer,
:host > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}
@media only screen and (max-width: 767px) {
    :host > footer,
    :host > div {
        text-align: center;
        justify-content: center;
        flex-direction: column;
    }
}
:host(.${baseClass}--center) ul {
    justify-content: center;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px;
}

::slotted(a) {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
`;