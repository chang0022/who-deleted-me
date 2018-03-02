const fastify = require('fastify')

const app = fastify({
  logger: true
})

const Wechat = require('../lib')
const wx = new Wechat()
console.log(wx.getUUID())
app.get('/uuid', async (request, reply) => {
  try {
    request.log.info('Some info about the current request')
    return {}
  } catch (err) {
    request.log.error(err)
    return new Error('Get UUID went wrong')
  }
})
const start = async () => {
  try {
    await app.listen(2333)
    app.log.info('Server is running')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
