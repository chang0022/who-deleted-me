const fastify = require('fastify')

const app = fastify({
  logger: true
})

const Wechat = require('../lib')
const wx = new Wechat()

app.get('/uuid', async (request, reply) => {
  try {
    const UUID = await wx.getUUID()
    return { UUID: UUID }
  } catch (err) {
    request.log.error(err)
    return new Error('获取UUID失败')
  }
})
const start = async () => {
  try {
    await app.listen(2333, '0.0.0.0')
    app.log.info('Server is running')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
