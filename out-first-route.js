const ObjectID = require('mongodb').ObjectID

async function routes(app, opts) {
  const database = app.mongo.db('store')
  const collection = database.collection('manufacturers')

  app.get('/', async (request, reply) => {
    return { hello: 'fastify' }
  })

  app.get('/manufacturers', async (request, reply) => {
    try {
      const data = await collection.find({}).toArray()
      return data
    } catch (err) {
      request.log.error(err)
      return new Error('Something went wrong')
    }
  })

  app.get('/manufacturers/:id', async (request, reply) => {
    try {
      const id = await collection.findOne({ _id: ObjectID(request.params.id) })
      return id
    } catch (err) {
      request.log.error(err)
      return new Error('Something went wrong')
    }
  })
}

module.exports = routes
