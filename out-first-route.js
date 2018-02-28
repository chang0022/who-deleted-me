async function routes(app, opts) {
  const database = app.mongo.db('store')
  const collection = database.collection('manufacturers')

  app.get('/', async (request, reply) => {
    return { hello: 'fastify' }
  })

  app.get('/manufacturers', async (request, reply) => {
    try {
      return await collection.findAll()
    } catch (err) {
      request.log.error(err)
      return new Error('Something went wrong')
    }
  })
}

module.exports = routes
