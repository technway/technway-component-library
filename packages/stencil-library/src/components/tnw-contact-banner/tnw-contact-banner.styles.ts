import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-contact-banner`;
const contentClass = `${baseClass}__content`;
const headingClass = `${contentClass}-heading`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
    display: flex;
    flex-direction: column;
    gap: 15px;
    --${baseClass}-p: 60px 45px;
    padding: var(--${baseClass}-p, var(--${baseClass}-p));
    width: 100%;
}
@media only screen and (max-width: 767px) {
    :host {
        --${baseClass}-p: 40px 20px;
    }
}
:host(.${baseClass}--center) {
    text-align: center;
    align-items: center;
    justify-content: center;
}
:host(.${baseClass}--start) {
    text-align: start;
    align-items: start;
    justify-content: start;
}
:host(.${baseClass}--end) {
    text-align: end;
    align-items: end;
    justify-content: end;
}

.${contentClass} {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.${headingClass} {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

::slotted([slot="description"]) {
    width: 100%;
    max-width: 600px;
}
`;
