import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-header-banner`;
const contentClass = `${baseClass}__content`;

export const styles = `
:host {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    z-index: 2;
    max-width: 100%;
}

:host(.${baseClass}--stickyNavbar) {
    margin-top: -100px;
}

.${contentClass}--start {
    text-align: start;
    margin-inline-end: auto;
    justify-content: start;
    align-items: start;
}
.${contentClass}--center {
    text-align: center;
    margin-inline: auto;
    justify-content: center;
    align-items: center;
}
.${contentClass}--end {
    text-align: end;
    margin-inline-start: auto;
    justify-content: end;
    align-items: end;
}
.${contentClass}--right {
    text-align: right;
    margin-left: auto;
}
.${contentClass}--left {
    text-align: left;
    margin-right: auto;
}

.${contentClass}--sm {
    width: 450px;
}
.${contentClass}--md {
    width: 600px;
}
.${contentClass}--lg {
    width: 800px;
}
.${contentClass}--xl {
    width: 1000px;
}
.${contentClass}--full {
    width: 100%;
}

.tnw-header-banner__headings {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
`;