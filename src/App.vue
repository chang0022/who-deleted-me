<template>
  <div id="app">
    <img :src="qrCode ? qrCode : require('./assets/logo.png')">
    <router-view/>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      qrCode: ''
    }
  },
  created() {
    Axios.get('/uuid').then(res => {
      console.log(res.data)
      const { UUID } = res.data
      this.qrCode = `https://login.weixin.qq.com/qrcode/${UUID}`
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
