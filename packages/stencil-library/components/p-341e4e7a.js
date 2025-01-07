/*!
 * Built with Stencil
 * Copyright (c) Tecchnway.biz.
 */
import { c as createStore } from './p-c039142c.js';

const { state, onChange } = createStore({
    expandedItems: {},
});
const setItemExpanded = (itemId, expanded) => {
    state.expandedItems = Object.assign(Object.assign({}, state.expandedItems), { [itemId]: expanded });
};

export { state as a, setItemExpanded as s };

//# sourceMappingURL=p-341e4e7a.js.map