'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxConf = require('./wxConf');

Object.keys(_wxConf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wxConf[key];
    }
  });
});
//# sourceMappingURL=index.js.map