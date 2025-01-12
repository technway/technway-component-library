import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-header-banner`;
const contentClass = `${baseClass}__content`;
const imageClass = `${baseClass}__image`;

export const styles = `
:host {
    z-index: 2;
    max-width: 100%;
    width: 100%;
    margin-block: auto !important;
    padding-bottom: 100px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.${contentClass} {
    display: flex;
    flex-direction: column;
    gap: 30px;
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

.${contentClass}--max-w-sm {
    max-width: 450px;
}
.${contentClass}--max-w-md {
    max-width: 600px;
}
.${contentClass}--max-w-lg {
    max-width: 800px;
}
.${contentClass}--max-w-xl {
    max-width: 1000px;
}
.${contentClass}--w-half {
    width: 50%;
}
.${contentClass}--w-full {
    width: 100%;
}

.tnw-header-banner__headings {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.${imageClass} {
    height: auto;
    width: 50%;
    max-width: 800px;
}

.${imageClass}--pos-absolute {
    height: auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
`;