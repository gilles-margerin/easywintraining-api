module.exports = {
  params: {
    type: 'object',
    required: ['event'],
    properties: {
      event: { type: 'string' }
    }
  },
  body: {
    type: 'object',
    required: [
      'name',
      'place',
      'time',
      'description'
    ],
    properties: {
      name: { type: 'string' },
      place: { type: 'string' },
      time: { type: 'string' },
      description: { type: 'string' }
    }
  }
}