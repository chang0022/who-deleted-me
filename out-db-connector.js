const fastifyPlugin = require('fastify-plugin')
const MongoClient = require('mongodb').MongoClient

async function dbConnector(app, opts) {
  const url = opts.url
  delete opts.url

  try {
    const db = await MongoClient.connect(url, opts)
    app.decorate('mongo', db)
  } catch (err) {
    app.log.error(err)
    return new Error('Something went wrong')
  }
}

module.exports = fastifyPlugin(dbConnector)
