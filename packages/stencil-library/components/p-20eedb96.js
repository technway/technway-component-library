/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { a as isCSSStyleSheetSupported } from './p-80d80a0e.js';

const appearanceColors = `
.tnw-v-none {
  background: none !important;
  border: 0 !important;
  padding: 0 !important;
}
.tnw-v-solid-black,
.tnw-v-solid-primary,
.tnw-v-solid-secondary {
  color: var(--tnw-white);
  fill: var(--tnw-white);
}
.tnw-v-solid-auto,
.tnw-v-solid-light {
  color: var(--tnw-text-color);
  fill: var(--tnw-text-color);
}
.tnw-v-solid-primary {
  background-color: var(--tnw-primary-color);
}
.tnw-v-solid-secondary {
  background-color: var(--tnw-secondary-color);
}
.tnw-v-solid-auto {
  background-color: var(--tnw-background-color);
}
.tnw-v-solid-inverse {
  background-color: var(--tnw-background-color-inverse);
  color: var(--tnw-text-color-inverse);
  fill: var(--tnw-text-color-inverse);
}
.tnw-v-solid-light {
  background-color: var(--tnw-background-color-100);
}
.tnw-v-solid-white {
  background-color: var(--tnw-white);
  color: var(--tnw-black);
  fill: var(--tnw-black);
}
.tnw-v-solid-black {
  background-color: var(--tnw-black);
}
.tnw-v-mixed-auto,
.tnw-v-mixed-black,
.tnw-v-mixed-light,
.tnw-v-mixed-primary,
.tnw-v-mixed-secondary,
.tnw-v-mixed-white {
  border-style: solid;
  border-width: var(--tnw-border-sm);
}
.tnw-v-mixed-primary {
  background-color: var(--tnw-primary-color-100);
  border-color: var(--tnw-primary-color-200);
}
.tnw-v-mixed-secondary {
  background-color: var(--tnw-secondary-color-100);
  border-color: var(--tnw-secondary-color-200);
}
.tnw-v-mixed-auto {
  background-color: var(--tnw-background-color-100);
  border-color: var(--tnw-background-color-200);
}
.tnw-v-mixed-inverse {
  background-color: var(--tnw-background-color-inverse-100);
  border-color: var(--tnw-background-color-inverse-200);
  color: var(--tnw-text-color-inverse);
  fill: var(--tnw-text-color-inverse);
}
.tnw-v-mixed-light {
  background-color: var(--tnw-background-color-100);
  border-color: var(--tnw-background-color-200);
}
.tnw-v-mixed-white {
  background-color: var(--tnw-gray-100);
  border-color: var(--tnw-gray-300);
}
.tnw-v-mixed-black {
  background-color: var(--tnw-gray-800);
  border-color: var(--tnw-gray-900);
}
.tnw-v-outlined-auto,
.tnw-v-outlined-black,
.tnw-v-outlined-inverse,
.tnw-v-outlined-light,
.tnw-v-outlined-primary,
.tnw-v-outlined-secondary,
.tnw-v-outlined-white {
  border-style: solid;
  border-width: var(--tnw-border-sm);
}
.tnw-v-outlined-primary {
  border-color: var(--tnw-primary-color);
}
.tnw-v-outlined-secondary {
  border-color: var(--tnw-secondary-color);
}
.tnw-v-outlined-auto {
  border-color: var(--tnw-border-color);
}
.tnw-v-outlined-inverse {
  border-color: var(--tnw-border-color-inverse);
}
.tnw-v-outlined-light {
  border-color: var(--tnw-border-color-opacity);
}
.tnw-v-outlined-white {
  border-color: var(--tnw-white);
}
.tnw-v-outlined-black {
  border-color: var(--tnw-black);
}
.tnw-v-outlined-right-auto,
.tnw-v-outlined-right-black,
.tnw-v-outlined-right-inverse,
.tnw-v-outlined-right-light,
.tnw-v-outlined-right-primary,
.tnw-v-outlined-right-secondary,
.tnw-v-outlined-right-white {
  border-right-style: solid;
  border-right-width: var(--tnw-border-sm);
  color: var(--tnw-text-color);
  fill: var(--tnw-text-color);
  border-bottom: 0;
  border-left: 0;
  border-top: 0;
}
.tnw-v-outlined-right-primary {
  border-right-color: var(--tnw-primary-color);
}
.tnw-v-outlined-right-secondary {
  border-right-color: var(--tnw-secondary-color);
}
.tnw-v-outlined-right-auto {
  border-right-color: var(--tnw-border-color);
}
.tnw-v-outlined-right-inverse {
  border-right-color: var(--tnw-border-color-inverse);
}
.tnw-v-outlined-right-light {
  border-right-color: var(--tnw-border-color-opacity);
}
.tnw-v-outlined-right-white {
  border-right-color: var(--tnw-white);
}
.tnw-v-outlined-right-black {
  border-right-color: var(--tnw-black);
}
.tnw-v-outlined-left-auto,
.tnw-v-outlined-left-black,
.tnw-v-outlined-left-inverse,
.tnw-v-outlined-left-light,
.tnw-v-outlined-left-primary,
.tnw-v-outlined-left-secondary,
.tnw-v-outlined-left-white {
  border-left-style: solid;
  border-left-width: var(--tnw-border-sm);
  color: var(--tnw-text-color);
  fill: var(--tnw-text-color);
  border-bottom: 0;
  border-right: 0;
  border-top: 0;
}
.tnw-v-outlined-left-primary {
  border-left-color: var(--tnw-primary-color);
}
.tnw-v-outlined-left-secondary {
  border-left-color: var(--tnw-secondary-color);
}
.tnw-v-outlined-left-auto {
  border-left-color: var(--tnw-border-color);
}
.tnw-v-outlined-left-inverse {
  border-left-color: var(--tnw-border-color-inverse);
}
.tnw-v-outlined-left-light {
  border-left-color: var(--tnw-border-color-opacity);
}
.tnw-v-outlined-left-white {
  border-left-color: var(--tnw-white);
}
.tnw-v-outlined-left-black {
  border-left-color: var(--tnw-black);
}
.tnw-v-outlined-bottom-auto,
.tnw-v-outlined-bottom-black,
.tnw-v-outlined-bottom-inverse,
.tnw-v-outlined-bottom-light,
.tnw-v-outlined-bottom-primary,
.tnw-v-outlined-bottom-secondary,
.tnw-v-outlined-bottom-white {
  border-bottom-style: solid;
  border-bottom-width: var(--tnw-border-sm);
  color: var(--tnw-text-color);
  fill: var(--tnw-text-color);
  border-left: 0;
  border-right: 0;
  border-top: 0;
}
.tnw-v-outlined-bottom-primary {
  border-bottom-color: var(--tnw-primary-color);
}
.tnw-v-outlined-bottom-secondary {
  border-bottom-color: var(--tnw-secondary-color);
}
.tnw-v-outlined-bottom-auto {
  border-bottom-color: var(--tnw-border-color);
}
.tnw-v-outlined-bottom-inverse {
  border-bottom-color: var(--tnw-border-color-inverse);
}
.tnw-v-outlined-bottom-light {
  border-bottom-color: var(--tnw-border-color-opacity);
}
.tnw-v-outlined-bottom-white {
  border-bottom-color: var(--tnw-white);
}
.tnw-v-outlined-bottom-black {
  border-bottom-color: var(--tnw-black);
}
.tnw-v-outlined-top-auto,
.tnw-v-outlined-top-black,
.tnw-v-outlined-top-inverse,
.tnw-v-outlined-top-light,
.tnw-v-outlined-top-primary,
.tnw-v-outlined-top-secondary,
.tnw-v-outlined-top-white {
  border-top-style: solid;
  border-top-width: var(--tnw-border-sm);
  color: var(--tnw-text-color);
  fill: var(--tnw-text-color);
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
}
.tnw-v-outlined-top-primary {
  border-top-color: var(--tnw-primary-color);
}
.tnw-v-outlined-top-secondary {
  border-top-color: var(--tnw-secondary-color);
}
.tnw-v-outlined-top-auto {
  border-top-color: var(--tnw-border-color);
}
.tnw-v-outlined-top-inverse {
  border-top-color: var(--tnw-border-color-inverse);
}
.tnw-v-outlined-top-light {
  border-top-color: var(--tnw-border-color-opacity);
}
.tnw-v-outlined-top-white {
  border-top-color: var(--tnw-white);
}
.tnw-v-outlined-top-black {
  border-top-color: var(--tnw-black);
}
`;
const extendedAppearanceStyles = `
.tnw-extended-v-none{background:none!important;border:0!important;padding:0!important}.tnw-extended-v-transparent-primary{color:var(--tnw-primary-color);fill:var(--tnw-primary-color)}.tnw-extended-v-transparent-secondary{color:var(--tnw-secondary-color);fill:var(--tnw-secondary-color)}.tnw-extended-v-transparent-auto{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-extended-v-transparent-inverse{color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-extended-v-transparent-light{color:var(--tnw-text-color-light);fill:var(--tnw-text-color-light)}.tnw-extended-v-transparent-white{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-extended-v-transparent-black{color:var(--tnw-black);fill:var(--tnw-black)}.tnw-extended-v-transparent-success{color:var(--tnw-success-color);fill:var(--tnw-success-color)}.tnw-extended-v-transparent-warning{color:var(--tnw-warning-color);fill:var(--tnw-warning-color)}.tnw-extended-v-transparent-danger{color:var(--tnw-danger-color);fill:var(--tnw-danger-color)}.tnw-extended-v-transparent-info{color:var(--tnw-info-color);fill:var(--tnw-info-color)}.tnw-extended-v-solid-black,.tnw-extended-v-solid-primary,.tnw-extended-v-solid-secondary{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-extended-v-solid-danger,.tnw-extended-v-solid-info,.tnw-extended-v-solid-success,.tnw-extended-v-solid-warning,.tnw-extended-v-solid-white{color:var(--tnw-black);fill:var(--tnw-black)}.tnw-extended-v-solid-auto,.tnw-extended-v-solid-light{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-extended-v-solid-primary{background-color:var(--tnw-primary-color)}.tnw-extended-v-solid-secondary{background-color:var(--tnw-secondary-color)}.tnw-extended-v-solid-auto{background-color:var(--tnw-background-color)}.tnw-extended-v-solid-inverse{background-color:var(--tnw-background-color-inverse);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-extended-v-solid-light{background-color:var(--tnw-background-color-100)}.tnw-extended-v-solid-white{background-color:var(--tnw-white)}.tnw-extended-v-solid-black{background-color:var(--tnw-black)}.tnw-extended-v-solid-success{background-color:var(--tnw-success-color)}.tnw-extended-v-solid-warning{background-color:var(--tnw-warning-color)}.tnw-extended-v-solid-danger{background-color:var(--tnw-danger-color)}.tnw-extended-v-solid-info{background-color:var(--tnw-info-color)}.tnw-extended-v-mixed-auto,.tnw-extended-v-mixed-black,.tnw-extended-v-mixed-danger,.tnw-extended-v-mixed-info,.tnw-extended-v-mixed-light,.tnw-extended-v-mixed-primary,.tnw-extended-v-mixed-secondary,.tnw-extended-v-mixed-success,.tnw-extended-v-mixed-warning,.tnw-extended-v-mixed-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-extended-v-mixed-primary{background-color:var(--tnw-primary-color-100);border-color:var(--tnw-primary-color-200)}.tnw-extended-v-mixed-secondary{background-color:var(--tnw-secondary-color-100);border-color:var(--tnw-secondary-color-200)}.tnw-extended-v-mixed-auto{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-extended-v-mixed-inverse{background-color:var(--tnw-background-color-inverse-100);border-color:var(--tnw-background-color-inverse-200);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-extended-v-mixed-light{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-extended-v-mixed-white{background-color:var(--tnw-gray-100);border-color:var(--tnw-gray-300)}.tnw-extended-v-mixed-black{background-color:var(--tnw-gray-800);border-color:var(--tnw-gray-900)}.tnw-extended-v-mixed-success{background-color:var(--tnw-success-color-200);border-color:var(--tnw-success-color-100)}.tnw-extended-v-mixed-warning{background-color:var(--tnw-warning-color-200);border-color:var(--tnw-warning-color-100)}.tnw-extended-v-mixed-danger{background-color:var(--tnw-danger-color-200);border-color:var(--tnw-danger-color-100)}.tnw-extended-v-mixed-info{background-color:var(--tnw-info-color-200);border-color:var(--tnw-info-color-100)}.tnw-extended-v-outlined-auto,.tnw-extended-v-outlined-black,.tnw-extended-v-outlined-danger,.tnw-extended-v-outlined-info,.tnw-extended-v-outlined-inverse,.tnw-extended-v-outlined-light,.tnw-extended-v-outlined-primary,.tnw-extended-v-outlined-secondary,.tnw-extended-v-outlined-success,.tnw-extended-v-outlined-warning,.tnw-extended-v-outlined-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-extended-v-outlined-primary{border-color:var(--tnw-primary-color)}.tnw-extended-v-outlined-secondary{border-color:var(--tnw-secondary-color)}.tnw-extended-v-outlined-auto{border-color:var(--tnw-border-color)}.tnw-extended-v-outlined-inverse{border-color:var(--tnw-border-color-inverse)}.tnw-extended-v-outlined-light{border-color:var(--tnw-border-color-opacity)}.tnw-extended-v-outlined-white{border-color:var(--tnw-white)}.tnw-extended-v-outlined-black{border-color:var(--tnw-black)}.tnw-extended-v-outlined-success{border-color:var(--tnw-success-color)}.tnw-extended-v-outlined-warning{border-color:var(--tnw-warning-color)}.tnw-extended-v-outlined-danger{border-color:var(--tnw-danger-color)}.tnw-extended-v-outlined-info{border-color:var(--tnw-info-color)}
`;
const directionalAppearanceStyles = `
.tnw-directional-v-none{background:none!important;border:0!important;padding:0!important}.tnw-directional-v-transparent-primary{color:var(--tnw-primary-color);fill:var(--tnw-primary-color)}.tnw-directional-v-transparent-secondary{color:var(--tnw-secondary-color);fill:var(--tnw-secondary-color)}.tnw-directional-v-transparent-auto{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-directional-v-transparent-inverse{color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-directional-v-transparent-light{color:var(--tnw-text-color-light);fill:var(--tnw-text-color-light)}.tnw-directional-v-transparent-white{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-directional-v-transparent-black{color:var(--tnw-black);fill:var(--tnw-black)}.tnw-directional-v-solid-black,.tnw-directional-v-solid-primary,.tnw-directional-v-solid-secondary{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-directional-v-solid-auto,.tnw-directional-v-solid-light{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-directional-v-solid-primary{background-color:var(--tnw-primary-color)}.tnw-directional-v-solid-secondary{background-color:var(--tnw-secondary-color)}.tnw-directional-v-solid-auto{background-color:var(--tnw-background-color)}.tnw-directional-v-solid-inverse{background-color:var(--tnw-background-color-inverse);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-directional-v-solid-light{background-color:var(--tnw-background-color-100)}.tnw-directional-v-solid-white{background-color:var(--tnw-white);color:var(--tnw-black);fill:var(--tnw-black)}.tnw-directional-v-solid-black{background-color:var(--tnw-black)}.tnw-directional-v-mixed-auto,.tnw-directional-v-mixed-black,.tnw-directional-v-mixed-light,.tnw-directional-v-mixed-primary,.tnw-directional-v-mixed-secondary,.tnw-directional-v-mixed-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-directional-v-mixed-primary{background-color:var(--tnw-primary-color-100);border-color:var(--tnw-primary-color-200)}.tnw-directional-v-mixed-secondary{background-color:var(--tnw-secondary-color-100);border-color:var(--tnw-secondary-color-200)}.tnw-directional-v-mixed-auto{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-directional-v-mixed-inverse{background-color:var(--tnw-background-color-inverse-100);border-color:var(--tnw-background-color-inverse-200);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-directional-v-mixed-light{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-directional-v-mixed-white{background-color:var(--tnw-gray-100);border-color:var(--tnw-gray-300)}.tnw-directional-v-mixed-black{background-color:var(--tnw-gray-800);border-color:var(--tnw-gray-900)}.tnw-directional-v-outlined-auto,.tnw-directional-v-outlined-black,.tnw-directional-v-outlined-inverse,.tnw-directional-v-outlined-light,.tnw-directional-v-outlined-primary,.tnw-directional-v-outlined-secondary,.tnw-directional-v-outlined-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-directional-v-outlined-primary{border-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-secondary{border-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-auto{border-color:var(--tnw-border-color)}.tnw-directional-v-outlined-inverse{border-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-light{border-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-white{border-color:var(--tnw-white)}.tnw-directional-v-outlined-black{border-color:var(--tnw-black)}.tnw-directional-v-outlined-inline-auto,.tnw-directional-v-outlined-inline-black,.tnw-directional-v-outlined-inline-inverse,.tnw-directional-v-outlined-inline-light,.tnw-directional-v-outlined-inline-primary,.tnw-directional-v-outlined-inline-secondary,.tnw-directional-v-outlined-inline-white{border-left-style:solid;border-left-width:var(--tnw-border-sm);border-right-style:solid;border-right-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-top:0}.tnw-directional-v-outlined-inline-primary{border-left-color:var(--tnw-primary-color);border-right-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-inline-secondary{border-left-color:var(--tnw-secondary-color);border-right-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-inline-auto{border-left-color:var(--tnw-border-color);border-right-color:var(--tnw-border-color)}.tnw-directional-v-outlined-inline-inverse{border-left-color:var(--tnw-border-color-inverse);border-right-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-inline-light{border-left-color:var(--tnw-border-color-opacity);border-right-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-inline-white{border-left-color:var(--tnw-white);border-right-color:var(--tnw-white)}.tnw-directional-v-outlined-inline-black{border-left-color:var(--tnw-black);border-right-color:var(--tnw-black)}.tnw-directional-v-outlined-right-auto,.tnw-directional-v-outlined-right-black,.tnw-directional-v-outlined-right-inverse,.tnw-directional-v-outlined-right-light,.tnw-directional-v-outlined-right-primary,.tnw-directional-v-outlined-right-secondary,.tnw-directional-v-outlined-right-white{border-right-style:solid;border-right-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-left:0;border-top:0}.tnw-directional-v-outlined-right-primary{border-right-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-right-secondary{border-right-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-right-auto{border-right-color:var(--tnw-border-color)}.tnw-directional-v-outlined-right-inverse{border-right-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-right-light{border-right-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-right-white{border-right-color:var(--tnw-white)}.tnw-directional-v-outlined-right-black{border-right-color:var(--tnw-black)}.tnw-directional-v-outlined-left-auto,.tnw-directional-v-outlined-left-black,.tnw-directional-v-outlined-left-inverse,.tnw-directional-v-outlined-left-light,.tnw-directional-v-outlined-left-primary,.tnw-directional-v-outlined-left-secondary,.tnw-directional-v-outlined-left-white{border-left-style:solid;border-left-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-right:0;border-top:0}.tnw-directional-v-outlined-left-primary{border-left-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-left-secondary{border-left-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-left-auto{border-left-color:var(--tnw-border-color)}.tnw-directional-v-outlined-left-inverse{border-left-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-left-light{border-left-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-left-white{border-left-color:var(--tnw-white)}.tnw-directional-v-outlined-left-black{border-left-color:var(--tnw-black)}.tnw-directional-v-outlined-block-auto,.tnw-directional-v-outlined-block-black,.tnw-directional-v-outlined-block-inverse,.tnw-directional-v-outlined-block-light,.tnw-directional-v-outlined-block-primary,.tnw-directional-v-outlined-block-secondary,.tnw-directional-v-outlined-block-white{border-bottom-style:solid;border-bottom-width:var(--tnw-border-sm);border-top-style:solid;border-top-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-left:0;border-right:0}.tnw-directional-v-outlined-block-primary{border-bottom-color:var(--tnw-primary-color);border-top-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-block-secondary{border-bottom-color:var(--tnw-secondary-color);border-top-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-block-auto{border-bottom-color:var(--tnw-border-color);border-top-color:var(--tnw-border-color)}.tnw-directional-v-outlined-block-inverse{border-bottom-color:var(--tnw-border-color-inverse);border-top-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-block-light{border-bottom-color:var(--tnw-border-color-opacity);border-top-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-block-white{border-bottom-color:var(--tnw-white);border-top-color:var(--tnw-white)}.tnw-directional-v-outlined-block-black{border-bottom-color:var(--tnw-black);border-top-color:var(--tnw-black)}.tnw-directional-v-outlined-bottom-auto,.tnw-directional-v-outlined-bottom-black,.tnw-directional-v-outlined-bottom-inverse,.tnw-directional-v-outlined-bottom-light,.tnw-directional-v-outlined-bottom-primary,.tnw-directional-v-outlined-bottom-secondary,.tnw-directional-v-outlined-bottom-white{border-bottom-style:solid;border-bottom-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-left:0;border-right:0;border-top:0}.tnw-directional-v-outlined-bottom-primary{border-bottom-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-bottom-secondary{border-bottom-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-bottom-auto{border-bottom-color:var(--tnw-border-color)}.tnw-directional-v-outlined-bottom-inverse{border-bottom-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-bottom-light{border-bottom-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-bottom-white{border-bottom-color:var(--tnw-white)}.tnw-directional-v-outlined-bottom-black{border-bottom-color:var(--tnw-black)}.tnw-directional-v-outlined-top-auto,.tnw-directional-v-outlined-top-black,.tnw-directional-v-outlined-top-inverse,.tnw-directional-v-outlined-top-light,.tnw-directional-v-outlined-top-primary,.tnw-directional-v-outlined-top-secondary,.tnw-directional-v-outlined-top-white{border-top-style:solid;border-top-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-left:0;border-right:0}.tnw-directional-v-outlined-top-primary{border-top-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-top-secondary{border-top-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-top-auto{border-top-color:var(--tnw-border-color)}.tnw-directional-v-outlined-top-inverse{border-top-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-top-light{border-top-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-top-white{border-top-color:var(--tnw-white)}.tnw-directional-v-outlined-top-black{border-top-color:var(--tnw-black)}
`;

