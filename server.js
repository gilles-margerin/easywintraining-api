const fastify = require('fastify')({ logger: true })

fastify.post('/api/addevent', async (req, res) => {
  return { req: req.body }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()