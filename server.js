const fastify = require("fastify")({ logger: true });
const { URI, options } = require("./utils/dbConnect");
const Event = require('./models/Event')
const User = require('./models/User')

fastify.register(require("fastify-formbody"));
fastify.register(require('fastify-cors'), {
  origin: '*',
  methods: 'GET,POST,DELETE,OPTIONS'
})

//db connection and config
fastify.register(
  require("fastify-mongoose-driver").plugin,
  {
    uri: URI,
    settings: options,
    models: [
      Event, User
    ],
  },
  (err) => {
    if (err) throw err;
  }
);

//routes
fastify.register(require('./routes/adduser'))
fastify.register(require('./routes/delevent'))
fastify.register(require('./routes/addevent'))
fastify.register(require('./routes/eventlist'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
