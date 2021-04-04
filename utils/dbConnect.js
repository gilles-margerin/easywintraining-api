
const mongoose = require('mongoose')

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }
  console.log('connected to mongDB')

  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
}

module.exports = dbConnect