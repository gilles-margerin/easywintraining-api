const setColor = require("../utils/setColor");

module.exports = function (fastify, options, done) {
  fastify.route({
    method: "POST",
    url: "/api/events",
    schema: {
      body: options.schema,
    },
    handler: async (req, res) => {
      try {
        const user = await fastify.mongoose.User.findById(req.body.user)
        if (user === null || user.isAdmin === false) {
          res.status(403).send('Unauthorized')
        } else {
          await new fastify.mongoose.Event({
            name: req.body.name,
            date: req.body.date,
            time: req.body.time,
            place: req.body.place,
            description: req.body.description,
            type: req.body.type,
            color: setColor(req.body.type),
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
