module.exports = {
  type: 'object',
  required: [
    'name',
    'date',
    'time',
    'place',
    'description',
    'type',
  ],
  properties: {
    name: { type: 'string' },
    date: { type: 'string' },
    time: { type: 'string' },
    place: { type: 'string' },
    description: { type: 'string' },
    type: { type: 'string' },
  }
}