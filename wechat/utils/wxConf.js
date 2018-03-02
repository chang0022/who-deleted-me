export function wxConf() {
  let origin = 'https"//wx.qq.com'
  let loginUrl = 'login.weixin.qq.com'
  let fileUrl = 'file.wx.qq.com'
  let pushUrl = 'webpush.weixin.qq.com'

  let conf = {}
  conf.origin = origin
  conf.baseUri = origin + '/cgi-bin/mmwebwx-bin'
  conf.API_jsLogin = 'https://' + loginUrl + '/jslogin?appid=wx782c26e4c19acffb&fun=new&lang=zh-CN'
  return conf
}