const borderColorStyles = `
    .border-primary {
    border-color: var(--tnw-primary-color);
    }
    .border-secondary {
    border-color: var(--tnw-secondary-color);
    }
    .border-auto {
    border-color: var(--tnw-border-color);
    }
    .border-inverse {
    border-color: var(--tnw-border-color-inverse);
    }
    .border-light {
    border-color: var(--tnw-border-color-300);
    }
    .border-white {
    border-color: var(--tnw-white);
    }
    .border-black {
    border-color: var(--tnw-black);
    }
    .border-r-primary {
    border-right-color: var(--tnw-primary-color);
    }
    .border-r-secondary {
    border-right-color: var(--tnw-secondary-color);
    }
    .border-r-auto {
    border-right-color: var(--tnw-border-color);
    }
    .border-r-inverse {
    border-right-color: var(--tnw-border-color-inverse);
    }
    .border-r-light {
    border-right-color: var(--tnw-border-color-300);
    }
    .border-r-white {
    border-right-color: var(--tnw-white);
    }
    .border-r-black {
    border-right-color: var(--tnw-black);
    }
    .border-l-primary {
    border-left-color: var(--tnw-primary-color);
    }
    .border-l-secondary {
    border-left-color: var(--tnw-secondary-color);
    }
    .border-l-auto {
    border-left-color: var(--tnw-border-color);
    }
    .border-l-inverse {
    border-left-color: var(--tnw-border-color-inverse);
    }
    .border-l-light {
    border-left-color: var(--tnw-border-color-300);
    }
    .border-l-white {
    border-left-color: var(--tnw-white);
    }
    .border-l-black {
    border-left-color: var(--tnw-black);
    }
    .border-b-primary {
    border-bottom-color: var(--tnw-primary-color);
    }
    .border-b-secondary {
    border-bottom-color: var(--tnw-secondary-color);
    }
    .border-b-auto {
    border-bottom-color: var(--tnw-border-color);
    }
    .border-b-inverse {
    border-bottom-color: var(--tnw-border-color-inverse);
    }
    .border-b-light {
    border-bottom-color: var(--tnw-border-color-300);
    }
    .border-b-white {
    border-bottom-color: var(--tnw-white);
    }
    .border-b-black {
    border-bottom-color: var(--tnw-black);
    }
    .border-t-primary {
    border-top-color: var(--tnw-primary-color);
    }
    .border-t-secondary {
    border-top-color: var(--tnw-secondary-color);
    }
    .border-t-auto {
    border-top-color: var(--tnw-border-color);
    }
    .border-t-inverse {
    border-top-color: var(--tnw-border-color-inverse);
    }
    .border-t-light {
    border-top-color: var(--tnw-border-color-300);
    }
    .border-t-white {
    border-top-color: var(--tnw-white);
    }
    .border-t-black {
    border-top-color: var(--tnw-black);
    }
    .border-gray-100 {
    border-color: var(--tnw-gray-100);
    }
    .border-gray-200 {
    border-color: var(--tnw-gray-200);
    }
    .border-gray-300 {
    border-color: var(--tnw-gray-300);
    }
    .border-gray-400 {
    border-color: var(--tnw-gray-400);
    }
    .border-gray-500 {
    border-color: var(--tnw-gray-500);
    }
    .border-gray-600 {
    border-color: var(--tnw-gray-600);
    }
    .border-gray-700 {
    border-color: var(--tnw-gray-700);
    }
    .border-gray-800 {
    border-color: var(--tnw-gray-800);
    }
    .border-gray-900 {
    border-color: var(--tnw-gray-900);
    }
`;
const borderWidthStyles = `
.border-none {
  border-width: var(--tnw-border-none);
}
.border-sm {
  border-width: var(--tnw-border-sm);
}
.border-md {
  border-width: var(--tnw-border-md);
}
.border-lg {
  border-width: var(--tnw-border-lg);
}
.border-xl {
  border-width: var(--tnw-border-xl);
}
.border-default {
  border-width: var(--tnw-border-default);
}
`;
const borderRadiusStyles = `
.rounded-none {
    border-radius: var(--tnw-rounded-none)
}
.rounded-default {
    border-radius: var(--tnw-rounded-default)
}
.rounded-xs {
    border-radius: var(--tnw-rounded-xs)
}
.rounded-sm {
    border-radius: var(--tnw-rounded-sm)
}
.rounded-md {
    border-radius: var(--tnw-rounded-md)
}
.rounded-lg {
    border-radius: var(--tnw-rounded-lg)
}
.rounded-xl {
    border-radius: var(--tnw-rounded-xl)
}
.rounded-2xl {
    border-radius: var(--tnw-rounded-2xl)
}
.rounded-3xl {
    border-radius: var(--tnw-rounded-3xl)
}
.rounded-full {
    border-radius: var(--tnw-rounded-full)
}
.rounded-circle {
    border-radius: var(--tnw-rounded-circle)
}
`;

