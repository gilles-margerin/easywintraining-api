module.exports = function (fastify, options, done) {
  fastify.route({
    method: "PUT",
    url: "/api/events",
    handler: async (res, res) => {
      try {
        const user = await fastify.mongoose.User.findById(req.body.userId)
        if (user === null || user.isAdmin === false) {
          res.status(403).send('Unauthorized')
        } else {
          console.log(req.body.update)
          res.code(204).send(req.body.update)
        }
      } catch (err) {
        console.log("Error", err)
        res.status(500).send("Internal server error")
      }
    }
  })
}