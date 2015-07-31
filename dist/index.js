'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = regeneratorRuntime.mark(function callee$0$0() {
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!true) {
          context$1$0.next = 5;
          break;
        }

        context$1$0.next = 3;
        return '#' + Math.floor(Math.random() * 16777215).toString(16);

      case 3:
        context$1$0.next = 0;
        break;

      case 5:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this);
});
;
module.exports = exports['default'];

// yield a random color