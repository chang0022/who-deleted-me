'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wechat = function () {
  function Wechat() {
    _classCallCheck(this, Wechat);

    this.PROP = {
      uuid: ''
    };
    this.CONF = (0, _utils.wxConf)();
  }

  _createClass(Wechat, [{
    key: 'getUUID',
    value: function getUUID() {
      var _this = this;

      return Promise.resolve().then(function () {
        return _axios2.default.post(_this.CONF.API_jsLogin).then(function (res) {
          var window = {
            QRLogin: {}
          };
          console.log(eval(res.data));
          eval(res.data);
          _this.PROP.uuid = window.QRLogin.uuid;
          return window.QRLogin.uuid;
        }).catch(function (err) {
          throw err;
        });
      });
    }
  }]);

  return Wechat;
}();

exports = module.exports = Wechat;
//# sourceMappingURL=index.js.map