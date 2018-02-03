'use strict';

import foo from './foo.js';

// const worker = new Worker('sketchy.js', {type:'module'});

const game = () => {
  console.log(foo);
};

game();
