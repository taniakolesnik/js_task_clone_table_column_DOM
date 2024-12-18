'use strict';

const thead = document.querySelector('thead > tr');
const posTitleColCopy = thead.querySelector('th:nth-child(2)').cloneNode(true);
const lastTitleCol = thead.querySelector('th:last-child');

thead.insertBefore(posTitleColCopy, lastTitleCol);

const rows = document.querySelectorAll('tbody > tr');

rows.forEach((row) => {
  const newCol = row.querySelector('td:nth-child(2)').cloneNode(true);
  const lastCol = row.querySelector('td:last-child');

  row.insertBefore(newCol, lastCol);
});

// thead.tr > new col name
// tbody.tr > new col woith same value as columgn 2
