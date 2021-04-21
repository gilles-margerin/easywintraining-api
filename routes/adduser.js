module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'POST',
    url: '/api/users',
    handler: async (req, res) => {
      console.log(req.body)
      res.code(204)
    }
  })
  done()
}