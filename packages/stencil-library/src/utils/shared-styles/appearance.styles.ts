export const appearanceStyles = `
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

export const extendedAppearanceStyles = `
.tnw-extended-v-none{background:none!important;border:0!important;padding:0!important}.tnw-extended-v-transparent-primary{color:var(--tnw-primary-color);fill:var(--tnw-primary-color)}.tnw-extended-v-transparent-secondary{color:var(--tnw-secondary-color);fill:var(--tnw-secondary-color)}.tnw-extended-v-transparent-auto{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-extended-v-transparent-inverse{color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-extended-v-transparent-light{color:var(--tnw-text-color-light);fill:var(--tnw-text-color-light)}.tnw-extended-v-transparent-white{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-extended-v-transparent-black{color:var(--tnw-black);fill:var(--tnw-black)}.tnw-extended-v-transparent-success{color:var(--tnw-success-color);fill:var(--tnw-success-color)}.tnw-extended-v-transparent-warning{color:var(--tnw-warning-color);fill:var(--tnw-warning-color)}.tnw-extended-v-transparent-danger{color:var(--tnw-danger-color);fill:var(--tnw-danger-color)}.tnw-extended-v-transparent-info{color:var(--tnw-info-color);fill:var(--tnw-info-color)}.tnw-extended-v-solid-black,.tnw-extended-v-solid-primary,.tnw-extended-v-solid-secondary{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-extended-v-solid-danger,.tnw-extended-v-solid-info,.tnw-extended-v-solid-success,.tnw-extended-v-solid-warning,.tnw-extended-v-solid-white{color:var(--tnw-black);fill:var(--tnw-black)}.tnw-extended-v-solid-auto,.tnw-extended-v-solid-light{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-extended-v-solid-primary{background-color:var(--tnw-primary-color)}.tnw-extended-v-solid-secondary{background-color:var(--tnw-secondary-color)}.tnw-extended-v-solid-auto{background-color:var(--tnw-background-color)}.tnw-extended-v-solid-inverse{background-color:var(--tnw-background-color-inverse);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-extended-v-solid-light{background-color:var(--tnw-background-color-100)}.tnw-extended-v-solid-white{background-color:var(--tnw-white)}.tnw-extended-v-solid-black{background-color:var(--tnw-black)}.tnw-extended-v-solid-success{background-color:var(--tnw-success-color)}.tnw-extended-v-solid-warning{background-color:var(--tnw-warning-color)}.tnw-extended-v-solid-danger{background-color:var(--tnw-danger-color)}.tnw-extended-v-solid-info{background-color:var(--tnw-info-color)}.tnw-extended-v-mixed-auto,.tnw-extended-v-mixed-black,.tnw-extended-v-mixed-danger,.tnw-extended-v-mixed-info,.tnw-extended-v-mixed-light,.tnw-extended-v-mixed-primary,.tnw-extended-v-mixed-secondary,.tnw-extended-v-mixed-success,.tnw-extended-v-mixed-warning,.tnw-extended-v-mixed-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-extended-v-mixed-primary{background-color:var(--tnw-primary-color-100);border-color:var(--tnw-primary-color-200)}.tnw-extended-v-mixed-secondary{background-color:var(--tnw-secondary-color-100);border-color:var(--tnw-secondary-color-200)}.tnw-extended-v-mixed-auto{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-extended-v-mixed-inverse{background-color:var(--tnw-background-color-inverse-100);border-color:var(--tnw-background-color-inverse-200);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-extended-v-mixed-light{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-extended-v-mixed-white{background-color:var(--tnw-gray-100);border-color:var(--tnw-gray-300)}.tnw-extended-v-mixed-black{background-color:var(--tnw-gray-800);border-color:var(--tnw-gray-900)}.tnw-extended-v-mixed-success{background-color:var(--tnw-success-color-200);border-color:var(--tnw-success-color-100)}.tnw-extended-v-mixed-warning{background-color:var(--tnw-warning-color-200);border-color:var(--tnw-warning-color-100)}.tnw-extended-v-mixed-danger{background-color:var(--tnw-danger-color-200);border-color:var(--tnw-danger-color-100)}.tnw-extended-v-mixed-info{background-color:var(--tnw-info-color-200);border-color:var(--tnw-info-color-100)}.tnw-extended-v-outlined-auto,.tnw-extended-v-outlined-black,.tnw-extended-v-outlined-danger,.tnw-extended-v-outlined-info,.tnw-extended-v-outlined-inverse,.tnw-extended-v-outlined-light,.tnw-extended-v-outlined-primary,.tnw-extended-v-outlined-secondary,.tnw-extended-v-outlined-success,.tnw-extended-v-outlined-warning,.tnw-extended-v-outlined-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-extended-v-outlined-primary{border-color:var(--tnw-primary-color)}.tnw-extended-v-outlined-secondary{border-color:var(--tnw-secondary-color)}.tnw-extended-v-outlined-auto{border-color:var(--tnw-border-color)}.tnw-extended-v-outlined-inverse{border-color:var(--tnw-border-color-inverse)}.tnw-extended-v-outlined-light{border-color:var(--tnw-border-color-opacity)}.tnw-extended-v-outlined-white{border-color:var(--tnw-white)}.tnw-extended-v-outlined-black{border-color:var(--tnw-black)}.tnw-extended-v-outlined-success{border-color:var(--tnw-success-color)}.tnw-extended-v-outlined-warning{border-color:var(--tnw-warning-color)}.tnw-extended-v-outlined-danger{border-color:var(--tnw-danger-color)}.tnw-extended-v-outlined-info{border-color:var(--tnw-info-color)}
`;

export const directionalAppearanceStyles = `
.tnw-directional-v-none{background:none!important;border:0!important;padding:0!important}.tnw-directional-v-transparent-primary{color:var(--tnw-primary-color);fill:var(--tnw-primary-color)}.tnw-directional-v-transparent-secondary{color:var(--tnw-secondary-color);fill:var(--tnw-secondary-color)}.tnw-directional-v-transparent-auto{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-directional-v-transparent-inverse{color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-directional-v-transparent-light{color:var(--tnw-text-color-light);fill:var(--tnw-text-color-light)}.tnw-directional-v-transparent-white{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-directional-v-transparent-black{color:var(--tnw-black);fill:var(--tnw-black)}.tnw-directional-v-solid-black,.tnw-directional-v-solid-primary,.tnw-directional-v-solid-secondary{color:var(--tnw-white);fill:var(--tnw-white)}.tnw-directional-v-solid-auto,.tnw-directional-v-solid-light{color:var(--tnw-text-color);fill:var(--tnw-text-color)}.tnw-directional-v-solid-primary{background-color:var(--tnw-primary-color)}.tnw-directional-v-solid-secondary{background-color:var(--tnw-secondary-color)}.tnw-directional-v-solid-auto{background-color:var(--tnw-background-color)}.tnw-directional-v-solid-inverse{background-color:var(--tnw-background-color-inverse);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-directional-v-solid-light{background-color:var(--tnw-background-color-100)}.tnw-directional-v-solid-white{background-color:var(--tnw-white);color:var(--tnw-black);fill:var(--tnw-black)}.tnw-directional-v-solid-black{background-color:var(--tnw-black)}.tnw-directional-v-mixed-auto,.tnw-directional-v-mixed-black,.tnw-directional-v-mixed-light,.tnw-directional-v-mixed-primary,.tnw-directional-v-mixed-secondary,.tnw-directional-v-mixed-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-directional-v-mixed-primary{background-color:var(--tnw-primary-color-100);border-color:var(--tnw-primary-color-200)}.tnw-directional-v-mixed-secondary{background-color:var(--tnw-secondary-color-100);border-color:var(--tnw-secondary-color-200)}.tnw-directional-v-mixed-auto{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-directional-v-mixed-inverse{background-color:var(--tnw-background-color-inverse-100);border-color:var(--tnw-background-color-inverse-200);color:var(--tnw-text-color-inverse);fill:var(--tnw-text-color-inverse)}.tnw-directional-v-mixed-light{background-color:var(--tnw-background-color-100);border-color:var(--tnw-background-color-200)}.tnw-directional-v-mixed-white{background-color:var(--tnw-gray-100);border-color:var(--tnw-gray-300)}.tnw-directional-v-mixed-black{background-color:var(--tnw-gray-800);border-color:var(--tnw-gray-900)}.tnw-directional-v-outlined-auto,.tnw-directional-v-outlined-black,.tnw-directional-v-outlined-inverse,.tnw-directional-v-outlined-light,.tnw-directional-v-outlined-primary,.tnw-directional-v-outlined-secondary,.tnw-directional-v-outlined-white{border-style:solid;border-width:var(--tnw-border-sm)}.tnw-directional-v-outlined-primary{border-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-secondary{border-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-auto{border-color:var(--tnw-border-color)}.tnw-directional-v-outlined-inverse{border-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-light{border-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-white{border-color:var(--tnw-white)}.tnw-directional-v-outlined-black{border-color:var(--tnw-black)}.tnw-directional-v-outlined-inline-auto,.tnw-directional-v-outlined-inline-black,.tnw-directional-v-outlined-inline-inverse,.tnw-directional-v-outlined-inline-light,.tnw-directional-v-outlined-inline-primary,.tnw-directional-v-outlined-inline-secondary,.tnw-directional-v-outlined-inline-white{border-left-style:solid;border-left-width:var(--tnw-border-sm);border-right-style:solid;border-right-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-top:0}.tnw-directional-v-outlined-inline-primary{border-left-color:var(--tnw-primary-color);border-right-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-inline-secondary{border-left-color:var(--tnw-secondary-color);border-right-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-inline-auto{border-left-color:var(--tnw-border-color);border-right-color:var(--tnw-border-color)}.tnw-directional-v-outlined-inline-inverse{border-left-color:var(--tnw-border-color-inverse);border-right-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-inline-light{border-left-color:var(--tnw-border-color-opacity);border-right-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-inline-white{border-left-color:var(--tnw-white);border-right-color:var(--tnw-white)}.tnw-directional-v-outlined-inline-black{border-left-color:var(--tnw-black);border-right-color:var(--tnw-black)}.tnw-directional-v-outlined-right-auto,.tnw-directional-v-outlined-right-black,.tnw-directional-v-outlined-right-inverse,.tnw-directional-v-outlined-right-light,.tnw-directional-v-outlined-right-primary,.tnw-directional-v-outlined-right-secondary,.tnw-directional-v-outlined-right-white{border-right-style:solid;border-right-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-left:0;border-top:0}.tnw-directional-v-outlined-right-primary{border-right-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-right-secondary{border-right-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-right-auto{border-right-color:var(--tnw-border-color)}.tnw-directional-v-outlined-right-inverse{border-right-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-right-light{border-right-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-right-white{border-right-color:var(--tnw-white)}.tnw-directional-v-outlined-right-black{border-right-color:var(--tnw-black)}.tnw-directional-v-outlined-left-auto,.tnw-directional-v-outlined-left-black,.tnw-directional-v-outlined-left-inverse,.tnw-directional-v-outlined-left-light,.tnw-directional-v-outlined-left-primary,.tnw-directional-v-outlined-left-secondary,.tnw-directional-v-outlined-left-white{border-left-style:solid;border-left-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-right:0;border-top:0}.tnw-directional-v-outlined-left-primary{border-left-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-left-secondary{border-left-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-left-auto{border-left-color:var(--tnw-border-color)}.tnw-directional-v-outlined-left-inverse{border-left-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-left-light{border-left-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-left-white{border-left-color:var(--tnw-white)}.tnw-directional-v-outlined-left-black{border-left-color:var(--tnw-black)}.tnw-directional-v-outlined-block-auto,.tnw-directional-v-outlined-block-black,.tnw-directional-v-outlined-block-inverse,.tnw-directional-v-outlined-block-light,.tnw-directional-v-outlined-block-primary,.tnw-directional-v-outlined-block-secondary,.tnw-directional-v-outlined-block-white{border-bottom-style:solid;border-bottom-width:var(--tnw-border-sm);border-top-style:solid;border-top-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-left:0;border-right:0}.tnw-directional-v-outlined-block-primary{border-bottom-color:var(--tnw-primary-color);border-top-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-block-secondary{border-bottom-color:var(--tnw-secondary-color);border-top-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-block-auto{border-bottom-color:var(--tnw-border-color);border-top-color:var(--tnw-border-color)}.tnw-directional-v-outlined-block-inverse{border-bottom-color:var(--tnw-border-color-inverse);border-top-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-block-light{border-bottom-color:var(--tnw-border-color-opacity);border-top-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-block-white{border-bottom-color:var(--tnw-white);border-top-color:var(--tnw-white)}.tnw-directional-v-outlined-block-black{border-bottom-color:var(--tnw-black);border-top-color:var(--tnw-black)}.tnw-directional-v-outlined-bottom-auto,.tnw-directional-v-outlined-bottom-black,.tnw-directional-v-outlined-bottom-inverse,.tnw-directional-v-outlined-bottom-light,.tnw-directional-v-outlined-bottom-primary,.tnw-directional-v-outlined-bottom-secondary,.tnw-directional-v-outlined-bottom-white{border-bottom-style:solid;border-bottom-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-left:0;border-right:0;border-top:0}.tnw-directional-v-outlined-bottom-primary{border-bottom-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-bottom-secondary{border-bottom-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-bottom-auto{border-bottom-color:var(--tnw-border-color)}.tnw-directional-v-outlined-bottom-inverse{border-bottom-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-bottom-light{border-bottom-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-bottom-white{border-bottom-color:var(--tnw-white)}.tnw-directional-v-outlined-bottom-black{border-bottom-color:var(--tnw-black)}.tnw-directional-v-outlined-top-auto,.tnw-directional-v-outlined-top-black,.tnw-directional-v-outlined-top-inverse,.tnw-directional-v-outlined-top-light,.tnw-directional-v-outlined-top-primary,.tnw-directional-v-outlined-top-secondary,.tnw-directional-v-outlined-top-white{border-top-style:solid;border-top-width:var(--tnw-border-sm);color:var(--tnw-text-color);fill:var(--tnw-text-color);border-bottom:0;border-left:0;border-right:0}.tnw-directional-v-outlined-top-primary{border-top-color:var(--tnw-primary-color)}.tnw-directional-v-outlined-top-secondary{border-top-color:var(--tnw-secondary-color)}.tnw-directional-v-outlined-top-auto{border-top-color:var(--tnw-border-color)}.tnw-directional-v-outlined-top-inverse{border-top-color:var(--tnw-border-color-inverse)}.tnw-directional-v-outlined-top-light{border-top-color:var(--tnw-border-color-opacity)}.tnw-directional-v-outlined-top-white{border-top-color:var(--tnw-white)}.tnw-directional-v-outlined-top-black{border-top-color:var(--tnw-black)}
`;