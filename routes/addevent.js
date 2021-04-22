const setColor = require("../utils/setColor");

module.exports = function (fastify, options, done) {
  fastify.route({
    method: "POST",
    url: "/api/events",
    handler: async (req, res) => {
      try {
        const user = await fastify.mongoose.User.findById(req.body.userId)
        if (user === null || user.isAdmin === false) {
          res.status(403).send('Unauthorized')
        } else {
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
        }
      } catch (err) {
        console.log("Error", err);
        res.status(500).send("Internal server error");
      }
    },
  });
  done();
};
