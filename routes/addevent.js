const dateConversion = require("../utils/dateConversion");
const setColor = require("../utils/setColor");

module.exports = function (fastify, options, done) {
  fastify.route({
    method: "POST",
    url: "/api/events",
    preValidation: async(req, res, done) => {
      console.log(req.body.userId)
      done()
    },
    handler: async (req, res) => {
      try {
        await new fastify.mongoose.Event({
          name: req.body.eventName,
          date: req.body.eventDate,
          time: req.body.eventTime,
          place: req.body.eventPlace,
          description: req.body.eventDescription,
          type: req.body.eventType,
          color: setColor(req.body.eventType),
        }).save();
        res.code(204)
      } catch (err) {
        console.log("Error", err);
        res.status(500).send("Internal server error");
      }
    },
  });
  done();
};
