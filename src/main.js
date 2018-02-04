'use strict';

import * as C from './constants';
import serviceWorkerRegistration from './service-worker-registration';
import forest from './forest';

const game = () => {
  const mainStatus = document.getElementById('main-status');

  serviceWorkerRegistration().then(
    () => {
      mainStatus.textContent = 'game is ready to play';

      // Initialize the world.
      forest(document);

      // Kill a tree.
      const treeDies = new Event(C.EVENTS.FOREST.TREE_DIES);
      document.dispatchEvent(treeDies);
    }, () => {
      mainStatus.textContent = 'game failed to start';
    });
};

game();