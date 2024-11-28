import { createStore } from '@stencil/store';

interface AccordionState {
  expandedItems: { [key: string]: boolean };
}

const { state, onChange } = createStore<AccordionState>({
  expandedItems: {},
});

const setItemExpanded = (itemId: string, expanded: boolean) => {
  state.expandedItems = { ...state.expandedItems, [itemId]: expanded };
};

export { state, setItemExpanded, onChange };