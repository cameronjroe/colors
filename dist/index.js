'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libColorsJson = require('./lib/colors.json');

var _libColorsJson2 = _interopRequireDefault(_libColorsJson);

var colors = {

  data: _libColorsJson2['default'].more,

  colorGen: regeneratorRuntime.mark(function colorGen() {
    var colors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, color;

    return regeneratorRuntime.wrap(function colorGen$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          colors = this.data.split(',');
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          context$1$0.prev = 4;
          _iterator = colors[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            context$1$0.next = 13;
            break;
          }

          color = _step.value;
          context$1$0.next = 10;
          return color;

        case 10:
          _iteratorNormalCompletion = true;
          context$1$0.next = 6;
          break;

        case 13:
          context$1$0.next = 19;
          break;

        case 15:
          context$1$0.prev = 15;
          context$1$0.t0 = context$1$0['catch'](4);
          _didIteratorError = true;
          _iteratorError = context$1$0.t0;

        case 19:
          context$1$0.prev = 19;
          context$1$0.prev = 20;

          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }

        case 22:
          context$1$0.prev = 22;

          if (!_didIteratorError) {
            context$1$0.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return context$1$0.finish(22);

        case 26:
          return context$1$0.finish(19);

        case 27:
        case 'end':
          return context$1$0.stop();
      }
    }, colorGen, this, [[4, 15, 19, 27], [20,, 22, 26]]);
  })

};

exports['default'] = colors;
module.exports = exports['default'];