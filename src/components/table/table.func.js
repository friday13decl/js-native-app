const CODES = {
  A: 65,
  Z: 90,
  last: 91
};

function createColumns(count) {
  return new Array(count)
      .fill('')
      .map(createColumn)
      .join('');
}

function createColumn(_, index) {
  return `<div class="column">${String.fromCharCode(CODES.A + index)}</div>`;
}

function createCells(rowIndex, count) {
  return new Array(count)
      .fill('')
      .map(createCell.bind(null, rowIndex))
      .join('');
}

function createCell(rowIndex, _, colIndex) {
  return `<div class="cell" contenteditable>
    ${String.fromCharCode(CODES.A + colIndex)}${rowIndex + 1}
  </div>`;
}

function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index || ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.last - CODES.A;
  const rows = [createRow(null, createColumns(colsCount))];

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, createCells(i, colsCount)));
  }

  return rows.join('');
}
