module.exports = {
  type: 'object',
  required: [
    'eventName',
    'eventDate',
    'eventTime',
    'eventPlace',
    'eventDescription',
    'eventType',
    'eventColor'
  ],
  properties: {
    eventName: { type: 'string' },
    eventDate: { type: 'string' },
    eventTime: { type: 'string' },
    eventPlace: { type: 'string' },
    eventDescription: { type: 'string' },
    eventType: { type: 'string' },
    eventColor: { type: 'string' },
  }
}