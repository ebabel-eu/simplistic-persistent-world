'use strict';

import serviceWorkerRegistration, { get } from './service-worker-registration';

const game = () => {
  serviceWorkerRegistration().then(
    (result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
};

game();