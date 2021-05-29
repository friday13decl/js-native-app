import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from '@/components/table/table.func';

export class Table extends ExcelComponent {
  static classNames = ['excel__table'];

  toHTML() {
    return createTable();
  }
}
