module.exports = {
  type: 'object',
  required: [
    'name',
    'email',
    'providerId'
  ],
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    providerId: { type: ['number', 'string'] },
  }
}
