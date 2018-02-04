'use strict';

import * as C from './constants';

const gameCanvas = document.getElementById('game-canvas');
const gameContext = gameCanvas.getContext('2d');

let trees = localStorage[C.STORAGE.TREES] && JSON.parse(localStorage[C.STORAGE.TREES]) || [];

const addTree = (newTree) => {
  trees.push(newTree);
  localStorage[C.STORAGE.TREES] = JSON.stringify(trees);
};

const paintTree = (tree) => {
  gameContext.drawImage(document.getElementById('pine-tree-png'), tree[0], tree[1], 32, 16);
}

const treeDies = (e) => {
  if (trees.length > C.FOREST.TREE.MIN) {
    // todo: remove the tree that died.
  }

  return trees;
}

const treeBorn = (e) => {
  if (trees.length <= C.FOREST.TREE.MAX) {
    const newTree = [Math.round(Math.random() * 250), Math.round(Math.random() * 100)];
    addTree(newTree);
    paintTree(newTree);
  }

  return trees;
}

export default () => {
  // Handle custom logic from other modules that may add or kill a tree.
  document.addEventListener(C.EVENTS.FOREST.TREE_DIES, treeDies);
  document.addEventListener(C.EVENTS.FOREST.TREE_BORN, treeBorn);

  // A new tree is born every second.
  document.addEventListener(C.EVENTS.TIMERS.ONE_SECOND, treeBorn);

  // Display all the current trees.
  trees.map((tree) => {
    paintTree(tree);
  });
};
