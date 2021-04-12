const fastify = require("fastify")({ logger: true });
const { URI, options } = require("./utils/dbConnect");
const dateConversion = require("./utils/dateConversion");
const setColor = require("./utils/setColor");
const Event = require('./models/Event')

fastify.register(require("fastify-formbody"));

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


/* 
fastify.post("/api/addevent", async (req, res) => {
  const reqDate = dateConversion(new Date(req.body.eventDate));

  try {
    await new Event({
      name: req.body.eventName,
      date: reqDate,
      time: req.body.eventTime,
      place: req.body.eventPlace,
      description: req.body.eventDescription,
      type: req.body.eventType,
      color: setColor(req.body.eventType),
    }).save();

    res.redirect("https://easywintraining-website.vercel.app/calendar");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}); */

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
