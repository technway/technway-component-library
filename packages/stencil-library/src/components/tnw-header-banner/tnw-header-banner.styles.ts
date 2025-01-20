import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-header-banner`;
const contentClass = `${baseClass}__content`;
const containerClass = `${baseClass}__container`;
const imageWrapperClass = `${baseClass}__image-wrapper`;
const imageClass = `${baseClass}__image`;

export const styles = `
:host {
    z-index: 2;
    max-width: 100%;
    width: 100%;
    display: block;
}
:host(.${baseClass}--container) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}
:host(.${baseClass}--verticalCenter) {
    padding-bottom: 100px !important;
}

.${containerClass} {
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

.${imageWrapperClass} {
    height: auto;
    width: 50%;
    max-width: 800px;
}

.${imageWrapperClass}--pos-absolute {
    height: auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.${imageClass} {
    height: auto;
    width: 100%;
}

@media (max-width: 1024px) {
    .${contentClass}--max-w-xl {
        max-width: 100%;
    }
    
    .${contentClass}--max-w-lg {
        max-width: 100%;
    }
}

@media (max-width: 767px) {
    :host(.${baseClass}--container),
    .${containerClass} {
        flex-direction: column;
        gap: 20px;
    }

    :host(.${baseClass}--verticalCenter) {
        padding-bottom: 50px !important;
    }

    .${contentClass} {
        gap: 20px;
    }

    .${contentClass}--right,
    .${contentClass}--left {
        text-align: center;
        margin-left: 0;
        margin-right: 0;
    }

    .${contentClass}--w-half {
        width: 100%;
    }

    .${imageWrapperClass} {
        width: 100%;
        max-width: 100%;
    }

    .${imageWrapperClass}--pos-absolute {
        position: relative;
        transform: none;
        top: auto;
        right: auto;
    }

    .${contentClass}--max-w-md {
        max-width: 100%;
    }
}

@media (max-width: 567px) {
    .${contentClass}--max-w-sm {
        max-width: 100%;
    }
}
`;