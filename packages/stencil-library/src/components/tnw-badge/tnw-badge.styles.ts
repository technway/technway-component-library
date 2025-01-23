import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-badge`;

export const styles = `
* {
    box-sizing: border-box;
}

.${baseClass} {
  display: inline-block;
  font-weight: var(--${baseClass}-font-weight, var(--tnw-fw-400));
  font-family: var(--tnw-font-text);
}

.${baseClass}--padding-sm {
  padding: var(--${baseClass}-padding, 3px 9px);
}
.${baseClass}--padding-md {
  padding: var(--${baseClass}-padding, 4px 12px);
}
.${baseClass}--padding-lg {
  padding: var(--${baseClass}-padding, 6px 18px);
}

.${baseClass}--status-size-sm {
  width: 15px;
  height: 15px;
}
.${baseClass}--status-size-md {
  width: 20px;
  height: 20px;
}
.${baseClass}--status-size-lg {
  width: 25px;
  height: 25px;
}

.${baseClass}--numeric {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.${baseClass}--image-size-sm {
  width: 20px;
  height: 20px;
}
.${baseClass}--image-size-md {
  width: 30px;
  height: 30px;
}
.${baseClass}--image-size-lg {
  width: 40px;
  height: 40px;
}

.${baseClass}--numeric-size-sm {
  width: 25px;
  height: 25px;
}
.${baseClass}--numeric-size-md {
  width: 35px;
  height: 35px;
}
.${baseClass}--numeric-size-lg {
  width: 45px;
  height: 45px;
}

.${baseClass}--numeric-size-sm,
.${baseClass}--padding-sm {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-2xs));
}
.${baseClass}--numeric-size-md,
.${baseClass}--padding-md {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-xs));
}
.${baseClass}--numeric-size-lg,
.${baseClass}--padding-lg {
  font-size: var(--${baseClass}-font-size, var(--tnw-fs-md));
}
`;