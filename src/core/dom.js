class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  get element() {
    return this.$el;
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
