import { GLOBAL_PREFIX } from "../../utils/utils"

const baseClass = `${GLOBAL_PREFIX}-label`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host{
    --${baseClass}-font: var(--tnw-font-text);
    --${baseClass}-fs-default: var(--tnw-fs-text);
    display: block;
}
    
.${baseClass}--auto {
    font-size: var(--${baseClass}-font-size, var(--${baseClass}-fs-default))
}
.${baseClass}--sm {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-xs)) 
}
.${baseClass}--md {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-sm)) 
}
.${baseClass}--lg {
    font-size: var(--${baseClass}-font-size, var(--tnw-fs-md)) 
}

.${baseClass} {
    font-family: var(--${baseClass}-font);
    margin: 0;
    padding: 0;
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`;