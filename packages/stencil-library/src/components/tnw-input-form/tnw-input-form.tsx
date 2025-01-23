import { Component, Host, h, Element } from '@stencil/core';
import {
  extendedAppearanceStyleSheet,
  fontFamilyStyleSheet,
  appearanceColorSheet,
  borderRadiusStyleSheet
} from '../../utils/shared-styles';
import { isAdoptedStyleSheetsSupported } from '../../utils/utils';

@Component({
  tag: 'tnw-input-form',
  shadow: true,
})
export class TnwInputForm {
  @Element() el: HTMLTnwInputFormElement;

  connectedCallback() {
    if (this.el.shadowRoot && isAdoptedStyleSheetsSupported()) {
      (this.el.shadowRoot as any).adoptedStyleSheets = [
        extendedAppearanceStyleSheet,
        appearanceColorSheet,
        borderRadiusStyleSheet,
        fontFamilyStyleSheet,
      ];
    }
  }

  render() {
    return (
      <Host>
        <tnw-button
          label="Submit"
          borderRadius="full"
          appearance='solid'
          appearanceColor='primary'
          hoverEffect='contrast'
          part='button'
        />
        <tnw-text text="Some text here" color='primary' size='xl' />
        <tnw-image src="https://picsum.photos/200/300" alt="Some image" objectFit='cover' height='100px' width='800px' />
        <tnw-badge label="Some label" appearanceColor='primary' appearance='solid' />
      </Host>
    );
  }
}
