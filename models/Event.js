const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  time: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  color: String
})

module.exports = mongoose.models['Event'] || mongoose.model('Event', EventSchema)