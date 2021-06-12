module.exports = function (fastify, options, done) {
  fastify.route({
    method: "PUT",
    url: "/api/events/:event",
    handler: async (req, res) => {
      try {
        const user = await fastify.mongoose.User.findById(req.body.user)
        if (user === null || user.isAdmin === false) {
          res.status(403).send('Unauthorized')
        } else {
          console.log(req.body.update)
          res.code(204).send({
            name: req.body.name,
            place: req.body.place,
            time: req.body.time,
            description: req.body.description
          })
        }
      } catch (err) {
        console.log("Error", err)
        res.status(500).send("Error trying to update document")
      }
    }
  })
  done()
}