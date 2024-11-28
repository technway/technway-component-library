import { addons } from '@storybook/manager-api';
import '../dist/components-lib/components-lib.css';
import customTheme from './custom-theme';
import './custom-theme.css';

addons.setConfig({
  navSize: 250,
  bottomPanelHeight: 350,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: customTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    const sidebarContainer = document.querySelector('.sidebar-container');
    if (sidebarContainer) {
      const sidebarParent = sidebarContainer.parentElement;
      if (sidebarParent) {
        sidebarParent.classList.add('sb-sidebar-custom');
        observer.disconnect();
      }
    }
  });
});

// Start observing the document for added nodes
observer.observe(document.body, { childList: true, subtree: true });