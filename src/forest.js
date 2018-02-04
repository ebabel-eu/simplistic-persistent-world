'use strict';

import * as C from './constants';

const treesCounter = document.getElementById('trees-counter');

let trees = parseInt(localStorage[C.STORAGE.TREES_COUNT]) || 12;

const setTrees = (count) => {
  trees = parseInt(count);
  localStorage[C.STORAGE.TREES_COUNT] = trees;
  treesCounter.textContent = trees;
};

const treeDies = (e) => {
  if (trees >= 1) {
    setTrees(trees - 1);
  }

  return trees;
}

const treeBorn = (e) => {
  setTrees(trees + 1);
  return trees;
}

export default () => {
  // Handle custom logic from other modules that may add or kill a tree.
  document.addEventListener(C.EVENTS.FOREST.TREE_DIES, treeDies);
  document.addEventListener(C.EVENTS.FOREST.TREE_BORN, treeBorn);

  // A new tree is born every second.
  document.addEventListener(C.EVENTS.TIMERS.ONE_SECOND, treeBorn);

  setTrees(trees);
};
