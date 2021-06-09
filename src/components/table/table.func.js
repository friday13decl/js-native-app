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
  return `
    <div class="column" data-resizable="true" data-col="${index}">
      ${String.fromCharCode(CODES.A + index)}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createCells(rowIndex, count) {
  return new Array(count)
      .fill('')
      .map(createCell.bind(null, rowIndex))
      .join('');
}

function createCell(rowIndex, _, colIndex) {
  return `<div class="cell" contenteditable data-col="${colIndex}">
    ${String.fromCharCode(CODES.A + colIndex)}${rowIndex + 1}
  </div>`;
}

function createRow(index, content) {
  return `
    <div class="row" data-resizable="true">
      <div class="row-info">
        ${index || ''}
        ${index && '<div class="row-resize" data-resize="row"></div>' || ''}
      </div>
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
