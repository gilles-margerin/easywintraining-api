module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'DELETE',
    url: '/api/events/:event',
    handler: async (req, res) => {
      try {
        await fastify.mongoose.Event.findOneAndDelete({ _id: req.params.event });
        res.redirect("https://easywintraining-website.vercel.app/calendar");
      } catch (err) {
        console.log("Error", err);
        res.status(500).send("Server error trying to delete document");
      }
    }
  })
  done()
}