const fastify = require('fastify')({ logger: true })
const { dateConversion, dbConnect, setColor } = require('./utils')
const Event = require('./models/Event')

fastify.register(require('fastify-formbody'))

await dbConnect()

fastify.get('/', async (req, res) => {
  res.send('hello world')
})

fastify.post('/api/addevent', async (req, res) => {
  const reqDate = dateConversion(new Date(req.body.eventDate))

  try {
    await new Event({
      name: req.body.eventName,
      date: reqDate,
      time: req.body.eventTime,
      place: req.body.eventPlace,
      description: req.body.eventDescription,
      type: req.body.eventType,
      color: setColor(req.body.eventType)
    }).save()

    res.redirect('https://vercel.com/gilles-margerin/easywintraining-website/calendar')
  } catch (err) {
    console.log(err)
    res.status(500).send('Internal server error')
  }
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