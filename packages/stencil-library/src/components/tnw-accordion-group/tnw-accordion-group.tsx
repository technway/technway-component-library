import { Component, Element, Host, h, Listen, Prop } from '@stencil/core';
import { state } from '../../stores/accordion-store';
import { validateProps } from './utils/tnw-accordion-group-validate-props';

/**
 * The `tnw-accordion-group` component serves as a container for multiple `tnw-accordion` components.
 * It supports a single-expand mode, where only one accordion item can be expanded at a time.
 * This component listens for `accordionToggle` events emitted by its child `tnw-accordion` components,
 * and handles the state updates accordingly.
 * 
 * @slot - Default slot for `tnw-accordion` components.
 */
@Component({
  tag: 'tnw-accordion-group',
  shadow: true,
})
export class TnwAccordionGroup {
  @Element() el!: HTMLTnwAccordionGroupElement;

  /**
   * Whether to expand only one accordion item at a time.
   */
  @Prop() singleExpand?: boolean = false;

  componentWillLoad() {
    const propsValues = [this.singleExpand];
    validateProps(propsValues);
  }

  /**
   * Handles the `accordionToggle` event triggered by child components.
   */
  @Listen('accordionToggled')
  handleToggleEvent(event: CustomEvent<{ id: string, expanded: boolean }>) {
    const { id: accordionId, expanded } = event.detail;

    if (this.singleExpand) {
      // Collapse all other accordion items and toggle the clicked one
      const updatedState = { ...state.expandedItems };
      Object.keys(updatedState).forEach((key) => {
        updatedState[key] = key === accordionId ? expanded : false;
      });
      state.expandedItems = updatedState;
    } else {
      // Toggle only the current accordion item
      state.expandedItems = {
        ...state.expandedItems,
        [accordionId]: expanded,
      };
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
