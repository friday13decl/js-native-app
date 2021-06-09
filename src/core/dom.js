class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  get element() {
    return this.$el;
  }

  get data() {
    return this.$el.dataset;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  append(node) {
    this.$el.append(node instanceof Dom ? node.element : node);
    return this;
  }

  on(eventName, callback) {
    this.$el.addEventListener(eventName, callback);
  }

  off(eventName, callback) {
    this.$el.removeEventListener(eventName, callback);
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  css(styles = {}) {
    Object.entries(styles).forEach(([k, v]) => this.$el.style[k] = v);
  }

  addClass(cssClass) {
    this.$el.classList.add(cssClass);
  }

  removeClass(cssClass) {
    this.$el.classList.remove(cssClass);
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  clear() {
    return this.html('');
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = []) => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
