// Fetch a resource on the web asynchronously.
export const get = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  });
};

// Register the service worker.
export default () => {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker
      .register('./service-worker.js', {
        scope: './'
      })
      .then((registration) => {
        console.log(`Service Worker Registered: ${registration}`);
      })
      .catch((err) => {
        throw new Error(`Service Worker Failed to Register: ${err}`);
      });
  }

  throw new Error('This browser does not support Service Workers.');
};