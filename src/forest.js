'use strict';

import * as C from './constants';

const treesCounter = document.getElementById('trees-counter');

let trees = localStorage[C.STORAGE.TREES_COUNT] || 12;

const setTrees = (count) => {
  trees = count;
  localStorage[C.STORAGE.TREES_COUNT] = count;
  treesCounter.textContent = trees;
};

const treeDies = () => {
  if (trees >= 1) {
    setTrees(trees - 1);
  }

  return trees;
}

const treeBorn = () => {
  setTrees(trees + 1);
  return trees;
}

export default (document) => {
  document.addEventListener(C.EVENTS.FOREST.TREE_DIES, treeDies);
  document.addEventListener(C.EVENTS.FOREST.TREE_BORN, treeBorn);
};
