'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wxConf = wxConf;
function wxConf() {
  var origin = 'https"//wx.qq.com';
  var loginUrl = 'login.weixin.qq.com';
  var fileUrl = 'file.wx.qq.com';
  var pushUrl = 'webpush.weixin.qq.com';

  var conf = {};
  conf.origin = origin;
  conf.baseUri = origin + '/cgi-bin/mmwebwx-bin';
  conf.API_jsLogin = 'https://' + loginUrl + '/jslogin?appid=wx782c26e4c19acffb&fun=new&lang=zh-CN';
  return conf;
}
//# sourceMappingURL=wxConf.js.map