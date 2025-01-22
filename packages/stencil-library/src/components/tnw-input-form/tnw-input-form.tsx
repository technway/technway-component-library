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
    if (isAdoptedStyleSheetsSupported()) {
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
      </Host>
    );
  }
}
