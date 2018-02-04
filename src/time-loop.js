'use strict';

import updateTimers from './update-timers';

let lastRender = 0;

const timeLoop = (timestamp) => {
  const delta = timestamp - lastRender;

  // Update various game timers to trigger certain events.
  updateTimers(delta);

  // Paint graphical elements.
  // draw();

  lastRender = timestamp;
  window.requestAnimationFrame(timeLoop);
};

export default timeLoop;
