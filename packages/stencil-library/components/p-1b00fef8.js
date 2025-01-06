/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { c as createStore } from './p-8a7995fd.js';

const { state, onChange } = createStore({
    expandedItems: {},
});
const setItemExpanded = (itemId, expanded) => {
    state.expandedItems = Object.assign(Object.assign({}, state.expandedItems), { [itemId]: expanded });
};

export { state as a, setItemExpanded as s };

//# sourceMappingURL=p-1b00fef8.js.map