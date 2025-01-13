/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { c as createStore } from './p-e110a9f4.js';

const { state, onChange } = createStore({
    expandedItems: {},
});
const setItemExpanded = (itemId, expanded) => {
    state.expandedItems = Object.assign(Object.assign({}, state.expandedItems), { [itemId]: expanded });
};

export { state as a, setItemExpanded as s };

//# sourceMappingURL=p-aa2f3b33.js.map