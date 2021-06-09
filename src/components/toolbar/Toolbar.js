import { ExcelComponent } from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static classNames = ['excel__toolbar'];

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  onClick(event) {
    if (event.target.textContent === 'format_align_left') {
      console.log('Go left');
    }
  }


  toHTML() {
    return `
    <div class="button">
            <i class="material-icons">format_align_left</i>
          </div>
          <div class="button">
            <i class="material-icons">format_align_center</i>
          </div>
          <div class="button">
            <i class="material-icons">format_align_right</i>
          </div>
          <div class="button">
            <i class="material-icons">format_bold</i>
          </div>
          <div class="button">
            <i class="material-icons">format_italic</i>
          </div>
          <div class="button">
            <i class="material-icons">format_underlined</i>
          </div>
    `;
  }
}
