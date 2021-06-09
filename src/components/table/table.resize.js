import { $ } from '@core/dom';

export function resizeHandler(event) {
  const $resizer = $(event.target);
  const type = $resizer.data.resize;

  if (!type) return;

  const resizingObj = $resizer.closest('[data-resizable="true"]');

  $resizer.addClass('dragged');

  if (type === 'col') {
    document.body.onmousemove = e =>
      $resizer.css({ right: `${resizingObj.getCoords().right - e.clientX}px` });
  } else if (type === 'row') {
    document.body.onmousemove = e =>
      $resizer.css({ bottom: `${resizingObj.getCoords().bottom - e.clientY}px` });
  }

  document.body.onmouseup = e => {
    document.body.onmousemove = null;
    if (type === 'col') {
      const cells = this.$root.findAll(`[data-col="${resizingObj.data.col}"]`);
      cells.forEach(el => $(el).css({ width: `${e.clientX - resizingObj.getCoords().x}px` }));
      $resizer.css({ right: 0 });
    } else if (type === 'row') {
      resizingObj.css({ height: `${e.clientY - resizingObj.getCoords().y}px` });
      $resizer.css({ bottom: 0 });
    }
    $resizer.removeClass('dragged');
    document.body.onmouseup = null;
  };
}
