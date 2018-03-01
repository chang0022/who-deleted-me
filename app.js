const fastify = require('fastify')
const db = require('./out-db-connector')
const route = require('./out-first-route')

const app = fastify()

app.register(db, {
  url: 'mongodb://neo:chang123@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=admin'
})

app.register(route)

const start = async () => {
  try {
    await app.listen(2333, '0.0.0.0')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
