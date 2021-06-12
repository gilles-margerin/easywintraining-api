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
          await fastify.mongoose.Event.findOneAndUpdate({
            _id:req.params.event
          }, {
            name: req.body.name,
            place: req.body.place,
            time: req.body.time,
            description: req.body.description
          }, { new: true })
          res.code(204)
        }
      } catch (err) {
        console.log("Error", err)
        res.status(500).send("Error trying to update document")
      }
    }
  })
  done()
}