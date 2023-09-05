module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'POST',
    url: '/api/users',
    schema: {
      body: options.schema
    },
    handler: async (req, res) => {
      try {
        const isExistingUser = await fastify.mongoose.User.findOne({
          email: req.body.email
        })
        if (isExistingUser) {
          return res.code(409).send('User already exists')
        }
        await new fastify.mongoose.User({
          name: req.body.name,
          email: req.body.email,
          providerId: req.body.providerId,
          isAdmin: false
        }).save();
        res.code(204).send('User created')
      } catch (err) {
        console.log("Error creating user", err)
        res.status(500).send('Internal server error')
      }
    }
  })
  done()
}