const colorStyles = `
.color-primary{color:var(--tnw-primary-color);fill:var(--tnw-primary-color)}.color-secondary{color:var(--tnw-secondary-color);fill:var(--tnw-secondary-color)}.color-auto{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.color-inverse{color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.color-light{color:var(--tnw-text-color-light);fill:var(--tnw-text-color-light)}.color-placeholder{color:var(--tnw-placeholder-color);fill:var(--tnw-placeholder-color)}.color-white{color:var(--tnw-white);fill:var(--tnw-white)}.color-black{color:var(--tnw-black);fill:var(--tnw-black)}.color-gray-100{color:var(--tnw-gray-100);fill:var(--tnw-gray-100)}.color-gray-200{color:var(--tnw-gray-200);fill:var(--tnw-gray-200)}.color-gray-300{color:var(--tnw-gray-300);fill:var(--tnw-gray-300)}.color-gray-400{color:var(--tnw-gray-400);fill:var(--tnw-gray-400)}.color-gray-500{color:var(--tnw-gray-500);fill:var(--tnw-gray-500)}.color-gray-600{color:var(--tnw-gray-600);fill:var(--tnw-gray-600)}.color-gray-700{color:var(--tnw-gray-700);fill:var(--tnw-gray-700)}.color-gray-800{color:var(--tnw-gray-800);fill:var(--tnw-gray-800)}.color-gray-900{color:var(--tnw-gray-900);fill:var(--tnw-gray-900)}
`;
const backgroundColorStyles = `
.bg-primary{background-color:var(--tnw-primary-color)}.bg-secondary{background-color:var(--tnw-secondary-color)}.bg-auto{background-color:var(--tnw-background-color)}.bg-100{background-color:var(--tnw-background-color-100)}.bg-200{background-color:var(--tnw-background-color-200)}.bg-opacity{background-color:var(--tnw-background-color-opacity)}.bg-inverse{background-color:var(--tnw-background-color-inverse)}.bg-inverse-100{background-color:var(--tnw-background-color-inverse-100)}.bg-inverse-200{background-color:var(--tnw-background-color-inverse-200)}.bg-white{background-color:var(--tnw-white)}.bg-black{background-color:var(--tnw-black)}.bg-gray-100{background-color:var(--tnw-gray-100)}.bg-gray-200{background-color:var(--tnw-gray-200)}.bg-gray-300{background-color:var(--tnw-gray-300)}.bg-gray-400{background-color:var(--tnw-gray-400)}.bg-gray-500{background-color:var(--tnw-gray-500)}.bg-gray-600{background-color:var(--tnw-gray-600)}.bg-gray-700{background-color:var(--tnw-gray-700)}.bg-gray-800{background-color:var(--tnw-gray-800)}.bg-gray-900{background-color:var(--tnw-gray-900)}
`;
const placeholderColorStyles = `
.placeholder-primary::-moz-placeholder {
  color: var(--tnw-primary-color);
}
.placeholder-primary::placeholder {
  color: var(--tnw-primary-color);
}
.placeholder-secondary::-moz-placeholder {
  color: var(--tnw-secondary-color);
}
.placeholder-secondary::placeholder {
  color: var(--tnw-secondary-color);
}
.placeholder-auto::-moz-placeholder {
  color: var(--tnw-text-color);
}
.placeholder-auto::placeholder {
  color: var(--tnw-text-color);
}
.placeholder-inverse::-moz-placeholder {
  color: var(--tnw-text-color-inverse);
}
.placeholder-inverse::placeholder {
  color: var(--tnw-text-color-inverse);
}
.placeholder-light::-moz-placeholder {
  color: var(--tnw-text-color-300);
}
.placeholder-light::placeholder {
  color: var(--tnw-text-color-300);
}
.placeholder-placeholder::-moz-placeholder {
  color: var(--tnw-placeholder-color);
}
.placeholder-placeholder::placeholder {
  color: var(--tnw-placeholder-color);
}
.placeholder-white::-moz-placeholder {
  color: var(--tnw-white);
}
.placeholder-white::placeholder {
  color: var(--tnw-white);
}
.placeholder-black::-moz-placeholder {
  color: var(--tnw-black);
}
.placeholder-black::placeholder {
  color: var(--tnw-black);
}
.placeholder-gray-100::-moz-placeholder {
  color: var(--tnw-gray-100);
}
.placeholder-gray-100::placeholder {
  color: var(--tnw-gray-100);
}
.placeholder-gray-200::-moz-placeholder {
  color: var(--tnw-gray-200);
}
.placeholder-gray-200::placeholder {
  color: var(--tnw-gray-200);
}
.placeholder-gray-300::-moz-placeholder {
  color: var(--tnw-gray-300);
}
.placeholder-gray-300::placeholder {
  color: var(--tnw-gray-300);
}
.placeholder-gray-400::-moz-placeholder {
  color: var(--tnw-gray-400);
}
.placeholder-gray-400::placeholder {
  color: var(--tnw-gray-400);
}
.placeholder-gray-500::-moz-placeholder {
  color: var(--tnw-gray-500);
}
.placeholder-gray-500::placeholder {
  color: var(--tnw-gray-500);
}
.placeholder-gray-600::-moz-placeholder {
  color: var(--tnw-gray-600);
}
.placeholder-gray-600::placeholder {
  color: var(--tnw-gray-600);
}
.placeholder-gray-700::-moz-placeholder {
  color: var(--tnw-gray-700);
}
.placeholder-gray-700::placeholder {
  color: var(--tnw-gray-700);
}
.placeholder-gray-800::-moz-placeholder {
  color: var(--tnw-gray-800);
}
.placeholder-gray-800::placeholder {
  color: var(--tnw-gray-800);
}
.placeholder-gray-900::-moz-placeholder {
  color: var(--tnw-gray-900);
}
.placeholder-gray-900::placeholder {
  color: var(--tnw-gray-900);
}
`;

