import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static classNames = ['excel__formula'];

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  onInput(event) {
    console.log('Formual on input', event);
  }

  toHTML() {
    return `<div class="info">fx</div>
          <div class="input" contenteditable spellcheck="false"></div>`;
  }
}
