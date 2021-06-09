import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from '@/components/table/table.func';
import { resizeHandler } from '@/components/table/table.resize';

export class Table extends ExcelComponent {
  static classNames = ['excel__table'];

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    });
  }

  onMousedown(event) {
    resizeHandler.call(this, event);
  }

  toHTML() {
    return createTable();
  }
}
