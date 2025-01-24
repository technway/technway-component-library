import { GLOBAL_PREFIX } from "../../../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-navbar__toggler`;

export const styles = `
.${baseClass} {
    cursor: pointer;
}

.${baseClass}--1024,
.${baseClass}--767,
.${baseClass}--567,
.${baseClass}--1439 {
    display: none;
}
.${baseClass}--1439 {
    @media (max-width: 1439px) {
        display: block;
    }
}
.${baseClass}--1024 {
    @media (max-width: 1024px) {
        display: block;
    }
}
.${baseClass}--767 {
    @media (max-width: 767px) {
        display: block;
    }
}
.${baseClass}--567 {
    @media (max-width: 567px) {
        display: block;
    }
}
.${baseClass}--always {
    display: block;
}
`;