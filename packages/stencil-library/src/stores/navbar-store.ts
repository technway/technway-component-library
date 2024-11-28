import { createStore } from '@stencil/store';

interface NavbarState {
  hideBelowBreakpoint: "1024" | "767";
  isMenuOpened: boolean;
}

const { state, onChange } = createStore<NavbarState>({
  hideBelowBreakpoint: "767",  // default
  isMenuOpened: false,
});

export { state, onChange };
