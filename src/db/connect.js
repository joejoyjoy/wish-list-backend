const mongoose = require('mongoose');
const Config = require('../config/config')

const connectDB = () => {
  return mongoose.connect(Config.db.uri)
}

module.exports = connectDB