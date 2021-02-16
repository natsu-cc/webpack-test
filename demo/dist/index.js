
    (function(modules) {
      function require(fileName) {
        const fn = modules[fileName];

        const module = { exports : {} };

        fn(require, module, module.exports);

        return module.exports;
      }

      require('./demo/src/index.js');
    })({'./demo/src/index.js': function (require, module, exports) { "use strict";

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils2.default)(); /**
                         * @user natsu
                         * @author natsu
                         * Date: 2021/2/14
                         */ },'./utils': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var print = function print() {
  console.log(_config2.default.author);
  console.log('简易webpack测试成功~');
}; /**
    * @user natsu
    * @author natsu
    * Date: 2021/2/14
    */
exports.default = print; },'./config': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @user natsu
 * @author natsu
 * Date: 2021/2/14
 */
var config = {
  author: 'natsu'
};

exports.default = config; },})
  