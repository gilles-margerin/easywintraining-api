const fastify = require('fastify')({ logger: true })

fastify.get('/', async (req, res) => {
  res.send('hello world')
})

fastify.post('/api/addevent', async (req, res) => {
  const payload = await req.body
  console.log(payload)
  res.send('post received')
})

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()