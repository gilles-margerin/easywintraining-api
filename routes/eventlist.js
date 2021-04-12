module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'GET',
    url:'/api/eventlist',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            events: { type: 'array' }
          }
        }
      }
    },
    handler: async (req, res) => {
      try {
        const result = await fastify.mongoose.Event.find({});
        res.send({
          events: result,
        });
      } catch (err) {
        console.log(err);
      }
    }
  })
  done()
};
