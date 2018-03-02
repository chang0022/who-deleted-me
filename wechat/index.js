import Axios from 'axios'
import { wxConf } from './utils'

class Wechat {
  constructor() {
    this.CONF = wxConf()
  }

  getUUID() {
    Axios.post(this.CONF.API_jsLogin).then(res => {
      console.log(res.data)
    })
  }
}

exports = module.exports = Wechat
