'use strict';

import * as C from './constants';

let oneSecondDelta = 0;
let oneMinuteDelta = 0;
let oneHourDelta = 0;

const oneSecond = new Event(C.EVENTS.TIMERS.ONE_SECOND);
const oneMinute = new Event(C.EVENTS.TIMERS.ONE_MINUTE);
const oneHour = new Event(C.EVENTS.TIMERS.ONE_HOUR);

// Generic timers, so that any module can listen for a timer that beats once per second, per minute and per hour.
const updateTimers = (delta) => {
  if (oneSecondDelta + delta >= C.MILLI_SECONDS.SECOND) {
    oneSecondDelta = 0;
    document.dispatchEvent(oneSecond);
  } else {
    oneSecondDelta += delta;
  }

  if (oneMinuteDelta + delta >= C.MILLI_SECONDS.MINUTE) {
    oneMinuteDelta = 0;
    document.dispatchEvent(oneMinute);
  } else {
    oneMinuteDelta += delta;
  }

  if (oneHourDelta + delta >= C.MILLI_SECONDS.HOUR) {
    oneHourDelta = 0;
    document.dispatchEvent(oneHour);
  } else {
    oneHourDelta += delta;
  }
};

export default updateTimers;
