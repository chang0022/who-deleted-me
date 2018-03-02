import Axios from 'axios'
import { wxConf } from './utils'

class Wechat {
  constructor() {
    this.PROP = {
      uuid: ''
    }
    this.CONF = wxConf()
  }

  getUUID() {
    return Promise.resolve().then(() => {
      return Axios.post(this.CONF.API_jsLogin)
        .then(res => {
          let window = {
            QRLogin: {}
          }
          console.log(eval(res.data))
          eval(res.data)
          this.PROP.uuid = window.QRLogin.uuid
          return window.QRLogin.uuid
        })
        .catch(err => {
          throw err
        })
    })
  }
}

exports = module.exports = Wechat
