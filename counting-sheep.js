'use strict';

function countSheep(count) {
  if (count === 0) {
    return;
  }

  console.log(`${count} - Another sheep jump over the fence`); // eslint-disable-line no-console
  countSheep(count - 1);
}

countSheep(3);
