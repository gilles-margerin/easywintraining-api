const fastify = require("fastify")({ logger: true });
const { URI, options } = require("./utils/dbConnect");
const Event = require('./models/Event')

fastify.register(require("fastify-formbody"));
fastify.register(require('fastify-cors')({
  origin: true
}))

//db connection and config
fastify.register(
  require("fastify-mongoose-driver").plugin,
  {
    uri: URI,
    settings: options,
    models: [
      Event,
    ],
  },
  (err) => {
    if (err) throw err;
  }
);

//routes
fastify.register(require('./routes/eventlist'))
fastify.register(require('./routes/delevent'))
fastify.register(require('./routes/addevent'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
