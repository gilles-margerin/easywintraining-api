const dateConversion = require("../utils/dateConversion");
const setColor = require("../utils/setColor");

module.exports = function (fastify, options, done) {
  fastify.route({
    method: "POST",
    url: "/api/addevent",
    handler: async (req, res) => {
      const reqDate = dateConversion(new Date(req.body.eventDate));

      try {
        await new fastify.mongoose.Event({
          name: req.body.eventName,
          date: reqDate,
          time: req.body.eventTime,
          place: req.body.eventPlace,
          description: req.body.eventDescription,
          type: req.body.eventType,
          color: setColor(req.body.eventType),
        }).save();
      } catch (err) {
        console.log("Error", err);
        res.status(500).send("Internal server error");
      }
    },
  });
  done();
};
