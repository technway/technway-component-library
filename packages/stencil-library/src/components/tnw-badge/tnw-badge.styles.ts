import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-badge`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  display: inline-block;
  font-weight: var(--${baseClass}-font-weight, var(--tnw-fw-400));
  font-family: var(--tnw-font-text);
}
:host(.${baseClass}--padding-sm) {
  padding: var(--${baseClass}-padding, 3px 9px);
}
:host(.${baseClass}--padding-md) {
  padding: var(--${baseClass}-padding, 4px 12px);
}
:host(.${baseClass}--padding-lg) {
  padding: var(--${baseClass}-padding, 6px 18px);
}

:host(.${baseClass}--status-size-sm) {
  width: 15px;
  height: 15px;
}
:host(.${baseClass}--status-size-md) {
  width: 20px;
  height: 20px;
}
:host(.${baseClass}--status-size-lg) {
  width: 25px;
  height: 25px;
}

:host(.${baseClass}--numeric) {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

:host(.${baseClass}--image-size-sm) {
  width: 20px;
  height: 20px;
}
:host(.${baseClass}--image-size-md) {
  width: 30px;
  height: 30px;
}
:host(.${baseClass}--image-size-lg) {
  width: 40px;
  height: 40px;
}

:host(.${baseClass}--numeric-size-sm) {
  width: 25px;
  height: 25px;
}
:host(.${baseClass}--numeric-size-md) {
  width: 35px;
  height: 35px;
}
:host(.${baseClass}--numeric-size-lg) {
  width: 45px;
  height: 45px;
}

:host(.${baseClass}--numeric-size-sm),
:host(.${baseClass}--padding-sm) {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-2xs));
}
:host(.${baseClass}--numeric-size-md),
:host(.${baseClass}--padding-md) {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-xs));
}
:host(.${baseClass}--numeric-size-lg),
:host(.${baseClass}--padding-lg) {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-md));
}
`;