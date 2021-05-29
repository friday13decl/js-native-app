import { capitalize } from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root provided for DomListener!');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  addDomListeners() {
    this.listeners.forEach(listener => {
      const fnName = getFnName(listener);
      if (!this[fnName]) {
        throw new Error(`Method ${fnName} is not implemented in ${this.name} component`);
      }
      this[fnName] = this[fnName].bind(this);
      this.$root.on(listener, this[fnName]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const fnName = getFnName(listener);
      this.$root.off(listener, this[fnName]);
    });
  }
}

function getFnName(name) {
  return 'on' + capitalize(name);
}
