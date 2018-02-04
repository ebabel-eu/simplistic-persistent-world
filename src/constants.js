'use strict';

export const EVENTS = {
  FOREST: {
    TREE_DIES: 'tree-dies',
    TREE_BORN: 'tree-born',
  },
  TIMERS: {
    ONE_SECOND: 'one-second',
    ONE_MINUTE: 'one-minute',
    ONE_HOUR: 'one-hour',
  },
};

export const MILLI_SECONDS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
};

export const STORAGE = {
  TREES_COUNT: 'trees-count',
};
