const fastifyPlugin = require('fastify-plugin')
const MongoClient = require('mongodb').MongoClient

async function dbConnector(app, opts) {
  const url = opts.url
  delete opts.url

  try {
    const db = await MongoClient.connect(url, opts)
  } catch (err) {
    app.log.error(err)
    return new Error('Something went wrong')
  }

  app.decorate('mongo', db)
}

module.exports = fastifyPlugin(dbConnector)
