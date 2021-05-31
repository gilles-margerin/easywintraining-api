module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'DELETE',
    url: '/api/events/:event',
    schema: {
      params: options.schema
    }, 
    handler: async (req, res) => {
      try {
        const user = await fastify.mongoose.User.findById(req.body.userId)
        if (user === null || user.isAdmin === false) {
          res.status(403).send('Unauthorized')
        } else {
          await fastify.mongoose.Event.findOneAndDelete({ _id: req.params.event });
          res.code(204)
        }
      } catch (err) {
        console.log("Error", err);
        res.status(500).send("Server error trying to delete document");
      }
    }
  })
  done()
}