const a11yStyles = `
.sr-only {
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  clip: rect(0, 0, 0, 0) !important;
  border: 0 !important;
  white-space: nowrap !important;
}
.keyboard-only:focus {
  outline: 2px solid var(--tnw-focus-color);
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  .reduced-motion {
    animation: none;
    transition: none;
  }
}
`;
const containerStyles = `
.container {
  max-width: var(--tnw-container-max-width);
  width: var(--tnw-container-width);
  margin-left: auto;
  margin-right: auto;
}
`;
const resetStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-color: transparent;
  scroll-behavior: smooth;
}
`;
const globalStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-color: transparent;
  scroll-behavior: smooth;
}

html,
body {
  overflow-x: hidden;
}

body {
  color: var(--tnw-text-color);
  background-color: var(--tnw-background-color);
  font-family: var(--tnw-font-text);
  font-size: var(--tnw-fs-text);
  font-weight: var(--tnw-fw-text);
  direction: var(--tnw-direction);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
`;

const iconSetupStyles = `
[class^="icon-"],
[class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
const iconClassNames = `
.icon-tnw-code:before {
  content: "\\e903";
}
.icon-tnw-mute:before {
  content: "\\e904";
}
.icon-tnw-quotes-left:before {
  content: "\\e977";
}
.icon-tnw-quotes-right:before {
  content: "\\e978";
}
.icon-tnw-search-2:before {
  content: "\\e986";
}
.icon-tnw-volume-medium:before {
  content: "\\ea27";
}
.icon-tnw-wordpress:before {
  content: "\\eab4";
}
.icon-tnw-soundcloud:before {
  content: "\\eac3";
}
.icon-tnw-pinterest-circle1:before {
  content: "\\ead1";
}
.icon-tnw-pinterest-circle-outline:before {
  content: "\\ead2";
}
.icon-tnw-dribbble-brand:before {
  content: "\\e906";
  color: #ea4c89;
}
.icon-tnw-behance-brand:before {
  content: "\\e907";
  color: #1769ff;
}
.icon-tnw-trello-brand:before {
  content: "\\e908";
  color: #0079bf;
}
.icon-tnw-trustpilot-brand:before {
  content: "\\e909";
  color: #00b67a;
}
.icon-tnw-stackexchange-brand:before {
  content: "\\e90a";
  color: #1e5397;
}
.icon-tnw-stackoverflow-brand:before {
  content: "\\e90b";
  color: #fe7a16;
}
.icon-tnw-dev-brand:before {
  content: "\\e90c";
}
.icon-tnw-codepen-brand:before {
  content: "\\e90d";
}
.icon-tnw-github-brand:before {
  content: "\\e90e";
}
.icon-tnw-slack-brand:before {
  content: "\\e90f";
  color: #4a154b;
}
.icon-tnw-reddit-brand:before {
  content: "\\e910";
  color: #ff4500;
}
.icon-tnw-tiktok-brand:before {
  content: "\\e911";
}
.icon-tnw-whatsapp-brand:before {
  content: "\\e912";
  color: #25d366;
}
.icon-tnw-snapchat-brand:before {
  content: "\\e913";
  color: #fffc00;
}
.icon-tnw-pinterest-brand:before {
  content: "\\e914";
  color: #bd081c;
}
.icon-tnw-youtube-brand:before {
  content: "\\e915";
  color: #f00;
}
.icon-tnw-linkedin-brand:before {
  content: "\\e916";
  color: #0077b5;
}
.icon-tnw-x-brand:before {
  content: "\\e917";
}
.icon-tnw-tnwitter-brand:before {
  content: "\\e917";
}
.icon-tnw-facebook-brand:before {
  content: "\\e918";
  color: #1877f2;
}
.icon-tnw-gmail-brand:before {
  content: "\\e919";
  color: #d14836;
}
.icon-tnw-100ning:before {
  content: "\\e91a";
}
.icon-tnw-100ning-outline:before {
  content: "\\e91b";
}
.icon-tnw-inbox-download:before {
  content: "\\e91c";
}
.icon-tnw-inbox-download-outline:before {
  content: "\\e91d";
}
.icon-tnw-folder-download:before {
  content: "\\e91e";
}
.icon-tnw-folder-download-outline:before {
  content: "\\e91f";
}
.icon-tnw-cloud-download:before {
  content: "\\e920";
}
.icon-tnw-cloud-download-outline:before {
  content: "\\e921";
}
.icon-tnw-inbox-upload:before {
  content: "\\e922";
}
.icon-tnw-inbox-upload-outline:before {
  content: "\\e923";
}
.icon-tnw-folder-upload:before {
  content: "\\e924";
}
.icon-tnw-folder-upload-outline:before {
  content: "\\e925";
}
.icon-tnw-cloud-upload:before {
  content: "\\e926";
}
.icon-tnw-cloud-upload-outline:before {
  content: "\\e927";
}
.icon-tnw-woman-avatar-outline:before {
  content: "\\e928";
}
.icon-tnw-man-avatar-outline:before {
  content: "\\e929";
}
.icon-tnw-moon:before {
  content: "\\e901";
}
.icon-tnw-globe-2:before {
  content: "\\e92a";
}
.icon-tnw-heart:before {
  content: "\\e92b";
}
.icon-tnw-vcard:before {
  content: "\\e92c";
}
.icon-tnw-link:before {
  content: "\\e900";
}
.icon-tnw-pinterest:before {
  content: "\\e963";
}
.icon-tnw-dribbble:before {
  content: "\\e92e";
}
.icon-tnw-behance:before {
  content: "\\e92f";
}
.icon-tnw-emoji-sad:before {
  content: "\\e930";
}
.icon-tnw-emoji-neutral:before {
  content: "\\e931";
}
.icon-tnw-emoji-happy:before {
  content: "\\e932";
}
.icon-tnw-emoji-flirt:before {
  content: "\\e933";
}
.icon-tnw-youtube:before {
  content: "\\e934";
}
.icon-tnw-question-mark-circle:before {
  content: "\\e935";
}
.icon-tnw-question-mark:before {
  content: "\\e936";
}
.icon-tnw-lifebuoy:before {
  content: "\\e937";
}
.icon-tnw-pencil:before {
  content: "\\e938";
}
.icon-tnw-paper-plane:before {
  content: "\\e939";
}
.icon-tnw-at:before {
  content: "\\e93a";
}
.icon-tnw-envelope-21:before {
  content: "\\e93b";
}
.icon-tnw-inbox-download-2:before {
  content: "\\e93c";
}
.icon-tnw-cloud-upload-2:before {
  content: "\\e93d";
}
.icon-tnw-inbox-upload-2:before {
  content: "\\e93e";
}
.icon-tnw-select-arrows:before {
  content: "\\e93f";
}
.icon-tnw-close-square:before {
  content: "\\e940";
}
.icon-tnw-add-2:before {
  content: "\\e942";
}
.icon-tnw-trash:before {
  content: "\\e943";
}
.icon-tnw-shopping-bag:before {
  content: "\\e944";
}
.icon-tnw-shopping-cart:before {
  content: "\\e945";
}
.icon-tnw-globe-21:before {
  content: "\\e946";
}
.icon-tnw-sun:before {
  content: "\\e947";
}
.icon-tnw-bolt:before {
  content: "\\e949";
}
.icon-tnw-pencil-2:before {
  content: "\\e94a";
}
.icon-tnw-send:before {
  content: "\\e94b";
}
.icon-tnw-arrow-thin-up:before {
  content: "\\e94c";
}
.icon-tnw-arrow-thin-right:before {
  content: "\\e94d";
}
.icon-tnw-arrow-thin-left:before {
  content: "\\e94e";
}
.icon-tnw-arrow-thin-down:before {
  content: "\\e94f";
}
.icon-tnw-arrow-right:before {
  content: "\\e950";
}
.icon-tnw-arrow-left:before {
  content: "\\e951";
}
.icon-tnw-arrow-down:before {
  content: "\\e952";
}
.icon-tnw-arrow-up:before {
  content: "\\e953";
}
.icon-tnw-close-circle:before {
  content: "\\e954";
}
.icon-tnw-close-circle-outline:before {
  content: "\\e955";
}
.icon-tnw-close:before {
  content: "\\e956";
}
.icon-tnw-checkmark-circle-outline:before {
  content: "\\e957";
}
.icon-tnw-checkmark:before {
  content: "\\e958";
}
.icon-tnw-minus-circle:before {
  content: "\\e959";
}
.icon-tnw-minus-circle-outline:before {
  content: "\\e95a";
}
.icon-tnw-trash-2:before {
  content: "\\e95b";
}
.icon-tnw-settings-2:before {
  content: "\\e95c";
}
.icon-tnw-menu:before {
  content: "\\e95d";
}
.icon-tnw-search:before {
  content: "\\e95e";
}
.icon-tnw-cloud-download-outline-2:before {
  content: "\\e95f";
}
.icon-tnw-add-circle-outline:before {
  content: "\\e960";
}
.icon-tnw-cart-outline:before {
  content: "\\e961";
}
.icon-tnw-sun-outline:before {
  content: "\\e962";
}
.icon-tnw-heart-outline:before {
  content: "\\e966";
}
.icon-tnw-heart-2:before {
  content: "\\e967";
}
.icon-tnw-arrow-loop:before {
  content: "\\e968";
}
.icon-tnw-arrow-maximise:before {
  content: "\\e969";
}
.icon-tnw-arrow-minimise:before {
  content: "\\e96a";
}
.icon-tnw-arrow-shuffle:before {
  content: "\\e96b";
}
.icon-tnw-arrow-move:before {
  content: "\\e96c";
}
.icon-tnw-arrow-back:before {
  content: "\\e96d";
}
.icon-tnw-arrow-forward:before {
  content: "\\e96e";
}
.icon-tnw-cog-outline:before {
  content: "\\e96f";
}
.icon-tnw-user-add-outline:before {
  content: "\\e970";
}
.icon-tnw-user-delete-outline:before {
  content: "\\e971";
}
.icon-tnw-user-outline:before {
  content: "\\e972";
}
.icon-tnw-user-delete:before {
  content: "\\e973";
}
.icon-tnw-user-add:before {
  content: "\\e974";
}
.icon-tnw-user:before {
  content: "\\e975";
}
.icon-tnw-facebook-circle:before {
  content: "\\e964";
}
.icon-tnw-globe:before {
  content: "\\e976";
}
.icon-tnw-cloud-download-2:before {
  content: "\\e97a";
}
.icon-tnw-chevron-large-right:before {
  content: "\\e97b";
}
.icon-tnw-chevron-large-left:before {
  content: "\\e97c";
}
.icon-tnw-triangle-right:before {
  content: "\\e97d";
}
.icon-tnw-triangle-left:before {
  content: "\\e97e";
}
.icon-tnw-triangle-up:before {
  content: "\\e97f";
}
.icon-tnw-triangle-down:before {
  content: "\\e980";
}
.icon-tnw-chevron-up:before {
  content: "\\e981";
}
.icon-tnw-chevron-right:before {
  content: "\\e982";
}
.icon-tnw-chevron-left:before {
  content: "\\e983";
}
.icon-tnw-chevron-down:before {
  content: "\\e984";
}
.icon-tnw-alarm:before {
  content: "\\e985";
}
.icon-tnw-add-call:before {
  content: "\\e987";
}
.icon-tnw-library-add:before {
  content: "\\e988";
}
.icon-tnw-queue:before {
  content: "\\e988";
}
.icon-tnw-auto-delete:before {
  content: "\\e989";
}
.icon-tnw-remove-shopping-cart:before {
  content: "\\e98a";
}
.icon-tnw-add-shopping-cart:before {
  content: "\\e98b";
}
.icon-tnw-settings:before {
  content: "\\e98c";
}
.icon-tnw-menu-open:before {
  content: "\\e98d";
}
.icon-tnw-moon-outline1:before {
  content: "\\e902";
}
.icon-tnw-linkedin-outline:before {
  content: "\\e965";
}
.icon-tnw-trello-outline:before {
  content: "\\e98e";
}
.icon-tnw-codepen:before {
  content: "\\e990";
}
.icon-tnw-github-outline:before {
  content: "\\e991";
}
.icon-tnw-slack-outline:before {
  content: "\\e992";
}
.icon-tnw-youtube-outline:before {
  content: "\\e993";
}
.icon-tnw-instagram-outline:before {
  content: "\\e995";
}
.icon-tnw-facebook-outline:before {
  content: "\\e996";
}
.icon-tnw-life-buoy:before {
  content: "\\e997";
}
.icon-tnw-question-mark-circle-outline:before {
  content: "\\e998";
}
.icon-tnw-bell-off:before {
  content: "\\e999";
}
.icon-tnw-bell:before {
  content: "\\e99a";
}
.icon-tnw-edit-2:before {
  content: "\\e99b";
}
.icon-tnw-edit-1:before {
  content: "\\e99c";
}
.icon-tnw-edit:before {
  content: "\\e99d";
}
.icon-tnw-envelope-2:before {
  content: "\\e99e";
}
.icon-tnw-download-cloud-3:before {
  content: "\\e99f";
}
.icon-download4:before {
  content: "\\e9a0";
}
.icon-tnw-upload-cloud-3:before {
  content: "\\e9a1";
}
.icon-tnw-upload-cloud-4:before {
  content: "\\e9a2";
}
.icon-tnw-arrow-down-left:before {
  content: "\\e9a3";
}
.icon-tnw-arrow-down-right:before {
  content: "\\e9a4";
}
.icon-tnw-arrow-up-left:before {
  content: "\\e9a5";
}
.icon-tnw-arrow-right-circle:before {
  content: "\\e9a6";
}
.icon-tnw-arrow-left-circle:before {
  content: "\\e9a7";
}
.icon-tnw-arrow-down-circle:before {
  content: "\\e9a8";
}
.icon-tnw-arrow-up-circle:before {
  content: "\\e9a9";
}
.icon-tnw-arrow-up-right:before {
  content: "\\e9aa";
}
.icon-tnw-arrow-short-right:before {
  content: "\\e9ab";
}
.icon-tnw-arrow-short-left:before {
  content: "\\e9ac";
}
.icon-tnw-arrow-short-down:before {
  content: "\\e9ad";
}
.icon-tnw-arrow-short-up:before {
  content: "\\e9ae";
}
.icon-tnw-checkmark-circle-outline-2:before {
  content: "\\e9af";
}
.icon-tnw-checkmark-square-outline:before {
  content: "\\e9b0";
}
.icon-tnw-checkmark-2:before {
  content: "\\e9b1";
}
.icon-tnw-minimize:before {
  content: "\\e9b2";
}
.icon-tnw-file-minus:before {
  content: "\\e9b3";
}
.icon-tnw-minus-circle-outline-2:before {
  content: "\\e9b4";
}
.icon-tnw-minus-square-outline:before {
  content: "\\e9b5";
}
.icon-tnw-minimize2:before {
  content: "\\e9b6";
}
.icon-tnw-minus:before {
  content: "\\e9b7";
}
.icon-tnw-user-minus-outline-3:before {
  content: "\\e9b8";
}
.icon-tnw-folder-minus:before {
  content: "\\e9b9";
}
.icon-tnw-file-plus:before {
  content: "\\e9ba";
}
.icon-tnw-add-square-outline:before {
  content: "\\e9bb";
}
.icon-tnw-add-circle-outline1:before {
  content: "\\e9bc";
}
.icon-tnw-add:before {
  content: "\\e9bd";
}
.icon-tnw-folder-plus:before {
  content: "\\e9be";
}
.icon-tnw-trash-21:before {
  content: "\\e9bf";
}
.icon-tnw-shopping-bag-1:before {
  content: "\\e9c0";
}
.icon-tnw-shopping-cart-2:before {
  content: "\\e9c1";
}
.icon-tnw-user-delete-outline-3:before {
  content: "\\e9c2";
}
.icon-tnw-user-check-outline:before {
  content: "\\e9c3";
}
.icon-tnw-users-3:before {
  content: "\\e9c4";
}
.icon-tnw-group-3:before {
  content: "\\e9c4";
}
.icon-tnw-user-add-outline-3:before {
  content: "\\e9c6";
}
.icon-tnw-user-outline-3:before {
  content: "\\e9c7";
}
.icon-tnw-share:before {
  content: "\\e9c8";
}
.icon-tnw-home:before {
  content: "\\e9c9";
}
.icon-tnw-moon-outline:before {
  content: "\\e905";
}
.icon-tnw-linkedin:before {
  content: "\\e979";
}
.icon-tnw-facebook:before {
  content: "\\e994";
}
.icon-tnw-trello:before {
  content: "\\e9ca";
}
.icon-tnw-globe1:before {
  content: "\\e9cb";
}
.icon-tnw-stack-exchange:before {
  content: "\\e9cc";
}
.icon-tnw-stack-overflow:before {
  content: "\\e9cd";
}
.icon-tnw-github:before {
  content: "\\e9ce";
}
.icon-tnw-whatsapp:before {
  content: "\\e9cf";
}
.icon-tnw-snapchat:before {
  content: "\\e9d0";
}
.icon-tnw-snapchat-circle:before {
  content: "\\e9d1";
}
.icon-tnw-pinterest-circle:before {
  content: "\\e9d2";
}
.icon-tnw-pencil-square:before {
  content: "\\e9d4";
}
.icon-tnw-envelope-open:before {
  content: "\\e9d5";
}
.icon-tnw-envelope:before {
  content: "\\e9d6";
}
.icon-tnw-download:before {
  content: "\\e9d7";
}
.icon-tnw-cloud-download-3:before {
  content: "\\e9d8";
}
.icon-tnw-upload:before {
  content: "\\e9d9";
}
.icon-tnw-cloud-upload-3:before {
  content: "\\e9da";
}
.icon-tnw-add-square:before {
  content: "\\e9db";
}
.icon-tnw-user-outline-2:before {
  content: "\\e9dc";
}
.icon-tnw-user-circle-outline:before {
  content: "\\e9dd";
}
.icon-tnw-user-circle:before {
  content: "\\e9de";
}
.icon-tnw-user-delete-2:before {
  content: "\\e9df";
}
.icon-tnw-user-secret:before {
  content: "\\e9e0";
}
.icon-tnw-group:before {
  content: "\\e9e2";
}
.icon-tnw-users:before {
  content: "\\e9e2";
}
.icon-tnw-user-add-2:before {
  content: "\\e9e3";
}
.icon-tnw-user-2:before {
  content: "\\e9e4";
}
`;

const objectPositionStyles = `
.obj-pos-t {
  -o-object-position: top;
  object-position: top;
}
.obj-pos-b {
  -o-object-position: bottom;
  object-position: bottom;
}
.obj-pos-l {
  -o-object-position: left;
  object-position: left;
}
.obj-pos-r {
  -o-object-position: right;
  object-position: right;
}
.obj-pos-c {
  -o-object-position: center;
  object-position: center;
}
.obj-pos-tl {
  -o-object-position: top-left;
  object-position: top-left;
}
.obj-pos-tr {
  -o-object-position: top-right;
  object-position: top-right;
}
.obj-pos-bl {
  -o-object-position: bottom-left;
  object-position: bottom-left;
}
.obj-pos-br {
  -o-object-position: bottom-right;
  object-position: bottom-right;
}
.obj-pos-bl {
  -o-object-position: left-top;
  object-position: left-top;
}
.obj-pos-br {
  -o-object-position: left-bottom;
  object-position: left-bottom;
}
.obj-pos-bl {
  -o-object-position: right-top;
  object-position: right-top;
}
.obj-pos-br {
  -o-object-position: right-bottom;
  object-position: right-bottom;
}
.obj-pos-bl {
  -o-object-position: center-left;
  object-position: center-left;
}
.obj-pos-br {
  -o-object-position: center-right;
  object-position: center-right;
}
.obj-pos-bl {
  -o-object-position: center-top;
  object-position: center-top;
}
.obj-pos-br {
  -o-object-position: center-bottom;
  object-position: center-bottom;
}
`;
const objectFitStyles = `
.fit-fill {
  -o-object-fit: fill;
  object-fit: fill;
}
.fit-contain {
  -o-object-fit: contain;
  object-fit: contain;
}
.fit-cover {
  -o-object-fit: cover;
  object-fit: cover;
}
.fit-none {
  -o-object-fit: none;
  object-fit: none;
}
.fit-scale-down {
  -o-object-fit: scale-down;
  object-fit: scale-down;
}
`;
const aspectRatioStyles = `
.ar-1_1 {
  aspect-ratio: 1/1;
}
.ar-16_9 {
  aspect-ratio: 16/9;
}
.ar-4_3 {
  aspect-ratio: 4/3;
}
.ar-21_9 {
  aspect-ratio: 21/9;
}
.ar-3_4 {
  aspect-ratio: 3/4;
}
.ar-9_16 {
  aspect-ratio: 9/16;
}
.ar-9_21 {
  aspect-ratio: 9/21;
}
`;

const widthStyles = `
.w-container {
  width: var(--tnw-size-container);
}
.w-xl {
  width: var(--tnw-size-xl);
}
.w-lg {
  width: var(--tnw-size-lg);
}
.w-md {
  width: var(--tnw-size-md);
}
.w-sm {
  width: var(--tnw-size-sm);
}
.w-xs {
  width: var(--tnw-size-xs);
}
.w-auto {
  width: var(--tnw-size-auto);
}
.w-full {
  width: var(--tnw-size-full);
}
`;
const minWidthStyles = `
.min-w-container {
  min-width: var(--tnw-size-container);
}
.min-w-xl {
  min-width: var(--tnw-size-xl);
}
.min-w-lg {
  min-width: var(--tnw-size-lg);
}
.min-w-md {
  min-width: var(--tnw-size-md);
}
.min-w-sm {
  min-width: var(--tnw-size-sm);
}
.min-w-xs {
  min-width: var(--tnw-size-xs);
}
.min-w-auto {
  min-width: var(--tnw-size-auto);
}
.min-w-full {
  min-width: var(--tnw-size-full);
}
`;
const maxWidthStyles = `
.max-w-container {
  max-width: var(--tnw-size-container);
}
.max-w-xl {
  max-width: var(--tnw-size-xl);
}
.max-w-lg {
  max-width: var(--tnw-size-lg);
}
.max-w-md {
  max-width: var(--tnw-size-md);
}
.max-w-sm {
  max-width: var(--tnw-size-sm);
}
.max-w-xs {
  max-width: var(--tnw-size-xs);
}
.max-w-auto {
  max-width: var(--tnw-size-auto);
}
.max-w-full {
  max-width: var(--tnw-size-full);
}
`;
const heightStyles = `
.h-xl {
  height: var(--tnw-size-xl);
}
.h-lg {
  height: var(--tnw-size-lg);
}
.h-md {
  height: var(--tnw-size-md);
}
.h-sm {
  height: var(--tnw-size-sm);
}
.h-xs {
  height: var(--tnw-size-xs);
}
.h-auto {
  height: var(--tnw-size-auto);
}
.h-full {
  height: var(--tnw-size-full);
}
`;
const minHeightStyles = `
.min-h-xl {
  min-height: var(--tnw-size-xl);
}
.min-h-lg {
  min-height: var(--tnw-size-lg);
}
.min-h-md {
  min-height: var(--tnw-size-md);
}
.min-h-sm {
  min-height: var(--tnw-size-sm);
}
.min-h-xs {
  min-height: var(--tnw-size-xs);
}
.min-h-auto {
  min-height: var(--tnw-size-auto);
}
.min-h-full {
  min-height: var(--tnw-size-full);
}
`;
const maxHeightStyles = `
.max-h-xl {
  max-height: var(--tnw-size-xl);
}
.max-h-lg {
  max-height: var(--tnw-size-lg);
}
.max-h-md {
  max-height: var(--tnw-size-md);
}
.max-h-sm {
  max-height: var(--tnw-size-sm);
}
.max-h-xs {
  max-height: var(--tnw-size-xs);
}
.max-h-auto {
  max-height: var(--tnw-size-auto);
}
.max-h-full {
  max-height: var(--tnw-size-full);
}
`;

const fontSizeStyles = `
.fs-2xs {
  font-size: var(--tnw-fs-2xs);
}
.fs-xs {
  font-size: var(--tnw-fs-xs);
}
.fs-sm {
  font-size: var(--tnw-fs-sm);
}
.fs-md {
  font-size: var(--tnw-fs-md);
}
.fs-lg {
  font-size: var(--tnw-fs-lg);
}
.fs-xl {
  font-size: var(--tnw-fs-xl);
}
.fs-2xl {
  font-size: var(--tnw-fs-2xl);
}
.fs-3xl {
  font-size: var(--tnw-fs-3xl);
}
.fs-4xl {
  font-size: var(--tnw-fs-4xl);
}
.fs-5xl {
  font-size: var(--tnw-fs-5xl);
}
.fs-6xl {
  font-size: var(--tnw-fs-6xl);
}
.fs-7xl {
  font-size: var(--tnw-fs-7xl);
}
.fs-8xl {
  font-size: var(--tnw-fs-8xl);
}
.fs-9xl {
  font-size: var(--tnw-fs-9xl);
}
.fs-heading {
  font-size: var(--tnw-fs-heading);
}
.fs-text {
  font-size: var(--tnw-fs-text);
}
`;
const fontWeightStyles = `
.fw-100 {
  font-weight: var(--tnw-fw-100);
}
.fw-200 {
  font-weight: var(--tnw-fw-200);
}
.fw-300 {
  font-weight: var(--tnw-fw-300);
}
.fw-400 {
  font-weight: var(--tnw-fw-400);
}
.fw-500 {
  font-weight: var(--tnw-fw-500);
}
.fw-600 {
  font-weight: var(--tnw-fw-600);
}
.fw-700 {
  font-weight: var(--tnw-fw-700);
}
.fw-800 {
  font-weight: var(--tnw-fw-800);
}
.fw-900 {
  font-weight: var(--tnw-fw-900);
}
.fw-heading {
  font-weight: var(--tnw-fw-heading);
}
.fw-text {
  font-weight: var(--tnw-fw-text);
}
`;
const fontFamilyStyles = `
.font-heading {
  font-family: var(--tnw-font-heading);
}
.font-text {
  font-family: var(--tnw-font-text);
}
.font-icon {
  font-family: var(--tnw-font-icon);
}
.font-head-en {
  font-family: var(--tnw-font-heading-en);
}
.font-text-en {
  font-family: var(--tnw-font-text-en);
}
.font-heading-ar {
  font-family: var(--tnw-font-heading-ar);
}
.font-text-ar {
  font-family: var(--tnw-font-text-ar);
}
`;
const lineHeightStyles = `
.lh-1 {
  line-height: var(--tnw-lh-1);
}
.lh-1_25 {
  line-height: var(--tnw-lh-1_25);
}
.lh-1_5 {
  line-height: var(--tnw-lh-1_5);
}
.lh-1_75 {
  line-height: var(--tnw-lh-1_75);
}
.lh-2 {
  line-height: var(--tnw-lh-2);
}
.lh-2_25 {
  line-height: var(--tnw-lh-2_25);
}
.lh-2_5 {
  line-height: var(--tnw-lh-2_5);
}
.lh-heading {
  line-height: var(--tnw-lh-heading);
}
.lh-txt {
  line-height: var(--tnw-lh-text);
}
`;
const textAlignStyles = `
.ta-left {
  text-align: left;
}
.ta-right {
  text-align: right;
}
.ta-start {
  text-align: start;
}
.ta-end {
  text-align: end;
}
.ta-center {
  text-align: center;
}
.ta-justify {
  text-align: justify;
}
`;
const textTransformStyles = `
.normal-case {
  text-transform: none;
}
.capitalize {
  text-transform: capitalize;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
`;

/**
 * This file contains modular and reusable Constructable Stylesheets that are applied across the component library.
 * The styles are organized into categories such as appearance, borders, colors, global styles, icons, media, sizes,
 * and typography. Each section includes individual stylesheets for specific CSS properties (e.g., border width, text color)
 * and combined stylesheets (e.g., allColorStyleSheet) for applying multiple styles in one go.
 *
 * The styles are implemented using the `CSSStyleSheet` API, allowing for efficient reuse of styles across multiple components
 * without duplication. The use of Constructable Stylesheets helps in maintaining performance and memory efficiency by attaching
 * the same stylesheet across shadow DOMs.
 *
 * ⚠️ With Checking if CSSStyleSheet is available before creating and using it.
 *
 * Usage Example:
 *
 * ```ts
 * componentWillLoad() {
 *   this.shadowRoot.adoptedStyleSheets = [
 *     appearanceColorSheet,
 *     colorStyleSheet,
 *     typographyStyleSheet,
 *   ];
 * }
 * ```
 *
 * Developers can import and apply only the required styles for each component, or use the combined stylesheets to
 * apply multiple style properties at once. Additionally, this setup supports dynamic styling updates by re-calling
 * `replaceSync()` if needed.
 *
 * Categories:
 * - appearance colors
 * - Border Styles
 * - Color Styles
 * - Global Styles
 * - Icon Styles
 * - Media Styles
 * - Size Styles
 * - Typography Styles
 */
/**
 * Appearance Related Stylesheets
 *
 * These styles control the overall appearance of UI components such as buttons, alerts, and other elements
 * with different visual states (e.g., primary, secondary, success, warning, danger).
 *
 * Available stylesheets:
 * - `appearanceColorSheet`: defines the base appearance (e.g., primary, secondary states).
 * - `extendedAppearanceStyleSheet`: defines extended appearance states (e.g., success, warning, danger).
 * - `appearanceHoverStyleSheet`: defines appearance changes on hover for interactive elements.
 * - `extendedAppearanceHoverStyleSheet`: extends hover states for success, warning, danger.
 */
const appearanceColorSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (appearanceColorSheet !== null) {
    appearanceColorSheet.replaceSync(appearanceColors);
}
const extendedAppearanceStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (extendedAppearanceStyleSheet !== null) {
    extendedAppearanceStyleSheet.replaceSync(extendedAppearanceStyles);
}
const directionalAppearanceStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (directionalAppearanceStyleSheet !== null) {
    directionalAppearanceStyleSheet.replaceSync(directionalAppearanceStyles);
}
/**
 * Border Related Stylesheets
 *
 * These styles control the border appearance of UI components, including color, width, and radius.
 *
 * Available stylesheets:
 * - `borderColorStyleSheet`: defines the border color.
 * - `borderWidthStyleSheet`: defines the border width.
 * - `borderRadiusStyleSheet`: defines the border radius.
 * - `allBorderStyleSheet`: combines `borderColorStyleSheet`, `borderWidthStyleSheet`, and `borderRadiusStyleSheet`.
 */
const borderColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (borderColorStyleSheet !== null) {
    borderColorStyleSheet.replaceSync(borderColorStyles);
}
const borderWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (borderWidthStyleSheet !== null) {
    borderWidthStyleSheet.replaceSync(borderWidthStyles);
}
const borderRadiusStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (borderRadiusStyleSheet !== null) {
    borderRadiusStyleSheet.replaceSync(borderRadiusStyles);
}
const allBorderStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allBorderStyleSheet !== null) {
    allBorderStyleSheet.replaceSync(borderColorStyles +
        borderWidthStyles +
        borderRadiusStyles);
}
/**
 * Color Related Stylesheets
 *
 * These styles control the text, background, and placeholder colors of UI components.
 *
 * Available stylesheets:
 * - `colorStyleSheet`: defines the text color.
 * - `backgroundColorStyleSheet`: defines the background color.
 * - `placeholderColorStyleSheet`: defines the placeholder color.
 * - `allColorStyleSheet`: combines `colorStyleSheet`, `backgroundColorStyleSheet`, and `placeholderColorStyleSheet`.
 */
const colorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (colorStyleSheet !== null) {
    colorStyleSheet.replaceSync(colorStyles);
}
const backgroundColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (backgroundColorStyleSheet !== null) {
    backgroundColorStyleSheet.replaceSync(backgroundColorStyles);
}
const placeholderColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (placeholderColorStyleSheet !== null) {
    placeholderColorStyleSheet.replaceSync(placeholderColorStyles);
}
const allColorStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allColorStyleSheet !== null) {
    allColorStyleSheet.replaceSync(colorStyles +
        backgroundColorStyles +
        placeholderColorStyles);
}
/**
 * Global Stylesheets
 *
 * These styles apply global adjustments, including accessibility-related styles.
 *
 * Available stylesheets:
 * - `globalStyleSheet`: defines global styles applied across the application.
 * - `a11yStyleSheet`: defines accessibility styles.
 * - `allGlobalStyleSheet`: combines `globalStyleSheet` and `a11yStyleSheet`.
 */
const a11yStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (a11yStyleSheet !== null) {
    a11yStyleSheet.replaceSync(a11yStyles);
}
const resetStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (resetStyleSheet !== null) {
    resetStyleSheet.replaceSync(resetStyles);
}
const containerStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (containerStyleSheet !== null) {
    containerStyleSheet.replaceSync(containerStyles);
}
const globalStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (globalStyleSheet !== null) {
    globalStyleSheet.replaceSync(globalStyles);
}
const allGlobalStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allGlobalStyleSheet !== null) {
    allGlobalStyleSheet.replaceSync(resetStyles +
        globalStyles +
        containerStyles +
        a11yStyles);
}
/**
 * Icon Related Stylesheets
 *
 * These styles control the appearance and setup of icons within the UI.
 *
 * Available stylesheets:
 * - `iconSetupStyleSheet`: defines icon setup styles.
 * - `iconStyleSheet`: defines the class names and appearance of icons.
 */
const iconSetupStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (iconSetupStyleSheet !== null) {
    iconSetupStyleSheet.replaceSync(iconSetupStyles);
}
const iconStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (iconStyleSheet !== null) {
    iconStyleSheet.replaceSync(iconSetupStyles +
        iconClassNames);
}
/**
 * Media Related Stylesheets
 *
 * These styles control the object positioning, fitting, and aspect ratios for media (e.g., images, videos).
 *
 * Available stylesheets:
 * - `objectPositionStyleSheet`: defines object position (e.g., top, center).
 * - `objectFitStyleSheet`: defines how objects fit within their containers (e.g., cover, contain).
 * - `aspectRatioStyleSheet`: defines the aspect ratio of media elements.
 * - `mediaStyleSheet`: combines `objectPositionStyleSheet`, `objectFitStyleSheet`, and `aspectRatioStyleSheet`.
 */
const objectPositionStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (objectPositionStyleSheet !== null) {
    objectPositionStyleSheet.replaceSync(objectPositionStyles);
}
const objectFitStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (objectFitStyleSheet !== null) {
    objectFitStyleSheet.replaceSync(objectFitStyles);
}
const aspectRatioStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (aspectRatioStyleSheet !== null) {
    aspectRatioStyleSheet.replaceSync(aspectRatioStyles);
}
const mediaStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (mediaStyleSheet !== null) {
    mediaStyleSheet.replaceSync(objectPositionStyles +
        objectFitStyles +
        aspectRatioStyles);
}
/**
 * Size Related Stylesheets
 *
 * These styles control the dimensions of UI components, including width, height, and their min/max values.
 *
 * Available stylesheets:
 * - `widthStyleSheet`: defines the width of components.
 * - `minWidthStyleSheet`: defines the minimum width.
 * - `maxWidthStyleSheet`: defines the maximum width.
 * - `heightStyleSheet`: defines the height of components.
 * - `minHeightStyleSheet`: defines the minimum height.
 * - `maxHeightStyleSheet`: defines the maximum height.
 * - `allWidthStyleSheet`: combines `widthStyleSheet`, `minWidthStyleSheet`, and `maxWidthStyleSheet`.
 * - `allHeightStyleSheet`: combines `heightStyleSheet`, `minHeightStyleSheet`, and `maxHeightStyleSheet`.
 */
const widthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (widthStyleSheet !== null) {
    widthStyleSheet.replaceSync(widthStyles);
}
const minWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (minWidthStyleSheet !== null) {
    minWidthStyleSheet.replaceSync(minWidthStyles);
}
const maxWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (maxWidthStyleSheet !== null) {
    maxWidthStyleSheet.replaceSync(maxWidthStyles);
}
const allWidthStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allWidthStyleSheet !== null) {
    allWidthStyleSheet.replaceSync(widthStyles +
        minWidthStyles +
        maxWidthStyles);
}
const heightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (heightStyleSheet !== null) {
    heightStyleSheet.replaceSync(heightStyles);
}
const minHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (minHeightStyleSheet !== null) {
    minHeightStyleSheet.replaceSync(minHeightStyles);
}
const maxHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (maxHeightStyleSheet !== null) {
    maxHeightStyleSheet.replaceSync(maxHeightStyles);
}
const allHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (allHeightStyleSheet !== null) {
    allHeightStyleSheet.replaceSync(heightStyles +
        minHeightStyles +
        maxHeightStyles);
}
/**
 * Typography Related Stylesheets
 *
 * These styles control typography-related properties such as font size, weight, family, line height, text alignment, and text transformations.
 *
 * Available stylesheets:
 * - `fontSizeStyleSheet`: defines the font size.
 * - `fontWeightStyleSheet`: defines the font weight.
 * - `fontFamilyStyleSheet`: defines the font family.
 * - `lineHeightStyleSheet`: defines the line height.
 * - `textAlignStyleSheet`: defines the text alignment.
 * - `textTransformStyleSheet`: defines text transformations (e.g., uppercase, lowercase).
 * - `fontStyleSheet`: combines `fontSizeStyleSheet`, `fontWeightStyleSheet`, and `fontFamilyStyleSheet`.
 * - `typographyStyleSheet`: combines all the typography-related styles.
 */
const fontSizeStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontSizeStyleSheet !== null) {
    fontSizeStyleSheet.replaceSync(fontSizeStyles);
}
const fontWeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontWeightStyleSheet !== null) {
    fontWeightStyleSheet.replaceSync(fontWeightStyles);
}
const fontFamilyStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontFamilyStyleSheet !== null) {
    fontFamilyStyleSheet.replaceSync(fontFamilyStyles);
}
const lineHeightStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (lineHeightStyleSheet !== null) {
    lineHeightStyleSheet.replaceSync(lineHeightStyles);
}
const textAlignStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (textAlignStyleSheet !== null) {
    textAlignStyleSheet.replaceSync(textAlignStyles);
}
const textTransformStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (textTransformStyleSheet !== null) {
    textTransformStyleSheet.replaceSync(textTransformStyles);
}
const fontStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (fontStyleSheet !== null) {
    fontStyleSheet.replaceSync(fontSizeStyles +
        fontWeightStyles +
        fontFamilyStyles);
}
const typographyStyleSheet = isCSSStyleSheetSupported() ? new CSSStyleSheet() : null;
if (typographyStyleSheet !== null) {
    typographyStyleSheet.replaceSync(fontSizeStyles +
        fontWeightStyles +
        fontFamilyStyles +
        lineHeightStyles +
        textAlignStyles +
        textTransformStyles);
}

export { containerStyleSheet as a, borderRadiusStyleSheet as b, colorStyleSheet as c, fontWeightStyleSheet as d, extendedAppearanceStyleSheet as e, fontSizeStyleSheet as f, textTransformStyleSheet as g, fontFamilyStyleSheet as h, iconStyleSheet as i, appearanceColorSheet as j, mediaStyleSheet as m, typographyStyleSheet as t };

//# sourceMappingURL=p-20eedb96.js.map