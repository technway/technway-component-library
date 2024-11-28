export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  --tnw-image-font: var(--tnw-font-text);
  display: flex;
  max-width: 100%;
}
:host(.tnw-image--width-sm) {
  width: var(--tnw-image-width, 200px);
}
:host(.tnw-image--height-sm) {
  height: var(--tnw-image-height, 200px);
}
:host(.tnw-image--width-md) {
  width: var(--tnw-image-width, 600px);
}
:host(.tnw-image--height-md) {
  height: var(--tnw-image-height, 600px);
}
:host(.tnw-image--width-lg) {
  width: var(--tnw-image-width, 1000px);
}
:host(.tnw-image--height-lg) {
  height: var(--tnw-image-height, 1000px);
}
:host(.tnw-image--width-full) {
  width: var(--tnw-image-width, 100%);
}
:host(.tnw-image--height-full) {
  height: var(--tnw-image-height, 100%);
}
.tnw-image {
  width: 100%;
  height: 100%;
}
.tnw-image__figure {
    width: 100%;
    height: 100%;
    margin: 0;
}
.tnw-image__figure-caption {
    text-align: center;
    margin-top: 5px;
    font-size: var(--tnw-fs-sm);
    font-style: italic;
    font-family: var(--tnw-image-font);
}
`;