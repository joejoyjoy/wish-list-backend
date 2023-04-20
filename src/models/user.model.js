const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a user name"]
  },
  email: {
    type: String,
    required: [true, "Please provide a email"]
  },
  picture: {
    type: String,
    required: [true, "Please provide a picture"]
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Todo"
    }
  ]
})

const UserModel = model('User', UserSchema)

module.exports = UserModel;