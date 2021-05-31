module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'POST',
    url: '/api/users',
    schema: {
      body: options.schema
    },
    handler: async (req, res) => {
      try {
        await new fastify.mongoose.User({
          name: req.body.name,
          email: req.body.email,
          providerId: req.body.providerId,
          isAdmin: false
        }).save();
        res.code(204)
      } catch (err) {
        console.log("Error creating user", err)
        res.status(500).send('Internal server error')
      }
    }
  })
  done()
}