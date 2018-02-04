'use strict';

import * as C from './constants';
import serviceWorkerRegistration from './service-worker-registration';
import initializeWorld from './initialize-world';
import timeLoop from './time-loop';

const game = () => {
  const errorStatus = document.getElementById('error-status');

  serviceWorkerRegistration().then(
    () => {
      initializeWorld();

      // Last line of this scope: initialize the loop.
      window.requestAnimationFrame(timeLoop);
    }, () => {
      errorStatus.textContent = 'game failed to start';
    });
};

game();