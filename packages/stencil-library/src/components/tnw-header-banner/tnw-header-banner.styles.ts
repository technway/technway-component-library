import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-header-banner`;

export const styles = `
:host {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    z-index: 2;
    max-width: 100%;
}

:host(.${baseClass}--start) {
    text-align: start;
    margin-inline-end: auto;
    justify-content: start;
    align-items: start;
}
:host(.${baseClass}--center) {
    text-align: center;
    margin-inline: auto;
    justify-content: center;
    align-items: center;
}
:host(.${baseClass}--end) {
    text-align: end;
    margin-inline-start: auto;
    justify-content: end;
    align-items: end;
}
:host(.${baseClass}--right) {
    text-align: right;
    margin-left: auto;
}
:host(.${baseClass}--left) {
    text-align: left;
    margin-right: auto;
}

:host(.${baseClass}--stickyNavbar) {
    margin-top: -100px;
}

:host(.${baseClass}--sm) {
    width: 600px;
}
:host(.${baseClass}--md) {
    width: 800px;
}
:host(.${baseClass}--lg) {
    width: 1000px;
}
:host(.${baseClass}--full) {
    width: 100%;
}

.tnw-header-banner__headings {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
`;