'use strict';

// Register the service worker.
export default () => {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker
      .register('./service-worker.js', {
        scope: './'
      })
      .then((registration) => {
        console.log('Service Worker is registered.');
      })
      .catch((err) => {
        throw new Error('Service Worker failed to register', err);
      });
  }

  throw new Error('This browser does not support Service Workers.');
};